import React from 'react';
import ChannelList from './ChannelList';

const Sidebar = ()=>{
  return (
    <section className="sidebar">
      <div className="sidebar-header">
        <h3 href="#">
          <div>Stack Chat</div>
          <i alt="Brand" className="glyphicon glyphicon-comment">
          </i>
        </h3>
      </div>
      <h5>Channels</h5>
      <ChannelList />
    </section>
  );
}

export default Sidebar;
