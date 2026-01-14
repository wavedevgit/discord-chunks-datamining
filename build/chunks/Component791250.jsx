/** Chunk was on 1272 **/
/** chunk id: 791250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eT,
  d: () => eS
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk518929 = require("./518929.js"),
  Chunk488634 = require("./488634.js"),
  Chunk899740 = require("./899740.js"),
  Chunk28476 = require("./28476.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
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
  Chunk517319 = require("./517319.js"),
  Chunk497725 = require("./497725.js");

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

function eg(e, t) {
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
let eh = e => {
    var {
      selected: t
    } = e, n = eg(e, ["selected"]);
    let i = (0, A.b5)("PrivateChannels.ICYMIButton"),
      l = (0, c.JA)("icymi");
    return i ? (0, r.jsx)("div", {
      className: ed.friendsButtonContainer,
      children: (0, r.jsx)(v.Qj, ep({
        selected: t,
        route: el.Z5c.ICYMI,
        icon: _.qOE,
        text: (0, r.jsxs)(r.Fragment, {
          children: [ec.intl.string(ec.t["jnXV/V"]), (0, r.jsx)("span", {
            className: ed.preAlphaText,
            children: ec.intl.string(ec.t.Ac2OZA)
          })]
        })
      }, n, l))
    }) : null
  },
  em = e => {
    var {
      selected: t
    } = e, n = eg(e, ["selected"]);
    let l = (0, c.JA)("friends"),
      a = (0, M.If)(),
      o = (0, d.e7)([U.ZP], () => U.ZP.canShowFriendsTabBadge()),
      u = (0, d.e7)([C.Z], () => C.Z.useReducedMotion),
      {
        enabled: f
      } = k.w.useConfig({
        location: "Friends Tab"
      }),
      [h, m] = (0, x.bf)(o && f ? p.z.GIFTING_INTENT_FRIENDS_TAB_BADGE : null, {
        cooldownDurationMs: U.n3
      }),
      E = h === p.z.GIFTING_INTENT_FRIENDS_TAB_BADGE;
    i.useEffect(() => {
      E && (0, T.h)({
        name: s.ImpressionNames.GIFT_INTENT_BADGE,
        type: s.ImpressionTypes.VIEW,
        properties: {
          gift_intent_type: es.hX.FRIEND_ANNIVERSARY
        }
      })
    }, [E]);
    let I = () => {
        let e;
        E ? (er.default.track(el.rMx.GIFT_INTENT_BADGE_CLICKED, {
          gift_intent_type: es.hX.FRIEND_ANNIVERSARY
        }), e = el.pJs.ALL, O.Z.setSection(el.pJs.ALL), m(eo.L.TAKE_ACTION)) : e = en.ZP.getState().section, (0, S.Z)({
          tab_opened: e
        })
      },
      [y, N] = i.useState(false),
      j = () => {
        N(false)
      },
      P = () => {
        N(true)
      },
      A = () => (0, r.jsx)(v.Qj, ef(ep({
        onClick: I,
        interactiveClassName: E ? ed.friendsBadge : true,
        selected: t,
        route: el.Z5c.FRIENDS,
        icon: _.iFz,
        text: ec.intl.string(ec.t.TdEu5X),
        onMouseEnter: P,
        onMouseLeave: j
      }, n, l), {
        children: a > 0 ? (0, r.jsx)(_.mAB, {
          count: a
        }) : null
      }));
    return (0, r.jsx)("div", {
      className: ed.friendsButtonContainer,
      children: E ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(b.i_, {
          title: ec.intl.string(ec.t.Thb5MO),
          body: ec.intl.string(ec.t.kGvgwS),
          position: "left",
          asset: (0, r.jsx)(g._N_, {
            size: 32,
            alt: ec.intl.string(ec.t["4LohBA"])
          }),
          children: A()
        }), !u && (0, r.jsx)(z.Z, {
          className: ed.confetti,
          wind: 0,
          sprites: ea.CA,
          spriteColors: ea.Br,
          firing: y,
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
  eb = e => {
    var {
      selected: t,
      hideGameUpdateProgressIndicator: n
    } = e, i = eg(e, ["selected", "hideGameUpdateProgressIndicator"]);
    let l = (0, c.JA)("library");
    return (0, r.jsx)(v.Qj, ef(ep({
      selected: t,
      route: el.Z5c.APPLICATION_LIBRARY,
      icon: _.vqy,
      text: ec.intl.string(ec.t.cw57ar)
    }, i, l), {
      children: (0, r.jsx)(y.Z, {
        className: a()(ed.downloadProgressCircle, {
          [ed.hideGameUpdateProgressIndicator]: n
        })
      })
    }))
  },
  e_ = () => {
    let e = (0, w.q)();
    return e > 0 ? (0, r.jsx)(_.mAB, {
      count: e
    }) : null
  },
  eE = e => {
    let {
      selected: t
    } = e, n = (0, c.JA)("messageRequests"), {
      channelId: i
    } = (0, Z._)();
    if (!(0, L.a)()) return null;
    let l = null == i ? true : () => E.Z.preload(el.ME, i);
    return (0, r.jsx)(v.Qj, ef(ep({
      selected: t,
      route: el.Z5c.MESSAGE_REQUESTS,
      icon: _._XJ,
      text: ec.intl.string(ec.t.e7GWjQ),
      onClick: l
    }, n), {
      children: (0, r.jsx)(e_, {})
    }))
  },
  eO = e => {
    let {
      selected: t
    } = e, n = ec.intl.string(eu.default.Rkdixs), l = (0, c.JA)("family-center"), [a, o] = i.useState(true);
    return (0, r.jsx)(v.Qj, ef(ep({
      selected: t,
      route: el.Z5c.FAMILY_CENTER,
      icon: _.BFJ,
      text: n,
      onMouseEnter: () => {
        o(true)
      },
      onMouseLeave: () => {
        o(false)
      },
      interactiveClassName: ed.familyCenterLinkButton
    }, l), {
      children: (0, r.jsx)(ev, {
        isParentHovered: a
      })
    }))
  },
  ev = e => {
    let {
      isParentHovered: t
    } = e, i = (0, D.gU)();
    return t ? (0, r.jsx)("div", {
      className: ed.familyCenterButtonContainer,
      children: (0, r.jsx)(v.bU, {
        onClick: () => {
          (0, h.openModalLazy)(async () => {
            let {
              default: e
            } = await n.e("44153").then(n.bind(n, 760949));
            return t => (0, r.jsx)(e, ep({}, t))
          })
        },
        "aria-label": ec.intl.string(ec.t.cpT0Cq),
        icon: _.Dio
      })
    }) : i > 0 ? (0, r.jsx)("div", {
      className: a()(ed.familyCenterButtonContainer, ed.withPadding),
      children: (0, r.jsx)(_.mAB, {
        count: i
      })
    }) : (0, r.jsx)("div", {
      className: ed.familyCenterButtonContainer,
      children: (0, r.jsx)(x.ZP, {
        contentTypes: [p.z.FAMILY_CENTER_NEW_BADGE],
        children: e => {
          let {
            visibleContent: t
          } = e;
          return t === p.z.FAMILY_CENTER_NEW_BADGE ? (0, r.jsx)(_.IGR, {
            text: ec.intl.string(ec.t.y2b7CA),
            color: f.Z.colors.BACKGROUND_BRAND.css
          }) : null
        }
      })
    })
  },
  eI = () => (0, W.$Z)("DM_SEARCH");

function ey(e) {
  switch (e) {
    case el.Z5c.APPLICATION_LIBRARY:
      return el.ZY5.LIBRARY;
    case el.Z5c.FRIENDS:
      return el.ZY5.FRIENDS_LIST;
    case el.Z5c.COLLECTIBLES_SHOP:
      return el.ZY5.COLLECTIBLES_SHOP
  }
  return e.startsWith(el.Z5c.APPLICATION_STORE) ? e === el.Z5c.APPLICATION_STORE ? el.ZY5.STORE_DIRECTORY_HOME : e.startsWith(el.Z5c.APPLICATION_STORE) ? el.ZY5.STORE_DIRECTORY_BROWSE : el.ZY5.STORE_LISTING : el.ZY5.DM_CHANNEL
}
let eC = Chunk473749.memo(function(e) {
  let {
    showLibrary: t,
    hasLibraryApplication: n,
    homeLink: l,
    premiumTabSelected: o,
    shouldShowNitroTab: s,
    showReferralProgramPopover: c,
    showRecurring3PPopover: d,
    shouldShowMessageRequestsRow: p,
    shouldShowFamilyCenterRow: f,
    selectedChannelId: g,
    path: h
  } = e, b = i.useRef(null), E = i.useRef(null), O = i.useRef(null), v = i.useRef(null), y = (0, A.b5)("PrivateChannels"), C = null;
  return c ? C = (0, r.jsx)(V.F, {
    targetElementRef: v
  }) : d && (C = (0, r.jsx)(G.d, {
    targetElementRef: v
  })), (0, r.jsxs)("nav", {
    className: ed.privateChannels,
    "aria-label": ec.intl.string(ec.t.ZH9aP4),
    children: [(0, r.jsx)(q.Z, {
      childRef: b,
      tutorialId: "direct-messages",
      position: "right",
      offsetX: false,
      children: (0, r.jsx)("div", {
        ref: b,
        className: a()(ed.searchBar, {
          [ed.themedHeaderMobile]: u.tq
        }),
        children: (0, r.jsx)(_.Button, {
          fullWidth: true,
          variant: "secondary",
          size: "sm",
          onClick: eI,
          text: ec.intl.format(ec.t.fH9FBy, {
            tooltipHook: (e, t) => (0, r.jsx)(m.Z, {
              children: e
            }, t)
          })
        })
      })
    }), (0, r.jsxs)(I.Z, ef(ep({}, e), {
      version: h,
      selectedChannelId: g,
      listScrollerRef: O,
      children: [(0, r.jsx)(em, {
        selected: null != h ? h === el.Z5c.FRIENDS : l === el.Z5c.FRIENDS
      }, "friends"), y ? (0, r.jsx)(eh, {
        selected: null != h ? h === el.Z5c.ICYMI : l === el.Z5c.ICYMI
      }, "icymi") : null, n && t ? (0, r.jsx)(eb, {
        selected: null == h ? null != l && l.startsWith(el.Z5c.APPLICATION_LIBRARY) : h.startsWith(el.Z5c.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: l === el.Z5c.APPLICATION_LIBRARY
      }, "library") : null, p ? (0, r.jsx)(eE, {
        selected: null == h ? null != l && l.startsWith(el.Z5c.MESSAGE_REQUESTS) : h === el.Z5c.MESSAGE_REQUESTS
      }, "message-requests") : null, s ? (0, r.jsxs)("div", {
        children: [(0, r.jsx)(F.g, {
          nitroTabButtonRef: v,
          selected: null == h ? o : h.startsWith(el.Z5c.APPLICATION_STORE),
          route: el.Z5c.APPLICATION_STORE,
          locationState: {
            analyticsSource: {
              page: ey(l),
              section: el.jXE.NAVIGATION,
              object: el.qAy.NAVIGATION_LINK
            }
          }
        }), C]
      }, "nitro-tab-group") : null, (0, r.jsx)(N.i, {
        selected: h === el.Z5c.COLLECTIBLES_SHOP || (null == l ? true : l.startsWith(el.Z5c.COLLECTIBLES_SHOP)),
        listItemRef: E,
        locationState: {
          analyticsSource: {
            page: ey(l),
            section: el.jXE.NAVIGATION,
            object: el.qAy.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), f ? (0, r.jsx)(eO, {
        selected: null != l && l.startsWith(el.Z5c.FAMILY_CENTER) || null != h && h.startsWith(el.Z5c.FAMILY_CENTER)
      }, "family-center") : null, (0, r.jsx)(Y.Z, {
        selected: null == h ? null != l && l.startsWith(el.Z5c.QUEST_HOME_V2) : h === el.Z5c.QUEST_HOME_V2
      }, "quests"), (0, r.jsx)(eS, {}, "section-divider-top"), (0, r.jsx)(P.Z, {}, "frequent-friends")]
    }))]
  })
});

function eS() {
  return (0, r.jsx)("div", {
    className: ed.sectionDivider
  })
}

function eT() {
  let e = (0, d.e7)([et.Z], () => et.Z.getHomeLink()),
    t = (0, d.e7)([ee.Z], () => {
      if (e === el.Z5c.APPLICATION_STORE) returntrue;
      let t = (0, ei.ZK)(e);
      if (null != t) {
        var n, r;
        return null != (r = null == (n = ee.Z.get(t)) ? true : n.premium) && r
      }
      returnfalse
    }, [e]),
    n = !J.bm.useSetting(),
    {
      theme: i
    } = (0, d.cj)([Q.Z], () => ({
      theme: Q.Z.theme
    })),
    l = (0, d.e7)([X.Z], () => X.Z.hasLibraryApplication()),
    a = (0, d.e7)([$.Z], () => $.Z.getCurrentPath()),
    [s, c] = (0, K.Z)(e => {
      let {
        channelId: t,
        path: n
      } = e;
      return [t, n]
    }, o.X),
    u = (0, F.i)({
      selected: null == c ? t : c.startsWith(el.Z5c.APPLICATION_STORE)
    }),
    f = (0, B.eW)(),
    g = (0, H._h)(),
    h = [];
  (0, j.Kl)() && (f && h.push(p.z.REFERRAL_PROGRAM_POPOVER), g && h.push(p.z.RECURRING_3P_PROMOTION_POPOVER));
  let [m, b] = (0, x.US)(h, true, true), _ = (0, L.a)(), E = function() {
    let e = J.Ex.useSetting(),
      t = (0, R.Z)();
    returntrue === e && true === t
  }();
  return (0, r.jsx)(eC, {
    theme: i,
    showLibrary: n,
    hasLibraryApplication: l,
    storeLink: a,
    homeLink: e,
    premiumTabSelected: t,
    shouldShowNitroTab: u,
    showReferralProgramPopover: m === p.z.REFERRAL_PROGRAM_POPOVER,
    showRecurring3PPopover: m === p.z.RECURRING_3P_PROMOTION_POPOVER,
    shouldShowMessageRequestsRow: _,
    shouldShowFamilyCenterRow: E,
    selectedChannelId: s,
    path: c
  })
}