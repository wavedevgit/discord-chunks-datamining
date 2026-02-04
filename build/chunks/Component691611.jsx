/** Chunk was on 21738 **/
/** chunk id: 691611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk201275 = require("./201275.js"),
  Chunk384231 = require("./384231.js"),
  Chunk141468 = require("./141468.js"),
  Chunk763754 = require("./763754.js"),
  Chunk491182 = require("./491182.jsx"),
  Chunk860227 = require("./860227.js"),
  Chunk538355 = require("./538355.jsx"),
  Chunk699352 = require("./699352.jsx"),
  Chunk715628 = require("./715628.jsx"),
  Chunk752636 = require("./752636.jsx"),
  Chunk675722 = require("./675722.jsx"),
  Chunk268719 = require("./268719.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js"),
  Chunk456107 = require("./456107.js"),
  Chunk119907 = require("./119907.js");

function C(e) {
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
let N = Chunk64700.memo(function(e) {
  var t, n, i, l;
  let {
    message: N,
    className: T,
    onContextMenu: j,
    onClick: x,
    hideSimpleEmbedContent: P = true,
    channel: w,
    isGroupStart: L,
    animateAvatar: R,
    subscribeToComponentDispatch: D,
    renderThreadAccessory: M
  } = e, k = function(e, t) {
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
  }(e, ["message", "className", "onContextMenu", "onClick", "hideSimpleEmbedContent", "channel", "isGroupStart", "animateAvatar", "subscribeToComponentDispatch", "renderThreadAccessory"]), U = N.type === I.lAJ.POLL_RESULT || null != (t = e.disableInteraction) && t, G = N.isFirstMessageInForumPost(w), V = (0, u.S)((null != (n = N.editedTimestamp) ? n : N.timestamp).valueOf()), {
    content: B,
    hasSpoilerEmbeds: H,
    hasBailedAst: F
  } = (0, g.A)(N, {
    hideSimpleEmbedContent: P,
    allowList: G || V,
    allowHeading: G || V,
    allowLinks: true,
    previewLinkTarget: true
  }), Y = (0, s.rm)(N.id), K = (0, p.Ay)(N), W = (0, o.bG)([O.A], () => N.hasFlag(I.pr7.HAS_THREAD) && O.A.getChannel(y.default.castMessageIdAsChannelId(N.id))), q = (0, c.$7)({
    guildId: w.guild_id,
    roleId: K.iconRoleId
  }), z = (0, f.fF)(N), Q = (0, f.ZD)(N);
  return (0, r.jsx)(h.A, C({
    compact: false,
    className: a()(T, v.i, {
      [S.M1]: (0, d.ec)(N),
      [S.XN]: U
    }),
    disableInteraction: U,
    childrenExecutedCommand: (0, E.A)(N, w, false),
    childrenHeader: (0, _.A)({
      message: N,
      channel: w,
      author: K,
      guildId: w.guild_id,
      compact: false,
      animateAvatar: R,
      isGroupStart: true,
      roleIcon: q,
      hideTimestamp: true,
      hideGuildTag: false
    }),
    childrenAccessories: e.hideAccessories ? true : (0, m.J)(e, H, F),
    childrenMessageContent: (0, A.A)(e, B),
    childrenSystemMessage: (0, b.A)((i = C({}, e), l = l = {
      disableInteraction: U
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
    onContextMenu: j,
    onClick: x,
    hasThread: M && null != W && N.hasFlag(I.pr7.HAS_THREAD),
    hasReply: false,
    "aria-labelledby": z,
    "aria-describedby": Q,
    author: K
  }, Y, k))
})