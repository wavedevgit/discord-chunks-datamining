/** Chunk was on 74824 **/
n.d(t, {
  G: () => u
}), n(388685);
var r = n(73800),
  l = n(979554),
  i = n(911535),
  o = n(388032);
let s = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t) {
      var n;
      return o.intl.formatToPlainString(o.t["/0Yndn"], {
        num: null == (n = e.bundledProducts) ? void 0 : n.length
      })
    }
    let [r, l] = null != e.bundledProducts ? e.bundledProducts : [];
    return o.intl.formatToPlainString(o.t.WQbNhI, {
      decoName: r.name,
      pfxName: l.name
    })
  },
  a = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e ? "" : e.type === l.Z.BUNDLE ? s(e, t) : e.summary
  },
  c = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (null == e ? void 0 : e.type) {
      case l.Z.AVATAR_DECORATION:
        return o.intl.string(o.t["3lv7q6"]);
      case l.Z.PROFILE_EFFECT:
        return o.intl.string(o.t["VhJL7+"]);
      case l.Z.NAMEPLATE:
        return o.intl.string(o.t.ik37ER);
      case l.Z.BUNDLE:
        return s(e, t);
      default:
        return ""
    }
  },
  u = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = (0, i.P)("ShopProductPreviewActionSheet");
    return (0, r.useMemo)(() => n ? c(e, t) : a(e, t), [e, t, n])
  }