/** Chunk was on 1272 **/
/** chunk id: 663701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => e_
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk94171 = require("./94171.js"),
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
  Chunk916723 = require("./916723.js"),
  Chunk416350 = require("./416350.js");

function el(e) {
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

function ea(e, t) {
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

function eo(e, t) {
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
let es = e => {
    var {
      selected: t
    } = e, n = eo(e, ["selected"]);
    let l = (0, c.JA)("friends"),
      a = (0, j.If)(),
      o = (0, d.e7)([w.Z], () => w.Z.canShowFriendsTabBadge()),
      u = (0, d.e7)([_.Z], () => _.Z.useReducedMotion),
      {
        enabled: p
      } = x.w.useExperiment({
        location: "Friends Tab"
      }, {
        autoTrackExposure: false
      }),
      h = o && p;
    i.useEffect(() => {
      h && (0, E.h)({
        name: s.ImpressionNames.GIFT_INTENT_BADGE,
        type: s.ImpressionTypes.VIEW,
        properties: {
          gift_intent_type: et.hX.FRIEND_ANNIVERSARY
        }
      })
    }, [h]);
    let [f, m] = i.useState(false);
    return (0, r.jsxs)("div", {
      className: ei.friendsButtonContainer,
      children: [(0, r.jsx)(X.Qj, ea(el({
        onClick: () => {
          let e;
          h ? (K.default.track($.rMx.GIFT_INTENT_BADGE_CLICKED, {
            gift_intent_type: et.hX.FRIEND_ANNIVERSARY
          }), e = $.pJs.ALL, b.Z.setSection($.pJs.ALL), (0, Z.Gk)()) : e = Y.ZP.getState().section, (0, O.Z)({
            tab_opened: e
          })
        },
        interactiveClassName: h ? ei.friendsBadge : true,
        selected: t,
        route: $.Z5c.FRIENDS,
        icon: g.iFz,
        text: en.intl.string(en.t.TdEu5e),
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
      })), h && !u && (0, r.jsx)(k.Z, {
        className: ei.confetti,
        wind: 0,
        sprites: ee.CA,
        spriteColors: ee.Br,
        firing: f,
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
  ec = e => {
    var {
      selected: t,
      hideGameUpdateProgressIndicator: n
    } = e, i = eo(e, ["selected", "hideGameUpdateProgressIndicator"]);
    let l = (0, c.JA)("library");
    return (0, r.jsx)(X.Qj, ea(el({
      selected: t,
      route: $.Z5c.APPLICATION_LIBRARY,
      icon: g.vqy,
      text: en.intl.string(en.t.cw57am)
    }, i, l), {
      children: (0, r.jsx)(J.Z, {
        className: a()(ei.downloadProgressCircle, {
          [ei.hideGameUpdateProgressIndicator]: n
        })
      })
    }))
  },
  eu = () => {
    let e = (0, Chunk899740.q)();
    return module > 0 ? (0, Chunk255367.jsx)(Chunk481060.mAB, {
      count: module
    }) : null
  },
  ed = e => {
    let {
      selected: t
    } = e, n = (0, c.JA)("messageRequests"), {
      channelId: i
    } = (0, C._)();
    if (!(0, N.a)()) return null;
    let l = null == i ? true : () => m.Z.preload($.ME, i);
    return (0, r.jsx)(X.Qj, ea(el({
      selected: t,
      route: $.Z5c.MESSAGE_REQUESTS,
      icon: g._XJ,
      text: en.intl.string(en.t.e7GWjY),
      onClick: l
    }, n), {
      children: (0, r.jsx)(eu, {})
    }))
  },
  ep = e => {
    let {
      selected: t
    } = e, n = en.intl.string(er.default.Rkdixs), l = (0, c.JA)("family-center"), [a, o] = i.useState(true);
    return (0, r.jsx)(X.Qj, ea(el({
      selected: t,
      route: $.Z5c.FAMILY_CENTER,
      icon: g.BFJ,
      text: n,
      onMouseEnter: () => {
        o(true)
      },
      onMouseLeave: () => {
        o(false)
      },
      interactiveClassName: ei.familyCenterLinkButton
    }, l), {
      children: (0, r.jsx)(eh, {
        isParentHovered: a
      })
    }))
  },
  eh = e => {
    let {
      isParentHovered: t
    } = e, i = (0, P.gU)();
    return t ? (0, r.jsx)("div", {
      className: ei.familyCenterButtonContainer,
      children: (0, r.jsx)(X.bU, {
        onClick: () => {
          (0, h.ZD)(async () => {
            let {
              default: e
            } = await n.e("44153").then(n.bind(n, 760949));
            return t => (0, r.jsx)(e, el({}, t))
          })
        },
        "aria-label": en.intl.string(en.t.cpT0Cg),
        icon: g.Dio
      })
    }) : i > 0 ? (0, r.jsx)("div", {
      className: a()(ei.familyCenterButtonContainer, ei.withPadding),
      children: (0, r.jsx)(g.mAB, {
        count: i
      })
    }) : (0, r.jsx)("div", {
      className: ei.familyCenterButtonContainer,
      children: (0, r.jsx)(I.ZP, {
        contentTypes: [p.z.FAMILY_CENTER_NEW_BADGE],
        children: e => {
          let {
            visibleContent: t
          } = e;
          return t === p.z.FAMILY_CENTER_NEW_BADGE ? (0, r.jsx)(g.IGR, {
            text: en.intl.string(en.t.y2b7CA),
            color: v.Z.BG_BRAND
          }) : null
        }
      })
    })
  },
  ef = () => (0, Chunk51596.$Z)("DM_SEARCH");

function eg(e) {
  switch (e) {
    case $.Z5c.APPLICATION_LIBRARY:
      return $.ZY5.LIBRARY;
    case $.Z5c.FRIENDS:
      return $.ZY5.FRIENDS_LIST;
    case $.Z5c.COLLECTIBLES_SHOP:
      return $.ZY5.COLLECTIBLES_SHOP
  }
  return e.startsWith($.Z5c.APPLICATION_STORE) ? e === $.Z5c.APPLICATION_STORE ? $.ZY5.STORE_DIRECTORY_HOME : e.startsWith($.Z5c.APPLICATION_STORE) ? $.ZY5.STORE_DIRECTORY_BROWSE : $.ZY5.STORE_LISTING : $.ZY5.DM_CHANNEL
}
let em = Chunk73800.memo(function(e) {
  let {
    showLibrary: t,
    hasLibraryApplication: n,
    homeLink: l,
    premiumTabSelected: o,
    shouldShowNitroTab: s,
    isReferralProgramPopoverShowable: c,
    shouldShowMessageRequestsRow: d,
    shouldShowFamilyCenterRow: p,
    selectedChannelId: h,
    path: g
  } = e, m = i.useRef(null), b = i.useRef(null), _ = i.useRef(null), O = i.useRef(null), E = A.ZP.useExperiment({
    location: "NitroTabButton"
  });
  return (0, r.jsxs)("nav", {
    className: ei.privateChannels,
    "aria-label": en.intl.string(en.t.ZH9aPz),
    children: [(0, r.jsx)(G.Z, {
      childRef: m,
      tutorialId: "direct-messages",
      position: "right",
      offsetX: false,
      children: (0, r.jsx)("div", {
        ref: m,
        className: a()(ei.searchBar, {
          [ei.themedHeaderMobile]: u.tq
        }),
        children: (0, r.jsx)(f.zx, {
          grow: true,
          color: f.zx.Colors.PRIMARY,
          size: f.zx.Sizes.SMALL,
          fullWidth: true,
          onClick: ef,
          children: en.intl.string(en.t.LzcpeX)
        })
      })
    }), (0, r.jsxs)(Q.Z, ea(el({}, e), {
      version: g,
      selectedChannelId: h,
      showDMHeader: true,
      listScrollerRef: _,
      children: [(0, r.jsx)(es, {
        selected: null != g ? g === $.Z5c.FRIENDS : l === $.Z5c.FRIENDS
      }, "friends"), n && t ? (0, r.jsx)(ec, {
        selected: null == g ? null != l && l.startsWith($.Z5c.APPLICATION_LIBRARY) : g.startsWith($.Z5c.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: l === $.Z5c.APPLICATION_LIBRARY
      }, "library") : null, d ? (0, r.jsx)(ed, {
        selected: null == g ? null != l && l.startsWith($.Z5c.MESSAGE_REQUESTS) : g === $.Z5c.MESSAGE_REQUESTS
      }, "message-requests") : null, s ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(D.g, {
          nitroTabButtonRef: O,
          selected: null == g ? o : g.startsWith($.Z5c.APPLICATION_STORE),
          route: $.Z5c.APPLICATION_STORE,
          locationState: {
            analyticsSource: {
              page: eg(l),
              section: $.jXE.NAVIGATION,
              object: $.qAy.NAVIGATION_LINK
            }
          }
        }, "premium"), c && E.cohort === A.xI.Interactive && (0, r.jsx)(R.F, {
          targetElementRef: O
        })]
      }) : null, (0, r.jsx)(y.i, {
        selected: g === $.Z5c.COLLECTIBLES_SHOP || (null == l ? true : l.startsWith($.Z5c.COLLECTIBLES_SHOP)),
        listItemRef: b,
        listScrollerRef: _,
        locationState: {
          analyticsSource: {
            page: eg(l),
            section: $.jXE.NAVIGATION,
            object: $.qAy.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), p ? (0, r.jsx)(ep, {
        selected: null != l && l.startsWith($.Z5c.FAMILY_CENTER) || null != g && g.startsWith($.Z5c.FAMILY_CENTER)
      }, "family-center") : null, (0, r.jsx)(eb, {}, "section-divider-top")]
    }))]
  })
});

function eb() {
  return (0, Chunk255367.jsx)("div", {
    className: Chunk416350.sectionDivider
  })
}

function e_() {
  let e = (0, Chunk442837.e7)([Chunk774343.Z], () => Chunk774343.Z.getHomeLink()),
    t = (0, Chunk442837.e7)([Chunk55563.Z], () => {
      if (module === Chunk981631.Z5c.APPLICATION_STORE) returntrue;
      let t = (0, Chunk814225.ZK)(module);
      if (null != exports) {
        var n, r;
        return null != (r = null == (n = Chunk55563.Z.get(exports)) ? true : require.premium) && Chunk255367
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
    }, Chunk94171.X),
    u = (0, Chunk457396.i)({
      selected: null == Chunk91192 ? exports : Chunk91192.startsWith(Chunk981631.Z5c.APPLICATION_STORE)
    }),
    p = (0, Chunk93237.eW)(),
    h = (0, Chunk28476.a)(),
    f = function() {
      let e = Chunk695346.Ex.useSetting(),
        t = (0, Chunk880257.Z)();
      returntrue === module && true === exports
    }();
  return (0, Chunk255367.jsx)(em, {
    theme: Chunk73800,
    showLibrary: require,
    hasLibraryApplication: Chunk120356,
    storeLink: a,
    homeLink: module,
    premiumTabSelected: exports,
    shouldShowNitroTab: Chunk873546,
    isReferralProgramPopoverShowable: Chunk704215,
    shouldShowMessageRequestsRow: Chunk952265,
    shouldShowFamilyCenterRow: Chunk755721,
    selectedChannelId: Chunk990547,
    path: Chunk91192
  })
}