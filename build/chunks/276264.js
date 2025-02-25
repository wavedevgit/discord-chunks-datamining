/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => F,
  x: () => G
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(477690),
  l = n(481060),
  c = n(420660),
  u = n(468363),
  d = n(297369),
  f = n(956221),
  _ = n(771173),
  p = n(372276),
  h = n(385499),
  g = n(693728),
  m = n(979264),
  E = n(554300),
  v = n(558602),
  b = n(614185),
  y = n(736144),
  O = n(113434),
  S = n(553393),
  I = n(565640),
  T = n(518950),
  N = n(594174),
  A = n(709586),
  C = n(624138),
  R = n(51144),
  P = n(981631),
  D = n(674563),
  w = n(524484),
  L = n(388032),
  x = n(748241);

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
let G = (0, C.Mg)(s.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
  B = 3,
  F = function(e) {
    var t;
    let {
      selected: n = !1,
      colorString: o,
      colorRoleName: s,
      isOwner: C,
      ownerTooltipText: M,
      lostPermissionTooltipText: k,
      isTyping: G = !1,
      nick: F,
      user: V,
      currentUser: Z,
      activities: H,
      applicationStream: W,
      status: Y,
      shouldAnimateStatus: K = !1,
      isMobile: z,
      premiumSince: q,
      channel: Q,
      guildId: X,
      className: J,
      nameplate: $,
      hideClanTag: ee = !1,
      hideSubtext: et = !1,
      onMouseDown: en,
      onKeyDown: er,
      onClick: ei,
      onContextMenu: eo,
      onClickPremiumGuildIcon: ea,
      onFocus: es,
      "aria-controls": el,
      "aria-expanded": ec,
      "aria-posinset": eu,
      "aria-setsize": ed,
      id: ef,
      tabIndex: e_,
      itemProps: ep
    } = e, eh = null == V ? void 0 : V.id, eg = R.ZP.useName(V), em = (null === (t = N.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === eh, eE = i.useRef(null), [ev, eb] = i.useState(!1), [ey, eO] = i.useState(null), {
      voiceChannel: eS
    } = (0, f.Z)({
      userId: eh,
      guildId: X,
      surface: "member-list-item"
    }), {
      voiceActivityStatusEnabled: eI
    } = (0, u.U)({
      location: "MemberListItem"
    }), eT = eI ? eS : void 0, eN = (0, I.Z)(eh, "MemberListItem"), {
      avatarDecorationSrc: eA,
      avatarSrc: eC,
      eventHandlers: eR
    } = (0, T.Z)({
      user: V,
      size: l.EFr.SIZE_32,
      animateOnHover: !(n || ev),
      guildId: X
    }), eP = (0, b.D)("ListItem") && null != $, [eD, ew] = i.useState(!1);
    i.useEffect(() => {
      n && ew(!1)
    }, [n]);
    let eL = (0, O.Fr)(H),
      ex = null != eL && !em && n && !eD,
      eM = () => {
        eb(!0)
      },
      ej = () => {
        eb(!1)
      },
      ek = e => {
        eO(e)
      },
      eU = () => {
        if (et) return null;
        if ((0, d.Z)({
            activities: H,
            status: Y,
            applicationStream: W,
            voiceChannel: eT
          })) {
          let e = !(0, v.Z)({
            activity: null == H ? void 0 : H.find(e => {
              let {
                type: t
              } = e;
              return t === P.IIU.CUSTOM_STATUS
            }),
            user: V,
            channel: Q
          });
          return (0, r.jsx)(_.Z, {
            location: "MemberListItem",
            user: V,
            activities: H,
            applicationStream: W,
            voiceChannel: eT,
            animate: ev,
            hideEmoji: e,
            hasQuest: null != eL,
            textClassName: x.activityText
          })
        }
        return null != eN ? (0, r.jsx)(p.Z, {
          textClassName: x.activityText,
          entry: eN
        }) : null
      },
      eG = () => null != C && C && null == k ? (0, r.jsx)(l.ua7, {
        text: null != M ? M : L.NW.string(L.t.pclUFB),
        children: e => (0, r.jsx)(l.CEn, U(j({
          size: "md",
          color: "currentColor"
        }, e), {
          className: x.ownerIcon
        }))
      }) : null,
      eB = () => null == q ? null : (0, r.jsx)(l.ua7, {
        text: L.NW.formatToPlainString(L.t.IWkAq6, {
          date: q
        }),
        children: e => (0, r.jsx)(l.P3F, {
          onClick: ea,
          tabIndex: -1,
          children: (0, r.jsx)(A.Z, U(j({}, e), {
            className: x.premiumIcon
          }))
        })
      }),
      eF = () => {
        let e = (null == V ? void 0 : V.isClyde()) ? D.Hb.AI : D.Hb.BOT;
        return null != V && V.bot ? (0, r.jsx)(h.Z, {
          className: x.botTag,
          type: e,
          verified: V.isVerifiedBot()
        }) : null
      },
      eV = () => (0, r.jsxs)(r.Fragment, {
        children: [eF(), eG(), eB()]
      }),
      eZ = (e, t) => {
        let n = K ? l.Xo$ : l.qEK,
          i = (0, c.Z)(H) ? P.Skl.STREAMING : Y;
        return i = t ? void 0 : i, (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(n, U(j({}, eR), {
            size: l.EFr.SIZE_32,
            src: eC,
            isMobile: z,
            isTyping: G,
            status: i,
            "aria-label": e.username,
            statusTooltip: !0,
            avatarDecoration: eA,
            typingIndicatorRef: ek
          })), (0, r.jsx)(y.Z, {
            confettiSpawnRef: ey,
            shouldFire: G && null != Z && e.id !== Z.id,
            confettiLocation: w.Hn.MEMBER_USER
          })]
        })
      },
      eH = i.useMemo(() => ({
        source: P.jXE.MEMBER_LIST
      }), []),
      eW = () => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.PUh, {
          roleName: s,
          color: null != o ? o : void 0,
          name: null != F ? F : eg,
          className: x.name
        }), !ee && (0, r.jsx)(m.ZP, {
          primaryGuild: null == V ? void 0 : V.primaryGuild,
          userId: null == V ? void 0 : V.id,
          contextGuildId: X,
          disableGuildProfile: !0,
          className: x.clanTag,
          profileViewedAnalytics: eH
        })]
      }),
      eY = e => (0, r.jsx)(S.Z, U(j({
        quest: eL,
        memberListItemRef: eE,
        applicationStream: W
      }, e), {
        closePopout: () => ew(!0)
      })),
      eK = Y === P.Skl.OFFLINE;
    return null == V ? (0, r.jsx)(g.Z, {
      avatarSize: l.EFr.SIZE_32,
      className: x.placeholder
    }) : (0, r.jsx)(l.yRy, {
      renderPopout: eY,
      position: "bottom",
      shouldShow: ex,
      nudgeAlignIntoViewport: !1,
      useRawTargetDimensions: !0,
      animation: l.yRy.Animation.NONE,
      spacing: -B,
      children: () => (0, r.jsx)(E.Z, j({
        ref: eE,
        selected: n,
        className: a()(x.member, J, {
          [x.offline]: eK && !n
        }),
        innerClassName: x.memberInner,
        onClick: ei,
        onKeyDown: er,
        onMouseDown: en,
        onContextMenu: eo,
        onMouseEnter: eM,
        onMouseLeave: ej,
        hovered: ev,
        name: null == k ? (0, r.jsx)("span", {
          className: x.username,
          children: eW()
        }) : (0, r.jsx)(l.ua7, {
          text: k,
          children: e => (0, r.jsx)("span", U(j({}, e), {
            className: a()(x.username, x.lostPermission),
            children: eW()
          }))
        }),
        avatar: eZ(V, eK),
        nameplate: eP ? $ : void 0,
        subText: eU(),
        decorators: eV(),
        "aria-controls": el,
        "aria-expanded": ec,
        "aria-setsize": ed,
        "aria-posinset": eu,
        id: ef,
        tabIndex: e_,
        onFocus: es,
        focusProps: {
          offset: {
            top: 4,
            bottom: 4,
            left: 4,
            right: 4
          }
        }
      }, ep))
    })
  }