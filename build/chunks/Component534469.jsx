/** Chunk was on web.js **/
/** chunk id: 534469, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AP: () => ea,
  Ru: () => ec,
  ZP: () => ed
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk223606 = require("./223606.js"),
  Chunk518738 = require("./518738.js"),
  Chunk628238 = require("./628238.js"),
  Chunk911266 = require("./911266.jsx"),
  Chunk111810 = require("./111810.js"),
  Chunk235894 = require("./235894.js"),
  Chunk807092 = require("./807092.js"),
  Chunk869765 = require("./869765.js"),
  Chunk703656 = require("./703656.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk906467 = require("./906467.js"),
  Chunk323873 = require("./323873.js"),
  Chunk709054 = require("./709054.js"),
  Chunk786761 = require("./786761.js"),
  Chunk534091 = require("./534091.js"),
  Chunk901461 = require("./901461.js"),
  Chunk739566 = require("./739566.js"),
  Chunk233715 = require("./233715.jsx"),
  Chunk492593 = require("./492593.jsx"),
  Chunk453687 = require("./453687.js"),
  Chunk348238 = require("./348238.jsx"),
  Chunk62072 = require("./62072.js"),
  Chunk38267 = require("./38267.js"),
  Chunk25015 = require("./25015.jsx"),
  Chunk689674 = require("./689674.js"),
  Chunk438075 = require("./438075.jsx"),
  Chunk764893 = require("./764893.jsx"),
  Chunk481363 = require("./481363.jsx"),
  Chunk900902 = require("./900902.jsx"),
  Chunk252032 = require("./252032.jsx"),
  Chunk737243 = require("./737243.jsx"),
  Chunk614584 = require("./614584.jsx"),
  Chunk295790 = require("./295790.jsx"),
  Chunk959517 = require("./959517.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk433869 = require("./433869.js"),
  Chunk295719 = require("./295719.js");

function J(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function $() {
  return ($ = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function ee(e) {
  if (null == e) throw TypeError("Cannot destructure " + e);
  return e
}

function et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      J(e, t, n[t])
    })
  }
  return e
}

function en(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function er(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : en(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function ei(e, t) {
  if (null == e) return {};
  var n, r, i = eo(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function eo(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function ea(e, t, n) {
  return e.getElementById((0, C.p)(t, n))
}

function es(e) {
  let t = i.useRef(e);
  return i.useEffect(() => {
    t.current = null != e ? e : t.current
  }), null != e ? e : t.current
}

function el(e) {
  var t, n;
  let o, {
    id: s,
    message: O,
    message: {
      id: C
    },
    channel: J,
    channel: {
      id: $
    },
    compact: ee = false,
    className: en,
    flashKey: eo,
    groupId: ea,
    renderContentOnly: el
  } = e;
  l()(O.type !== z.uaV.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
  let ec = z.OBS.has(O.type) ? O.messageReference : true,
    eu = (0, c.JA)(null != (t = e.id) ? t : ""),
    {
      onFocus: ed
    } = eu,
    ef = ei(eu, ["onFocus"]),
    e_ = (0, g.p7)("ChatMessage"),
    ep = v.RS.useSetting(),
    eh = v.NA.useSetting(),
    em = ep && eh,
    eg = (0, u.e7)([y.Z], () => y.Z.getMessageByReference(ec)),
    {
      popouts: eE,
      selected: eb,
      setPopout: ey
    } = (0, k.Z)(O.id, K.d$),
    eO = (0, x.qo)(O, J, ey),
    ev = (0, x.Go)(O, J),
    {
      handleMouseEnter: eI,
      handleMouseLeave: eT,
      hasHovered: eS,
      isHovered: eA
    } = (0, x.tn)({
      groupId: ea,
      message: O,
      defaultValue: eb,
      popouts: eE
    }),
    {
      isFocused: eN,
      hasFocused: eC,
      handleFocus: eR,
      handleBlur: eP
    } = (0, x.bb)(ed),
    ew = i.useCallback(e => {
      eR(e), eI(e)
    }, [eR, eI]),
    eD = i.useCallback(e => {
      eP(e), eT()
    }, [eP, eT]),
    eL = (0, u.e7)([S.Z], () => S.Z.isEditing($, C), [$, C]),
    ex = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled),
    eM = eb || eL || ex && eN,
    ek = eM || eA,
    ej = (0, u.e7)([I.Z], () => O.hasFlag(z.iLy.HAS_THREAD) && I.Z.getChannel(A.default.castMessageIdAsChannelId(O.id))),
    eU = O.isFirstMessageInForumPost(J),
    eG = (0, h.A)((null != (n = O.editedTimestamp) ? n : O.timestamp).valueOf()),
    eB = (0, u.e7)([T.Z], () => T.Z.isDeveloper),
    {
      content: eZ,
      hasSpoilerEmbeds: eF
    } = (0, j.Z)(O, {
      hideSimpleEmbedContent: em,
      isInteracting: ek,
      formatInline: false,
      allowList: eU || eG,
      allowHeading: eU || eG,
      allowLinks: true,
      allowDevLinks: eB,
      previewLinkTarget: true
    }),
    eV = (0, M.Z)(C, $, ex),
    eH = (0, P.ZP)(O),
    eY = (0, u.e7)([b.Z], () => b.Z.getPendingReply($)),
    eW = es(eo),
    eK = (0, p.p9)({
      guildId: J.guild_id,
      roleId: eH.iconRoleId
    }),
    ez = (0, L.iG)(O, ea),
    eq = (0, L.Gx)(O),
    eX = (0, u.e7)([_.Z], () => _.Z.getMessage(C), [C]),
    eQ = (0, U.Z)({
      message: O,
      channel: J
    }),
    eJ = i.useRef(window),
    e$ = null != eX,
    e0 = i.useMemo(() => Object.values(eE).some(e => e), [eE]);
  o = O.type === z.uaV.CUSTOM_GIFT ? "" : !eL && e$ ? (0, B.Z)(e, eZ) : (0, V.Z)(e, eZ, eL);
  let e1 = O.id === ea,
    e2 = (0, r.jsx)(d.tEY, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, r.jsxs)("li", {
        id: s,
        className: X.messageListItem,
        "aria-setsize": false,
        children: [(0, E.Uw)(O) && (0, r.jsx)(m.Z, {
          compact: ee,
          message: O,
          hovering: eA && !eL && !e0
        }), (0, r.jsx)(D.Z, er(et({}, ef), {
          "aria-setsize": false,
          "aria-roledescription": q.intl.string(q.t.BAB0yM),
          "aria-labelledby": ez,
          "aria-describedby": eq,
          onFocus: ew,
          onBlur: eD,
          onContextMenu: eO,
          onKeyDown: eV,
          onClick: ev,
          compact: ee,
          contentOnly: el,
          className: a()(en, {
            [X.message]: true,
            [X.cozyMessage]: !ee,
            [X.mentioned]: O.mentioned,
            [X.ephemeral]: (0, N.Pv)(O),
            [X.nitroMessage]: O.type === z.uaV.NITRO_NOTIFICATION || O.type === z.uaV.CHAT_WALLPAPER_SET || O.type === z.uaV.CHAT_WALLPAPER_REMOVED,
            [X.systemMessage]: (0, R.Z)(O),
            [X.groupStart]: !el && (e1 || O.type === z.uaV.REPLY),
            [X.selected]: eM,
            [X.replying]: (null == eY ? true : eY.message.id) === O.id,
            [X.interactionSending]: O.isCommandType() && O.state === z.yb.SENDING,
            [X.automodMessage]: e$,
            [X.editing]: eL,
            [X.hasOpenPopouts]: e0,
            [X.potioned]: (0, E.Uw)(O) && e_,
            [Q.forceAnimate]: eA
          }),
          zalgo: !eL,
          childrenRepliedMessage: el || O.type !== z.uaV.REPLY ? true : (0, Y.Z)(er(et({}, e), {
            setPopout: ey,
            referencedUsernameProfile: eE.referencedUsernameProfile,
            referencedAvatarProfile: eE.referencedAvatarProfile,
            replyReference: ec,
            replyMessage: eg,
            isReplySpineClickable: true
          })),
          childrenExecutedCommand: (0, H.Z)(e, ey, eE),
          childrenHeader: el ? true : (0, F.Z)({
            messageProps: e,
            setPopout: ey,
            messagePopouts: eE,
            replyReference: ec,
            author: eH,
            repliedMessage: eg,
            roleIcon: eK
          }),
          childrenAccessories: (0, G.Z)({
            channelMessageProps: e,
            hasSpoilerEmbeds: eF,
            handleContextMenu: eO,
            isInteracting: ek,
            isAutomodBlockedMessage: e$,
            forceAddReactions: O.type === z.uaV.EMOJI_ADDED
          }),
          childrenButtons: eS || eC ? (0, Z.Z)({
            buttonProps: e,
            setPopout: ey,
            messagePopouts: eE,
            isFocused: eA || eN,
            messageWindow: eJ.current
          }) : true,
          childrenSystemMessage: (0, W.Z)(e),
          childrenMessageContent: o,
          onMouseMove: eI,
          onMouseLeave: eT,
          hasThread: !el && O.hasFlag(z.iLy.HAS_THREAD) && null != ej,
          isSystemMessage: (0, R.Z)(O),
          hasReply: O.type === z.uaV.REPLY,
          messageRef: e => {
            var t, n;
            eQ.current = e, eJ.current = null != (n = null == e || null == (t = e.ownerDocument) ? true : t.defaultView) ? n : window
          },
          author: eH
        }))]
      })
    });
  return null != eW ? (0, r.jsx)(w.Z, {
    flashKey: eW,
    className: a()({
      [X.backgroundFlash]: true,
      [X.groupStart]: !ee && O.id === ea
    }),
    children: e2
  }, "bg-flash-".concat(s)) : e2
}

function ec(e) {
  var t;
  let {
    id: n,
    message: i,
    message: {
      messageReference: o
    },
    compact: s = false,
    className: d
  } = e;
  l()(i.type === z.uaV.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
  let f = $({}, ee((0, c.JA)(null != (t = e.id) ? t : ""))),
    _ = (0, u.e7)([y.Z], () => y.Z.getMessageByReference(o)),
    {
      popouts: p,
      setPopout: h
    } = (0, k.Z)(i.id, K.d$),
    m = (0, P.ZP)(i),
    g = (0, L.iG)(i),
    E = (0, L.Gx)(i);
  return i.type === z.uaV.THREAD_STARTER_MESSAGE && null != _ && _.state === y.Y.LOADED ? (0, r.jsx)(eu, er(et({}, e), {
    viewingChannelId: i.channel_id,
    message: _.message,
    groupId: _.message.id
  })) : (0, r.jsx)(D.Z, er(et({}, f), {
    id: n,
    compact: s,
    className: a()(d, {
      [X.message]: true,
      [X.cozyMessage]: !s,
      [X.systemMessage]: true,
      [X.groupStart]: true
    }),
    childrenHeader: (0, F.Z)({
      messageProps: e,
      setPopout: h,
      messagePopouts: p,
      replyReference: o,
      author: m
    }),
    childrenSystemMessage: (0, W.Z)(e),
    childrenMessageContent: null,
    "aria-labelledby": g,
    "aria-describedby": E,
    hasThread: false,
    author: m
  }))
}

function eu(e) {
  var t, n;
  let {
    id: o,
    message: s,
    message: {
      id: l,
      channel_id: _
    },
    channel: {
      guild_id: m
    },
    compact: g = false,
    className: E,
    groupId: b,
    viewingChannelId: I
  } = e, T = s.type === z.uaV.REPLY ? s.messageReference : true, S = (0, c.JA)(null != (t = e.id) ? t : ""), {
    onFocus: A
  } = S, C = ei(S, ["onFocus"]), {
    isFocused: w,
    handleFocus: U,
    handleBlur: B
  } = (0, x.bb)(A), {
    popouts: Z,
    selected: H,
    setPopout: Q
  } = (0, k.Z)(s.id, K.d$), J = v.RS.useSetting(), $ = v.NA.useSetting(), ee = J && $, en = (0, u.e7)([y.Z], () => y.Z.getMessageByReference(T)), eo = (0, h.A)((null != (n = s.editedTimestamp) ? n : s.timestamp).valueOf()), {
    handleMouseEnter: ea,
    handleMouseLeave: es,
    isHovered: el
  } = (0, x.tn)({
    groupId: b,
    message: s,
    defaultValue: H,
    popouts: Z
  }), ec = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled), eu = H || ec && w, ed = eu || el, {
    content: ef,
    hasSpoilerEmbeds: e_
  } = (0, j.Z)(s, {
    hideSimpleEmbedContent: ee,
    isInteracting: ed,
    formatInline: false,
    allowList: eo,
    allowHeading: eo,
    allowLinks: true,
    previewLinkTarget: true,
    viewingChannelId: I
  }), ep = (0, M.Z)(l, _, ec), eh = (0, P.ZP)(s), em = (0, L.iG)(s, b), eg = (0, L.Gx)(s), eE = (0, V.Z)(e, ef, false), eb = i.useCallback(() => (0, O.XU)(m, _, l), [m, _, l]), ey = (0, p.p9)({
    guildId: m,
    roleId: eh.iconRoleId
  });
  return (0, r.jsxs)("div", {
    className: X.quotedChatMessage,
    children: [(0, r.jsx)(d.P3F, {
      className: X.jump,
      onClick: eb,
      "aria-label": q.intl.string(q.t.k5WiPT),
      children: q.intl.string(q.t.k5WiPT)
    }), (0, r.jsx)(D.Z, er(et({}, C), {
      id: o,
      compact: g,
      className: a()(E, {
        [X.message]: true,
        [X.cozyMessage]: !g,
        [X.mentioned]: s.mentioned,
        [X.ephemeral]: (0, N.Pv)(s),
        [X.systemMessage]: (0, R.Z)(s),
        [X.groupStart]: s.id === b || s.type === z.uaV.REPLY,
        [X.selected]: eu
      }),
      zalgo: true,
      onKeyDown: ep,
      onFocus: U,
      onBlur: B,
      childrenRepliedMessage: s.type === z.uaV.REPLY && (0, Y.Z)(er(et({}, e), {
        setPopout: Q,
        referencedUsernameProfile: Z.referencedUsernameProfile,
        referencedAvatarProfile: Z.referencedAvatarProfile,
        replyReference: T,
        replyMessage: en,
        isReplySpineClickable: true
      })),
      childrenHeader: (0, F.Z)({
        messageProps: e,
        setPopout: Q,
        messagePopouts: Z,
        replyReference: T,
        author: eh,
        repliedMessage: en,
        roleIcon: ey
      }),
      childrenAccessories: (0, G.Z)({
        channelMessageProps: e,
        hasSpoilerEmbeds: e_,
        isInteracting: ed,
        renderThreadAccessory: false,
        renderSuppressEmbeds: false,
        renderReactions: false,
        disableComponentInteractivity: true
      }),
      childrenSystemMessage: (0, W.Z)(e),
      childrenMessageContent: eE,
      onMouseMove: ea,
      onMouseLeave: es,
      "aria-labelledby": em,
      "aria-describedby": eg,
      hasThread: false,
      author: eh
    }))]
  })
}
let ed = Chunk73800.memo(el)