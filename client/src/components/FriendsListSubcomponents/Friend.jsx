import React from 'react';
import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  HStack,
} from '@chakra-ui/react';
import { UseContextAll } from '../ContextAll';

function onInvite(e) {
  console.log('invited friend: ', e);
}

function Friend({ friend, page }) {
  console.log(friend);

  return (
    <Box
      boxShadow="sm"
      rounded="lg"
      mb={1}
      borderWidth="1px"
    >
      <HStack justifyContent="space-between" p={1}>
        <Flex justifyContent="left">
          <Image
            borderRadius="full"
            boxSize="80px"
            src={friend.picture}
            alt={friend.firstname}
            p={1}
          />
          <Box p={1} align="left">
            <Text>
              {`${friend.firstname} ${friend.lastname} `}
            </Text>
          </Box>
        </Flex>
        { page === 'group'
          && (
          <Flex p={1}>
            <Button size="xs" onClick={() => onInvite(friend)}> Invite </Button>
          </Flex>
          ) }
      </HStack>
    </Box>
  );
}

export default Friend;
