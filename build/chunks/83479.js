/** Chunk was on 32160 **/
/** chunk id: 83479, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => d
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk979554 = require("./979554.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx");
let c = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    if (t) {
      var n;
      return o.intl.formatToPlainString(o.t["/0Yndn"], {
        num: null == (n = e.bundledProducts) ? true : n.length
      })
    }
    let [r, a] = null != e.bundledProducts ? e.bundledProducts : [];
    return o.intl.formatToPlainString(o.t.WQbNhI, {
      decoName: r.name,
      pfxName: a.name
    })
  },
  s = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    return null == e ? "" : e.type === a.Z.BUNDLE ? c(e, t) : e.summary
  },
  l = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    switch (null == e ? true : e.type) {
      case a.Z.AVATAR_DECORATION:
        return o.intl.string(o.t["3lv7q6"]);
      case a.Z.PROFILE_EFFECT:
        return o.intl.string(o.t["VhJL7+"]);
      case a.Z.NAMEPLATE:
        return o.intl.string(o.t.ik37ER);
      case a.Z.BUNDLE:
        return c(e, t);
      default:
        return ""
    }
  },
  d = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = (null == e ? true : e.skuId) != null && (0, i.o0)(null == e ? true : e.skuId);
    return (0, r.useMemo)(() => n ? s(e, t) : l(e, t), [n, e, t])
  }