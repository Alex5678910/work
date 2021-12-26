import React, {useState} from 'react';

const InputSearchField = () => {
    const [text, setText] = useState('')

    return (
        <div className="AddTodo">
            <input type="text"
                   value={text}
                   onChange={e => setText(e.target.value)}
            />
            <button>Add</button>
        </div>
    );
};

export default InputSearchField;