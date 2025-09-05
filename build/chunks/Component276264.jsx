/** Chunk was on web.js **/
/** chunk id: 276264, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => J,
  x: () => V
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk420660 = require("./420660.js"),
  Chunk468363 = require("./468363.js"),
  Chunk326255 = require("./326255.js"),
  Chunk956221 = require("./956221.js"),
  Chunk771173 = require("./771173.jsx"),
  Chunk385499 = require("./385499.jsx"),
  Chunk693728 = require("./693728.jsx"),
  Chunk554300 = require("./554300.jsx"),
  Chunk558602 = require("./558602.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk7284 = require("./7284.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk736144 = require("./736144.jsx"),
  Chunk884902 = require("./884902.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk553393 = require("./553393.jsx"),
  Chunk518950 = require("./518950.js"),
  Chunk594174 = require("./594174.js"),
  Chunk624138 = require("./624138.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js"),
  Chunk524484 = require("./524484.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk325804 = require("./325804.js");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e, t) {
  if (null == e) return {};
  var n, r, i = F(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function F(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let V = (0, Chunk624138.Mg)(Chunk477690.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
  H = 3,
  Y = Chunk647438.memo(function(e) {
    let {
      isOwner: t,
      lostPermissionTooltipText: n,
      ownerTooltipText: i
    } = e;
    return null != t && t && null == n ? (0, r.jsx)(c.ua7, {
      text: null != i ? i : j.intl.string(j.t.pclUFB),
      children: e => (0, r.jsx)(c.CEn, B(U({
        size: "md",
        color: "currentColor"
      }, e), {
        className: M.ownerIcon
      }))
    }) : null
  }),
  W = Chunk647438.memo(function(e) {
    let {
      premiumSince: t,
      onClickPremiumGuildIcon: n
    } = e;
    return null == t ? null : (0, r.jsx)(c.ua7, {
      text: j.intl.formatToPlainString(j.t.IWkAq6, {
        date: t
      }),
      children: e => (0, r.jsx)(c.P3F, {
        onClick: n,
        tabIndex: false,
        children: (0, r.jsx)(c.$Eu, B(U({}, e), {
          color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
          className: M.premiumIcon
        }))
      })
    })
  }),
  K = Chunk647438.memo(function(e) {
    let {
      user: t
    } = e;
    if (null == t || !t.bot) return null;
    let n = x.Hb.BOT;
    return (0, r.jsx)(h.Z, {
      className: M.botTag,
      type: n,
      verified: t.isVerifiedBot()
    })
  }),
  z = Chunk647438.memo(function(e) {
    let {
      user: t,
      isOwner: n,
      lostPermissionTooltipText: i,
      ownerTooltipText: a,
      premiumSince: o,
      onClickPremiumGuildIcon: s
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(K, {
        user: t
      }), (0, r.jsx)(Y, {
        isOwner: n,
        lostPermissionTooltipText: i,
        ownerTooltipText: a
      }), (0, r.jsx)(W, {
        premiumSince: o,
        onClickPremiumGuildIcon: s
      })]
    })
  }),
  q = Chunk647438.memo(function(e) {
    let {
      colorRoleName: t,
      colorString: n,
      colorStrings: i,
      name: a,
      hideClanTag: o,
      user: s,
      guildId: l,
      isHovering: u
    } = e, d = (0, O.j)({
      displayNameStyles: null == s ? true : s.displayNameStyles
    }), f = null == l && (null == s ? true : s.displayNameStyles) != null;
    return (0, r.jsxs)(r.Fragment, {
      children: [f ? (0, r.jsx)(y.Z, {
        userName: null != a ? a : "",
        displayNameStyles: s.displayNameStyles,
        effectDisplayType: u ? b.F.ANIMATED : b.F.STATIC,
        loop: true
      }) : (0, r.jsx)(c.PUh, {
        roleName: t,
        colorString: n,
        colorStrings: i,
        name: a,
        className: M.name,
        displayNameStylesFont: d,
        animateRoleGradient: u
      }), !o && (0, r.jsx)(v.ZP, {
        primaryGuild: null == s ? true : s.primaryGuild,
        userId: null == s ? true : s.id,
        contextGuildId: l,
        disableGuildProfile: true,
        className: M.clanTag
      })]
    })
  }),
  X = Chunk647438.memo(function(e) {
    let {
      user: t,
      shouldAnimateStatus: n,
      activities: i,
      status: a,
      eventHandlers: o,
      avatarSrc: s,
      isMobile: l,
      isTyping: d,
      avatarDecorationSrc: f,
      handleSetTypingRef: _,
      typingRef: p,
      currentUser: h
    } = e, m = a === D.Skl.OFFLINE, g = n ? c.Xo$ : c.qEK, E = (0, u.Z)(i) ? D.Skl.STREAMING : a;
    return E = m ? true : E, (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g, B(U({}, o), {
        size: c.EFr.SIZE_32,
        src: s,
        isMobile: l,
        isTyping: d,
        status: E,
        "aria-label": t.username,
        statusTooltip: true,
        avatarDecoration: f,
        typingIndicatorRef: _
      })), (0, r.jsx)(I.Z, {
        confettiSpawnRef: p,
        shouldFire: d && null != h && t.id !== h.id,
        confettiLocation: L.Hn.MEMBER_USER
      })]
    })
  }),
  Q = Chunk647438.memo(function(e) {
    let {
      hideSubtext: t,
      hideTooltip: n = false,
      activities: a,
      status: o,
      applicationStream: s,
      voiceStatusChannel: l,
      user: c,
      channel: u,
      isHoveringOrFocusing: d,
      quest: _
    } = e, h = i.useMemo(() => (0, f.Z)({
      activities: a,
      status: o,
      applicationStream: s,
      voiceChannel: l
    }), [a, o, s, l]), m = i.useMemo(() => !(0, E.Z)({
      activity: null == a ? true : a.find(e => {
        let {
          type: t
        } = e;
        return t === D.IIU.CUSTOM_STATUS
      }),
      user: c,
      channel: u
    }), [a, c, u]);
    return t || !h ? null : (0, r.jsx)(p.Z, {
      location: "MemberListSubtext",
      user: c,
      activities: a,
      applicationStream: s,
      voiceChannel: l,
      animateEmoji: d,
      hideEmoji: m,
      hasQuest: null != _,
      hideTooltip: n
    })
  }),
  J = Chunk647438.memo(function(e) {
    var t;
    let {
      selected: n = false,
      colorString: a,
      colorStrings: l,
      colorRoleName: u,
      isOwner: f,
      ownerTooltipText: p,
      lostPermissionTooltipText: h,
      isTyping: E = false,
      nick: b,
      user: y,
      currentUser: O,
      activities: v,
      applicationStream: I,
      status: P,
      shouldAnimateStatus: x = false,
      isMobile: L,
      premiumSince: j,
      channel: k,
      guildId: G,
      className: F,
      nameplate: V,
      hideClanTag: Y = false,
      hideSubtext: W = false,
      hideTooltip: K = false,
      onMouseDown: J,
      onKeyDown: $,
      onClick: ee,
      onContextMenu: et,
      onClickPremiumGuildIcon: en,
      "aria-controls": er,
      "aria-expanded": ei,
      "aria-posinset": ea,
      "aria-setsize": eo,
      id: es,
      tabIndex: el,
      itemProps: ec,
      ref: eu
    } = e, ed = null == y ? true : y.id, ef = w.ZP.useName(y), e_ = (null == (t = R.default.getCurrentUser()) ? true : t.id) === ed, ep = i.useRef(null), eh = null != eu ? eu : ep, [em, eg] = i.useState(false), [eE, eb] = i.useState(false), [ey, eO] = i.useState(null), {
      voiceChannel: ev
    } = (0, _.Z)({
      userId: ed,
      guildId: G
    }), {
      voiceActivityStatusEnabled: eI
    } = (0, d.U)({
      location: "MemberListItem"
    }), eT = eI ? ev : true, {
      avatarDecorationSrc: eS,
      avatarSrc: eA,
      eventHandlers: eC
    } = (0, N.Z)({
      userId: ed,
      size: c.EFr.SIZE_32,
      animateOnHover: !(n || em),
      guildId: G
    }), eN = null != ec ? ec : {}, {
      onFocus: eR
    } = eN, eP = Z(eN, ["onFocus"]), ew = (0, T.X7)(G, ed, null != l ? l : null), eD = (0, s.e7)([A.Z], () => null != A.Z.questEnrollmentBlockedUntil, []), [ex, eL] = i.useState(false);
    i.useEffect(() => {
      n && eL(false)
    }, [n]);
    let ej = (0, S.fN)(v),
      eM = null != ej && !e_ && n && !ex,
      ek = i.useCallback(() => {
        eg(true)
      }, []),
      eU = i.useCallback(() => {
        eg(false)
      }, []),
      eG = i.useCallback(() => {
        eb(true), null == eR || eR()
      }, [eR]),
      eB = i.useCallback(() => {
        eb(false)
      }, []),
      eZ = i.useCallback(e => {
        eO(e)
      }, []),
      eF = i.useCallback(e => (0, r.jsx)(C.Z, B(U({
        name: null != b ? b : ef,
        quest: ej,
        memberListItemRef: eh,
        applicationStream: I,
        isQuestEnrollmentBlocked: eD
      }, e), {
        closePopout: () => eL(true)
      })), [ej, eh, I, eD, b, ef]);
    return null == y ? (0, r.jsx)(m.Z, {
      avatarSize: c.EFr.SIZE_32,
      className: M.placeholder
    }) : (0, r.jsx)(c.yRy, {
      targetElementRef: eh,
      renderPopout: eF,
      position: "bottom",
      shouldShow: eM,
      nudgeAlignIntoViewport: false,
      useRawTargetDimensions: true,
      animation: c.yRy.Animation.NONE,
      spacing: -H,
      children: () => (0, r.jsx)(g.Z, U({
        ref: eh,
        selected: n,
        className: o()(M.member, F, {
          [M.offline]: P === D.Skl.OFFLINE && !n,
          [M.flatBottom]: eM
        }),
        innerClassName: M.memberInner,
        onClick: ee,
        onKeyDown: $,
        onMouseDown: J,
        onContextMenu: et,
        onMouseEnter: ek,
        onMouseLeave: eU,
        onBlur: eB,
        hovered: em,
        name: null == h ? (0, r.jsx)("span", {
          className: M.username,
          children: (0, r.jsx)(q, {
            colorRoleName: u,
            colorString: null != a ? a : null,
            name: null != b ? b : ef,
            colorStrings: ew,
            hideClanTag: Y,
            user: y,
            guildId: G,
            isHovering: em
          })
        }) : (0, r.jsx)(c.ua7, {
          text: h,
          children: e => (0, r.jsx)("span", B(U({}, e), {
            className: o()(M.username, M.lostPermission),
            children: (0, r.jsx)(q, {
              colorRoleName: u,
              colorString: null != a ? a : null,
              name: null != b ? b : ef,
              colorStrings: ew,
              hideClanTag: Y,
              user: y,
              guildId: G,
              isHovering: em
            })
          }))
        }),
        avatar: (0, r.jsx)(X, {
          user: y,
          shouldAnimateStatus: x,
          activities: v,
          status: P,
          eventHandlers: eC,
          avatarSrc: eA,
          isMobile: L,
          isTyping: E,
          avatarDecorationSrc: eS,
          handleSetTypingRef: eZ,
          typingRef: ey,
          currentUser: O
        }),
        nameplate: V,
        subText: (0, r.jsx)(Q, {
          hideSubtext: W,
          activities: v,
          status: P,
          applicationStream: I,
          voiceStatusChannel: eT,
          user: y,
          channel: k,
          isHoveringOrFocusing: em || eE,
          quest: ej,
          hideTooltip: K
        }),
        decorators: (0, r.jsx)(z, {
          user: y,
          isOwner: f,
          lostPermissionTooltipText: h,
          ownerTooltipText: p,
          premiumSince: j,
          onClickPremiumGuildIcon: en
        }),
        "aria-controls": er,
        "aria-expanded": ei,
        "aria-setsize": eo,
        "aria-posinset": ea,
        id: es,
        tabIndex: el,
        onFocus: eG,
        focusProps: {
          offset: {
            top: 4,
            bottom: 4,
            left: 4,
            right: 4
          }
        }
      }, eP))
    })
  })