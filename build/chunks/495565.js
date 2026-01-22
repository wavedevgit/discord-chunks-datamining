/** Chunk was on 1784 **/
/** chunk id: 495565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => s
}), require("./321073.js"), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk64700 = require("./64700.js"),
  Chunk575593 = require("./575593.js"),
  Chunk985018 = require("./985018.jsx");
let i = function(e) {
    var t, n;
    let r = arguments.length > 1 && true !== arguments[1] && arguments[1];
    if (r) return a.intl.formatToPlainString(a.t["/0Yndu"], {
      num: null == (n = e.bundledProducts) ? true : n.length
    });
    let i = null != (t = e.bundledProducts) ? t : [],
      s = [],
      c = false;
    for (let e of i) switch (e.type) {
      case l.R.AVATAR_DECORATION:
        s.push(a.intl.formatToPlainString(a.t.Ntv9Jt, {
          itemName: e.name
        }));
        break;
      case l.R.PROFILE_EFFECT:
        s.push(a.intl.formatToPlainString(a.t["3Y8q7a"], {
          itemName: e.name
        }));
        break;
      case l.R.NAMEPLATE:
        s.push(a.intl.formatToPlainString(a.t["2keXky"], {
          itemName: e.name
        })), c = true
    }
    if (c) {
      let e = s.join(", ").replace(/, ([^,]*)$/, " & $1");
      return a.intl.formatToPlainString(a.t.Ofrqj6, {
        joinedItems: e
      })
    }
    let o = s.join(" & ");
    return a.intl.formatToPlainString(a.t.Ofrqj6, {
      joinedItems: o
    })
  },
  s = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 ? arguments[2] : true;
    return (0, r.useMemo)(() => {
      if (null != n) return 3 === n ? a.intl.string(a.t.QUjmjp) : 7 === n ? a.intl.string(a.t.yPxJA2) : a.intl.string(a.t["o+VpXZ"]);
      if (null != e && null != e.summary && "" !== e.summary) {
        if (e.type === l.R.BUNDLE && e.summary.includes("{joinedItems}")) {
          let n = i(e, t);
          return e.summary.replace("{joinedItems}", n)
        }
        return e.summary
      }
      switch (null == e ? true : e.type) {
        case l.R.AVATAR_DECORATION:
          return a.intl.string(a.t["3lv7q2"]);
        case l.R.PROFILE_EFFECT:
          return a.intl.string(a.t.VhJL72);
        case l.R.NAMEPLATE:
          return a.intl.string(a.t.ik37EZ);
        case l.R.BUNDLE:
          return i(e, t);
        default:
          return ""
      }
    }, [e, t, n])
  }