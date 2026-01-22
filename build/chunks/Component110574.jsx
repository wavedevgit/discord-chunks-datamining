/** Chunk was on web.js **/
/** chunk id: 110574, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => Q,
  b: () => B
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function V(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = F(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function F(e, t) {
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
    return null != t && t && null == n ? (0, r.jsx)(o.m, {
      __unsupportedReactNodeAsText: null != i ? i : L.intl.string(L.t.pclUFJ),
      children: (0, r.jsx)(c.pw5, {
        size: "md",
        color: "currentColor",
        className: j.Dd
      })
    }) : null
  }),
  W = Chunk64700.memo(function(e) {
    let {
      premiumSince: t,
      onClickPremiumGuildIcon: n
    } = e;
    return null == t ? null : (0, r.jsx)(o.m, {
      text: L.intl.formatToPlainString(L.t.IWkAq7, {
        date: t
      }),
      asContainer: true,
      children: (0, r.jsx)(c.DUT, {
        onClick: n,
        tabIndex: false,
        children: (0, r.jsx)(c._Jp, {
          color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
          className: j.PC
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
      className: j.AO,
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
      premiumSince: s,
      onClickPremiumGuildIcon: o
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(K, {
        user: t
      }), (0, r.jsx)(Y, {
        isOwner: n,
        lostPermissionTooltipText: i,
        ownerTooltipText: a
      }), (0, r.jsx)(W, {
        premiumSince: s,
        onClickPremiumGuildIcon: o
      })]
    })
  }),
  q = Chunk64700.memo(function(e) {
    let {
      colorRoleName: t,
      colorString: n,
      colorStrings: i,
      name: a,
      hideClanTag: s,
      user: o,
      guildId: l,
      isHovering: u
    } = e, d = (0, b.A)({
      userId: null == o ? true : o.id,
      guildId: l
    }), f = (0, A.a)({
      displayNameStyles: d
    }), p = null == l && null != d;
    return (0, r.jsxs)(r.Fragment, {
      children: [p ? (0, r.jsx)(O.A, {
        userName: null != a ? a : "",
        displayNameStyles: d,
        effectDisplayType: u ? y.G.ANIMATED : y.G.STATIC,
        loop: true
      }) : (0, r.jsx)(c.gyj, {
        roleName: t,
        colorString: n,
        colorStrings: i,
        name: a,
        className: j.UU,
        displayNameStylesFont: f,
        animateRoleGradient: u
      }), !s && (0, r.jsx)(v.Ay, {
        primaryGuild: null == o ? true : o.primaryGuild,
        userId: null == o ? true : o.id,
        contextGuildId: l,
        disableGuildProfile: true,
        className: j.fc
      })]
    })
  }),
  X = Chunk64700.memo(function(e) {
    let {
      user: t,
      shouldAnimateStatus: n,
      activities: i,
      status: a,
      eventHandlers: s,
      avatarSrc: o,
      isMobile: l,
      isTyping: d,
      avatarDecorationSrc: f,
      handleSetTypingRef: p,
      typingRef: _,
      currentUser: h
    } = e, m = a === P.clD.OFFLINE, g = n ? c.JsQ : c.euF, E = (0, u.A)(i) ? P.clD.STREAMING : a;
    return E = m ? true : E, (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g, G(k({}, s), {
        size: c._3J.SIZE_32,
        src: o,
        isMobile: l,
        isTyping: d,
        status: E,
        "aria-label": t.username,
        statusTooltip: true,
        avatarDecoration: f,
        typingIndicatorRef: p
      })), (0, r.jsx)(S.A, {
        confettiSpawnRef: _,
        shouldFire: d && null != h && t.id !== h.id,
        confettiLocation: x.k.MEMBER_USER
      })]
    })
  }),
  Z = Chunk64700.memo(function(e) {
    let {
      hideSubtext: t,
      hideTooltip: n = false,
      activities: a,
      status: s,
      applicationStream: o,
      voiceStatusChannel: l,
      user: c,
      channel: u,
      isHoveringOrFocusing: d,
      quest: p
    } = e, h = i.useMemo(() => (0, f.A)({
      activities: a,
      status: s,
      applicationStream: o,
      voiceChannel: l
    }), [a, s, o, l]), m = i.useMemo(() => !(0, E.A)({
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
      applicationStream: o,
      voiceChannel: l,
      animateEmoji: d,
      hideEmoji: m,
      hasQuest: null != p,
      hideTooltip: n
    })
  }),
  Q = Chunk64700.memo(function(e) {
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
      user: b,
      currentUser: y,
      activities: O,
      applicationStream: A,
      status: v,
      shouldAnimateStatus: S = false,
      isMobile: R,
      premiumSince: D,
      channel: x,
      guildId: L,
      className: M,
      nameplate: U,
      hideClanTag: F = false,
      hideSubtext: B = false,
      hideTooltip: Y = false,
      onMouseDown: W,
      onKeyDown: K,
      onClick: Q,
      onContextMenu: $,
      onClickPremiumGuildIcon: J,
      "aria-controls": ee,
      "aria-expanded": et,
      "aria-posinset": en,
      "aria-setsize": er,
      id: ei,
      tabIndex: ea,
      itemProps: es,
      ref: eo
    } = e, el = null == b ? true : b.id, ec = w.Ay.useName(b), eu = i.useRef(null), ed = null != eo ? eo : eu, [ef, ep] = i.useState(false), [e_, eh] = i.useState(false), [em, eg] = i.useState(null), {
      voiceChannel: eE
    } = (0, p.A)({
      userId: el,
      guildId: L
    }), {
      voiceActivityStatusEnabled: eb
    } = (0, d.G)({
      location: "MemberListItem"
    }), ey = eb ? eE : true, {
      avatarDecorationSrc: eO,
      avatarSrc: eA,
      eventHandlers: ev
    } = (0, N.A)({
      userId: el,
      size: c._3J.SIZE_32,
      animateOnHover: !(t || ef),
      guildId: L
    }), eS = null != es ? es : {}, {
      onFocus: eI
    } = eS, eT = V(eS, ["onFocus"]), eC = (0, I.gn)(L, el, null != a ? a : null), [eN, eR] = i.useState(false);
    i.useEffect(() => {
      t && eR(false)
    }, [t]);
    let ew = (0, T.YW)(O),
      eP = (0, T.Yl)(ew, A, el) && t && !eN,
      eD = i.useCallback(() => {
        ep(true)
      }, []),
      ex = i.useCallback(() => {
        ep(false)
      }, []),
      eL = i.useCallback(() => {
        eh(true), null == eI || eI()
      }, [eI]),
      ej = i.useCallback(() => {
        eh(false)
      }, []),
      eM = i.useCallback(e => {
        eg(e)
      }, []),
      ek = i.useCallback(e => null == ew ? null : (0, r.jsx)(C.A, G(k({
        name: null != E ? E : ec,
        quest: ew,
        memberListItemRef: ed,
        applicationStream: A
      }, e), {
        closePopout: () => eR(true)
      })), [ew, ed, A, E, ec]);
    return null == b ? (0, r.jsx)(m.A, {
      avatarSize: c._3J.SIZE_32,
      className: j.qf
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
        className: s()(j.Dc, M, {
          [j.WK]: v === P.clD.OFFLINE && !t,
          [j.PJ]: eP
        }),
        innerClassName: j.Hz,
        onClick: Q,
        onKeyDown: K,
        onMouseDown: W,
        onContextMenu: $,
        onMouseEnter: eD,
        onMouseLeave: ex,
        onBlur: ej,
        hovered: ef,
        name: null == _ ? (0, r.jsx)("span", {
          className: j.Xh,
          children: (0, r.jsx)(q, {
            colorRoleName: l,
            colorString: null != n ? n : null,
            name: null != E ? E : ec,
            colorStrings: eC,
            hideClanTag: F,
            user: b,
            guildId: L,
            isHovering: ef
          })
        }) : (0, r.jsx)(o.m, {
          text: _,
          children: (0, r.jsx)("span", {
            className: s()(j.Xh, j.oj),
            children: (0, r.jsx)(q, {
              colorRoleName: l,
              colorString: null != n ? n : null,
              name: null != E ? E : ec,
              colorStrings: eC,
              hideClanTag: F,
              user: b,
              guildId: L,
              isHovering: ef
            })
          })
        }),
        avatar: (0, r.jsx)(X, {
          user: b,
          shouldAnimateStatus: S,
          activities: O,
          status: v,
          eventHandlers: ev,
          avatarSrc: eA,
          isMobile: R,
          isTyping: h,
          avatarDecorationSrc: eO,
          handleSetTypingRef: eM,
          typingRef: em,
          currentUser: y
        }),
        nameplate: U,
        subText: (0, r.jsx)(Z, {
          hideSubtext: B,
          activities: O,
          status: v,
          applicationStream: A,
          voiceStatusChannel: ey,
          user: b,
          channel: x,
          isHoveringOrFocusing: ef || e_,
          quest: ew,
          hideTooltip: Y
        }),
        decorators: (0, r.jsx)(z, {
          user: b,
          isOwner: u,
          lostPermissionTooltipText: _,
          ownerTooltipText: f,
          premiumSince: D,
          onClickPremiumGuildIcon: J
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
      }, eT))
    })
  })