/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => V
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(642128),
  a = n(91192),
  s = n(442837),
  l = n(780384),
  c = n(481060),
  u = n(287734),
  d = n(872810),
  f = n(393238),
  _ = n(40851),
  p = n(607070),
  h = n(258609),
  g = n(102172),
  m = n(210887),
  E = n(592125),
  v = n(430824),
  b = n(496675),
  y = n(979651),
  O = n(617136),
  S = n(113434),
  I = n(497505),
  T = n(475595),
  N = n(602667),
  A = n(644646),
  C = n(667105),
  R = n(341907),
  P = n(46140),
  D = n(981631),
  w = n(231338),
  L = n(388032),
  x = n(624978);

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
let k = "4px",
  U = "11px",
  G = 222;

function B(e, t) {
  return null != e && null != t && (0, g.p9)(t, y.Z, v.Z, b.Z, h.Z)[0]
}

function F(e) {
  var t, n, h, g, v;
  let {
    quest: b,
    memberListItemRef: y,
    applicationStream: N,
    position: M,
    closePopout: j,
    updatePosition: F,
    impressionRef: V
  } = e, Z = (0, s.e7)([E.Z], () => {
    var e;
    return null !== (e = E.Z.getChannel(null == N ? void 0 : N.channelId)) && void 0 !== e ? e : null
  }), H = (0, C.hf)({
    quest: b,
    location: I.jn.MEMBERS_LIST
  }), W = (0, S.tP)(b), Y = (null == b ? void 0 : null === (t = b.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, K = (null == b ? void 0 : null === (n = b.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, z = (null == b ? void 0 : null === (h = b.userStatus) || void 0 === h ? void 0 : h.completedAt) != null, q = (0, s.e7)([m.Z], () => m.Z.getState().theme), Q = (0, l.wj)(q) ? w.BR.DARK : w.BR.LIGHT, X = (0, s.e7)([p.Z], () => p.Z.useReducedMotion), {
    ref: J,
    height: $
  } = (0, f.Z)(), [ee, et] = i.useState(X), en = (0, _.Aq)(), er = (0, a.eg)();
  i.useEffect(() => {
    let e = er.current;
    return null == e || e.addEventListener("scroll", j), () => {
      null == e || e.removeEventListener("scroll", j)
    }
  }, [j, er]), i.useEffect(() => {
    let e = er.current,
      t = y.current;
    if (null == e || null == t) return;
    let n = new MutationObserver(() => F());
    return n.observe(e, {
      childList: !0,
      subtree: !0
    }), () => {
      n.disconnect()
    }
  }, [y, er, F]);
  let ei = (0, c.q_F)({
      from: {
        height: 0
      },
      height: null != $ ? $ : 0,
      config: {
        tension: 450,
        friction: 45
      },
      onRest: () => et(!0)
    }),
    eo = (0, c.Yzy)(ee, {
      from: {
        opacity: 0,
        scale: 0
      },
      enter: {
        opacity: 1,
        scale: 1
      }
    }),
    ea = () => {
      en.dispatch(D.CkL.POPOUT_CLOSE)
    },
    es = "top" === M ? "".concat(k, " ").concat(k, " 0 0") : "0 0 ".concat(k, " ").concat(k);
  if (null == b || W || Y && !B(N, Z)) return null;
  let el = () => {
      (0, O._3)({
        questId: b.id,
        questContent: I.jn.MEMBERS_LIST,
        questContentCTA: O.jZ.OPEN_DISCLOSURE,
        trackGuildAndChannelMetadata: !0
      }), (0, R.openDisclosureModal)(b, {
        content: I.jn.MEMBERS_LIST,
        ctaContent: O.jZ.OPEN_DISCLOSURE
      })
    },
    ec = () => {
      (0, O._3)({
        questId: b.id,
        questContent: I.jn.MEMBERS_LIST,
        questContentCTA: O.jZ.LEARN_MORE,
        trackGuildAndChannelMetadata: !0
      }), (0, R.navigateToQuestHome)({
        fromContent: I.jn.MEMBERS_LIST,
        questId: b.id
      })
    },
    eu = e => {
      e.stopPropagation(), el()
    },
    ed = () => {
      if (B(N, Z) && null != Z) return (0, O._3)({
        questId: b.id,
        questContent: I.jn.MEMBERS_LIST,
        questContentCTA: O.jZ.WATCH_STREAM,
        trackGuildAndChannelMetadata: !0
      }), u.default.selectVoiceChannel(Z.id), (0, d.iV)(N);
      ec()
    },
    ef = z && !Y ? {
      headerText: L.NW.string(L.t.gHerLS),
      ctaText: L.NW.string(L.t.cfY4PD),
      handleClickCta: H,
      tileAssetType: "reward"
    } : K && !Y ? {
      headerText: L.NW.string(L.t.uH2sf3),
      ctaText: L.NW.string(L.t.VN1Ajo),
      handleClickCta: ec,
      tileAssetType: "reward"
    } : B(N, Z) ? {
      headerText: L.NW.string(L.t.Bz6SkJ),
      ctaText: L.NW.string(L.t.BXFP39),
      handleClickCta: ed,
      tileAssetType: "game"
    } : {
      headerText: L.NW.string(L.t.Bz6SkJ),
      ctaText: L.NW.string(L.t.BSXPZ2),
      handleClickCta: ec,
      tileAssetType: "game"
    };
  return (0, r.jsx)(o.animated.div, {
    ref: e => {
      V.current = e
    },
    "aria-expanded": ee,
    className: x.wrapper,
    style: {
      width: null !== (v = null === (g = y.current) || void 0 === g ? void 0 : g.clientWidth) && void 0 !== v ? v : G,
      height: ei.height,
      overflow: ee ? "visible" : "hidden",
      borderRadius: es
    },
    children: (0, r.jsxs)("div", {
      ref: e => {
        J.current = e
      },
      className: x.container,
      style: {
        borderRadius: es
      },
      children: [(0, r.jsxs)("div", {
        className: x.top,
        children: [(0, r.jsxs)("div", {
          className: x.left,
          children: [(0, r.jsx)(c.X6q, {
            variant: "heading-sm/semibold",
            children: ef.headerText
          }), (0, r.jsxs)(c.P3F, {
            className: x.help,
            onClick: e => {
              ea(), eu(e)
            },
            children: [(0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "text-muted",
              className: x.helpText,
              children: L.NW.format(L.t["Lm8/mJ"], {
                gamePublisher: b.config.messages.gamePublisher
              })
            }), (0, r.jsx)(c.idN, {
              size: "custom",
              className: x.helpIcon,
              width: U,
              height: U,
              color: c.TVs.colors.INTERACTIVE_NORMAL
            })]
          })]
        }), (0, r.jsx)("div", {
          className: x.right,
          children: (0, r.jsxs)("div", {
            className: x.imgWrapper,
            children: [eo((e, t) => t && (0, r.jsx)(o.animated.div, {
              style: e,
              className: x.imgUnderlay
            })), "game" === ef.tileAssetType && (0, r.jsx)("img", {
              alt: L.NW.formatToPlainString(L.t.IskzPj, {
                gameTitle: b.config.messages.gameTitle,
                gamePublisher: b.config.messages.gamePublisher
              }),
              className: x.assetTile,
              src: (0, T.fh)(b, T.eC.GAME_TILE, Q).url
            }), "reward" === ef.tileAssetType && (0, r.jsx)(A.Z, {
              className: x.assetTile,
              quest: b,
              questContent: I.jn.MEMBERS_LIST,
              learnMoreStyle: "icon",
              location: P.dr.MEMBERS_LIST,
              onClick: ea
            })]
          })
        })]
      }), (0, r.jsx)(c.zxk, {
        onClick: () => {
          ea(), ef.handleClickCta()
        },
        color: c.zxk.Colors.CUSTOM,
        className: x.ctaButton,
        children: ef.ctaText
      })]
    })
  })
}

function V(e) {
  return null == e.quest ? null : (0, r.jsx)(N.A, {
    questOrQuests: e.quest,
    questContent: I.jn.MEMBERS_LIST,
    trackGuildAndChannelMetadata: !0,
    children: t => (0, r.jsx)(F, j({
      impressionRef: t
    }, e))
  })
}