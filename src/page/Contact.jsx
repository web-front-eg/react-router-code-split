import { useState } from 'react';
import GoBackToHome from '../comp/link/GoBackToHome';

function Contact() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  async function getAllPosts() {}

  function titleChange_handler({ target: { value } }) {
    setTitle(value);
  }

  function contentChange_handler({ target: { value } }) {
    setContent(value);
  }

  function submit_handler(e) {
    e.preventDefault();
    setTitle('');
    setContent('');

    addPost();
  }

  return (
    <div style={{ padding: '1rem 0' }}>
      <h1>Contact</h1>
      <GoBackToHome />
    </div>
  );
}

export default Contact;
