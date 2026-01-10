/** Chunk was on 69220 **/
/** chunk id: 24311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk740492 = require("./740492.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let {
    user: t,
    context: b,
    label: p,
    joinCallVideo: v,
    id: m,
    onCall: O
  } = e, h = (0, a.Aq)(), j = (0, l.e7)([u.default], () => u.default.getId() === t.id), y = (0, l.e7)([c.Z], () => c.Z.isBlocked(t.id)), P = (0, l.e7)([f.Z, s.Z], () => f.Z.getVoiceChannelId() === s.Z.getDMFromUserId(t.id));
  if (j || b === g.IlC.POPOUT || P || t.bot || t.isProvisional) return null;
  let x = () => {
      null == O || O(), o.Z.openPrivateChannel({
        recipientIds: t.id,
        joinCall: true,
        joinCallVideo: v
      }), h.dispatch(g.CkL.POPOUT_CLOSE), (0, r.pTH)()
    },
    S = !d.ZP.disableCallUserConfirmationPrompt;
  return (0, i.jsx)(r.sNh, {
    id: null != m ? m : "call",
    label: null != p ? p : Z.intl.string(Z.t.JJogjm),
    action: S ? () => {
      (0, r.ZDy)(async () => {
        let {
          default: e
        } = await n.e("27157").then(n.bind(n, 736454));
        return t => (0, i.jsx)(e, function(e) {
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
          onSubmit: x
        }, t))
      })
    } : x,
    disabled: y
  })
}