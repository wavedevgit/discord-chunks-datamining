/** Chunk was on 93140 **/
/** chunk id: 636922, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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

function g(e) {
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

function h(e, t) {
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
let b = Chunk64700.memo(function(e) {
  var t, n;
  let {
    message: i,
    compact: l = false,
    className: b,
    onContextMenu: U,
    onClick: M,
    hideSimpleEmbedContent: j = true,
    channel: k,
    isGroupStart: v,
    animateAvatar: L,
    subscribeToComponentDispatch: x,
    renderThreadAccessory: G,
    trackAnnouncementViews: w = false
  } = e, B = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["message", "compact", "className", "onContextMenu", "onClick", "hideSimpleEmbedContent", "channel", "isGroupStart", "animateAvatar", "subscribeToComponentDispatch", "renderThreadAccessory", "trackAnnouncementViews"]), q = i.type === m.lAJ.POLL_RESULT || null != (t = e.disableInteraction) && t, X = i.isFirstMessageInForumPost(k), V = (0, u.S)((null != (n = i.editedTimestamp) ? n : i.timestamp).valueOf()), {
    content: F,
    hasSpoilerEmbeds: H,
    hasBailedAst: W
  } = (0, N.A)(i, {
    hideSimpleEmbedContent: j,
    allowList: X || V,
    allowHeading: X || V,
    allowLinks: true,
    previewLinkTarget: true
  }), K = i.type === m.lAJ.REPLY ? i.messageReference : true, Y = (0, s.bG)([E.A], () => E.A.getMessageByReference(K)), $ = (0, a.rm)(i.id), z = (0, T.Ay)(i), J = (0, s.bG)([d.A], () => i.hasFlag(m.pr7.HAS_THREAD) && d.A.getChannel(_.default.castMessageIdAsChannelId(i.id))), Z = (0, c.$7)({
    guildId: k.guild_id,
    roleId: z.iconRoleId
  }), Q = (0, p.A)({
    message: i,
    channel: k,
    enabled: w
  }), ee = (0, O.fF)(i), et = (0, O.ZD)(i);
  return (0, r.jsx)(I.A, g({
    compact: l,
    className: o()(b, {
      [D.M1]: (0, A.ec)(i),
      [D.XN]: q
    }),
    disableInteraction: q,
    childrenRepliedMessage: (0, C.A)(i, k, K, Y, l),
    childrenExecutedCommand: (0, f.A)(i, k, l),
    childrenHeader: (0, P.A)(h(g({}, e), {
      guildId: k.guild_id,
      author: z,
      roleIcon: Z
    })),
    childrenAccessories: e.hideAccessories ? true : (0, R.J)(e, H, W),
    childrenMessageContent: (0, S.A)(e, F),
    childrenSystemMessage: (0, y.A)(h(g({}, e), {
      disableInteraction: q
    })),
    onContextMenu: U,
    onClick: M,
    hasThread: G && null != J && i.hasFlag(m.pr7.HAS_THREAD),
    hasReply: i.type === m.lAJ.REPLY,
    "aria-labelledby": ee,
    "aria-describedby": et,
    messageRef: Q,
    author: z
  }, $, B))
})