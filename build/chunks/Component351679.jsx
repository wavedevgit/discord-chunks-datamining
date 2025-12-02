/** Chunk was on 1272 **/
/** chunk id: 351679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk518738 = require("./518738.js"),
  Chunk628238 = require("./628238.js"),
  Chunk786761 = require("./786761.js"),
  Chunk739566 = require("./739566.js"),
  Chunk492593 = require("./492593.jsx"),
  Chunk453687 = require("./453687.js"),
  Chunk25015 = require("./25015.jsx"),
  Chunk438075 = require("./438075.jsx"),
  Chunk963550 = require("./963550.jsx"),
  Chunk845080 = require("./845080.jsx"),
  Chunk295790 = require("./295790.jsx"),
  Chunk145807 = require("./145807.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk7938 = require("./7938.js"),
  Chunk360514 = require("./360514.js");

function T(e) {
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
let N = Chunk473749.memo(function(e) {
  var t, n, i, l;
  let {
    message: N,
    className: j,
    onContextMenu: P,
    onClick: x,
    hideSimpleEmbedContent: A = true,
    channel: Z,
    isGroupStart: w,
    animateAvatar: L,
    subscribeToComponentDispatch: R,
    renderThreadAccessory: D
  } = e, M = function(e, t) {
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
  }(e, ["message", "className", "onContextMenu", "onClick", "hideSimpleEmbedContent", "channel", "isGroupStart", "animateAvatar", "subscribeToComponentDispatch", "renderThreadAccessory"]), k = N.type === I.uaV.POLL_RESULT || null != (t = e.disableInteraction) && t, U = N.isFirstMessageInForumPost(Z), G = (0, u.A)((null != (n = N.editedTimestamp) ? n : N.timestamp).valueOf()), {
    content: B,
    hasSpoilerEmbeds: H
  } = (0, g.Z)(N, {
    hideSimpleEmbedContent: A,
    allowList: U || G,
    allowHeading: U || G,
    allowLinks: true,
    previewLinkTarget: true
  }), V = (0, s.JA)(N.id), F = (0, p.ZP)(N), z = (0, o.e7)([v.Z], () => N.hasFlag(I.iLy.HAS_THREAD) && v.Z.getChannel(y.default.castMessageIdAsChannelId(N.id))), Y = (0, c.p9)({
    guildId: Z.guild_id,
    roleId: F.iconRoleId
  }), W = (0, h.iG)(N), q = (0, h.Gx)(N);
  return (0, r.jsx)(f.Z, T({
    compact: false,
    className: a()(j, C.icymiMessageWrapper, {
      [S.ephemeral]: (0, d.Pv)(N),
      [S.disableInteraction]: k
    }),
    disableInteraction: k,
    childrenExecutedCommand: (0, O.Z)(N, Z, false),
    childrenHeader: (0, b.Z)({
      message: N,
      channel: Z,
      author: F,
      guildId: Z.guild_id,
      compact: false,
      animateAvatar: L,
      isGroupStart: true,
      roleIcon: Y,
      hideTimestamp: true,
      hideGuildTag: false
    }),
    childrenAccessories: e.hideAccessories ? true : (0, m.Q)(e, H),
    childrenMessageContent: (0, _.Z)(e, B),
    childrenSystemMessage: (0, E.Z)((i = T({}, e), l = l = {
      disableInteraction: k
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(l)).forEach(function(e) {
      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
    }), i)),
    onContextMenu: P,
    onClick: x,
    hasThread: D && null != z && N.hasFlag(I.iLy.HAS_THREAD),
    hasReply: false,
    "aria-labelledby": W,
    "aria-describedby": q,
    author: F
  }, V, M))
})