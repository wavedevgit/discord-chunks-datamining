/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
let r = n(40231),
  i = (e, t, n, i, o) => {
    "string" == typeof n && (o = i, i = n, n = void 0);
    try {
      return new r(e instanceof r ? e.version : e, n).inc(t, i, o).version
    } catch (e) {
      return null
    }
  };
e.exports = i