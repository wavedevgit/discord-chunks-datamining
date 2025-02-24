/** Chunk was on 1272 **/
n.d(t, {
  Z: () => em
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(232713),
  s = n(990547),
  c = n(91192),
  u = n(873546),
  d = n(442837),
  p = n(704215),
  h = n(952265),
  f = n(481060),
  g = n(493683),
  m = n(529103),
  b = n(607070),
  _ = n(213609),
  E = n(415439),
  O = n(143757),
  N = n(463119),
  v = n(377171),
  y = n(540059),
  I = n(243778),
  C = n(488634),
  S = n(899740),
  T = n(28476),
  P = n(880257),
  j = n(631885),
  A = n(849862),
  Z = n(522558),
  x = n(795448),
  L = n(441623),
  w = n(457396),
  R = n(108989),
  D = n(51596),
  k = n(905423),
  M = n(155409),
  U = n(210887),
  G = n(695346),
  W = n(822857),
  V = n(856555),
  B = n(283595),
  H = n(923834),
  F = n(55563),
  z = n(774343),
  Y = n(626135),
  K = n(814225),
  q = n(515753),
  Q = n(831218),
  X = n(339149),
  J = n(981631),
  $ = n(675654),
  ee = n(474936),
  et = n(388032),
  en = n(248729);

function er(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function ei(e, t) {
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

function el(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
let eo = e => {
    var {
      selected: t
    } = e, n = el(e, ["selected"]);
    let l = (0, c.JA)("friends"),
      o = (0, A.If)(),
      a = (0, d.e7)([L.Z], () => L.Z.canShowFriendsTabBadge()),
      u = (0, d.e7)([b.Z], () => b.Z.useReducedMotion),
      {
        enabled: p
      } = Z.w.useExperiment({
        location: "Friends Tab"
      }, {
        autoTrackExposure: !1
      }),
      h = a && p;
    i.useEffect(() => {
      h && (0, _.h)({
        name: s.ImpressionNames.GIFT_INTENT_BADGE,
        type: s.ImpressionTypes.VIEW,
        properties: {
          gift_intent_type: ee.hX.FRIEND_ANNIVERSARY
        }
      })
    }, [h]);
    let [g, E] = i.useState(!1);
    return (0, r.jsxs)("div", {
      className: en.friendsButtonContainer,
      children: [(0, r.jsx)(q.Qj, ei(er({
        onClick: () => {
          h && (Y.default.track(J.rMx.GIFT_INTENT_BADGE_CLICKED, {
            gift_intent_type: ee.hX.FRIEND_ANNIVERSARY
          }), m.Z.setSection(J.pJs.ALL), (0, x.Gk)())
        },
        interactiveClassName: h ? en.friendsBadge : void 0,
        selected: t,
        route: J.Z5c.FRIENDS,
        icon: f.iFz,
        text: et.NW.string(et.t.TdEu5e),
        onMouseEnter: () => {
          E(!0)
        },
        onMouseLeave: () => {
          E(!1)
        }
      }, n, l), {
        children: o > 0 ? (0, r.jsx)(f.mAB, {
          count: o
        }) : null
      })), h && !u && (0, r.jsx)(R.Z, {
        className: en.confetti,
        wind: 0,
        sprites: $.CA,
        spriteColors: $.Br,
        firing: g,
        confettiConfig: {
          opacity: {
            type: "static",
            value: 1
          },
          dragCoefficient: {
            type: "static",
            value: {
              x: 100,
              y: 100
            }
          }
        }
      })]
    })
  },
  ea = e => {
    var {
      selected: t,
      hideGameUpdateProgressIndicator: n
    } = e, i = el(e, ["selected", "hideGameUpdateProgressIndicator"]);
    let l = (0, c.JA)("library");
    return (0, r.jsx)(q.Qj, ei(er({
      selected: t,
      route: J.Z5c.APPLICATION_LIBRARY,
      icon: f.vqy,
      text: et.NW.string(et.t.cw57am)
    }, i, l), {
      children: (0, r.jsx)(X.Z, {
        className: o()(en.downloadProgressCircle, {
          [en.hideGameUpdateProgressIndicator]: n
        })
      })
    }))
  },
  es = () => {
    let e = (0, S.q)();
    return e > 0 ? (0, r.jsx)(f.mAB, {
      count: e
    }) : null
  },
  ec = e => {
    let {
      selected: t
    } = e, n = (0, c.JA)("messageRequests"), {
      channelId: i
    } = (0, C._)();
    if (!(0, T.a)()) return null;
    let l = null == i ? void 0 : () => g.Z.preload(J.ME, i);
    return (0, r.jsx)(q.Qj, ei(er({
      selected: t,
      route: J.Z5c.MESSAGE_REQUESTS,
      icon: f._XJ,
      text: et.NW.string(et.t.e7GWjY),
      onClick: l
    }, n), {
      children: (0, r.jsx)(es, {})
    }))
  },
  eu = e => {
    let {
      selected: t
    } = e, n = et.NW.string(et.t.Rkdixs), l = (0, c.JA)("family-center"), [o, a] = i.useState(!0);
    return (0, r.jsx)(q.Qj, ei(er({
      selected: t,
      route: J.Z5c.FAMILY_CENTER,
      icon: f.BFJ,
      text: n,
      onMouseEnter: () => {
        a(!0)
      },
      onMouseLeave: () => {
        a(!1)
      },
      interactiveClassName: en.familyCenterLinkButton
    }, l), {
      children: (0, r.jsx)(ed, {
        isParentHovered: o
      })
    }))
  },
  ed = e => {
    let {
      isParentHovered: t
    } = e, i = (0, j.gU)();
    return t ? (0, r.jsx)(q.PZ, {
      onClick: () => {
        (0, h.ZD)(async () => {
          let {
            default: e
          } = await n.e("44153").then(n.bind(n, 760949));
          return t => (0, r.jsx)(e, er({}, t))
        })
      },
      "aria-label": et.NW.string(et.t.cpT0Cg)
    }) : i > 0 ? (0, r.jsx)("div", {
      className: en.familyCenterPendingBadge,
      children: (0, r.jsx)(f.mAB, {
        count: i
      })
    }) : (0, r.jsx)(I.ZP, {
      contentTypes: [p.z.FAMILY_CENTER_NEW_BADGE],
      children: e => {
        let {
          visibleContent: t
        } = e;
        return t === p.z.FAMILY_CENTER_NEW_BADGE ? (0, r.jsx)(f.IGR, {
          text: et.NW.string(et.t.y2b7CA),
          color: v.Z.BG_BRAND
        }) : null
      }
    })
  },
  ep = () => (0, D.$Z)("DM_SEARCH");

function eh(e) {
  switch (e) {
    case J.Z5c.APPLICATION_LIBRARY:
      return J.ZY5.LIBRARY;
    case J.Z5c.FRIENDS:
      return J.ZY5.FRIENDS_LIST;
    case J.Z5c.COLLECTIBLES_SHOP:
      return J.ZY5.COLLECTIBLES_SHOP
  }
  return e.startsWith(J.Z5c.APPLICATION_STORE) ? e === J.Z5c.APPLICATION_STORE ? J.ZY5.STORE_DIRECTORY_HOME : e.startsWith(J.Z5c.APPLICATION_STORE) ? J.ZY5.STORE_DIRECTORY_BROWSE : J.ZY5.STORE_LISTING : J.ZY5.DM_CHANNEL
}
let ef = i.memo(function(e) {
  let {
    showLibrary: t,
    hasLibraryApplication: n,
    homeLink: l,
    premiumTabSelected: a,
    isVisualRefreshEnabled: s,
    shouldShowNitroTab: c,
    shouldShowMessageRequestsRow: d,
    shouldShowFamilyCenterRow: p,
    shouldShowQuickLauncherRow: h,
    selectedChannelId: g,
    path: m
  } = e, {
    enabled: b
  } = (0, W.W)({
    location: "PrivateChannels"
  }), _ = i.useRef(null), E = i.useRef(null), {
    shouldShow: v,
    closeCoachmarkIfOpen: y,
    onHandleScroll: I,
    offsetControlRef: C
  } = (0, V.EQ)({
    isVirtualCurrencyEnabled: b,
    listScrollerRef: E
  });
  return (0, r.jsxs)("nav", {
    className: en.privateChannels,
    "aria-label": et.NW.string(et.t.ZH9aPz),
    children: [(0, r.jsx)(M.Z, {
      tutorialId: "direct-messages",
      position: "right",
      offsetX: -52,
      children: (0, r.jsx)("div", {
        className: o()(en.searchBar, {
          [en.themedHeaderMobile]: u.tq
        }),
        children: s ? (0, r.jsx)(f.zxk, {
          grow: !0,
          color: f.zxk.Colors.PRIMARY,
          size: f.zxk.Sizes.SMALL,
          fullWidth: !0,
          onClick: ep,
          children: et.NW.string(et.t.LzcpeX)
        }) : (0, r.jsx)("button", {
          type: "button",
          className: o()(en.searchBarComponent, {
            [en.themedSearchBarMobile]: u.tq
          }),
          onClick: ep,
          children: et.NW.string(et.t.LzcpeX)
        })
      })
    }), (0, r.jsxs)(Q.Z, ei(er({}, e), {
      version: m,
      selectedChannelId: g,
      showDMHeader: !0,
      listScrollerRef: E,
      onHandleScroll: v ? I : void 0,
      children: [(0, r.jsx)(eo, {
        selected: null != m ? m === J.Z5c.FRIENDS : l === J.Z5c.FRIENDS
      }, "friends"), n && t ? (0, r.jsx)(ea, {
        selected: null == m ? null != l && l.startsWith(J.Z5c.APPLICATION_LIBRARY) : m.startsWith(J.Z5c.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: l === J.Z5c.APPLICATION_LIBRARY
      }, "library") : null, d ? (0, r.jsx)(ec, {
        selected: null == m ? null != l && l.startsWith(J.Z5c.MESSAGE_REQUESTS) : m === J.Z5c.MESSAGE_REQUESTS
      }, "message-requests") : null, c ? (0, r.jsx)(w.g, {
        selected: null == m ? a : m.startsWith(J.Z5c.APPLICATION_STORE),
        route: J.Z5c.APPLICATION_STORE,
        locationState: {
          analyticsSource: {
            page: eh(l),
            section: J.jXE.NAVIGATION,
            object: J.qAy.NAVIGATION_LINK
          }
        }
      }, "premium") : null, (0, r.jsx)(N.i, {
        selected: m === J.Z5c.COLLECTIBLES_SHOP || (null == l ? void 0 : l.startsWith(J.Z5c.COLLECTIBLES_SHOP)),
        listItemRef: _,
        onClick: y,
        locationState: {
          analyticsSource: {
            page: eh(l),
            section: J.jXE.NAVIGATION,
            object: J.qAy.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), v ? (0, r.jsx)(V.ZP, {
        backgroundElementRef: _,
        onClose: y,
        offsetControlRef: C,
        renderTail: !0
      }) : null, p ? (0, r.jsx)(eu, {
        selected: null != l && l.startsWith(J.Z5c.FAMILY_CENTER) || null != m && m.startsWith(J.Z5c.FAMILY_CENTER)
      }, "family-center") : null, s ? (0, r.jsx)(eg, {}, "section-divider-top") : null, h ? (0, r.jsx)(O.Z, {
        bottomDivider: s ? (0, r.jsx)(eg, {}) : null
      }, "dm-quick-launcher") : null]
    }))]
  })
});

function eg() {
  return (0, r.jsx)("div", {
    className: en.sectionDivider
  })
}

function em() {
  let e = (0, d.e7)([z.Z], () => z.Z.getHomeLink()),
    t = (0, d.e7)([F.Z], () => {
      if (e === J.Z5c.APPLICATION_STORE) return !0;
      let t = (0, K.ZK)(e);
      if (null != t) {
        var n, r;
        return null !== (r = null === (n = F.Z.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== r && r
      }
      return !1
    }, [e]),
    n = !G.bm.useSetting(),
    {
      theme: i
    } = (0, d.cj)([U.Z], () => ({
      theme: U.Z.theme
    })),
    l = (0, d.e7)([B.Z], () => B.Z.hasLibraryApplication()),
    o = (0, d.e7)([H.Z], () => H.Z.getCurrentPath()),
    s = (0, y.Q3)("PrivateChannels"),
    [c, u] = (0, k.Z)(e => {
      let {
        channelId: t,
        path: n
      } = e;
      return [t, n]
    }, a.X),
    p = (0, w.i)({
      selected: null == u ? t : u.startsWith(J.Z5c.APPLICATION_STORE)
    }),
    h = (0, T.a)(),
    f = function() {
      let e = G.Ex.useSetting(),
        t = (0, P.Z)();
      return !0 === e && !0 === t
    }(),
    g = (0, E.FW)();
  return (0, r.jsx)(ef, {
    theme: i,
    showLibrary: n,
    hasLibraryApplication: l,
    storeLink: o,
    homeLink: e,
    premiumTabSelected: t,
    isVisualRefreshEnabled: s,
    shouldShowNitroTab: p,
    shouldShowMessageRequestsRow: h,
    shouldShowFamilyCenterRow: f,
    shouldShowQuickLauncherRow: g,
    selectedChannelId: c,
    path: u
  })
}