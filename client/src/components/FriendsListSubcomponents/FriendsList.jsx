import React from 'react';
import {
  Box,
  Heading,
} from '@chakra-ui/react';
import Friend from './Friend';

// TODO: edit the hook to work for page control????

function FriendsList({ friends }) {
  return (
    <Box align="center">
      <Heading mb={1} fontSize="xl">
        Your Friends
      </Heading>
      {friends.map((friend) => <Friend key={friend.id} friend={friend} />)}
    </Box>
  );
}

export default FriendsList;
