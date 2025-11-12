/** Chunk was on 1272 **/
/** chunk id: 791250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eZ,
  d: () => eA
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk843611 = require("./843611.js"),
  Chunk574583 = require("./574583.js"),
  Chunk990547 = require("./990547.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk952265 = require("./952265.js"),
  Chunk194983 = require("./194983.jsx"),
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
  Chunk795448 = require("./795448.js"),
  Chunk441623 = require("./441623.js"),
  Chunk382834 = require("./382834.jsx"),
  Chunk675957 = require("./675957.js"),
  Chunk93237 = require("./93237.js"),
  Chunk138176 = require("./138176.jsx"),
  Chunk457396 = require("./457396.jsx"),
  Chunk108989 = require("./108989.jsx"),
  Chunk362870 = require("./362870.jsx"),
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
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk602698 = require("./602698.js"),
  Chunk443226 = require("./443226.js");

function eg(e) {
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

function e_(e, t) {
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
let eb = e => {
    var {
      selected: t
    } = e, n = e_(e, ["selected"]);
    let i = (0, w.b5)("PrivateChannels.ICYMIButton"),
      l = (0, u.JA)("icymi");
    return i ? (0, r.jsx)("div", {
      className: eh.friendsButtonContainer,
      children: (0, r.jsx)(E.Qj, eg({
        selected: t,
        route: ec.Z5c.ICYMI,
        icon: m.qOE,
        text: (0, r.jsxs)(r.Fragment, {
          children: [ep.intl.string(ep.t["jnXV/V"]), (0, r.jsx)("span", {
            className: eh.preAlphaText,
            children: ep.intl.string(ep.t.Ac2OZA)
          })]
        })
      }, n, l))
    }) : null
  },
  eE = e => {
    var {
      selected: t
    } = e, n = e_(e, ["selected"]);
    let l = (0, u.JA)("friends"),
      a = (0, G.If)(),
      s = (0, p.e7)([V.Z], () => V.Z.canShowFriendsTabBadge()),
      o = (0, p.e7)([v.Z], () => v.Z.useReducedMotion),
      {
        enabled: d
      } = B.w.getConfig({
        location: "Friends Tab"
      }),
      f = s && d;
    i.useEffect(() => {
      f && (0, C.h)({
        name: c.ImpressionNames.GIFT_INTENT_BADGE,
        type: c.ImpressionTypes.VIEW,
        properties: {
          gift_intent_type: ed.hX.FRIEND_ANNIVERSARY
        }
      })
    }, [f]);
    let [h, g] = i.useState(false);
    return (0, r.jsxs)("div", {
      className: eh.friendsButtonContainer,
      children: [(0, r.jsx)(E.Qj, em(eg({
        onClick: () => {
          let e;
          f ? (es.default.track(ec.rMx.GIFT_INTENT_BADGE_CLICKED, {
            gift_intent_type: ed.hX.FRIEND_ANNIVERSARY
          }), e = ec.pJs.ALL, b.Z.setSection(ec.pJs.ALL), (0, H.Gk)()) : e = ea.ZP.getState().section, (0, I.Z)({
            tab_opened: e
          })
        },
        interactiveClassName: f ? eh.friendsBadge : true,
        selected: t,
        route: ec.Z5c.FRIENDS,
        icon: m.iFz,
        text: ep.intl.string(ep.t.TdEu5X),
        onMouseEnter: () => {
          g(true)
        },
        onMouseLeave: () => {
          g(false)
        }
      }, n, l), {
        children: a > 0 ? (0, r.jsx)(m.mAB, {
          count: a
        }) : null
      })), f && !o && (0, r.jsx)(K.Z, {
        className: eh.confetti,
        wind: 0,
        sprites: eu.CA,
        spriteColors: eu.Br,
        firing: h,
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
  eO = e => {
    var {
      selected: t
    } = e, n = e_(e, ["selected"]);
    let i = (0, u.JA)("activity");
    return (0, r.jsx)("div", {
      className: eh.friendsButtonContainer,
      children: (0, r.jsx)(E.Qj, eg({
        selected: t,
        route: ec.Z5c.ME_ACTIVITY,
        icon: m.g8d,
        text: ep.intl.string(ep.t.IC5Ann)
      }, n, i))
    })
  },
  ey = e => {
    var {
      selected: t,
      hideGameUpdateProgressIndicator: n
    } = e, i = e_(e, ["selected", "hideGameUpdateProgressIndicator"]);
    let l = (0, u.JA)("library");
    return (0, r.jsx)(E.Qj, em(eg({
      selected: t,
      route: ec.Z5c.APPLICATION_LIBRARY,
      icon: m.vqy,
      text: ep.intl.string(ep.t.cw57ar)
    }, i, l), {
      children: (0, r.jsx)(y.Z, {
        className: a()(eh.downloadProgressCircle, {
          [eh.hideGameUpdateProgressIndicator]: n
        })
      })
    }))
  },
  ev = () => (0, Chunk951288.jsx)("li", {
    className: Chunk443226.createDMButtonContainer,
    children: (0, Chunk951288.jsx)(Chunk518311.l, {
      fullWidth: true,
      text: Chunk388032.intl.string(Chunk388032.t["6Urw1t"]),
      icon: Chunk481060.kL_,
      size: "sm",
      subscribeToGlobalHotkey: true
    })
  }),
  eI = () => {
    let e = (0, Chunk899740.q)();
    return module > 0 ? (0, Chunk951288.jsx)(Chunk481060.mAB, {
      count: module
    }) : null
  },
  eC = e => {
    let {
      selected: t
    } = e, n = (0, u.JA)("messageRequests"), {
      channelId: i
    } = (0, L._)();
    if (!(0, D.a)()) return null;
    let l = null == i ? true : () => _.Z.preload(ec.ME, i);
    return (0, r.jsx)(E.Qj, em(eg({
      selected: t,
      route: ec.Z5c.MESSAGE_REQUESTS,
      icon: m._XJ,
      text: ep.intl.string(ep.t.e7GWjQ),
      onClick: l
    }, n), {
      children: (0, r.jsx)(eI, {})
    }))
  },
  eS = e => {
    let {
      selected: t
    } = e, n = ep.intl.string(ef.default.Rkdixs), l = (0, u.JA)("family-center"), [a, s] = i.useState(true);
    return (0, r.jsx)(E.Qj, em(eg({
      selected: t,
      route: ec.Z5c.FAMILY_CENTER,
      icon: m.BFJ,
      text: n,
      onMouseEnter: () => {
        s(true)
      },
      onMouseLeave: () => {
        s(false)
      },
      interactiveClassName: eh.familyCenterLinkButton
    }, l), {
      children: (0, r.jsx)(eT, {
        isParentHovered: a
      })
    }))
  },
  eT = e => {
    let {
      isParentHovered: t
    } = e, i = (0, k.gU)();
    return t ? (0, r.jsx)("div", {
      className: eh.familyCenterButtonContainer,
      children: (0, r.jsx)(E.bU, {
        onClick: () => {
          (0, h.ZD)(async () => {
            let {
              default: e
            } = await n.e("44153").then(n.bind(n, 760949));
            return t => (0, r.jsx)(e, eg({}, t))
          })
        },
        "aria-label": ep.intl.string(ep.t.cpT0Cq),
        icon: m.Dio
      })
    }) : i > 0 ? (0, r.jsx)("div", {
      className: a()(eh.familyCenterButtonContainer, eh.withPadding),
      children: (0, r.jsx)(m.mAB, {
        count: i
      })
    }) : (0, r.jsx)("div", {
      className: eh.familyCenterButtonContainer,
      children: (0, r.jsx)(P.ZP, {
        contentTypes: [f.z.FAMILY_CENTER_NEW_BADGE],
        children: e => {
          let {
            visibleContent: t
          } = e;
          return t === f.z.FAMILY_CENTER_NEW_BADGE ? (0, r.jsx)(m.IGR, {
            text: ep.intl.string(ep.t.y2b7CA),
            color: T.Z.BG_BRAND
          }) : null
        }
      })
    })
  },
  eN = () => (0, Chunk951288.jsxs)("div", {
    className: Chunk443226.directMessagesHeader,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/semibold",
      children: Chunk388032.intl.string(Chunk388032.t.YUU0RF)
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk443226.directMessagesButton,
      children: (0, Chunk951288.jsx)(Chunk518311.Z, {
        tooltip: Chunk388032.intl.string(Chunk388032.t["6Urw1t"]),
        location: "DirectMessagesHeader-CreateDMButton"
      })
    })]
  }),
  ej = () => (0, Chunk51596.$Z)("DM_SEARCH");

function eP(e) {
  switch (e) {
    case ec.Z5c.APPLICATION_LIBRARY:
      return ec.ZY5.LIBRARY;
    case ec.Z5c.FRIENDS:
      return ec.ZY5.FRIENDS_LIST;
    case ec.Z5c.COLLECTIBLES_SHOP:
      return ec.ZY5.COLLECTIBLES_SHOP
  }
  return e.startsWith(ec.Z5c.APPLICATION_STORE) ? e === ec.Z5c.APPLICATION_STORE ? ec.ZY5.STORE_DIRECTORY_HOME : e.startsWith(ec.Z5c.APPLICATION_STORE) ? ec.ZY5.STORE_DIRECTORY_BROWSE : ec.ZY5.STORE_LISTING : ec.ZY5.DM_CHANNEL
}
let ex = Chunk647438.memo(function(e) {
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
    selectedChannelId: _,
    path: b,
    onlyShowDMs: E,
    hideAllDMs: y
  } = e, v = i.useRef(null), I = i.useRef(null), C = i.useRef(null), T = i.useRef(null), N = U.o.useConfig({
    location: "privatechannels"
  }).friendsTab, j = (0, w.b5)("PrivateChannels"), P = null;
  return c ? P = (0, r.jsx)(W.F, {
    targetElementRef: T
  }) : u && (P = (0, r.jsx)(F.d, {
    targetElementRef: T
  })), (0, r.jsxs)("nav", {
    className: eh.privateChannels,
    "aria-label": ep.intl.string(ep.t.ZH9aP4),
    children: [E ? (0, r.jsx)(eN, {}) : (0, r.jsx)($.Z, {
      childRef: v,
      tutorialId: "direct-messages",
      position: "right",
      offsetX: false,
      children: (0, r.jsx)("div", {
        ref: v,
        className: a()(eh.searchBar, {
          [eh.themedHeaderMobile]: d.tq
        }),
        children: (0, r.jsx)(m.Button, {
          fullWidth: true,
          variant: "secondary",
          size: "sm",
          onClick: ej,
          text: ep.intl.format(ep.t.fH9FBy, {
            tooltipHook: (e, t) => (0, r.jsx)(g.Z, {
              children: e
            }, t)
          })
        })
      })
    }), (0, r.jsxs)(O.Z, em(eg({}, e), {
      version: b,
      selectedChannelId: _,
      showDMHeader: !y && !E,
      hideAllDMs: y,
      listScrollerRef: C,
      createDMCTAButtonVariant: h,
      children: [N && !E ? (0, r.jsx)(eO, {
        selected: null != b ? b === ec.Z5c.ME_ACTIVITY : l === ec.Z5c.ME_ACTIVITY
      }, "activity_experimental") : null, E ? null : (0, r.jsx)(eE, {
        selected: null != b ? b === ec.Z5c.FRIENDS : l === ec.Z5c.FRIENDS
      }, "friends"), !E && j ? (0, r.jsx)(eb, {
        selected: null != b ? b === ec.Z5c.ICYMI : l === ec.Z5c.ICYMI
      }, "icymi") : null, n && t && !E ? (0, r.jsx)(ey, {
        selected: null == b ? null != l && l.startsWith(ec.Z5c.APPLICATION_LIBRARY) : b.startsWith(ec.Z5c.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: l === ec.Z5c.APPLICATION_LIBRARY
      }, "library") : null, p && !E ? (0, r.jsx)(eC, {
        selected: null == b ? null != l && l.startsWith(ec.Z5c.MESSAGE_REQUESTS) : b === ec.Z5c.MESSAGE_REQUESTS
      }, "message-requests") : null, o && !E ? (0, r.jsxs)("div", {
        children: [(0, r.jsx)(q.g, {
          nitroTabButtonRef: T,
          selected: null == b ? s : b.startsWith(ec.Z5c.APPLICATION_STORE),
          route: ec.Z5c.APPLICATION_STORE,
          locationState: {
            analyticsSource: {
              page: eP(l),
              section: ec.jXE.NAVIGATION,
              object: ec.qAy.NAVIGATION_LINK
            }
          }
        }), P]
      }, "nitro-tab-group") : null, E ? null : (0, r.jsx)(S.i, {
        selected: b === ec.Z5c.COLLECTIBLES_SHOP || (null == l ? true : l.startsWith(ec.Z5c.COLLECTIBLES_SHOP)),
        listItemRef: I,
        locationState: {
          analyticsSource: {
            page: eP(l),
            section: ec.jXE.NAVIGATION,
            object: ec.qAy.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), f && !E ? (0, r.jsx)(eS, {
        selected: null != l && l.startsWith(ec.Z5c.FAMILY_CENTER) || null != b && b.startsWith(ec.Z5c.FAMILY_CENTER)
      }, "family-center") : null, E ? null : (0, r.jsx)(Q.Z, {
        selected: null == b ? null != l && l.startsWith(ec.Z5c.QUEST_HOME_V2) : b === ec.Z5c.QUEST_HOME_V2
      }, "quests"), E || y ? null : (0, r.jsx)(eA, {}, "section-divider-top"), y ? null : (0, r.jsx)(x.Z, {}, "frequent-friends"), "full-width" !== h || y || E ? null : (0, r.jsx)(ev, {}, "create-dm")]
    }))]
  })
});

function eA() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk443226.sectionDivider
  })
}

function eZ() {
  let e = (0, Chunk442837.e7)([Chunk774343.Z], () => Chunk774343.Z.getHomeLink()),
    t = (0, Chunk442837.e7)([Chunk55563.Z], () => {
      if (module === Chunk981631.Z5c.APPLICATION_STORE) returntrue;
      let t = (0, Chunk814225.ZK)(module);
      if (null != exports) {
        var n, r;
        return null != (r = null == (n = Chunk55563.Z.get(exports)) ? true : require.premium) && Chunk951288
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
    }, Chunk574583.X),
    d = (0, Chunk457396.i)({
      selected: null == Chunk91192 ? exports : Chunk91192.startsWith(Chunk981631.Z5c.APPLICATION_STORE)
    }),
    h = (0, Chunk93237.eW)(),
    g = (0, Chunk675957._h)(),
    m = [];
  (0, Chunk211644.Kl)() && (Chunk952265 && Chunk481060.push(Chunk704215.z.REFERRAL_PROGRAM_POPOVER), Chunk194983 && Chunk481060.push(Chunk704215.z.RECURRING_3P_PROMOTION_POPOVER));
  let [_, b] = (0, Chunk426032.US)(Chunk481060, true, true), E = (0, Chunk28476.a)(), O = function() {
    let e = Chunk695346.Ex.useSetting(),
      t = (0, Chunk880257.Z)();
    returntrue === module && true === exports
  }(), y = (0, Chunk882579.U)("PrivateChannels", {
    autoTrackExposure: true
  }), {
    pathname: v
  } = (0, Chunk843611.TH)(), I = Chunk607070.startsWith(Chunk981631.Z5c.CHANNEL(Chunk981631.ME)) && Chunk607070 !== Chunk981631.Z5c.CHANNEL(Chunk981631.ME) && Chunk607070 !== Chunk981631.Z5c.ME_ACTIVITY, C = Chunk365113.o.useConfig({
    location: "privatechannels"
  }).dmsTab;
  return (0, Chunk951288.jsx)(ex, {
    theme: Chunk647438,
    showLibrary: require,
    hasLibraryApplication: Chunk120356,
    storeLink: a,
    homeLink: module,
    premiumTabSelected: exports,
    shouldShowNitroTab: Chunk873546,
    showReferralProgramPopover: Chunk493683 === Chunk704215.z.REFERRAL_PROGRAM_POPOVER,
    showRecurring3PPopover: Chunk493683 === Chunk704215.z.RECURRING_3P_PROMOTION_POPOVER,
    shouldShowMessageRequestsRow: Chunk515753,
    shouldShowFamilyCenterRow: Chunk831218,
    createDMButtonVariant: Chunk339149,
    selectedChannelId: Chunk990547,
    path: Chunk91192,
    onlyShowDMs: Chunk557968 && Chunk213609,
    hideAllDMs: !Chunk557968 && Chunk213609
  })
}