/** Chunk was on 81985 **/
/** chunk id: 534469, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AP: () => et,
  Ru: () => en,
  ZP: () => ei
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
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
  Chunk548498 = require("./548498.js");

function Q() {
  return (Q = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function J(e) {
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

function $(e, t) {
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

function ee(e, t) {
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
}

function et(e, t, n) {
  return e.getElementById((0, P.p)(t, n))
}

function en(e) {
  var t;
  let {
    id: n,
    message: i,
    message: {
      messageReference: l
    },
    compact: o = false,
    className: d
  } = e;
  s()(i.type === Y.uaV.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
  let p = Q({}, function(e) {
      if (null == e) throw TypeError("Cannot destructure " + e);
      return e
    }((0, c.JA)(null != (t = e.id) ? t : ""))),
    f = (0, u.e7)([O.Z], () => O.Z.getMessageByReference(l)),
    {
      popouts: h,
      setPopout: g
    } = (0, M.Z)(i.id, K.d$),
    m = (0, N.ZP)(i),
    b = (0, w.iG)(i),
    y = (0, w.Gx)(i);
  return i.type === Y.uaV.THREAD_STARTER_MESSAGE && null != f && f.state === O.Y.LOADED ? (0, r.jsx)(er, $(J({}, e), {
    viewingChannelId: i.channel_id,
    message: f.message,
    groupId: f.message.id
  })) : (0, r.jsx)(A.Z, $(J({}, p), {
    id: n,
    compact: o,
    className: a()(d, {
      [X.message]: true,
      [X.cozyMessage]: !o,
      [X.systemMessage]: true,
      [X.groupStart]: true
    }),
    childrenHeader: (0, F.Z)({
      messageProps: e,
      setPopout: g,
      messagePopouts: h,
      replyReference: l,
      author: m
    }),
    childrenSystemMessage: (0, W.Z)(e),
    childrenMessageContent: null,
    "aria-labelledby": b,
    "aria-describedby": y,
    hasThread: false,
    author: m
  }))
}

function er(e) {
  var t, n;
  let {
    id: l,
    message: o,
    message: {
      id: s,
      channel_id: f
    },
    channel: {
      guild_id: m
    },
    compact: b = false,
    className: y,
    groupId: v,
    viewingChannelId: C
  } = e, S = o.type === Y.uaV.REPLY ? o.messageReference : true, _ = (0, c.JA)(null != (t = e.id) ? t : ""), {
    onFocus: P
  } = _, T = ee(_, ["onFocus"]), {
    isFocused: L,
    handleFocus: G,
    handleBlur: B
  } = (0, R.bb)(P), {
    popouts: V,
    selected: Q,
    setPopout: et
  } = (0, M.Z)(o.id, K.d$), en = x.RS.useSetting(), er = x.NA.useSetting(), ei = (0, u.e7)([O.Z], () => O.Z.getMessageByReference(S)), el = (0, g.A)((null != (n = o.editedTimestamp) ? n : o.timestamp).valueOf()), {
    handleMouseEnter: ea,
    handleMouseLeave: eo,
    isHovered: es
  } = (0, R.tn)({
    groupId: v,
    message: o,
    defaultValue: Q,
    popouts: V
  }), ec = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled), eu = Q || ec && L, ed = eu || es, ep = (0, u.e7)([E.Z], () => E.Z.isDeveloper), {
    content: ef,
    hasSpoilerEmbeds: eh,
    hasBailedAst: eg
  } = (0, k.Z)(o, {
    hideSimpleEmbedContent: en && er,
    isInteracting: ed,
    formatInline: false,
    allowList: el,
    allowHeading: el,
    allowLinks: true,
    allowDevLinks: ep,
    previewLinkTarget: true,
    viewingChannelId: C
  }), em = (0, D.Z)(s, f, ec), eb = (0, N.ZP)(o), ey = (0, w.iG)(o, v), ev = (0, w.Gx)(o), eO = (0, H.Z)(e, ef, false), ej = i.useCallback(() => (0, j.XU)(m, f, s), [m, f, s]), ex = (0, h.p9)({
    guildId: m,
    roleId: eb.iconRoleId
  });
  return (0, r.jsxs)("div", {
    className: X.quotedChatMessage,
    children: [(0, r.jsx)(d.P3F, {
      className: X.jump,
      onClick: ej,
      "aria-label": q.intl.string(q.t.k5WiPf),
      children: q.intl.string(q.t.k5WiPf)
    }), (0, r.jsx)(A.Z, $(J({}, T), {
      id: l,
      compact: b,
      className: a()(y, {
        [X.message]: true,
        [X.cozyMessage]: !b,
        [X.mentioned]: o.mentioned,
        [X.ephemeral]: (0, I.Pv)(o),
        [X.systemMessage]: (0, Z.Z)(o),
        [X.groupStart]: o.id === v || o.type === Y.uaV.REPLY,
        [X.selected]: eu
      }),
      zalgo: true,
      onKeyDown: em,
      onFocus: G,
      onBlur: B,
      childrenRepliedMessage: o.type === Y.uaV.REPLY && (0, z.Z)($(J({}, e), {
        setPopout: et,
        referencedUsernameProfile: V.referencedUsernameProfile,
        referencedAvatarProfile: V.referencedAvatarProfile,
        replyReference: S,
        replyMessage: ei,
        isReplySpineClickable: true
      })),
      childrenHeader: (0, F.Z)({
        messageProps: e,
        setPopout: et,
        messagePopouts: V,
        replyReference: S,
        author: eb,
        repliedMessage: ei,
        roleIcon: ex
      }),
      childrenAccessories: (0, U.Z)({
        channelMessageProps: e,
        hasSpoilerEmbeds: eh,
        hasBailedAst: eg,
        isInteracting: ed,
        renderThreadAccessory: false,
        renderSuppressEmbeds: false,
        renderReactions: false,
        disableComponentInteractivity: true
      }),
      childrenSystemMessage: (0, W.Z)(e),
      childrenMessageContent: eO,
      onMouseMove: ea,
      onMouseLeave: eo,
      "aria-labelledby": ey,
      "aria-describedby": ev,
      hasThread: false,
      author: eb
    }))]
  })
}
let ei = Chunk473749.memo(function(e) {
  var t, n;
  let l, {
    id: o,
    message: j,
    message: {
      id: P
    },
    channel: Q,
    channel: {
      id: et
    },
    compact: en = false,
    className: er,
    flashKey: ei,
    groupId: el,
    renderContentOnly: ea
  } = e;
  s()(j.type !== Y.uaV.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
  let eo = Y.OBS.has(j.type) ? j.messageReference : true,
    es = (0, c.JA)(null != (t = e.id) ? t : ""),
    {
      onFocus: ec
    } = es,
    eu = ee(es, ["onFocus"]),
    ed = (0, b.p7)("ChatMessage"),
    ep = x.RS.useSetting(),
    ef = x.NA.useSetting(),
    eh = (0, u.e7)([O.Z], () => O.Z.getMessageByReference(eo)),
    {
      popouts: eg,
      selected: em,
      setPopout: eb
    } = (0, M.Z)(j.id, K.d$),
    ey = (0, R.qo)(j, Q, eb),
    ev = (0, R.Go)(j, Q),
    {
      handleMouseEnter: eO,
      handleMouseLeave: ej,
      hasHovered: ex,
      isHovered: eC
    } = (0, R.tn)({
      groupId: el,
      message: j,
      defaultValue: em,
      popouts: eg
    }),
    {
      isFocused: eE,
      hasFocused: eS,
      handleFocus: e_,
      handleBlur: eI
    } = (0, R.bb)(ec),
    eP = i.useCallback(e => {
      e_(e), eO(e)
    }, [e_, eO]),
    eZ = i.useCallback(e => {
      eI(e), ej()
    }, [eI, ej]),
    eN = (0, u.e7)([S.Z], () => S.Z.isEditing(et, P), [et, P]),
    eT = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
    eA = em || eN || eT && eE,
    ew = eA || eC,
    eR = (0, u.e7)([C.Z], () => j.hasFlag(Y.iLy.HAS_THREAD) && C.Z.getChannel(_.default.castMessageIdAsChannelId(j.id))),
    eD = j.isFirstMessageInForumPost(Q),
    eM = (0, g.A)((null != (n = j.editedTimestamp) ? n : j.timestamp).valueOf()),
    ek = (0, u.e7)([E.Z], () => E.Z.isDeveloper),
    {
      content: eL,
      hasSpoilerEmbeds: eU,
      hasBailedAst: eG
    } = (0, k.Z)(j, {
      hideSimpleEmbedContent: ep && ef,
      isInteracting: ew,
      formatInline: false,
      allowList: eD || eM,
      allowHeading: eD || eM,
      allowLinks: true,
      allowDevLinks: ek,
      previewLinkTarget: true
    }),
    eB = (0, D.Z)(P, et, eT),
    eF = (0, N.ZP)(j),
    eH = (0, u.e7)([v.Z], () => v.Z.getPendingReply(et)),
    eV = function(e) {
      let t = i.useRef(e);
      return i.useEffect(() => {
        t.current = null != e ? e : t.current
      }), null != e ? e : t.current
    }(ei),
    ez = (0, h.p9)({
      guildId: Q.guild_id,
      roleId: eF.iconRoleId
    }),
    eW = (0, w.iG)(j, el),
    eK = (0, w.Gx)(j),
    eY = (0, u.e7)([f.Z], () => f.Z.getMessage(P), [P]),
    eq = (0, L.Z)({
      message: j,
      channel: Q
    }),
    eX = i.useRef(window),
    eQ = null != eY,
    eJ = i.useMemo(() => Object.values(eg).some(e => e), [eg]);
  l = j.type === Y.uaV.CUSTOM_GIFT ? "" : !eN && eQ ? (0, G.Z)(e, eL) : (0, H.Z)(e, eL, eN);
  let e$ = j.id === el,
    e0 = (0, r.jsx)(d.tEY, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, r.jsxs)("li", {
        id: o,
        className: X.messageListItem,
        "aria-setsize": false,
        children: [(0, y.Uw)(j) && (0, r.jsx)(m.Z, {
          compact: en,
          message: j,
          hovering: eC && !eN && !eJ
        }), (0, r.jsx)(A.Z, $(J({}, eu), {
          "aria-setsize": false,
          "aria-roledescription": q.intl.string(q.t.BAB0yK),
          "aria-labelledby": eW,
          "aria-describedby": eK,
          onFocus: eP,
          onBlur: eZ,
          onContextMenu: ey,
          onKeyDown: eB,
          onClick: ev,
          compact: en,
          contentOnly: ea,
          className: a()(er, {
            [X.message]: true,
            [X.cozyMessage]: !en,
            [X.mentioned]: j.mentioned,
            [X.ephemeral]: (0, I.Pv)(j),
            [X.nitroMessage]: j.type === Y.uaV.NITRO_NOTIFICATION,
            [X.systemMessage]: (0, Z.Z)(j),
            [X.groupStart]: !ea && (e$ || j.type === Y.uaV.REPLY),
            [X.selected]: eA,
            [X.replying]: (null == eH ? true : eH.message.id) === j.id,
            [X.interactionSending]: j.isCommandType() && j.state === Y.yb.SENDING,
            [X.automodMessage]: eQ,
            [X.editing]: eN,
            [X.hasOpenPopouts]: eJ,
            [X.potioned]: (0, y.Uw)(j) && ed
          }),
          zalgo: !eN,
          childrenRepliedMessage: ea || j.type !== Y.uaV.REPLY ? true : (0, z.Z)($(J({}, e), {
            setPopout: eb,
            referencedUsernameProfile: eg.referencedUsernameProfile,
            referencedAvatarProfile: eg.referencedAvatarProfile,
            replyReference: eo,
            replyMessage: eh,
            isReplySpineClickable: true
          })),
          childrenExecutedCommand: (0, V.Z)(e, eb, eg),
          childrenHeader: ea ? true : (0, F.Z)({
            messageProps: e,
            setPopout: eb,
            messagePopouts: eg,
            replyReference: eo,
            author: eF,
            repliedMessage: eh,
            roleIcon: ez
          }),
          childrenAccessories: (0, U.Z)({
            channelMessageProps: e,
            hasSpoilerEmbeds: eU,
            hasBailedAst: eG,
            handleContextMenu: ey,
            isInteracting: ew,
            isAutomodBlockedMessage: eQ,
            forceAddReactions: j.type === Y.uaV.EMOJI_ADDED
          }),
          childrenButtons: ex || eS ? (0, B.Z)({
            buttonProps: e,
            setPopout: eb,
            messagePopouts: eg,
            isFocused: eC || eE,
            messageWindow: eX.current
          }) : true,
          childrenSystemMessage: (0, W.Z)(e),
          childrenMessageContent: l,
          onMouseMove: eO,
          onMouseLeave: ej,
          hasThread: !ea && j.hasFlag(Y.iLy.HAS_THREAD) && null != eR,
          isSystemMessage: (0, Z.Z)(j),
          hasReply: j.type === Y.uaV.REPLY,
          messageRef: e => {
            var t, n;
            eq.current = e, eX.current = null != (n = null == e || null == (t = e.ownerDocument) ? true : t.defaultView) ? n : window
          },
          author: eF
        }))]
      })
    });
  return null != eV ? (0, r.jsx)(T.Z, {
    flashKey: eV,
    className: a()({
      [X.backgroundFlash]: true,
      [X.groupStart]: !en && j.id === el
    }),
    children: e0
  }, "bg-flash-".concat(o)) : e0
})