import { Popup } from 'semantic-ui-react';

import styles from './EmojiPicker.module.css';

export const Emoji = ({ onSelect, emoji }) => (
  <Popup
    trigger={<div
      onClick={() => onSelect(emoji.value)}
      className={styles.Emoji}
    >
      {emoji.value}
    </div>}
    content={emoji.name}
  />
);
