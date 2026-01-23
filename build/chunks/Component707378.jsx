/** Chunk was on 91042 **/
/** chunk id: 707378, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk313369 = require("./313369.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk964404 = require("./964404.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  let {
    user: t,
    context: m,
    joinCallVideo: O,
    id: p,
    onCall: y
  } = e, E = (0, d.aL)(), v = (0, i.bG)([u.default], () => u.default.getId() === t.id), h = (0, i.bG)([A.A], () => A.A.isBlocked(t.id)), j = (0, i.bG)([b.A, c.A], () => b.A.getVoiceChannelId() === c.A.getDMFromUserId(t.id)), {
    copyVariant: x
  } = o.o.useConfig({
    location: "useCallUserItem"
  });
  if (v || m === g.BRT.POPOUT || j || t.bot || t.isProvisional) return null;
  let S = () => {
      null == y || y(), a.A.openPrivateChannel({
        recipientIds: t.id,
        joinCall: true,
        joinCallVideo: O
      }), E.dispatch(g.jej.POPOUT_CLOSE), (0, r.s7G)()
    },
    M = !s.Ay.disableCallUserConfirmationPrompt;
  return (0, l.jsx)(r.Drp, {
    id: null != p ? p : "call",
    label: "control" !== x ? f.intl.string(f.t["ZeP+kK"]) : f.intl.string(f.t.JJogjm),
    action: M ? () => {
      (0, r.mMO)(async () => {
        let {
          default: e
        } = await n.e("19106").then(n.bind(n, 279673));
        return t => (0, l.jsx)(e, function(e) {
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
        }({
          onSubmit: S
        }, t))
      })
    } : S,
    disabled: h
  })
}