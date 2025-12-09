/** Chunk was on 83037 **/
/** chunk id: 37772, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk262777 = require("./262777.js"),
  Chunk628238 = require("./628238.js"),
  Chunk976853 = require("./976853.js"),
  Chunk977683 = require("./977683.js"),
  Chunk869765 = require("./869765.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk709054 = require("./709054.js"),
  Chunk594173 = require("./594173.js"),
  Chunk786761 = require("./786761.js"),
  Chunk493892 = require("./493892.js"),
  Chunk901461 = require("./901461.js"),
  Chunk739566 = require("./739566.js"),
  Chunk443877 = require("./443877.js"),
  Chunk492593 = require("./492593.jsx"),
  Chunk453687 = require("./453687.js"),
  Chunk938353 = require("./938353.jsx"),
  Chunk25015 = require("./25015.jsx"),
  Chunk689674 = require("./689674.js"),
  Chunk963550 = require("./963550.jsx"),
  Chunk845080 = require("./845080.jsx"),
  Chunk295790 = require("./295790.jsx"),
  Chunk145807 = require("./145807.jsx"),
  Chunk56744 = require("./56744.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk378661 = require("./378661.js"),
  Chunk360514 = require("./360514.js");

function G(e) {
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

function U(e, t) {
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
let B = Chunk473749.memo(function e(t) {
  var n;
  let i, {
      channel: l,
      message: s,
      compact: R = false,
      className: M,
      onContextMenu: B,
      onClick: V,
      disableInteraction: H = false,
      hasThread: W,
      treatSpam: z
    } = t,
    K = D.OBS.has(s.type) ? s.messageReference : true,
    Y = (0, a.e7)([h.Z], () => h.Z.getMessageByReference(K)),
    q = (0, a.e7)([g.Z], () => s.type === D.uaV.THREAD_STARTER_MESSAGE && Y.state === h.Y.LOADED ? g.Z.getChannel(Y.message.channel_id) : null),
    Q = p.x4.useSetting(),
    X = p.RS.useSetting(),
    J = p.NA.useSetting(),
    $ = p.QK.useSetting(),
    ee = (0, u.A)((null != (n = s.editedTimestamp) ? n : s.timestamp).valueOf()),
    et = (0, d.Z)(null == l ? true : l.id),
    {
      disableReactionCreates: en
    } = (0, x.Z)(l),
    {
      content: er,
      hasSpoilerEmbeds: ei,
      hasBailedAst: el
    } = (0, I.Z)(s, {
      hideSimpleEmbedContent: X && J,
      allowList: ee,
      allowHeading: ee,
      allowLinks: true,
      previewLinkTarget: true
    }),
    eo = (0, j.ZP)(s),
    ea = (0, a.e7)([g.Z], () => s.hasFlag(D.iLy.HAS_THREAD) && g.Z.getChannel(b.default.castMessageIdAsChannelId(s.id))),
    es = s.type === D.uaV.THREAD_STARTER_MESSAGE && Y.state === h.Y.LOADED && null != q,
    ec = !es && true === i,
    eu = (0, P.Z)({
      message: s,
      channel: l,
      enabled: ec
    }),
    ed = (0, c.v)(s),
    ef = (0, _.ro)(s.id, s.channel_id),
    eh = (0, f.Z)(s),
    ep = (0, E.iG)(s);
  return es ? (0, r.jsx)(e, U(G({}, t), {
    message: Y.message,
    channel: q,
    hasThread: false
  })) : (m.Z.isBlockedForMessage(s) ? i = L.t["+FcYM/"] : m.Z.isIgnoredForMessage(s) ? i = L.t["VFWjc+"] : (0, O.DQ)(s) && z && (i = L.t.xfkfTK), true !== i) ? (0, r.jsx)(F, {
    className: M,
    compact: R,
    count: 1,
    collapsedReason: i
  }) : (0, r.jsx)(C.Z, {
    compact: R,
    className: o()(M, {
      [k.ephemeral]: (0, y.Pv)(s),
      [k.disableInteraction]: H,
      [k.groupStart]: t.isGroupStart
    }),
    childrenRepliedMessage: (0, A.Z)(s, l, K, Y, R),
    childrenHeader: (0, Z.Z)(U(G({}, t), {
      author: eo,
      guildId: l.guild_id
    })),
    childrenAccessories: (0, r.jsx)(S.BB, {
      channel: l,
      message: s,
      hasSpoilerEmbeds: ei,
      hasBailedAst: el,
      compact: R,
      canSuppressEmbeds: false,
      canDeleteAttachments: false,
      disableReactionReads: false,
      disableReactionCreates: en,
      disableComponentInteractivity: true,
      disableReactionUpdates: false,
      renderThreadAccessory: W,
      inlineAttachmentMedia: Q,
      inlineEmbedMedia: X,
      renderEmbeds: J,
      gifAutoPlay: $,
      poll: eh,
      showListsAndHeaders: ee,
      showMaskedLinks: ee,
      shouldHideMediaOptions: et,
      enabledContentHarmTypeFlags: ed,
      ctaButtonType: ef
    }),
    childrenExecutedCommand: (0, T.Z)(s, l, R),
    childrenMessageContent: (0, N.Z)(t, er),
    childrenSystemMessage: (0, w.Z)(t),
    onContextMenu: B,
    onClick: V,
    hasThread: false !== W && null != ea && s.hasFlag(D.iLy.HAS_THREAD),
    hasReply: s.type === D.uaV.REPLY,
    isSystemMessage: (0, v.Z)(s),
    messageRef: eu,
    author: eo,
    "aria-labelledby": ep,
    "aria-roledescription": L.intl.string(L.t.BAB0yK)
  })
});

function F(e) {
  let {
    className: t,
    count: n,
    compact: i,
    collapsedReason: l
  } = e;
  return (0, r.jsx)(C.Z, {
    className: t,
    compact: i,
    role: "group",
    childrenMessageContent: (0, r.jsx)(R.Z, {
      compact: i,
      className: M.blockedSystemMessage,
      iconNode: (0, r.jsx)(s.Dio, {
        size: "md",
        color: "currentColor",
        className: M.blockedIcon
      }),
      children: (0, r.jsx)("div", {
        className: M.blockedMessageText,
        children: L.intl.format(l, {
          count: n
        })
      })
    })
  })
}