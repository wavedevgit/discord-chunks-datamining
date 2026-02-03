/** Chunk was on 61344 **/
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
let p = Chunk64700.memo(function(e) {
  var t, n;
  let {
    message: p,
    channel: f,
    compact: m = false,
    interactionUsernameProfile: g,
    interactionAvatarProfile: A,
    interactionData: b,
    referencedUsernameProfile: _,
    referencedAvatarProfile: y,
    setPopout: v
  } = e, {
    isInteractionUserBlocked: E,
    isInteractionUserIgnored: O
  } = (0, i.cf)([c.A], () => ({
    isInteractionUserBlocked: c.A.isBlockedForMessage(p),
    isInteractionUserIgnored: c.A.isIgnoredForMessage(p)
  }), [p]), C = (0, i.bG)([o.A], () => o.A.getMessageByReference(null == p ? true : p.messageReference)), S = (0, d.r4)(null == (t = p.interaction) ? true : t.user.id, f.id), x = (0, d.T0)(p.interaction, f, g, v), j = (0, d.Yq)(A, v), I = (0, s.Am)(p), T = (null == I ? true : I.type) === a.G4.APPLICATION_COMMAND ? null == (n = I.target_user) ? true : n.id : true, N = (0, d.r4)(T, f.id), P = (0, d.I)(T, f, _, v), w = (0, d.Ge)(y, v), R = (0, d.U_)(b, v), D = r.useCallback(() => {
    v({
      interactionUsernameProfile: false,
      interactionAvatarProfile: false,
      interactionData: false,
      referencedUsernameProfile: false,
      referencedAvatarProfile: false
    })
  }, [v]), M = r.useCallback(() => (0, h.A)({
    message: p,
    channel: f,
    compact: m,
    setPopout: v,
    referencedAvatarProfile: y,
    referencedUsernameProfile: _,
    replyReference: p.messageReference,
    replyMessage: C,
    isReplySpineClickable: false,
    showReplySpine: false
  }), [f, m, p, y, C, _, v]);
  return (0, l.jsx)(u.A, {
    message: p,
    channel: f,
    compact: m,
    isInteractionUserBlocked: E,
    isInteractionUserIgnored: O,
    showAvatarPopout: A,
    showUsernamePopout: g,
    showDataPopout: b,
    showTargetAvatarPopout: y,
    showTargetUsernamePopout: _,
    onClickAvatar: j,
    onClickUsername: x,
    onClickCommand: R,
    onUserContextMenu: S,
    onClickTargetAvatar: w,
    onClickTargetUsername: P,
    onTargetUserContextMenu: N,
    onPopoutRequestClose: D,
    renderTargetMessage: M
  })
});

function f(e, t, n) {
  let {
    message: r,
    channel: i,
    compact: a
  } = e;
  return null != r.interaction && "" !== r.interaction.displayName ? (0, l.jsx)(p, function(e) {
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
    message: r,
    channel: i,
    compact: a,
    setPopout: t
  }, n)) : null
}