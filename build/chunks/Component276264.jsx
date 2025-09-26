/** Chunk was on web.js **/
/** chunk id: 276264, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => q,
  x: () => B
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function L(e, t, n) {
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
      L(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function U(e, t) {
  if (null == e) return {};
  var n, r, i = G(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function G(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let B = (0, Chunk624138.Mg)(Chunk477690.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
  Z = 3,
  F = Chunk647438.memo(function(e) {
    let {
      isOwner: t,
      lostPermissionTooltipText: n,
      ownerTooltipText: i
    } = e;
    return null != t && t && null == n ? (0, r.jsx)(l.ua7, {
      text: null != i ? i : D.intl.string(D.t.pclUFB),
      children: e => (0, r.jsx)(l.CEn, k(j({
        size: "md",
        color: "currentColor"
      }, e), {
        className: x.ownerIcon
      }))
    }) : null
  }),
  V = Chunk647438.memo(function(e) {
    let {
      premiumSince: t,
      onClickPremiumGuildIcon: n
    } = e;
    return null == t ? null : (0, r.jsx)(l.ua7, {
      text: D.intl.formatToPlainString(D.t.IWkAq6, {
        date: t
      }),
      children: e => (0, r.jsx)(l.P3F, {
        onClick: n,
        tabIndex: false,
        children: (0, r.jsx)(l.$Eu, k(j({}, e), {
          color: l.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
          className: x.premiumIcon
        }))
      })
    })
  }),
  H = Chunk647438.memo(function(e) {
    let {
      user: t
    } = e;
    if (null == t || !t.bot) return null;
    let n = P.Hb.BOT;
    return (0, r.jsx)(p.Z, {
      className: x.botTag,
      type: n,
      verified: t.isVerifiedBot()
    })
  }),
  Y = Chunk647438.memo(function(e) {
    let {
      user: t,
      isOwner: n,
      lostPermissionTooltipText: i,
      ownerTooltipText: a,
      premiumSince: o,
      onClickPremiumGuildIcon: s
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(H, {
        user: t
      }), (0, r.jsx)(F, {
        isOwner: n,
        lostPermissionTooltipText: i,
        ownerTooltipText: a
      }), (0, r.jsx)(V, {
        premiumSince: o,
        onClickPremiumGuildIcon: s
      })]
    })
  }),
  W = Chunk647438.memo(function(e) {
    let {
      colorRoleName: t,
      colorString: n,
      colorStrings: i,
      name: a,
      hideClanTag: o,
      user: s,
      guildId: c,
      isHovering: u
    } = e, d = (0, y.j)({
      displayNameStyles: null == s ? true : s.displayNameStyles
    }), f = null == c && (null == s ? true : s.displayNameStyles) != null;
    return (0, r.jsxs)(r.Fragment, {
      children: [f ? (0, r.jsx)(b.Z, {
        userName: null != a ? a : "",
        displayNameStyles: s.displayNameStyles,
        effectDisplayType: u ? E.F.ANIMATED : E.F.STATIC,
        loop: true
      }) : (0, r.jsx)(l.PUh, {
        roleName: t,
        colorString: n,
        colorStrings: i,
        name: a,
        className: x.name,
        displayNameStylesFont: d,
        animateRoleGradient: u
      }), !o && (0, r.jsx)(O.ZP, {
        primaryGuild: null == s ? true : s.primaryGuild,
        userId: null == s ? true : s.id,
        contextGuildId: c,
        disableGuildProfile: true,
        className: x.clanTag
      })]
    })
  }),
  K = Chunk647438.memo(function(e) {
    let {
      user: t,
      shouldAnimateStatus: n,
      activities: i,
      status: a,
      eventHandlers: o,
      avatarSrc: s,
      isMobile: u,
      isTyping: d,
      avatarDecorationSrc: f,
      handleSetTypingRef: _,
      typingRef: p,
      currentUser: h
    } = e, m = a === R.Skl.OFFLINE, g = n ? l.Xo$ : l.qEK, E = (0, c.Z)(i) ? R.Skl.STREAMING : a;
    return E = m ? true : E, (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g, k(j({}, o), {
        size: l.EFr.SIZE_32,
        src: s,
        isMobile: u,
        isTyping: d,
        status: E,
        "aria-label": t.username,
        statusTooltip: true,
        avatarDecoration: f,
        typingIndicatorRef: _
      })), (0, r.jsx)(v.Z, {
        confettiSpawnRef: p,
        shouldFire: d && null != h && t.id !== h.id,
        confettiLocation: w.Hn.MEMBER_USER
      })]
    })
  }),
  z = Chunk647438.memo(function(e) {
    let {
      hideSubtext: t,
      hideTooltip: n = false,
      activities: a,
      status: o,
      applicationStream: s,
      voiceStatusChannel: l,
      user: c,
      channel: u,
      isHoveringOrFocusing: f,
      quest: p
    } = e, h = i.useMemo(() => (0, d.Z)({
      activities: a,
      status: o,
      applicationStream: s,
      voiceChannel: l
    }), [a, o, s, l]), m = i.useMemo(() => !(0, g.Z)({
      activity: null == a ? true : a.find(e => {
        let {
          type: t
        } = e;
        return t === R.IIU.CUSTOM_STATUS
      }),
      user: c,
      channel: u
    }), [a, c, u]);
    return t || !h ? null : (0, r.jsx)(_.Z, {
      location: "MemberListSubtext",
      user: c,
      activities: a,
      applicationStream: s,
      voiceChannel: l,
      animateEmoji: f,
      hideEmoji: m,
      hasQuest: null != p,
      hideTooltip: n
    })
  }),
  q = Chunk647438.memo(function(e) {
    let {
      selected: t = false,
      colorString: n,
      colorStrings: a,
      colorRoleName: s,
      isOwner: c,
      ownerTooltipText: d,
      lostPermissionTooltipText: _,
      isTyping: p = false,
      nick: g,
      user: E,
      currentUser: b,
      activities: y,
      applicationStream: O,
      status: v,
      shouldAnimateStatus: C = false,
      isMobile: P,
      premiumSince: w,
      channel: D,
      guildId: L,
      className: M,
      nameplate: G,
      hideClanTag: B = false,
      hideSubtext: F = false,
      hideTooltip: V = false,
      onMouseDown: H,
      onKeyDown: q,
      onClick: X,
      onContextMenu: Q,
      onClickPremiumGuildIcon: J,
      "aria-controls": $,
      "aria-expanded": ee,
      "aria-posinset": et,
      "aria-setsize": en,
      id: er,
      tabIndex: ei,
      itemProps: ea,
      ref: eo
    } = e, es = null == E ? true : E.id, el = N.ZP.useName(E), ec = i.useRef(null), eu = null != eo ? eo : ec, [ed, ef] = i.useState(false), [e_, ep] = i.useState(false), [eh, em] = i.useState(null), {
      voiceChannel: eg
    } = (0, f.Z)({
      userId: es,
      guildId: L
    }), {
      voiceActivityStatusEnabled: eE
    } = (0, u.U)({
      location: "MemberListItem"
    }), eb = eE ? eg : true, {
      avatarDecorationSrc: ey,
      avatarSrc: eO,
      eventHandlers: ev
    } = (0, A.Z)({
      userId: es,
      size: l.EFr.SIZE_32,
      animateOnHover: !(t || ed),
      guildId: L
    }), eI = null != ea ? ea : {}, {
      onFocus: eT
    } = eI, eS = U(eI, ["onFocus"]), eA = (0, I.X7)(L, es, null != a ? a : null), [eC, eN] = i.useState(false);
    i.useEffect(() => {
      t && eN(false)
    }, [t]);
    let eR = (0, T.fN)(y),
      eP = (0, T.Wi)(eR, O, es) && t && !eC,
      ew = i.useCallback(() => {
        ef(true)
      }, []),
      eD = i.useCallback(() => {
        ef(false)
      }, []),
      ex = i.useCallback(() => {
        ep(true), null == eT || eT()
      }, [eT]),
      eL = i.useCallback(() => {
        ep(false)
      }, []),
      ej = i.useCallback(e => {
        em(e)
      }, []),
      eM = i.useCallback(e => null == eR ? null : (0, r.jsx)(S.Z, k(j({
        name: null != g ? g : el,
        quest: eR,
        memberListItemRef: eu,
        applicationStream: O
      }, e), {
        closePopout: () => eN(true)
      })), [eR, eu, O, g, el]);
    return null == E ? (0, r.jsx)(h.Z, {
      avatarSize: l.EFr.SIZE_32,
      className: x.placeholder
    }) : (0, r.jsx)(l.yRy, {
      targetElementRef: eu,
      renderPopout: eM,
      position: "bottom",
      shouldShow: eP,
      nudgeAlignIntoViewport: false,
      useRawTargetDimensions: true,
      animation: l.yRy.Animation.NONE,
      spacing: -Z,
      children: () => (0, r.jsx)(m.Z, j({
        ref: eu,
        selected: t,
        className: o()(x.member, M, {
          [x.offline]: v === R.Skl.OFFLINE && !t,
          [x.flatBottom]: eP
        }),
        innerClassName: x.memberInner,
        onClick: X,
        onKeyDown: q,
        onMouseDown: H,
        onContextMenu: Q,
        onMouseEnter: ew,
        onMouseLeave: eD,
        onBlur: eL,
        hovered: ed,
        name: null == _ ? (0, r.jsx)("span", {
          className: x.username,
          children: (0, r.jsx)(W, {
            colorRoleName: s,
            colorString: null != n ? n : null,
            name: null != g ? g : el,
            colorStrings: eA,
            hideClanTag: B,
            user: E,
            guildId: L,
            isHovering: ed
          })
        }) : (0, r.jsx)(l.ua7, {
          text: _,
          children: e => (0, r.jsx)("span", k(j({}, e), {
            className: o()(x.username, x.lostPermission),
            children: (0, r.jsx)(W, {
              colorRoleName: s,
              colorString: null != n ? n : null,
              name: null != g ? g : el,
              colorStrings: eA,
              hideClanTag: B,
              user: E,
              guildId: L,
              isHovering: ed
            })
          }))
        }),
        avatar: (0, r.jsx)(K, {
          user: E,
          shouldAnimateStatus: C,
          activities: y,
          status: v,
          eventHandlers: ev,
          avatarSrc: eO,
          isMobile: P,
          isTyping: p,
          avatarDecorationSrc: ey,
          handleSetTypingRef: ej,
          typingRef: eh,
          currentUser: b
        }),
        nameplate: G,
        subText: (0, r.jsx)(z, {
          hideSubtext: F,
          activities: y,
          status: v,
          applicationStream: O,
          voiceStatusChannel: eb,
          user: E,
          channel: D,
          isHoveringOrFocusing: ed || e_,
          quest: eR,
          hideTooltip: V
        }),
        decorators: (0, r.jsx)(Y, {
          user: E,
          isOwner: c,
          lostPermissionTooltipText: _,
          ownerTooltipText: d,
          premiumSince: w,
          onClickPremiumGuildIcon: J
        }),
        "aria-controls": $,
        "aria-expanded": ee,
        "aria-setsize": en,
        "aria-posinset": et,
        id: er,
        tabIndex: ei,
        onFocus: ex,
        focusProps: {
          offset: {
            top: 4,
            bottom: 4,
            left: 4,
            right: 4
          }
        }
      }, eS))
    })
  })