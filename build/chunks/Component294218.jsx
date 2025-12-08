/** Chunk was on web.js **/
/** chunk id: 294218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function P(e) {
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

function R(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
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
    onContextMenu: R,
    onClick: x,
    hideSimpleEmbedContent: L = true,
    channel: j,
    isGroupStart: M,
    animateAvatar: k,
    subscribeToComponentDispatch: U,
    renderThreadAccessory: G,
    trackAnnouncementViews: Z = false
  } = e, B = D(e, ["message", "compact", "className", "onContextMenu", "onClick", "hideSimpleEmbedContent", "channel", "isGroupStart", "animateAvatar", "subscribeToComponentDispatch", "renderThreadAccessory", "trackAnnouncementViews"]), F = i.type === A.uaV.POLL_RESULT || null != (t = e.disableInteraction) && t, V = i.isFirstMessageInForumPost(j), H = (0, u.A)((null != (n = i.editedTimestamp) ? n : i.timestamp).valueOf()), {
    content: Y,
    hasSpoilerEmbeds: W,
    hasBailedAst: K
  } = (0, E.Z)(i, {
    hideSimpleEmbedContent: L,
    allowList: V || H,
    allowHeading: V || H,
    allowLinks: true,
    previewLinkTarget: true
  }), z = i.type === A.uaV.REPLY ? i.messageReference : true, q = (0, l.e7)([d.Z], () => d.Z.getMessageByReference(z)), Q = (0, s.JA)(i.id), X = (0, m.ZP)(i), J = (0, l.e7)([f.Z], () => i.hasFlag(A.iLy.HAS_THREAD) && f.Z.getChannel(p.default.castMessageIdAsChannelId(i.id))), $ = (0, c.p9)({
    guildId: j.guild_id,
    roleId: X.iconRoleId
  }), ee = (0, b.Z)({
    message: i,
    channel: j,
    enabled: Z
  }), et = (0, g.iG)(i), en = (0, g.Gx)(i);
  return (0, r.jsx)(h.Z, P({
    compact: a,
    className: o()(N, {
      [C.ephemeral]: (0, _.Pv)(i),
      [C.disableInteraction]: F
    }),
    disableInteraction: F,
    childrenRepliedMessage: (0, T.Z)(i, j, z, q, a),
    childrenExecutedCommand: (0, I.Z)(i, j, a),
    childrenHeader: (0, v.Z)(w(P({}, e), {
      guildId: j.guild_id,
      author: X,
      roleIcon: $
    })),
    childrenAccessories: e.hideAccessories ? true : (0, y.Q)(e, W, K),
    childrenMessageContent: (0, O.Z)(e, Y),
    childrenSystemMessage: (0, S.Z)(w(P({}, e), {
      disableInteraction: F
    })),
    onContextMenu: R,
    onClick: x,
    hasThread: G && null != J && i.hasFlag(A.iLy.HAS_THREAD),
    hasReply: i.type === A.uaV.REPLY,
    "aria-labelledby": et,
    "aria-describedby": en,
    messageRef: ee,
    author: X
  }, Q, B))
}
let j = Chunk473749.memo(L)