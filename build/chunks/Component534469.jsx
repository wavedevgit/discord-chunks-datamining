/** Chunk was on 5665 **/
/** chunk id: 534469, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AP: () => en,
  Ru: () => er,
  ZP: () => el
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
  Chunk360514 = require("./360514.js"),
  Chunk492333 = require("./492333.js");

function J() {
  return (J = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function $(e) {
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

function ee(e, t) {
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

function et(e, t) {
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

function en(e, t, n) {
  return e.getElementById((0, I.p)(t, n))
}

function er(e) {
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
    h = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(l)),
    {
      popouts: f,
      setPopout: m
    } = (0, k.Z)(i.id, q.d$),
    g = (0, T.ZP)(i),
    b = (0, w.iG)(i),
    y = (0, w.Gx)(i);
  return i.type === Y.uaV.THREAD_STARTER_MESSAGE && null != h && h.state === C.Y.LOADED ? (0, r.jsx)(ei, ee($({}, e), {
    viewingChannelId: i.channel_id,
    message: h.message,
    groupId: h.message.id
  })) : (0, r.jsx)(A.Z, ee($({}, p), {
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

function ei(e) {
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
    groupId: _,
    viewingChannelId: O
  } = e, j = o.type === Y.uaV.REPLY ? o.messageReference : true, E = (0, c.JA)(null != (t = e.id) ? t : ""), {
    onFocus: S
  } = E, I = et(E, ["onFocus"]), {
    isFocused: N,
    handleFocus: L,
    handleBlur: B
  } = (0, R.bb)(S), {
    popouts: F,
    selected: V,
    setPopout: Q
  } = (0, k.Z)(o.id, q.d$), J = v.RS.useSetting(), en = v.NA.useSetting(), er = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(j)), ei = (0, m.A)((null != (n = o.editedTimestamp) ? n : o.timestamp).valueOf()), {
    handleMouseEnter: el,
    handleMouseLeave: ea,
    isHovered: eo
  } = (0, R.tn)({
    groupId: _,
    message: o,
    defaultValue: V,
    popouts: F
  }), es = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled), ec = V || es && N, eu = ec || eo, {
    content: ed,
    hasSpoilerEmbeds: ep
  } = (0, D.Z)(o, {
    hideSimpleEmbedContent: J && en,
    isInteracting: eu,
    formatInline: false,
    allowList: ei,
    allowHeading: ei,
    allowLinks: true,
    previewLinkTarget: true,
    viewingChannelId: O
  }), eh = (0, M.Z)(s, h, es), ef = (0, T.ZP)(o), em = (0, w.iG)(o, _), eg = (0, w.Gx)(o), eb = (0, G.Z)(e, ed, false), ey = i.useCallback(() => (0, x.XU)(g, h, s), [g, h, s]), e_ = (0, f.p9)({
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
    }), (0, r.jsx)(A.Z, ee($({}, I), {
      id: l,
      compact: b,
      className: a()(y, {
        [X.message]: true,
        [X.cozyMessage]: !b,
        [X.mentioned]: o.mentioned,
        [X.ephemeral]: (0, P.Pv)(o),
        [X.systemMessage]: (0, Z.Z)(o),
        [X.groupStart]: o.id === _ || o.type === Y.uaV.REPLY,
        [X.selected]: ec
      }),
      zalgo: true,
      onKeyDown: eh,
      onFocus: L,
      onBlur: B,
      childrenRepliedMessage: o.type === Y.uaV.REPLY && (0, z.Z)(ee($({}, e), {
        setPopout: Q,
        referencedUsernameProfile: F.referencedUsernameProfile,
        referencedAvatarProfile: F.referencedAvatarProfile,
        replyReference: j,
        replyMessage: er,
        isReplySpineClickable: true
      })),
      childrenHeader: (0, H.Z)({
        messageProps: e,
        setPopout: Q,
        messagePopouts: F,
        replyReference: j,
        author: ef,
        repliedMessage: er,
        roleIcon: e_
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
let el = Chunk647438.memo(function(e) {
  var t, n;
  let l, {
    id: o,
    message: x,
    message: {
      id: I
    },
    channel: J,
    channel: {
      id: en
    },
    compact: er = false,
    className: ei,
    flashKey: el,
    groupId: ea,
    renderContentOnly: eo
  } = e;
  s()(x.type !== Y.uaV.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
  let es = Y.OBS.has(x.type) ? x.messageReference : true,
    ec = (0, c.JA)(null != (t = e.id) ? t : ""),
    {
      onFocus: eu
    } = ec,
    ed = et(ec, ["onFocus"]),
    ep = (0, b.p7)("ChatMessage"),
    eh = v.RS.useSetting(),
    ef = v.NA.useSetting(),
    em = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(es)),
    {
      popouts: eg,
      selected: eb,
      setPopout: ey
    } = (0, k.Z)(x.id, q.d$),
    e_ = (0, R.qo)(x, J, ey),
    eC = (0, R.Go)(x, J),
    {
      handleMouseEnter: ex,
      handleMouseLeave: ev,
      hasHovered: eO,
      isHovered: ej
    } = (0, R.tn)({
      groupId: ea,
      message: x,
      defaultValue: eb,
      popouts: eg
    }),
    {
      isFocused: eE,
      hasFocused: eS,
      handleFocus: eP,
      handleBlur: eI
    } = (0, R.bb)(eu),
    eZ = i.useCallback(e => {
      eP(e), ex(e)
    }, [eP, ex]),
    eT = i.useCallback(e => {
      eI(e), ev()
    }, [eI, ev]),
    eN = (0, u.e7)([E.Z], () => E.Z.isEditing(en, I), [en, I]),
    eA = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
    ew = eb || eN || eA && eE,
    eR = ew || ej,
    eM = (0, u.e7)([O.Z], () => x.hasFlag(Y.iLy.HAS_THREAD) && O.Z.getChannel(S.default.castMessageIdAsChannelId(x.id))),
    ek = x.isFirstMessageInForumPost(J),
    eD = (0, m.A)((null != (n = x.editedTimestamp) ? n : x.timestamp).valueOf()),
    eL = (0, u.e7)([j.Z], () => j.Z.isDeveloper),
    {
      content: eU,
      hasSpoilerEmbeds: eB
    } = (0, D.Z)(x, {
      hideSimpleEmbedContent: eh && ef,
      isInteracting: eR,
      formatInline: false,
      allowList: ek || eD,
      allowHeading: ek || eD,
      allowLinks: true,
      allowDevLinks: eL,
      previewLinkTarget: true
    }),
    eF = (0, M.Z)(I, en, eA),
    eH = (0, T.ZP)(x),
    eG = (0, u.e7)([_.Z], () => _.Z.getPendingReply(en)),
    eV = function(e) {
      let t = i.useRef(e);
      return i.useEffect(() => {
        t.current = null != e ? e : t.current
      }), null != e ? e : t.current
    }(el),
    ez = (0, f.p9)({
      guildId: J.guild_id,
      roleId: eH.iconRoleId
    }),
    eW = (0, w.iG)(x, ea),
    eq = (0, w.Gx)(x),
    eY = (0, u.e7)([h.Z], () => h.Z.getMessage(I), [I]),
    eK = (0, L.Z)({
      message: x,
      channel: J
    }),
    eX = i.useRef(window),
    eQ = null != eY,
    eJ = i.useMemo(() => Object.values(eg).some(e => e), [eg]);
  l = x.type === Y.uaV.CUSTOM_GIFT ? "" : !eN && eQ ? (0, B.Z)(e, eU) : (0, G.Z)(e, eU, eN);
  let e$ = x.id === ea,
    e0 = (0, r.jsx)(d.tEY, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, r.jsxs)("li", {
        id: o,
        className: X.messageListItem,
        "aria-setsize": false,
        children: [(0, y.Uw)(x) && (0, r.jsx)(g.Z, {
          compact: er,
          message: x,
          hovering: ej && !eN && !eJ
        }), (0, r.jsx)(A.Z, ee($({}, ed), {
          "aria-setsize": false,
          "aria-roledescription": K.intl.string(K.t.BAB0yM),
          "aria-labelledby": eW,
          "aria-describedby": eq,
          onFocus: eZ,
          onBlur: eT,
          onContextMenu: e_,
          onKeyDown: eF,
          onClick: eC,
          compact: er,
          contentOnly: eo,
          className: a()(ei, {
            [X.message]: true,
            [X.cozyMessage]: !er,
            [X.mentioned]: x.mentioned,
            [X.ephemeral]: (0, P.Pv)(x),
            [X.nitroMessage]: x.type === Y.uaV.NITRO_NOTIFICATION || x.type === Y.uaV.CHAT_WALLPAPER_SET || x.type === Y.uaV.CHAT_WALLPAPER_REMOVED,
            [X.systemMessage]: (0, Z.Z)(x),
            [X.groupStart]: !eo && (e$ || x.type === Y.uaV.REPLY),
            [X.selected]: ew,
            [X.replying]: (null == eG ? true : eG.message.id) === x.id,
            [X.interactionSending]: x.isCommandType() && x.state === Y.yb.SENDING,
            [X.automodMessage]: eQ,
            [X.editing]: eN,
            [X.hasOpenPopouts]: eJ,
            [X.potioned]: (0, y.Uw)(x) && ep,
            [Q.forceAnimate]: ej
          }),
          zalgo: !eN,
          childrenRepliedMessage: eo || x.type !== Y.uaV.REPLY ? true : (0, z.Z)(ee($({}, e), {
            setPopout: ey,
            referencedUsernameProfile: eg.referencedUsernameProfile,
            referencedAvatarProfile: eg.referencedAvatarProfile,
            replyReference: es,
            replyMessage: em,
            isReplySpineClickable: true
          })),
          childrenExecutedCommand: (0, V.Z)(e, ey, eg),
          childrenHeader: eo ? true : (0, H.Z)({
            messageProps: e,
            setPopout: ey,
            messagePopouts: eg,
            replyReference: es,
            author: eH,
            repliedMessage: em,
            roleIcon: ez
          }),
          childrenAccessories: (0, U.Z)({
            channelMessageProps: e,
            hasSpoilerEmbeds: eB,
            handleContextMenu: e_,
            isInteracting: eR,
            isAutomodBlockedMessage: eQ,
            forceAddReactions: x.type === Y.uaV.EMOJI_ADDED
          }),
          childrenButtons: eO || eS ? (0, F.Z)({
            buttonProps: e,
            setPopout: ey,
            messagePopouts: eg,
            isFocused: ej || eE,
            messageWindow: eX.current
          }) : true,
          childrenSystemMessage: (0, W.Z)(e),
          childrenMessageContent: l,
          onMouseMove: ex,
          onMouseLeave: ev,
          hasThread: !eo && x.hasFlag(Y.iLy.HAS_THREAD) && null != eM,
          isSystemMessage: (0, Z.Z)(x),
          hasReply: x.type === Y.uaV.REPLY,
          messageRef: e => {
            var t, n;
            eK.current = e, eX.current = null != (n = null == e || null == (t = e.ownerDocument) ? true : t.defaultView) ? n : window
          },
          author: eH
        }))]
      })
    });
  return null != eV ? (0, r.jsx)(N.Z, {
    flashKey: eV,
    className: a()({
      [X.backgroundFlash]: true,
      [X.groupStart]: !er && x.id === ea
    }),
    children: e0
  }, "bg-flash-".concat(o)) : e0
})