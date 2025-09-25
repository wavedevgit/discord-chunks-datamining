/** Chunk was on 88806 **/
/** chunk id: 534469, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AP: () => et,
  Ru: () => en,
  ZP: () => ei
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
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function Q(e) {
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
  return e.getElementById((0, I.p)(t, n))
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
  let p = J({}, function(e) {
      if (null == e) throw TypeError("Cannot destructure " + e);
      return e
    }((0, c.JA)(null != (t = e.id) ? t : ""))),
    h = (0, u.e7)([_.Z], () => _.Z.getMessageByReference(l)),
    {
      popouts: f,
      setPopout: m
    } = (0, k.Z)(i.id, q.d$),
    g = (0, T.ZP)(i),
    b = (0, w.iG)(i),
    y = (0, w.Gx)(i);
  return i.type === Y.uaV.THREAD_STARTER_MESSAGE && null != h && h.state === _.Y.LOADED ? (0, r.jsx)(er, $(Q({}, e), {
    viewingChannelId: i.channel_id,
    message: h.message,
    groupId: h.message.id
  })) : (0, r.jsx)(A.Z, $(Q({}, p), {
    id: n,
    compact: o,
    className: a()(d, {
      [X.message]: true,
      [X.cozyMessage]: !o,
      [X.systemMessage]: true,
      [X.groupStart]: true
    }),
    childrenHeader: (0, H.Z)({
      messageProps: e,
      setPopout: m,
      messagePopouts: f,
      replyReference: l,
      author: g
    }),
    childrenSystemMessage: (0, W.Z)(e),
    childrenMessageContent: null,
    "aria-labelledby": b,
    "aria-describedby": y,
    hasThread: false,
    author: g
  }))
}

function er(e) {
  var t, n;
  let {
    id: l,
    message: o,
    message: {
      id: s,
      channel_id: h
    },
    channel: {
      guild_id: g
    },
    compact: b = false,
    className: y,
    groupId: C,
    viewingChannelId: O
  } = e, j = o.type === Y.uaV.REPLY ? o.messageReference : true, E = (0, c.JA)(null != (t = e.id) ? t : ""), {
    onFocus: S
  } = E, I = ee(E, ["onFocus"]), {
    isFocused: N,
    handleFocus: D,
    handleBlur: B
  } = (0, M.bb)(S), {
    popouts: V,
    selected: G,
    setPopout: J
  } = (0, k.Z)(o.id, q.d$), et = x.RS.useSetting(), en = x.NA.useSetting(), er = (0, u.e7)([_.Z], () => _.Z.getMessageByReference(j)), ei = (0, m.A)((null != (n = o.editedTimestamp) ? n : o.timestamp).valueOf()), {
    handleMouseEnter: el,
    handleMouseLeave: ea,
    isHovered: eo
  } = (0, M.tn)({
    groupId: C,
    message: o,
    defaultValue: G,
    popouts: V
  }), es = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled), ec = G || es && N, eu = ec || eo, {
    content: ed,
    hasSpoilerEmbeds: ep
  } = (0, L.Z)(o, {
    hideSimpleEmbedContent: et && en,
    isInteracting: eu,
    formatInline: false,
    allowList: ei,
    allowHeading: ei,
    allowLinks: true,
    previewLinkTarget: true,
    viewingChannelId: O
  }), eh = (0, R.Z)(s, h, es), ef = (0, T.ZP)(o), em = (0, w.iG)(o, C), eg = (0, w.Gx)(o), eb = (0, F.Z)(e, ed, false), ey = i.useCallback(() => (0, v.XU)(g, h, s), [g, h, s]), eC = (0, f.p9)({
    guildId: g,
    roleId: ef.iconRoleId
  });
  return (0, r.jsxs)("div", {
    className: X.quotedChatMessage,
    children: [(0, r.jsx)(d.P3F, {
      className: X.jump,
      onClick: ey,
      "aria-label": K.intl.string(K.t.k5WiPT),
      children: K.intl.string(K.t.k5WiPT)
    }), (0, r.jsx)(A.Z, $(Q({}, I), {
      id: l,
      compact: b,
      className: a()(y, {
        [X.message]: true,
        [X.cozyMessage]: !b,
        [X.mentioned]: o.mentioned,
        [X.ephemeral]: (0, P.Pv)(o),
        [X.systemMessage]: (0, Z.Z)(o),
        [X.groupStart]: o.id === C || o.type === Y.uaV.REPLY,
        [X.selected]: ec
      }),
      zalgo: true,
      onKeyDown: eh,
      onFocus: D,
      onBlur: B,
      childrenRepliedMessage: o.type === Y.uaV.REPLY && (0, z.Z)($(Q({}, e), {
        setPopout: J,
        referencedUsernameProfile: V.referencedUsernameProfile,
        referencedAvatarProfile: V.referencedAvatarProfile,
        replyReference: j,
        replyMessage: er,
        isReplySpineClickable: true
      })),
      childrenHeader: (0, H.Z)({
        messageProps: e,
        setPopout: J,
        messagePopouts: V,
        replyReference: j,
        author: ef,
        repliedMessage: er,
        roleIcon: eC
      }),
      childrenAccessories: (0, U.Z)({
        channelMessageProps: e,
        hasSpoilerEmbeds: ep,
        isInteracting: eu,
        renderThreadAccessory: false,
        renderSuppressEmbeds: false,
        renderReactions: false,
        disableComponentInteractivity: true
      }),
      childrenSystemMessage: (0, W.Z)(e),
      childrenMessageContent: eb,
      onMouseMove: el,
      onMouseLeave: ea,
      "aria-labelledby": em,
      "aria-describedby": eg,
      hasThread: false,
      author: ef
    }))]
  })
}
let ei = Chunk647438.memo(function(e) {
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
    className: er,
    flashKey: ei,
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
    eh = x.NA.useSetting(),
    ef = (0, u.e7)([_.Z], () => _.Z.getMessageByReference(eo)),
    {
      popouts: em,
      selected: eg,
      setPopout: eb
    } = (0, k.Z)(v.id, q.d$),
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
      isFocused: ej,
      hasFocused: eE,
      handleFocus: eS,
      handleBlur: eP
    } = (0, M.bb)(ec),
    eI = i.useCallback(e => {
      eS(e), e_(e)
    }, [eS, e_]),
    eZ = i.useCallback(e => {
      eP(e), ev()
    }, [eP, ev]),
    eT = (0, u.e7)([E.Z], () => E.Z.isEditing(et, I), [et, I]),
    eN = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
    eA = eg || eT || eN && ej,
    ew = eA || eO,
    eM = (0, u.e7)([O.Z], () => v.hasFlag(Y.iLy.HAS_THREAD) && O.Z.getChannel(S.default.castMessageIdAsChannelId(v.id))),
    eR = v.isFirstMessageInForumPost(J),
    ek = (0, m.A)((null != (n = v.editedTimestamp) ? n : v.timestamp).valueOf()),
    eL = (0, u.e7)([j.Z], () => j.Z.isDeveloper),
    {
      content: eD,
      hasSpoilerEmbeds: eU
    } = (0, L.Z)(v, {
      hideSimpleEmbedContent: ep && eh,
      isInteracting: ew,
      formatInline: false,
      allowList: eR || ek,
      allowHeading: eR || ek,
      allowLinks: true,
      allowDevLinks: eL,
      previewLinkTarget: true
    }),
    eB = (0, R.Z)(I, et, eN),
    eV = (0, T.ZP)(v),
    eH = (0, u.e7)([C.Z], () => C.Z.getPendingReply(et)),
    eF = function(e) {
      let t = i.useRef(e);
      return i.useEffect(() => {
        t.current = null != e ? e : t.current
      }), null != e ? e : t.current
    }(ei),
    eG = (0, f.p9)({
      guildId: J.guild_id,
      roleId: eV.iconRoleId
    }),
    ez = (0, w.iG)(v, el),
    eW = (0, w.Gx)(v),
    eq = (0, u.e7)([h.Z], () => h.Z.getMessage(I), [I]),
    eY = (0, D.Z)({
      message: v,
      channel: J
    }),
    eK = i.useRef(window),
    eX = null != eq,
    eJ = i.useMemo(() => Object.values(em).some(e => e), [em]);
  l = v.type === Y.uaV.CUSTOM_GIFT ? "" : !eT && eX ? (0, B.Z)(e, eD) : (0, F.Z)(e, eD, eT);
  let eQ = v.id === el,
    e$ = (0, r.jsx)(d.tEY, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, r.jsxs)("li", {
        id: o,
        className: X.messageListItem,
        "aria-setsize": false,
        children: [(0, y.Uw)(v) && (0, r.jsx)(g.Z, {
          compact: en,
          message: v,
          hovering: eO && !eT && !eJ
        }), (0, r.jsx)(A.Z, $(Q({}, eu), {
          "aria-setsize": false,
          "aria-roledescription": K.intl.string(K.t.BAB0yM),
          "aria-labelledby": ez,
          "aria-describedby": eW,
          onFocus: eI,
          onBlur: eZ,
          onContextMenu: ey,
          onKeyDown: eB,
          onClick: eC,
          compact: en,
          contentOnly: ea,
          className: a()(er, {
            [X.message]: true,
            [X.cozyMessage]: !en,
            [X.mentioned]: v.mentioned,
            [X.ephemeral]: (0, P.Pv)(v),
            [X.nitroMessage]: v.type === Y.uaV.NITRO_NOTIFICATION,
            [X.systemMessage]: (0, Z.Z)(v),
            [X.groupStart]: !ea && (eQ || v.type === Y.uaV.REPLY),
            [X.selected]: eA,
            [X.replying]: (null == eH ? true : eH.message.id) === v.id,
            [X.interactionSending]: v.isCommandType() && v.state === Y.yb.SENDING,
            [X.automodMessage]: eX,
            [X.editing]: eT,
            [X.hasOpenPopouts]: eJ,
            [X.potioned]: (0, y.Uw)(v) && ed
          }),
          zalgo: !eT,
          childrenRepliedMessage: ea || v.type !== Y.uaV.REPLY ? true : (0, z.Z)($(Q({}, e), {
            setPopout: eb,
            referencedUsernameProfile: em.referencedUsernameProfile,
            referencedAvatarProfile: em.referencedAvatarProfile,
            replyReference: eo,
            replyMessage: ef,
            isReplySpineClickable: true
          })),
          childrenExecutedCommand: (0, G.Z)(e, eb, em),
          childrenHeader: ea ? true : (0, H.Z)({
            messageProps: e,
            setPopout: eb,
            messagePopouts: em,
            replyReference: eo,
            author: eV,
            repliedMessage: ef,
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
          childrenButtons: ex || eE ? (0, V.Z)({
            buttonProps: e,
            setPopout: eb,
            messagePopouts: em,
            isFocused: eO || ej,
            messageWindow: eK.current
          }) : true,
          childrenSystemMessage: (0, W.Z)(e),
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
  return null != eF ? (0, r.jsx)(N.Z, {
    flashKey: eF,
    className: a()({
      [X.backgroundFlash]: true,
      [X.groupStart]: !en && v.id === el
    }),
    children: e$
  }, "bg-flash-".concat(o)) : e$
})