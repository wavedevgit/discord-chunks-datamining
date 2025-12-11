/** Chunk was on web.js **/
/** chunk id: 276264, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => X,
  x: () => F
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk386725 = require("./386725.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk7284 = require("./7284.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk736144 = require("./736144.jsx"),
  Chunk884902 = require("./884902.js"),
  Chunk968843 = require("./968843.js"),
  Chunk664385 = require("./664385.jsx"),
  Chunk518950 = require("./518950.js"),
  Chunk624138 = require("./624138.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js"),
  Chunk524484 = require("./524484.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk619514 = require("./619514.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
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

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e, t) {
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
let F = (0, Chunk624138.Mg)(Chunk477690.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
  V = 3,
  H = Chunk473749.memo(function(e) {
    let {
      isOwner: t,
      lostPermissionTooltipText: n,
      ownerTooltipText: i
    } = e;
    return null != t && t && null == n ? (0, r.jsx)(s.u, {
      __unsupportedReactNodeAsText: null != i ? i : L.intl.string(L.t.pclUFJ),
      children: (0, r.jsx)(c.CEn, {
        size: "md",
        color: "currentColor",
        className: j.ownerIcon
      })
    }) : null
  }),
  Y = Chunk473749.memo(function(e) {
    let {
      premiumSince: t,
      onClickPremiumGuildIcon: n
    } = e;
    return null == t ? null : (0, r.jsx)(s.u, {
      text: L.intl.formatToPlainString(L.t.IWkAq7, {
        date: t
      }),
      asContainer: true,
      children: (0, r.jsx)(c.P3F, {
        onClick: n,
        tabIndex: false,
        children: (0, r.jsx)(c.Ucv, {
          color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
          className: j.premiumIcon
        })
      })
    })
  }),
  W = Chunk473749.memo(function(e) {
    let {
      user: t
    } = e;
    if (null == t || !t.bot) return null;
    let n = D.Hb.BOT;
    return (0, r.jsx)(m.Z, {
      className: j.botTag,
      type: n,
      verified: t.isVerifiedBot()
    })
  }),
  K = Chunk473749.memo(function(e) {
    let {
      user: t,
      isOwner: n,
      lostPermissionTooltipText: i,
      ownerTooltipText: a,
      premiumSince: o,
      onClickPremiumGuildIcon: s
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(W, {
        user: t
      }), (0, r.jsx)(H, {
        isOwner: n,
        lostPermissionTooltipText: i,
        ownerTooltipText: a
      }), (0, r.jsx)(Y, {
        premiumSince: o,
        onClickPremiumGuildIcon: s
      })]
    })
  }),
  z = Chunk473749.memo(function(e) {
    let {
      colorRoleName: t,
      colorString: n,
      colorStrings: i,
      name: a,
      hideClanTag: o,
      user: s,
      guildId: l,
      isHovering: u
    } = e, d = (0, b.Z)({
      userId: null == s ? true : s.id,
      guildId: l
    }), f = (0, v.j)({
      displayNameStyles: d
    }), p = null == l && null != d;
    return (0, r.jsxs)(r.Fragment, {
      children: [p ? (0, r.jsx)(O.Z, {
        userName: null != a ? a : "",
        displayNameStyles: d,
        effectDisplayType: u ? y.F.ANIMATED : y.F.STATIC,
        loop: true
      }) : (0, r.jsx)(c.PUh, {
        roleName: t,
        colorString: n,
        colorStrings: i,
        name: a,
        className: j.name,
        displayNameStylesFont: f,
        animateRoleGradient: u
      }), !o && (0, r.jsx)(S.ZP, {
        primaryGuild: null == s ? true : s.primaryGuild,
        userId: null == s ? true : s.id,
        contextGuildId: l,
        disableGuildProfile: true,
        className: j.clanTag
      })]
    })
  }),
  q = Chunk473749.memo(function(e) {
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
      handleSetTypingRef: p,
      typingRef: _,
      currentUser: m
    } = e, h = a === w.Skl.OFFLINE, g = n ? c.Xo$ : c.qEK, E = (0, u.Z)(i) ? w.Skl.STREAMING : a;
    return E = h ? true : E, (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g, G(k({}, o), {
        size: c.EFr.SIZE_32,
        src: s,
        isMobile: l,
        isTyping: d,
        status: E,
        "aria-label": t.username,
        statusTooltip: true,
        avatarDecoration: f,
        typingIndicatorRef: p
      })), (0, r.jsx)(I.Z, {
        confettiSpawnRef: _,
        shouldFire: d && null != m && t.id !== m.id,
        confettiLocation: x.Hn.MEMBER_USER
      })]
    })
  }),
  Q = Chunk473749.memo(function(e) {
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
      quest: p
    } = e, m = i.useMemo(() => (0, f.Z)({
      activities: a,
      status: o,
      applicationStream: s,
      voiceChannel: l
    }), [a, o, s, l]), h = i.useMemo(() => !(0, E.Z)({
      activity: null == a ? true : a.find(e => {
        let {
          type: t
        } = e;
        return t === w.IIU.CUSTOM_STATUS
      }),
      user: c,
      channel: u
    }), [a, c, u]);
    return t || !m ? null : (0, r.jsx)(_.Z, {
      location: "MemberListSubtext",
      user: c,
      activities: a,
      applicationStream: s,
      voiceChannel: l,
      animateEmoji: d,
      hideEmoji: h,
      hasQuest: null != p,
      hideTooltip: n
    })
  }),
  X = Chunk473749.memo(function(e) {
    let {
      selected: t = false,
      colorString: n,
      colorStrings: a,
      colorRoleName: l,
      isOwner: u,
      ownerTooltipText: f,
      lostPermissionTooltipText: _,
      isTyping: m = false,
      nick: E,
      user: b,
      currentUser: y,
      activities: O,
      applicationStream: v,
      status: S,
      shouldAnimateStatus: I = false,
      isMobile: P,
      premiumSince: D,
      channel: x,
      guildId: L,
      className: M,
      nameplate: U,
      hideClanTag: B = false,
      hideSubtext: F = false,
      hideTooltip: H = false,
      onMouseDown: Y,
      onKeyDown: W,
      onClick: X,
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
    } = e, el = null == b ? true : b.id, ec = R.ZP.useName(b), eu = i.useRef(null), ed = null != es ? es : eu, [ef, ep] = i.useState(false), [e_, em] = i.useState(false), [eh, eg] = i.useState(null), {
      voiceChannel: eE
    } = (0, p.Z)({
      userId: el,
      guildId: L
    }), {
      voiceActivityStatusEnabled: eb
    } = (0, d.U)({
      location: "MemberListItem"
    }), ey = eb ? eE : true, {
      avatarDecorationSrc: eO,
      avatarSrc: ev,
      eventHandlers: eS
    } = (0, N.Z)({
      userId: el,
      size: c.EFr.SIZE_32,
      animateOnHover: !(t || ef),
      guildId: L
    }), eI = null != eo ? eo : {}, {
      onFocus: eT
    } = eI, eC = Z(eI, ["onFocus"]), eA = (0, T.X7)(L, el, null != a ? a : null), [eN, eP] = i.useState(false);
    i.useEffect(() => {
      t && eP(false)
    }, [t]);
    let eR = (0, C.fN)(O),
      ew = (0, C.Wi)(eR, v, el) && t && !eN,
      eD = i.useCallback(() => {
        ep(true)
      }, []),
      ex = i.useCallback(() => {
        ep(false)
      }, []),
      eL = i.useCallback(() => {
        em(true), null == eT || eT()
      }, [eT]),
      ej = i.useCallback(() => {
        em(false)
      }, []),
      eM = i.useCallback(e => {
        eg(e)
      }, []),
      ek = i.useCallback(e => null == eR ? null : (0, r.jsx)(A.Z, G(k({
        name: null != E ? E : ec,
        quest: eR,
        memberListItemRef: ed,
        applicationStream: v
      }, e), {
        closePopout: () => eP(true)
      })), [eR, ed, v, E, ec]);
    return null == b ? (0, r.jsx)(h.Z, {
      avatarSize: c.EFr.SIZE_32,
      className: j.placeholder
    }) : (0, r.jsx)(c.yRy, {
      targetElementRef: ed,
      renderPopout: ek,
      position: "bottom",
      shouldShow: ew,
      nudgeAlignIntoViewport: false,
      useRawTargetDimensions: true,
      animation: c.yRy.Animation.NONE,
      spacing: -V,
      children: () => (0, r.jsx)(g.Z, k({
        ref: ed,
        selected: t,
        className: o()(j.member, M, {
          [j.offline]: S === w.Skl.OFFLINE && !t,
          [j.flatBottom]: ew
        }),
        innerClassName: j.memberInner,
        onClick: X,
        onKeyDown: W,
        onMouseDown: Y,
        onContextMenu: J,
        onMouseEnter: eD,
        onMouseLeave: ex,
        onBlur: ej,
        hovered: ef,
        name: null == _ ? (0, r.jsx)("span", {
          className: j.username,
          children: (0, r.jsx)(z, {
            colorRoleName: l,
            colorString: null != n ? n : null,
            name: null != E ? E : ec,
            colorStrings: eA,
            hideClanTag: B,
            user: b,
            guildId: L,
            isHovering: ef
          })
        }) : (0, r.jsx)(s.u, {
          text: _,
          children: (0, r.jsx)("span", {
            className: o()(j.username, j.lostPermission),
            children: (0, r.jsx)(z, {
              colorRoleName: l,
              colorString: null != n ? n : null,
              name: null != E ? E : ec,
              colorStrings: eA,
              hideClanTag: B,
              user: b,
              guildId: L,
              isHovering: ef
            })
          })
        }),
        avatar: (0, r.jsx)(q, {
          user: b,
          shouldAnimateStatus: I,
          activities: O,
          status: S,
          eventHandlers: eS,
          avatarSrc: ev,
          isMobile: P,
          isTyping: m,
          avatarDecorationSrc: eO,
          handleSetTypingRef: eM,
          typingRef: eh,
          currentUser: y
        }),
        nameplate: U,
        subText: (0, r.jsx)(Q, {
          hideSubtext: F,
          activities: O,
          status: S,
          applicationStream: v,
          voiceStatusChannel: ey,
          user: b,
          channel: x,
          isHoveringOrFocusing: ef || e_,
          quest: eR,
          hideTooltip: H
        }),
        decorators: (0, r.jsx)(K, {
          user: b,
          isOwner: u,
          lostPermissionTooltipText: _,
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
        onFocus: eL,
        focusProps: {
          offset: {
            top: 4,
            bottom: 4,
            left: 4,
            right: 4
          }
        }
      }, eC))
    })
  })