/** Chunk was on 73726 **/
/** chunk id: 737243, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
let f = Chunk647438.memo(function(e) {
  var t, n;
  let {
    message: f,
    channel: h,
    compact: m = false,
    interactionUsernameProfile: g,
    interactionAvatarProfile: b,
    interactionData: _,
    referencedUsernameProfile: y,
    referencedAvatarProfile: C,
    setPopout: v
  } = e, {
    isInteractionUserBlocked: x,
    isInteractionUserIgnored: O
  } = (0, l.cj)([c.Z], () => ({
    isInteractionUserBlocked: c.Z.isBlockedForMessage(f),
    isInteractionUserIgnored: c.Z.isIgnoredForMessage(f)
  }), [f]), E = (0, l.e7)([s.Z], () => s.Z.getMessageByReference(null == f ? true : f.messageReference)), j = (0, d.wq)(null == (t = f.interaction) ? true : t.user.id, h.id), S = (0, d.Nk)(f.interaction, h, g, v), P = (0, d.NU)(b, v), I = (0, o.t0)(f), Z = (null == I ? true : I.type) === a.B8.APPLICATION_COMMAND ? null == (n = I.target_user) ? true : n.id : true, T = (0, d.wq)(Z, h.id), N = (0, d.JC)(Z, h, y, v), A = (0, d.rY)(C, v), w = (0, d.Xn)(_, v), M = i.useCallback(() => {
    v({
      interactionUsernameProfile: false,
      interactionAvatarProfile: false,
      interactionData: false,
      referencedUsernameProfile: false,
      referencedAvatarProfile: false
    })
  }, [v]), R = i.useCallback(() => (0, p.Z)({
    message: f,
    channel: h,
    compact: m,
    setPopout: v,
    referencedAvatarProfile: C,
    referencedUsernameProfile: y,
    replyReference: f.messageReference,
    replyMessage: E,
    isReplySpineClickable: false,
    showReplySpine: false
  }), [h, m, f, C, E, y, v]);
  return (0, r.jsx)(u.Z, {
    message: f,
    channel: h,
    compact: m,
    isInteractionUserBlocked: x,
    isInteractionUserIgnored: O,
    showAvatarPopout: b,
    showUsernamePopout: g,
    showDataPopout: _,
    showTargetAvatarPopout: C,
    showTargetUsernamePopout: y,
    onClickAvatar: P,
    onClickUsername: S,
    onClickCommand: w,
    onUserContextMenu: j,
    onClickTargetAvatar: A,
    onClickTargetUsername: N,
    onTargetUserContextMenu: T,
    onPopoutRequestClose: M,
    renderTargetMessage: R
  })
});

function h(e, t, n) {
  let {
    message: i,
    channel: l,
    compact: a
  } = e;
  return null != i.interaction && "" !== i.interaction.displayName ? (0, r.jsx)(f, function(e) {
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