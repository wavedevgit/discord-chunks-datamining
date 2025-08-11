/** Chunk was on 93886 **/
/** chunk id: 633001, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => eg
}), require("./388685.js"), require("./583741.js"), require("./539854.js"), require("./49124.js"), require("./35282.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk765250 = require("./765250.js"),
  Chunk13245 = require("./13245.js"),
  Chunk593472 = require("./593472.js"),
  Chunk393238 = require("./393238.js"),
  Chunk594190 = require("./594190.js"),
  Chunk984370 = require("./984370.js"),
  Chunk427860 = require("./427860.js"),
  Chunk837268 = require("./837268.js"),
  Chunk371651 = require("./371651.js"),
  Chunk829907 = require("./829907.js"),
  Chunk610394 = require("./610394.js"),
  Chunk886118 = require("./886118.js"),
  Chunk301801 = require("./301801.js"),
  Chunk352527 = require("./352527.js"),
  Chunk355863 = require("./355863.js"),
  Chunk449224 = require("./449224.js"),
  Chunk808506 = require("./808506.js"),
  Chunk572004 = require("./572004.js"),
  Chunk55935 = require("./55935.js"),
  Chunk70956 = require("./70956.js"),
  Chunk136015 = require("./136015.js"),
  Chunk145597 = require("./145597.js"),
  Chunk246992 = require("./246992.js"),
  Chunk257785 = require("./257785.jsx"),
  Chunk484036 = require("./484036.jsx"),
  Chunk681619 = require("./681619.js"),
  Chunk621060 = require("./621060.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk757744 = require("./757744.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk931207 = require("./931207.js"),
  Chunk616257 = require("./616257.js");

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = a[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      a.push.apply(a, n)
    }
    return a
  })(Object(t)).forEach(function(a) {
    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
  }), e
}
let K = {
    [Chunk981631.Odu.CLICK_ZONE_DEBUG]: e => W(H({
      type: F.Odu.CLICK_ZONE_DEBUG,
      id: (0, c.Z)(),
      layoutId: e,
      anchor: {
        top: .35,
        right: .35
      },
      size: {
        width: 100,
        height: 100
      }
    }, E.Z.getWidgetDefaultSettings(F.Odu.CLICK_ZONE_DEBUG)), {
      pinned: true
    }),
    [Chunk981631.Odu.PERFORMANCE_DEBUG]: e => W(H({
      type: F.Odu.PERFORMANCE_DEBUG,
      id: (0, c.Z)(),
      layoutId: e,
      anchor: {
        top: .1,
        right: .1
      },
      size: {
        fixed: false,
        width: "auto",
        height: "auto"
      }
    }, E.Z.getWidgetDefaultSettings(F.Odu.PERFORMANCE_DEBUG)), {
      pinned: true
    })
  },
  X = {},
  Y = (e, t) => e.find(e => e.type === t);

function J(e) {
  let {
    id: t
  } = e, [a, l] = r.useState(false);
  return r.useEffect(() => {
    let e;
    return a && (e = setTimeout(() => {
      l(false)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [a]), <u.zx look={u.zx.Looks.LINK} color={u.zx.Colors.LINK} size={u.zx.Sizes.MIN} onClick={function() {
      (0, w.JG)(t, () => l(true))
    }} className={G.copyId}>{"Application Id: "}{t}{" "}{a ? z.intl.string(z.t["t5VZ8/"]) : null}</u.zx>
}
let q = Chunk73800.memo(function(e) {
    let {
      trackedGame: t
    } = e, a = (0, d.e7)([f.ZP], () => f.ZP.getGameForPID(t.pid)), r = (0, d.e7)([S.Z], () => S.Z.getGameForPID(t.pid)), l = (0, d.e7)([f.ZP], () => null == a ? null : f.ZP.getGameOverlayStatus(a));
    return <div className={G.panelGroup}>{<m.Text variant={"text-md/bold"} color={"text-primary"}>{t.gameName}</m.Text>}{<m.Text variant={"text-sm/bold"} color={"text-secondary"}>{t.pid}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-secondary"}>{null == a ? true : a.exeName}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-default"}>{"isLauncher: "}{(null == a ? true : a.isLauncher) ? "Yes" : "No"}</m.Text>}{null != t.applicationId && <m.Text variant={"text-md/bold"} color={"text-primary"}><J id={t.applicationId} /></m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-default"}>{"fullscreenType: "}{(0, y.sS)(t.fullscreenType)}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-default"}>{"state: "}{t.state}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-default"}>{"successfullyShown: "}{t.successfullyShown ? "Yes" : "No"}</m.Text>}{<div className={G.panelGroup}>{<m.Text variant={"text-sm/normal"} color={"text-default"}>{"source: "}{t.source}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-default"}>{"legacyEnabled: "}{t.legacyEnabled ? "Yes" : "No"}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-default"}>{"oopEnabled: "}{t.oopEnabled ? "Yes" : "No"}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-default"}>{"overlayMethod: "}{(0, y.P_)(t.overlayMethod)}</m.Text>}</div>}{null != l && <div className={G.panelGroup}>{<m.Text variant={"text-sm/normal"} color={"text-default"}>{"raw source: "}{l.source}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-default"}>{"raw enabledLegacy: "}{l.enabledLegacy ? "Yes" : "No"}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-default"}>{"raw enabledOOP: "}{l.enabledOOP ? "Yes" : "No"}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-default"}>{"raw overlayMethod: "}{(0, y.P_)(l.overlayMethod)}</m.Text>}</div>}{<m.Text variant={"text-sm/normal"} color={"text-default"}>{"hidden: "}{(null == a ? true : a.hidden) ? "Yes" : "No"}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-default"}>{"hook: "}{(null == r ? true : r.hook) ? "Yes" : "No"}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-default"}>{"overlay: "}{(null == r ? true : r.overlay) ? "Yes" : "No"}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-default"}>{"overlayCompatibilityHook: "}{(null == r ? true : r.overlayCompatibilityHook) ? "Yes" : "No"}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-default"}>{"supportsOutOfProcessOverlay: "}{(null == r ? true : r.supportsOutOfProcessOverlay) ? "Yes" : "No"}</m.Text>}</div>
  }),
  $ = Chunk73800.memo(function(e) {
    let {
      pid: t
    } = e, a = (0, d.cj)([P.default], () => P.default.getOverlayPIDStatuses()), r = (0, d.cj)([_.default], () => _.default.getTrackedGames()), l = (0, d.e7)([P.default], () => P.default.isInputLocked(t), [t]), i = (0, d.e7)([P.default], () => P.default.DEV_isInputLockedV3(t), [t]), s = (0, d.e7)([P.default], () => P.default.DEV_isInputLocked(t), [t]), o = (0, d.e7)([P.default], () => P.default.isReady(t), [t]);
    return <div className={G.panelGroup}>{<m.Text variant={"text-md/semibold"} color={"text-primary"}>{"".concat(t)}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-secondary"}>{"Screen Type Resolution: "}{(e => {
          var t;
          let a = null == (t = r[e]) ? true : t.timer;
          if (null == a || null == a.screenTypeResolutionTimestamp) return "...";
          let n = a.screenTypeResolutionTimestamp - a.startTrackingTimestamp;
          return "".concat(n.toFixed(2), "ms")
        })(t)}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-secondary"}>{"Window Creation: "}{(e => {
          var t;
          let a = null == (t = r[e]) ? true : t.timer;
          if (null == a || null == a.moduleTrackingTimestamp || null == a.screenTypeResolutionTimestamp) return "...";
          let n = a.moduleTrackingTimestamp - a.screenTypeResolutionTimestamp;
          return "".concat(n.toFixed(2), "ms")
        })(t)}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-secondary"}>{"Rendering: "}{(e => {
          var t;
          let a = null == (t = r[e]) ? true : t.timer;
          if (null == a || null == a.overlayRenderingTimestamp || null == a.moduleTrackingTimestamp) return "...";
          let n = a.overlayRenderingTimestamp - a.moduleTrackingTimestamp;
          return "".concat(n.toFixed(2), "ms")
        })(t)}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-primary"}>{"Bridge Status: "}{a.get(Number(t))}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-primary"}>{"isInputLocked: "}{l}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-primary"}>{"isInputLockedV3: "}{i}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-primary"}>{"isInputLockedV2: "}{s}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-primary"}>{"isReady: "}{o}</m.Text>}</div>
  });

function Q(e) {
  let t = Y(Object.values((0, d.Wu)([E.Z], () => E.Z.getWidgetsForLayout(U.$S))), e);
  return [t, () => {
    if (null != t)(0, x.E9)(t.id);
    else {
      let t = K[e];
      if (null == t) return;
      let a = t(U.$S);
      (0, x.A4)(a)
    }
  }]
}

function ee(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return t ? "".concat(e.toFixed(2), "ms") : new Date(e).toLocaleTimeString()
}
let et = Chunk73800.memo(function(e) {
  var {
    pid: t
  } = e, a = function(e, t) {
    if (null == e) return {};
    var a, n, r = function(e, t) {
      if (null == e) return {};
      var a, n, r = {},
        l = Object.keys(e);
      for (n = 0; n < l.length; n++) a = l[n], t.indexOf(a) >= 0 || (r[a] = e[a]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (n = 0; n < l.length; n++) a = l[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a])
    }
    return r
  }(e, ["pid"]);
  let r = (0, d.e7)([_.default], () => {
    var e, a;
    if (null == t) return "Unknown";
    let n = null == (e = _.default.getTrackedGameByPid(t)) ? true : e.gameName;
    return null != n ? (X[t] = n, n) : null != (a = X[t]) ? a : "Unknown"
  }, [t]);
  return <m.Text{...W(H({}, a), {
    variant: "text-md/semibold",
    color: "text-primary",
    children: r
  })} />
});

function ea() {
  let e = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.TrackFocusPIDs)),
    t = (0, Chunk442837.Wu)([Chunk371651.default], () => Chunk371651.default.getDevToolsFocusedPidsWithTimestamp(), []),
    a = () => {
      Chunk13245.Z.setRenderDebugMode(!Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.TrackFocusPIDs), Chunk837268.GO.TrackFocusPIDs)
    };
  return <div className={Chunk931207.panelGroup}>{<div className={Chunk931207.panelHeader}>{<Chunk481060.XZJ value={module} onChange={() => require()} size={18} type={Chunk481060.XZJ.Types.INVERTED} shape={Chunk481060.XZJ.Shapes.BOX}><Chunk481060.Text tag={"span"} variant={"text-md/normal"} color={"text-muted"}>{"Track Focus Pids"}</Chunk481060.Text></Chunk481060.XZJ>}{<Chunk481060.P3F className={Chunk931207.panelButton} onClick={() => Chunk13245.Z.clearTrackedPids()}><Chunk481060.XHJ size={"md"} color={"currentColor"} /></Chunk481060.P3F>}</div>}{<Chunk481060.zJl className={i()(Chunk931207.panelGroup, Chunk931207.scroller)}>{0 === exports.length && <Chunk481060.Text variant={"text-sm/normal"} color={"text-default"}>{"No recent focused pids"}</Chunk481060.Text>}{[...exports].reverse().map(e => {
        let [t, a, l] = e;
        return <r.Fragment><m.ua7 position={"left"} text={l === g.d5.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event"}>{e => {
              var r;
              return (0, n.jsx)("div", W(H({}, e), {
                children: (0, n.jsxs)(m.Text, {
                  variant: "text-sm/medium",
                  color: l === g.d5.TRACK_FOCUS ? "text-default" : "text-danger",
                  children: [(0, n.jsx)(et, {
                    pid: a,
                    tag: "span"
                  }), " - ", null != (r = null == a ? true : a.toString()) ? r : "null", " @ ", ee(t, true)]
                })
              }))
            }}</m.ua7></r.Fragment>
      })}</Chunk481060.zJl>}</div>
}
let en = Chunk73800.memo(function(e) {
    let {
      pid: t
    } = e, a = (0, d.e7)([_.default, f.ZP], () => {
      var e, a, n;
      if (null == t) return null;
      let r = null == (e = _.default.getTrackedGameByPid(t)) ? true : e.fullscreenType;
      return null != r ? r : null != (n = null == (a = f.ZP.getGameForPID(t)) ? true : a.fullscreenType) ? n : p.Jx.UNKNOWN
    }, [t]);
    return <m.Text variant={"text-sm/normal"} color={"text-secondary"} tag={"span"}>{"Original Screen Type: "}{null != a ? (0, y.sS)(a) : "Unknown"}</m.Text>
  }),
  er = Chunk73800.memo(function() {
    let e = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      [t, a] = Chunk73800.useState({}),
      l = Chunk73800.useRef(null);
    return Chunk73800.useEffect(() => (Chunk120356.current = setInterval(async () => {
      let e = Chunk594190.ZP.getRunningGames(),
        t = [],
        n = Date.now();
      for (let a of module) exports.push((0, Chunk829907.hj)(require.pid, 0).then(e => [a.pid, e, n]));
      let r = await Promise.all(exports);
      require(e => r.reduce((e, t) => {
        var a, n;
        let [r, l, i] = t;
        if (null == l || null == r) return e;
        let s = null != (n = e[r]) ? n : [],
          o = null == (a = s[s.length - 1]) ? true : a.screenType;
        return (0 === s.length || o !== l) && (e[r] = [...s, {
          pid: r,
          screenType: l,
          timestamp: i
        }]), e
      }, H({}, e)))
    }, +Chunk70956.Z.Millis.SECOND), () => clearInterval(Chunk120356.current)), []), <Chunk481060.ua7 position={"left"} text={"The most recent screen types we've logged, indexed by pid"}>{a => (0, n.jsx)("div", W(H({}, a), {
        children: (0, n.jsxs)(m.zJl, {
          className: i()(G.panelGroup, G.scroller),
          children: [0 === Object.keys(e).length && (0, n.jsx)(m.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: "No recent screen types"
          }), Object.values(e).map(e => (0, n.jsxs)("div", {
            children: [(0, n.jsx)(et, {
              tag: "div",
              pid: e.pid
            }), (0, n.jsx)(en, {
              pid: e.pid
            }), null != t[e.pid] && [...t[e.pid]].reverse().map(t => {
              let {
                screenType: a,
                timestamp: r
              } = t;
              return (0, n.jsx)(m.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: "".concat(a, ":").concat((0, y.sS)(a), " @ ").concat(ee(r))
              }, "".concat(e.pid, "-").concat(a, "-").concat(r))
            })]
          }, e.pid))]
        })
      }))}</Chunk481060.ua7>
  }),
  el = Chunk73800.memo(function() {
    var e, t;
    let a = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      r = (0, Chunk145597.getPID)(),
      l = (0, Chunk442837.e7)([Chunk371651.default], () => Chunk371651.default.isOverlayOOPEnabledForPid(Chunk73800), [Chunk73800]),
      [i, s] = (0, Chunk442837.Wu)([Chunk352527.Z], () => [Chunk352527.Z.enabled, Chunk352527.Z.keepOpen]),
      o = (0, Chunk442837.e7)([Chunk808506.default], () => Chunk808506.default.getFocusedPID()),
      c = (0, Chunk442837.e7)([Chunk808506.default], () => Chunk808506.default.isFocusedPidOutOfProcess());
    return <div className={Chunk931207.panelGroup}>{0 === Object.keys(require).length && <Chunk481060.Text variant={"text-sm/normal"} color={"text-default"}>{"No tracked game times"}</Chunk481060.Text>}{Object.values(require).map(e => <$ pid={e.pid} />)}{<div>{<Chunk481060.Text variant={"text-sm/medium"} color={"text-primary"}>{"focusedPID: "}{null != (e = null == o ? true : o.toString()) ? module : "null"}</Chunk481060.Text>}{<Chunk481060.Text variant={"text-sm/normal"} color={"text-secondary"}>{"isFocusedPidOutOfProcess: "}{Chunk772848 ? "Yes" : "No"}</Chunk481060.Text>}{<Chunk481060.Text variant={"text-sm/medium"} color={"text-primary"}>{"processPid: "}{null != (t = null == Chunk73800 ? true : Chunk73800.toString()) ? exports : "unknown"}</Chunk481060.Text>}{<Chunk481060.Text variant={"text-sm/normal"} color={"text-secondary"}>{"isOOPEnabledForPid: "}{Chunk120356 ? "Yes" : "No"}</Chunk481060.Text>}{<Chunk481060.Text variant={"text-sm/normal"} color={"text-secondary"}>{"SoundboardOverlay.enabled: "}{i ? "Yes" : "No"}</Chunk481060.Text>}{<Chunk481060.Text variant={"text-sm/normal"} color={"text-secondary"}>{"SoundboardOverlay.keepOpen: "}{Chunk913527 ? "Yes" : "No"}</Chunk481060.Text>}</div>}</div>
  }),
  ei = Chunk73800.memo(function() {
    let [e, t] = Q(Chunk981631.Odu.CLICK_ZONE_DEBUG), [a, r] = Q(Chunk981631.Odu.PERFORMANCE_DEBUG), l = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.ClickZones)), i = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.WidgetAreas)), s = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.DisabledGPUBoost)), o = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.ForceGPUBoost)), c = e => {
      h.Z.setRenderDebugMode(!C.ZP.hasRenderDebugMode(e), e)
    }, u = () => {
      Chunk772848(Chunk837268.GO.ClickZones)
    }, x = () => {
      Chunk772848(Chunk837268.GO.WidgetAreas)
    }, p = () => {
      Chunk772848(Chunk837268.GO.DisabledGPUBoost)
    }, b = () => {
      Chunk772848(Chunk837268.GO.ForceGPUBoost)
    };
    return <div className={Chunk931207.panelGroup}>{<Chunk481060.ua7 position={"left"} text={"Enables a red border around click zones to help with debugging."}>{e => (0, n.jsx)("div", W(H({}, e), {
          children: (0, n.jsx)(m.XZJ, {
            value: l,
            onChange: () => u(),
            size: 18,
            type: m.XZJ.Types.INVERTED,
            shape: m.XZJ.Shapes.BOX,
            children: (0, n.jsx)(m.Text, {
              tag: "span",
              variant: "text-md/normal",
              color: "text-muted",
              children: "Enable Click Zone Debug Mode"
            })
          })
        }))}</Chunk481060.ua7>}{<Chunk481060.ua7 position={"left"} text={"Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets"}>{e => (0, n.jsx)("div", W(H({}, e), {
          children: (0, n.jsx)(m.XZJ, {
            value: i,
            onChange: () => x(),
            size: 18,
            type: m.XZJ.Types.INVERTED,
            shape: m.XZJ.Shapes.BOX,
            children: (0, n.jsx)(m.Text, {
              tag: "span",
              variant: "text-md/normal",
              color: "text-muted",
              children: "Enable Render Debug Mode"
            })
          })
        }))}</Chunk481060.ua7>}{<Chunk481060.ua7 position={"left"} text={"Disables GPU Boost, which can help with performance when games compete for GPU resources."}>{e => (0, n.jsx)("div", W(H({}, e), {
          children: (0, n.jsx)(m.XZJ, {
            value: s,
            onChange: () => p(),
            size: 18,
            type: m.XZJ.Types.INVERTED,
            shape: m.XZJ.Shapes.BOX,
            children: (0, n.jsx)(m.Text, {
              tag: "span",
              variant: "text-md/normal",
              color: "text-muted",
              children: "Disable GPU Boost"
            })
          })
        }))}</Chunk481060.ua7>}{<Chunk481060.ua7 position={"left"} text={"Forces GPU Boost, which can help with performance when games compete for GPU resources."}>{e => (0, n.jsx)("div", W(H({}, e), {
          children: (0, n.jsx)(m.XZJ, {
            value: o,
            onChange: () => b(),
            size: 18,
            disabled: s,
            type: m.XZJ.Types.INVERTED,
            shape: m.XZJ.Shapes.BOX,
            children: (0, n.jsx)(m.Text, {
              tag: "span",
              variant: "text-md/normal",
              color: "text-muted",
              children: "Force GPU Boost"
            })
          })
        }))}</Chunk481060.ua7>}{<Chunk481060.ua7 position={"left"} text={"Creates a widget that has a clickzone inside of it, which will show/hide every few seconds."}>{a => (0, n.jsx)("div", W(H({}, a), {
          children: (0, n.jsx)(m.XZJ, {
            value: null != e,
            onChange: () => t(),
            size: 18,
            type: m.XZJ.Types.INVERTED,
            shape: m.XZJ.Shapes.BOX,
            children: (0, n.jsx)(m.Text, {
              tag: "span",
              variant: "text-md/normal",
              color: "text-muted",
              children: "Click Zone Debug Widget"
            })
          })
        }))}</Chunk481060.ua7>}{<Chunk481060.ua7 position={"left"} text={"Creates a widget that shows the overlay's window performance metrics."}>{e => (0, n.jsx)("div", W(H({}, e), {
          children: (0, n.jsx)(m.XZJ, {
            value: null != a,
            onChange: () => r(),
            size: 18,
            type: m.XZJ.Types.INVERTED,
            shape: m.XZJ.Shapes.BOX,
            children: (0, n.jsx)(m.Text, {
              tag: "span",
              variant: "text-md/normal",
              color: "text-muted",
              children: "Overlay Performance Debug Widget"
            })
          })
        }))}</Chunk481060.ua7>}</div>
  }),
  es = Chunk73800.memo(function() {
    let e = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      t = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.getRunningGames()).filter(t => null == e[t.pid]);
    return <Chunk255367.Fragment>{exports.length > 0 && <Chunk481060.ua7 position={"left"} text={"Games that are running but not tracked by the overlay"}>{e => (0, n.jsx)("div", W(H({}, e), {
          children: (0, n.jsxs)("div", {
            className: G.panelGroup,
            children: [(0, n.jsx)(m.Text, {
              variant: "text-md/bold",
              color: "text-danger",
              children: "Untracked Running Games"
            }), t.map(e => (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(m.Text, {
                variant: "text-sm/normal",
                color: "text-danger",
                children: "".concat(e.pid, " - ").concat(e.name, " (").concat(e.exeName, ")")
              }, e.pid), (0, n.jsx)(en, {
                pid: e.pid
              })]
            }))]
          })
        }))}</Chunk481060.ua7>}{<Chunk481060.ua7 position={"left"} text={"The current running games process information"}>{t => (0, n.jsx)("div", W(H({}, t), {
          children: (0, n.jsxs)("div", {
            className: G.panelGroup,
            children: [0 === Object.keys(e).length && (0, n.jsx)(m.Text, {
              variant: "text-sm/normal",
              color: "text-default",
              children: "No running games"
            }), Object.values(e).map(e => (0, n.jsx)(q, {
              trackedGame: e
            }, e.pid))]
          })
        }))}</Chunk481060.ua7>}</Chunk255367.Fragment>
  }),
  eo = Chunk73800.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk371651.default], () => Chunk371651.default.getForcedRenderMode()),
      [t, a] = Chunk73800.useState(module),
      l = e => {
        a(e), h.Z.forceRenderMode(e)
      },
      i = [{
        label: Chunk837268.R5.UNSET,
        value: Chunk837268.R5.UNSET
      }, {
        label: Chunk837268.R5.IN_PROCESS_V2,
        value: Chunk837268.R5.IN_PROCESS_V2
      }, {
        label: Chunk837268.R5.OUT_OF_PROCESS_V3,
        value: Chunk837268.R5.OUT_OF_PROCESS_V3
      }, {
        label: Chunk837268.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        value: Chunk837268.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION
      }].map(t => W(H({}, t), {
        label: "".concat(t.label, " ").concat(e === t.value ? "(current)" : "")
      }));
    return <Chunk481060.ua7 position={"left"} text={"Override the overlay render mode"}>{e => (0, n.jsx)("div", W(H({}, e), {
        className: G.panelGroup,
        children: (0, n.jsx)(m.PhF, {
          serialize: e => e,
          isSelected: e => e === t,
          options: i,
          select: l,
          popoutLayerContext: A.O$
        })
      }))}</Chunk481060.ua7>
  }),
  ec = {
    native: {
      label: "Native",
      filter: e => e.type === j.C7.NativeLegacy || e.type === j.C7.NativeOOP
    },
    render: {
      label: "Render",
      filter: e => e.type === j.C7.Renderer
    },
    client: {
      label: "Client",
      filter: e => e.type === j.C7.OOPModule || e.type === j.C7.LegacyModule
    }
  };

function ed(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : j.l6.Info;
  if (t === j.l6.Error) return "var(--text-danger)";
  switch (e) {
    case j.C7.NativeLegacy:
      return "var(--yellow-500)";
    case j.C7.NativeOOP:
      return "var(--green-500)";
    case j.C7.Renderer:
      return "var(--brand-500)";
    case j.C7.LegacyModule:
      return "var(--yellow-300)";
    case j.C7.OOPModule:
      return "var(--green-300)";
    default:
      return "var(--gray-400)"
  }
}
let eu = [{
  key: "type",
  cellClassName: Chunk931207.tableBarColumn,
  renderHeader: () => null,
  render(e) {
    let {
      type: t,
      logType: a
    } = e, r = em(t);
    return <div className={G.tableBar} style={{
        color: ed(t, a)
      }}><r color={"currentColor"} size={"sm"} /></div>
  }
}, {
  key: "name",
  cellClassName: Chunk931207.nameColumn,
  render(e) {
    let {
      name: t,
      type: a,
      logType: r
    } = e;
    return <n.Fragment>{<m.Text variant={"text-md/normal"} color={function(e) {
          switch (e) {
            case j.l6.Info:
              return "text-primary";
            case j.l6.Warning:
              return "text-feedback-warning";
            case j.l6.Error:
              return "text-danger";
            default:
              return "text-secondary"
          }
        }(r)}>{t}</m.Text>}{<m.Text variant={"text-sm/normal"} color={"text-secondary"}>{"("}{a}{")"}</m.Text>}</n.Fragment>
  }
}, {
  key: "timestamp",
  cellClassName: Chunk931207.rightColumn,
  render(e) {
    let {
      timestamp: t
    } = e;
    return (0, I.vc)(o()(t), "h:mm:ss.SSS")
  }
}];

function em(e) {
  switch (e) {
    case j.C7.NativeLegacy:
      return m.GON;
    case j.C7.NativeOOP:
      return m.ljO;
    case j.C7.Renderer:
      return m.n6r;
    case j.C7.LegacyModule:
      return m.pzj;
    case j.C7.OOPModule:
      return m.m3e;
    default:
      return m.pzj
  }
}

function ex(e) {
  return JSON.stringify(e, (e, t) => true === t ? null : t, 2)
}
let eh = ["__webpack_require__", "fn"],
  ep = ["web.js", "web.js.map"],
  eb = [{
    id: "details",
    name: "Details",
    group: Chunk621060.v0.NONE,
    render: e => {
      var t, a;
      let {
        breadcrumb: r,
        onClose: l
      } = e, {
        name: s,
        type: c,
        logType: d,
        nativeId: u,
        stack: x,
        data: h,
        timestamp: p
      } = r, b = o()(p), f = em(c);
      return <m.w0Z className={G.subPanelScroller}>{<v.Z className={i()(V.headerBar, G.subPanelHeaderBar)}>{<div style={{
              color: ed(c, d)
            }} className={G.headerIcon}><f color={"currentColor"} size={"sm"} /></div>}{<v.Z.Title wrapperClassName={G.headerTitle}>{s}{" ("}{c}{")"}{<m.P3F tag={"span"} className={G.copyEventButton} onClick={() => (0, w.JG)(s)}><m.TIy color={"currentColor"} size={"sm"} /></m.P3F>}</v.Z.Title>}{<v.Z.Icon icon={m.TIy} tooltip={"Copy all properties"} onClick={() => {
              (0, w.JG)(ex(r))
            }} />}{<v.Z.Icon icon={m.k$p} tooltip={"Close"} onClick={l} />}</v.Z>}{<D.E className={G.commonProperties}>{<D.Z9 name={"Timestamp"} copyValue={b.toISOString()}><time dateTime={b.toISOString()} title={(0, I.vc)(b, "LLLL")}>{(0, I.vc)(b, "L h:mm:ss.SSS")}</time></D.Z9>}{<D.Z9 name={"Log Type"} copyValue={d}><code>{d}</code></D.Z9>}{<D.Z9 name={"Native ID"} copyValue={null != (t = null == u ? true : u.toString()) ? t : "null"}><code>{null != (a = null == u ? true : u.toString()) ? a : "null"}</code></D.Z9>}{<D.Z9 name={"Data"} copyValue={ex(h)}><code>{ex(h)}</code></D.Z9>}{<D.Z9 name={"Stack Trace"} copyValue={x}><code>{x.split("\n").map((e, t) => {
                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                if (null != a) {
                  let [, e, r, l, i] = a, s = r.split(/[\\/]/).pop();
                  return eh.includes(e.trim()) ? null : (0, n.jsxs)("div", {
                    children: [(0, n.jsx)("span", {
                      className: G.stackTraceFunction,
                      children: e.trim()
                    }), !ep.includes(null != s ? s : "") && (0, n.jsxs)(n.Fragment, {
                      children: [" (", (0, n.jsxs)("span", {
                        className: G.stackTraceLocation,
                        title: r,
                        children: [s, ":", l, ":", i]
                      }), ")"]
                    })]
                  }, t)
                }
                return (0, n.jsx)("div", {
                  children: e
                }, t)
              })}</code></D.Z9>}</D.E>}</m.w0Z>
    }
  }],
  ef = {
    searchType: Chunk886118.S.REGEX,
    searchStringGenerator: e => {
      let {
        name: t,
        type: a,
        stack: n,
        data: r
      } = e;
      return [t, a, n, JSON.stringify(r)]
    },
    throttleMs: 100
  };

function ev() {
  let [e, t] = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.DEV_getOverlayLoggingBreadcrumbs(), [], Chunk136015.Q), {
    ref: a,
    height: l
  } = (0, Chunk393238.ZP)(), s = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.DEV_isOverlayModuleLoggingEnabled()), [o, c] = Chunk73800.useState(Chunk913527), [u, x] = Chunk73800.useState(Object.keys(ec)), p = e => {
    x(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
  }, [f, v] = Chunk73800.useState(""), j = Chunk73800.useMemo(() => 0 === exports ? [] : module.filter(e => {
    for (let t of u) {
      let {
        filter: a
      } = ec[t];
      if (a(e)) returntrue
    }
    returnfalse
  }), [module, Chunk755721, exports]), [g, _] = Chunk73800.useState(Chunk427860), [y, N] = Chunk73800.useState(null), T = Chunk73800.useMemo(() => module.find(e => e.key === y), [module, Chunk829907]), E = Chunk73800.useCallback(e => {
    _(e)
  }, []), {
    renderSelectedTab: S
  } = (0, Chunk621060.ZP)({
    tabs: eb
  }, []);
  (0, Chunk301801.BO)(Chunk594190, Chunk427860, Chunk355863, ef, [module]);
  let P = Chunk73800.useCallback(e => {
    c(e), h.Z.setModuleLogging(e)
  }, []);
  Chunk73800.useEffect(() => {
    if (Chunk610394.ZP.DEV_isOverlayModuleLoggingEnabled()) return;
    let e = setTimeout(() => {
      Chunk772848(true), Chunk13245.Z.setModuleLogging(true)
    }, 3e3);
    return () => {
      clearTimeout(module)
    }
  }, []);
  let [I, k] = Chunk73800.useState(false), Z = Chunk73800.useRef(null), A = Chunk73800.useCallback(() => {
    (0, Chunk572004.JG)(JSON.stringify(module)), Chunk70956(true)
  }, [module]);
  return Chunk73800.useEffect(() => {
    if (Chunk55935) return Chunk145597.current = setTimeout(() => {
      Chunk70956(false)
    }, 4e3), () => {
      null != Chunk145597.current && clearTimeout(Chunk145597.current)
    }
  }, [Chunk55935]), <div ref={require} className={Chunk931207.panelContainer}>{<div className={Chunk931207.panelGroup}>{<div className={i()(Chunk931207.toolbar, Chunk931207.filtersToolbar)}>{<div title={"Toggles the Polling of Native"} className={Chunk931207.pollBreadcrumbs}>{<Chunk481060.rsf checked={o} onChange={e => P(e)} />}{<Chunk481060.Text variant={"text-md/normal"} color={"currentColor"}>{"Poll Native"}</Chunk481060.Text>}</div>}{Object.entries(ec).map(e => {
          let [t, a] = e;
          return <m.P3F className={i()(G.filter, u.includes(t) && G.activeFilter)} onClick={() => p(t)}><m.Text variant={"text-sm/normal"} color={"currentColor"}>{a.label}</m.Text></m.P3F>
        })}{<Chunk481060.P3F className={Chunk931207.copyAll} onClick={Chunk246992}>{<Chunk481060.Text variant={"text-sm/normal"} color={"text-secondary"}>{Chunk55935 ? "Copied" : "Copy All"}</Chunk481060.Text>}{Chunk55935 ? <Chunk481060.dz2 size={"sm"} color={Chunk481060.TVs.unsafe_rawColors.GREEN_330.css} /> : <Chunk481060.TIy color={"currentColor"} size={"sm"} />}</Chunk481060.P3F>}</div>}{<div className={Chunk931207.toolbar}><Chunk481060.E1j className={Chunk931207.searchBar} query={Chunk594190} onChange={Chunk984370} onClear={() => Chunk984370("")} placeholder={"Regex search by breadcrumb name and data"} /></div>}</div>}{<div className={i()(Chunk931207.panelGroup, Chunk931207.tableContainer)}><Chunk681619.Z columns={eu} data={Chunk837268} selectedRowKey={null != Chunk829907 ? Chunk829907 : true} onClickRow={e => N(e.key)} /></div>}{null != Chunk352527 && <Chunk484036.Z className={i()(Chunk931207.panelGroup, Chunk931207.subPanel)} minHeight={100} initialHeight={null != Chunk120356 ? Chunk120356 / 3 : 300}>{Chunk449224({
        breadcrumb: Chunk352527,
        onClose: () => Chunk886118(null)
      })}</Chunk484036.Z>}</div>
}

function ej() {
  return <Chunk481060.w0Z><div className={i()(Chunk616257.panel, Chunk931207.subPanel)}>{<ei />}{<eo />}{<es />}{<el />}{<ea />}{<er />}</div></Chunk481060.w0Z>
}

function eg() {
  let [e, t] = Chunk73800.useState("state");
  return <div className={i()(Chunk616257.panel, Chunk931207.panel)}>{<div className={Chunk931207.toolbar}>{<Chunk481060.P3F className={i()(Chunk931207.paneOption, "state" === module && Chunk931207.activePaneOption)} onClick={() => exports("state")}><Chunk481060.Text variant={"text-md/medium"} color={"currentColor"}>{"Client State"}</Chunk481060.Text></Chunk481060.P3F>}{<Chunk481060.P3F className={i()(Chunk931207.paneOption, "logging" === module && Chunk931207.activePaneOption)} onClick={() => exports("logging")}><Chunk481060.Text variant={"text-md/medium"} color={"currentColor"}>{"Logging"}</Chunk481060.Text></Chunk481060.P3F>}</div>}{"state" === module && <ej />}{"logging" === module && <ev />}</div>
}