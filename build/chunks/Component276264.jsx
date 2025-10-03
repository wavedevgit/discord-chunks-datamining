/** Chunk was on web.js **/
/** chunk id: 276264, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => X,
  x: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk553393 = require("./553393.jsx"),
  Chunk518950 = require("./518950.js"),
  Chunk624138 = require("./624138.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js"),
  Chunk524484 = require("./524484.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk894723 = require("./894723.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function k(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e, t) {
  if (null == e) return {};
  var n, r, i = B(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function B(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let Z = (0, Chunk624138.Mg)(Chunk477690.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
  F = 3,
  V = Chunk647438.memo(function(e) {
    let {
      isOwner: t,
      lostPermissionTooltipText: n,
      ownerTooltipText: i
    } = e;
    return null != t && t && null == n ? (0, r.jsx)(s.u, {
      __unsupportedReactNodeAsText: null != i ? i : L.intl.string(L.t.pclUFB),
      children: (0, r.jsx)(c.CEn, {
        size: "md",
        color: "currentColor",
        className: x.ownerIcon
      })
    }) : null
  }),
  H = Chunk647438.memo(function(e) {
    let {
      premiumSince: t,
      onClickPremiumGuildIcon: n
    } = e;
    return null == t ? null : (0, r.jsx)(s.u, {
      text: L.intl.formatToPlainString(L.t.IWkAq6, {
        date: t
      }),
      asContainer: true,
      children: (0, r.jsx)(c.P3F, {
        onClick: n,
        tabIndex: false,
        children: (0, r.jsx)(c.$Eu, {
          color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
          className: x.premiumIcon
        })
      })
    })
  }),
  Y = Chunk647438.memo(function(e) {
    let {
      user: t
    } = e;
    if (null == t || !t.bot) return null;
    let n = w.Hb.BOT;
    return (0, r.jsx)(h.Z, {
      className: x.botTag,
      type: n,
      verified: t.isVerifiedBot()
    })
  }),
  W = Chunk647438.memo(function(e) {
    let {
      user: t,
      isOwner: n,
      lostPermissionTooltipText: i,
      ownerTooltipText: a,
      premiumSince: o,
      onClickPremiumGuildIcon: s
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(Y, {
        user: t
      }), (0, r.jsx)(V, {
        isOwner: n,
        lostPermissionTooltipText: i,
        ownerTooltipText: a
      }), (0, r.jsx)(H, {
        premiumSince: o,
        onClickPremiumGuildIcon: s
      })]
    })
  }),
  K = Chunk647438.memo(function(e) {
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
        className: x.name,
        displayNameStylesFont: d,
        animateRoleGradient: u
      }), !o && (0, r.jsx)(v.ZP, {
        primaryGuild: null == s ? true : s.primaryGuild,
        userId: null == s ? true : s.id,
        contextGuildId: l,
        disableGuildProfile: true,
        className: x.clanTag
      })]
    })
  }),
  z = Chunk647438.memo(function(e) {
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
    } = e, m = a === P.Skl.OFFLINE, g = n ? c.Xo$ : c.qEK, E = (0, u.Z)(i) ? P.Skl.STREAMING : a;
    return E = m ? true : E, (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g, U(j({}, o), {
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
        confettiLocation: D.Hn.MEMBER_USER
      })]
    })
  }),
  q = Chunk647438.memo(function(e) {
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
        return t === P.IIU.CUSTOM_STATUS
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
  X = Chunk647438.memo(function(e) {
    let {
      selected: t = false,
      colorString: n,
      colorStrings: a,
      colorRoleName: l,
      isOwner: u,
      ownerTooltipText: f,
      lostPermissionTooltipText: p,
      isTyping: h = false,
      nick: E,
      user: b,
      currentUser: y,
      activities: O,
      applicationStream: v,
      status: I,
      shouldAnimateStatus: N = false,
      isMobile: w,
      premiumSince: D,
      channel: L,
      guildId: M,
      className: k,
      nameplate: B,
      hideClanTag: Z = false,
      hideSubtext: V = false,
      hideTooltip: H = false,
      onMouseDown: Y,
      onKeyDown: X,
      onClick: Q,
      onContextMenu: J,
      onClickPremiumGuildIcon: $,
      "aria-controls": ee,
      "aria-expanded": et,
      "aria-posinset": en,
      "aria-setsize": er,
      id: ei,
      tabIndex: ea,
      itemProps: eo,
      ref: es
    } = e, el = null == b ? true : b.id, ec = R.ZP.useName(b), eu = i.useRef(null), ed = null != es ? es : eu, [ef, e_] = i.useState(false), [ep, eh] = i.useState(false), [em, eg] = i.useState(null), {
      voiceChannel: eE
    } = (0, _.Z)({
      userId: el,
      guildId: M
    }), {
      voiceActivityStatusEnabled: eb
    } = (0, d.U)({
      location: "MemberListItem"
    }), ey = eb ? eE : true, {
      avatarDecorationSrc: eO,
      avatarSrc: ev,
      eventHandlers: eI
    } = (0, C.Z)({
      userId: el,
      size: c.EFr.SIZE_32,
      animateOnHover: !(t || ef),
      guildId: M
    }), eT = null != eo ? eo : {}, {
      onFocus: eS
    } = eT, eA = G(eT, ["onFocus"]), eC = (0, T.X7)(M, el, null != a ? a : null), [eN, eR] = i.useState(false);
    i.useEffect(() => {
      t && eR(false)
    }, [t]);
    let eP = (0, S.fN)(O),
      ew = (0, S.Wi)(eP, v, el) && t && !eN,
      eD = i.useCallback(() => {
        e_(true)
      }, []),
      eL = i.useCallback(() => {
        e_(false)
      }, []),
      ex = i.useCallback(() => {
        eh(true), null == eS || eS()
      }, [eS]),
      eM = i.useCallback(() => {
        eh(false)
      }, []),
      ej = i.useCallback(e => {
        eg(e)
      }, []),
      ek = i.useCallback(e => null == eP ? null : (0, r.jsx)(A.Z, U(j({
        name: null != E ? E : ec,
        quest: eP,
        memberListItemRef: ed,
        applicationStream: v
      }, e), {
        closePopout: () => eR(true)
      })), [eP, ed, v, E, ec]);
    return null == b ? (0, r.jsx)(m.Z, {
      avatarSize: c.EFr.SIZE_32,
      className: x.placeholder
    }) : (0, r.jsx)(c.yRy, {
      targetElementRef: ed,
      renderPopout: ek,
      position: "bottom",
      shouldShow: ew,
      nudgeAlignIntoViewport: false,
      useRawTargetDimensions: true,
      animation: c.yRy.Animation.NONE,
      spacing: -F,
      children: () => (0, r.jsx)(g.Z, j({
        ref: ed,
        selected: t,
        className: o()(x.member, k, {
          [x.offline]: I === P.Skl.OFFLINE && !t,
          [x.flatBottom]: ew
        }),
        innerClassName: x.memberInner,
        onClick: Q,
        onKeyDown: X,
        onMouseDown: Y,
        onContextMenu: J,
        onMouseEnter: eD,
        onMouseLeave: eL,
        onBlur: eM,
        hovered: ef,
        name: null == p ? (0, r.jsx)("span", {
          className: x.username,
          children: (0, r.jsx)(K, {
            colorRoleName: l,
            colorString: null != n ? n : null,
            name: null != E ? E : ec,
            colorStrings: eC,
            hideClanTag: Z,
            user: b,
            guildId: M,
            isHovering: ef
          })
        }) : (0, r.jsx)(s.u, {
          text: p,
          children: (0, r.jsx)("span", {
            className: o()(x.username, x.lostPermission),
            children: (0, r.jsx)(K, {
              colorRoleName: l,
              colorString: null != n ? n : null,
              name: null != E ? E : ec,
              colorStrings: eC,
              hideClanTag: Z,
              user: b,
              guildId: M,
              isHovering: ef
            })
          })
        }),
        avatar: (0, r.jsx)(z, {
          user: b,
          shouldAnimateStatus: N,
          activities: O,
          status: I,
          eventHandlers: eI,
          avatarSrc: ev,
          isMobile: w,
          isTyping: h,
          avatarDecorationSrc: eO,
          handleSetTypingRef: ej,
          typingRef: em,
          currentUser: y
        }),
        nameplate: B,
        subText: (0, r.jsx)(q, {
          hideSubtext: V,
          activities: O,
          status: I,
          applicationStream: v,
          voiceStatusChannel: ey,
          user: b,
          channel: L,
          isHoveringOrFocusing: ef || ep,
          quest: eP,
          hideTooltip: H
        }),
        decorators: (0, r.jsx)(W, {
          user: b,
          isOwner: u,
          lostPermissionTooltipText: p,
          ownerTooltipText: f,
          premiumSince: D,
          onClickPremiumGuildIcon: $
        }),
        "aria-controls": ee,
        "aria-expanded": et,
        "aria-setsize": er,
        "aria-posinset": en,
        id: ei,
        tabIndex: ea,
        onFocus: ex,
        focusProps: {
          offset: {
            top: 4,
            bottom: 4,
            left: 4,
            right: 4
          }
        }
      }, eA))
    })
  })