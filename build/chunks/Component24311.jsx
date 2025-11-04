/** Chunk was on 98783 **/
/** chunk id: 24311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function Z(e) {
  let {
    user: t,
    context: Z,
    label: m,
    joinCallVideo: v,
    id: p,
    onCall: O
  } = e, h = (0, o.Aq)(), _ = (0, l.e7)([u.default], () => u.default.getId() === t.id), j = (0, l.e7)([c.Z], () => c.Z.isBlocked(t.id)), x = (0, l.e7)([g.Z, d.Z], () => g.Z.getVoiceChannelId() === d.Z.getDMFromUserId(t.id));
  if (_ || Z === f.IlC.POPOUT || x || t.bot || t.isProvisional) return null;
  let N = () => {
      null == O || O(), a.Z.openPrivateChannel({
        recipientIds: t.id,
        joinCall: true,
        joinCallVideo: v
      }), h.dispatch(f.CkL.POPOUT_CLOSE), (0, r.pTH)()
    },
    y = !s.ZP.disableCallUserConfirmationPrompt;
  return (0, i.jsx)(r.sNh, {
    id: null != p ? p : "call",
    label: null != m ? m : b.intl.string(b.t.JJogjm),
    action: y ? () => {
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
          onSubmit: N
        }, t))
      })
    } : N,
    disabled: j
  })
}