/** Chunk was on 85352 **/
r.d(t, {
  g: () => i,
  p: () => l
});
var a = r(399606),
  n = r(581883),
  o = r(592204);
let i = () => {
    var e, t, r;
    let o = (0, a.cj)([n.Z], () => {
      var e, t;
      return null != (t = null == (e = n.Z.settings.textAndImages) ? void 0 : e.keywordFilterSettings) ? t : {}
    });
    return {
      profanity: null == (e = o.profanity) ? void 0 : e.value,
      sexualContent: null == (t = o.sexualContent) ? void 0 : t.value,
      slurs: null == (r = o.slurs) ? void 0 : r.value
    }
  },
  l = () => {
    var e;
    let {
      profanity: t,
      sexualContent: r,
      slurs: a
    } = i();
    return !!(0, o.Xo)({
      location: "use-should-filter-keywords"
    }) && null != (e = t || r || a) && e
  }