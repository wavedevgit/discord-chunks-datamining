/** Chunk was on 71611 **/
n.d(t, {
  AP: () => et,
  Ru: () => en,
  ZP: () => ei
});
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(512722),
  s = n.n(a),
  c = n(91192),
  u = n(442837),
  d = n(481060),
  p = n(607070),
  h = n(223606),
  f = n(518738),
  m = n(628238),
  g = n(911266),
  b = n(111810),
  _ = n(235894),
  C = n(807092),
  v = n(869765),
  y = n(703656),
  x = n(695346),
  j = n(592125),
  O = n(906467),
  N = n(323873),
  E = n(709054),
  I = n(786761),
  P = n(534091),
  S = n(901461),
  Z = n(739566),
  T = n(233715),
  A = n(492593),
  w = n(453687),
  R = n(348238),
  M = n(62072),
  k = n(38267),
  L = n(25015),
  D = n(689674),
  W = n(438075),
  U = n(764893),
  B = n(481363),
  F = n(900902),
  H = n(252032),
  G = n(737243),
  V = n(614584),
  z = n(295790),
  q = n(959517),
  Y = n(981631),
  K = n(388032),
  X = n(656017);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
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
    compact: a = !1,
    className: d
  } = e;
  s()(i.type === Y.uaV.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
  let p = Q({}, function(e) {
      if (null == e) throw TypeError("Cannot destructure " + e);
      return e
    }((0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ""))),
    h = (0, u.e7)([v.Z], () => v.Z.getMessageByReference(l)),
    {
      popouts: f,
      setPopout: m
    } = (0, k.Z)(i.id, q.d$),
    g = (0, Z.ZP)(i),
    b = (0, w.iG)(i),
    _ = (0, w.Gx)(i);
  return i.type === Y.uaV.THREAD_STARTER_MESSAGE && null != h && h.state === v.Y.LOADED ? (0, r.jsx)(er, $(J({}, e), {
    viewingChannelId: i.channel_id,
    message: h.message,
    groupId: h.message.id
  })) : (0, r.jsx)(A.Z, $(J({}, p), {
    id: n,
    compact: a,
    className: o()(d, {
      [X.message]: !0,
      [X.cozyMessage]: !a,
      [X.systemMessage]: !0,
      [X.groupStart]: !0
    }),
    childrenHeader: (0, F.Z)({
      messageProps: e,
      setPopout: m,
      messagePopouts: f,
      replyReference: l,
      author: g
    }),
    childrenSystemMessage: (0, z.Z)(e),
    childrenMessageContent: null,
    "aria-labelledby": b,
    "aria-describedby": _,
    hasThread: !1
  }))
}

function er(e) {
  var t, n;
  let {
    id: l,
    message: a,
    message: {
      id: s,
      channel_id: h
    },
    channel: {
      guild_id: g
    },
    compact: b = !1,
    className: _,
    groupId: C,
    viewingChannelId: j
  } = e, O = a.type === Y.uaV.REPLY ? a.messageReference : void 0, N = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ""), {
    onFocus: E
  } = N, P = ee(N, ["onFocus"]), {
    isFocused: T,
    handleFocus: D,
    handleBlur: U
  } = (0, R.bb)(E), {
    popouts: B,
    selected: G,
    setPopout: Q
  } = (0, k.Z)(a.id, q.d$), et = x.RS.useSetting(), en = x.NA.useSetting(), er = (0, u.e7)([v.Z], () => v.Z.getMessageByReference(O)), ei = (0, m.A)((null !== (n = a.editedTimestamp) && void 0 !== n ? n : a.timestamp).valueOf()), {
    handleMouseEnter: el,
    handleMouseLeave: eo,
    isHovered: ea
  } = (0, R.tn)({
    groupId: C,
    message: a,
    defaultValue: G,
    popouts: B
  }), es = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled), ec = G || es && T, eu = ec || ea, {
    content: ed,
    hasSpoilerEmbeds: ep
  } = (0, L.Z)(a, {
    hideSimpleEmbedContent: et && en,
    isInteracting: eu,
    formatInline: !1,
    allowList: ei,
    allowHeading: ei,
    allowLinks: !0,
    previewLinkTarget: !0,
    viewingChannelId: j
  }), eh = (0, M.Z)(s, h, es), ef = (0, Z.ZP)(a), em = (0, w.iG)(a, C), eg = (0, w.Gx)(a), eb = (0, H.Z)(e, ed, !1), e_ = i.useCallback(() => (0, y.XU)(g, h, s), [g, h, s]), eC = (0, f.p9)({
    guildId: g,
    roleId: ef.iconRoleId
  });
  return (0, r.jsxs)("div", {
    className: X.quotedChatMessage,
    children: [(0, r.jsx)(d.P3F, {
      className: X.jump,
      onClick: e_,
      "aria-label": K.NW.string(K.t.k5WiPT),
      children: K.NW.string(K.t.k5WiPT)
    }), (0, r.jsx)(A.Z, $(J({}, P), {
      id: l,
      compact: b,
      className: o()(_, {
        [X.message]: !0,
        [X.cozyMessage]: !b,
        [X.mentioned]: a.mentioned,
        [X.ephemeral]: (0, I.Pv)(a),
        [X.systemMessage]: (0, S.Z)(a),
        [X.groupStart]: a.id === C || a.type === Y.uaV.REPLY,
        [X.selected]: ec
      }),
      zalgo: !0,
      onKeyDown: eh,
      onFocus: D,
      onBlur: U,
      childrenRepliedMessage: a.type === Y.uaV.REPLY && (0, V.Z)($(J({}, e), {
        setPopout: Q,
        referencedUsernameProfile: B.referencedUsernameProfile,
        referencedAvatarProfile: B.referencedAvatarProfile,
        replyReference: O,
        replyMessage: er,
        isReplySpineClickable: !0
      })),
      childrenHeader: (0, F.Z)({
        messageProps: e,
        setPopout: Q,
        messagePopouts: B,
        replyReference: O,
        author: ef,
        repliedMessage: er,
        roleIcon: eC
      }),
      childrenAccessories: (0, W.Z)({
        channelMessageProps: e,
        hasSpoilerEmbeds: ep,
        isInteracting: eu,
        renderThreadAccessory: !1,
        renderSuppressEmbeds: !1,
        renderReactions: !1,
        disableComponentInteractivity: !0
      }),
      childrenSystemMessage: (0, z.Z)(e),
      childrenMessageContent: eb,
      onMouseMove: el,
      onMouseLeave: eo,
      "aria-labelledby": em,
      "aria-describedby": eg,
      hasThread: !1
    }))]
  })
}
let ei = i.memo(function(e) {
  var t, n;
  let l;
  let {
    id: a,
    message: y,
    message: {
      id: P
    },
    channel: Q,
    channel: {
      id: et
    },
    compact: en = !1,
    className: er,
    flashKey: ei,
    groupId: el,
    renderContentOnly: eo
  } = e;
  s()(y.type !== Y.uaV.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
  let ea = Y.OBS.has(y.type) ? y.messageReference : void 0,
    es = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ""),
    {
      onFocus: ec
    } = es,
    eu = ee(es, ["onFocus"]),
    ed = (0, b.p7)("ChatMessage"),
    ep = x.RS.useSetting(),
    eh = x.NA.useSetting(),
    ef = (0, u.e7)([v.Z], () => v.Z.getMessageByReference(ea)),
    {
      popouts: em,
      selected: eg,
      setPopout: eb
    } = (0, k.Z)(y.id, q.d$),
    e_ = (0, R.qo)(y, Q, eb),
    eC = (0, R.Go)(y, Q),
    {
      handleMouseEnter: ev,
      handleMouseLeave: ey,
      hasHovered: ex,
      isHovered: ej
    } = (0, R.tn)({
      groupId: el,
      message: y,
      defaultValue: eg,
      popouts: em
    }),
    {
      isFocused: eO,
      hasFocused: eN,
      handleFocus: eE,
      handleBlur: eI
    } = (0, R.bb)(ec),
    eP = i.useCallback(e => {
      eE(e), ev(e)
    }, [eE, ev]),
    eS = i.useCallback(e => {
      eI(e), ey()
    }, [eI, ey]),
    eZ = (0, u.e7)([N.Z], () => N.Z.isEditing(et, P), [et, P]),
    eT = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
    eA = eg || eZ || eT && eO,
    ew = eA || ej,
    eR = (0, u.e7)([j.Z], () => y.hasFlag(Y.iLy.HAS_THREAD) && j.Z.getChannel(E.default.castMessageIdAsChannelId(y.id))),
    eM = y.isFirstMessageInForumPost(Q),
    ek = (0, m.A)((null !== (n = y.editedTimestamp) && void 0 !== n ? n : y.timestamp).valueOf()),
    eL = (0, u.e7)([O.Z], () => O.Z.isDeveloper),
    {
      content: eD,
      hasSpoilerEmbeds: eW
    } = (0, L.Z)(y, {
      hideSimpleEmbedContent: ep && eh,
      isInteracting: ew,
      formatInline: !1,
      allowList: eM || ek,
      allowHeading: eM || ek,
      allowLinks: !0,
      allowDevLinks: eL,
      previewLinkTarget: !0
    }),
    eU = (0, M.Z)(P, et, eT),
    eB = (0, Z.ZP)(y),
    eF = (0, u.e7)([C.Z], () => C.Z.getPendingReply(et)),
    eH = function(e) {
      let t = i.useRef(e);
      return i.useEffect(() => {
        t.current = null != e ? e : t.current
      }), null != e ? e : t.current
    }(ei),
    eG = (0, f.p9)({
      guildId: Q.guild_id,
      roleId: eB.iconRoleId
    }),
    eV = (0, w.iG)(y, el),
    ez = (0, w.Gx)(y),
    eq = (0, u.e7)([h.Z], () => h.Z.getMessage(P), [P]),
    eY = (0, D.Z)({
      message: y,
      channel: Q
    }),
    eK = null != eq,
    eX = i.useMemo(() => Object.values(em).some(e => e), [em]);
  l = y.type === Y.uaV.CUSTOM_GIFT ? "" : !eZ && eK ? (0, U.Z)(e, eD) : (0, H.Z)(e, eD, eZ);
  let eQ = y.id === el,
    eJ = (0, r.jsx)(d.tEY, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, r.jsxs)("li", {
        id: a,
        className: X.messageListItem,
        "aria-setsize": -1,
        children: [(0, _.Uw)(y) && (0, r.jsx)(g.Z, {
          compact: en,
          message: y,
          hovering: ej && !eZ && !eX
        }), (0, r.jsx)(A.Z, $(J({}, eu), {
          "aria-setsize": -1,
          "aria-roledescription": K.NW.string(K.t.BAB0yM),
          "aria-labelledby": eV,
          "aria-describedby": ez,
          onFocus: eP,
          onBlur: eS,
          onContextMenu: e_,
          onKeyDown: eU,
          onClick: eC,
          compact: en,
          contentOnly: eo,
          className: o()(er, {
            [X.message]: !0,
            [X.cozyMessage]: !en,
            [X.mentioned]: y.mentioned,
            [X.ephemeral]: (0, I.Pv)(y),
            [X.nitroMessage]: y.type === Y.uaV.NITRO_NOTIFICATION,
            [X.systemMessage]: (0, S.Z)(y),
            [X.groupStart]: !eo && (eQ || y.type === Y.uaV.REPLY),
            [X.selected]: eA,
            [X.replying]: (null == eF ? void 0 : eF.message.id) === y.id,
            [X.interactionSending]: y.isCommandType() && y.state === Y.yb.SENDING,
            [X.automodMessage]: eK,
            [X.editing]: eZ,
            [X.hasOpenPopouts]: eX,
            [X.potioned]: (0, _.Uw)(y) && ed
          }),
          zalgo: !eZ,
          childrenRepliedMessage: eo || y.type !== Y.uaV.REPLY ? void 0 : (0, V.Z)($(J({}, e), {
            setPopout: eb,
            referencedUsernameProfile: em.referencedUsernameProfile,
            referencedAvatarProfile: em.referencedAvatarProfile,
            replyReference: ea,
            replyMessage: ef,
            isReplySpineClickable: !0
          })),
          childrenExecutedCommand: (0, G.Z)(e, eb, em),
          childrenHeader: eo ? void 0 : (0, F.Z)({
            messageProps: e,
            setPopout: eb,
            messagePopouts: em,
            replyReference: ea,
            author: eB,
            repliedMessage: ef,
            roleIcon: eG
          }),
          childrenAccessories: (0, W.Z)({
            channelMessageProps: e,
            hasSpoilerEmbeds: eW,
            handleContextMenu: e_,
            isInteracting: ew,
            isAutomodBlockedMessage: eK
          }),
          childrenButtons: ex || eN ? (0, B.Z)({
            buttonProps: e,
            setPopout: eb,
            messagePopouts: em,
            isFocused: ej || eO
          }) : void 0,
          childrenSystemMessage: (0, z.Z)(e),
          childrenMessageContent: l,
          onMouseMove: ev,
          onMouseLeave: ey,
          hasThread: !eo && y.hasFlag(Y.iLy.HAS_THREAD) && null != eR,
          isSystemMessage: (0, S.Z)(y),
          hasReply: y.type === Y.uaV.REPLY,
          messageRef: eY
        }))]
      })
    });
  return null != eH ? (0, r.jsx)(T.Z, {
    flashKey: eH,
    className: o()({
      [X.backgroundFlash]: !0,
      [X.groupStart]: !en && y.id === el
    }),
    children: eJ
  }, "bg-flash-".concat(a)) : eJ
})