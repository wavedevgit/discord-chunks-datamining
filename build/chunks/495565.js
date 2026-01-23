/** Chunk was on 1784 **/
/** chunk id: 495565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => s
}), require("./321073.js"), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk64700 = require("./64700.js"),
  Chunk575593 = require("./575593.js"),
  Chunk985018 = require("./985018.jsx");
let a = function(e) {
    var t, n;
    let r = arguments.length > 1 && true !== arguments[1] && arguments[1];
    if (r) return i.intl.formatToPlainString(i.t["/0Yndu"], {
      num: null == (n = e.bundledProducts) ? true : n.length
    });
    let a = null != (t = e.bundledProducts) ? t : [],
      s = [],
      o = false;
    for (let e of a) switch (e.type) {
      case l.R.AVATAR_DECORATION:
        s.push(i.intl.formatToPlainString(i.t.Ntv9Jt, {
          itemName: e.name
        }));
        break;
      case l.R.PROFILE_EFFECT:
        s.push(i.intl.formatToPlainString(i.t["3Y8q7a"], {
          itemName: e.name
        }));
        break;
      case l.R.NAMEPLATE:
        s.push(i.intl.formatToPlainString(i.t["2keXky"], {
          itemName: e.name
        })), o = true
    }
    if (o) {
      let e = s.join(", ").replace(/, ([^,]*)$/, " & $1");
      return i.intl.formatToPlainString(i.t.Ofrqj6, {
        joinedItems: e
      })
    }
    let c = s.join(" & ");
    return i.intl.formatToPlainString(i.t.Ofrqj6, {
      joinedItems: c
    })
  },
  s = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 ? arguments[2] : true;
    return (0, r.useMemo)(() => {
      if (null != n) return 3 === n ? i.intl.string(i.t.QUjmjp) : 7 === n ? i.intl.string(i.t.yPxJA2) : i.intl.string(i.t["o+VpXZ"]);
      if (null != e && null != e.summary && "" !== e.summary) {
        if (e.type === l.R.BUNDLE && e.summary.includes("{joinedItems}")) {
          let n = a(e, t);
          return e.summary.replace("{joinedItems}", n)
        }
        return e.summary
      }
      switch (null == e ? true : e.type) {
        case l.R.AVATAR_DECORATION:
          return i.intl.string(i.t["3lv7q2"]);
        case l.R.PROFILE_EFFECT:
          return i.intl.string(i.t.VhJL72);
        case l.R.NAMEPLATE:
          return i.intl.string(i.t.ik37EZ);
        case l.R.BUNDLE:
          return a(e, t);
        default:
          return ""
      }
    }, [e, t, n])
  }