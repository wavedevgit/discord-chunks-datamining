/** Chunk was on 97492 **/
/** chunk id: 653008, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk155718 = require("./155718.js"),
  Chunk168186 = require("./168186.js"),
  Chunk9842 = require("./9842.js"),
  Chunk994500 = require("./994500.js"),
  Chunk301960 = require("./301960.jsx"),
  Chunk112758 = require("./112758.jsx"),
  Chunk162792 = require("./162792.jsx");
let p = Chunk64700.memo(function(e) {
  var t, n;
  let {
    message: p,
    channel: h,
    compact: b = false,
    interactionUsernameProfile: g,
    interactionAvatarProfile: m,
    interactionData: A,
    referencedUsernameProfile: y,
    referencedAvatarProfile: O,
    setPopout: j
  } = e, {
    isInteractionUserBlocked: v,
    isInteractionUserIgnored: x
  } = (0, i.cf)([c.A], () => ({
    isInteractionUserBlocked: c.A.isBlockedForMessage(p),
    isInteractionUserIgnored: c.A.isIgnoredForMessage(p)
  }), [p]), E = (0, i.bG)([o.A], () => o.A.getMessageByReference(null == p ? true : p.messageReference)), _ = (0, d.r4)(null == (t = p.interaction) ? true : t.user.id, h.id), C = (0, d.T0)(p.interaction, h, g, j), S = (0, d.Yq)(m, j), I = (0, s.Am)(p), N = (null == I ? true : I.type) === a.G4.APPLICATION_COMMAND ? null == (n = I.target_user) ? true : n.id : true, T = (0, d.r4)(N, h.id), P = (0, d.I)(N, h, y, j), w = (0, d.Ge)(O, j), R = (0, d.U_)(A, j), D = l.useCallback(() => {
    j({
      interactionUsernameProfile: false,
      interactionAvatarProfile: false,
      interactionData: false,
      referencedUsernameProfile: false,
      referencedAvatarProfile: false
    })
  }, [j]), M = l.useCallback(() => (0, f.A)({
    message: p,
    channel: h,
    compact: b,
    setPopout: j,
    referencedAvatarProfile: O,
    referencedUsernameProfile: y,
    replyReference: p.messageReference,
    replyMessage: E,
    isReplySpineClickable: false,
    showReplySpine: false
  }), [h, b, p, O, E, y, j]);
  return (0, r.jsx)(u.A, {
    message: p,
    channel: h,
    compact: b,
    isInteractionUserBlocked: v,
    isInteractionUserIgnored: x,
    showAvatarPopout: m,
    showUsernamePopout: g,
    showDataPopout: A,
    showTargetAvatarPopout: O,
    showTargetUsernamePopout: y,
    onClickAvatar: S,
    onClickUsername: C,
    onClickCommand: R,
    onUserContextMenu: _,
    onClickTargetAvatar: w,
    onClickTargetUsername: P,
    onTargetUserContextMenu: T,
    onPopoutRequestClose: D,
    renderTargetMessage: M
  })
});

function h(e, t, n) {
  let {
    message: l,
    channel: i,
    compact: a
  } = e;
  return null != l.interaction && "" !== l.interaction.displayName ? (0, r.jsx)(p, function(e) {
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
    message: l,
    channel: i,
    compact: a,
    setPopout: t
  }, n)) : null
}