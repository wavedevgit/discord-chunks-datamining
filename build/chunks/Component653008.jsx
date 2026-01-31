/** Chunk was on 17534 **/
/** chunk id: 653008, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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
    channel: g,
    compact: f = false,
    interactionUsernameProfile: m,
    interactionAvatarProfile: b,
    interactionData: A,
    referencedUsernameProfile: y,
    referencedAvatarProfile: O,
    setPopout: _
  } = e, {
    isInteractionUserBlocked: j,
    isInteractionUserIgnored: x
  } = (0, i.cf)([c.A], () => ({
    isInteractionUserBlocked: c.A.isBlockedForMessage(p),
    isInteractionUserIgnored: c.A.isIgnoredForMessage(p)
  }), [p]), v = (0, i.bG)([o.A], () => o.A.getMessageByReference(null == p ? true : p.messageReference)), E = (0, d.r4)(null == (t = p.interaction) ? true : t.user.id, g.id), C = (0, d.T0)(p.interaction, g, m, _), S = (0, d.Yq)(b, _), I = (0, a.Am)(p), N = (null == I ? true : I.type) === s.G4.APPLICATION_COMMAND ? null == (n = I.target_user) ? true : n.id : true, T = (0, d.r4)(N, g.id), P = (0, d.I)(N, g, y, _), w = (0, d.Ge)(O, _), R = (0, d.U_)(A, _), D = l.useCallback(() => {
    _({
      interactionUsernameProfile: false,
      interactionAvatarProfile: false,
      interactionData: false,
      referencedUsernameProfile: false,
      referencedAvatarProfile: false
    })
  }, [_]), L = l.useCallback(() => (0, h.A)({
    message: p,
    channel: g,
    compact: f,
    setPopout: _,
    referencedAvatarProfile: O,
    referencedUsernameProfile: y,
    replyReference: p.messageReference,
    replyMessage: v,
    isReplySpineClickable: false,
    showReplySpine: false
  }), [g, f, p, O, v, y, _]);
  return (0, r.jsx)(u.A, {
    message: p,
    channel: g,
    compact: f,
    isInteractionUserBlocked: j,
    isInteractionUserIgnored: x,
    showAvatarPopout: b,
    showUsernamePopout: m,
    showDataPopout: A,
    showTargetAvatarPopout: O,
    showTargetUsernamePopout: y,
    onClickAvatar: S,
    onClickUsername: C,
    onClickCommand: R,
    onUserContextMenu: E,
    onClickTargetAvatar: w,
    onClickTargetUsername: P,
    onTargetUserContextMenu: T,
    onPopoutRequestClose: D,
    renderTargetMessage: L
  })
});

function g(e, t, n) {
  let {
    message: l,
    channel: i,
    compact: s
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
    compact: s,
    setPopout: t
  }, n)) : null
}