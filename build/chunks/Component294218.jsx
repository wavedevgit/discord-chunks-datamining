/** Chunk was on 31253 **/
/** chunk id: 294218, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function b(e) {
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
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = Chunk647438.memo(function(e) {
  var t, n;
  let {
    message: i,
    compact: l = false,
    className: h,
    onContextMenu: U,
    onClick: M,
    hideSimpleEmbedContent: k = true,
    channel: L,
    isGroupStart: Z,
    animateAvatar: j,
    subscribeToComponentDispatch: v,
    renderThreadAccessory: F,
    trackAnnouncementViews: V = false
  } = e, G = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["message", "compact", "className", "onContextMenu", "onClick", "hideSimpleEmbedContent", "channel", "isGroupStart", "animateAvatar", "subscribeToComponentDispatch", "renderThreadAccessory", "trackAnnouncementViews"]), x = i.type === P.uaV.POLL_RESULT || null != (t = e.disableInteraction) && t, w = i.isFirstMessageInForumPost(L), B = (0, u.A)((null != (n = i.editedTimestamp) ? n : i.timestamp).valueOf()), {
    content: W,
    hasSpoilerEmbeds: H
  } = (0, S.Z)(i, {
    hideSimpleEmbedContent: k,
    allowList: w || B,
    allowHeading: w || B,
    allowLinks: true,
    previewLinkTarget: true
  }), Y = i.type === P.uaV.REPLY ? i.messageReference : true, K = (0, c.e7)([_.Z], () => _.Z.getMessageByReference(Y)), z = (0, a.JA)(i.id), q = (0, T.ZP)(i), X = (0, c.e7)([d.Z], () => i.hasFlag(P.iLy.HAS_THREAD) && d.Z.getChannel(E.default.castMessageIdAsChannelId(i.id))), J = (0, s.p9)({
    guildId: L.guild_id,
    roleId: q.iconRoleId
  }), Q = (0, p.Z)({
    message: i,
    channel: L,
    enabled: V
  }), $ = (0, N.iG)(i), ee = (0, N.Gx)(i);
  return (0, r.jsx)(O.Z, b({
    compact: l,
    className: o()(h, {
      [D.ephemeral]: (0, I.Pv)(i),
      [D.disableInteraction]: x
    }),
    disableInteraction: x,
    childrenRepliedMessage: (0, g.Z)(i, L, Y, K, l),
    childrenExecutedCommand: (0, m.Z)(i, L, l),
    childrenHeader: (0, A.Z)(y(b({}, e), {
      guildId: L.guild_id,
      author: q,
      roleIcon: J
    })),
    childrenAccessories: e.hideAccessories ? true : (0, R.Q)(e, H),
    childrenMessageContent: (0, f.Z)(e, W),
    childrenSystemMessage: (0, C.Z)(y(b({}, e), {
      disableInteraction: x
    })),
    onContextMenu: U,
    onClick: M,
    hasThread: F && null != X && i.hasFlag(P.iLy.HAS_THREAD),
    hasReply: i.type === P.uaV.REPLY,
    "aria-labelledby": $,
    "aria-describedby": ee,
    messageRef: Q,
    author: q
  }, z, G))
})