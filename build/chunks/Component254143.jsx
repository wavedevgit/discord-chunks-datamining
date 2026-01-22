/** Chunk was on 97492 **/
/** chunk id: 254143, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk964486 = require("./964486.js"),
  Chunk351001 = require("./351001.js"),
  Chunk576705 = require("./576705.js"),
  Chunk400528 = require("./400528.js"),
  Chunk102817 = require("./102817.jsx"),
  Chunk641131 = require("./641131.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  let {
    channel: t,
    user: g,
    guild: m
  } = e, A = (0, i.bG)([f.A], () => null != g && f.A.isUserBanned(g.id)), y = null != g && null == A, [O, j] = l.useState(y), v = (0, i.bG)([d.A], () => null != g && null != m && (0, u.fJ)(g, m, [d.A]));
  if ((0, c.Ay)(() => {
      y && o.A.searchGuildBans(t.guild_id, true, [null == g ? true : g.id]).finally(() => j(false))
    }), !v) return null;
  let x = true === A ? b.intl.string(h.default.dpfwQ1) : b.intl.string(h.default.ASv23S),
    E = "ban-user-".concat(null == g ? true : g.id);
  return (0, r.jsx)(p.A, {
    text: x,
    icon: s.wI0,
    onClick: () => {
      null != g && (0, s.mMO)(async () => {
        let {
          default: e
        } = await n.e("57742").then(n.bind(n, 333179));
        return n => {
          var l, i;
          return (0, r.jsx)(e, (l = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, n), i = i = {
            guildId: t.guild_id,
            user: g,
            modReportId: t.id
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
          }), l))
        }
      })
    },
    disabled: true === A || O,
    submitting: O,
    color: a.$n.Colors.RED
  }, E)
}