/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
let r = n(40231),
  i = (e, t, n = !1) => {
    if (e instanceof r) return e;
    try {
      return new r(e, t)
    } catch (e) {
      if (!n) return null;
      throw e
    }
  };
e.exports = i