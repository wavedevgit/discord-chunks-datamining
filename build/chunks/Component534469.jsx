/** Chunk was on 40184 **/
/** chunk id: 534469, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AP: () => et,
  Ru: () => en,
  ZP: () => er
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

function J() {
  return (J = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
    }
    return e
  }).apply(this, arguments)
}

function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function $(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function ee(e, t) {
  if (null == e) return {};
  var n, i, r = function(e, t) {
    if (null == e) return {};
    var n, i, r = {},
      l = Object.keys(e);
    for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}

function et(e, t, n) {
  return e.getElementById((0, I.p)(t, n))
}

function en(e) {
  var t;
  let {
    id: n,
    message: r,
    message: {
      messageReference: l
    },
    compact: o = false,
    className: d
  } = e;
  s()(r.type === K.uaV.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
  let p = J({}, function(e) {
      if (null == e) throw TypeError("Cannot destructure " + e);
      return e
    }((0, c.JA)(null != (t = e.id) ? t : ""))),
    f = (0, u.e7)([v.Z], () => v.Z.getMessageByReference(l)),
    {
      popouts: h,
      setPopout: m
    } = (0, L.Z)(r.id, q.d$),
    g = (0, T.ZP)(r),
    b = (0, w.iG)(r),
    C = (0, w.Gx)(r);
  return r.type === K.uaV.THREAD_STARTER_MESSAGE && null != f && f.state === v.Y.LOADED ? (0, i.jsx)(ei, $(Q({}, e), {
    viewingChannelId: r.channel_id,
    message: f.message,
    groupId: f.message.id
  })) : (0, i.jsx)(A.Z, $(Q({}, p), {
    id: n,
    compact: o,
    className: a()(d, {
      [X.message]: true,
      [X.cozyMessage]: !o,
      [X.systemMessage]: true,
      [X.groupStart]: true
    }),
    childrenHeader: (0, B.Z)({
      messageProps: e,
      setPopout: m,
      messagePopouts: h,
      replyReference: l,
      author: g
    }),
    childrenSystemMessage: (0, W.Z)(e),
    childrenMessageContent: null,
    "aria-labelledby": b,
    "aria-describedby": C,
    hasThread: false,
    author: g
  }))
}

function ei(e) {
  var t, n;
  let {
    id: l,
    message: o,
    message: {
      id: s,
      channel_id: f
    },
    channel: {
      guild_id: g
    },
    compact: b = false,
    className: C,
    groupId: y,
    viewingChannelId: E
  } = e, S = o.type === K.uaV.REPLY ? o.messageReference : true, _ = (0, c.JA)(null != (t = e.id) ? t : ""), {
    onFocus: I
  } = _, N = ee(_, ["onFocus"]), {
    isFocused: k,
    handleFocus: V,
    handleBlur: F
  } = (0, M.bb)(I), {
    popouts: G,
    selected: J,
    setPopout: et
  } = (0, L.Z)(o.id, q.d$), en = O.RS.useSetting(), ei = O.NA.useSetting(), er = (0, u.e7)([v.Z], () => v.Z.getMessageByReference(S)), el = (0, m.A)((null != (n = o.editedTimestamp) ? n : o.timestamp).valueOf()), {
    handleMouseEnter: ea,
    handleMouseLeave: eo,
    isHovered: es
  } = (0, M.tn)({
    groupId: y,
    message: o,
    defaultValue: J,
    popouts: G
  }), ec = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled), eu = J || ec && k, ed = eu || es, ep = (0, u.e7)([j.Z], () => j.Z.isDeveloper), {
    content: ef,
    hasSpoilerEmbeds: eh,
    hasBailedAst: em
  } = (0, D.Z)(o, {
    hideSimpleEmbedContent: en && ei,
    isInteracting: ed,
    formatInline: false,
    allowList: el,
    allowHeading: el,
    allowLinks: true,
    allowDevLinks: ep,
    previewLinkTarget: true,
    viewingChannelId: E
  }), eg = (0, R.Z)(s, f, ec), eb = (0, T.ZP)(o), eC = (0, w.iG)(o, y), ey = (0, w.Gx)(o), ev = (0, H.Z)(e, ef, false), ex = r.useCallback(() => (0, x.XU)(g, f, s), [g, f, s]), eO = (0, h.p9)({
    guildId: g,
    roleId: eb.iconRoleId
  });
  return (0, i.jsxs)("div", {
    className: X.quotedChatMessage,
    children: [(0, i.jsx)(d.P3F, {
      className: X.jump,
      onClick: ex,
      "aria-label": Y.intl.string(Y.t.k5WiPf),
      children: Y.intl.string(Y.t.k5WiPf)
    }), (0, i.jsx)(A.Z, $(Q({}, N), {
      id: l,
      compact: b,
      className: a()(C, {
        [X.message]: true,
        [X.cozyMessage]: !b,
        [X.mentioned]: o.mentioned,
        [X.ephemeral]: (0, P.Pv)(o),
        [X.systemMessage]: (0, Z.Z)(o),
        [X.groupStart]: o.id === y || o.type === K.uaV.REPLY,
        [X.selected]: eu
      }),
      zalgo: true,
      onKeyDown: eg,
      onFocus: V,
      onBlur: F,
      childrenRepliedMessage: o.type === K.uaV.REPLY && (0, z.Z)($(Q({}, e), {
        setPopout: et,
        referencedUsernameProfile: G.referencedUsernameProfile,
        referencedAvatarProfile: G.referencedAvatarProfile,
        replyReference: S,
        replyMessage: er,
        isReplySpineClickable: true
      })),
      childrenHeader: (0, B.Z)({
        messageProps: e,
        setPopout: et,
        messagePopouts: G,
        replyReference: S,
        author: eb,
        repliedMessage: er,
        roleIcon: eO
      }),
      childrenAccessories: (0, U.Z)({
        channelMessageProps: e,
        hasSpoilerEmbeds: eh,
        hasBailedAst: em,
        isInteracting: ed,
        renderThreadAccessory: false,
        renderSuppressEmbeds: false,
        renderReactions: false,
        disableComponentInteractivity: true
      }),
      childrenSystemMessage: (0, W.Z)(e),
      childrenMessageContent: ev,
      onMouseMove: ea,
      onMouseLeave: eo,
      "aria-labelledby": eC,
      "aria-describedby": ey,
      hasThread: false,
      author: eb
    }))]
  })
}
let er = Chunk473749.memo(function(e) {
  var t, n;
  let l, {
    id: o,
    message: x,
    message: {
      id: I
    },
    channel: J,
    channel: {
      id: et
    },
    compact: en = false,
    className: ei,
    flashKey: er,
    groupId: el,
    renderContentOnly: ea
  } = e;
  s()(x.type !== K.uaV.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
  let eo = K.OBS.has(x.type) ? x.messageReference : true,
    es = (0, c.JA)(null != (t = e.id) ? t : ""),
    {
      onFocus: ec
    } = es,
    eu = ee(es, ["onFocus"]),
    ed = (0, b.p7)("ChatMessage"),
    ep = O.RS.useSetting(),
    ef = O.NA.useSetting(),
    eh = (0, u.e7)([v.Z], () => v.Z.getMessageByReference(eo)),
    {
      popouts: em,
      selected: eg,
      setPopout: eb
    } = (0, L.Z)(x.id, q.d$),
    eC = (0, M.qo)(x, J, eb),
    ey = (0, M.Go)(x, J),
    {
      handleMouseEnter: ev,
      handleMouseLeave: ex,
      hasHovered: eO,
      isHovered: eE
    } = (0, M.tn)({
      groupId: el,
      message: x,
      defaultValue: eg,
      popouts: em
    }),
    {
      isFocused: ej,
      hasFocused: eS,
      handleFocus: e_,
      handleBlur: eP
    } = (0, M.bb)(ec),
    eI = r.useCallback(e => {
      e_(e), ev(e)
    }, [e_, ev]),
    eZ = r.useCallback(e => {
      eP(e), ex()
    }, [eP, ex]),
    eT = (0, u.e7)([S.Z], () => S.Z.isEditing(et, I), [et, I]),
    eN = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
    eA = eg || eT || eN && ej,
    ew = eA || eE,
    eM = (0, u.e7)([E.Z], () => x.hasFlag(K.iLy.HAS_THREAD) && E.Z.getChannel(_.default.castMessageIdAsChannelId(x.id))),
    eR = x.isFirstMessageInForumPost(J),
    eL = (0, m.A)((null != (n = x.editedTimestamp) ? n : x.timestamp).valueOf()),
    eD = (0, u.e7)([j.Z], () => j.Z.isDeveloper),
    {
      content: ek,
      hasSpoilerEmbeds: eU,
      hasBailedAst: eV
    } = (0, D.Z)(x, {
      hideSimpleEmbedContent: ep && ef,
      isInteracting: ew,
      formatInline: false,
      allowList: eR || eL,
      allowHeading: eR || eL,
      allowLinks: true,
      allowDevLinks: eD,
      previewLinkTarget: true
    }),
    eF = (0, R.Z)(I, et, eN),
    eB = (0, T.ZP)(x),
    eH = (0, u.e7)([y.Z], () => y.Z.getPendingReply(et)),
    eG = function(e) {
      let t = r.useRef(e);
      return r.useEffect(() => {
        t.current = null != e ? e : t.current
      }), null != e ? e : t.current
    }(er),
    ez = (0, h.p9)({
      guildId: J.guild_id,
      roleId: eB.iconRoleId
    }),
    eW = (0, w.iG)(x, el),
    eq = (0, w.Gx)(x),
    eK = (0, u.e7)([f.Z], () => f.Z.getMessage(I), [I]),
    eY = (0, k.Z)({
      message: x,
      channel: J
    }),
    eX = r.useRef(window),
    eJ = null != eK,
    eQ = r.useMemo(() => Object.values(em).some(e => e), [em]);
  l = x.type === K.uaV.CUSTOM_GIFT ? "" : !eT && eJ ? (0, V.Z)(e, ek) : (0, H.Z)(e, ek, eT);
  let e$ = x.id === el,
    e0 = (0, i.jsx)(d.tEY, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, i.jsxs)("li", {
        id: o,
        className: X.messageListItem,
        "aria-setsize": false,
        children: [(0, C.Uw)(x) && (0, i.jsx)(g.Z, {
          compact: en,
          message: x,
          hovering: eE && !eT && !eQ
        }), (0, i.jsx)(A.Z, $(Q({}, eu), {
          "aria-setsize": false,
          "aria-roledescription": Y.intl.string(Y.t.BAB0yK),
          "aria-labelledby": eW,
          "aria-describedby": eq,
          onFocus: eI,
          onBlur: eZ,
          onContextMenu: eC,
          onKeyDown: eF,
          onClick: ey,
          compact: en,
          contentOnly: ea,
          className: a()(ei, {
            [X.message]: true,
            [X.cozyMessage]: !en,
            [X.mentioned]: x.mentioned,
            [X.ephemeral]: (0, P.Pv)(x),
            [X.nitroMessage]: x.type === K.uaV.NITRO_NOTIFICATION,
            [X.systemMessage]: (0, Z.Z)(x),
            [X.groupStart]: !ea && (e$ || x.type === K.uaV.REPLY),
            [X.selected]: eA,
            [X.replying]: (null == eH ? true : eH.message.id) === x.id,
            [X.interactionSending]: x.isCommandType() && x.state === K.yb.SENDING,
            [X.automodMessage]: eJ,
            [X.editing]: eT,
            [X.hasOpenPopouts]: eQ,
            [X.potioned]: (0, C.Uw)(x) && ed
          }),
          zalgo: !eT,
          childrenRepliedMessage: ea || x.type !== K.uaV.REPLY ? true : (0, z.Z)($(Q({}, e), {
            setPopout: eb,
            referencedUsernameProfile: em.referencedUsernameProfile,
            referencedAvatarProfile: em.referencedAvatarProfile,
            replyReference: eo,
            replyMessage: eh,
            isReplySpineClickable: true
          })),
          childrenExecutedCommand: (0, G.Z)(e, eb, em),
          childrenHeader: ea ? true : (0, B.Z)({
            messageProps: e,
            setPopout: eb,
            messagePopouts: em,
            replyReference: eo,
            author: eB,
            repliedMessage: eh,
            roleIcon: ez
          }),
          childrenAccessories: (0, U.Z)({
            channelMessageProps: e,
            hasSpoilerEmbeds: eU,
            hasBailedAst: eV,
            handleContextMenu: eC,
            isInteracting: ew,
            isAutomodBlockedMessage: eJ,
            forceAddReactions: x.type === K.uaV.EMOJI_ADDED
          }),
          childrenButtons: eO || eS ? (0, F.Z)({
            buttonProps: e,
            setPopout: eb,
            messagePopouts: em,
            isFocused: eE || ej,
            messageWindow: eX.current
          }) : true,
          childrenSystemMessage: (0, W.Z)(e),
          childrenMessageContent: l,
          onMouseMove: ev,
          onMouseLeave: ex,
          hasThread: !ea && x.hasFlag(K.iLy.HAS_THREAD) && null != eM,
          isSystemMessage: (0, Z.Z)(x),
          hasReply: x.type === K.uaV.REPLY,
          messageRef: e => {
            var t, n;
            eY.current = e, eX.current = null != (n = null == e || null == (t = e.ownerDocument) ? true : t.defaultView) ? n : window
          },
          author: eB
        }))]
      })
    });
  return null != eG ? (0, i.jsx)(N.Z, {
    flashKey: eG,
    className: a()({
      [X.backgroundFlash]: true,
      [X.groupStart]: !en && x.id === el
    }),
    children: e0
  }, "bg-flash-".concat(o)) : e0
})