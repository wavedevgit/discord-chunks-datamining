/** Chunk was on 8087 **/
/** chunk id: 83479, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => c
}), require("./539854.js"), require("./704826.js"), require("./35282.js");
var Chunk473749 = require("./473749.js"),
  Chunk979554 = require("./979554.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx");
let o = function(e) {
    var t, n, r, a;
    let o = arguments.length > 1 && true !== arguments[1] && arguments[1];
    if (o) return l.intl.formatToPlainString(l.t["/0Yndu"], {
      num: null == (t = e.bundledProducts) ? true : t.length
    });
    let c = null != (n = e.bundledProducts) ? n : [],
      s = c.find(e => e.type === i.Z.AVATAR_DECORATION),
      u = c.find(e => e.type === i.Z.PROFILE_EFFECT),
      d = c.find(e => e.type === i.Z.NAMEPLATE);
    if (null != d) {
      let e = [];
      null != s && e.push(l.intl.formatToPlainString(l.t.Ntv9Jt, {
        itemName: s.name
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
      decoName: null != (r = null == s ? true : s.name) ? r : "",
      pfxName: null != (a = null == u ? true : u.name) ? a : ""
    })
  },
  c = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 ? arguments[2] : true;
    return (0, r.useMemo)(() => {
      if (null != n) return 3 === n ? l.intl.string(l.t.QUjmjp) : 7 === n ? l.intl.string(l.t.yPxJA2) : l.intl.string(l.t["o+VpXZ"]);
      if (null != e && (0, a.o0)(e.skuId) && e.type !== i.Z.BUNDLE && null != e.summary && "" !== e.summary) return e.summary;
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
    }, [e, t, n])
  }