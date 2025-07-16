/** Chunk was on 47934 **/
n.d(t, {
  g: () => l,
  p: () => o
});
var i = n(399606),
  r = n(581883),
  a = n(592204);
let l = () => {
    var e, t, n;
    let a = (0, i.cj)([r.Z], () => {
      var e, t;
      return null != (t = null == (e = r.Z.settings.textAndImages) ? void 0 : e.keywordFilterSettings) ? t : {}
    });
    return {
      profanity: null == (e = a.profanity) ? void 0 : e.value,
      sexualContent: null == (t = a.sexualContent) ? void 0 : t.value,
      slurs: null == (n = a.slurs) ? void 0 : n.value
    }
  },
  o = () => {
    var e;
    let {
      profanity: t,
      sexualContent: n,
      slurs: i
    } = l();
    return !!(0, a.Xo)({
      location: "use-should-filter-keywords"
    }) && null != (e = t || n || i) && e
  }