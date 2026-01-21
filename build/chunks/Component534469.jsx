/** Chunk was on 82124 **/
/** chunk id: 534469, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AP: () => J,
  Ru: () => $,
  ZP: () => et
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

function Y() {
  return (Y = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function q(e) {
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

function X(e, t) {
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

function Q(e, t) {
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

function J(e, t, n) {
  return e.getElementById((0, S.p)(t, n))
}

function $(e) {
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
  s()(i.type === z.uaV.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
  let p = Y({}, function(e) {
      if (null == e) throw TypeError("Cannot destructure " + e);
      return e
    }((0, c.JA)(null != (t = e.id) ? t : ""))),
    f = (0, u.e7)([b.Z], () => b.Z.getMessageByReference(l)),
    {
      popouts: h,
      setPopout: g
    } = (0, w.Z)(i.id, V.d$),
    m = (0, I.ZP)(i),
    y = (0, N.iG)(i),
    v = (0, N.Gx)(i);
  return i.type === z.uaV.THREAD_STARTER_MESSAGE && null != f && f.state === b.Y.LOADED ? (0, r.jsx)(ee, X(q({}, e), {
    viewingChannelId: i.channel_id,
    message: f.message,
    groupId: f.message.id
  })) : (0, r.jsx)(Z.Z, X(q({}, p), {
    id: n,
    compact: o,
    className: a()(d, {
      [K.message]: true,
      [K.cozyMessage]: !o,
      [K.systemMessage]: true,
      [K.groupStart]: true
    }),
    childrenHeader: (0, U.Z)({
      messageProps: e,
      setPopout: g,
      messagePopouts: h,
      replyReference: l,
      author: m
    }),
    childrenSystemMessage: (0, H.Z)(e),
    childrenMessageContent: null,
    "aria-labelledby": y,
    "aria-describedby": v,
    hasThread: false,
    author: m
  }))
}

function ee(e) {
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
    compact: O = false,
    className: x,
    groupId: C,
    viewingChannelId: S
  } = e, P = o.type === z.uaV.REPLY ? o.messageReference : true, D = (0, c.JA)(null != (t = e.id) ? t : ""), {
    onFocus: k
  } = D, L = Q(D, ["onFocus"]), {
    isFocused: B,
    handleFocus: Y,
    handleBlur: J
  } = (0, T.bb)(k), {
    popouts: $,
    selected: ee,
    setPopout: et
  } = (0, w.Z)(o.id, V.d$), en = v.RS.useSetting(), er = v.NA.useSetting(), ei = (0, u.e7)([b.Z], () => b.Z.getMessageByReference(P)), el = (0, g.A)((null != (n = o.editedTimestamp) ? n : o.timestamp).valueOf()), {
    handleMouseEnter: ea,
    handleMouseLeave: eo,
    isHovered: es
  } = (0, T.tn)({
    groupId: C,
    message: o,
    defaultValue: ee
  }), ec = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled), eu = ee || ec && B, ed = eu || es, ep = (0, u.e7)([j.Z], () => j.Z.isDeveloper), {
    content: ef,
    hasSpoilerEmbeds: eh,
    hasBailedAst: eg
  } = (0, R.Z)(o, {
    hideSimpleEmbedContent: en && er,
    isInteracting: ed,
    formatInline: false,
    allowList: el,
    allowHeading: el,
    allowLinks: true,
    allowDevLinks: ep,
    previewLinkTarget: true,
    viewingChannelId: S
  }), em = (0, A.Z)(s, f, ec), eb = (0, I.ZP)(o), ey = (0, N.iG)(o, C), ev = (0, N.Gx)(o), eO = (0, G.Z)(e, ef, false), ej = i.useCallback(() => (0, y.XU)(m, f, s), [m, f, s]), ex = (0, h.p9)({
    guildId: m,
    roleId: eb.iconRoleId
  });
  return (0, r.jsxs)("div", {
    className: K.quotedChatMessage,
    children: [(0, r.jsx)(d.P3F, {
      className: K.jump,
      onClick: ej,
      "aria-label": W.intl.string(W.t.k5WiPf),
      children: W.intl.string(W.t.k5WiPf)
    }), (0, r.jsx)(Z.Z, X(q({}, L), {
      id: l,
      compact: O,
      className: a()(x, {
        [K.message]: true,
        [K.cozyMessage]: !O,
        [K.mentioned]: o.mentioned,
        [K.ephemeral]: (0, E.Pv)(o),
        [K.systemMessage]: (0, _.Z)(o),
        [K.groupStart]: o.id === C || o.type === z.uaV.REPLY,
        [K.selected]: eu
      }),
      zalgo: true,
      onKeyDown: em,
      onFocus: Y,
      onBlur: J,
      childrenRepliedMessage: o.type === z.uaV.REPLY && (0, F.Z)(X(q({}, e), {
        setPopout: et,
        referencedUsernameProfile: $.referencedUsernameProfile,
        referencedAvatarProfile: $.referencedAvatarProfile,
        replyReference: P,
        replyMessage: ei,
        isReplySpineClickable: true
      })),
      childrenHeader: (0, U.Z)({
        messageProps: e,
        setPopout: et,
        messagePopouts: $,
        replyReference: P,
        author: eb,
        repliedMessage: ei,
        roleIcon: ex
      }),
      childrenAccessories: (0, M.Z)({
        channelMessageProps: e,
        hasSpoilerEmbeds: eh,
        hasBailedAst: eg,
        isInteracting: ed,
        renderThreadAccessory: false,
        renderSuppressEmbeds: false,
        renderReactions: false,
        disableComponentInteractivity: true
      }),
      childrenSystemMessage: (0, H.Z)(e),
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
let et = Chunk473749.memo(function(e) {
  var t, n;
  let l, {
    id: o,
    message: y,
    message: {
      id: S
    },
    channel: Y,
    channel: {
      id: J
    },
    compact: $ = false,
    className: ee,
    flashKey: et,
    groupId: en,
    renderContentOnly: er
  } = e;
  s()(y.type !== z.uaV.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
  let ei = z.OBS.has(y.type) ? y.messageReference : true,
    el = (0, c.JA)(null != (t = e.id) ? t : ""),
    {
      onFocus: ea
    } = el,
    eo = Q(el, ["onFocus"]),
    es = v.RS.useSetting(),
    ec = v.NA.useSetting(),
    eu = (0, u.e7)([b.Z], () => b.Z.getMessageByReference(ei)),
    {
      popouts: ed,
      selected: ep,
      setPopout: ef
    } = (0, w.Z)(y.id, V.d$),
    eh = (0, T.qo)(y, Y, ef),
    eg = (0, T.Go)(y, Y),
    {
      handleMouseEnter: em,
      handleMouseLeave: eb,
      hasHovered: ey,
      isHovered: ev
    } = (0, T.tn)({
      groupId: en,
      message: y,
      defaultValue: ep
    }),
    {
      isFocused: eO,
      hasFocused: ej,
      handleFocus: ex,
      handleBlur: eC
    } = (0, T.bb)(ea),
    eE = i.useCallback(e => {
      ex(e), em(e)
    }, [ex, em]),
    eS = i.useCallback(e => {
      eC(e), eb()
    }, [eC, eb]),
    e_ = (0, u.e7)([x.Z], () => x.Z.isEditing(J, S), [J, S]),
    eI = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
    eP = ep || e_ || eI && eO,
    eZ = eP || ev,
    eN = (0, u.e7)([O.Z], () => y.hasFlag(z.iLy.HAS_THREAD) && O.Z.getChannel(C.default.castMessageIdAsChannelId(y.id))),
    eT = y.isFirstMessageInForumPost(Y),
    eA = (0, g.A)((null != (n = y.editedTimestamp) ? n : y.timestamp).valueOf()),
    ew = (0, u.e7)([j.Z], () => j.Z.isDeveloper),
    {
      content: eR,
      hasSpoilerEmbeds: eD,
      hasBailedAst: eM
    } = (0, R.Z)(y, {
      hideSimpleEmbedContent: es && ec,
      isInteracting: eZ,
      formatInline: false,
      allowList: eT || eA,
      allowHeading: eT || eA,
      allowLinks: true,
      allowDevLinks: ew,
      previewLinkTarget: true
    }),
    ek = (0, A.Z)(S, J, eI),
    eL = (0, I.ZP)(y),
    eU = (0, u.e7)([m.Z], () => m.Z.getPendingReply(J)),
    eG = function(e) {
      let t = i.useRef(e);
      return i.useEffect(() => {
        t.current = null != e ? e : t.current
      }), null != e ? e : t.current
    }(et),
    eB = (0, h.p9)({
      guildId: Y.guild_id,
      roleId: eL.iconRoleId
    }),
    eF = (0, N.iG)(y, en),
    eH = (0, N.Gx)(y),
    eV = (0, u.e7)([f.Z], () => f.Z.getMessage(S), [S]),
    ez = (0, D.Z)({
      message: y,
      channel: Y
    }),
    eW = i.useRef(window),
    eK = null != eV;
  l = y.type === z.uaV.CUSTOM_GIFT ? "" : !e_ && eK ? (0, k.Z)(e, eR) : (0, G.Z)(e, eR, e_);
  let eY = y.id === en,
    eq = (0, r.jsx)(d.tEY, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, r.jsx)("li", {
        id: o,
        className: K.messageListItem,
        "aria-setsize": false,
        children: (0, r.jsx)(Z.Z, X(q({}, eo), {
          "aria-setsize": false,
          "aria-roledescription": W.intl.string(W.t.BAB0yK),
          "aria-labelledby": eF,
          "aria-describedby": eH,
          onFocus: eE,
          onBlur: eS,
          onContextMenu: eh,
          onKeyDown: ek,
          onClick: eg,
          compact: $,
          contentOnly: er,
          className: a()(ee, {
            [K.message]: true,
            [K.cozyMessage]: !$,
            [K.mentioned]: y.mentioned,
            [K.ephemeral]: (0, E.Pv)(y),
            [K.nitroMessage]: y.type === z.uaV.NITRO_NOTIFICATION,
            [K.systemMessage]: (0, _.Z)(y),
            [K.groupStart]: !er && (eY || y.type === z.uaV.REPLY),
            [K.selected]: eP,
            [K.replying]: (null == eU ? true : eU.message.id) === y.id,
            [K.interactionSending]: y.isCommandType() && y.state === z.yb.SENDING,
            [K.automodMessage]: eK
          }),
          zalgo: !e_,
          childrenRepliedMessage: er || y.type !== z.uaV.REPLY ? true : (0, F.Z)(X(q({}, e), {
            setPopout: ef,
            referencedUsernameProfile: ed.referencedUsernameProfile,
            referencedAvatarProfile: ed.referencedAvatarProfile,
            replyReference: ei,
            replyMessage: eu,
            isReplySpineClickable: true
          })),
          childrenExecutedCommand: (0, B.Z)(e, ef, ed),
          childrenHeader: er ? true : (0, U.Z)({
            messageProps: e,
            setPopout: ef,
            messagePopouts: ed,
            replyReference: ei,
            author: eL,
            repliedMessage: eu,
            roleIcon: eB
          }),
          childrenAccessories: (0, M.Z)({
            channelMessageProps: e,
            hasSpoilerEmbeds: eD,
            hasBailedAst: eM,
            handleContextMenu: eh,
            isInteracting: eZ,
            isAutomodBlockedMessage: eK,
            forceAddReactions: y.type === z.uaV.EMOJI_ADDED
          }),
          childrenButtons: ey || ej ? (0, L.Z)({
            buttonProps: e,
            setPopout: ef,
            messagePopouts: ed,
            isFocused: ev || eO,
            messageWindow: eW.current
          }) : true,
          childrenSystemMessage: (0, H.Z)(e),
          childrenMessageContent: l,
          onMouseMove: em,
          onMouseLeave: eb,
          hasThread: !er && y.hasFlag(z.iLy.HAS_THREAD) && null != eN,
          isSystemMessage: (0, _.Z)(y),
          hasReply: y.type === z.uaV.REPLY,
          messageRef: e => {
            var t, n;
            ez.current = e, eW.current = null != (n = null == e || null == (t = e.ownerDocument) ? true : t.defaultView) ? n : window
          },
          author: eL
        }))
      })
    });
  return null != eG ? (0, r.jsx)(P.Z, {
    flashKey: eG,
    className: a()({
      [K.backgroundFlash]: true,
      [K.groupStart]: !$ && y.id === en
    }),
    children: eq
  }, "bg-flash-".concat(o)) : eq
})