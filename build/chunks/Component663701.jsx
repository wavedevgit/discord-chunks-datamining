/** Chunk was on 1272 **/
/** chunk id: 663701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ew,
  d: () => eZ
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
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk529103 = require("./529103.js"),
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
  Chunk515753 = require("./515753.jsx"),
  Chunk831218 = require("./831218.jsx"),
  Chunk339149 = require("./339149.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk675654 = require("./675654.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk602698 = require("./602698.js"),
  Chunk686918 = require("./686918.js");

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

function e_(e, t) {
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
let eE = e => {
    var {
      selected: t
    } = e, n = eb(e, ["selected"]);
    let i = (0, A.b5)("PrivateChannels.ICYMIButton"),
      l = (0, u.JA)("icymi");
    return i ? (0, r.jsx)("div", {
      className: eh.friendsButtonContainer,
      children: (0, r.jsx)(es.Qj, eg({
        selected: t,
        route: eu.Z5c.ICYMI,
        icon: _.qOE,
        text: (0, r.jsxs)(r.Fragment, {
          children: [ef.intl.string(ef.t["jnXV/V"]), (0, r.jsx)("span", {
            className: eh.preAlphaText,
            children: ef.intl.string(ef.t.Ac2OZA)
          })]
        })
      }, n, l))
    }) : null
  },
  eO = e => {
    var {
      selected: t
    } = e, n = eb(e, ["selected"]);
    let l = (0, u.JA)("friends"),
      a = (0, k.If)(),
      s = (0, p.e7)([B.Z], () => B.Z.canShowFriendsTabBadge()),
      o = (0, p.e7)([O.Z], () => O.Z.useReducedMotion),
      {
        enabled: d
      } = U.w.useExperiment({
        location: "Friends Tab"
      }, {
        autoTrackExposure: false
      }),
      f = s && d;
    i.useEffect(() => {
      f && (0, v.h)({
        name: c.ImpressionNames.GIFT_INTENT_BADGE,
        type: c.ImpressionTypes.VIEW,
        properties: {
          gift_intent_type: ep.hX.FRIEND_ANNIVERSARY
        }
      })
    }, [f]);
    let [m, h] = i.useState(false);
    return (0, r.jsxs)("div", {
      className: eh.friendsButtonContainer,
      children: [(0, r.jsx)(es.Qj, e_(eg({
        onClick: () => {
          let e;
          f ? (el.default.track(eu.rMx.GIFT_INTENT_BADGE_CLICKED, {
            gift_intent_type: ep.hX.FRIEND_ANNIVERSARY
          }), e = eu.pJs.ALL, E.Z.setSection(eu.pJs.ALL), (0, G.Gk)()) : e = ei.ZP.getState().section, (0, I.Z)({
            tab_opened: e
          })
        },
        interactiveClassName: f ? eh.friendsBadge : true,
        selected: t,
        route: eu.Z5c.FRIENDS,
        icon: _.iFz,
        text: ef.intl.string(ef.t.TdEu5X),
        onMouseEnter: () => {
          h(true)
        },
        onMouseLeave: () => {
          h(false)
        }
      }, n, l), {
        children: a > 0 ? (0, r.jsx)(_.mAB, {
          count: a
        }) : null
      })), f && !o && (0, r.jsx)(W.Z, {
        className: eh.confetti,
        wind: 0,
        sprites: ed.CA,
        spriteColors: ed.Br,
        firing: m,
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
  eI = e => {
    var {
      selected: t
    } = e, n = eb(e, ["selected"]);
    let i = (0, u.JA)("activity");
    return (0, r.jsx)("div", {
      className: eh.friendsButtonContainer,
      children: (0, r.jsx)(es.Qj, eg({
        selected: t,
        route: eu.Z5c.ME_ACTIVITY,
        icon: _.g8d,
        text: ef.intl.string(ef.t.IC5Ann)
      }, n, i))
    })
  },
  ev = e => {
    var {
      selected: t,
      hideGameUpdateProgressIndicator: n
    } = e, i = eb(e, ["selected", "hideGameUpdateProgressIndicator"]);
    let l = (0, u.JA)("library");
    return (0, r.jsx)(es.Qj, e_(eg({
      selected: t,
      route: eu.Z5c.APPLICATION_LIBRARY,
      icon: _.vqy,
      text: ef.intl.string(ef.t.cw57ar)
    }, i, l), {
      children: (0, r.jsx)(ec.Z, {
        className: a()(eh.downloadProgressCircle, {
          [eh.hideGameUpdateProgressIndicator]: n
        })
      })
    }))
  },
  ey = () => (0, Chunk951288.jsx)("li", {
    className: Chunk686918.createDMButtonContainer,
    children: (0, Chunk951288.jsx)(Chunk518311.l, {
      fullWidth: true,
      text: Chunk388032.intl.string(Chunk388032.t["6Urw1t"]),
      icon: Chunk481060.kL_,
      size: "sm",
      subscribeToGlobalHotkey: true
    })
  }),
  eC = () => {
    let e = (0, Chunk899740.q)();
    return module > 0 ? (0, Chunk951288.jsx)(Chunk481060.mAB, {
      count: module
    }) : null
  },
  eS = e => {
    let {
      selected: t
    } = e, n = (0, u.JA)("messageRequests"), {
      channelId: i
    } = (0, Z._)();
    if (!(0, L.a)()) return null;
    let l = null == i ? true : () => b.Z.preload(eu.ME, i);
    return (0, r.jsx)(es.Qj, e_(eg({
      selected: t,
      route: eu.Z5c.MESSAGE_REQUESTS,
      icon: _._XJ,
      text: ef.intl.string(ef.t.e7GWjQ),
      onClick: l
    }, n), {
      children: (0, r.jsx)(eC, {})
    }))
  },
  eT = e => {
    let {
      selected: t
    } = e, n = ef.intl.string(em.default.Rkdixs), l = (0, u.JA)("family-center"), [a, s] = i.useState(true);
    return (0, r.jsx)(es.Qj, e_(eg({
      selected: t,
      route: eu.Z5c.FAMILY_CENTER,
      icon: _.BFJ,
      text: n,
      onMouseEnter: () => {
        s(true)
      },
      onMouseLeave: () => {
        s(false)
      },
      interactiveClassName: eh.familyCenterLinkButton
    }, l), {
      children: (0, r.jsx)(eN, {
        isParentHovered: a
      })
    }))
  },
  eN = e => {
    let {
      isParentHovered: t
    } = e, i = (0, D.gU)();
    return t ? (0, r.jsx)("div", {
      className: eh.familyCenterButtonContainer,
      children: (0, r.jsx)(es.bU, {
        onClick: () => {
          (0, m.ZD)(async () => {
            let {
              default: e
            } = await n.e("44153").then(n.bind(n, 760949));
            return t => (0, r.jsx)(e, eg({}, t))
          })
        },
        "aria-label": ef.intl.string(ef.t.cpT0Cq),
        icon: _.Dio
      })
    }) : i > 0 ? (0, r.jsx)("div", {
      className: a()(eh.familyCenterButtonContainer, eh.withPadding),
      children: (0, r.jsx)(_.mAB, {
        count: i
      })
    }) : (0, r.jsx)("div", {
      className: eh.familyCenterButtonContainer,
      children: (0, r.jsx)(N.ZP, {
        contentTypes: [f.z.FAMILY_CENTER_NEW_BADGE],
        children: e => {
          let {
            visibleContent: t
          } = e;
          return t === f.z.FAMILY_CENTER_NEW_BADGE ? (0, r.jsx)(_.IGR, {
            text: ef.intl.string(ef.t.y2b7CA),
            color: C.Z.BG_BRAND
          }) : null
        }
      })
    })
  },
  ej = () => (0, Chunk951288.jsxs)("div", {
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
  eP = () => (0, Chunk51596.$Z)("DM_SEARCH");

function ex(e) {
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
let eA = Chunk647438.memo(function(e) {
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
    createDMButtonVariant: m,
    selectedChannelId: _,
    path: b,
    onlyShowDMs: E,
    hideAllDMs: O
  } = e, I = i.useRef(null), v = i.useRef(null), C = i.useRef(null), S = i.useRef(null), T = M.o.useConfig({
    location: "privatechannels"
  }).friendsTab, N = (0, A.b5)("PrivateChannels"), P = null;
  return c ? P = (0, r.jsx)(z.F, {
    targetElementRef: S
  }) : u && (P = (0, r.jsx)(H.d, {
    targetElementRef: S
  })), (0, r.jsxs)("nav", {
    className: eh.privateChannels,
    "aria-label": ef.intl.string(ef.t.ZH9aP4),
    children: [E ? (0, r.jsx)(ej, {}) : (0, r.jsx)(J.Z, {
      childRef: I,
      tutorialId: "direct-messages",
      position: "right",
      offsetX: false,
      children: (0, r.jsx)("div", {
        ref: I,
        className: a()(eh.searchBar, {
          [eh.themedHeaderMobile]: d.tq
        }),
        children: (0, r.jsx)(g.zx, {
          grow: true,
          color: g.zx.Colors.PRIMARY,
          size: g.zx.Sizes.SMALL,
          fullWidth: true,
          onClick: eP,
          children: (0, r.jsx)(h.Z, {
            children: ef.intl.string(ef.t.LzcpeZ)
          })
        })
      })
    }), (0, r.jsxs)(eo.Z, e_(eg({}, e), {
      version: b,
      selectedChannelId: _,
      showDMHeader: !O && !E,
      hideAllDMs: O,
      listScrollerRef: C,
      createDMCTAButtonVariant: m,
      children: [T && !E ? (0, r.jsx)(eI, {
        selected: null != b ? b === eu.Z5c.ME_ACTIVITY : l === eu.Z5c.ME_ACTIVITY
      }, "activity_experimental") : null, E ? null : (0, r.jsx)(eO, {
        selected: null != b ? b === eu.Z5c.FRIENDS : l === eu.Z5c.FRIENDS
      }, "friends"), !E && N ? (0, r.jsx)(eE, {
        selected: null != b ? b === eu.Z5c.ICYMI : l === eu.Z5c.ICYMI
      }, "icymi") : null, n && t && !E ? (0, r.jsx)(ev, {
        selected: null == b ? null != l && l.startsWith(eu.Z5c.APPLICATION_LIBRARY) : b.startsWith(eu.Z5c.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: l === eu.Z5c.APPLICATION_LIBRARY
      }, "library") : null, p && !E ? (0, r.jsx)(eS, {
        selected: null == b ? null != l && l.startsWith(eu.Z5c.MESSAGE_REQUESTS) : b === eu.Z5c.MESSAGE_REQUESTS
      }, "message-requests") : null, o && !E ? (0, r.jsxs)("div", {
        children: [(0, r.jsx)(Y.g, {
          nitroTabButtonRef: S,
          selected: null == b ? s : b.startsWith(eu.Z5c.APPLICATION_STORE),
          route: eu.Z5c.APPLICATION_STORE,
          locationState: {
            analyticsSource: {
              page: ex(l),
              section: eu.jXE.NAVIGATION,
              object: eu.qAy.NAVIGATION_LINK
            }
          }
        }), P]
      }, "nitro-tab-group") : null, E ? null : (0, r.jsx)(y.i, {
        selected: b === eu.Z5c.COLLECTIBLES_SHOP || (null == l ? true : l.startsWith(eu.Z5c.COLLECTIBLES_SHOP)),
        listItemRef: v,
        locationState: {
          analyticsSource: {
            page: ex(l),
            section: eu.jXE.NAVIGATION,
            object: eu.qAy.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), f && !E ? (0, r.jsx)(eT, {
        selected: null != l && l.startsWith(eu.Z5c.FAMILY_CENTER) || null != b && b.startsWith(eu.Z5c.FAMILY_CENTER)
      }, "family-center") : null, E ? null : (0, r.jsx)(q.Z, {
        selected: null == b ? null != l && l.startsWith(eu.Z5c.QUEST_HOME_V2) : b === eu.Z5c.QUEST_HOME_V2
      }, "quests"), E || O ? null : (0, r.jsx)(eZ, {}, "section-divider-top"), O ? null : (0, r.jsx)(j.Z, {}, "frequent-friends"), "full-width" !== m || O || E ? null : (0, r.jsx)(ey, {}, "create-dm")]
    }))]
  })
});

function eZ() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk686918.sectionDivider
  })
}

function ew() {
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
    m = (0, Chunk93237.eW)(),
    h = (0, Chunk675957._h)(),
    g = [];
  (0, Chunk211644.Kl)() && (Chunk952265 && Chunk755721.push(Chunk704215.z.REFERRAL_PROGRAM_POPOVER), Chunk194983 && Chunk755721.push(Chunk704215.z.RECURRING_3P_PROMOTION_POPOVER));
  let [_, b] = (0, Chunk426032.US)(Chunk755721, true, true), E = (0, Chunk28476.a)(), O = function() {
    let e = Chunk695346.Ex.useSetting(),
      t = (0, Chunk880257.Z)();
    returntrue === module && true === exports
  }(), I = (0, Chunk882579.U)("PrivateChannels", {
    autoTrackExposure: true
  }), {
    pathname: v
  } = (0, Chunk843611.TH)(), y = Chunk213609.startsWith(Chunk981631.Z5c.CHANNEL(Chunk981631.ME)) && Chunk213609 !== Chunk981631.Z5c.CHANNEL(Chunk981631.ME) && Chunk213609 !== Chunk981631.Z5c.ME_ACTIVITY, C = Chunk365113.o.useConfig({
    location: "privatechannels"
  }).dmsTab;
  return (0, Chunk951288.jsx)(eA, {
    theme: Chunk647438,
    showLibrary: require,
    hasLibraryApplication: Chunk120356,
    storeLink: a,
    homeLink: module,
    premiumTabSelected: exports,
    shouldShowNitroTab: Chunk873546,
    showReferralProgramPopover: Chunk481060 === Chunk704215.z.REFERRAL_PROGRAM_POPOVER,
    showRecurring3PPopover: Chunk481060 === Chunk704215.z.RECURRING_3P_PROMOTION_POPOVER,
    shouldShowMessageRequestsRow: Chunk529103,
    shouldShowFamilyCenterRow: Chunk607070,
    createDMButtonVariant: Chunk557968,
    selectedChannelId: Chunk990547,
    path: Chunk91192,
    onlyShowDMs: Chunk463119 && Chunk377171,
    hideAllDMs: !Chunk463119 && Chunk377171
  })
}