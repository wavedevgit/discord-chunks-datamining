/** Chunk was on web.js **/
/** chunk id: 294218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk518738 = require("./518738.js"),
  Chunk628238 = require("./628238.js"),
  Chunk869765 = require("./869765.js"),
  Chunk592125 = require("./592125.js"),
  Chunk709054 = require("./709054.js"),
  Chunk786761 = require("./786761.js"),
  Chunk739566 = require("./739566.js"),
  Chunk492593 = require("./492593.jsx"),
  Chunk453687 = require("./453687.js"),
  Chunk25015 = require("./25015.jsx"),
  Chunk689674 = require("./689674.js"),
  Chunk438075 = require("./438075.jsx"),
  Chunk963550 = require("./963550.jsx"),
  Chunk845080 = require("./845080.jsx"),
  Chunk295790 = require("./295790.jsx"),
  Chunk145807 = require("./145807.jsx"),
  Chunk56744 = require("./56744.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk360514 = require("./360514.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = x(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function x(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function L(e) {
  var t, n;
  let {
    message: i,
    compact: a = false,
    className: N,
    onContextMenu: P,
    onClick: x,
    hideSimpleEmbedContent: L = true,
    channel: M,
    isGroupStart: j,
    animateAvatar: k,
    subscribeToComponentDispatch: U,
    renderThreadAccessory: G,
    trackAnnouncementViews: B = false
  } = e, Z = D(e, ["message", "compact", "className", "onContextMenu", "onClick", "hideSimpleEmbedContent", "channel", "isGroupStart", "animateAvatar", "subscribeToComponentDispatch", "renderThreadAccessory", "trackAnnouncementViews"]), F = i.type === A.uaV.POLL_RESULT || null != (t = e.disableInteraction) && t, V = i.isFirstMessageInForumPost(M), H = (0, u.A)((null != (n = i.editedTimestamp) ? n : i.timestamp).valueOf()), {
    content: Y,
    hasSpoilerEmbeds: W
  } = (0, E.Z)(i, {
    hideSimpleEmbedContent: L,
    allowList: V || H,
    allowHeading: V || H,
    allowLinks: true,
    previewLinkTarget: true
  }), K = i.type === A.uaV.REPLY ? i.messageReference : true, z = (0, l.e7)([d.Z], () => d.Z.getMessageByReference(K)), q = (0, s.JA)(i.id), X = (0, h.ZP)(i), Q = (0, l.e7)([f.Z], () => i.hasFlag(A.iLy.HAS_THREAD) && f.Z.getChannel(_.default.castMessageIdAsChannelId(i.id))), J = (0, c.p9)({
    guildId: M.guild_id,
    roleId: X.iconRoleId
  }), $ = (0, b.Z)({
    message: i,
    channel: M,
    enabled: B
  }), ee = (0, g.iG)(i), et = (0, g.Gx)(i);
  return (0, r.jsx)(m.Z, R({
    compact: a,
    className: o()(N, {
      [C.ephemeral]: (0, p.Pv)(i),
      [C.disableInteraction]: F
    }),
    disableInteraction: F,
    childrenRepliedMessage: (0, T.Z)(i, M, K, z, a),
    childrenExecutedCommand: (0, S.Z)(i, M, a),
    childrenHeader: (0, v.Z)(w(R({}, e), {
      guildId: M.guild_id,
      author: X,
      roleIcon: J
    })),
    childrenAccessories: e.hideAccessories ? true : (0, y.Q)(e, W),
    childrenMessageContent: (0, O.Z)(e, Y),
    childrenSystemMessage: (0, I.Z)(w(R({}, e), {
      disableInteraction: F
    })),
    onContextMenu: P,
    onClick: x,
    hasThread: G && null != Q && i.hasFlag(A.iLy.HAS_THREAD),
    hasReply: i.type === A.uaV.REPLY,
    "aria-labelledby": ee,
    "aria-describedby": et,
    messageRef: $,
    author: X
  }, q, Z))
}
let M = Chunk647438.memo(L)