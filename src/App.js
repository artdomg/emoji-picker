import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Input, Button, Popup } from 'semantic-ui-react';

import EmojiPicker from './components/EmojiPicker';
import styles from './App.module.css';

const App = () => {
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [textValue, setTextValue] = useState('');

  return (
    <div className={styles.App}>
      <Input
        type='text'
        placeholder='Your emojis go here'
        action
        value={textValue}
        onChange={(e, data) => setTextValue(data.value)}
      >
        <input />
        <Popup
          on='click'
          open={emojiPickerOpen}
          onClose={() => setEmojiPickerOpen(false)}
          onOpen={() => setEmojiPickerOpen(true)}
          trigger={<Button content='😀' onClick={() => setEmojiPickerOpen((open) => !open)} />}
        >
          <EmojiPicker
            onSelect={(emoji) => setTextValue(`${textValue}${emoji}`)}
          />
        </Popup>
      </Input>
    </div>
  );
}

export default App;
