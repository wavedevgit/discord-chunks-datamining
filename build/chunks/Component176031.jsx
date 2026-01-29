/** Chunk was on 21738 **/
/** chunk id: 176031, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => eC,
  n: () => eS
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk942381 = require("./942381.js"),
  Chunk110259 = require("./110259.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk827734 = require("./827734.js"),
  Chunk492917 = require("./492917.js"),
  Chunk192308 = require("./192308.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk711950 = require("./711950.js"),
  Chunk701363 = require("./701363.jsx"),
  Chunk828100 = require("./828100.jsx"),
  Chunk509963 = require("./509963.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk924283 = require("./924283.js"),
  Chunk139286 = require("./139286.js"),
  Chunk213750 = require("./213750.jsx"),
  Chunk771781 = require("./771781.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk921318 = require("./921318.jsx"),
  Chunk335934 = require("./335934.js"),
  Chunk957283 = require("./957283.js"),
  Chunk411976 = require("./411976.js"),
  Chunk430783 = require("./430783.js"),
  Chunk945276 = require("./945276.js"),
  Chunk834981 = require("./834981.js"),
  Chunk912309 = require("./912309.js"),
  Chunk70730 = require("./70730.js"),
  Chunk275759 = require("./275759.js"),
  Chunk717807 = require("./717807.jsx"),
  Chunk385327 = require("./385327.js"),
  Chunk727949 = require("./727949.js"),
  Chunk466336 = require("./466336.jsx"),
  Chunk615003 = require("./615003.jsx"),
  Chunk442802 = require("./442802.jsx"),
  Chunk67173 = require("./67173.jsx"),
  Chunk793322 = require("./793322.js"),
  Chunk366811 = require("./366811.js"),
  Chunk728321 = require("./728321.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk253932 = require("./253932.js"),
  Chunk189081 = require("./189081.js"),
  Chunk839067 = require("./839067.js"),
  Chunk67480 = require("./67480.js"),
  Chunk619921 = require("./619921.js"),
  Chunk595623 = require("./595623.js"),
  Chunk954571 = require("./954571.js"),
  Chunk541830 = require("./541830.js"),
  Chunk652215 = require("./652215.js"),
  Chunk851110 = require("./851110.js"),
  Chunk49999 = require("./49999.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk842130 = require("./842130.js"),
  Chunk870463 = require("./870463.js");

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

function eh(e, t) {
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
  var n, r, i, l = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }
  if (l = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.getOwnPropertyNames(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
  return l
}
let ef = e => {
    let {
      selected: t
    } = e, n = eg(e, ["selected"]), i = (0, P.c)("PrivateChannels.ICYMIButton"), l = (0, c.rm)("icymi");
    return i ? (0, r.jsx)("div", {
      className: ed.F2,
      children: (0, r.jsx)(O.z9, ep({
        selected: t,
        route: el.BVt.ICYMI,
        icon: _.gXB,
        text: (0, r.jsxs)(r.Fragment, {
          children: [ec.intl.string(ec.t["jnXV/V"]), (0, r.jsx)("span", {
            className: ed.HH,
            children: ec.intl.string(ec.t.Ac2OZA)
          })]
        })
      }, n, l))
    }) : null
  },
  em = e => {
    let {
      selected: t
    } = e, n = eg(e, ["selected"]), l = (0, c.rm)("friends"), a = (0, k.kX)(), s = (0, d.bG)([G.Ay], () => G.Ay.canShowFriendsTabBadge()), u = (0, d.bG)([v.A], () => v.A.useReducedMotion), {
      enabled: h
    } = U.u.useConfig({
      location: "Friends Tab"
    }), [f, m] = (0, j.Wl)(s && h ? p.M.GIFTING_INTENT_FRIENDS_TAB_BADGE : null, {
      cooldownDurationMs: G.hb
    }), b = f === p.M.GIFTING_INTENT_FRIENDS_TAB_BADGE;
    i.useEffect(() => {
      b && (0, C.x)({
        name: o.ImpressionNames.GIFT_INTENT_BADGE,
        type: o.ImpressionTypes.VIEW,
        properties: {
          gift_intent_type: eo.np.FRIEND_ANNIVERSARY
        }
      })
    }, [b]);
    let y = () => {
        let e;
        b ? (er.default.track(el.HAw.GIFT_INTENT_BADGE_CLICKED, {
          gift_intent_type: eo.np.FRIEND_ANNIVERSARY
        }), e = el.m3P.ALL, E.A.setSection(el.m3P.ALL), m(es.i.TAKE_ACTION)) : e = en.Ay.getState().section, (0, S.A)({
          tab_opened: e
        })
      },
      [I, N] = i.useState(false),
      T = () => {
        N(false)
      },
      x = () => {
        N(true)
      },
      P = () => (0, r.jsx)(O.z9, eh(ep({
        onClick: y,
        interactiveClassName: b ? ed.hc : true,
        selected: t,
        route: el.BVt.FRIENDS,
        icon: _.$yI,
        text: ec.intl.string(ec.t.TdEu5X),
        onMouseEnter: x,
        onMouseLeave: T
      }, n, l), {
        children: a > 0 ? (0, r.jsx)(_.hVq, {
          count: a
        }) : null
      }));
    return (0, r.jsx)("div", {
      className: ed.F2,
      children: b ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(A.un, {
          title: ec.intl.string(ec.t.Thb5MO),
          body: ec.intl.string(ec.t.kGvgwS),
          position: "left",
          asset: (0, r.jsx)(g.xhM, {
            size: 32,
            alt: ec.intl.string(ec.t["4LohBA"])
          }),
          children: P()
        }), !u && (0, r.jsx)(K.A, {
          className: ed.t_,
          wind: 0,
          sprites: ea.uI,
          spriteColors: ea._t,
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
      }) : P()
    })
  },
  eA = e => {
    let {
      selected: t,
      hideGameUpdateProgressIndicator: n
    } = e, i = eg(e, ["selected", "hideGameUpdateProgressIndicator"]), l = (0, c.rm)("library");
    return (0, r.jsx)(O.z9, eh(ep({
      selected: t,
      route: el.BVt.APPLICATION_LIBRARY,
      icon: _._z,
      text: ec.intl.string(ec.t.cw57ar)
    }, i, l), {
      children: (0, r.jsx)(I.A, {
        className: a()(ed.Qw, {
          [ed.QI]: n
        })
      })
    }))
  },
  e_ = () => {
    let e = (0, L.W)();
    return e > 0 ? (0, r.jsx)(_.hVq, {
      count: e
    }) : null
  },
  eb = e => {
    let {
      selected: t
    } = e, n = (0, c.rm)("messageRequests"), {
      channelId: i
    } = (0, w.N)();
    if (!(0, R.H)()) return null;
    let l = null == i ? true : () => b.A.preload(el.ME, i);
    return (0, r.jsx)(O.z9, eh(ep({
      selected: t,
      route: el.BVt.MESSAGE_REQUESTS,
      icon: _.u6c,
      text: ec.intl.string(ec.t.e7GWjQ),
      onClick: l
    }, n), {
      children: (0, r.jsx)(e_, {})
    }))
  },
  eE = e => {
    let {
      selected: t
    } = e, n = ec.intl.string(eu.default.Rkdixs), l = (0, c.rm)("family-center"), [a, s] = i.useState(true);
    return (0, r.jsx)(O.z9, eh(ep({
      selected: t,
      route: el.BVt.FAMILY_CENTER,
      icon: _.nFg,
      text: n,
      onMouseEnter: () => {
        s(true)
      },
      onMouseLeave: () => {
        s(false)
      },
      interactiveClassName: ed.M1
    }, l), {
      children: (0, r.jsx)(eO, {
        isParentHovered: a
      })
    }))
  },
  eO = e => {
    let {
      isParentHovered: t
    } = e, i = (0, M.VT)();
    return t ? (0, r.jsx)("div", {
      className: ed.lL,
      children: (0, r.jsx)(O.w_, {
        onClick: () => {
          (0, f.openModalLazy)(async () => {
            let {
              default: e
            } = await n.e("67195").then(n.bind(n, 371158));
            return t => (0, r.jsx)(e, ep({}, t))
          })
        },
        "aria-label": ec.intl.string(ec.t.cpT0Cq),
        icon: _.PGe
      })
    }) : i > 0 ? (0, r.jsx)("div", {
      className: a()(ed.lL, ed.iL),
      children: (0, r.jsx)(_.hVq, {
        count: i
      })
    }) : (0, r.jsx)("div", {
      className: ed.lL,
      children: (0, r.jsx)(j.Ay, {
        contentTypes: [p.M.FAMILY_CENTER_NEW_BADGE],
        children: e => {
          let {
            visibleContent: t
          } = e;
          return t === p.M.FAMILY_CENTER_NEW_BADGE ? (0, r.jsx)(_.LpS, {
            text: ec.intl.string(ec.t.y2b7CA),
            color: h.A.colors.BACKGROUND_BRAND.css
          }) : null
        }
      })
    })
  },
  ey = () => (0, q.WU)("DM_SEARCH");

function eI(e) {
  switch (e) {
    case el.BVt.APPLICATION_LIBRARY:
      return el.liQ.LIBRARY;
    case el.BVt.FRIENDS:
      return el.liQ.FRIENDS_LIST;
    case el.BVt.COLLECTIBLES_SHOP:
      return el.liQ.COLLECTIBLES_SHOP
  }
  return e.startsWith(el.BVt.APPLICATION_STORE) ? e === el.BVt.APPLICATION_STORE ? el.liQ.STORE_DIRECTORY_HOME : e.startsWith(el.BVt.APPLICATION_STORE) ? el.liQ.STORE_DIRECTORY_BROWSE : el.liQ.STORE_LISTING : el.liQ.DM_CHANNEL
}
let ev = Chunk64700.memo(function(e) {
  let {
    showLibrary: t,
    hasLibraryApplication: n,
    homeLink: l,
    premiumTabSelected: s,
    shouldShowNitroTab: o,
    showReferralProgramPopover: c,
    showRecurring3PPopover: d,
    shouldShowMessageRequestsRow: p,
    shouldShowFamilyCenterRow: h,
    selectedChannelId: g,
    path: f
  } = e, A = i.useRef(null), b = i.useRef(null), E = i.useRef(null), O = i.useRef(null), I = (0, P.c)("PrivateChannels"), v = null;
  return c ? v = (0, r.jsx)(F.V, {
    targetElementRef: O
  }) : d && (v = (0, r.jsx)(V.A, {
    targetElementRef: O
  })), (0, r.jsxs)("nav", {
    className: ed.AB,
    "aria-label": ec.intl.string(ec.t.ZH9aP4),
    children: [(0, r.jsx)(Q.A, {
      childRef: A,
      tutorialId: "direct-messages",
      position: "right",
      offsetX: false,
      children: (0, r.jsx)("div", {
        ref: A,
        className: a()(ed.ON, {
          [ed.jD]: u.Fr
        }),
        children: (0, r.jsx)(_.Button, {
          fullWidth: true,
          variant: "secondary",
          size: "sm",
          onClick: ey,
          text: ec.intl.format(ec.t.fH9FBy, {
            tooltipHook: (e, t) => (0, r.jsx)(m.A, {
              children: e
            }, t)
          })
        })
      })
    }), (0, r.jsxs)(y.A, eh(ep({}, e), {
      version: f,
      selectedChannelId: g,
      listScrollerRef: E,
      children: [(0, r.jsx)(em, {
        selected: null != f ? f === el.BVt.FRIENDS : l === el.BVt.FRIENDS
      }, "friends"), I ? (0, r.jsx)(ef, {
        selected: null != f ? f === el.BVt.ICYMI : l === el.BVt.ICYMI
      }, "icymi") : null, n && t ? (0, r.jsx)(eA, {
        selected: null == f ? null != l && l.startsWith(el.BVt.APPLICATION_LIBRARY) : f.startsWith(el.BVt.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: l === el.BVt.APPLICATION_LIBRARY
      }, "library") : null, p ? (0, r.jsx)(eb, {
        selected: null == f ? null != l && l.startsWith(el.BVt.MESSAGE_REQUESTS) : f === el.BVt.MESSAGE_REQUESTS
      }, "message-requests") : null, o ? (0, r.jsxs)("div", {
        children: [(0, r.jsx)(Y.o, {
          nitroTabButtonRef: O,
          selected: null == f ? s : f.startsWith(el.BVt.APPLICATION_STORE),
          route: el.BVt.APPLICATION_STORE,
          locationState: {
            analyticsSource: {
              page: eI(l),
              section: el.JJy.NAVIGATION,
              object: el.ZSU.NAVIGATION_LINK
            }
          }
        }), v]
      }, "nitro-tab-group") : null, (0, r.jsx)(N.i, {
        selected: f === el.BVt.COLLECTIBLES_SHOP || (null == l ? true : l.startsWith(el.BVt.COLLECTIBLES_SHOP)),
        listItemRef: b,
        locationState: {
          analyticsSource: {
            page: eI(l),
            section: el.JJy.NAVIGATION,
            object: el.ZSU.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), h ? (0, r.jsx)(eE, {
        selected: null != l && l.startsWith(el.BVt.FAMILY_CENTER) || null != f && f.startsWith(el.BVt.FAMILY_CENTER)
      }, "family-center") : null, (0, r.jsx)(W.A, {
        selected: null == f ? null != l && l.startsWith(el.BVt.QUEST_HOME_V2) : f === el.BVt.QUEST_HOME_V2
      }, "quests"), (0, r.jsx)(eS, {}, "section-divider-top"), (0, r.jsx)(x.A, {}, "frequent-friends")]
    }))]
  })
});

function eS() {
  return (0, r.jsx)("div", {
    className: ed.ts
  })
}

function eC() {
  let e, t, n = (0, d.bG)([et.A], () => et.A.getHomeLink()),
    i = (0, d.bG)([ee.A], () => {
      if (n === el.BVt.APPLICATION_STORE) returntrue;
      let e = (0, ei.qt)(n);
      if (null != e) {
        var t, r;
        return null != (t = null == (r = ee.A.get(e)) ? true : r.premium) && t
      }
      returnfalse
    }, [n]),
    l = !Z.l_.useSetting(),
    {
      theme: a
    } = (0, d.cf)([X.A], () => ({
      theme: X.A.theme
    })),
    o = (0, d.bG)([$.A], () => $.A.hasLibraryApplication()),
    c = (0, d.bG)([J.A], () => J.A.getCurrentPath()),
    [u, h] = (0, z.A)(e => {
      let {
        channelId: t,
        path: n
      } = e;
      return [t, n]
    }, s.x),
    g = (0, Y.P)({
      selected: null == h ? i : h.startsWith(el.BVt.APPLICATION_STORE)
    }),
    f = (0, H.Tp)(),
    m = (0, B.c7)(),
    A = [];
  (0, T.Tc)() && (f && A.push(p.M.REFERRAL_PROGRAM_POPOVER), m && A.push(p.M.RECURRING_3P_PROMOTION_POPOVER));
  let [_, b] = (0, j.kn)(A, true, true), E = (0, R.H)(), O = (e = Z.dm.useSetting(), t = (0, D.A)(), true === e && true === t);
  return (0, r.jsx)(ev, {
    theme: a,
    showLibrary: l,
    hasLibraryApplication: o,
    storeLink: c,
    homeLink: n,
    premiumTabSelected: i,
    shouldShowNitroTab: g,
    showReferralProgramPopover: _ === p.M.REFERRAL_PROGRAM_POPOVER,
    showRecurring3PPopover: _ === p.M.RECURRING_3P_PROMOTION_POPOVER,
    shouldShowMessageRequestsRow: E,
    shouldShowFamilyCenterRow: O,
    selectedChannelId: u,
    path: h
  })
}