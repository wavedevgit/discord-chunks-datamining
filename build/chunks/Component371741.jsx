/** Chunk was on 41727 **/
/** chunk id: 371741, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Av: () => Z,
  Ay: () => et,
  VO: () => $
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function X(e) {
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

function J(e, t) {
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
  var n, r, l, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.getOwnPropertyNames(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  return i
}

function Z(e, t, n) {
  return e.getElementById((0, E.j)(t, n))
}

function $(e) {
  var t;
  let {
    id: n,
    message: l,
    message: {
      messageReference: i
    },
    compact: a = false,
    className: d
  } = e;
  o()(l.type === W.lAJ.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
  let p = (0, c.rm)(null != (t = e.id) ? t : ""),
    {} = p,
    h = q({}, p),
    f = (0, u.bG)([b.A], () => b.A.getMessageByReference(i)),
    {
      popouts: g,
      setPopout: m
    } = (0, R.A)(l.id, K.Fd),
    A = (0, S.Ay)(l),
    y = (0, T.fF)(l),
    _ = (0, T.ZD)(l);
  return l.type === W.lAJ.THREAD_STARTER_MESSAGE && null != f && f.state === b.a.LOADED ? (0, r.jsx)(ee, J(X({}, e), {
    viewingChannelId: l.channel_id,
    message: f.message,
    groupId: f.message.id
  })) : (0, r.jsx)(N.A, J(X({}, h), {
    id: n,
    compact: a,
    className: s()(d, {
      [Y.iU]: true,
      [Y.HJ]: !a,
      [Y.H4]: true,
      [Y._A]: true
    }),
    childrenHeader: (0, U.A)({
      messageProps: e,
      setPopout: m,
      messagePopouts: g,
      replyReference: i,
      author: A
    }),
    childrenSystemMessage: (0, H.A)(e),
    childrenMessageContent: null,
    "aria-labelledby": y,
    "aria-describedby": _,
    hasThread: false,
    author: A
  }))
}

function ee(e) {
  var t, n;
  let {
    id: i,
    message: a,
    message: {
      id: o,
      channel_id: h
    },
    channel: {
      guild_id: m
    },
    compact: _ = false,
    className: j,
    groupId: v,
    viewingChannelId: E
  } = e, I = a.type === W.lAJ.REPLY ? a.messageReference : true, M = (0, c.rm)(null != (t = e.id) ? t : ""), {
    onFocus: k
  } = M, G = Q(M, ["onFocus"]), {
    isFocused: V,
    handleFocus: q,
    handleBlur: Z
  } = (0, P.G8)(k), {
    popouts: $,
    selected: ee,
    setPopout: et
  } = (0, R.A)(a.id, K.Fd), en = y.hD.useSetting(), er = y.rs.useSetting(), el = (0, u.bG)([b.A], () => b.A.getMessageByReference(I)), ei = (0, g.S)((null != (n = a.editedTimestamp) ? n : a.timestamp).valueOf()), {
    handleMouseEnter: es,
    handleMouseLeave: ea,
    isHovered: eo
  } = (0, P.yp)({
    groupId: v,
    message: a,
    defaultValue: ee
  }), ec = (0, u.bG)([p.A], () => p.A.keyboardModeEnabled), eu = ee || ec && V, ed = eu || eo, ep = (0, u.bG)([O.A], () => O.A.isDeveloper), {
    content: eh,
    hasSpoilerEmbeds: ef,
    hasBailedAst: eg
  } = (0, D.A)(a, {
    hideSimpleEmbedContent: en && er,
    isInteracting: ed,
    formatInline: false,
    allowList: ei,
    allowHeading: ei,
    allowLinks: true,
    allowDevLinks: ep,
    previewLinkTarget: true,
    viewingChannelId: E
  }), em = (0, w.A)(o, h, ec), eb = (0, S.Ay)(a), eA = (0, T.fF)(a, v), ey = (0, T.ZD)(a), e_ = (0, B.A)(e, eh, false), eO = l.useCallback(() => (0, A.uh)(m, h, o), [m, h, o]), ej = (0, f.$7)({
    guildId: m,
    roleId: eb.iconRoleId
  });
  return (0, r.jsxs)("div", {
    className: Y.m5,
    children: [(0, r.jsx)(d.DUT, {
      className: Y.lA,
      onClick: eO,
      "aria-label": z.intl.string(z.t.k5WiPf),
      children: z.intl.string(z.t.k5WiPf)
    }), (0, r.jsx)(N.A, J(X({}, G), {
      id: i,
      compact: _,
      className: s()(j, {
        [Y.iU]: true,
        [Y.HJ]: !_,
        [Y.mK]: a.mentioned,
        [Y.M1]: (0, x.ec)(a),
        [Y.H4]: (0, C.A)(a),
        [Y._A]: a.id === v || a.type === W.lAJ.REPLY,
        [Y.wH]: eu
      }),
      zalgo: true,
      onKeyDown: em,
      onFocus: q,
      onBlur: Z,
      childrenRepliedMessage: a.type === W.lAJ.REPLY && (0, F.A)(J(X({}, e), {
        setPopout: et,
        referencedUsernameProfile: $.referencedUsernameProfile,
        referencedAvatarProfile: $.referencedAvatarProfile,
        replyReference: I,
        replyMessage: el,
        isReplySpineClickable: true
      })),
      childrenHeader: (0, U.A)({
        messageProps: e,
        setPopout: et,
        messagePopouts: $,
        replyReference: I,
        author: eb,
        repliedMessage: el,
        roleIcon: ej
      }),
      childrenAccessories: (0, L.A)({
        channelMessageProps: e,
        hasSpoilerEmbeds: ef,
        hasBailedAst: eg,
        isInteracting: ed,
        renderThreadAccessory: false,
        renderSuppressEmbeds: false,
        renderReactions: false,
        disableComponentInteractivity: true
      }),
      childrenSystemMessage: (0, H.A)(e),
      childrenMessageContent: e_,
      onMouseMove: es,
      onMouseLeave: ea,
      "aria-labelledby": eA,
      "aria-describedby": ey,
      hasThread: false,
      author: eb
    }))]
  })
}
let et = Chunk64700.memo(function(e) {
  var t, n;
  let i, a, {
    id: A,
    message: E,
    message: {
      id: q
    },
    channel: Z,
    channel: {
      id: $
    },
    compact: ee = false,
    className: et,
    flashKey: en,
    groupId: er,
    renderContentOnly: el
  } = e;
  o()(E.type !== W.lAJ.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
  let ei = W.sl8.has(E.type) ? E.messageReference : true,
    es = (0, c.rm)(null != (t = e.id) ? t : ""),
    {
      onFocus: ea
    } = es,
    eo = Q(es, ["onFocus"]),
    ec = y.hD.useSetting(),
    eu = y.rs.useSetting(),
    ed = (0, u.bG)([b.A], () => b.A.getMessageByReference(ei)),
    {
      popouts: ep,
      selected: eh,
      setPopout: ef
    } = (0, R.A)(E.id, K.Fd),
    eg = (0, P.VL)(E, Z, ef),
    em = (0, P.ri)(E, Z),
    {
      handleMouseEnter: eb,
      handleMouseLeave: eA,
      hasHovered: ey,
      isHovered: e_
    } = (0, P.yp)({
      groupId: er,
      message: E,
      defaultValue: eh
    }),
    {
      isFocused: eO,
      hasFocused: ej,
      handleFocus: ev,
      handleBlur: ex
    } = (0, P.G8)(ea),
    eE = l.useCallback(e => {
      ev(e), eb(e)
    }, [ev, eb]),
    eC = l.useCallback(e => {
      ex(e), eA()
    }, [ex, eA]),
    eS = (0, u.bG)([j.A], () => j.A.isEditing($, q), [$, q]),
    eI = (0, u.bG)([p.A], () => p.A.keyboardModeEnabled),
    eN = eh || eS || eI && eO,
    eT = eN || e_,
    eP = (0, u.bG)([_.A], () => E.hasFlag(W.pr7.HAS_THREAD) && _.A.getChannel(v.default.castMessageIdAsChannelId(E.id))),
    ew = E.isFirstMessageInForumPost(Z),
    eR = (0, g.S)((null != (n = E.editedTimestamp) ? n : E.timestamp).valueOf()),
    eD = (0, u.bG)([O.A], () => O.A.isDeveloper),
    {
      content: eM,
      hasSpoilerEmbeds: eL,
      hasBailedAst: ek
    } = (0, D.A)(E, {
      hideSimpleEmbedContent: ec && eu,
      isInteracting: eT,
      formatInline: false,
      allowList: ew || eR,
      allowHeading: ew || eR,
      allowLinks: true,
      allowDevLinks: eD,
      previewLinkTarget: true
    }),
    eG = (0, w.A)(q, $, eI),
    eU = (0, S.Ay)(E),
    eB = (0, u.bG)([m.A], () => m.A.getPendingReply($)),
    eV = (i = l.useRef(en), l.useEffect(() => {
      i.current = null != en ? en : i.current
    }), null != en ? en : i.current),
    eF = (0, f.$7)({
      guildId: Z.guild_id,
      roleId: eU.iconRoleId
    }),
    eH = (0, T.fF)(E, er),
    eK = (0, T.ZD)(E),
    eW = (0, u.bG)([h.A], () => h.A.getMessage(q), [q]),
    ez = (0, M.A)({
      message: E,
      channel: Z
    }),
    eY = l.useRef(window),
    eq = null != eW;
  a = E.type === W.lAJ.CUSTOM_GIFT ? "" : !eS && eq ? (0, k.A)(e, eM) : (0, B.A)(e, eM, eS);
  let eX = E.id === er,
    eJ = (0, r.jsx)(d.vN3, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, r.jsx)("li", {
        id: A,
        className: Y.Nt,
        "aria-setsize": false,
        children: (0, r.jsx)(N.A, J(X({}, eo), {
          "aria-setsize": false,
          "aria-roledescription": z.intl.string(z.t.BAB0yK),
          "aria-labelledby": eH,
          "aria-describedby": eK,
          onFocus: eE,
          onBlur: eC,
          onContextMenu: eg,
          onKeyDown: eG,
          onClick: em,
          compact: ee,
          contentOnly: el,
          className: s()(et, {
            [Y.iU]: true,
            [Y.HJ]: !ee,
            [Y.mK]: E.mentioned,
            [Y.M1]: (0, x.ec)(E),
            [Y.SH]: E.type === W.lAJ.NITRO_NOTIFICATION,
            [Y.H4]: (0, C.A)(E),
            [Y._A]: !el && (eX || E.type === W.lAJ.REPLY),
            [Y.wH]: eN,
            [Y.$n]: (null == eB ? true : eB.message.id) === E.id,
            [Y.$w]: E.isCommandType() && E.state === W.cmJ.SENDING,
            [Y.DX]: eq
          }),
          zalgo: !eS,
          childrenRepliedMessage: el || E.type !== W.lAJ.REPLY ? true : (0, F.A)(J(X({}, e), {
            setPopout: ef,
            referencedUsernameProfile: ep.referencedUsernameProfile,
            referencedAvatarProfile: ep.referencedAvatarProfile,
            replyReference: ei,
            replyMessage: ed,
            isReplySpineClickable: true
          })),
          childrenExecutedCommand: (0, V.A)(e, ef, ep),
          childrenHeader: el ? true : (0, U.A)({
            messageProps: e,
            setPopout: ef,
            messagePopouts: ep,
            replyReference: ei,
            author: eU,
            repliedMessage: ed,
            roleIcon: eF
          }),
          childrenAccessories: (0, L.A)({
            channelMessageProps: e,
            hasSpoilerEmbeds: eL,
            hasBailedAst: ek,
            handleContextMenu: eg,
            isInteracting: eT,
            isAutomodBlockedMessage: eq,
            forceAddReactions: E.type === W.lAJ.EMOJI_ADDED
          }),
          childrenButtons: ey || ej ? (0, G.A)({
            buttonProps: e,
            setPopout: ef,
            messagePopouts: ep,
            isFocused: e_ || eO,
            messageWindow: eY.current
          }) : true,
          childrenSystemMessage: (0, H.A)(e),
          childrenMessageContent: a,
          onMouseMove: eb,
          onMouseLeave: eA,
          hasThread: !el && E.hasFlag(W.pr7.HAS_THREAD) && null != eP,
          isSystemMessage: (0, C.A)(E),
          hasReply: E.type === W.lAJ.REPLY,
          messageRef: e => {
            var t, n;
            ez.current = e, eY.current = null != (t = null == e || null == (n = e.ownerDocument) ? true : n.defaultView) ? t : window
          },
          author: eU
        }))
      })
    });
  return null != eV ? (0, r.jsx)(I.A, {
    flashKey: eV,
    className: s()({
      [Y.bB]: true,
      [Y._A]: !ee && E.id === er
    }),
    children: eJ
  }, "bg-flash-".concat(A)) : eJ
})