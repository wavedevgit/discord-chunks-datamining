/** Chunk was on 1272 **/
/** chunk id: 267161, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => ei,
  useAppSidebarState: () => ee
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk843611 = require("./843611.js"),
  Chunk879690 = require("./879690.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk812206 = require("./812206.js"),
  Chunk174556 = require("./174556.js"),
  Chunk320007 = require("./320007.jsx"),
  Chunk540059 = require("./540059.js"),
  Chunk336219 = require("./336219.js"),
  Chunk609174 = require("./609174.jsx"),
  Chunk916069 = require("./916069.js"),
  Chunk591472 = require("./591472.js"),
  Chunk111666 = require("./111666.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk300986 = require("./300986.jsx"),
  Chunk314451 = require("./314451.jsx"),
  Chunk35583 = require("./35583.jsx"),
  Chunk821020 = require("./821020.js"),
  Chunk370774 = require("./370774.js"),
  Chunk340137 = require("./340137.jsx"),
  Chunk522474 = require("./522474.js"),
  Chunk51596 = require("./51596.js"),
  Chunk141321 = require("./141321.jsx"),
  Chunk819439 = require("./819439.js"),
  Chunk296241 = require("./296241.jsx"),
  Chunk165017 = require("./165017.js"),
  Chunk984802 = require("./984802.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk451478 = require("./451478.js"),
  Chunk768581 = require("./768581.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk228488 = require("./228488.js"),
  Chunk950796 = require("./950796.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk741764 = require("./741764.js"),
  Chunk408491 = require("./408491.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk345909 = require("./345909.js"),
  Chunk82504 = require("./82504.js");

function J(e) {
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

function $(e, t) {
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
let ee = (0, Chunk879690.U)(() => ({
  isOpen: true
}));

function et(e) {
  let t, {
      selectedChannelId: n,
      withFastTravel: l,
      focusSectionProps: s
    } = e,
    d = (0, o.TH)(),
    f = (0, c.e7)([M.Z], () => M.Z.getGuildId()),
    h = (0, c.e7)([R.Z], () => R.Z.getChannel(n), [n]),
    g = null != f ? f : null == h ? true : h.guild_id,
    m = (0, c.e7)([D.Z], () => D.Z.getGuild(g), [g]),
    b = (0, _.Z)(),
    E = (0, N.D)(),
    {
      application: v,
      isFrameInFocusedMode: I
    } = (0, c.cj)([p.Z, O.Z], () => {
      let e = O.Z.getConnectedFrame();
      return {
        application: p.Z.getApplication(null == e ? true : e.applicationId),
        isFrameInFocusedMode: O.Z.getFrameLayoutMode() === K.U.FOCUSED
      }
    }),
    C = null != v ? G.ZP.getApplicationIconURL({
      id: v.id,
      icon: v.icon,
      bot: v.bot
    }) : true,
    S = null;
  null != v && I ? (t = v.name, S = (0, r.jsx)("img", {
    className: X.appIcon,
    alt: q.intl.string(q.t.X4IxWF),
    src: C,
    "aria-hidden": true,
    draggable: false
  })) : E ? (t = q.intl.string(q.t.HcoRu7), S = (0, r.jsx)(u.Dkj, {
    size: "xs"
  })) : null != m ? (S = b ? (0, r.jsx)(u.r7p, {
    size: "xs"
  }) : (0, r.jsx)(y.Z, {
    guild: m,
    size: y.Z.Sizes.MINI,
    active: true,
    className: X.guildIcon
  }), t = m.name) : null != h && (h.isDM() || h.isGroupDM()) ? (t = q.intl.string(q.t.YUU0RE), S = (0, r.jsx)(u.gw7, {
    size: "xs"
  })) : d.pathname.startsWith(z.Z5c.GLOBAL_DISCOVERY) ? (t = q.intl.string(q.t["4nEZLi"]), S = (0, r.jsx)(u.Jmo, {
    size: "xs"
  })) : d.pathname.startsWith(z.Z5c.NITRO_HOME) ? (t = q.intl.string(q.t.Ipxkoq), S = (0, r.jsx)(u.SrA, {
    size: "xs"
  })) : d.pathname.startsWith(z.Z5c.COLLECTIBLES_SHOP) ? (t = q.intl.string(q.t.pWG4zc), S = (0, r.jsx)(u.EOn, {
    size: "xs"
  })) : d.pathname.startsWith(z.Z5c.FRIENDS) ? (t = q.intl.string(q.t.TdEu5e), S = (0, r.jsx)(u.iFz, {
    size: "xs"
  })) : d.pathname.startsWith(z.Z5c.FAMILY_CENTER) && (t = q.intl.string(Q.default.RZqaJi), S = (0, r.jsx)(u.BFJ, {
    size: "xs"
  }));
  let T = i.useCallback(e => {
    (0, j.ZN)("fast-travel")
  }, []);
  return null == t || "" === t ? null : (0, r.jsx)(u.ua7, {
    shouldShow: l,
    "aria-label": q.intl.string(q.t["7P/+q6"]),
    tooltipContentClassName: X.navigationTooltip,
    text: (0, r.jsxs)(r.Fragment, {
      children: [q.intl.string(q.t["7P/+q6"]), (0, r.jsx)(u.M2$, {
        shortcut: ["mod", "k"]
      })]
    }),
    children: e => (0, r.jsxs)(u.P3F, $(J({
      className: a()(X.title, {
        [X.fastTravel]: l
      })
    }, e, s), {
      onClick: l ? T : true,
      children: [S, (0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        lineClamp: 1,
        children: t
      }), l && (0, r.jsx)(u.hic, {
        size: "xs"
      })]
    }))
  })
}

function en(e) {
  let {
    selectedChannelId: t,
    withFastTravel: n,
    focusSectionProps: i
  } = e, l = (0, c.e7)([M.Z, R.Z], () => {
    let e = M.Z.getGuildId(),
      n = R.Z.getChannel(t);
    return null != e ? e : null == n ? true : n.guild_id
  }), a = (0, w.H)({
    guildId: l,
    channelId: t
  });
  return null == a ? (0, r.jsx)(et, {
    selectedChannelId: t,
    withFastTravel: n,
    focusSectionProps: i
  }) : (0, r.jsx)(Z.Z, {
    searchContext: a,
    focusSectionProps: i
  })
}

function er(e) {
  let {
    withFastTravel: t,
    focusSectionProps: n
  } = e, i = (0, c.e7)([k.Z], () => k.Z.getChannelId()), l = (0, x.$)({
    location: "TitleText"
  }), a = (0, c.e7)([R.Z], () => {
    let e = R.Z.getChannel(i);
    return null != e && !e.isDirectory() && !e.isGuildVocal()
  });
  return l && null != i && !(0, W.AB)(i) && a ? (0, r.jsx)(en, {
    selectedChannelId: i,
    withFastTravel: t,
    focusSectionProps: n
  }) : (0, r.jsx)(et, {
    selectedChannelId: i,
    withFastTravel: t,
    focusSectionProps: n
  })
}
let ei = Chunk647438.memo(function() {
  Chunk647438.useLayoutEffect(() => {
    Chunk998502.ZP.setMinimumSize(Chunk741764.J, Chunk741764.N)
  }, []);
  let e = (0, Chunk540059.T)("AppTitleBar"),
    t = ee(e => e.isOpen),
    {
      notificationCenterVariant: n,
      entrypoint: l
    } = (0, Chunk821020.pN)({
      location: "AppTitleBar"
    }),
    {
      backForwardButtons: a,
      titlebarFastTravel: o
    } = Chunk336219.ZP.useExperiment({
      location: "AppTitleBar"
    }),
    s = (0, Chunk358085.isDesktop)() && a,
    {
      hasBugReporterAccess: p
    } = Chunk174556.Z.useExperiment({
      location: "HeaderBar"
    }, {
      autoTrackExposure: false
    }),
    _ = !exports && module,
    O = null !== require && Chunk120356 === Chunk821020.u3.TITLE_BAR_LEFT,
    y = null === require;
  Chunk647438.useLayoutEffect(() => {
    Chunk998502.ZP.setMinimumSize(Chunk741764.J, Chunk741764.N)
  }, []);
  let N = (0, Chunk984802.Ll)(),
    j = (0, Chunk442837.e7)([Chunk451478.Z, Chunk522474.Z], () => (0, Chunk228488.rB)()),
    x = function(e) {
      let {
        showBackForwardButtons: t,
        showCollapsedSidebarIcons: n,
        showNotificationsInbox: r,
        titlebarFastTravel: l,
        showRecentsButton: a
      } = e;
      return i.useMemo(() => t ? "BACK_FORWARD_NAVIGATION" : n ? "SIDEBAR" : r ? "NOTIFICATIONS_INBOX" : l ? "TITLEBAR_FAST_TRAVEL" : a ? "RECENTS" : "HELP", [t, n, r, l, a])
    }({
      showBackForwardButtons: Chunk879690,
      showCollapsedSidebarIcons: Chunk916069,
      showNotificationsInbox: Chunk591472,
      titlebarFastTravel: Chunk843611,
      showRecentsButton: Chunk565138
    });
  return Chunk51596 ? null : (0, Chunk951288.jsx)(Chunk481060.Wdt, {
    children: e => (0, r.jsx)(u.f6W, {
      theme: N,
      children: t => (0, r.jsx)(F.TF, {
        className: t,
        leading: (0, r.jsxs)(r.Fragment, {
          children: [s && (0, r.jsx)(b.Z, {
            firstElementFocusJumpSectionProps: "BACK_FORWARD_NAVIGATION" === x ? e : true
          }), _ && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(u.P3F, $(J({}, "SIDEBAR" === x ? e : {}), {
              className: X.button,
              onClick: () => {
                ee.setState({
                  isOpen: !ee.getState().isOpen
                })
              },
              children: (0, r.jsx)(el, {})
            })), (0, r.jsx)(u.P3F, {
              className: X.button,
              onClick: () => {
                d.Z.open(z.oAB.ACCOUNT)
              },
              children: (0, r.jsx)(u.ewm, {
                size: "xs",
                color: "currentColor"
              })
            })]
          }), O && (0, r.jsx)(T.Z, {
            focusSectionProps: "NOTIFICATIONS_INBOX" === x ? e : true
          })]
        }),
        title: (0, r.jsx)(er, {
          withFastTravel: o,
          focusSectionProps: "TITLEBAR_FAST_TRAVEL" === x ? e : true
        }),
        trailing: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(E.Z, {
            className: X.button
          }), (0, r.jsx)(h.Z, {
            canShowReminder: true,
            className: X.button
          }), y && (0, r.jsx)(A.Z, $(J({}, "RECENTS" === x ? e : {}), {
            className: X.button
          })), p ? (0, r.jsx)(I.Z, {
            focusSectionProps: "HELP" === x ? e : true,
            className: X.button
          }) : (0, r.jsx)(v.Z, {
            focusSectionProps: "HELP" === x ? e : true,
            className: X.button
          }), (0, r.jsx)(C.Z, {
            className: X.button
          })]
        })
      })
    })
  })
});

function el() {
  return (0, Chunk951288.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: Chunk82504.icon,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    children: [(0, Chunk951288.jsx)("rect", {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2"
    }), (0, Chunk951288.jsx)("path", {
      d: "M9 3v18"
    })]
  })
}