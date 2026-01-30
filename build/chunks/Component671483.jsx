/** Chunk was on 40394 **/
/** chunk id: 671483, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk435183 = require("./435183.js"),
  Chunk532622 = require("./532622.js"),
  Chunk136523 = require("./136523.jsx"),
  Chunk345640 = require("./345640.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309698 = require("./309698.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function g(n, t) {
  let g = (0, l.bG)([d.A], () => d.A.can(A.xBc.MANAGE_CHANNELS, t)),
    h = (0, s.Ay)(n),
    j = (0, o.b)(n),
    v = (0, l.bG)([u.A], () => u.A.getChannelStatus(n)),
    p = null != v && v.length > 0;
  return n.isGuildVoice() && (g || h) ? !j && g && p ? (0, i.jsx)(r.Drp, {
    id: "clear-status",
    label: b.intl.string(b.t["22CYiZ"]),
    action: () => {
      a.Ay.updateVoiceChannelStatus(n.id, "")
    }
  }) : j && h ? (0, i.jsx)(r.Drp, {
    id: "set-status",
    label: b.intl.string(b.t.RBd5PW),
    action: () => {
      (0, r.mMO)(async () => {
        let {
          default: t
        } = await Promise.resolve().then(e.bind(e, 136523));
        return e => (0, i.jsx)(t, function(n) {
          for (var t = 1; t < arguments.length; t++) {
            var e = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(e);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = e[t], t in n ? Object.defineProperty(n, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : n[t] = i
            })
          }
          return n
        }({
          channel: n
        }, e))
      }, {
        modalKey: c.m
      })
    }
  }) : null : null
}