import { useState, useRef, useEffect } from 'react';
import './style.scss';

function AddComment() {
  const [text, setText] = useState('');
  const [comments, setComments] = useState([]);
  const commentRef = useRef(null);

  useEffect(() => {
    if (commentRef.current) {
      commentRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [comments]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addComment();
    }
  };

  const addComment = () => {
    if (text) {
      setComments([...comments, text]);
      setText('');
    }
  };

  return (
    <div>
      <div className="input-block">
        <input
          type="text"
          value={text}
          onKeyDown={handleKeyPress}
          onChange={handleChange}
          placeholder="Comment..."
        />
        <button onClick={addComment}>Add</button>
      </div>
      {comments.map((comment, index) => (
        <div key={index} className="comment-block" ref={commentRef}>
          <p>{comment}</p>
        </div>
      ))}
    </div>
  );
}

export default AddComment;
