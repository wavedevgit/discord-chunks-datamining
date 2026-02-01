/** Chunk was on 61344 **/
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
    guild: A
  } = e, b = (0, i.bG)([h.A], () => null != g && h.A.isUserBanned(g.id)), _ = null != g && null == b, [y, v] = r.useState(_), E = (0, i.bG)([d.A], () => null != g && null != A && (0, u.fJ)(g, A, [d.A]));
  if ((0, c.Ay)(() => {
      _ && o.A.searchGuildBans(t.guild_id, true, [null == g ? true : g.id]).finally(() => v(false))
    }), !E) return null;
  let O = true === b ? m.intl.string(f.default.dpfwQ1) : m.intl.string(f.default.ASv23S),
    C = "ban-user-".concat(null == g ? true : g.id);
  return (0, l.jsx)(p.A, {
    text: O,
    icon: s.wI0,
    onClick: () => {
      null != g && (0, s.mMO)(async () => {
        let {
          default: e
        } = await n.e("57742").then(n.bind(n, 333179));
        return n => {
          var r, i;
          return (0, l.jsx)(e, (r = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), l.forEach(function(t) {
                var l;
                l = n[t], t in e ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = l
              })
            }
            return e
          }({}, n), i = i = {
            guildId: t.guild_id,
            user: g,
            modReportId: t.id
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              n.push.apply(n, l)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
          }), r))
        }
      })
    },
    disabled: true === b || y,
    submitting: y,
    color: a.$n.Colors.RED
  }, C)
}