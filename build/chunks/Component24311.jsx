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
  Chunk40851 = require("./40851.jsx"),
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
  } = e, h = (0, o.Aq)(), j = (0, i.e7)([u.default], () => u.default.getId() === t.id), x = (0, i.e7)([c.Z], () => c.Z.isBlocked(t.id)), _ = (0, i.e7)([g.Z, d.Z], () => g.Z.getVoiceChannelId() === d.Z.getDMFromUserId(t.id));
  if (j || Z === f.IlC.POPOUT || _ || t.bot || t.isProvisional) return null;
  let y = () => {
      null == O || O(), a.Z.openPrivateChannel({
        recipientIds: t.id,
        joinCall: true,
        joinCallVideo: v
      }), h.dispatch(f.CkL.POPOUT_CLOSE), (0, r.pTH)()
    },
    N = !s.ZP.disableCallUserConfirmationPrompt;
  return (0, l.jsx)(r.sNh, {
    id: null != p ? p : "call",
    label: null != m ? m : b.intl.string(b.t.JJogjo),
    action: N ? () => {
      (0, r.ZDy)(async () => {
        let {
          default: e
        } = await n.e("27157").then(n.bind(n, 736454));
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
          onSubmit: y
        }, t))
      })
    } : y,
    disabled: x
  })
}