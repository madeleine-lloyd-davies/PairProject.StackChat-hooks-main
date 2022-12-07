// so that we can say
// import { Main } from './components';
// instead of
// import { Main } from './components/Main;
export { default as Main } from "./Main";

/*
ChannelList - displays list of channels
Main - main component



                      MAIN
         /                         \            \
       MESSAGELIST               SIDEBAR     NAVBAR
       /     \                    |
  MESSAGE NEWMESSAGEENTRY      CHANNELLIST


  STATE:
  - what channel you're in
  - collection of messages that can be added to, edited, deleted
  - add new channel
  potentially: - click on author, see author

  {
    currentChannel: {however we represent a channel?}
    allChannels: [arr of channels],
    allMessages: [arr of message objects]
  }

*/
