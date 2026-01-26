/** Chunk was on 67564 **/
/** chunk id: 653008, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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
let h = Chunk64700.memo(function(e) {
  var t, n;
  let {
    message: h,
    channel: f,
    compact: g = false,
    interactionUsernameProfile: m,
    interactionAvatarProfile: b,
    interactionData: A,
    referencedUsernameProfile: y,
    referencedAvatarProfile: _,
    setPopout: O
  } = e, {
    isInteractionUserBlocked: j,
    isInteractionUserIgnored: v
  } = (0, i.cf)([c.A], () => ({
    isInteractionUserBlocked: c.A.isBlockedForMessage(h),
    isInteractionUserIgnored: c.A.isIgnoredForMessage(h)
  }), [h]), x = (0, i.bG)([o.A], () => o.A.getMessageByReference(null == h ? true : h.messageReference)), E = (0, d.r4)(null == (t = h.interaction) ? true : t.user.id, f.id), C = (0, d.T0)(h.interaction, f, m, O), S = (0, d.Yq)(b, O), I = (0, a.Am)(h), N = (null == I ? true : I.type) === s.G4.APPLICATION_COMMAND ? null == (n = I.target_user) ? true : n.id : true, T = (0, d.r4)(N, f.id), P = (0, d.I)(N, f, y, O), w = (0, d.Ge)(_, O), R = (0, d.U_)(A, O), D = l.useCallback(() => {
    O({
      interactionUsernameProfile: false,
      interactionAvatarProfile: false,
      interactionData: false,
      referencedUsernameProfile: false,
      referencedAvatarProfile: false
    })
  }, [O]), M = l.useCallback(() => (0, p.A)({
    message: h,
    channel: f,
    compact: g,
    setPopout: O,
    referencedAvatarProfile: _,
    referencedUsernameProfile: y,
    replyReference: h.messageReference,
    replyMessage: x,
    isReplySpineClickable: false,
    showReplySpine: false
  }), [f, g, h, _, x, y, O]);
  return (0, r.jsx)(u.A, {
    message: h,
    channel: f,
    compact: g,
    isInteractionUserBlocked: j,
    isInteractionUserIgnored: v,
    showAvatarPopout: b,
    showUsernamePopout: m,
    showDataPopout: A,
    showTargetAvatarPopout: _,
    showTargetUsernamePopout: y,
    onClickAvatar: S,
    onClickUsername: C,
    onClickCommand: R,
    onUserContextMenu: E,
    onClickTargetAvatar: w,
    onClickTargetUsername: P,
    onTargetUserContextMenu: T,
    onPopoutRequestClose: D,
    renderTargetMessage: M
  })
});

function f(e, t, n) {
  let {
    message: l,
    channel: i,
    compact: s
  } = e;
  return null != l.interaction && "" !== l.interaction.displayName ? (0, r.jsx)(h, function(e) {
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
    compact: s,
    setPopout: t
  }, n)) : null
}