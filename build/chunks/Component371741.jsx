/** Chunk was on 17869 **/
/** chunk id: 371741, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Av: () => Q,
  Ay: () => et,
  VO: () => $
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk93474 = require("./93474.js"),
  Chunk201275 = require("./201275.js"),
  Chunk384231 = require("./384231.js"),
  Chunk853145 = require("./853145.js"),
  Chunk9842 = require("./9842.js"),
  Chunk976860 = require("./976860.js"),
  Chunk253932 = require("./253932.js"),
  Chunk734057 = require("./734057.js"),
  Chunk540999 = require("./540999.js"),
  Chunk580745 = require("./580745.js"),
  Chunk661191 = require("./661191.js"),
  Chunk141468 = require("./141468.js"),
  Chunk375901 = require("./375901.js"),
  Chunk143413 = require("./143413.js"),
  Chunk763754 = require("./763754.js"),
  Chunk245748 = require("./245748.jsx"),
  Chunk491182 = require("./491182.jsx"),
  Chunk860227 = require("./860227.js"),
  Chunk112758 = require("./112758.jsx"),
  Chunk866897 = require("./866897.js"),
  Chunk754459 = require("./754459.js"),
  Chunk538355 = require("./538355.jsx"),
  Chunk522871 = require("./522871.js"),
  Chunk699352 = require("./699352.jsx"),
  Chunk426153 = require("./426153.jsx"),
  Chunk444529 = require("./444529.jsx"),
  Chunk241874 = require("./241874.jsx"),
  Chunk91624 = require("./91624.jsx"),
  Chunk653008 = require("./653008.jsx"),
  Chunk162792 = require("./162792.jsx"),
  Chunk675722 = require("./675722.jsx"),
  Chunk381941 = require("./381941.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk119907 = require("./119907.js");

function q() {
  return (q = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l])
    }
    return e
  }).apply(this, arguments)
}

function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function X(e, t) {
  if (null == e) return {};
  var n, l, r, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var n, l, r = {},
        i = Object.getOwnPropertyNames(e);
      for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
      return r
    }(e, t), Object.getOwnPropertySymbols)
    for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
  return i
}

function Q(e, t, n) {
  return e.getElementById((0, S.j)(t, n))
}

function $(e) {
  var t;
  let {
    id: n,
    message: r,
    message: {
      messageReference: i
    },
    compact: s = false,
    className: d
  } = e;
  o()(r.type === W.lAJ.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
  let h = (0, c.rm)(null != (t = e.id) ? t : ""),
    {} = h,
    p = q({}, h),
    f = (0, u.bG)([A.A], () => A.A.getMessageByReference(i)),
    {
      popouts: m,
      setPopout: g
    } = (0, R.A)(r.id, K.Fd),
    b = (0, j.Ay)(r),
    _ = (0, N.fF)(r),
    y = (0, N.ZD)(r);
  return r.type === W.lAJ.THREAD_STARTER_MESSAGE && null != f && f.state === A.a.LOADED ? (0, l.jsx)(ee, Z(J({}, e), {
    viewingChannelId: r.channel_id,
    message: f.message,
    groupId: f.message.id
  })) : (0, l.jsx)(T.A, Z(J({}, p), {
    id: n,
    compact: s,
    className: a()(d, {
      [Y.iU]: true,
      [Y.HJ]: !s,
      [Y.H4]: true,
      [Y._A]: true
    }),
    childrenHeader: (0, G.A)({
      messageProps: e,
      setPopout: g,
      messagePopouts: m,
      replyReference: i,
      author: b
    }),
    childrenSystemMessage: (0, V.A)(e),
    childrenMessageContent: null,
    "aria-labelledby": _,
    "aria-describedby": y,
    hasThread: false,
    author: b
  }))
}

function ee(e) {
  var t, n;
  let {
    id: i,
    message: s,
    message: {
      id: o,
      channel_id: p
    },
    channel: {
      guild_id: g
    },
    compact: y = false,
    className: v,
    groupId: O,
    viewingChannelId: S
  } = e, I = s.type === W.lAJ.REPLY ? s.messageReference : true, M = (0, c.rm)(null != (t = e.id) ? t : ""), {
    onFocus: k
  } = M, U = X(M, ["onFocus"]), {
    isFocused: H,
    handleFocus: q,
    handleBlur: Q
  } = (0, P.G8)(k), {
    popouts: $,
    selected: ee,
    setPopout: et
  } = (0, R.A)(s.id, K.Fd), en = _.hD.useSetting(), el = _.rs.useSetting(), er = (0, u.bG)([A.A], () => A.A.getMessageByReference(I)), ei = (0, m.S)((null != (n = s.editedTimestamp) ? n : s.timestamp).valueOf()), {
    handleMouseEnter: ea,
    handleMouseLeave: es,
    isHovered: eo
  } = (0, P.yp)({
    groupId: O,
    message: s,
    defaultValue: ee
  }), ec = (0, u.bG)([h.A], () => h.A.keyboardModeEnabled), eu = ee || ec && H, ed = eu || eo, eh = (0, u.bG)([E.A], () => E.A.isDeveloper), {
    content: ep,
    hasSpoilerEmbeds: ef,
    hasBailedAst: em
  } = (0, D.A)(s, {
    hideSimpleEmbedContent: en && el,
    isInteracting: ed,
    formatInline: false,
    allowList: ei,
    allowHeading: ei,
    allowLinks: true,
    allowDevLinks: eh,
    previewLinkTarget: true,
    viewingChannelId: S
  }), eg = (0, w.A)(o, p, ec), eA = (0, j.Ay)(s), eb = (0, N.fF)(s, O), e_ = (0, N.ZD)(s), ey = (0, F.A)(e, ep, false), eE = r.useCallback(() => (0, b.uh)(g, p, o), [g, p, o]), ev = (0, f.$7)({
    guildId: g,
    roleId: eA.iconRoleId
  });
  return (0, l.jsxs)("div", {
    className: Y.m5,
    children: [(0, l.jsx)(d.DUT, {
      className: Y.lA,
      onClick: eE,
      "aria-label": z.intl.string(z.t.k5WiPf),
      children: z.intl.string(z.t.k5WiPf)
    }), (0, l.jsx)(T.A, Z(J({}, U), {
      id: i,
      compact: y,
      className: a()(v, {
        [Y.iU]: true,
        [Y.HJ]: !y,
        [Y.mK]: s.mentioned,
        [Y.M1]: (0, C.ec)(s),
        [Y.H4]: (0, x.A)(s),
        [Y._A]: s.id === O || s.type === W.lAJ.REPLY,
        [Y.wH]: eu
      }),
      zalgo: true,
      onKeyDown: eg,
      onFocus: q,
      onBlur: Q,
      childrenRepliedMessage: s.type === W.lAJ.REPLY && (0, B.A)(Z(J({}, e), {
        setPopout: et,
        referencedUsernameProfile: $.referencedUsernameProfile,
        referencedAvatarProfile: $.referencedAvatarProfile,
        replyReference: I,
        replyMessage: er,
        isReplySpineClickable: true
      })),
      childrenHeader: (0, G.A)({
        messageProps: e,
        setPopout: et,
        messagePopouts: $,
        replyReference: I,
        author: eA,
        repliedMessage: er,
        roleIcon: ev
      }),
      childrenAccessories: (0, L.A)({
        channelMessageProps: e,
        hasSpoilerEmbeds: ef,
        hasBailedAst: em,
        isInteracting: ed,
        renderThreadAccessory: false,
        renderSuppressEmbeds: false,
        renderReactions: false,
        disableComponentInteractivity: true
      }),
      childrenSystemMessage: (0, V.A)(e),
      childrenMessageContent: ey,
      onMouseMove: ea,
      onMouseLeave: es,
      "aria-labelledby": eb,
      "aria-describedby": e_,
      hasThread: false,
      author: eA
    }))]
  })
}
let et = Chunk64700.memo(function(e) {
  var t, n;
  let i, s, {
    id: b,
    message: S,
    message: {
      id: q
    },
    channel: Q,
    channel: {
      id: $
    },
    compact: ee = false,
    className: et,
    flashKey: en,
    groupId: el,
    renderContentOnly: er
  } = e;
  o()(S.type !== W.lAJ.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
  let ei = W.sl8.has(S.type) ? S.messageReference : true,
    ea = (0, c.rm)(null != (t = e.id) ? t : ""),
    {
      onFocus: es
    } = ea,
    eo = X(ea, ["onFocus"]),
    ec = _.hD.useSetting(),
    eu = _.rs.useSetting(),
    ed = (0, u.bG)([A.A], () => A.A.getMessageByReference(ei)),
    {
      popouts: eh,
      selected: ep,
      setPopout: ef
    } = (0, R.A)(S.id, K.Fd),
    em = (0, P.VL)(S, Q, ef),
    eg = (0, P.ri)(S, Q),
    {
      handleMouseEnter: eA,
      handleMouseLeave: eb,
      hasHovered: e_,
      isHovered: ey
    } = (0, P.yp)({
      groupId: el,
      message: S,
      defaultValue: ep
    }),
    {
      isFocused: eE,
      hasFocused: ev,
      handleFocus: eO,
      handleBlur: eC
    } = (0, P.G8)(es),
    eS = r.useCallback(e => {
      eO(e), eA(e)
    }, [eO, eA]),
    ex = r.useCallback(e => {
      eC(e), eb()
    }, [eC, eb]),
    ej = (0, u.bG)([v.A], () => v.A.isEditing($, q), [$, q]),
    eI = (0, u.bG)([h.A], () => h.A.keyboardModeEnabled),
    eT = ep || ej || eI && eE,
    eN = eT || ey,
    eP = (0, u.bG)([y.A], () => S.hasFlag(W.pr7.HAS_THREAD) && y.A.getChannel(O.default.castMessageIdAsChannelId(S.id))),
    ew = S.isFirstMessageInForumPost(Q),
    eR = (0, m.S)((null != (n = S.editedTimestamp) ? n : S.timestamp).valueOf()),
    eD = (0, u.bG)([E.A], () => E.A.isDeveloper),
    {
      content: eM,
      hasSpoilerEmbeds: eL,
      hasBailedAst: ek
    } = (0, D.A)(S, {
      hideSimpleEmbedContent: ec && eu,
      isInteracting: eN,
      formatInline: false,
      allowList: ew || eR,
      allowHeading: ew || eR,
      allowLinks: true,
      allowDevLinks: eD,
      previewLinkTarget: true
    }),
    eU = (0, w.A)(q, $, eI),
    eG = (0, j.Ay)(S),
    eF = (0, u.bG)([g.A], () => g.A.getPendingReply($)),
    eH = (i = r.useRef(en), r.useEffect(() => {
      i.current = null != en ? en : i.current
    }), null != en ? en : i.current),
    eB = (0, f.$7)({
      guildId: Q.guild_id,
      roleId: eG.iconRoleId
    }),
    eV = (0, N.fF)(S, el),
    eK = (0, N.ZD)(S),
    eW = (0, u.bG)([p.A], () => p.A.getMessage(q), [q]),
    ez = (0, M.A)({
      message: S,
      channel: Q
    }),
    eY = r.useRef(window),
    eq = null != eW;
  s = S.type === W.lAJ.CUSTOM_GIFT ? "" : !ej && eq ? (0, k.A)(e, eM) : (0, F.A)(e, eM, ej);
  let eJ = S.id === el,
    eZ = (0, l.jsx)(d.vN3, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, l.jsx)("li", {
        id: b,
        className: Y.Nt,
        "aria-setsize": false,
        children: (0, l.jsx)(T.A, Z(J({}, eo), {
          "aria-setsize": false,
          "aria-roledescription": z.intl.string(z.t.BAB0yK),
          "aria-labelledby": eV,
          "aria-describedby": eK,
          onFocus: eS,
          onBlur: ex,
          onContextMenu: em,
          onKeyDown: eU,
          onClick: eg,
          compact: ee,
          contentOnly: er,
          className: a()(et, {
            [Y.iU]: true,
            [Y.HJ]: !ee,
            [Y.mK]: S.mentioned,
            [Y.M1]: (0, C.ec)(S),
            [Y.SH]: S.type === W.lAJ.NITRO_NOTIFICATION,
            [Y.H4]: (0, x.A)(S),
            [Y._A]: !er && (eJ || S.type === W.lAJ.REPLY),
            [Y.wH]: eT,
            [Y.$n]: (null == eF ? true : eF.message.id) === S.id,
            [Y.$w]: S.isCommandType() && S.state === W.cmJ.SENDING,
            [Y.DX]: eq
          }),
          zalgo: !ej,
          childrenRepliedMessage: er || S.type !== W.lAJ.REPLY ? true : (0, B.A)(Z(J({}, e), {
            setPopout: ef,
            referencedUsernameProfile: eh.referencedUsernameProfile,
            referencedAvatarProfile: eh.referencedAvatarProfile,
            replyReference: ei,
            replyMessage: ed,
            isReplySpineClickable: true
          })),
          childrenExecutedCommand: (0, H.A)(e, ef, eh),
          childrenHeader: er ? true : (0, G.A)({
            messageProps: e,
            setPopout: ef,
            messagePopouts: eh,
            replyReference: ei,
            author: eG,
            repliedMessage: ed,
            roleIcon: eB
          }),
          childrenAccessories: (0, L.A)({
            channelMessageProps: e,
            hasSpoilerEmbeds: eL,
            hasBailedAst: ek,
            handleContextMenu: em,
            isInteracting: eN,
            isAutomodBlockedMessage: eq,
            forceAddReactions: S.type === W.lAJ.EMOJI_ADDED
          }),
          childrenButtons: e_ || ev ? (0, U.A)({
            buttonProps: e,
            setPopout: ef,
            messagePopouts: eh,
            isFocused: ey || eE,
            messageWindow: eY.current
          }) : true,
          childrenSystemMessage: (0, V.A)(e),
          childrenMessageContent: s,
          onMouseMove: eA,
          onMouseLeave: eb,
          hasThread: !er && S.hasFlag(W.pr7.HAS_THREAD) && null != eP,
          isSystemMessage: (0, x.A)(S),
          hasReply: S.type === W.lAJ.REPLY,
          messageRef: e => {
            var t, n;
            ez.current = e, eY.current = null != (t = null == e || null == (n = e.ownerDocument) ? true : n.defaultView) ? t : window
          },
          author: eG
        }))
      })
    });
  return null != eH ? (0, l.jsx)(I.A, {
    flashKey: eH,
    className: a()({
      [Y.bB]: true,
      [Y._A]: !ee && S.id === el
    }),
    children: eZ
  }, "bg-flash-".concat(b)) : eZ
})