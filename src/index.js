import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {

  return (
    <div className = "ui container comments">
    <ApprovalCard>
    <CommentDetail author = {faker.name.firstName()} date = {faker.date.recent().toString()}/>
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetail author = {faker.name.firstName()} date = {faker.date.recent().toString()}/>
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetail author = {faker.name.firstName()} date = {faker.date.recent().toString()}/>
    </ApprovalCard>
    </div>

  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
