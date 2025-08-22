/** Chunk was on 2026 **/
/** chunk id: 83479, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => u
}), require("./539854.js"), require("./704826.js"), require("./35282.js");
var Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx");
let o = function(e) {
    var t, n, r, l;
    let o = arguments.length > 1 && true !== arguments[1] && arguments[1];
    if (o) return a.intl.formatToPlainString(a.t["/0Yndn"], {
      num: null == (t = e.bundledProducts) ? true : t.length
    });
    let s = null != (n = e.bundledProducts) ? n : [],
      c = s.find(e => e.type === i.Z.AVATAR_DECORATION),
      u = s.find(e => e.type === i.Z.PROFILE_EFFECT),
      d = s.find(e => e.type === i.Z.NAMEPLATE);
    if (null != d) {
      let e = [];
      null != c && e.push(a.intl.formatToPlainString(a.t.Ntv9Ji, {
        itemName: c.name
      })), null != u && e.push(a.intl.formatToPlainString(a.t["3Y8q7e"], {
        itemName: u.name
      })), null != d && e.push(a.intl.formatToPlainString(a.t["2keXk5"], {
        itemName: d.name
      }));
      let t = e.join(", ").replace(/, ([^,]*)$/, " & $1");
      return a.intl.formatToPlainString(a.t.Ofrqj4, {
        joinedItems: t
      })
    }
    return a.intl.formatToPlainString(a.t.BS1Cu7, {
      decoName: null != (r = null == c ? true : c.name) ? r : "",
      pfxName: null != (l = null == u ? true : u.name) ? l : ""
    })
  },
  s = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    return null == e ? "" : e.type === i.Z.BUNDLE ? o(e, t) : e.summary
  },
  c = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    switch (null == e ? true : e.type) {
      case i.Z.AVATAR_DECORATION:
        return a.intl.string(a.t["3lv7q6"]);
      case i.Z.PROFILE_EFFECT:
        return a.intl.string(a.t["VhJL7+"]);
      case i.Z.NAMEPLATE:
        return a.intl.string(a.t.ik37ER);
      case i.Z.BUNDLE:
        return o(e, t);
      default:
        return ""
    }
  },
  u = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = (null == e ? true : e.skuId) != null && (0, l.o0)(null == e ? true : e.skuId);
    return (0, r.useMemo)(() => n ? s(e, t) : c(e, t), [n, e, t])
  }