/** Chunk was on 1113 **/
/** chunk id: 906141, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => B
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk33358 = require("./33358.js"),
  Chunk384231 = require("./384231.js"),
  Chunk207133 = require("./207133.js"),
  Chunk704413 = require("./704413.js"),
  Chunk9842 = require("./9842.js"),
  Chunk253932 = require("./253932.js"),
  Chunk734057 = require("./734057.js"),
  Chunk994500 = require("./994500.js"),
  Chunk661191 = require("./661191.js"),
  Chunk988012 = require("./988012.js"),
  Chunk141468 = require("./141468.js"),
  Chunk694318 = require("./694318.js"),
  Chunk143413 = require("./143413.js"),
  Chunk763754 = require("./763754.js"),
  Chunk467073 = require("./467073.js"),
  Chunk491182 = require("./491182.jsx"),
  Chunk860227 = require("./860227.js"),
  Chunk756369 = require("./756369.jsx"),
  Chunk538355 = require("./538355.jsx"),
  Chunk522871 = require("./522871.js"),
  Chunk715628 = require("./715628.jsx"),
  Chunk752636 = require("./752636.jsx"),
  Chunk675722 = require("./675722.jsx"),
  Chunk268719 = require("./268719.jsx"),
  Chunk234957 = require("./234957.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk410132 = require("./410132.js"),
  Chunk119907 = require("./119907.js");

function U(e) {
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

function V(e, t) {
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
let B = Chunk64700.memo(function e(t) {
  var n;
  let l, {
      channel: i,
      message: o,
      compact: D = false,
      className: k,
      onContextMenu: B,
      onClick: F,
      disableInteraction: K = false,
      hasThread: Y,
      treatSpam: W
    } = t,
    z = L.sl8.has(o.type) ? o.messageReference : true,
    q = (0, a.bG)([p.A], () => p.A.getMessageByReference(z)),
    X = (0, a.bG)([f.A], () => o.type === L.lAJ.THREAD_STARTER_MESSAGE && q.state === p.a.LOADED ? f.A.getChannel(q.message.channel_id) : null),
    J = g.X6.useSetting(),
    Q = g.hD.useSetting(),
    Z = g.rs.useSetting(),
    $ = g.kt.useSetting(),
    ee = (0, u.S)((null != (n = o.editedTimestamp) ? n : o.timestamp).valueOf()),
    et = (0, d.A)(null == i ? true : i.id),
    {
      disableReactionCreates: en
    } = (0, j.A)(i),
    {
      content: er,
      hasSpoilerEmbeds: el,
      hasBailedAst: ei
    } = (0, S.A)(o, {
      hideSimpleEmbedContent: Q && Z,
      allowList: ee,
      allowHeading: ee,
      allowLinks: true,
      previewLinkTarget: true
    }),
    es = (0, x.Ay)(o),
    ea = (0, a.bG)([f.A], () => o.hasFlag(L.pr7.HAS_THREAD) && f.A.getChannel(b.default.castMessageIdAsChannelId(o.id))),
    eo = o.type === L.lAJ.THREAD_STARTER_MESSAGE && q.state === p.a.LOADED && null != X,
    ec = !eo && true === l,
    eu = (0, I.A)({
      message: o,
      channel: i,
      enabled: ec
    }),
    ed = (0, c.P)(o),
    eh = (0, A._f)(o.id, o.channel_id),
    ep = (0, h.A)(o),
    eg = (0, E.fF)(o);
  return eo ? (0, r.jsx)(e, V(U({}, t), {
    message: q.message,
    channel: X,
    hasThread: false
  })) : (m.A.isBlockedForMessage(o) ? l = M.t["+FcYM/"] : m.A.isIgnoredForMessage(o) ? l = M.t["VFWjc+"] : (0, O.kf)(o) && W && (l = M.t.xfkfTK), true !== l) ? (0, r.jsx)(H, {
    className: k,
    compact: D,
    count: 1,
    collapsedReason: l
  }) : (0, r.jsx)(v.A, {
    compact: D,
    className: s()(k, {
      [G.M1]: (0, y.ec)(o),
      [G.XN]: K,
      [G._A]: t.isGroupStart
    }),
    childrenRepliedMessage: (0, R.A)(o, i, z, q, D),
    childrenHeader: (0, T.A)(V(U({}, t), {
      author: es,
      guildId: i.guild_id
    })),
    childrenAccessories: (0, r.jsx)(C.iV, {
      channel: i,
      message: o,
      hasSpoilerEmbeds: el,
      hasBailedAst: ei,
      compact: D,
      canSuppressEmbeds: false,
      canDeleteAttachments: false,
      disableReactionReads: false,
      disableReactionCreates: en,
      disableComponentInteractivity: true,
      disableReactionUpdates: false,
      renderThreadAccessory: Y,
      inlineAttachmentMedia: J,
      inlineEmbedMedia: Q,
      renderEmbeds: Z,
      gifAutoPlay: $,
      poll: ep,
      showListsAndHeaders: ee,
      showMaskedLinks: ee,
      shouldHideMediaOptions: et,
      enabledContentHarmTypeFlags: ed,
      ctaButtonType: eh
    }),
    childrenExecutedCommand: (0, w.A)(o, i, D),
    childrenMessageContent: (0, N.A)(t, er),
    childrenSystemMessage: (0, P.A)(t),
    onContextMenu: B,
    onClick: F,
    hasThread: false !== Y && null != ea && o.hasFlag(L.pr7.HAS_THREAD),
    hasReply: o.type === L.lAJ.REPLY,
    isSystemMessage: (0, _.A)(o),
    messageRef: eu,
    author: es,
    "aria-labelledby": eg,
    "aria-roledescription": M.intl.string(M.t.BAB0yK)
  })
});

function H(e) {
  let {
    className: t,
    count: n,
    compact: l,
    collapsedReason: i
  } = e;
  return (0, r.jsx)(v.A, {
    className: t,
    compact: l,
    role: "group",
    childrenMessageContent: (0, r.jsx)(D.A, {
      compact: l,
      className: k.L9,
      iconNode: (0, r.jsx)(o.PGe, {
        size: "md",
        color: "currentColor",
        className: k.Q6
      }),
      children: (0, r.jsx)("div", {
        className: k.Fo,
        children: M.intl.format(i, {
          count: n
        })
      })
    })
  })
}