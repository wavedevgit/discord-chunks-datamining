/** Chunk was on 82124 **/
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
    compact: g = false,
    interactionUsernameProfile: m,
    interactionAvatarProfile: b,
    interactionData: y,
    referencedUsernameProfile: v,
    referencedAvatarProfile: O,
    setPopout: j
  } = e, {
    isInteractionUserBlocked: x,
    isInteractionUserIgnored: C
  } = (0, l.cj)([c.Z], () => ({
    isInteractionUserBlocked: c.Z.isBlockedForMessage(f),
    isInteractionUserIgnored: c.Z.isIgnoredForMessage(f)
  }), [f]), E = (0, l.e7)([s.Z], () => s.Z.getMessageByReference(null == f ? true : f.messageReference)), S = (0, d.wq)(null == (t = f.interaction) ? true : t.user.id, h.id), _ = (0, d.Nk)(f.interaction, h, m, j), I = (0, d.NU)(b, j), P = (0, o.t0)(f), Z = (null == P ? true : P.type) === a.B8.APPLICATION_COMMAND ? null == (n = P.target_user) ? true : n.id : true, N = (0, d.wq)(Z, h.id), T = (0, d.JC)(Z, h, v, j), A = (0, d.rY)(O, j), w = (0, d.Xn)(y, j), R = i.useCallback(() => {
    j({
      interactionUsernameProfile: false,
      interactionAvatarProfile: false,
      interactionData: false,
      referencedUsernameProfile: false,
      referencedAvatarProfile: false
    })
  }, [j]), D = i.useCallback(() => (0, p.Z)({
    message: f,
    channel: h,
    compact: g,
    setPopout: j,
    referencedAvatarProfile: O,
    referencedUsernameProfile: v,
    replyReference: f.messageReference,
    replyMessage: E,
    isReplySpineClickable: false,
    showReplySpine: false
  }), [h, g, f, O, E, v, j]);
  return (0, r.jsx)(u.Z, {
    message: f,
    channel: h,
    compact: g,
    isInteractionUserBlocked: x,
    isInteractionUserIgnored: C,
    showAvatarPopout: b,
    showUsernamePopout: m,
    showDataPopout: y,
    showTargetAvatarPopout: O,
    showTargetUsernamePopout: v,
    onClickAvatar: I,
    onClickUsername: _,
    onClickCommand: w,
    onUserContextMenu: S,
    onClickTargetAvatar: A,
    onClickTargetUsername: T,
    onTargetUserContextMenu: N,
    onPopoutRequestClose: R,
    renderTargetMessage: D
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