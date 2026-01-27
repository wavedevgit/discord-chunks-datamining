/** Chunk was on web.js **/
/** chunk id: 110574, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => X,
  b: () => B
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk960076 = require("./960076.js"),
  Chunk901517 = require("./901517.js"),
  Chunk397244 = require("./397244.js"),
  Chunk714114 = require("./714114.js"),
  Chunk729551 = require("./729551.jsx"),
  Chunk709066 = require("./709066.jsx"),
  Chunk295160 = require("./295160.jsx"),
  Chunk193663 = require("./193663.jsx"),
  Chunk490427 = require("./490427.js"),
  Chunk609425 = require("./609425.js"),
  Chunk922301 = require("./922301.js"),
  Chunk750112 = require("./750112.jsx"),
  Chunk73392 = require("./73392.js"),
  Chunk534400 = require("./534400.jsx"),
  Chunk835759 = require("./835759.jsx"),
  Chunk967144 = require("./967144.js"),
  Chunk890687 = require("./890687.js"),
  Chunk198525 = require("./198525.jsx"),
  Chunk854627 = require("./854627.js"),
  Chunk240248 = require("./240248.js"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js"),
  Chunk705751 = require("./705751.js"),
  Chunk31408 = require("./31408.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk645576 = require("./645576.js");

function j(e, t, n) {
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
      j(e, t, n[t])
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

function F(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = V(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function V(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let B = (0, Chunk240248.xI)(Chunk319060.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
  H = 3,
  Y = Chunk64700.memo(function(e) {
    let {
      isOwner: t,
      lostPermissionTooltipText: n,
      ownerTooltipText: i
    } = e;
    return null != t && t && null == n ? (0, r.jsx)(s.m, {
      __unsupportedReactNodeAsText: null != i ? i : x.intl.string(x.t.pclUFJ),
      children: (0, r.jsx)(c.pw5, {
        size: "md",
        color: "currentColor",
        className: M.Dd
      })
    }) : null
  }),
  W = Chunk64700.memo(function(e) {
    let {
      premiumSince: t,
      onClickPremiumGuildIcon: n
    } = e;
    return null == t ? null : (0, r.jsx)(s.m, {
      text: x.intl.formatToPlainString(x.t.IWkAq7, {
        date: t
      }),
      asContainer: true,
      children: (0, r.jsx)(c.DUT, {
        onClick: n,
        tabIndex: false,
        children: (0, r.jsx)(c._Jp, {
          color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
          className: M.PC
        })
      })
    })
  }),
  K = Chunk64700.memo(function(e) {
    let {
      user: t
    } = e;
    if (null == t || !t.bot) return null;
    let n = D.nu.BOT;
    return (0, r.jsx)(h.A, {
      className: M.AO,
      type: n,
      verified: t.isVerifiedBot()
    })
  }),
  z = Chunk64700.memo(function(e) {
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
  q = Chunk64700.memo(function(e) {
    let {
      colorRoleName: t,
      colorString: n,
      colorStrings: i,
      name: a,
      hideClanTag: o,
      user: s,
      guildId: l,
      isHovering: u
    } = e, d = (0, y.A)({
      userId: null == s ? true : s.id,
      guildId: l
    }), f = (0, v.a)({
      displayNameStyles: d
    }), p = null == l && null != d;
    return (0, r.jsxs)(r.Fragment, {
      children: [p ? (0, r.jsx)(O.A, {
        userName: null != a ? a : "",
        displayNameStyles: d,
        effectDisplayType: u ? b.G.ANIMATED : b.G.STATIC,
        loop: true
      }) : (0, r.jsx)(c.gyj, {
        roleName: t,
        colorString: n,
        colorStrings: i,
        name: a,
        className: M.UU,
        displayNameStylesFont: f,
        animateRoleGradient: u
      }), !o && (0, r.jsx)(A.Ay, {
        primaryGuild: null == s ? true : s.primaryGuild,
        userId: null == s ? true : s.id,
        contextGuildId: l,
        disableGuildProfile: true,
        className: M.fc
      })]
    })
  }),
  Z = Chunk64700.memo(function(e) {
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
      currentUser: h
    } = e, m = a === P.clD.OFFLINE, g = n ? c.JsQ : c.euF, E = (0, u.A)(i) ? P.clD.STREAMING : a;
    return E = m ? true : E, (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g, G(k({}, o), {
        size: c._3J.SIZE_32,
        src: s,
        isMobile: l,
        isTyping: d,
        status: E,
        "aria-label": t.username,
        statusTooltip: true,
        avatarDecoration: f,
        typingIndicatorRef: p
      })), (0, r.jsx)(I.A, {
        confettiSpawnRef: _,
        shouldFire: d && null != h && t.id !== h.id,
        confettiLocation: L.k.MEMBER_USER
      })]
    })
  }),
  Q = Chunk64700.memo(function(e) {
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
    } = e, h = i.useMemo(() => (0, f.A)({
      activities: a,
      status: o,
      applicationStream: s,
      voiceChannel: l
    }), [a, o, s, l]), m = i.useMemo(() => !(0, E.A)({
      activity: null == a ? true : a.find(e => {
        let {
          type: t
        } = e;
        return t === P.$pd.CUSTOM_STATUS
      }),
      user: c,
      channel: u
    }), [a, c, u]);
    return t || !h ? null : (0, r.jsx)(_.A, {
      user: c,
      activities: a,
      applicationStream: s,
      voiceChannel: l,
      animateEmoji: d,
      hideEmoji: m,
      hasQuest: null != p,
      hideTooltip: n
    })
  }),
  X = Chunk64700.memo(function(e) {
    let {
      selected: t = false,
      colorString: n,
      colorStrings: a,
      colorRoleName: l,
      isOwner: u,
      ownerTooltipText: f,
      lostPermissionTooltipText: _,
      isTyping: h = false,
      nick: E,
      user: y,
      currentUser: b,
      activities: O,
      applicationStream: v,
      status: A,
      shouldAnimateStatus: I = false,
      isMobile: w,
      premiumSince: D,
      channel: L,
      guildId: x,
      className: j,
      nameplate: U,
      hideClanTag: V = false,
      hideSubtext: B = false,
      hideTooltip: Y = false,
      onMouseDown: W,
      onKeyDown: K,
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
    } = e, el = null == y ? true : y.id, ec = R.Ay.useName(y), eu = i.useRef(null), ed = null != es ? es : eu, [ef, ep] = i.useState(false), [e_, eh] = i.useState(false), [em, eg] = i.useState(null), {
      voiceChannel: eE
    } = (0, p.A)({
      userId: el,
      guildId: x
    }), {
      voiceActivityStatusEnabled: ey
    } = (0, d.G)({
      location: "MemberListItem"
    }), eb = ey ? eE : true, {
      avatarDecorationSrc: eO,
      avatarSrc: ev,
      eventHandlers: eA
    } = (0, N.A)({
      userId: el,
      size: c._3J.SIZE_32,
      animateOnHover: !(t || ef),
      guildId: x
    }), eI = null != eo ? eo : {}, {
      onFocus: eS
    } = eI, eT = F(eI, ["onFocus"]), eC = (0, S.gn)(x, el, null != a ? a : null), [eN, ew] = i.useState(false);
    i.useEffect(() => {
      t && ew(false)
    }, [t]);
    let eR = (0, T.YW)(O),
      eP = (0, T.Yl)(eR, v, el) && t && !eN,
      eD = i.useCallback(() => {
        ep(true)
      }, []),
      eL = i.useCallback(() => {
        ep(false)
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
      ek = i.useCallback(e => null == eR ? null : (0, r.jsx)(C.A, G(k({
        name: null != E ? E : ec,
        quest: eR,
        memberListItemRef: ed,
        applicationStream: v
      }, e), {
        closePopout: () => ew(true)
      })), [eR, ed, v, E, ec]);
    return null == y ? (0, r.jsx)(m.A, {
      avatarSize: c._3J.SIZE_32,
      className: M.qf
    }) : (0, r.jsx)(c.YNO, {
      targetElementRef: ed,
      renderPopout: ek,
      position: "bottom",
      shouldShow: eP,
      nudgeAlignIntoViewport: false,
      useRawTargetDimensions: true,
      animation: c.YNO.Animation.NONE,
      spacing: -H,
      children: () => (0, r.jsx)(g.A, k({
        ref: ed,
        selected: t,
        className: o()(M.Dc, j, {
          [M.WK]: A === P.clD.OFFLINE && !t,
          [M.PJ]: eP
        }),
        innerClassName: M.Hz,
        onClick: X,
        onKeyDown: K,
        onMouseDown: W,
        onContextMenu: J,
        onMouseEnter: eD,
        onMouseLeave: eL,
        onBlur: eM,
        hovered: ef,
        name: null == _ ? (0, r.jsx)("span", {
          className: M.Xh,
          children: (0, r.jsx)(q, {
            colorRoleName: l,
            colorString: null != n ? n : null,
            name: null != E ? E : ec,
            colorStrings: eC,
            hideClanTag: V,
            user: y,
            guildId: x,
            isHovering: ef
          })
        }) : (0, r.jsx)(s.m, {
          text: _,
          children: (0, r.jsx)("span", {
            className: o()(M.Xh, M.oj),
            children: (0, r.jsx)(q, {
              colorRoleName: l,
              colorString: null != n ? n : null,
              name: null != E ? E : ec,
              colorStrings: eC,
              hideClanTag: V,
              user: y,
              guildId: x,
              isHovering: ef
            })
          })
        }),
        avatar: (0, r.jsx)(Z, {
          user: y,
          shouldAnimateStatus: I,
          activities: O,
          status: A,
          eventHandlers: eA,
          avatarSrc: ev,
          isMobile: w,
          isTyping: h,
          avatarDecorationSrc: eO,
          handleSetTypingRef: ej,
          typingRef: em,
          currentUser: b
        }),
        nameplate: U,
        subText: (0, r.jsx)(Q, {
          hideSubtext: B,
          activities: O,
          status: A,
          applicationStream: v,
          voiceStatusChannel: eb,
          user: y,
          channel: L,
          isHoveringOrFocusing: ef || e_,
          quest: eR,
          hideTooltip: Y
        }),
        decorators: (0, r.jsx)(z, {
          user: y,
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
        onFocus: ex,
        focusProps: {
          offset: {
            top: 4,
            bottom: 4,
            left: 4,
            right: 4
          }
        }
      }, eT))
    })
  })