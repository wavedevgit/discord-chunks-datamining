/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
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