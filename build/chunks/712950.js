/** Chunk was on 48181 **/
n.d(e, {
  g: () => a,
  p: () => o
});
var r = n(399606),
  i = n(581883),
  l = n(592204);
let a = () => {
    var t, e, n;
    let l = (0, r.cj)([i.Z], () => {
      var t, e;
      return null != (e = null == (t = i.Z.settings.textAndImages) ? void 0 : t.keywordFilterSettings) ? e : {}
    });
    return {
      profanity: null == (t = l.profanity) ? void 0 : t.value,
      sexualContent: null == (e = l.sexualContent) ? void 0 : e.value,
      slurs: null == (n = l.slurs) ? void 0 : n.value
    }
  },
  o = () => {
    var t;
    let {
      profanity: e,
      sexualContent: n,
      slurs: r
    } = a();
    return !!(0, l.Xo)({
      location: "use-should-filter-keywords"
    }) && null != (t = e || n || r) && t
  }