/** Chunk was on 34779 **/
/** chunk id: 37772, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk492593 = require("./492593.js"),
  Chunk453687 = require("./453687.js"),
  Chunk938353 = require("./938353.js"),
  Chunk25015 = require("./25015.jsx"),
  Chunk689674 = require("./689674.js"),
  Chunk963550 = require("./963550.js"),
  Chunk845080 = require("./845080.js"),
  Chunk295790 = require("./295790.js"),
  Chunk145807 = require("./145807.js"),
  Chunk56744 = require("./56744.js"),
  Chunk834129 = require("./834129.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk758010 = require("./758010.js"),
  Chunk30804 = require("./30804.js");

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

function G(e, t) {
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
let B = Chunk73800.memo(function e(t) {
  var n;
  let i, {
      channel: l,
      message: a,
      compact: R = false,
      className: M,
      onContextMenu: B,
      onClick: F,
      disableInteraction: H = false,
      hasThread: z,
      treatSpam: W
    } = t,
    K = D.OBS.has(a.type) ? a.messageReference : true,
    Y = (0, s.e7)([p.Z], () => p.Z.getMessageByReference(K)),
    q = (0, s.e7)([g.Z], () => a.type === D.uaV.THREAD_STARTER_MESSAGE && Y.state === p.Y.LOADED ? g.Z.getChannel(Y.message.channel_id) : null),
    X = f.x4.useSetting(),
    Q = f.RS.useSetting(),
    J = f.NA.useSetting(),
    $ = f.QK.useSetting(),
    ee = (0, u.A)((null != (n = a.editedTimestamp) ? n : a.timestamp).valueOf()),
    et = (0, d.Z)(null == l ? true : l.id),
    {
      disableReactionCreates: en
    } = (0, j.Z)(l),
    {
      content: er,
      hasSpoilerEmbeds: ei
    } = (0, I.Z)(a, {
      hideSimpleEmbedContent: Q && J,
      allowList: ee,
      allowHeading: ee,
      allowLinks: true,
      previewLinkTarget: true
    }),
    el = (0, v.ZP)(a),
    eo = (0, s.e7)([g.Z], () => a.hasFlag(D.iLy.HAS_THREAD) && g.Z.getChannel(b.default.castMessageIdAsChannelId(a.id))),
    es = a.type === D.uaV.THREAD_STARTER_MESSAGE && Y.state === p.Y.LOADED && null != q,
    ea = !es && true === i,
    ec = (0, P.Z)({
      message: a,
      channel: l,
      enabled: ea
    }),
    eu = (0, c.v)(a),
    ed = (0, O.ro)(a.id, a.channel_id),
    eh = (0, h.Z)(a),
    ep = (0, S.iG)(a);
  return es ? <e{...G(U({}, t), {
    message: Y.message,
    channel: q,
    hasThread: false
  })} /> : (m.Z.isBlockedForMessage(a) ? i = L.t["+FcYMz"] : m.Z.isIgnoredForMessage(a) ? i = L.t.VFWjc3 : (0, y.DQ)(a) && W && (i = L.t.xfkfTE), true !== i) ? <V className={M} compact={R} count={1} collapsedReason={i} /> : <E.Z compact={R} className={o()(M, {
      [k.ephemeral]: (0, _.Pv)(a),
      [k.disableInteraction]: H,
      [k.groupStart]: t.isGroupStart
    })} childrenRepliedMessage={(0, A.Z)(a, l, K, Y, R)} childrenHeader={(0, w.Z)(G(U({}, t), {
      author: el,
      guildId: l.guild_id
    }))} childrenAccessories={(0, r.jsx)(x.BB, {
      channel: l,
      message: a,
      hasSpoilerEmbeds: ei,
      compact: R,
      canSuppressEmbeds: false,
      canDeleteAttachments: false,
      disableReactionReads: false,
      disableReactionCreates: en,
      disableComponentInteractivity: true,
      disableReactionUpdates: false,
      renderThreadAccessory: z,
      inlineAttachmentMedia: X,
      inlineEmbedMedia: Q,
      renderEmbeds: J,
      gifAutoPlay: $,
      poll: eh,
      showListsAndHeaders: ee,
      showMaskedLinks: ee,
      shouldHideMediaOptions: et,
      enabledContentHarmTypeFlags: eu,
      ctaButtonType: ed
    })} childrenExecutedCommand={(0, T.Z)(a, l, R)} childrenMessageContent={(0, N.Z)(t, er)} childrenSystemMessage={(0, Z.Z)(t)} onContextMenu={B} onClick={F} hasThread={false !== z && null != eo && a.hasFlag(D.iLy.HAS_THREAD)} hasReply={a.type === D.uaV.REPLY} isSystemMessage={(0, C.Z)(a)} messageRef={ec} author={el} aria-labelledby={ep} aria-roledescription={L.intl.string(L.t.BAB0yM)} />
});

function V(e) {
  let {
    className: t,
    count: n,
    compact: i,
    collapsedReason: l
  } = e;
  return <E.Z className={t} compact={i} role={"group"} childrenMessageContent={(0, r.jsx)(R.Z, {
      compact: i,
      className: M.blockedSystemMessage,
      iconNode: (0, r.jsx)(a.Dio, {
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
    })} />
}