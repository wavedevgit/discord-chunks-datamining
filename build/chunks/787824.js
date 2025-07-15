/** Chunk was on 16120 **/
n.d(t, {
  C: () => function e(t) {
    return null == t ? t : Object.keys(t).reduce((n, l) => {
      let i = (0, r.camelCase)(l);
      return "object" != typeof t[l] || Array.isArray(t[l]) ? n[i] = t[l] : n[i] = e(t[l]), n
    }, {})
  },
  X: () => function e(t) {
    return null == t ? t : Object.keys(t).reduce((n, l) => {
      let i = (0, r.snakeCase)(l);
      return "object" != typeof t[l] || Array.isArray(t[l]) ? n[i] = t[l] : n[i] = e(t[l]), n[i] = t[l], n
    }, {})
  }
});
var r = n(392711)