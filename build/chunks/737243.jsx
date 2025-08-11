/** Chunk was on web.js **/
/** chunk id: 737243, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk581364 = require("./581364.js"),
  Chunk869765 = require("./869765.js"),
  Chunk699516 = require("./699516.js"),
  Chunk697451 = require("./697451.jsx"),
  Chunk348238 = require("./348238.jsx"),
  Chunk614584 = require("./614584.jsx");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let h = Chunk73800.memo(function(e) {
  var t, n;
  let {
    message: _,
    channel: p,
    compact: h = false,
    interactionUsernameProfile: m,
    interactionAvatarProfile: g,
    interactionData: E,
    referencedUsernameProfile: b,
    referencedAvatarProfile: y,
    setPopout: O
  } = e, {
    isInteractionUserBlocked: v,
    isInteractionUserIgnored: I
  } = (0, o.cj)([c.Z], () => ({
    isInteractionUserBlocked: c.Z.isBlockedForMessage(_),
    isInteractionUserIgnored: c.Z.isIgnoredForMessage(_)
  }), [_]), T = (0, o.e7)([l.Z], () => l.Z.getMessageByReference(null == _ ? true : _.messageReference)), S = (0, d.wq)(null == (t = _.interaction) ? true : t.user.id, p.id), A = (0, d.Nk)(_.interaction, p, m, O), N = (0, d.NU)(g, O), C = (0, s.t0)(_), R = (null == C ? true : C.type) === a.B8.APPLICATION_COMMAND ? null == (n = C.target_user) ? true : n.id : true, P = (0, d.wq)(R, p.id), w = (0, d.JC)(R, p, b, O), D = (0, d.rY)(y, O), L = (0, d.Xn)(E, O), x = i.useCallback(() => {
    O({
      interactionUsernameProfile: false,
      interactionAvatarProfile: false,
      interactionData: false,
      referencedUsernameProfile: false,
      referencedAvatarProfile: false
    })
  }, [O]), M = i.useCallback(() => (0, f.Z)({
    message: _,
    channel: p,
    compact: h,
    setPopout: O,
    referencedAvatarProfile: y,
    referencedUsernameProfile: b,
    replyReference: _.messageReference,
    replyMessage: T,
    isReplySpineClickable: false,
    showReplySpine: false
  }), [p, h, _, y, T, b, O]);
  return <u.Z message={_} channel={p} compact={h} isInteractionUserBlocked={v} isInteractionUserIgnored={I} showAvatarPopout={g} showUsernamePopout={m} showDataPopout={E} showTargetAvatarPopout={y} showTargetUsernamePopout={b} onClickAvatar={N} onClickUsername={A} onClickCommand={L} onUserContextMenu={S} onClickTargetAvatar={D} onClickTargetUsername={w} onTargetUserContextMenu={P} onPopoutRequestClose={x} renderTargetMessage={M} />
});

function m(e, t, n) {
  let {
    message: i,
    channel: o,
    compact: a
  } = e;
  return null != i.interaction && "" !== i.interaction.displayName ? <h{...p({
    message: i,
    channel: o,
    compact: a,
    setPopout: t
  }, n)} /> : null
}