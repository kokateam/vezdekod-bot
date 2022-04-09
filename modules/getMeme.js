module.exports = async (user_id) => {
  const memeIds = await db.request(
    `SELECT meme_id FROM rating WHERE user_id = ?`,
    [user_id]
  );

  let ids = [0];

  memeIds.map((el) => ids.push(el.meme_id));

  const meme = await db.request(
    `SELECT id, photo_id FROM memes WHERE id NOT IN (?) ORDER BY RAND() LIMIT 1`,
    [ids]
  );

  return meme;
};
