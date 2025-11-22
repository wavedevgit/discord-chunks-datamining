/** Chunk was on 1272 **/
/** chunk id: 791250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eL,
  d: () => ew
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
  Chunk377171 = require("./377171.js"),
  Chunk211644 = require("./211644.js"),
  Chunk426032 = require("./426032.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk702456 = require("./702456.jsx"),
  Chunk882579 = require("./882579.js"),
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
  Chunk744038 = require("./744038.js"),
  Chunk443226 = require("./443226.js");

function e_(e) {
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

function eb(e, t) {
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

function eE(e, t) {
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
let eO = e => {
    var {
      selected: t
    } = e, n = eE(e, ["selected"]);
    let i = (0, R.b5)("PrivateChannels.ICYMIButton"),
      l = (0, u.JA)("icymi");
    return i ? (0, r.jsx)("div", {
      className: em.friendsButtonContainer,
      children: (0, r.jsx)(y.Qj, e_({
        selected: t,
        route: eu.Z5c.ICYMI,
        icon: b.qOE,
        text: (0, r.jsxs)(r.Fragment, {
          children: [eh.intl.string(eh.t["jnXV/V"]), (0, r.jsx)("span", {
            className: em.preAlphaText,
            children: eh.intl.string(eh.t.Ac2OZA)
          })]
        })
      }, n, l))
    }) : null
  },
  ey = e => {
    var {
      selected: t
    } = e, n = eE(e, ["selected"]);
    let l = (0, u.JA)("friends"),
      a = (0, H.If)(),
      s = (0, p.e7)([F.Z], () => F.Z.canShowFriendsTabBadge()),
      o = (0, p.e7)([C.Z], () => C.Z.useReducedMotion),
      {
        enabled: d
      } = V.w.useConfig({
        location: "Friends Tab"
      }),
      [g, m] = (0, x.bf)(s && d ? f.z.GIFTING_INTENT_FRIENDS_TAB_BADGE : null, {
        cooldownDurationMs: F.n
      }),
      E = g === f.z.GIFTING_INTENT_FRIENDS_TAB_BADGE;
    i.useEffect(() => {
      E && (0, T.h)({
        name: c.ImpressionNames.GIFT_INTENT_BADGE,
        type: c.ImpressionTypes.VIEW,
        properties: {
          gift_intent_type: ef.hX.FRIEND_ANNIVERSARY
        }
      })
    }, [E]);
    let v = () => {
        let e;
        E ? (eo.default.track(eu.rMx.GIFT_INTENT_BADGE_CLICKED, {
          gift_intent_type: ef.hX.FRIEND_ANNIVERSARY
        }), e = eu.pJs.ALL, O.Z.setSection(eu.pJs.ALL), m(ep.L.TAKE_ACTION)) : e = es.ZP.getState().section, (0, S.Z)({
          tab_opened: e
        })
      },
      [I, N] = i.useState(false),
      j = () => {
        N(false)
      },
      P = () => {
        N(true)
      },
      A = () => (0, r.jsx)(y.Qj, eb(e_({
        onClick: v,
        interactiveClassName: E ? em.friendsBadge : true,
        selected: t,
        route: eu.Z5c.FRIENDS,
        icon: b.iFz,
        text: eh.intl.string(eh.t.TdEu5X),
        onMouseEnter: P,
        onMouseLeave: j
      }, n, l), {
        children: a > 0 ? (0, r.jsx)(b.mAB, {
          count: a
        }) : null
      }));
    return (0, r.jsx)("div", {
      className: em.friendsButtonContainer,
      children: E ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(_.i_, {
          title: eh.intl.string(eh.t.Thb5MO),
          body: eh.intl.string(eh.t.kGvgwS),
          position: "left",
          asset: (0, r.jsx)(h.$K, {
            size: 32,
            alt: eh.intl.string(eh.t["4LohBA"])
          }),
          children: A()
        }), !o && (0, r.jsx)(Q.Z, {
          className: em.confetti,
          wind: 0,
          sprites: ed.CA,
          spriteColors: ed.Br,
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
  ev = e => {
    var {
      selected: t
    } = e, n = eE(e, ["selected"]);
    let i = (0, u.JA)("activity");
    return (0, r.jsx)("div", {
      className: em.friendsButtonContainer,
      children: (0, r.jsx)(y.Qj, e_({
        selected: t,
        route: eu.Z5c.ME_ACTIVITY,
        icon: b.g8d,
        text: eh.intl.string(eh.t.IC5Ann)
      }, n, i))
    })
  },
  eI = e => {
    var {
      selected: t,
      hideGameUpdateProgressIndicator: n
    } = e, i = eE(e, ["selected", "hideGameUpdateProgressIndicator"]);
    let l = (0, u.JA)("library");
    return (0, r.jsx)(y.Qj, eb(e_({
      selected: t,
      route: eu.Z5c.APPLICATION_LIBRARY,
      icon: b.vqy,
      text: eh.intl.string(eh.t.cw57ar)
    }, i, l), {
      children: (0, r.jsx)(I.Z, {
        className: a()(em.downloadProgressCircle, {
          [em.hideGameUpdateProgressIndicator]: n
        })
      })
    }))
  },
  eC = () => (0, Chunk54381.jsx)("li", {
    className: Chunk443226.createDMButtonContainer,
    children: (0, Chunk54381.jsx)(Chunk518311.l, {
      fullWidth: true,
      text: Chunk388032.intl.string(Chunk388032.t["6Urw1t"]),
      icon: Chunk481060.kL_,
      size: "sm",
      subscribeToGlobalHotkey: true
    })
  }),
  eS = () => {
    let e = (0, Chunk899740.q)();
    return module > 0 ? (0, Chunk54381.jsx)(Chunk481060.mAB, {
      count: module
    }) : null
  },
  eT = e => {
    let {
      selected: t
    } = e, n = (0, u.JA)("messageRequests"), {
      channelId: i
    } = (0, D._)();
    if (!(0, k.a)()) return null;
    let l = null == i ? true : () => E.Z.preload(eu.ME, i);
    return (0, r.jsx)(y.Qj, eb(e_({
      selected: t,
      route: eu.Z5c.MESSAGE_REQUESTS,
      icon: b._XJ,
      text: eh.intl.string(eh.t.e7GWjQ),
      onClick: l
    }, n), {
      children: (0, r.jsx)(eS, {})
    }))
  },
  eN = e => {
    let {
      selected: t
    } = e, n = eh.intl.string(eg.default.Rkdixs), l = (0, u.JA)("family-center"), [a, s] = i.useState(true);
    return (0, r.jsx)(y.Qj, eb(e_({
      selected: t,
      route: eu.Z5c.FAMILY_CENTER,
      icon: b.BFJ,
      text: n,
      onMouseEnter: () => {
        s(true)
      },
      onMouseLeave: () => {
        s(false)
      },
      interactiveClassName: em.familyCenterLinkButton
    }, l), {
      children: (0, r.jsx)(ej, {
        isParentHovered: a
      })
    }))
  },
  ej = e => {
    let {
      isParentHovered: t
    } = e, i = (0, G.gU)();
    return t ? (0, r.jsx)("div", {
      className: em.familyCenterButtonContainer,
      children: (0, r.jsx)(y.bU, {
        onClick: () => {
          (0, g.ZD)(async () => {
            let {
              default: e
            } = await n.e("44153").then(n.bind(n, 760949));
            return t => (0, r.jsx)(e, e_({}, t))
          })
        },
        "aria-label": eh.intl.string(eh.t.cpT0Cq),
        icon: b.Dio
      })
    }) : i > 0 ? (0, r.jsx)("div", {
      className: a()(em.familyCenterButtonContainer, em.withPadding),
      children: (0, r.jsx)(b.mAB, {
        count: i
      })
    }) : (0, r.jsx)("div", {
      className: em.familyCenterButtonContainer,
      children: (0, r.jsx)(A.ZP, {
        contentTypes: [f.z.FAMILY_CENTER_NEW_BADGE],
        children: e => {
          let {
            visibleContent: t
          } = e;
          return t === f.z.FAMILY_CENTER_NEW_BADGE ? (0, r.jsx)(b.IGR, {
            text: eh.intl.string(eh.t.y2b7CA),
            color: j.Z.BG_BRAND
          }) : null
        }
      })
    })
  },
  eP = () => (0, Chunk54381.jsxs)("div", {
    className: Chunk443226.directMessagesHeader,
    children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/semibold",
      children: Chunk388032.intl.string(Chunk388032.t.YUU0RF)
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk443226.directMessagesButton,
      children: (0, Chunk54381.jsx)(Chunk518311.Z, {
        tooltip: Chunk388032.intl.string(Chunk388032.t["6Urw1t"]),
        location: "DirectMessagesHeader-CreateDMButton"
      })
    })]
  }),
  ex = () => (0, Chunk51596.$Z)("DM_SEARCH");

function eA(e) {
  switch (e) {
    case eu.Z5c.APPLICATION_LIBRARY:
      return eu.ZY5.LIBRARY;
    case eu.Z5c.FRIENDS:
      return eu.ZY5.FRIENDS_LIST;
    case eu.Z5c.COLLECTIBLES_SHOP:
      return eu.ZY5.COLLECTIBLES_SHOP
  }
  return e.startsWith(eu.Z5c.APPLICATION_STORE) ? e === eu.Z5c.APPLICATION_STORE ? eu.ZY5.STORE_DIRECTORY_HOME : e.startsWith(eu.Z5c.APPLICATION_STORE) ? eu.ZY5.STORE_DIRECTORY_BROWSE : eu.ZY5.STORE_LISTING : eu.ZY5.DM_CHANNEL
}
let eZ = Chunk473749.memo(function(e) {
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
    createDMButtonVariant: h,
    selectedChannelId: g,
    path: _,
    onlyShowDMs: E,
    hideAllDMs: O
  } = e, y = i.useRef(null), I = i.useRef(null), C = i.useRef(null), S = i.useRef(null), T = B.o.useConfig({
    location: "privatechannels"
  }).friendsTab, j = (0, R.b5)("PrivateChannels"), P = null;
  return c ? P = (0, r.jsx)(q.F, {
    targetElementRef: S
  }) : u && (P = (0, r.jsx)(z.d, {
    targetElementRef: S
  })), (0, r.jsxs)("nav", {
    className: em.privateChannels,
    "aria-label": eh.intl.string(eh.t.ZH9aP4),
    children: [E ? (0, r.jsx)(eP, {}) : (0, r.jsx)(ee.Z, {
      childRef: y,
      tutorialId: "direct-messages",
      position: "right",
      offsetX: false,
      children: (0, r.jsx)("div", {
        ref: y,
        className: a()(em.searchBar, {
          [em.themedHeaderMobile]: d.tq
        }),
        children: (0, r.jsx)(b.Button, {
          fullWidth: true,
          variant: "secondary",
          size: "sm",
          onClick: ex,
          text: eh.intl.format(eh.t.fH9FBy, {
            tooltipHook: (e, t) => (0, r.jsx)(m.Z, {
              children: e
            }, t)
          })
        })
      })
    }), (0, r.jsxs)(v.Z, eb(e_({}, e), {
      version: _,
      selectedChannelId: g,
      showDMHeader: !O && !E,
      hideAllDMs: O,
      listScrollerRef: C,
      createDMCTAButtonVariant: h,
      children: [T && !E ? (0, r.jsx)(ev, {
        selected: null != _ ? _ === eu.Z5c.ME_ACTIVITY : l === eu.Z5c.ME_ACTIVITY
      }, "activity_experimental") : null, E ? null : (0, r.jsx)(ey, {
        selected: null != _ ? _ === eu.Z5c.FRIENDS : l === eu.Z5c.FRIENDS
      }, "friends"), !E && j ? (0, r.jsx)(eO, {
        selected: null != _ ? _ === eu.Z5c.ICYMI : l === eu.Z5c.ICYMI
      }, "icymi") : null, n && t && !E ? (0, r.jsx)(eI, {
        selected: null == _ ? null != l && l.startsWith(eu.Z5c.APPLICATION_LIBRARY) : _.startsWith(eu.Z5c.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: l === eu.Z5c.APPLICATION_LIBRARY
      }, "library") : null, p && !E ? (0, r.jsx)(eT, {
        selected: null == _ ? null != l && l.startsWith(eu.Z5c.MESSAGE_REQUESTS) : _ === eu.Z5c.MESSAGE_REQUESTS
      }, "message-requests") : null, o && !E ? (0, r.jsxs)("div", {
        children: [(0, r.jsx)(K.g, {
          nitroTabButtonRef: S,
          selected: null == _ ? s : _.startsWith(eu.Z5c.APPLICATION_STORE),
          route: eu.Z5c.APPLICATION_STORE,
          locationState: {
            analyticsSource: {
              page: eA(l),
              section: eu.jXE.NAVIGATION,
              object: eu.qAy.NAVIGATION_LINK
            }
          }
        }), P]
      }, "nitro-tab-group") : null, E ? null : (0, r.jsx)(N.i, {
        selected: _ === eu.Z5c.COLLECTIBLES_SHOP || (null == l ? true : l.startsWith(eu.Z5c.COLLECTIBLES_SHOP)),
        listItemRef: I,
        locationState: {
          analyticsSource: {
            page: eA(l),
            section: eu.jXE.NAVIGATION,
            object: eu.qAy.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), f && !E ? (0, r.jsx)(eN, {
        selected: null != l && l.startsWith(eu.Z5c.FAMILY_CENTER) || null != _ && _.startsWith(eu.Z5c.FAMILY_CENTER)
      }, "family-center") : null, E ? null : (0, r.jsx)(J.Z, {
        selected: null == _ ? null != l && l.startsWith(eu.Z5c.QUEST_HOME_V2) : _ === eu.Z5c.QUEST_HOME_V2
      }, "quests"), E || O ? null : (0, r.jsx)(ew, {}, "section-divider-top"), O ? null : (0, r.jsx)(Z.Z, {}, "frequent-friends"), "full-width" !== h || O || E ? null : (0, r.jsx)(eC, {}, "create-dm")]
    }))]
  })
});

function ew() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk443226.sectionDivider
  })
}

function eL() {
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
    h = (0, Chunk93237.eW)(),
    g = (0, Chunk675957._h)(),
    m = [];
  (0, Chunk211644.Kl)() && (Chunk970683 && Chunk194983.push(Chunk704215.z.REFERRAL_PROGRAM_POPOVER), Chunk952265 && Chunk194983.push(Chunk704215.z.RECURRING_3P_PROMOTION_POPOVER));
  let [_, b] = (0, Chunk426032.US)(Chunk194983, true, true), E = (0, Chunk28476.a)(), O = function() {
    let e = Chunk695346.Ex.useSetting(),
      t = (0, Chunk880257.Z)();
    returntrue === module && true === exports
  }(), y = (0, Chunk882579.U)("PrivateChannels", {
    autoTrackExposure: true
  }), {
    pathname: v
  } = (0, Chunk828700.TH)(), I = Chunk831218.startsWith(Chunk981631.Z5c.CHANNEL(Chunk981631.ME)) && Chunk831218 !== Chunk981631.Z5c.CHANNEL(Chunk981631.ME) && Chunk831218 !== Chunk981631.Z5c.ME_ACTIVITY, C = Chunk365113.o.useConfig({
    location: "privatechannels"
  }).dmsTab;
  return (0, Chunk54381.jsx)(eZ, {
    theme: Chunk473749,
    showLibrary: require,
    hasLibraryApplication: Chunk120356,
    storeLink: a,
    homeLink: module,
    premiumTabSelected: exports,
    shouldShowNitroTab: Chunk873546,
    showReferralProgramPopover: Chunk681715 === Chunk704215.z.REFERRAL_PROGRAM_POPOVER,
    showRecurring3PPopover: Chunk681715 === Chunk704215.z.RECURRING_3P_PROMOTION_POPOVER,
    shouldShowMessageRequestsRow: Chunk493683,
    shouldShowFamilyCenterRow: Chunk529103,
    createDMButtonVariant: Chunk515753,
    selectedChannelId: Chunk990547,
    path: Chunk91192,
    onlyShowDMs: Chunk339149 && Chunk607070,
    hideAllDMs: !Chunk339149 && Chunk607070
  })
}