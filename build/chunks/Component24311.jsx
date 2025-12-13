/** Chunk was on 70675 **/
/** chunk id: 24311, original params: e,n,t (module,exports,require) **/
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
    user: n,
    context: b,
    label: O,
    joinCallVideo: m,
    id: h,
    onCall: p
  } = e, P = (0, o.Aq)(), j = (0, i.e7)([s.default], () => s.default.getId() === n.id), v = (0, i.e7)([c.Z], () => c.Z.isBlocked(n.id)), N = (0, i.e7)([g.Z, d.Z], () => g.Z.getVoiceChannelId() === d.Z.getDMFromUserId(n.id));
  if (j || b === Z.IlC.POPOUT || N || n.bot || n.isProvisional) return null;
  let y = () => {
      null == p || p(), a.Z.openPrivateChannel({
        recipientIds: n.id,
        joinCall: true,
        joinCallVideo: m
      }), P.dispatch(Z.CkL.POPOUT_CLOSE), (0, r.pTH)()
    },
    x = !u.ZP.disableCallUserConfirmationPrompt;
  return (0, l.jsx)(r.sNh, {
    id: null != h ? h : "call",
    label: null != O ? O : f.intl.string(f.t.JJogjm),
    action: x ? () => {
      (0, r.ZDy)(async () => {
        let {
          default: e
        } = await t.e("27157").then(t.bind(t, 736454));
        return n => (0, l.jsx)(e, function(e) {
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
          onSubmit: y
        }, n))
      })
    } : y,
    disabled: v
  })
}