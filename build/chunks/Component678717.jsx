/** Chunk was on 93886 **/
/** chunk id: 678717, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => ex
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk347469 = require("./347469.js"),
  Chunk213609 = require("./213609.js"),
  Chunk213713 = require("./213713.jsx"),
  Chunk665149 = require("./665149.jsx"),
  Chunk611565 = require("./611565.jsx"),
  Chunk238246 = require("./238246.jsx"),
  Chunk788983 = require("./788983.js"),
  Chunk906467 = require("./906467.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk31336 = require("./31336.js"),
  Chunk19759 = require("./19759.js"),
  Chunk432877 = require("./432877.js");
require("./381996.js");
var Chunk392750 = require("./392750.jsx"),
  Chunk926976 = require("./926976.jsx"),
  Chunk789654 = require("./789654.jsx"),
  Chunk719672 = require("./719672.jsx"),
  Chunk691867 = require("./691867.jsx"),
  Chunk916790 = require("./916790.jsx"),
  Chunk645973 = require("./645973.jsx"),
  Chunk903502 = require("./903502.jsx"),
  Chunk604776 = require("./604776.jsx"),
  Chunk912072 = require("./912072.jsx"),
  Chunk272193 = require("./272193.jsx"),
  Chunk685560 = require("./685560.jsx"),
  Chunk735959 = require("./735959.jsx"),
  Chunk572444 = require("./572444.jsx"),
  Chunk636500 = require("./636500.jsx"),
  Chunk246992 = require("./246992.js"),
  Chunk484662 = require("./484662.jsx"),
  Chunk546895 = require("./546895.jsx"),
  Chunk496025 = require("./496025.jsx"),
  Chunk442954 = require("./442954.jsx"),
  Chunk925124 = require("./925124.jsx"),
  Chunk633001 = require("./633001.jsx"),
  Chunk702904 = require("./702904.jsx"),
  Chunk178821 = require("./178821.jsx"),
  Chunk891401 = require("./891401.jsx"),
  Chunk958328 = require("./958328.jsx"),
  Chunk315384 = require("./315384.jsx"),
  Chunk107606 = require("./107606.jsx"),
  Chunk514866 = require("./514866.jsx"),
  Chunk763577 = require("./763577.jsx"),
  Chunk384207 = require("./384207.jsx"),
  Chunk264603 = require("./264603.jsx"),
  Chunk678639 = require("./678639.jsx"),
  Chunk596768 = require("./596768.jsx"),
  Chunk56706 = require("./56706.jsx"),
  Chunk820400 = require("./820400.jsx"),
  Chunk260950 = require("./260950.jsx"),
  Chunk569157 = require("./569157.jsx"),
  Chunk621060 = require("./621060.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk552883 = require("./552883.js"),
  Chunk451429 = require("./451429.js");

function eu(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: r
  } = e, l = (0, d.Z)({
    minDimension: j.h,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: r,
    orientation: d.y.HORIZONTAL_LEFT
  });
  return (0, a.jsx)("div", {
    onMouseDown: l,
    className: ec.resizeHandle
  })
}

function em(e) {
  var t;
  let {
    isPopout: n = false
  } = e, l = r.useMemo(() => {
    let e = [{
      id: "analytics",
      name: "Analytics",
      group: ei.v0.EXPERIMENTS,
      render: () => (0, a.jsx)(C.Z, {})
    }, {
      id: "triggers",
      name: "Triggers",
      group: ei.v0.EXPERIMENTS,
      render: () => (0, a.jsx)(et.Z, {})
    }, {
      id: "stores",
      name: "Stores",
      group: ei.v0.EVENTS,
      render: () => (0, a.jsx)(ee.Z, {})
    }, {
      id: "dispatcher",
      name: "Dispatcher",
      group: ei.v0.EVENTS,
      render: () => (0, a.jsx)(S.Z, {})
    }];
    return f.Z.isDeveloper && (e.push({
      id: "shop",
      name: "Shop",
      group: ei.v0.BILLING,
      render: () => (0, a.jsx)($.C, {})
    }), e.push({
      id: "quick_actions",
      name: "Quick Actions",
      group: ei.v0.DEVELOPMENT,
      render: () => (0, a.jsx)(X.Z, {})
    }), e.push({
      id: "end_to_end_encryption",
      name: "E2EE",
      group: ei.v0.DEVELOPMENT,
      render: () => (0, a.jsx)(O.Z, {})
    }), e.push({
      id: "performance",
      name: "Performance",
      group: ei.v0.DEVELOPMENT,
      render: () => (0, a.jsx)(H.ZP, {})
    }), e.push({
      id: "feedback",
      name: "Feedback",
      group: ei.v0.USERS,
      render: () => (0, a.jsx)(P.Z, {})
    }), e.push({
      id: "overlay",
      name: "Overlay v3",
      group: ei.v0.GAMES,
      render: () => (0, a.jsx)(B.Z, {})
    }), e.push({
      id: "slayer_sdk",
      name: "Slayer SDK",
      group: ei.v0.GAMES,
      render: () => (0, a.jsx)(Q.Z, {})
    }), e.push({
      id: "quick_switcher",
      name: "Quick Switcher",
      group: ei.v0.USERS,
      render: () => (0, a.jsx)(el.Z, {})
    })), e.push({
      id: "rive",
      name: "Rive",
      group: ei.v0.UI,
      render: () => (0, a.jsx)(J.Z, {})
    }), e.push({
      id: "lottie",
      name: "Lottie",
      group: ei.v0.UI,
      render: () => (0, a.jsx)(U.Z, {})
    }), e.push({
      id: "intl",
      name: "Intl",
      group: ei.v0.UI,
      render: () => (0, a.jsx)(Z.Z, {})
    }), e.push({
      id: "colors",
      name: "Colors",
      group: ei.v0.UI,
      render: () => (0, a.jsx)(N.Z, {})
    }), e.push({
      id: "design_toggles",
      name: "Design Toggles",
      group: ei.v0.UI,
      render: () => (0, a.jsx)(T.Z, {})
    }), e.push({
      id: "appearance_randomizer",
      name: "Appearance Randomizer",
      group: ei.v0.UI,
      render: () => (0, a.jsx)(Y.Z, {})
    }), e.push({
      id: "overlays",
      name: "Dev Overlays",
      group: ei.v0.DEVELOPMENT,
      render: () => (0, a.jsx)(R.Z, {
        devSettingsCategory: _.zU.OVERLAYS
      })
    }), e.push({
      id: "messaging",
      name: "Messaging",
      group: ei.v0.USERS,
      render: () => (0, a.jsx)(F.Z, {})
    }), e.push({
      id: "reporting",
      name: "Reporting",
      group: ei.v0.EXPERIMENTS,
      render: () => (0, a.jsx)(R.Z, {
        devSettingsCategory: _.zU.REPORTING
      })
    }), e.push({
      id: "permissions",
      name: "Permissions",
      group: ei.v0.USERS,
      render: () => (0, a.jsx)(K.Z, {})
    }), e.push({
      id: "modals",
      name: "Modals",
      group: ei.v0.UI,
      render: () => (0, a.jsx)(G.Z, {})
    }), e.push({
      id: "layers",
      name: "Layers",
      group: ei.v0.UI,
      render: () => (0, a.jsx)(M.Z, {})
    }), e.push({
      id: "affinity",
      name: "Affinity",
      group: ei.v0.USERS,
      render: () => (0, a.jsx)(y.Z, {})
    }), e.push({
      id: "widgets",
      name: "Widgets",
      group: ei.v0.USERS,
      render: () => (0, a.jsx)(ea.Z, {})
    }), f.Z.isDeveloper && (e.push({
      id: "content_inventory",
      name: "Content Inventory",
      group: ei.v0.USERS,
      render: () => (0, a.jsx)(m.Z, {})
    }), e.push({
      id: "notifications_inbox",
      name: "Notifications Inbox",
      group: ei.v0.USERS,
      render: () => (0, a.jsx)(p.Z, {})
    })), e.push({
      id: "dcf",
      name: "DCF",
      group: ei.v0.EXPERIMENTS,
      render: () => (0, a.jsx)(E.Z, {})
    }), e.push({
      id: "perks",
      name: "Perks",
      group: ei.v0.PREMIUM,
      render: () => (0, a.jsx)(W.Z, {})
    }), e.push({
      id: "potions",
      name: "Potions",
      group: ei.v0.PREMIUM,
      render: () => (0, a.jsx)(q.Z, {})
    }), window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") && (e.push({
      id: "offers",
      name: "Offers",
      group: ei.v0.PREMIUM,
      render: () => (0, a.jsx)(z.Z, {})
    }), e.push({
      id: "payments",
      name: "Payments",
      group: ei.v0.BILLING,
      render: () => (0, a.jsx)(V.Z, {})
    }), e.push({
      id: "subscriptions",
      name: "Subscriptions",
      group: ei.v0.PREMIUM,
      render: () => (0, a.jsx)(er.Z, {})
    }), e.push({
      id: "fractional_nitro",
      name: "Fractional Nitro",
      group: ei.v0.PREMIUM,
      render: () => (0, a.jsx)(k.Z, {})
    })), e.push({
      id: "gifting_intent",
      name: "Gifting Intent",
      group: ei.v0.PREMIUM,
      render: () => (0, a.jsx)(w.Z, {})
    }), e.push({
      id: "voice_filters",
      name: "Voice Filters",
      group: ei.v0.AUDIO_VIDEO,
      render: () => (0, a.jsx)(en.Z, {})
    }), e.push({
      id: "krisp_tester",
      name: "Krisp Tester",
      group: ei.v0.AUDIO_VIDEO,
      render: () => (0, a.jsx)(A.Z, {})
    }), e.push({
      id: "skill_trees",
      name: "Skill Trees",
      group: ei.v0.GUILDS,
      render: () => (0, a.jsx)(I.Z, {})
    }), e.push({
      id: "language",
      name: "Language",
      group: ei.v0.UI,
      render: () => (0, a.jsx)(D.Z, {})
    }), e
  }, []), {
    TabBar: i,
    renderSelectedTab: o,
    selectedTabId: d
  } = (0, ei.ZP)({
    tabs: l,
    initialSelectedTabId: null != (t = j.Z.lastOpenTabId) ? t : true,
    onChangeTab: e => {
      (0, v.Qh)({
        lastOpenTabId: e
      })
    }
  }, [l]);
  return (0, u.Z)({
    type: s.ImpressionTypes.PANE,
    name: s.ImpressionNames.VIEW_PANEL_DEVTOOLS,
    properties: {
      panel: d
    }
  }), (0, a.jsxs)(L.Gk, {
    children: [(0, a.jsxs)(h.ZP, {
      className: ed.headerBar,
      toolbar: n ? null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(h.ZP.Icon, {
          icon: c.rgF,
          tooltip: "Pop Out",
          onClick: () => {
            (0, b.bA)(es.KJ3.DEVTOOLS_POPOUT, () => (0, a.jsx)(x.Z, {
              windowKey: es.KJ3.DEVTOOLS_POPOUT,
              title: "DevTools",
              withTitleBar: true,
              children: (0, a.jsx)(ex, {
                mobile: false,
                isPopout: true
              })
            }), {
              width: 800,
              height: 600
            })
          }
        }), (0, a.jsx)(h.ZP.Icon, {
          icon: c.Dio,
          tooltip: eo.intl.string(eo.t.cpT0Cg),
          onClick: v.SO
        })]
      }),
      children: [(0, a.jsx)(h.ZP.Icon, {
        icon: c.Ymb,
        tooltip: "DevTools"
      }), (0, a.jsx)(h.ZP.Title, {
        children: "DevTools"
      })]
    }), (0, a.jsx)(i, {}), o(), (0, a.jsx)(L.Br, {
      className: ec.layerContainer
    })]
  })
}

function eh() {
  let e = Chunk647438.useRef(null),
    t = (0, Chunk442837.e7)([Chunk19759.Z], () => Chunk19759.Z.sidebarWidth),
    [n, l] = Chunk647438.useState(null),
    i = Chunk647438.useCallback(e => (0, v.Qh)({
      sidebarWidth: e
    }), []);
  return (Chunk647438.useEffect(() => {
    null === require && null !== exports && Chunk120356(exports)
  }, [exports, require]), null === require) ? null : (0, Chunk951288.jsxs)("div", {
    ref: module,
    className: Chunk552883.container,
    style: {
      minWidth: Chunk19759.h,
      width: require
    },
    "data-app-right-panel": true,
    children: [(0, Chunk951288.jsx)(eu, {
      resizableNode: module,
      onResize: Chunk120356,
      onResizeEnd: i
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk552883.sidebarContent,
      children: (0, Chunk951288.jsx)(em, {})
    })]
  })
}

function ep() {
  return (0, Chunk442837.e7)([Chunk19759.Z], () => Chunk19759.Z.displayTools) ? (0, Chunk951288.jsx)("div", {
    className: i()(Chunk552883.container, Chunk552883.mobileContainerExpanded),
    children: (0, Chunk951288.jsx)("div", {
      className: Chunk552883.sidebarContent,
      children: (0, Chunk951288.jsx)(em, {})
    })
  }) : (0, Chunk951288.jsx)("div", {
    className: Chunk552883.container,
    children: (0, Chunk951288.jsx)(Chunk481060.P3F, {
      onClick: Chunk31336.SO,
      children: (0, Chunk951288.jsxs)(Chunk665149.ZP, {
        className: i()(Chunk451429.headerBar, Chunk552883.mobileHeaderCollapsed),
        toolbar: (0, Chunk951288.jsx)(Chunk259580.Z, {
          direction: Chunk259580.Z.Directions.UP
        }),
        children: [(0, Chunk951288.jsx)(Chunk665149.ZP.Icon, {
          icon: Chunk481060.Ymb,
          tooltip: "DevTools"
        }), (0, Chunk951288.jsx)(Chunk665149.ZP.Title, {
          children: "DevTools"
        })]
      })
    })
  })
}

function ex(e) {
  let {
    mobile: t,
    isPopout: n = false
  } = e;
  return t ? (0, a.jsx)(ep, {}) : n ? (0, a.jsx)("div", {
    className: ec.popoutContainer,
    children: (0, a.jsx)(em, {
      isPopout: true
    })
  }) : (0, a.jsx)(eh, {})
}