/** Chunk was on 90508 **/
t.d(n, {
  g: () => i,
  p: () => a
});
var r = t(399606),
  l = t(581883),
  u = t(592204);
let i = () => {
    var e, n, t;
    let u = (0, r.cj)([l.Z], () => {
      var e, n;
      return null != (n = null == (e = l.Z.settings.textAndImages) ? void 0 : e.keywordFilterSettings) ? n : {}
    });
    return {
      profanity: null == (e = u.profanity) ? void 0 : e.value,
      sexualContent: null == (n = u.sexualContent) ? void 0 : n.value,
      slurs: null == (t = u.slurs) ? void 0 : t.value
    }
  },
  a = () => {
    var e;
    let {
      profanity: n,
      sexualContent: t,
      slurs: r
    } = i();
    return !!(0, u.Xo)({
      location: "use-should-filter-keywords"
    }) && null != (e = n || t || r) && e
  }