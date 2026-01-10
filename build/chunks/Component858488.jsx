/** Chunk was on 69220 **/
/** chunk id: 858488, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk699516 = require("./699516.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    user: t,
    onAction: d,
    appContext: u
  } = e, s = t.id, [c, f] = (0, l.Wu)([o.Z], () => {
    var e;
    return [o.Z.isFriend(s), null != (e = o.Z.getNickname(s)) ? e : null]
  }, [s]);
  if (!c) return null;
  let g = null == f ? a.intl.string(a.t.BGYkaH) : a.intl.string(a.t["8pOYUE"]);
  return (0, i.jsx)(r.sNh, {
    id: null == f ? "add-friend-nickname" : "edit-friend-nickname",
    label: g,
    action: () => {
      null == d || d(), (0, r.ZDy)(async () => {
        let {
          default: e
        } = await n.e("25070").then(n.bind(n, 670794));
        return n => (0, i.jsx)(e, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({
          user: t,
          nickname: f
        }, n))
      }, {
        contextKey: null != u ? (0, r.VnL)(u) : true
      })
    }
  })
}