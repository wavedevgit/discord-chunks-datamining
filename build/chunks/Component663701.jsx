/** Chunk was on 1272 **/
/** chunk id: 663701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ey
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
  Chunk882579 = require("./882579.js"),
  Chunk518311 = require("./518311.jsx"),
  Chunk488634 = require("./488634.js"),
  Chunk899740 = require("./899740.js"),
  Chunk28476 = require("./28476.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk849862 = require("./849862.js"),
  Chunk522558 = require("./522558.js"),
  Chunk870041 = require("./870041.js"),
  Chunk795448 = require("./795448.js"),
  Chunk441623 = require("./441623.js"),
  Chunk93237 = require("./93237.js"),
  Chunk138176 = require("./138176.jsx"),
  Chunk457396 = require("./457396.jsx"),
  Chunk108989 = require("./108989.jsx"),
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
  Chunk345909 = require("./345909.js"),
  Chunk686918 = require("./686918.js");

function eo(e) {
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

function es(e, t) {
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

function ec(e, t) {
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
let eu = e => {
    var {
      selected: t
    } = e, n = ec(e, ["selected"]);
    let l = (0, c.JA)("friends"),
      a = (0, A.If)(),
      o = (0, d.e7)([R.Z], () => R.Z.canShowFriendsTabBadge()),
      u = (0, d.e7)([_.Z], () => _.Z.useReducedMotion),
      {
        enabled: p
      } = Z.w.useExperiment({
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
          gift_intent_type: er.hX.FRIEND_ANNIVERSARY
        }
      })
    }, [f]);
    let [h, m] = i.useState(false);
    return (0, r.jsxs)("div", {
      className: ea.friendsButtonContainer,
      children: [(0, r.jsx)(J.Qj, es(eo({
        onClick: () => {
          let e;
          f ? (Q.default.track(et.rMx.GIFT_INTENT_BADGE_CLICKED, {
            gift_intent_type: er.hX.FRIEND_ANNIVERSARY
          }), e = et.pJs.ALL, b.Z.setSection(et.pJs.ALL), (0, L.Gk)()) : e = q.ZP.getState().section, (0, O.Z)({
            tab_opened: e
          })
        },
        interactiveClassName: f ? ea.friendsBadge : true,
        selected: t,
        route: et.Z5c.FRIENDS,
        icon: g.iFz,
        text: ei.intl.string(ei.t.TdEu5e),
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
        className: ea.confetti,
        wind: 0,
        sprites: en.CA,
        spriteColors: en.Br,
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
  ed = e => {
    var {
      selected: t,
      hideGameUpdateProgressIndicator: n
    } = e, i = ec(e, ["selected", "hideGameUpdateProgressIndicator"]);
    let l = (0, c.JA)("library");
    return (0, r.jsx)(J.Qj, es(eo({
      selected: t,
      route: et.Z5c.APPLICATION_LIBRARY,
      icon: g.vqy,
      text: ei.intl.string(ei.t.cw57am)
    }, i, l), {
      children: (0, r.jsx)(ee.Z, {
        className: a()(ea.downloadProgressCircle, {
          [ea.hideGameUpdateProgressIndicator]: n
        })
      })
    }))
  },
  ep = () => (0, Chunk951288.jsx)("li", {
    className: Chunk686918.createDMButtonContainer,
    children: (0, Chunk951288.jsx)(Chunk518311.l, {
      fullWidth: true,
      text: Chunk388032.intl.string(Chunk388032.t["6Urw1t"]),
      icon: Chunk481060.kL_,
      size: "sm",
      subscribeToGlobalHotkey: true
    })
  }),
  ef = () => {
    let e = (0, Chunk899740.q)();
    return module > 0 ? (0, Chunk951288.jsx)(Chunk481060.mAB, {
      count: module
    }) : null
  },
  eh = e => {
    let {
      selected: t
    } = e, n = (0, c.JA)("messageRequests"), {
      channelId: i
    } = (0, N._)();
    if (!(0, P.a)()) return null;
    let l = null == i ? true : () => m.Z.preload(et.ME, i);
    return (0, r.jsx)(J.Qj, es(eo({
      selected: t,
      route: et.Z5c.MESSAGE_REQUESTS,
      icon: g._XJ,
      text: ei.intl.string(ei.t.e7GWjY),
      onClick: l
    }, n), {
      children: (0, r.jsx)(ef, {})
    }))
  },
  eg = e => {
    let {
      selected: t
    } = e, n = ei.intl.string(el.default.Rkdixs), l = (0, c.JA)("family-center"), [a, o] = i.useState(true);
    return (0, r.jsx)(J.Qj, es(eo({
      selected: t,
      route: et.Z5c.FAMILY_CENTER,
      icon: g.BFJ,
      text: n,
      onMouseEnter: () => {
        o(true)
      },
      onMouseLeave: () => {
        o(false)
      },
      interactiveClassName: ea.familyCenterLinkButton
    }, l), {
      children: (0, r.jsx)(em, {
        isParentHovered: a
      })
    }))
  },
  em = e => {
    let {
      isParentHovered: t
    } = e, i = (0, x.gU)();
    return t ? (0, r.jsx)("div", {
      className: ea.familyCenterButtonContainer,
      children: (0, r.jsx)(J.bU, {
        onClick: () => {
          (0, f.ZD)(async () => {
            let {
              default: e
            } = await n.e("44153").then(n.bind(n, 760949));
            return t => (0, r.jsx)(e, eo({}, t))
          })
        },
        "aria-label": ei.intl.string(ei.t.cpT0Cg),
        icon: g.Dio
      })
    }) : i > 0 ? (0, r.jsx)("div", {
      className: a()(ea.familyCenterButtonContainer, ea.withPadding),
      children: (0, r.jsx)(g.mAB, {
        count: i
      })
    }) : (0, r.jsx)("div", {
      className: ea.familyCenterButtonContainer,
      children: (0, r.jsx)(I.ZP, {
        contentTypes: [p.z.FAMILY_CENTER_NEW_BADGE],
        children: e => {
          let {
            visibleContent: t
          } = e;
          return t === p.z.FAMILY_CENTER_NEW_BADGE ? (0, r.jsx)(g.IGR, {
            text: ei.intl.string(ei.t.y2b7CA),
            color: v.Z.BG_BRAND
          }) : null
        }
      })
    })
  },
  eb = () => (0, Chunk51596.$Z)("DM_SEARCH");

function e_(e) {
  switch (e) {
    case et.Z5c.APPLICATION_LIBRARY:
      return et.ZY5.LIBRARY;
    case et.Z5c.FRIENDS:
      return et.ZY5.FRIENDS_LIST;
    case et.Z5c.COLLECTIBLES_SHOP:
      return et.ZY5.COLLECTIBLES_SHOP
  }
  return e.startsWith(et.Z5c.APPLICATION_STORE) ? e === et.Z5c.APPLICATION_STORE ? et.ZY5.STORE_DIRECTORY_HOME : e.startsWith(et.Z5c.APPLICATION_STORE) ? et.ZY5.STORE_DIRECTORY_BROWSE : et.ZY5.STORE_LISTING : et.ZY5.DM_CHANNEL
}
let eO = Chunk647438.memo(function(e) {
  let {
    showLibrary: t,
    hasLibraryApplication: n,
    homeLink: l,
    premiumTabSelected: o,
    shouldShowNitroTab: s,
    isReferralProgramPopoverShowable: c,
    shouldShowMessageRequestsRow: d,
    shouldShowFamilyCenterRow: p,
    createDMButtonVariant: f,
    selectedChannelId: g,
    path: m
  } = e, b = i.useRef(null), _ = i.useRef(null), O = i.useRef(null), E = i.useRef(null), v = w.ZP.useExperiment({
    location: "NitroTabButton"
  });
  return (0, r.jsxs)("nav", {
    className: ea.privateChannels,
    "aria-label": ei.intl.string(ei.t.ZH9aPz),
    children: [(0, r.jsx)(V.Z, {
      childRef: b,
      tutorialId: "direct-messages",
      position: "right",
      offsetX: false,
      children: (0, r.jsx)("div", {
        ref: b,
        className: a()(ea.searchBar, {
          [ea.themedHeaderMobile]: u.tq
        }),
        children: (0, r.jsx)(h.zx, {
          grow: true,
          color: h.zx.Colors.PRIMARY,
          size: h.zx.Sizes.SMALL,
          fullWidth: true,
          onClick: eb,
          children: ei.intl.string(ei.t.LzcpeX)
        })
      })
    }), (0, r.jsxs)($.Z, es(eo({}, e), {
      version: m,
      selectedChannelId: g,
      showDMHeader: true,
      listScrollerRef: O,
      createDMCTAButtonVariant: f,
      children: [(0, r.jsx)(eu, {
        selected: null != m ? m === et.Z5c.FRIENDS : l === et.Z5c.FRIENDS
      }, "friends"), n && t ? (0, r.jsx)(ed, {
        selected: null == m ? null != l && l.startsWith(et.Z5c.APPLICATION_LIBRARY) : m.startsWith(et.Z5c.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: l === et.Z5c.APPLICATION_LIBRARY
      }, "library") : null, d ? (0, r.jsx)(eh, {
        selected: null == m ? null != l && l.startsWith(et.Z5c.MESSAGE_REQUESTS) : m === et.Z5c.MESSAGE_REQUESTS
      }, "message-requests") : null, s ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(M.g, {
          nitroTabButtonRef: E,
          selected: null == m ? o : m.startsWith(et.Z5c.APPLICATION_STORE),
          route: et.Z5c.APPLICATION_STORE,
          locationState: {
            analyticsSource: {
              page: e_(l),
              section: et.jXE.NAVIGATION,
              object: et.qAy.NAVIGATION_LINK
            }
          }
        }, "premium"), c && v.cohort === w.xI.Interactive && (0, r.jsx)(k.F, {
          targetElementRef: E
        })]
      }) : null, (0, r.jsx)(y.i, {
        selected: m === et.Z5c.COLLECTIBLES_SHOP || (null == l ? true : l.startsWith(et.Z5c.COLLECTIBLES_SHOP)),
        listItemRef: _,
        locationState: {
          analyticsSource: {
            page: e_(l),
            section: et.jXE.NAVIGATION,
            object: et.qAy.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), p ? (0, r.jsx)(eg, {
        selected: null != l && l.startsWith(et.Z5c.FAMILY_CENTER) || null != m && m.startsWith(et.Z5c.FAMILY_CENTER)
      }, "family-center") : null, (0, r.jsx)(eE, {}, "section-divider-top"), "full-width" === f && (0, r.jsx)(ep, {}, "create-dm")]
    }))]
  })
});

function eE() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk686918.sectionDivider
  })
}

function ey() {
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
    });
  return (0, Chunk951288.jsx)(eO, {
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
    path: Chunk91192
  })
}