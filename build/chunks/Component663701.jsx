/** Chunk was on 1272 **/
/** chunk id: 663701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eP,
  d: () => ej
}), require("./388685.js");
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
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk529103 = require("./529103.js"),
  Chunk607070 = require("./607070.js"),
  Chunk557968 = require("./557968.js"),
  Chunk213609 = require("./213609.js"),
  Chunk463119 = require("./463119.jsx"),
  Chunk377171 = require("./377171.js"),
  Chunk111028 = require("./111028.jsx"),
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
  Chunk515753 = require("./515753.jsx"),
  Chunk831218 = require("./831218.jsx"),
  Chunk339149 = require("./339149.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk675654 = require("./675654.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk602698 = require("./602698.js"),
  Chunk686918 = require("./686918.js");

function ep(e) {
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

function ef(e, t) {
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

function eh(e, t) {
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
let em = e => {
    var {
      selected: t
    } = e, n = eh(e, ["selected"]);
    let i = (0, P.b5)("PrivateChannels.ICYMIButton"),
      l = (0, u.JA)("icymi");
    return i ? (0, r.jsx)("div", {
      className: ed.friendsButtonContainer,
      children: (0, r.jsx)(er.Qj, ep({
        selected: t,
        route: ea.Z5c.ICYMI,
        icon: g.qOE,
        text: (0, r.jsxs)(r.Fragment, {
          children: [ec.intl.string(ec.t["jnXV/V"]), (0, r.jsx)("span", {
            className: ed.preAlphaText,
            children: ec.intl.string(ec.t.Ac2OZA)
          })]
        })
      }, n, l))
    }) : null
  },
  eg = e => {
    var {
      selected: t
    } = e, n = eh(e, ["selected"]);
    let l = (0, u.JA)("friends"),
      a = (0, R.If)(),
      s = (0, p.e7)([U.Z], () => U.Z.canShowFriendsTabBadge()),
      o = (0, p.e7)([E.Z], () => E.Z.useReducedMotion),
      {
        enabled: d
      } = M.w.useExperiment({
        location: "Friends Tab"
      }, {
        autoTrackExposure: false
      }),
      f = s && d;
    i.useEffect(() => {
      f && (0, I.h)({
        name: c.ImpressionNames.GIFT_INTENT_BADGE,
        type: c.ImpressionTypes.VIEW,
        properties: {
          gift_intent_type: eo.hX.FRIEND_ANNIVERSARY
        }
      })
    }, [f]);
    let [h, m] = i.useState(false);
    return (0, r.jsxs)("div", {
      className: ed.friendsButtonContainer,
      children: [(0, r.jsx)(er.Qj, ef(ep({
        onClick: () => {
          let e;
          f ? (et.default.track(ea.rMx.GIFT_INTENT_BADGE_CLICKED, {
            gift_intent_type: eo.hX.FRIEND_ANNIVERSARY
          }), e = ea.pJs.ALL, b.Z.setSection(ea.pJs.ALL), (0, k.Gk)()) : e = ee.ZP.getState().section, (0, O.Z)({
            tab_opened: e
          })
        },
        interactiveClassName: f ? ed.friendsBadge : true,
        selected: t,
        route: ea.Z5c.FRIENDS,
        icon: g.iFz,
        text: ec.intl.string(ec.t.TdEu5X),
        onMouseEnter: () => {
          m(true)
        },
        onMouseLeave: () => {
          m(false)
        }
      }, n, l), {
        children: a > 0 ? (0, r.jsx)(g.mAB, {
          count: a
        }) : null
      })), f && !o && (0, r.jsx)(V.Z, {
        className: ed.confetti,
        wind: 0,
        sprites: es.CA,
        spriteColors: es.Br,
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
  e_ = e => {
    var {
      selected: t
    } = e, n = eh(e, ["selected"]);
    let i = (0, u.JA)("activity");
    return (0, r.jsx)("div", {
      className: ed.friendsButtonContainer,
      children: (0, r.jsx)(er.Qj, ep({
        selected: t,
        route: ea.Z5c.ME_ACTIVITY,
        icon: g.g8d,
        text: ec.intl.string(ec.t.IC5Ann)
      }, n, i))
    })
  },
  eb = e => {
    var {
      selected: t,
      hideGameUpdateProgressIndicator: n
    } = e, i = eh(e, ["selected", "hideGameUpdateProgressIndicator"]);
    let l = (0, u.JA)("library");
    return (0, r.jsx)(er.Qj, ef(ep({
      selected: t,
      route: ea.Z5c.APPLICATION_LIBRARY,
      icon: g.vqy,
      text: ec.intl.string(ec.t.cw57ar)
    }, i, l), {
      children: (0, r.jsx)(el.Z, {
        className: a()(ed.downloadProgressCircle, {
          [ed.hideGameUpdateProgressIndicator]: n
        })
      })
    }))
  },
  eE = () => (0, Chunk951288.jsx)("li", {
    className: Chunk686918.createDMButtonContainer,
    children: (0, Chunk951288.jsx)(Chunk518311.l, {
      fullWidth: true,
      text: Chunk388032.intl.string(Chunk388032.t["6Urw1t"]),
      icon: Chunk481060.kL_,
      size: "sm",
      subscribeToGlobalHotkey: true
    })
  }),
  eO = () => {
    let e = (0, Chunk899740.q)();
    return module > 0 ? (0, Chunk951288.jsx)(Chunk481060.mAB, {
      count: module
    }) : null
  },
  eI = e => {
    let {
      selected: t
    } = e, n = (0, u.JA)("messageRequests"), {
      channelId: i
    } = (0, x._)();
    if (!(0, Z.a)()) return null;
    let l = null == i ? true : () => _.Z.preload(ea.ME, i);
    return (0, r.jsx)(er.Qj, ef(ep({
      selected: t,
      route: ea.Z5c.MESSAGE_REQUESTS,
      icon: g._XJ,
      text: ec.intl.string(ec.t.e7GWjQ),
      onClick: l
    }, n), {
      children: (0, r.jsx)(eO, {})
    }))
  },
  ev = e => {
    let {
      selected: t
    } = e, n = ec.intl.string(eu.default.Rkdixs), l = (0, u.JA)("family-center"), [a, s] = i.useState(true);
    return (0, r.jsx)(er.Qj, ef(ep({
      selected: t,
      route: ea.Z5c.FAMILY_CENTER,
      icon: g.BFJ,
      text: n,
      onMouseEnter: () => {
        s(true)
      },
      onMouseLeave: () => {
        s(false)
      },
      interactiveClassName: ed.familyCenterLinkButton
    }, l), {
      children: (0, r.jsx)(ey, {
        isParentHovered: a
      })
    }))
  },
  ey = e => {
    let {
      isParentHovered: t
    } = e, i = (0, L.gU)();
    return t ? (0, r.jsx)("div", {
      className: ed.familyCenterButtonContainer,
      children: (0, r.jsx)(er.bU, {
        onClick: () => {
          (0, h.ZD)(async () => {
            let {
              default: e
            } = await n.e("44153").then(n.bind(n, 760949));
            return t => (0, r.jsx)(e, ep({}, t))
          })
        },
        "aria-label": ec.intl.string(ec.t.cpT0Cq),
        icon: g.Dio
      })
    }) : i > 0 ? (0, r.jsx)("div", {
      className: a()(ed.familyCenterButtonContainer, ed.withPadding),
      children: (0, r.jsx)(g.mAB, {
        count: i
      })
    }) : (0, r.jsx)("div", {
      className: ed.familyCenterButtonContainer,
      children: (0, r.jsx)(S.ZP, {
        contentTypes: [f.z.FAMILY_CENTER_NEW_BADGE],
        children: e => {
          let {
            visibleContent: t
          } = e;
          return t === f.z.FAMILY_CENTER_NEW_BADGE ? (0, r.jsx)(g.IGR, {
            text: ec.intl.string(ec.t.y2b7CA),
            color: y.Z.BG_BRAND
          }) : null
        }
      })
    })
  },
  eC = () => (0, Chunk951288.jsxs)("div", {
    className: Chunk686918.directMessagesHeader,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/semibold",
      children: Chunk388032.intl.string(Chunk388032.t.YUU0RF)
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk686918.directMessagesButton,
      children: (0, Chunk951288.jsx)(Chunk518311.Z, {
        tooltip: Chunk388032.intl.string(Chunk388032.t["6Urw1t"]),
        location: "DirectMessagesHeader-CreateDMButton"
      })
    })]
  }),
  eS = () => (0, Chunk51596.$Z)("DM_SEARCH");

function eT(e) {
  switch (e) {
    case ea.Z5c.APPLICATION_LIBRARY:
      return ea.ZY5.LIBRARY;
    case ea.Z5c.FRIENDS:
      return ea.ZY5.FRIENDS_LIST;
    case ea.Z5c.COLLECTIBLES_SHOP:
      return ea.ZY5.COLLECTIBLES_SHOP
  }
  return e.startsWith(ea.Z5c.APPLICATION_STORE) ? e === ea.Z5c.APPLICATION_STORE ? ea.ZY5.STORE_DIRECTORY_HOME : e.startsWith(ea.Z5c.APPLICATION_STORE) ? ea.ZY5.STORE_DIRECTORY_BROWSE : ea.ZY5.STORE_LISTING : ea.ZY5.DM_CHANNEL
}
let eN = Chunk647438.memo(function(e) {
  let {
    showLibrary: t,
    hasLibraryApplication: n,
    homeLink: l,
    premiumTabSelected: s,
    shouldShowNitroTab: o,
    isReferralProgramPopoverShowable: c,
    shouldShowMessageRequestsRow: u,
    shouldShowFamilyCenterRow: p,
    createDMButtonVariant: f,
    selectedChannelId: h,
    path: g,
    onlyShowDMs: _,
    hideAllDMs: b
  } = e, E = i.useRef(null), O = i.useRef(null), I = i.useRef(null), y = i.useRef(null), S = D.o.useConfig({
    location: "privatechannels"
  }).friendsTab, N = (0, P.b5)("PrivateChannels");
  return (0, r.jsxs)("nav", {
    className: ed.privateChannels,
    "aria-label": ec.intl.string(ec.t.ZH9aP4),
    children: [_ ? (0, r.jsx)(eC, {}) : (0, r.jsx)(W.Z, {
      childRef: E,
      tutorialId: "direct-messages",
      position: "right",
      offsetX: false,
      children: (0, r.jsx)("div", {
        ref: E,
        className: a()(ed.searchBar, {
          [ed.themedHeaderMobile]: d.tq
        }),
        children: (0, r.jsx)(m.zx, {
          grow: true,
          color: m.zx.Colors.PRIMARY,
          size: m.zx.Sizes.SMALL,
          fullWidth: true,
          onClick: eS,
          children: (0, r.jsx)(C.Z, {
            children: ec.intl.string(ec.t.LzcpeZ)
          })
        })
      })
    }), (0, r.jsxs)(ei.Z, ef(ep({}, e), {
      version: g,
      selectedChannelId: h,
      showDMHeader: !b && !_,
      hideAllDMs: b,
      listScrollerRef: I,
      createDMCTAButtonVariant: f,
      children: [S && !_ ? (0, r.jsx)(e_, {
        selected: null != g ? g === ea.Z5c.ME_ACTIVITY : l === ea.Z5c.ME_ACTIVITY
      }, "activity_experimental") : null, _ ? null : (0, r.jsx)(eg, {
        selected: null != g ? g === ea.Z5c.FRIENDS : l === ea.Z5c.FRIENDS
      }, "friends"), !_ && N ? (0, r.jsx)(em, {
        selected: null != g ? g === ea.Z5c.ICYMI : l === ea.Z5c.ICYMI
      }, "icymi") : null, n && t && !_ ? (0, r.jsx)(eb, {
        selected: null == g ? null != l && l.startsWith(ea.Z5c.APPLICATION_LIBRARY) : g.startsWith(ea.Z5c.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: l === ea.Z5c.APPLICATION_LIBRARY
      }, "library") : null, u && !_ ? (0, r.jsx)(eI, {
        selected: null == g ? null != l && l.startsWith(ea.Z5c.MESSAGE_REQUESTS) : g === ea.Z5c.MESSAGE_REQUESTS
      }, "message-requests") : null, o && !_ ? (0, r.jsxs)("div", {
        children: [(0, r.jsx)(H.g, {
          nitroTabButtonRef: y,
          selected: null == g ? s : g.startsWith(ea.Z5c.APPLICATION_STORE),
          route: ea.Z5c.APPLICATION_STORE,
          locationState: {
            analyticsSource: {
              page: eT(l),
              section: ea.jXE.NAVIGATION,
              object: ea.qAy.NAVIGATION_LINK
            }
          }
        }), c && (0, r.jsx)(B.F, {
          targetElementRef: y
        })]
      }, "nitro-tab-group") : null, _ ? null : (0, r.jsx)(v.i, {
        selected: g === ea.Z5c.COLLECTIBLES_SHOP || (null == l ? true : l.startsWith(ea.Z5c.COLLECTIBLES_SHOP)),
        listItemRef: O,
        locationState: {
          analyticsSource: {
            page: eT(l),
            section: ea.jXE.NAVIGATION,
            object: ea.qAy.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), p && !_ ? (0, r.jsx)(ev, {
        selected: null != l && l.startsWith(ea.Z5c.FAMILY_CENTER) || null != g && g.startsWith(ea.Z5c.FAMILY_CENTER)
      }, "family-center") : null, _ ? null : (0, r.jsx)(F.Z, {
        selected: null == g ? null != l && l.startsWith(ea.Z5c.QUEST_HOME_V2) : g === ea.Z5c.QUEST_HOME_V2
      }, "quests"), _ || b ? null : (0, r.jsx)(ej, {}, "section-divider-top"), b ? null : (0, r.jsx)(T.Z, {}, "frequent-friends"), "full-width" !== f || b || _ ? null : (0, r.jsx)(eE, {}, "create-dm")]
    }))]
  })
});

function ej() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk686918.sectionDivider
  })
}

function eP() {
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
    f = (0, Chunk93237.eW)(),
    h = (0, Chunk28476.a)(),
    m = function() {
      let e = Chunk695346.Ex.useSetting(),
        t = (0, Chunk880257.Z)();
      returntrue === module && true === exports
    }(),
    g = (0, Chunk882579.U)("PrivateChannels", {
      autoTrackExposure: true
    }),
    {
      pathname: _
    } = (0, Chunk843611.TH)(),
    b = Chunk493683.startsWith(Chunk981631.Z5c.CHANNEL(Chunk981631.ME)) && Chunk493683 !== Chunk981631.Z5c.CHANNEL(Chunk981631.ME) && Chunk493683 !== Chunk981631.Z5c.ME_ACTIVITY,
    E = Chunk365113.o.useConfig({
      location: "privatechannels"
    }).dmsTab;
  return (0, Chunk951288.jsx)(eN, {
    theme: Chunk647438,
    showLibrary: require,
    hasLibraryApplication: Chunk120356,
    storeLink: a,
    homeLink: module,
    premiumTabSelected: exports,
    shouldShowNitroTab: Chunk873546,
    isReferralProgramPopoverShowable: Chunk704215,
    shouldShowMessageRequestsRow: Chunk952265,
    shouldShowFamilyCenterRow: Chunk755721,
    createDMButtonVariant: Chunk481060,
    selectedChannelId: Chunk990547,
    path: Chunk91192,
    onlyShowDMs: Chunk529103 && Chunk607070,
    hideAllDMs: !Chunk529103 && Chunk607070
  })
}