/** Chunk was on 40184 **/
/** chunk id: 737243, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
let f = Chunk473749.memo(function(e) {
  var t, n;
  let {
    message: f,
    channel: h,
    compact: m = false,
    interactionUsernameProfile: g,
    interactionAvatarProfile: b,
    interactionData: y,
    referencedUsernameProfile: C,
    referencedAvatarProfile: v,
    setPopout: x
  } = e, {
    isInteractionUserBlocked: O,
    isInteractionUserIgnored: E
  } = (0, l.cj)([c.Z], () => ({
    isInteractionUserBlocked: c.Z.isBlockedForMessage(f),
    isInteractionUserIgnored: c.Z.isIgnoredForMessage(f)
  }), [f]), j = (0, l.e7)([s.Z], () => s.Z.getMessageByReference(null == f ? true : f.messageReference)), S = (0, d.wq)(null == (t = f.interaction) ? true : t.user.id, h.id), _ = (0, d.Nk)(f.interaction, h, g, x), P = (0, d.NU)(b, x), I = (0, o.t0)(f), Z = (null == I ? true : I.type) === a.B8.APPLICATION_COMMAND ? null == (n = I.target_user) ? true : n.id : true, T = (0, d.wq)(Z, h.id), N = (0, d.JC)(Z, h, C, x), A = (0, d.rY)(v, x), w = (0, d.Xn)(y, x), M = r.useCallback(() => {
    x({
      interactionUsernameProfile: false,
      interactionAvatarProfile: false,
      interactionData: false,
      referencedUsernameProfile: false,
      referencedAvatarProfile: false
    })
  }, [x]), R = r.useCallback(() => (0, p.Z)({
    message: f,
    channel: h,
    compact: m,
    setPopout: x,
    referencedAvatarProfile: v,
    referencedUsernameProfile: C,
    replyReference: f.messageReference,
    replyMessage: j,
    isReplySpineClickable: false,
    showReplySpine: false
  }), [h, m, f, v, j, C, x]);
  return (0, i.jsx)(u.Z, {
    message: f,
    channel: h,
    compact: m,
    isInteractionUserBlocked: O,
    isInteractionUserIgnored: E,
    showAvatarPopout: b,
    showUsernamePopout: g,
    showDataPopout: y,
    showTargetAvatarPopout: v,
    showTargetUsernamePopout: C,
    onClickAvatar: P,
    onClickUsername: _,
    onClickCommand: w,
    onUserContextMenu: S,
    onClickTargetAvatar: A,
    onClickTargetUsername: N,
    onTargetUserContextMenu: T,
    onPopoutRequestClose: M,
    renderTargetMessage: R
  })
});

function h(e, t, n) {
  let {
    message: r,
    channel: l,
    compact: a
  } = e;
  return null != r.interaction && "" !== r.interaction.displayName ? (0, i.jsx)(f, function(e) {
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