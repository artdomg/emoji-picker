import React, { useState, useMemo } from 'react';
import _ from 'lodash';
import { Input } from 'semantic-ui-react';

import { Emoji } from './Emoji';
import { searchEmojis } from './EmojiPicker.helper';
import styles from './EmojiPicker.module.css';
import { categories } from './emojis';

export const EmojiPicker = ({ onSelect }) => {
  const [searchText, setSearchText] = useState('');
  const emojisByCategory = useMemo(() => {
    const emojis = searchEmojis(searchText);
    return _.groupBy(emojis, 'category');
  }, [searchText]);

  return (
    <div className={styles.EmojiPicker}>
      <div className={styles.SearchBar}>
        <Input
          icon='search'
          placeholder='Search...'
          fluid
          value={searchText}
          onChange={(e, data) => setSearchText(data.value)}
        />
      </div>
      {Object.entries(emojisByCategory).map(([category, emojis]) => (
        <div key={category}>
          <div>{categories[category].name}</div>
          <div className={styles.EmojiList}>
            {emojis.map(emoji => (
              <Emoji
                key={emoji.value}
                onSelect={onSelect}
                emoji={emoji}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
