/** Chunk was on 95215 **/
/** chunk id: 83479, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  G: () => u
}), require("./539854.js"), require("./704826.js"), require("./35282.js");
var Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx");
let o = function(e) {
    var t, n, r, a;
    let o = arguments.length > 1 && true !== arguments[1] && arguments[1];
    if (o) return l.intl.formatToPlainString(l.t["/0Yndu"], {
      num: null == (t = e.bundledProducts) ? true : t.length
    });
    let s = null != (n = e.bundledProducts) ? n : [],
      c = s.find(e => e.type === i.Z.AVATAR_DECORATION),
      u = s.find(e => e.type === i.Z.PROFILE_EFFECT),
      d = s.find(e => e.type === i.Z.NAMEPLATE);
    if (null != d) {
      let e = [];
      null != c && e.push(l.intl.formatToPlainString(l.t.Ntv9Jt, {
        itemName: c.name
      })), null != u && e.push(l.intl.formatToPlainString(l.t["3Y8q7a"], {
        itemName: u.name
      })), null != d && e.push(l.intl.formatToPlainString(l.t["2keXky"], {
        itemName: d.name
      }));
      let t = e.join(", ").replace(/, ([^,]*)$/, " & $1");
      return l.intl.formatToPlainString(l.t.Ofrqj6, {
        joinedItems: t
      })
    }
    return l.intl.formatToPlainString(l.t.BS1Cuy, {
      decoName: null != (r = null == c ? true : c.name) ? r : "",
      pfxName: null != (a = null == u ? true : u.name) ? a : ""
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
        return l.intl.string(l.t["3lv7q2"]);
      case i.Z.PROFILE_EFFECT:
        return l.intl.string(l.t.VhJL72);
      case i.Z.NAMEPLATE:
        return l.intl.string(l.t.ik37EZ);
      case i.Z.BUNDLE:
        return o(e, t);
      default:
        return ""
    }
  },
  u = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = (null == e ? true : e.skuId) != null && (0, a.o0)(null == e ? true : e.skuId);
    return (0, r.useMemo)(() => n ? s(e, t) : c(e, t), [n, e, t])
  }