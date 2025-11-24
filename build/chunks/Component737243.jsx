/** Chunk was on 34740 **/
/** chunk id: 737243, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk581364 = require("./581364.js"),
  Chunk869765 = require("./869765.js"),
  Chunk699516 = require("./699516.js"),
  Chunk697451 = require("./697451.jsx"),
  Chunk348238 = require("./348238.jsx"),
  Chunk614584 = require("./614584.jsx");
let h = Chunk473749.memo(function(e) {
  var t, n;
  let {
    message: h,
    channel: f,
    compact: m = false,
    interactionUsernameProfile: g,
    interactionAvatarProfile: b,
    interactionData: y,
    referencedUsernameProfile: C,
    referencedAvatarProfile: v,
    setPopout: _
  } = e, {
    isInteractionUserBlocked: x,
    isInteractionUserIgnored: O
  } = (0, l.cj)([c.Z], () => ({
    isInteractionUserBlocked: c.Z.isBlockedForMessage(h),
    isInteractionUserIgnored: c.Z.isIgnoredForMessage(h)
  }), [h]), j = (0, l.e7)([s.Z], () => s.Z.getMessageByReference(null == h ? true : h.messageReference)), E = (0, d.wq)(null == (t = h.interaction) ? true : t.user.id, f.id), S = (0, d.Nk)(h.interaction, f, g, _), P = (0, d.NU)(b, _), I = (0, o.t0)(h), Z = (null == I ? true : I.type) === a.B8.APPLICATION_COMMAND ? null == (n = I.target_user) ? true : n.id : true, T = (0, d.wq)(Z, f.id), N = (0, d.JC)(Z, f, C, _), A = (0, d.rY)(v, _), w = (0, d.Xn)(y, _), M = r.useCallback(() => {
    _({
      interactionUsernameProfile: false,
      interactionAvatarProfile: false,
      interactionData: false,
      referencedUsernameProfile: false,
      referencedAvatarProfile: false
    })
  }, [_]), R = r.useCallback(() => (0, p.Z)({
    message: h,
    channel: f,
    compact: m,
    setPopout: _,
    referencedAvatarProfile: v,
    referencedUsernameProfile: C,
    replyReference: h.messageReference,
    replyMessage: j,
    isReplySpineClickable: false,
    showReplySpine: false
  }), [f, m, h, v, j, C, _]);
  return (0, i.jsx)(u.Z, {
    message: h,
    channel: f,
    compact: m,
    isInteractionUserBlocked: x,
    isInteractionUserIgnored: O,
    showAvatarPopout: b,
    showUsernamePopout: g,
    showDataPopout: y,
    showTargetAvatarPopout: v,
    showTargetUsernamePopout: C,
    onClickAvatar: P,
    onClickUsername: S,
    onClickCommand: w,
    onUserContextMenu: E,
    onClickTargetAvatar: A,
    onClickTargetUsername: N,
    onTargetUserContextMenu: T,
    onPopoutRequestClose: M,
    renderTargetMessage: R
  })
});

function f(e, t, n) {
  let {
    message: r,
    channel: l,
    compact: a
  } = e;
  return null != r.interaction && "" !== r.interaction.displayName ? (0, i.jsx)(h, function(e) {
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
    message: r,
    channel: l,
    compact: a,
    setPopout: t
  }, n)) : null
}