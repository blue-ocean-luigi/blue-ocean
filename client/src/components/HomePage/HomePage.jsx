import React, { useState, useEffect } from 'react';
import GroupPage from "../GroupPage.jsx";
import FriendsList from "../FriendsList.jsx";
import HomeFeedPost from "./post/HomeFeedPost.jsx";
import './HomePage.css';


//  props should be user info, if user is new
function HomePage() {
  const testobjpost = [
    { userName: 'BIG RICK', content: 'big rick champion of neighborhood watch, protector of property values, hero of the homeowners association, was here!' },
    { userName: 'small rick', content: 'a much smaller, less impressive rick, was here...' },
  ];

  const testobjgroup = [
    { groupName: 'no girls allowed', description: 'a super cool super special group with none of those icky girls' },
    { groupName: 'cat owners', description: 'we are a group of people who own cats, not just cat, but cats... lots of cats. its not an addiction, its not a problem, its okay this is fine.' },
  ];

  const [newUser, setNewUser] = useState(false);
  const [posts, setPosts] = useState(testobjpost);

  return (
    <div className="hp_home_feed_container">
      <div className="hp_search_bar_container">
        <input type="text" placeholder="Search" className="hp_search_bar" />
      </div>
      <div className="hp_body_container">
        <div className="hp_sidebar">
          <div className="hp_profile_img_container">
            <img src="https://i.pinimg.com/originals/42/90/35/429035c30c3e0aa7169168a93fdbe551.jpg" alt="alt" className="hp_profile_img" />
          </div>
          <GroupPage />
          <FriendsList />
        </div>
        {newUser ? (
          <div className="hp_home_feed">
            <h1>NEW USER</h1>
          </div>
        ) : (
          <div className="hp_home_feed">
            {posts.map((post, i) => (
              <HomeFeedPost key={i} post={post} />
            ))}
            <h1>EXISTING USER</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;

// should list
// search, event feed, groups list & friends list,