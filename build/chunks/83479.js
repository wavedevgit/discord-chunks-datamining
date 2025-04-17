/** Chunk was on 74824 **/
n.d(t, {
  G: () => d
}), n(388685);
var l = n(192379),
  r = n(979554),
  i = n(911535),
  s = n(388032);
let o = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t) {
      var n;
      return s.NW.formatToPlainString(s.t["/0Yndn"], {
        num: null == (n = e.bundledProducts) ? void 0 : n.length
      })
    }
    let [l, r] = null != e.bundledProducts ? e.bundledProducts : [];
    return s.NW.formatToPlainString(s.t.WQbNhI, {
      decoName: l.name,
      pfxName: r.name
    })
  },
  a = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e ? "" : e.type === r.Z.BUNDLE ? o(e, t) : e.summary
  },
  c = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (null == e ? void 0 : e.type) {
      case r.Z.AVATAR_DECORATION:
        return s.NW.string(s.t["3lv7q6"]);
      case r.Z.PROFILE_EFFECT:
        return s.NW.string(s.t["VhJL7+"]);
      case r.Z.NAMEPLATE:
        return s.NW.string(s.t.ik37ER);
      case r.Z.BUNDLE:
        return o(e, t);
      default:
        return ""
    }
  },
  d = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = (0, i.P)("ShopProductPreviewActionSheet");
    return (0, l.useMemo)(() => n ? c(e, t) : a(e, t), [e, t, n])
  }