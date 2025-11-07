/** Chunk was on 86642 **/
/** chunk id: 534469, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AP: () => et,
  Ru: () => en,
  ZP: () => er
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk360514 = require("./360514.js");

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
  s()(r.type === Y.uaV.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
  let p = J({}, function(e) {
      if (null == e) throw TypeError("Cannot destructure " + e);
      return e
    }((0, c.JA)(null != (t = e.id) ? t : ""))),
    f = (0, u.e7)([_.Z], () => _.Z.getMessageByReference(l)),
    {
      popouts: h,
      setPopout: m
    } = (0, D.Z)(r.id, q.d$),
    g = (0, T.ZP)(r),
    b = (0, w.iG)(r),
    y = (0, w.Gx)(r);
  return r.type === Y.uaV.THREAD_STARTER_MESSAGE && null != f && f.state === _.Y.LOADED ? (0, i.jsx)(ei, $(Q({}, e), {
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
    childrenSystemMessage: (0, z.Z)(e),
    childrenMessageContent: null,
    "aria-labelledby": b,
    "aria-describedby": y,
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
    className: y,
    groupId: C,
    viewingChannelId: O
  } = e, j = o.type === Y.uaV.REPLY ? o.messageReference : true, S = (0, c.JA)(null != (t = e.id) ? t : ""), {
    onFocus: I
  } = S, N = ee(S, ["onFocus"]), {
    isFocused: k,
    handleFocus: F,
    handleBlur: V
  } = (0, M.bb)(I), {
    popouts: G,
    selected: J,
    setPopout: et
  } = (0, D.Z)(o.id, q.d$), en = x.RS.useSetting(), ei = x.NA.useSetting(), er = (0, u.e7)([_.Z], () => _.Z.getMessageByReference(j)), el = (0, m.A)((null != (n = o.editedTimestamp) ? n : o.timestamp).valueOf()), {
    handleMouseEnter: ea,
    handleMouseLeave: eo,
    isHovered: es
  } = (0, M.tn)({
    groupId: C,
    message: o,
    defaultValue: J,
    popouts: G
  }), ec = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled), eu = J || ec && k, ed = eu || es, ep = (0, u.e7)([E.Z], () => E.Z.isDeveloper), {
    content: ef,
    hasSpoilerEmbeds: eh
  } = (0, L.Z)(o, {
    hideSimpleEmbedContent: en && ei,
    isInteracting: ed,
    formatInline: false,
    allowList: el,
    allowHeading: el,
    allowLinks: true,
    allowDevLinks: ep,
    previewLinkTarget: true,
    viewingChannelId: O
  }), em = (0, R.Z)(s, f, ec), eg = (0, T.ZP)(o), eb = (0, w.iG)(o, C), ey = (0, w.Gx)(o), eC = (0, H.Z)(e, ef, false), e_ = r.useCallback(() => (0, v.XU)(g, f, s), [g, f, s]), ev = (0, h.p9)({
    guildId: g,
    roleId: eg.iconRoleId
  });
  return (0, i.jsxs)("div", {
    className: X.quotedChatMessage,
    children: [(0, i.jsx)(d.P3F, {
      className: X.jump,
      onClick: e_,
      "aria-label": K.intl.string(K.t.k5WiPf),
      children: K.intl.string(K.t.k5WiPf)
    }), (0, i.jsx)(A.Z, $(Q({}, N), {
      id: l,
      compact: b,
      className: a()(y, {
        [X.message]: true,
        [X.cozyMessage]: !b,
        [X.mentioned]: o.mentioned,
        [X.ephemeral]: (0, P.Pv)(o),
        [X.systemMessage]: (0, Z.Z)(o),
        [X.groupStart]: o.id === C || o.type === Y.uaV.REPLY,
        [X.selected]: eu
      }),
      zalgo: true,
      onKeyDown: em,
      onFocus: F,
      onBlur: V,
      childrenRepliedMessage: o.type === Y.uaV.REPLY && (0, W.Z)($(Q({}, e), {
        setPopout: et,
        referencedUsernameProfile: G.referencedUsernameProfile,
        referencedAvatarProfile: G.referencedAvatarProfile,
        replyReference: j,
        replyMessage: er,
        isReplySpineClickable: true
      })),
      childrenHeader: (0, B.Z)({
        messageProps: e,
        setPopout: et,
        messagePopouts: G,
        replyReference: j,
        author: eg,
        repliedMessage: er,
        roleIcon: ev
      }),
      childrenAccessories: (0, U.Z)({
        channelMessageProps: e,
        hasSpoilerEmbeds: eh,
        isInteracting: ed,
        renderThreadAccessory: false,
        renderSuppressEmbeds: false,
        renderReactions: false,
        disableComponentInteractivity: true
      }),
      childrenSystemMessage: (0, z.Z)(e),
      childrenMessageContent: eC,
      onMouseMove: ea,
      onMouseLeave: eo,
      "aria-labelledby": eb,
      "aria-describedby": ey,
      hasThread: false,
      author: eg
    }))]
  })
}
let er = Chunk647438.memo(function(e) {
  var t, n;
  let l, {
    id: o,
    message: v,
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
  s()(v.type !== Y.uaV.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
  let eo = Y.OBS.has(v.type) ? v.messageReference : true,
    es = (0, c.JA)(null != (t = e.id) ? t : ""),
    {
      onFocus: ec
    } = es,
    eu = ee(es, ["onFocus"]),
    ed = (0, b.p7)("ChatMessage"),
    ep = x.RS.useSetting(),
    ef = x.NA.useSetting(),
    eh = (0, u.e7)([_.Z], () => _.Z.getMessageByReference(eo)),
    {
      popouts: em,
      selected: eg,
      setPopout: eb
    } = (0, D.Z)(v.id, q.d$),
    ey = (0, M.qo)(v, J, eb),
    eC = (0, M.Go)(v, J),
    {
      handleMouseEnter: e_,
      handleMouseLeave: ev,
      hasHovered: ex,
      isHovered: eO
    } = (0, M.tn)({
      groupId: el,
      message: v,
      defaultValue: eg,
      popouts: em
    }),
    {
      isFocused: eE,
      hasFocused: ej,
      handleFocus: eS,
      handleBlur: eP
    } = (0, M.bb)(ec),
    eI = r.useCallback(e => {
      eS(e), e_(e)
    }, [eS, e_]),
    eZ = r.useCallback(e => {
      eP(e), ev()
    }, [eP, ev]),
    eT = (0, u.e7)([j.Z], () => j.Z.isEditing(et, I), [et, I]),
    eN = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
    eA = eg || eT || eN && eE,
    ew = eA || eO,
    eM = (0, u.e7)([O.Z], () => v.hasFlag(Y.iLy.HAS_THREAD) && O.Z.getChannel(S.default.castMessageIdAsChannelId(v.id))),
    eR = v.isFirstMessageInForumPost(J),
    eD = (0, m.A)((null != (n = v.editedTimestamp) ? n : v.timestamp).valueOf()),
    eL = (0, u.e7)([E.Z], () => E.Z.isDeveloper),
    {
      content: ek,
      hasSpoilerEmbeds: eU
    } = (0, L.Z)(v, {
      hideSimpleEmbedContent: ep && ef,
      isInteracting: ew,
      formatInline: false,
      allowList: eR || eD,
      allowHeading: eR || eD,
      allowLinks: true,
      allowDevLinks: eL,
      previewLinkTarget: true
    }),
    eF = (0, R.Z)(I, et, eN),
    eV = (0, T.ZP)(v),
    eB = (0, u.e7)([C.Z], () => C.Z.getPendingReply(et)),
    eH = function(e) {
      let t = r.useRef(e);
      return r.useEffect(() => {
        t.current = null != e ? e : t.current
      }), null != e ? e : t.current
    }(er),
    eG = (0, h.p9)({
      guildId: J.guild_id,
      roleId: eV.iconRoleId
    }),
    eW = (0, w.iG)(v, el),
    ez = (0, w.Gx)(v),
    eq = (0, u.e7)([f.Z], () => f.Z.getMessage(I), [I]),
    eY = (0, k.Z)({
      message: v,
      channel: J
    }),
    eK = r.useRef(window),
    eX = null != eq,
    eJ = r.useMemo(() => Object.values(em).some(e => e), [em]);
  l = v.type === Y.uaV.CUSTOM_GIFT ? "" : !eT && eX ? (0, F.Z)(e, ek) : (0, H.Z)(e, ek, eT);
  let eQ = v.id === el,
    e$ = (0, i.jsx)(d.tEY, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, i.jsxs)("li", {
        id: o,
        className: X.messageListItem,
        "aria-setsize": false,
        children: [(0, y.Uw)(v) && (0, i.jsx)(g.Z, {
          compact: en,
          message: v,
          hovering: eO && !eT && !eJ
        }), (0, i.jsx)(A.Z, $(Q({}, eu), {
          "aria-setsize": false,
          "aria-roledescription": K.intl.string(K.t.BAB0yK),
          "aria-labelledby": eW,
          "aria-describedby": ez,
          onFocus: eI,
          onBlur: eZ,
          onContextMenu: ey,
          onKeyDown: eF,
          onClick: eC,
          compact: en,
          contentOnly: ea,
          className: a()(ei, {
            [X.message]: true,
            [X.cozyMessage]: !en,
            [X.mentioned]: v.mentioned,
            [X.ephemeral]: (0, P.Pv)(v),
            [X.nitroMessage]: v.type === Y.uaV.NITRO_NOTIFICATION,
            [X.systemMessage]: (0, Z.Z)(v),
            [X.groupStart]: !ea && (eQ || v.type === Y.uaV.REPLY),
            [X.selected]: eA,
            [X.replying]: (null == eB ? true : eB.message.id) === v.id,
            [X.interactionSending]: v.isCommandType() && v.state === Y.yb.SENDING,
            [X.automodMessage]: eX,
            [X.editing]: eT,
            [X.hasOpenPopouts]: eJ,
            [X.potioned]: (0, y.Uw)(v) && ed
          }),
          zalgo: !eT,
          childrenRepliedMessage: ea || v.type !== Y.uaV.REPLY ? true : (0, W.Z)($(Q({}, e), {
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
            author: eV,
            repliedMessage: eh,
            roleIcon: eG
          }),
          childrenAccessories: (0, U.Z)({
            channelMessageProps: e,
            hasSpoilerEmbeds: eU,
            handleContextMenu: ey,
            isInteracting: ew,
            isAutomodBlockedMessage: eX,
            forceAddReactions: v.type === Y.uaV.EMOJI_ADDED
          }),
          childrenButtons: ex || ej ? (0, V.Z)({
            buttonProps: e,
            setPopout: eb,
            messagePopouts: em,
            isFocused: eO || eE,
            messageWindow: eK.current
          }) : true,
          childrenSystemMessage: (0, z.Z)(e),
          childrenMessageContent: l,
          onMouseMove: e_,
          onMouseLeave: ev,
          hasThread: !ea && v.hasFlag(Y.iLy.HAS_THREAD) && null != eM,
          isSystemMessage: (0, Z.Z)(v),
          hasReply: v.type === Y.uaV.REPLY,
          messageRef: e => {
            var t, n;
            eY.current = e, eK.current = null != (n = null == e || null == (t = e.ownerDocument) ? true : t.defaultView) ? n : window
          },
          author: eV
        }))]
      })
    });
  return null != eH ? (0, i.jsx)(N.Z, {
    flashKey: eH,
    className: a()({
      [X.backgroundFlash]: true,
      [X.groupStart]: !en && v.id === el
    }),
    children: e$
  }, "bg-flash-".concat(o)) : e$
})