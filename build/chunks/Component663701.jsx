/** Chunk was on 1272 **/
/** chunk id: 663701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eC,
  d: () => eI
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk524825 = require("./524825.js"),
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
  Chunk243778 = require("./243778.jsx"),
  Chunk702456 = require("./702456.jsx"),
  Chunk882579 = require("./882579.js"),
  Chunk518311 = require("./518311.jsx"),
  Chunk488634 = require("./488634.js"),
  Chunk899740 = require("./899740.js"),
  Chunk28476 = require("./28476.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk849862 = require("./849862.js"),
  Chunk522558 = require("./522558.js"),
  Chunk795448 = require("./795448.js"),
  Chunk441623 = require("./441623.js"),
  Chunk93237 = require("./93237.js"),
  Chunk138176 = require("./138176.jsx"),
  Chunk457396 = require("./457396.jsx"),
  Chunk108989 = require("./108989.jsx"),
  Chunk937797 = require("./937797.js"),
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
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk412297 = require("./412297.js"),
  Chunk734306 = require("./734306.js");

function eu(e) {
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

function ed(e, t) {
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

function ep(e, t) {
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
let ef = e => {
    var {
      selected: t
    } = e, n = ep(e, ["selected"]);
    let l = (0, c.JA)("friends"),
      a = (0, Z.If)(),
      o = (0, d.e7)([R.Z], () => R.Z.canShowFriendsTabBadge()),
      u = (0, d.e7)([_.Z], () => _.Z.useReducedMotion),
      {
        enabled: p
      } = w.w.useExperiment({
        location: "Friends Tab"
      }, {
        autoTrackExposure: false
      }),
      f = o && p;
    i.useEffect(() => {
      f && (0, E.h)({
        name: s.ImpressionNames.GIFT_INTENT_BADGE,
        type: s.ImpressionTypes.VIEW,
        properties: {
          gift_intent_type: el.hX.FRIEND_ANNIVERSARY
        }
      })
    }, [f]);
    let [h, m] = i.useState(false);
    return (0, r.jsxs)("div", {
      className: ec.friendsButtonContainer,
      children: [(0, r.jsx)(ee.Qj, ed(eu({
        onClick: () => {
          let e;
          f ? (J.default.track(er.rMx.GIFT_INTENT_BADGE_CLICKED, {
            gift_intent_type: el.hX.FRIEND_ANNIVERSARY
          }), e = er.pJs.ALL, b.Z.setSection(er.pJs.ALL), (0, L.Gk)()) : e = X.ZP.getState().section, (0, O.Z)({
            tab_opened: e
          })
        },
        interactiveClassName: f ? ec.friendsBadge : true,
        selected: t,
        route: er.Z5c.FRIENDS,
        icon: g.iFz,
        text: eo.intl.string(eo.t.TdEu5e),
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
      })), f && !u && (0, r.jsx)(U.Z, {
        className: ec.confetti,
        wind: 0,
        sprites: ei.CA,
        spriteColors: ei.Br,
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
  eh = e => {
    var {
      selected: t,
      hideGameUpdateProgressIndicator: n
    } = e, i = ep(e, ["selected", "hideGameUpdateProgressIndicator"]);
    let l = (0, c.JA)("library");
    return (0, r.jsx)(ee.Qj, ed(eu({
      selected: t,
      route: er.Z5c.APPLICATION_LIBRARY,
      icon: g.vqy,
      text: eo.intl.string(eo.t.cw57am)
    }, i, l), {
      children: (0, r.jsx)(en.Z, {
        className: a()(ec.downloadProgressCircle, {
          [ec.hideGameUpdateProgressIndicator]: n
        })
      })
    }))
  },
  eg = () => (0, Chunk951288.jsx)("li", {
    className: Chunk734306.createDMButtonContainer,
    children: (0, Chunk951288.jsx)(Chunk518311.l, {
      fullWidth: true,
      text: Chunk388032.intl.string(Chunk388032.t["6Urw1t"]),
      icon: Chunk481060.kL_,
      size: "sm",
      subscribeToGlobalHotkey: true
    })
  }),
  em = () => {
    let e = (0, Chunk899740.q)();
    return module > 0 ? (0, Chunk951288.jsx)(Chunk481060.mAB, {
      count: module
    }) : null
  },
  eb = e => {
    let {
      selected: t
    } = e, n = (0, c.JA)("messageRequests"), {
      channelId: i
    } = (0, N._)();
    if (!(0, P.a)()) return null;
    let l = null == i ? true : () => m.Z.preload(er.ME, i);
    return (0, r.jsx)(ee.Qj, ed(eu({
      selected: t,
      route: er.Z5c.MESSAGE_REQUESTS,
      icon: g._XJ,
      text: eo.intl.string(eo.t.e7GWjY),
      onClick: l
    }, n), {
      children: (0, r.jsx)(em, {})
    }))
  },
  e_ = e => {
    let {
      selected: t
    } = e, n = eo.intl.string(es.default.Rkdixs), l = (0, c.JA)("family-center"), [a, o] = i.useState(true);
    return (0, r.jsx)(ee.Qj, ed(eu({
      selected: t,
      route: er.Z5c.FAMILY_CENTER,
      icon: g.BFJ,
      text: n,
      onMouseEnter: () => {
        o(true)
      },
      onMouseLeave: () => {
        o(false)
      },
      interactiveClassName: ec.familyCenterLinkButton
    }, l), {
      children: (0, r.jsx)(eO, {
        isParentHovered: a
      })
    }))
  },
  eO = e => {
    let {
      isParentHovered: t
    } = e, i = (0, A.gU)();
    return t ? (0, r.jsx)("div", {
      className: ec.familyCenterButtonContainer,
      children: (0, r.jsx)(ee.bU, {
        onClick: () => {
          (0, f.ZD)(async () => {
            let {
              default: e
            } = await n.e("44153").then(n.bind(n, 760949));
            return t => (0, r.jsx)(e, eu({}, t))
          })
        },
        "aria-label": eo.intl.string(eo.t.cpT0Cg),
        icon: g.Dio
      })
    }) : i > 0 ? (0, r.jsx)("div", {
      className: a()(ec.familyCenterButtonContainer, ec.withPadding),
      children: (0, r.jsx)(g.mAB, {
        count: i
      })
    }) : (0, r.jsx)("div", {
      className: ec.familyCenterButtonContainer,
      children: (0, r.jsx)(I.ZP, {
        contentTypes: [p.z.FAMILY_CENTER_NEW_BADGE],
        children: e => {
          let {
            visibleContent: t
          } = e;
          return t === p.z.FAMILY_CENTER_NEW_BADGE ? (0, r.jsx)(g.IGR, {
            text: eo.intl.string(eo.t.y2b7CA),
            color: v.Z.BG_BRAND
          }) : null
        }
      })
    })
  },
  eE = () => (0, Chunk51596.$Z)("DM_SEARCH");

function ey(e) {
  switch (e) {
    case er.Z5c.APPLICATION_LIBRARY:
      return er.ZY5.LIBRARY;
    case er.Z5c.FRIENDS:
      return er.ZY5.FRIENDS_LIST;
    case er.Z5c.COLLECTIBLES_SHOP:
      return er.ZY5.COLLECTIBLES_SHOP
  }
  return e.startsWith(er.Z5c.APPLICATION_STORE) ? e === er.Z5c.APPLICATION_STORE ? er.ZY5.STORE_DIRECTORY_HOME : e.startsWith(er.Z5c.APPLICATION_STORE) ? er.ZY5.STORE_DIRECTORY_BROWSE : er.ZY5.STORE_LISTING : er.ZY5.DM_CHANNEL
}
let ev = Chunk647438.memo(function(e) {
  let {
    showLibrary: t,
    hasLibraryApplication: n,
    homeLink: l,
    premiumTabSelected: o,
    shouldShowNitroTab: s,
    isReferralProgramPopoverShowable: c,
    shouldShowMessageRequestsRow: d,
    shouldShowFamilyCenterRow: p,
    shouldShowQuestsEntrypointRow: f,
    createDMButtonVariant: g,
    selectedChannelId: m,
    path: b
  } = e, _ = i.useRef(null), O = i.useRef(null), E = i.useRef(null), v = i.useRef(null);
  return (0, r.jsxs)("nav", {
    className: ec.privateChannels,
    "aria-label": eo.intl.string(eo.t.ZH9aPz),
    children: [(0, r.jsx)(F.Z, {
      childRef: _,
      tutorialId: "direct-messages",
      position: "right",
      offsetX: false,
      children: (0, r.jsx)("div", {
        ref: _,
        className: a()(ec.searchBar, {
          [ec.themedHeaderMobile]: u.tq
        }),
        children: (0, r.jsx)(h.zx, {
          grow: true,
          color: h.zx.Colors.PRIMARY,
          size: h.zx.Sizes.SMALL,
          fullWidth: true,
          onClick: eE,
          children: eo.intl.string(eo.t.LzcpeX)
        })
      })
    }), (0, r.jsxs)(et.Z, ed(eu({}, e), {
      version: b,
      selectedChannelId: m,
      showDMHeader: true,
      listScrollerRef: E,
      createDMCTAButtonVariant: g,
      children: [(0, r.jsx)(ef, {
        selected: null != b ? b === er.Z5c.FRIENDS : l === er.Z5c.FRIENDS
      }, "friends"), n && t ? (0, r.jsx)(eh, {
        selected: null == b ? null != l && l.startsWith(er.Z5c.APPLICATION_LIBRARY) : b.startsWith(er.Z5c.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: l === er.Z5c.APPLICATION_LIBRARY
      }, "library") : null, d ? (0, r.jsx)(eb, {
        selected: null == b ? null != l && l.startsWith(er.Z5c.MESSAGE_REQUESTS) : b === er.Z5c.MESSAGE_REQUESTS
      }, "message-requests") : null, s ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(M.g, {
          nitroTabButtonRef: v,
          selected: null == b ? o : b.startsWith(er.Z5c.APPLICATION_STORE),
          route: er.Z5c.APPLICATION_STORE,
          locationState: {
            analyticsSource: {
              page: ey(l),
              section: er.jXE.NAVIGATION,
              object: er.qAy.NAVIGATION_LINK
            }
          }
        }, "premium"), c && (0, r.jsx)(k.F, {
          targetElementRef: v
        })]
      }) : null, (0, r.jsx)(y.i, {
        selected: b === er.Z5c.COLLECTIBLES_SHOP || (null == l ? true : l.startsWith(er.Z5c.COLLECTIBLES_SHOP)),
        listItemRef: O,
        locationState: {
          analyticsSource: {
            page: ey(l),
            section: er.jXE.NAVIGATION,
            object: er.qAy.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), p ? (0, r.jsx)(e_, {
        selected: null != l && l.startsWith(er.Z5c.FAMILY_CENTER) || null != b && b.startsWith(er.Z5c.FAMILY_CENTER)
      }, "family-center") : null, f ? (0, r.jsx)(B.Z, {
        selected: null == b ? null != l && l.startsWith(er.Z5c.QUEST_HOME_V2) : b === er.Z5c.QUEST_HOME_V2
      }, "quests") : null, (0, r.jsx)(eI, {}, "section-divider-top"), (0, r.jsx)(C.Z, {}, "frequent-friends"), "full-width" === g && (0, r.jsx)(eg, {}, "create-dm")]
    }))]
  })
});

function eI() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk734306.sectionDivider
  })
}

function eC() {
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
    [s, c] = (0, Chunk905423.Z)(e => {
      let {
        channelId: t,
        path: n
      } = e;
      return [t, n]
    }, Chunk524825.X),
    u = (0, Chunk457396.i)({
      selected: null == Chunk91192 ? exports : Chunk91192.startsWith(Chunk981631.Z5c.APPLICATION_STORE)
    }),
    p = (0, Chunk93237.eW)(),
    f = (0, Chunk28476.a)(),
    h = function() {
      let e = Chunk695346.Ex.useSetting(),
        t = (0, Chunk880257.Z)();
      returntrue === module && true === exports
    }(),
    g = (0, Chunk882579.U)("PrivateChannels", {
      autoTrackExposure: true
    }),
    {
      enabled: m
    } = Chunk937797.m8.useConfig({
      location: Chunk46140.dr.PRIVATE_CHANNELS_LIST
    });
  return (0, Chunk951288.jsx)(ev, {
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
    shouldShowQuestsEntrypointRow: Chunk493683,
    createDMButtonVariant: Chunk481060,
    selectedChannelId: Chunk990547,
    path: Chunk91192
  })
}