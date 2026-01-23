/** Chunk was on web.js **/
/** chunk id: 636922, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk201275 = require("./201275.js"),
  Chunk384231 = require("./384231.js"),
  Chunk9842 = require("./9842.js"),
  Chunk734057 = require("./734057.js"),
  Chunk661191 = require("./661191.js"),
  Chunk141468 = require("./141468.js"),
  Chunk763754 = require("./763754.js"),
  Chunk491182 = require("./491182.jsx"),
  Chunk860227 = require("./860227.js"),
  Chunk538355 = require("./538355.jsx"),
  Chunk522871 = require("./522871.js"),
  Chunk699352 = require("./699352.jsx"),
  Chunk715628 = require("./715628.jsx"),
  Chunk752636 = require("./752636.jsx"),
  Chunk675722 = require("./675722.jsx"),
  Chunk268719 = require("./268719.jsx"),
  Chunk234957 = require("./234957.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk119907 = require("./119907.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
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

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = x(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function x(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
    trackAnnouncementViews: V = false
  } = e, F = D(e, ["message", "compact", "className", "onContextMenu", "onClick", "hideSimpleEmbedContent", "channel", "isGroupStart", "animateAvatar", "subscribeToComponentDispatch", "renderThreadAccessory", "trackAnnouncementViews"]), B = i.type === T.lAJ.POLL_RESULT || null != (t = e.disableInteraction) && t, H = i.isFirstMessageInForumPost(j), Y = (0, u.S)((null != (n = i.editedTimestamp) ? n : i.timestamp).valueOf()), {
    content: W,
    hasSpoilerEmbeds: K,
    hasBailedAst: z
  } = (0, E.A)(i, {
    hideSimpleEmbedContent: L,
    allowList: H || Y,
    allowHeading: H || Y,
    allowLinks: true,
    previewLinkTarget: true
  }), q = i.type === T.lAJ.REPLY ? i.messageReference : true, Z = (0, l.bG)([d.A], () => d.A.getMessageByReference(q)), X = (0, o.rm)(i.id), Q = (0, h.Ay)(i), J = (0, l.bG)([f.A], () => i.hasFlag(T.pr7.HAS_THREAD) && f.A.getChannel(p.default.castMessageIdAsChannelId(i.id))), $ = (0, c.$7)({
    guildId: j.guild_id,
    roleId: Q.iconRoleId
  }), ee = (0, y.A)({
    message: i,
    channel: j,
    enabled: V
  }), et = (0, g.fF)(i), en = (0, g.ZD)(i);
  return (0, r.jsx)(m.A, w({
    compact: a,
    className: s()(N, {
      [C.M1]: (0, _.ec)(i),
      [C.XN]: B
    }),
    disableInteraction: B,
    childrenRepliedMessage: (0, S.A)(i, j, q, Z, a),
    childrenExecutedCommand: (0, I.A)(i, j, a),
    childrenHeader: (0, v.A)(P(w({}, e), {
      guildId: j.guild_id,
      author: Q,
      roleIcon: $
    })),
    childrenAccessories: e.hideAccessories ? true : (0, b.J)(e, K, z),
    childrenMessageContent: (0, O.A)(e, W),
    childrenSystemMessage: (0, A.A)(P(w({}, e), {
      disableInteraction: B
    })),
    onContextMenu: R,
    onClick: x,
    hasThread: G && null != J && i.hasFlag(T.pr7.HAS_THREAD),
    hasReply: i.type === T.lAJ.REPLY,
    "aria-labelledby": et,
    "aria-describedby": en,
    messageRef: ee,
    author: Q
  }, X, F))
}
let j = Chunk64700.memo(L)