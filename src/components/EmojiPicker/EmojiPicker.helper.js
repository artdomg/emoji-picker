import { emojis } from './emojis';

const emojisByTags = emojis.reduce((result, emoji) => {
  if (!result[emoji.category]) result[emoji.category] = [];
  result[emoji.category].push(emoji);
  emoji.tags.forEach(tag => {
    if (!result[tag]) result[tag] = [];
    result[tag].push(emoji);
  });
  return result;
}, {});

export const searchEmojis = (search) => {
  if (!search) return emojis;
  return emojisByTags[search] || [];
};
