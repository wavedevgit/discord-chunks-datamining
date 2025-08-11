/** Chunk was on 93886 **/
/** chunk id: 678717, original params: e,t,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => ep
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk432877 = require("./432877.js"),
  Chunk176038 = require("./176038.js");
require("./381996.js");
var Chunk392750 = require("./392750.jsx"),
  Chunk926976 = require("./926976.js"),
  Chunk789654 = require("./789654.js"),
  Chunk719672 = require("./719672.js"),
  Chunk691867 = require("./691867.js"),
  Chunk916790 = require("./916790.js"),
  Chunk645973 = require("./645973.jsx"),
  Chunk903502 = require("./903502.js"),
  Chunk604776 = require("./604776.jsx"),
  Chunk912072 = require("./912072.js"),
  Chunk272193 = require("./272193.jsx"),
  Chunk685560 = require("./685560.js"),
  Chunk735959 = require("./735959.js"),
  Chunk572444 = require("./572444.jsx"),
  Chunk636500 = require("./636500.jsx"),
  Chunk246992 = require("./246992.js"),
  Chunk484662 = require("./484662.jsx"),
  Chunk496025 = require("./496025.jsx"),
  Chunk442954 = require("./442954.jsx"),
  Chunk925124 = require("./925124.js"),
  Chunk633001 = require("./633001.jsx"),
  Chunk702904 = require("./702904.js"),
  Chunk178821 = require("./178821.jsx"),
  Chunk891401 = require("./891401.js"),
  Chunk958328 = require("./958328.js"),
  Chunk315384 = require("./315384.jsx"),
  Chunk107606 = require("./107606.jsx"),
  Chunk514866 = require("./514866.jsx"),
  Chunk763577 = require("./763577.js"),
  Chunk384207 = require("./384207.jsx"),
  Chunk264603 = require("./264603.jsx"),
  Chunk678639 = require("./678639.jsx"),
  Chunk596768 = require("./596768.jsx"),
  Chunk56706 = require("./56706.jsx"),
  Chunk820400 = require("./820400.js"),
  Chunk260950 = require("./260950.jsx"),
  Chunk621060 = require("./621060.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk736967 = require("./736967.js"),
  Chunk616257 = require("./616257.js");

function ed(e) {
  let {
    resizableNode: t,
    onResize: a,
    onResizeEnd: r
  } = e, l = (0, d.Z)({
    minDimension: g.h,
    resizableDomNodeRef: t,
    onElementResize: a,
    onElementResizeEnd: r,
    orientation: d.y.HORIZONTAL_LEFT
  });
  return <div onMouseDown={l} className={eo.resizeHandle} />
}

function eu() {
  return (0, Chunk176038.Z)(), null
}

function em(e) {
  var t;
  let {
    isPopout: a = false
  } = e, l = r.useMemo(() => {
    let e = [{
      id: "analytics",
      name: "Analytics",
      group: el.v0.EXPERIMENTS,
      render: () => <N.Z />
    }, {
      id: "triggers",
      name: "Triggers",
      group: el.v0.EXPERIMENTS,
      render: () => <et.Z />
    }, {
      id: "stores",
      name: "Stores",
      group: el.v0.EVENTS,
      render: () => <ee.Z />
    }, {
      id: "dispatcher",
      name: "Dispatcher",
      group: el.v0.EVENTS,
      render: () => <S.Z />
    }];
    return f.Z.isDeveloper && (e.push({
      id: "shop",
      name: "Shop",
      group: el.v0.BILLING,
      render: () => <$.C />
    }), e.push({
      id: "quick_actions",
      name: "Quick Actions",
      group: el.v0.DEVELOPMENT,
      render: () => <J.Z />
    }), e.push({
      id: "end_to_end_encryption",
      name: "E2EE",
      group: el.v0.DEVELOPMENT,
      render: () => <P.Z />
    }), e.push({
      id: "performance",
      name: "Performance",
      group: el.v0.DEVELOPMENT,
      render: () => <H.ZP />
    }), e.push({
      id: "feedback",
      name: "Feedback",
      group: el.v0.USERS,
      render: () => <w.Z />
    }), e.push({
      id: "overlay",
      name: "Overlay v3",
      group: el.v0.GAMES,
      render: () => <G.Z />
    }), e.push({
      id: "slayer_sdk",
      name: "Slayer SDK",
      group: el.v0.GAMES,
      render: () => <Q.Z />
    })), e.push({
      id: "rive",
      name: "Rive",
      group: el.v0.UI,
      render: () => <q.Z />
    }), e.push({
      id: "intl",
      name: "Intl",
      group: el.v0.UI,
      render: () => <A.Z />
    }), e.push({
      id: "colors",
      name: "Colors",
      group: el.v0.UI,
      render: () => <O.Z />
    }), e.push({
      id: "design_toggles",
      name: "Design Toggles",
      group: el.v0.UI,
      render: () => <E.Z />
    }), e.push({
      id: "premium_feature_randomizer",
      name: "Premium Feature Randomizer",
      group: el.v0.UI,
      render: () => <Y.Z />
    }), e.push({
      id: "overlays",
      name: "Dev Overlays",
      group: el.v0.DEVELOPMENT,
      render: () => <k.Z devSettingsCategory={_.zU.OVERLAYS} />
    }), e.push({
      id: "messaging",
      name: "Messaging",
      group: el.v0.USERS,
      render: () => <F.Z />
    }), e.push({
      id: "reporting",
      name: "Reporting",
      group: el.v0.EXPERIMENTS,
      render: () => <k.Z devSettingsCategory={_.zU.REPORTING} />
    }), e.push({
      id: "permissions",
      name: "Permissions",
      group: el.v0.USERS,
      render: () => <K.Z />
    }), e.push({
      id: "modals",
      name: "Modals",
      group: el.v0.UI,
      render: () => <U.Z />
    }), e.push({
      id: "layers",
      name: "Layers",
      group: el.v0.UI,
      render: () => <M.Z />
    }), e.push({
      id: "affinity",
      name: "Affinity",
      group: el.v0.USERS,
      render: () => <C.Z />
    }), e.push({
      id: "widgets",
      name: "Widgets",
      group: el.v0.USERS,
      render: () => <en.Z />
    }), f.Z.isDeveloper && (e.push({
      id: "content_inventory",
      name: "Content Inventory",
      group: el.v0.USERS,
      render: () => <m.Z />
    }), e.push({
      id: "notifications_inbox",
      name: "Notifications Inbox",
      group: el.v0.USERS,
      render: () => <h.Z />
    })), e.push({
      id: "dcf",
      name: "DCF",
      group: el.v0.EXPERIMENTS,
      render: () => <T.Z />
    }), e.push({
      id: "perks",
      name: "Perks",
      group: el.v0.PREMIUM,
      render: () => <W.Z />
    }), e.push({
      id: "potions",
      name: "Potions",
      group: el.v0.PREMIUM,
      render: () => <X.Z />
    }), window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") && (e.push({
      id: "offers",
      name: "Offers",
      group: el.v0.PREMIUM,
      render: () => <z.Z />
    }), e.push({
      id: "payments",
      name: "Payments",
      group: el.v0.BILLING,
      render: () => <V.Z />
    }), e.push({
      id: "subscriptions",
      name: "Subscriptions",
      group: el.v0.PREMIUM,
      render: () => <er.Z />
    }), e.push({
      id: "fractional_nitro",
      name: "Fractional Nitro",
      group: el.v0.PREMIUM,
      render: () => <I.Z />
    })), e.push({
      id: "gifting_intent",
      name: "Gifting Intent",
      group: el.v0.PREMIUM,
      render: () => <R.Z />
    }), e.push({
      id: "voice_filters",
      name: "Voice Filters",
      group: el.v0.AUDIO_VIDEO,
      render: () => <ea.Z />
    }), e.push({
      id: "krisp_tester",
      name: "Krisp Tester",
      group: el.v0.AUDIO_VIDEO,
      render: () => <D.Z />
    }), e.push({
      id: "skill_trees",
      name: "Skill Trees",
      group: el.v0.GUILDS,
      render: () => <Z.Z />
    }), e.push({
      id: "language",
      name: "Language",
      group: el.v0.UI,
      render: () => <L.Z />
    }), e
  }, []), {
    TabBar: i,
    renderSelectedTab: d,
    selectedTabId: v
  } = (0, el.ZP)({
    tabs: l,
    initialSelectedTabId: null != (t = g.Z.lastOpenTabId) ? t : true,
    onChangeTab: e => {
      (0, j.Qh)({
        lastOpenTabId: e
      })
    }
  }, [l]), y = (0, o.e7)([g.Z], () => g.Z.isRandomlyChangingPremiumOptions);
  return (0, u.Z)({
    type: s.ImpressionTypes.PANE,
    name: s.ImpressionNames.VIEW_PANEL_DEVTOOLS,
    properties: {
      panel: v
    }
  }), <B.Gk>{<x.ZP className={ec.headerBar} toolbar={a ? null : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(x.ZP.Icon, {
          icon: c.rgF,
          tooltip: "Pop Out",
          onClick: () => {
            (0, b.bA)(ei.KJ3.DEVTOOLS_POPOUT, () => (0, n.jsx)(p.Z, {
              windowKey: ei.KJ3.DEVTOOLS_POPOUT,
              title: "DevTools",
              withTitleBar: true,
              children: (0, n.jsx)(ep, {
                mobile: false,
                isPopout: true
              })
            }), {
              width: 800,
              height: 600
            })
          }
        }), (0, n.jsx)(x.ZP.Icon, {
          icon: c.Dio,
          tooltip: es.intl.string(es.t.cpT0Cg),
          onClick: j.SO
        })]
      })}>{<x.ZP.Icon icon={c.Ymb} tooltip={"DevTools"} />}{<x.ZP.Title>{"DevTools"}</x.ZP.Title>}</x.ZP>}{<i />}{d()}{<B.Br className={eo.layerContainer} />}{y ? <eu /> : null}</B.Gk>
}

function ex() {
  let e = Chunk73800.useRef(null),
    t = (0, Chunk442837.e7)([Chunk19759.Z], () => Chunk19759.Z.sidebarWidth),
    [a, l] = Chunk73800.useState(null),
    i = Chunk73800.useCallback(e => (0, j.Qh)({
      sidebarWidth: e
    }), []);
  return (Chunk73800.useEffect(() => {
    null === require && null !== exports && Chunk120356(exports)
  }, [exports, require]), null === require) ? null : <div ref={module} className={Chunk736967.container} style={{
      minWidth: Chunk19759.h,
      width: require
    }} data-app-right-panel={true}>{<ed resizableNode={module} onResize={Chunk120356} onResizeEnd={i} />}{<div className={Chunk736967.sidebarContent}><em /></div>}</div>
}

function eh() {
  return (0, Chunk442837.e7)([Chunk19759.Z], () => Chunk19759.Z.displayTools) ? <div className={i()(Chunk736967.container, Chunk736967.mobileContainerExpanded)}><div className={Chunk736967.sidebarContent}><em /></div></div> : <div className={Chunk736967.container}><Chunk481060.P3F onClick={Chunk31336.SO}><Chunk665149.ZP className={i()(Chunk616257.headerBar, Chunk736967.mobileHeaderCollapsed)} toolbar={(0, Chunk255367.jsx)(Chunk259580.Z, {
          direction: Chunk259580.Z.Directions.UP
        })}>{<Chunk665149.ZP.Icon icon={Chunk481060.Ymb} tooltip={"DevTools"} />}{<Chunk665149.ZP.Title>{"DevTools"}</Chunk665149.ZP.Title>}</Chunk665149.ZP></Chunk481060.P3F></div>
}

function ep(e) {
  let {
    mobile: t,
    isPopout: a = false
  } = e;
  return t ? <eh /> : a ? <div className={eo.popoutContainer}><em isPopout={true} /></div> : <ex />
}