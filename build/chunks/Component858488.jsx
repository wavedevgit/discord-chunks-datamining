/** Chunk was on 70675 **/
/** chunk id: 858488, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk699516 = require("./699516.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    user: n,
    onAction: o,
    appContext: s
  } = e, d = n.id, [c, g] = (0, i.Wu)([a.Z], () => {
    var e;
    return [a.Z.isFriend(d), null != (e = a.Z.getNickname(d)) ? e : null]
  }, [d]);
  if (!c) return null;
  let Z = null == g ? u.intl.string(u.t.BGYkaH) : u.intl.string(u.t["8pOYUE"]);
  return (0, l.jsx)(r.sNh, {
    id: null == g ? "add-friend-nickname" : "edit-friend-nickname",
    label: Z,
    action: () => {
      null == o || o(), (0, r.ZDy)(async () => {
        let {
          default: e
        } = await t.e("25070").then(t.bind(t, 670794));
        return t => (0, l.jsx)(e, function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              l = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), l.forEach(function(n) {
              var l;
              l = t[n], n in e ? Object.defineProperty(e, n, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = l
            })
          }
          return e
        }({
          user: n,
          nickname: g
        }, t))
      }, {
        contextKey: null != s ? (0, r.VnL)(s) : true
      })
    }
  })
}