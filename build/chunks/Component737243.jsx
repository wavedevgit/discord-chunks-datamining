/** Chunk was on 68197 **/
/** chunk id: 737243, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk581364 = require("./581364.js"),
  Chunk869765 = require("./869765.js"),
  Chunk699516 = require("./699516.js"),
  Chunk697451 = require("./697451.jsx"),
  Chunk348238 = require("./348238.jsx"),
  Chunk614584 = require("./614584.jsx");
let h = Chunk647438.memo(function(e) {
  var t, n;
  let {
    message: h,
    channel: f,
    compact: m = false,
    interactionUsernameProfile: g,
    interactionAvatarProfile: b,
    interactionData: y,
    referencedUsernameProfile: _,
    referencedAvatarProfile: C,
    setPopout: v
  } = e, {
    isInteractionUserBlocked: x,
    isInteractionUserIgnored: O
  } = (0, l.cj)([c.Z], () => ({
    isInteractionUserBlocked: c.Z.isBlockedForMessage(h),
    isInteractionUserIgnored: c.Z.isIgnoredForMessage(h)
  }), [h]), j = (0, l.e7)([s.Z], () => s.Z.getMessageByReference(null == h ? true : h.messageReference)), E = (0, d.wq)(null == (t = h.interaction) ? true : t.user.id, f.id), S = (0, d.Nk)(h.interaction, f, g, v), I = (0, d.NU)(b, v), P = (0, o.t0)(h), Z = (null == P ? true : P.type) === a.B8.APPLICATION_COMMAND ? null == (n = P.target_user) ? true : n.id : true, T = (0, d.wq)(Z, f.id), N = (0, d.JC)(Z, f, _, v), A = (0, d.rY)(C, v), w = (0, d.Xn)(y, v), R = i.useCallback(() => {
    v({
      interactionUsernameProfile: false,
      interactionAvatarProfile: false,
      interactionData: false,
      referencedUsernameProfile: false,
      referencedAvatarProfile: false
    })
  }, [v]), M = i.useCallback(() => (0, p.Z)({
    message: h,
    channel: f,
    compact: m,
    setPopout: v,
    referencedAvatarProfile: C,
    referencedUsernameProfile: _,
    replyReference: h.messageReference,
    replyMessage: j,
    isReplySpineClickable: false,
    showReplySpine: false
  }), [f, m, h, C, j, _, v]);
  return (0, r.jsx)(u.Z, {
    message: h,
    channel: f,
    compact: m,
    isInteractionUserBlocked: x,
    isInteractionUserIgnored: O,
    showAvatarPopout: b,
    showUsernamePopout: g,
    showDataPopout: y,
    showTargetAvatarPopout: C,
    showTargetUsernamePopout: _,
    onClickAvatar: I,
    onClickUsername: S,
    onClickCommand: w,
    onUserContextMenu: E,
    onClickTargetAvatar: A,
    onClickTargetUsername: N,
    onTargetUserContextMenu: T,
    onPopoutRequestClose: R,
    renderTargetMessage: M
  })
});

function f(e, t, n) {
  let {
    message: i,
    channel: l,
    compact: a
  } = e;
  return null != i.interaction && "" !== i.interaction.displayName ? (0, r.jsx)(h, function(e) {
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
  }({
    message: i,
    channel: l,
    compact: a,
    setPopout: t
  }, n)) : null
}