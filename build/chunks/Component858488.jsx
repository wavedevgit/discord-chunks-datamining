/** Chunk was on 98783 **/
/** chunk id: 858488, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk699516 = require("./699516.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    user: t,
    onAction: s,
    appContext: u
  } = e, d = t.id, [c, g] = (0, l.Wu)([a.Z], () => {
    var e;
    return [a.Z.isFriend(d), null != (e = a.Z.getNickname(d)) ? e : null]
  }, [d]);
  if (!c) return null;
  let f = null == g ? o.intl.string(o.t.BGYkaH) : o.intl.string(o.t["8pOYUE"]);
  return (0, i.jsx)(r.sNh, {
    id: null == g ? "add-friend-nickname" : "edit-friend-nickname",
    label: f,
    action: () => {
      null == s || s(), (0, r.ZDy)(async () => {
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
          nickname: g
        }, n))
      }, {
        contextKey: null != u ? (0, r.VnL)(u) : true
      })
    }
  })
}