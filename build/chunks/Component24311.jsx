/** Chunk was on 69220 **/
/** chunk id: 24311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk957914 = require("./957914.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk740492 = require("./740492.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    user: t,
    context: p,
    label: v,
    joinCallVideo: m,
    id: O,
    onCall: h
  } = e, j = (0, u.Aq)(), y = (0, l.e7)([s.default], () => s.default.getId() === t.id), P = (0, l.e7)([f.Z], () => f.Z.isBlocked(t.id)), x = (0, l.e7)([g.Z, c.Z], () => g.Z.getVoiceChannelId() === c.Z.getDMFromUserId(t.id)), {
    copyVariant: S
  } = a.N.useConfig({
    location: "useCallUserItem"
  });
  if (y || p === Z.IlC.POPOUT || x || t.bot || t.isProvisional) return null;
  let E = () => {
      null == h || h(), o.Z.openPrivateChannel({
        recipientIds: t.id,
        joinCall: true,
        joinCallVideo: m
      }), j.dispatch(Z.CkL.POPOUT_CLOSE), (0, r.pTH)()
    },
    C = !d.ZP.disableCallUserConfirmationPrompt;
  return (0, i.jsx)(r.sNh, {
    id: null != O ? O : "call",
    label: null != v ? v : "control" !== S ? b.intl.string(b.t["ZeP+kK"]) : b.intl.string(b.t.JJogjm),
    action: C ? () => {
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
          onSubmit: E
        }, t))
      })
    } : E,
    disabled: P
  })
}