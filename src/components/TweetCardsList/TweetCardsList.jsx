import { useEffect, useState } from 'react';
import { getUsers, patchAddFollowers, patchRemoveFollowers,  } from '../../services/api';
import TweetCard from '../TweetCard/TweetCard';
import { Cards } from './TweetCardsList.styled';

const TweetCardsList = ({ selectedValue }) => {
  const [users, setUsers] = useState([]);
  const [idx, setIdx] = useState(3);
  const [followedUsersIds, setFollowedUsersIds] = useState(
    JSON.parse(localStorage.getItem('followedUsersIds')) || []
  );
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  useEffect(() => {
    if (selectedValue === 'default') {
      setSelectedUsers(users);
    } else if (selectedValue === 'following') {
      const filteredUsers = users.filter(user =>
        followedUsersIds.includes(user.id)
      );
      setSelectedUsers(filteredUsers);
    } else if (selectedValue === 'follow') {
      const filteredUsers = users.filter(
        user => !followedUsersIds.includes(user.id)
      );
      setSelectedUsers(filteredUsers);
    }
  }, [selectedValue, users, followedUsersIds]);

  const shownUsers = selectedUsers.slice(0, idx);

  function loadMore() {
    setIdx(idx + 3);
  }

  function toFollow(user) {
    const updatedFollowedUsers = [...followedUsersIds, user.id];
    setFollowedUsersIds(updatedFollowedUsers);
    localStorage.setItem(
      'followedUsersIds',
      JSON.stringify(updatedFollowedUsers)
    );
    async function increase(user) {
      try {
        const updatedUser = await patchAddFollowers(user);
        updateUser(updatedUser.id, { followers: updatedUser.followers });
      } catch (error) {
        console.log(error);
      }
    }
    increase(user);
  }

  function unFollow(user) {
    const updatedFollowedUsers = followedUsersIds.filter(id => id !== user.id);
    setFollowedUsersIds(updatedFollowedUsers);
    localStorage.setItem(
      'followedUsersIds',
      JSON.stringify(updatedFollowedUsers)
    );
    async function decrease(user) {
      try {
        const updatedUser = await patchRemoveFollowers(user);
        updateUser(updatedUser.id, { followers: updatedUser.followers });
      } catch (error) {
        console.log(error);
      }
    }
    decrease(user);
  }

  function updateUser(id, newProps) {
    setUsers(users => {
      return users.map(user => {
        if (user.id === id) {
          return { ...user, ...newProps };
        } else {
          return user;
        }
      });
    });
  }

  return (
    <>
      {selectedUsers.length ? (
        <Cards>
          {shownUsers.map(user => (
            <TweetCard
              key={user.id}
              user={user}
              follow={toFollow}
              unfollow={unFollow}
              followedUsers={followedUsersIds}
            />
          ))}
        </Cards>
      ) : (
        <>
          <p>No data...</p>
        </>
      )}
      {shownUsers.length < selectedUsers?.length && (
        <button type="button"  onClick={loadMore}>
          Load More
        </button>
      )}
    </>
  );
};

export default TweetCardsList;