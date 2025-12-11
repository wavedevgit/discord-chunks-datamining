/** Chunk was on 1272 **/
/** chunk id: 791250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eA,
  d: () => ex
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk828700 = require("./828700.js"),
  Chunk55160 = require("./55160.js"),
  Chunk990547 = require("./990547.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk970683 = require("./970683.js"),
  Chunk952265 = require("./952265.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk529103 = require("./529103.js"),
  Chunk515753 = require("./515753.jsx"),
  Chunk831218 = require("./831218.jsx"),
  Chunk339149 = require("./339149.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk557968 = require("./557968.js"),
  Chunk213609 = require("./213609.js"),
  Chunk463119 = require("./463119.jsx"),
  Chunk211644 = require("./211644.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk702456 = require("./702456.jsx"),
  Chunk518311 = require("./518311.jsx"),
  Chunk518929 = require("./518929.js"),
  Chunk488634 = require("./488634.js"),
  Chunk899740 = require("./899740.js"),
  Chunk28476 = require("./28476.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk365113 = require("./365113.js"),
  Chunk849862 = require("./849862.js"),
  Chunk522558 = require("./522558.js"),
  Chunk441623 = require("./441623.js"),
  Chunk382834 = require("./382834.jsx"),
  Chunk675957 = require("./675957.js"),
  Chunk93237 = require("./93237.js"),
  Chunk138176 = require("./138176.jsx"),
  Chunk457396 = require("./457396.jsx"),
  Chunk108989 = require("./108989.jsx"),
  Chunk222850 = require("./222850.jsx"),
  Chunk51596 = require("./51596.js"),
  Chunk905423 = require("./905423.js"),
  Chunk155409 = require("./155409.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk695346 = require("./695346.js"),
  Chunk283595 = require("./283595.js"),
  Chunk923834 = require("./923834.js"),
  Chunk55563 = require("./55563.js"),
  Chunk774343 = require("./774343.js"),
  Chunk974042 = require("./974042.js"),
  Chunk626135 = require("./626135.js"),
  Chunk814225 = require("./814225.js"),
  Chunk981631 = require("./981631.js"),
  Chunk675654 = require("./675654.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk372807 = require("./372807.js"),
  Chunk497725 = require("./497725.js");

function eh(e) {
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

function em(e, t) {
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

function eb(e, t) {
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
let e_ = e => {
    var {
      selected: t
    } = e, n = eb(e, ["selected"]);
    let i = (0, w.b5)("PrivateChannels.ICYMIButton"),
      l = (0, u.JA)("icymi");
    return i ? (0, r.jsx)("div", {
      className: eg.friendsButtonContainer,
      children: (0, r.jsx)(y.Qj, eh({
        selected: t,
        route: eo.Z5c.ICYMI,
        icon: E.qOE,
        text: (0, r.jsxs)(r.Fragment, {
          children: [ep.intl.string(ep.t["jnXV/V"]), (0, r.jsx)("span", {
            className: eg.preAlphaText,
            children: ep.intl.string(ep.t.Ac2OZA)
          })]
        })
      }, n, l))
    }) : null
  },
  eE = e => {
    var {
      selected: t
    } = e, n = eb(e, ["selected"]);
    let l = (0, u.JA)("friends"),
      a = (0, G.If)(),
      s = (0, p.e7)([H.ZP], () => H.ZP.canShowFriendsTabBadge()),
      o = (0, p.e7)([S.Z], () => S.Z.useReducedMotion),
      {
        enabled: d
      } = B.w.useConfig({
        location: "Friends Tab"
      }),
      [g, m] = (0, x.bf)(s && d ? f.z.GIFTING_INTENT_FRIENDS_TAB_BADGE : null, {
        cooldownDurationMs: H.n3
      }),
      b = g === f.z.GIFTING_INTENT_FRIENDS_TAB_BADGE;
    i.useEffect(() => {
      b && (0, N.h)({
        name: c.ImpressionNames.GIFT_INTENT_BADGE,
        type: c.ImpressionTypes.VIEW,
        properties: {
          gift_intent_type: ed.hX.FRIEND_ANNIVERSARY
        }
      })
    }, [b]);
    let O = () => {
        let e;
        b ? (ea.default.track(eo.rMx.GIFT_INTENT_BADGE_CLICKED, {
          gift_intent_type: ed.hX.FRIEND_ANNIVERSARY
        }), e = eo.pJs.ALL, v.Z.setSection(eo.pJs.ALL), m(eu.L.TAKE_ACTION)) : e = el.ZP.getState().section, (0, T.Z)({
          tab_opened: e
        })
      },
      [I, C] = i.useState(false),
      j = () => {
        C(false)
      },
      P = () => {
        C(true)
      },
      A = () => (0, r.jsx)(y.Qj, em(eh({
        onClick: O,
        interactiveClassName: b ? eg.friendsBadge : true,
        selected: t,
        route: eo.Z5c.FRIENDS,
        icon: E.iFz,
        text: ep.intl.string(ep.t.TdEu5X),
        onMouseEnter: P,
        onMouseLeave: j
      }, n, l), {
        children: a > 0 ? (0, r.jsx)(E.mAB, {
          count: a
        }) : null
      }));
    return (0, r.jsx)("div", {
      className: eg.friendsButtonContainer,
      children: b ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(_.i_, {
          title: ep.intl.string(ep.t.Thb5MO),
          body: ep.intl.string(ep.t.kGvgwS),
          position: "left",
          asset: (0, r.jsx)(h._N, {
            size: 32,
            alt: ep.intl.string(ep.t["4LohBA"])
          }),
          children: A()
        }), !o && (0, r.jsx)(q.Z, {
          className: eg.confetti,
          wind: 0,
          sprites: ec.CA,
          spriteColors: ec.Br,
          firing: I,
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
      }) : A()
    })
  },
  eO = e => {
    var {
      selected: t
    } = e, n = eb(e, ["selected"]);
    let i = (0, u.JA)("activity");
    return (0, r.jsx)("div", {
      className: eg.friendsButtonContainer,
      children: (0, r.jsx)(y.Qj, eh({
        selected: t,
        route: eo.Z5c.ME_ACTIVITY,
        icon: E.g8d,
        text: ep.intl.string(ep.t.IC5Ann)
      }, n, i))
    })
  },
  ev = e => {
    var {
      selected: t,
      hideGameUpdateProgressIndicator: n
    } = e, i = eb(e, ["selected", "hideGameUpdateProgressIndicator"]);
    let l = (0, u.JA)("library");
    return (0, r.jsx)(y.Qj, em(eh({
      selected: t,
      route: eo.Z5c.APPLICATION_LIBRARY,
      icon: E.vqy,
      text: ep.intl.string(ep.t.cw57ar)
    }, i, l), {
      children: (0, r.jsx)(C.Z, {
        className: a()(eg.downloadProgressCircle, {
          [eg.hideGameUpdateProgressIndicator]: n
        })
      })
    }))
  },
  ey = () => {
    let e = (0, Chunk899740.q)();
    return module > 0 ? (0, Chunk54381.jsx)(Chunk481060.mAB, {
      count: module
    }) : null
  },
  eI = e => {
    let {
      selected: t
    } = e, n = (0, u.JA)("messageRequests"), {
      channelId: i
    } = (0, L._)();
    if (!(0, D.a)()) return null;
    let l = null == i ? true : () => O.Z.preload(eo.ME, i);
    return (0, r.jsx)(y.Qj, em(eh({
      selected: t,
      route: eo.Z5c.MESSAGE_REQUESTS,
      icon: E._XJ,
      text: ep.intl.string(ep.t.e7GWjQ),
      onClick: l
    }, n), {
      children: (0, r.jsx)(ey, {})
    }))
  },
  eC = e => {
    let {
      selected: t
    } = e, n = ep.intl.string(ef.default.Rkdixs), l = (0, u.JA)("family-center"), [a, s] = i.useState(true);
    return (0, r.jsx)(y.Qj, em(eh({
      selected: t,
      route: eo.Z5c.FAMILY_CENTER,
      icon: E.BFJ,
      text: n,
      onMouseEnter: () => {
        s(true)
      },
      onMouseLeave: () => {
        s(false)
      },
      interactiveClassName: eg.familyCenterLinkButton
    }, l), {
      children: (0, r.jsx)(eS, {
        isParentHovered: a
      })
    }))
  },
  eS = e => {
    let {
      isParentHovered: t
    } = e, i = (0, k.gU)();
    return t ? (0, r.jsx)("div", {
      className: eg.familyCenterButtonContainer,
      children: (0, r.jsx)(y.bU, {
        onClick: () => {
          (0, m.openModalLazy)(async () => {
            let {
              default: e
            } = await n.e("44153").then(n.bind(n, 760949));
            return t => (0, r.jsx)(e, eh({}, t))
          })
        },
        "aria-label": ep.intl.string(ep.t.cpT0Cq),
        icon: E.Dio
      })
    }) : i > 0 ? (0, r.jsx)("div", {
      className: a()(eg.familyCenterButtonContainer, eg.withPadding),
      children: (0, r.jsx)(E.mAB, {
        count: i
      })
    }) : (0, r.jsx)("div", {
      className: eg.familyCenterButtonContainer,
      children: (0, r.jsx)(x.ZP, {
        contentTypes: [f.z.FAMILY_CENTER_NEW_BADGE],
        children: e => {
          let {
            visibleContent: t
          } = e;
          return t === f.z.FAMILY_CENTER_NEW_BADGE ? (0, r.jsx)(E.IGR, {
            text: ep.intl.string(ep.t.y2b7CA),
            color: g.Z.colors.BACKGROUND_BRAND.css
          }) : null
        }
      })
    })
  },
  eT = () => (0, Chunk54381.jsxs)("div", {
    className: Chunk497725.directMessagesHeader,
    children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/semibold",
      children: Chunk388032.intl.string(Chunk388032.t.YUU0RF)
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk497725.directMessagesButton,
      children: (0, Chunk54381.jsx)(Chunk518311.Z, {
        tooltip: Chunk388032.intl.string(Chunk388032.t["6Urw1t"]),
        location: "DirectMessagesHeader-CreateDMButton"
      })
    })]
  }),
  eN = () => (0, Chunk51596.$Z)("DM_SEARCH");

function ej(e) {
  switch (e) {
    case eo.Z5c.APPLICATION_LIBRARY:
      return eo.ZY5.LIBRARY;
    case eo.Z5c.FRIENDS:
      return eo.ZY5.FRIENDS_LIST;
    case eo.Z5c.COLLECTIBLES_SHOP:
      return eo.ZY5.COLLECTIBLES_SHOP
  }
  return e.startsWith(eo.Z5c.APPLICATION_STORE) ? e === eo.Z5c.APPLICATION_STORE ? eo.ZY5.STORE_DIRECTORY_HOME : e.startsWith(eo.Z5c.APPLICATION_STORE) ? eo.ZY5.STORE_DIRECTORY_BROWSE : eo.ZY5.STORE_LISTING : eo.ZY5.DM_CHANNEL
}
let eP = Chunk473749.memo(function(e) {
  let {
    showLibrary: t,
    hasLibraryApplication: n,
    homeLink: l,
    premiumTabSelected: s,
    shouldShowNitroTab: o,
    showReferralProgramPopover: c,
    showRecurring3PPopover: u,
    shouldShowMessageRequestsRow: p,
    shouldShowFamilyCenterRow: f,
    selectedChannelId: g,
    path: h,
    onlyShowDMs: m,
    hideAllDMs: _
  } = e, O = i.useRef(null), v = i.useRef(null), y = i.useRef(null), C = i.useRef(null), S = U.o.useConfig({
    location: "privatechannels"
  }).friendsTab, T = (0, w.b5)("PrivateChannels"), N = null;
  return c ? N = (0, r.jsx)(Y.F, {
    targetElementRef: C
  }) : u && (N = (0, r.jsx)(V.d, {
    targetElementRef: C
  })), (0, r.jsxs)("nav", {
    className: eg.privateChannels,
    "aria-label": ep.intl.string(ep.t.ZH9aP4),
    children: [m ? (0, r.jsx)(eT, {}) : (0, r.jsx)(X.Z, {
      childRef: O,
      tutorialId: "direct-messages",
      position: "right",
      offsetX: false,
      children: (0, r.jsx)("div", {
        ref: O,
        className: a()(eg.searchBar, {
          [eg.themedHeaderMobile]: d.tq
        }),
        children: (0, r.jsx)(E.Button, {
          fullWidth: true,
          variant: "secondary",
          size: "sm",
          onClick: eN,
          text: ep.intl.format(ep.t.fH9FBy, {
            tooltipHook: (e, t) => (0, r.jsx)(b.Z, {
              children: e
            }, t)
          })
        })
      })
    }), (0, r.jsxs)(I.Z, em(eh({}, e), {
      version: h,
      selectedChannelId: g,
      showDMHeader: !_ && !m,
      hideAllDMs: _,
      listScrollerRef: y,
      children: [S && !m ? (0, r.jsx)(eO, {
        selected: null != h ? h === eo.Z5c.ME_ACTIVITY : l === eo.Z5c.ME_ACTIVITY
      }, "activity_experimental") : null, m ? null : (0, r.jsx)(eE, {
        selected: null != h ? h === eo.Z5c.FRIENDS : l === eo.Z5c.FRIENDS
      }, "friends"), !m && T ? (0, r.jsx)(e_, {
        selected: null != h ? h === eo.Z5c.ICYMI : l === eo.Z5c.ICYMI
      }, "icymi") : null, n && t && !m ? (0, r.jsx)(ev, {
        selected: null == h ? null != l && l.startsWith(eo.Z5c.APPLICATION_LIBRARY) : h.startsWith(eo.Z5c.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: l === eo.Z5c.APPLICATION_LIBRARY
      }, "library") : null, p && !m ? (0, r.jsx)(eI, {
        selected: null == h ? null != l && l.startsWith(eo.Z5c.MESSAGE_REQUESTS) : h === eo.Z5c.MESSAGE_REQUESTS
      }, "message-requests") : null, o && !m ? (0, r.jsxs)("div", {
        children: [(0, r.jsx)(W.g, {
          nitroTabButtonRef: C,
          selected: null == h ? s : h.startsWith(eo.Z5c.APPLICATION_STORE),
          route: eo.Z5c.APPLICATION_STORE,
          locationState: {
            analyticsSource: {
              page: ej(l),
              section: eo.jXE.NAVIGATION,
              object: eo.qAy.NAVIGATION_LINK
            }
          }
        }), N]
      }, "nitro-tab-group") : null, m ? null : (0, r.jsx)(j.i, {
        selected: h === eo.Z5c.COLLECTIBLES_SHOP || (null == l ? true : l.startsWith(eo.Z5c.COLLECTIBLES_SHOP)),
        listItemRef: v,
        locationState: {
          analyticsSource: {
            page: ej(l),
            section: eo.jXE.NAVIGATION,
            object: eo.qAy.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), f && !m ? (0, r.jsx)(eC, {
        selected: null != l && l.startsWith(eo.Z5c.FAMILY_CENTER) || null != h && h.startsWith(eo.Z5c.FAMILY_CENTER)
      }, "family-center") : null, m ? null : (0, r.jsx)(K.Z, {
        selected: null == h ? null != l && l.startsWith(eo.Z5c.QUEST_HOME_V2) : h === eo.Z5c.QUEST_HOME_V2
      }, "quests"), m || _ ? null : (0, r.jsx)(ex, {}, "section-divider-top"), _ ? null : (0, r.jsx)(A.Z, {}, "frequent-friends")]
    }))]
  })
});

function ex() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk497725.sectionDivider
  })
}

function eA() {
  let e = (0, Chunk442837.e7)([Chunk774343.Z], () => Chunk774343.Z.getHomeLink()),
    t = (0, Chunk442837.e7)([Chunk55563.Z], () => {
      if (module === Chunk981631.Z5c.APPLICATION_STORE) returntrue;
      let t = (0, Chunk814225.ZK)(module);
      if (null != exports) {
        var n, r;
        return null != (r = null == (n = Chunk55563.Z.get(exports)) ? true : require.premium) && Chunk54381
      }
      returnfalse
    }, [module]),
    n = !Chunk695346.bm.useSetting(),
    {
      theme: i
    } = (0, Chunk442837.cj)([Chunk210887.Z], () => ({
      theme: Chunk210887.Z.theme
    })),
    l = (0, Chunk442837.e7)([Chunk283595.Z], () => Chunk283595.Z.hasLibraryApplication()),
    a = (0, Chunk442837.e7)([Chunk923834.Z], () => Chunk923834.Z.getCurrentPath()),
    [c, u] = (0, Chunk905423.Z)(e => {
      let {
        channelId: t,
        path: n
      } = e;
      return [t, n]
    }, Chunk55160.X),
    d = (0, Chunk457396.i)({
      selected: null == Chunk91192 ? exports : Chunk91192.startsWith(Chunk981631.Z5c.APPLICATION_STORE)
    }),
    g = (0, Chunk93237.eW)(),
    h = (0, Chunk675957._h)(),
    m = [];
  (0, Chunk211644.Kl)() && (Chunk692547 && Chunk952265.push(Chunk704215.z.REFERRAL_PROGRAM_POPOVER), Chunk970683 && Chunk952265.push(Chunk704215.z.RECURRING_3P_PROMOTION_POPOVER));
  let [b, _] = (0, Chunk243778.US)(Chunk952265, true, true), E = (0, Chunk28476.a)(), O = function() {
    let e = Chunk695346.Ex.useSetting(),
      t = (0, Chunk880257.Z)();
    returntrue === module && true === exports
  }(), {
    pathname: v
  } = (0, Chunk828700.TH)(), y = Chunk529103.startsWith(Chunk981631.Z5c.CHANNEL(Chunk981631.ME)) && Chunk529103 !== Chunk981631.Z5c.CHANNEL(Chunk981631.ME) && Chunk529103 !== Chunk981631.Z5c.ME_ACTIVITY, I = Chunk365113.o.useConfig({
    location: "privatechannels"
  }).dmsTab;
  return (0, Chunk54381.jsx)(eP, {
    theme: Chunk473749,
    showLibrary: require,
    hasLibraryApplication: Chunk120356,
    storeLink: a,
    homeLink: module,
    premiumTabSelected: exports,
    shouldShowNitroTab: Chunk873546,
    showReferralProgramPopover: Chunk194983 === Chunk704215.z.REFERRAL_PROGRAM_POPOVER,
    showRecurring3PPopover: Chunk194983 === Chunk704215.z.RECURRING_3P_PROMOTION_POPOVER,
    shouldShowMessageRequestsRow: Chunk481060,
    shouldShowFamilyCenterRow: Chunk493683,
    selectedChannelId: Chunk990547,
    path: Chunk91192,
    onlyShowDMs: Chunk515753 && Chunk831218,
    hideAllDMs: !Chunk515753 && Chunk831218
  })
}