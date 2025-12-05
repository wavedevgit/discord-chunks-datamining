/** Chunk was on 75393 **/
/** chunk id: 633001, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eZ
}), require("./388685.js"), require("./583741.js"), require("./539854.js"), require("./49124.js"), require("./35282.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk765250 = require("./765250.js"),
  Chunk13245 = require("./13245.js"),
  Chunk593472 = require("./593472.js"),
  Chunk393238 = require("./393238.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk594190 = require("./594190.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk837268 = require("./837268.js"),
  Chunk307149 = require("./307149.js"),
  Chunk991186 = require("./991186.js"),
  Chunk371651 = require("./371651.js"),
  Chunk829907 = require("./829907.js"),
  Chunk610394 = require("./610394.js"),
  Chunk338949 = require("./338949.js"),
  Chunk556809 = require("./556809.js"),
  Chunk886118 = require("./886118.js"),
  Chunk301801 = require("./301801.js"),
  Chunk352527 = require("./352527.js"),
  Chunk355863 = require("./355863.js"),
  Chunk449224 = require("./449224.js"),
  Chunk556296 = require("./556296.js"),
  Chunk808506 = require("./808506.js"),
  Chunk572004 = require("./572004.js"),
  Chunk55935 = require("./55935.js"),
  Chunk70956 = require("./70956.js"),
  Chunk136015 = require("./136015.js"),
  Chunk13140 = require("./13140.js"),
  Chunk145597 = require("./145597.js"),
  Chunk246992 = require("./246992.js"),
  Chunk257785 = require("./257785.jsx"),
  Chunk484036 = require("./484036.jsx"),
  Chunk681619 = require("./681619.jsx"),
  Chunk621060 = require("./621060.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk757744 = require("./757744.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk454741 = require("./454741.js"),
  Chunk451429 = require("./451429.js");

function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function ee(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let et = {
    [Chunk981631.Odu.CLICK_ZONE_DEBUG]: e => ee($({
      type: q.Odu.CLICK_ZONE_DEBUG,
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
    }, R.Z.getWidgetDefaultSettings(q.Odu.CLICK_ZONE_DEBUG)), {
      pinned: true
    }),
    [Chunk981631.Odu.PERFORMANCE_DEBUG]: e => ee($({
      type: q.Odu.PERFORMANCE_DEBUG,
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
    }, R.Z.getWidgetDefaultSettings(q.Odu.PERFORMANCE_DEBUG)), {
      pinned: true
    })
  },
  en = {};

function ea(e) {
  let {
    id: t
  } = e, [n, r] = l.useState(false);
  return l.useEffect(() => {
    let e;
    return n && (e = setTimeout(() => {
      r(false)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [n]), (0, a.jsxs)(m.zx, {
    look: m.zx.Looks.LINK,
    color: m.zx.Colors.LINK,
    size: m.zx.Sizes.MIN,
    onClick: function() {
      (0, L.JG)(t, () => r(true))
    },
    className: X.copyId,
    children: ["Application Id: ", t, " ", n ? J.intl.string(J.t.t5VZ88) : null]
  })
}
let el = Chunk473749.memo(function(e) {
    let {
      trackedGame: t
    } = e, n = (0, d.e7)([j.ZP], () => j.ZP.getGameOrTransformedSubgameForPID(t.pid)), l = (0, d.e7)([A.Z], () => A.Z.getGameForPID(t.pid)), r = (0, d.e7)([j.ZP], () => null == n ? null : j.ZP.getGameOverlayStatus(n));
    return (0, a.jsxs)("div", {
      className: X.panelGroup,
      children: [(0, a.jsx)(p.Text, {
        variant: "text-md/bold",
        color: "text-strong",
        children: t.gameName
      }), (0, a.jsx)(p.Text, {
        variant: "text-sm/bold",
        color: "text-subtle",
        children: t.pid
      }), (0, a.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: null == n ? true : n.exeName
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["isLauncher: ", (null == n ? true : n.isLauncher) ? "Yes" : "No"]
      }), null != t.applicationId && (0, a.jsx)(p.Text, {
        variant: "text-md/bold",
        color: "text-strong",
        children: (0, a.jsx)(ea, {
          id: t.applicationId
        })
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["fullscreenType: ", (0, N.sS)(t.fullscreenType)]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["state: ", t.state]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"]
      }), (0, a.jsxs)("div", {
        className: X.panelGroup,
        children: [(0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["source: ", t.source]
        }), (0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"]
        }), (0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"]
        }), (0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["overlayMethod: ", (0, N.P_)(t.overlayMethod)]
        })]
      }), null != r && (0, a.jsxs)("div", {
        className: X.panelGroup,
        children: [(0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw source: ", r.source]
        }), (0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw enabledLegacy: ", r.enabledLegacy ? "Yes" : "No"]
        }), (0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw enabledOOP: ", r.enabledOOP ? "Yes" : "No"]
        }), (0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw overlayMethod: ", (0, N.P_)(r.overlayMethod)]
        })]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["hidden: ", (null == n ? true : n.hidden) ? "Yes" : "No"]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["hook: ", (null == l ? true : l.hook) ? "Yes" : "No"]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["overlay: ", (null == l ? true : l.overlay) ? "Yes" : "No"]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["overlayCompatibilityHook: ", (null == l ? true : l.overlayCompatibilityHook) ? "Yes" : "No"]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["supportsOutOfProcessOverlay: ", (null == l ? true : l.supportsOutOfProcessOverlay) ? "Yes" : "No"]
      })]
    })
  }),
  er = Chunk473749.memo(function(e) {
    let {
      pid: t
    } = e, n = (0, d.cj)([D.default], () => D.default.getOverlayPIDStatuses()), l = (0, d.cj)([E.default], () => E.default.getTrackedGames()), r = (0, d.e7)([D.default], () => D.default.isInputLocked(t), [t]), i = (0, d.e7)([D.default], () => D.default.DEV_isInputLockedV3(t), [t]), s = (0, d.e7)([D.default], () => D.default.DEV_isInputLocked(t), [t]), o = (0, d.e7)([D.default], () => D.default.isReady(t), [t]);
    return (0, a.jsxs)("div", {
      className: X.panelGroup,
      children: [(0, a.jsx)(p.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: "".concat(t)
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: ["Screen Type Resolution: ", (e => {
          var t;
          let n = null == (t = l[e]) ? true : t.timer;
          if (null == n || null == n.screenTypeResolutionTimestamp) return "...";
          let a = n.screenTypeResolutionTimestamp - n.startTrackingTimestamp;
          return "".concat(a.toFixed(2), "ms")
        })(t)]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: ["Window Creation: ", (e => {
          var t;
          let n = null == (t = l[e]) ? true : t.timer;
          if (null == n || null == n.moduleTrackingTimestamp || null == n.screenTypeResolutionTimestamp) return "...";
          let a = n.moduleTrackingTimestamp - n.screenTypeResolutionTimestamp;
          return "".concat(a.toFixed(2), "ms")
        })(t)]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: ["Rendering: ", (e => {
          var t;
          let n = null == (t = l[e]) ? true : t.timer;
          if (null == n || null == n.overlayRenderingTimestamp || null == n.moduleTrackingTimestamp) return "...";
          let a = n.overlayRenderingTimestamp - n.moduleTrackingTimestamp;
          return "".concat(a.toFixed(2), "ms")
        })(t)]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-strong",
        children: ["Bridge Status: ", n.get(Number(t))]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-strong",
        children: ["isInputLocked: ", r]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-strong",
        children: ["isInputLockedV3: ", i]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-strong",
        children: ["isInputLockedV2: ", s]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-strong",
        children: ["isReady: ", o]
      })]
    })
  });

function ei(e) {
  let t, n = (t = Object.values((0, d.Wu)([R.Z], () => R.Z.getWidgetsForLayout(Y.$S))), t.find(t => t.type === e));
  return [n, () => {
    if (null != n)(0, x.E9)(n.id);
    else {
      let t = et[e];
      if (null == t) return;
      let n = t(Y.$S);
      (0, x.A4)(n)
    }
  }]
}

function es(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return t ? "".concat(e.toFixed(2), "ms") : (0, M.vc)(o()(e), "h:mm:ss.SSS")
}
let eo = Chunk473749.memo(function(e) {
  var {
    pid: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, a, l = function(e, t) {
      if (null == e) return {};
      var n, a, l = {},
        r = Object.keys(e);
      for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (a = 0; a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["pid"]);
  let l = (0, d.e7)([E.default], () => {
    var e, n;
    if (null == t) return "Unknown";
    let a = null == (e = E.default.getTrackedGameByPid(t)) ? true : e.gameName;
    return null != a ? (en[t] = a, a) : null != (n = en[t]) ? n : "Unknown"
  }, [t]);
  return (0, a.jsx)(p.Text, ee($({}, n), {
    variant: "text-md/semibold",
    color: "text-strong",
    children: l
  }))
});

function ec() {
  let e = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.hasRenderDebugMode(Chunk837268.GO.TrackFocusPIDs)),
    t = (0, Chunk442837.Wu)([Chunk371651.default], () => Chunk371651.default.getDevToolsFocusedPidsWithTimestamp());
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk454741.panelGroup,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk454741.panelHeader,
      children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
        checked: module,
        onChange: () => void Chunk13245.Z.setRenderDebugMode(!Chunk338949.Z.hasRenderDebugMode(Chunk837268.GO.TrackFocusPIDs), Chunk837268.GO.TrackFocusPIDs),
        label: "Track Focus Pids"
      }), (0, Chunk54381.jsx)(Chunk481060.P3F, {
        className: Chunk454741.panelButton,
        onClick: () => Chunk13245.Z.clearTrackedPids(),
        children: (0, Chunk54381.jsx)(Chunk481060.XHJ, {
          size: "md",
          color: "currentColor"
        })
      })]
    }), (0, Chunk54381.jsxs)(Chunk481060.zJl, {
      className: i()(Chunk454741.panelGroup, Chunk454741.scroller),
      children: [0 === exports.length && (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: "No recent focused pids"
      }), [...exports].reverse().map(e => {
        let [t, n, r] = e;
        return (0, a.jsx)(l.Fragment, {
          children: (0, a.jsx)(p.aML, {
            "data-migration-pending": true,
            position: "left",
            text: r === y.d5.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
            children: e => {
              var l;
              return (0, a.jsx)("div", ee($({}, e), {
                children: (0, a.jsxs)(p.Text, {
                  variant: "text-sm/medium",
                  color: r === y.d5.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                  children: [(0, a.jsx)(eo, {
                    pid: n,
                    tag: "span"
                  }), " - ", null != (l = null == n ? true : n.toString()) ? l : "null", " @ ", es(t)]
                })
              }))
            }
          })
        }, "".concat(n, "-").concat(t))
      })]
    })]
  })
}
let ed = Chunk473749.memo(function(e) {
    let {
      pid: t
    } = e, n = (0, d.e7)([E.default, j.ZP], () => {
      var e, n;
      if (null == t) return null;
      let a = null == (e = E.default.getTrackedGameByPid(t)) ? true : e.fullscreenType;
      if (null != a) return a;
      let l = j.ZP.getGameOrTransformedSubgameForPID(t);
      return null != (n = null == l ? true : l.fullscreenType) ? n : g.Jx.UNKNOWN
    }, [t]);
    return (0, a.jsxs)(p.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      tag: "span",
      children: ["Original Screen Type: ", null != n ? (0, N.sS)(n) : "Unknown"]
    })
  }),
  eu = Chunk473749.memo(function() {
    let e = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      [t, n] = Chunk473749.useState({}),
      r = Chunk473749.useRef(null);
    return Chunk473749.useEffect(() => (Chunk120356.current = setInterval(async () => {
      let e = Chunk594190.ZP.getRunningGames(),
        t = [],
        a = Date.now();
      for (let n of module) exports.push((0, Chunk829907.hj)(require.pid, 0).then(e => [n.pid, e, a]));
      let l = await Promise.all(exports);
      require(e => l.reduce((e, t) => {
        var n, a;
        let [l, r, i] = t;
        if (null == r || null == l) return e;
        let s = null != (a = e[l]) ? a : [],
          o = null == (n = s[s.length - 1]) ? true : n.screenType;
        return (0 === s.length || o !== r) && (e[l] = [...s, {
          pid: l,
          screenType: r,
          timestamp: i
        }]), e
      }, $({}, e)))
    }, +Chunk70956.Z.Millis.SECOND), () => clearInterval(Chunk120356.current)), []), (0, Chunk54381.jsx)(Chunk481060.aML, {
      "data-migration-pending": true,
      position: "left",
      text: "The most recent screen types we've logged, indexed by pid",
      children: n => (0, a.jsx)("div", ee($({}, n), {
        children: (0, a.jsxs)(p.zJl, {
          className: i()(X.panelGroup, X.scroller),
          children: [0 === Object.keys(e).length && (0, a.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: "No recent screen types"
          }), Object.values(e).map(e => (0, a.jsxs)("div", {
            children: [(0, a.jsx)(eo, {
              tag: "div",
              pid: e.pid
            }), (0, a.jsx)(ed, {
              pid: e.pid
            }), null != t[e.pid] && [...t[e.pid]].reverse().map(t => {
              let {
                screenType: n,
                timestamp: l
              } = t;
              return (0, a.jsx)(p.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: "".concat(n, ":").concat((0, N.sS)(n), " @ ").concat(es(l))
              }, "".concat(e.pid, "-").concat(n, "-").concat(l))
            })]
          }, e.pid))]
        })
      }))
    })
  }),
  em = Chunk473749.memo(function() {
    var e, t;
    let n = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      l = (0, Chunk145597.getPID)(),
      r = (0, Chunk442837.e7)([Chunk371651.default], () => Chunk371651.default.isOverlayOOPEnabledForPid(Chunk473749), [Chunk473749]),
      [i, s] = (0, Chunk442837.Wu)([Chunk352527.Z], () => [Chunk352527.Z.enabled, Chunk352527.Z.keepOpen]),
      o = (0, Chunk442837.e7)([Chunk808506.default], () => Chunk808506.default.getFocusedPID()),
      c = (0, Chunk442837.e7)([Chunk808506.default], () => Chunk808506.default.isFocusedPidOutOfProcess());
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk454741.panelGroup,
      children: [0 === Object.keys(require).length && (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: "No tracked game times"
      }), Object.values(require).map(e => (0, a.jsx)(er, {
        pid: e.pid
      }, e.pid)), (0, Chunk54381.jsxs)("div", {
        children: [(0, Chunk54381.jsxs)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "text-strong",
          children: ["focusedPID: ", null != (e = null == o ? true : o.toString()) ? module : "null"]
        }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: ["isFocusedPidOutOfProcess: ", Chunk772848 ? "Yes" : "No"]
        }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "text-strong",
          children: ["processPid: ", null != (t = null == Chunk473749 ? true : Chunk473749.toString()) ? exports : "unknown"]
        }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: ["isOOPEnabledForPid: ", Chunk120356 ? "Yes" : "No"]
        }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: ["SoundboardOverlay.enabled: ", i ? "Yes" : "No"]
        }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: ["SoundboardOverlay.keepOpen: ", Chunk913527 ? "Yes" : "No"]
        })]
      })]
    })
  }),
  ep = [{
    mode: Chunk837268.GO.ClickZones,
    label: "Click Zone Debug Mode",
    tooltip: "Enables a red border around click zones to help with debugging."
  }, {
    mode: Chunk837268.GO.WidgetAreas,
    label: "Render Debug Mode",
    tooltip: "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets"
  }, {
    mode: Chunk837268.GO.WindowContainer,
    label: "Window Container Debug Mode",
    tooltip: "Enables a border the overlay window"
  }, {
    mode: Chunk837268.GO.DisabledGPUBoost,
    label: "Disable GPU Boost",
    tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources."
  }, {
    mode: Chunk837268.GO.ForceGPUBoost,
    label: "Force GPU Boost",
    tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources."
  }, {
    mode: Chunk837268.GO.OverlayRafManagerForceEnabled,
    label: "Overlay SmartRAF",
    tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds."
  }, {
    mode: Chunk837268.GO.LegacyOverlayLogging,
    label: "Legacy Overlay Logging",
    tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console."
  }],
  eh = Chunk473749.memo(function() {
    let [e, t] = ei(Chunk981631.Odu.CLICK_ZONE_DEBUG), [n, r] = ei(Chunk981631.Odu.PERFORMANCE_DEBUG), i = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.getRenderDebugModes()), [s, o] = Chunk473749.useState({});
    return Chunk473749.useEffect(() => {
      let e = setInterval(() => {
        o({})
      }, 200);
      return () => clearInterval(module)
    }, []), (0, Chunk54381.jsx)("div", {
      className: Chunk454741.panelGroup,
      children: ep.map(s => {
        let o = s.mode === y.GO.OverlayRafManagerForceEnabled ? "".concat(s.label, " (").concat(P.Z.getLastRAFCallbackReason(), ")") : s.label,
          c = () => s.mode === y.GO.ClickZones ? null != e : s.mode === y.GO.WidgetAreas ? null != n : i.has(s.mode);
        return (0, a.jsx)(l.Fragment, {
          children: (0, a.jsx)(p.rsf, {
            checked: c(),
            onChange: () => {
              var e;
              let n = c();
              s.mode === y.GO.ClickZones && t(), s.mode === y.GO.WidgetAreas && r(), e = s.mode, f.Z.setRenderDebugMode(!n, e)
            },
            label: o,
            description: s.tooltip
          })
        }, s.mode)
      })
    })
  }),
  ex = Chunk473749.memo(function() {
    let e = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      t = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.getRunningGames()).filter(t => null == e[t.pid]);
    return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [exports.length > 0 && (0, Chunk54381.jsx)(Chunk481060.aML, {
        "data-migration-pending": true,
        position: "left",
        text: "Games that are running but not tracked by the overlay",
        children: e => (0, a.jsx)("div", ee($({}, e), {
          children: (0, a.jsxs)("div", {
            className: X.panelGroup,
            children: [(0, a.jsx)(p.Text, {
              variant: "text-md/bold",
              color: "text-feedback-critical",
              children: "Untracked Running Games"
            }), t.map(e => (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(p.Text, {
                variant: "text-sm/normal",
                color: "text-feedback-critical",
                children: "".concat(e.pid, " - ").concat(e.name, " (").concat(e.exeName, ")")
              }, e.pid), (0, a.jsx)(ed, {
                pid: e.pid
              })]
            }))]
          })
        }))
      }), (0, Chunk54381.jsx)(Chunk481060.aML, {
        "data-migration-pending": true,
        position: "left",
        text: "The current running games process information",
        children: t => (0, a.jsx)("div", ee($({}, t), {
          children: (0, a.jsxs)("div", {
            className: X.panelGroup,
            children: [0 === Object.keys(e).length && (0, a.jsx)(p.Text, {
              variant: "text-sm/normal",
              color: "text-default",
              children: "No running games"
            }), Object.values(e).map(e => (0, a.jsx)(el, {
              trackedGame: e
            }, e.pid))]
          })
        }))
      })]
    })
  }),
  ef = Chunk473749.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk371651.default], () => Chunk371651.default.getForcedRenderMode()),
      [t, n] = Chunk473749.useState(module),
      r = e => {
        n(e), f.Z.forceRenderMode(e)
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
      }].map(t => ee($({}, t), {
        label: "".concat(t.label, " ").concat(e === t.value ? "(current)" : "")
      }));
    return (0, Chunk54381.jsx)(Chunk481060.aML, {
      "data-migration-pending": true,
      position: "left",
      text: "Override the overlay render mode",
      children: e => (0, a.jsx)("div", ee($({}, e), {
        className: X.panelGroup,
        children: (0, a.jsx)(u.B6, {
          serialize: e => e,
          isSelected: e => e === t,
          options: i,
          select: r,
          popoutLayerContext: z.O$
        })
      }))
    })
  });

function eg(e) {
  let {
    modalProps: t,
    onClose: n
  } = e, [r, i] = l.useState(null);

  function s() {
    n(null)
  }
  return (0, a.jsxs)(p.Y0X, ee($({
    size: p.CgR.LARGE,
    "aria-label": "Breadcrumb Import"
  }, t), {
    transitionState: t.transitionState,
    parentComponent: "BreadcrumbImportPanel",
    children: [(0, a.jsxs)(p.xBx, {
      align: v.Z.Align.CENTER,
      justify: v.Z.Justify.BETWEEN,
      children: [(0, a.jsx)(p.Text, {
        variant: "text-md/bold",
        color: "text-feedback-critical",
        children: "Breadcrumb Import"
      }), (0, a.jsx)(p.olH, {
        onClick: s
      })]
    }), (0, a.jsx)(p.hzk, {
      children: (0, a.jsx)("div", {
        className: X.panelGroup,
        children: (0, a.jsx)(p.Kx8, {
          label: "Paste JSON Here",
          onChange: i,
          value: null != r ? r : "",
          rows: 12
        })
      })
    }), (0, a.jsx)(p.mzw, {
      children: (0, a.jsxs)(p.ButtonGroup, {
        direction: "horizontal-reverse",
        children: [(0, a.jsx)(p.Button, {
          variant: "primary",
          text: "Import",
          onClick: function() {
            n(r)
          }
        }), (0, a.jsx)(p.Button, {
          variant: "secondary",
          text: "Clear",
          onClick: s
        })]
      })
    })]
  }))
}
let eb = {
  native: {
    label: "Native",
    filter: e => e.type === C.C7.NativeLegacy || e.type === C.C7.NativeOOP
  },
  render: {
    label: "Render",
    filter: e => e.type === C.C7.Renderer
  },
  flux: {
    label: "Flux",
    filter: e => e.type === C.C7.Flux
  },
  client: {
    label: "Client",
    filter: e => e.type === C.C7.OOPModule || e.type === C.C7.LegacyModule
  }
};

function ev(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : C.l6.Info;
  if (t === C.l6.Error) return "var(--text-feedback-critical)";
  switch (e) {
    case C.C7.NativeLegacy:
      return "var(--yellow-500)";
    case C.C7.NativeOOP:
      return "var(--green-500)";
    case C.C7.Flux:
      return "var(--brand-400)";
    case C.C7.Renderer:
      return "var(--brand-500)";
    case C.C7.LegacyModule:
      return "var(--yellow-300)";
    case C.C7.OOPModule:
      return "var(--green-300)";
    default:
      return "var(--gray-400)"
  }
}
let ej = [{
  key: "type",
  cellClassName: Chunk454741.tableBarColumn,
  renderHeader: () => null,
  render(e) {
    let {
      type: t,
      logType: n
    } = e, l = e_(t);
    return (0, a.jsx)("div", {
      className: X.tableBar,
      style: {
        color: ev(t, n)
      },
      children: (0, a.jsx)(l, {
        color: "currentColor",
        size: "sm"
      })
    })
  }
}, {
  key: "name",
  cellClassName: Chunk454741.nameColumn,
  render(e) {
    let {
      name: t,
      type: n,
      logType: l
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(p.Text, {
        variant: "text-md/normal",
        color: function(e) {
          switch (e) {
            case C.l6.Info:
              return "text-strong";
            case C.l6.Warning:
              return "text-feedback-warning";
            case C.l6.Error:
              return "text-feedback-critical";
            default:
              return "text-subtle"
          }
        }(l),
        children: t
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: ["(", n, ")"]
      })]
    })
  }
}, {
  key: "timestamp",
  cellClassName: Chunk454741.rightColumn,
  render(e) {
    let {
      timestamp: t
    } = e;
    return (0, M.vc)(o()(t), "h:mm:ss.SSS")
  }
}];

function e_(e) {
  switch (e) {
    case C.C7.NativeLegacy:
      return p.GON;
    case C.C7.NativeOOP:
      return p.ljO;
    case C.C7.Renderer:
    case C.C7.Flux:
      return p.n6r;
    case C.C7.LegacyModule:
      return p.pzj;
    case C.C7.OOPModule:
      return p.m3e;
    default:
      return p.pzj
  }
}

function ey(e) {
  return JSON.stringify(e, (e, t) => true === t ? null : t, 2)
}
let eC = ["__webpack_require__", "fn"],
  eS = ["web.js", "web.js.map"],
  eE = [{
    id: "details",
    name: "Details",
    group: Chunk621060.v0.NONE,
    render: e => {
      var t, n, l, r;
      let {
        breadcrumb: s,
        onClose: c
      } = e, {
        name: d,
        type: u,
        logType: m,
        nativeId: h,
        stack: x,
        data: f,
        timestamp: g,
        pid: b
      } = s, v = o()(g), j = e_(u);
      return (0, a.jsxs)(p.w0Z, {
        className: X.subPanelScroller,
        children: [(0, a.jsxs)(_.Z, {
          className: i()(Q.headerBar, X.subPanelHeaderBar),
          children: [(0, a.jsx)("div", {
            style: {
              color: ev(u, m)
            },
            className: X.headerIcon,
            children: (0, a.jsx)(j, {
              color: "currentColor",
              size: "sm"
            })
          }), (0, a.jsxs)(_.Z.Title, {
            wrapperClassName: X.headerTitle,
            children: [d, " (", u, ")", (0, a.jsx)(p.P3F, {
              tag: "span",
              className: X.copyEventButton,
              onClick: () => (0, L.JG)(d),
              children: (0, a.jsx)(p.TIy, {
                color: "currentColor",
                size: "sm"
              })
            })]
          }), (0, a.jsx)(_.Z.Icon, {
            icon: p.TIy,
            tooltip: "Copy all properties",
            onClick: () => {
              (0, L.JG)(ey(s))
            }
          }), (0, a.jsx)(_.Z.Icon, {
            icon: p.k$p,
            tooltip: "Close",
            onClick: c
          })]
        }), (0, a.jsxs)(V.E, {
          className: X.commonProperties,
          children: [(0, a.jsx)(V.Z9, {
            name: "Timestamp",
            copyValue: v.toISOString(),
            children: (0, a.jsx)("time", {
              dateTime: v.toISOString(),
              title: (0, M.vc)(v, "LLLL"),
              children: (0, M.vc)(v, "L h:mm:ss.SSS")
            })
          }), (0, a.jsx)(V.Z9, {
            name: "Log Type",
            copyValue: m,
            children: (0, a.jsx)("code", {
              children: m
            })
          }), (0, a.jsx)(V.Z9, {
            name: "PID",
            copyValue: null != (t = null == b ? true : b.toString()) ? t : "null",
            children: (0, a.jsx)("code", {
              children: null != (n = null == b ? true : b.toString()) ? n : "null"
            })
          }), (0, a.jsx)(V.Z9, {
            name: "Native ID",
            copyValue: null != (l = null == h ? true : h.toString()) ? l : "null",
            children: (0, a.jsx)("code", {
              children: null != (r = null == h ? true : h.toString()) ? r : "null"
            })
          }), (0, a.jsx)(V.Z9, {
            name: "Data",
            copyValue: ey(f),
            children: (0, a.jsx)("code", {
              children: ey(f)
            })
          }), null != x && (0, a.jsx)(V.Z9, {
            name: "Stack Trace",
            copyValue: x,
            children: (0, a.jsx)("code", {
              children: x.split("\n").map((e, t) => {
                let n = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                if (null != n) {
                  let [, e, l, r, i] = n, s = l.split(/[\\/]/).pop();
                  return eC.includes(e.trim()) ? null : (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("span", {
                      className: X.stackTraceFunction,
                      children: e.trim()
                    }), !eS.includes(null != s ? s : "") && (0, a.jsxs)(a.Fragment, {
                      children: [" (", (0, a.jsxs)("span", {
                        className: X.stackTraceLocation,
                        title: l,
                        children: [s, ":", r, ":", i]
                      }), ")"]
                    })]
                  }, t)
                }
                return (0, a.jsx)("div", {
                  children: e
                }, t)
              })
            })
          })]
        })]
      })
    }
  }],
  eN = {
    searchType: Chunk886118.S.REGEX,
    searchStringGenerator: e => {
      let {
        name: t,
        type: n,
        stack: a,
        data: l
      } = e, r = [t, n, JSON.stringify(l)];
      return null != a && r.push(a), r
    },
    throttleMs: 100
  };

function eO() {
  let {
    ref: e,
    height: t
  } = (0, Chunk393238.ZP)(), n = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.isModuleLoggingEnabled()), [r, s] = Chunk473749.useState(require), [o, c] = Chunk473749.useState(false), [u, m] = Chunk473749.useState(null), [h, x] = Chunk473749.useState(Object.keys(eb)), [g, v] = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.getOverlayLoggingBreadcrumbs(), [], Chunk136015.Q), [j, _] = Chunk473749.useState(null), y = null != Chunk594190 ? Chunk594190 : Chunk593472, C = null != Chunk594190 ? false : Chunk600164;
  Chunk473749.useEffect(() => {
    0 !== Chunk307149 && (o ? Chunk755721(Chunk837268.reduce((e, t) => "game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e, 0)) : Chunk755721(null))
  }, [o, Chunk837268, Chunk307149]);
  let [S, E] = Chunk473749.useState(""), N = Chunk473749.useMemo(() => 0 === Chunk307149 ? [] : Chunk837268.filter(e => {
    if (o && null != u && e.timestamp < u) returnfalse;
    for (let t of h) {
      let {
        filter: n
      } = eb[t];
      if (n(e)) returntrue
    }
    returnfalse
  }), [Chunk837268, Chunk570140, Chunk199849, o, Chunk307149]), [O, P] = Chunk473749.useState(Chunk829907), [I, k] = Chunk473749.useState(null), R = Chunk473749.useMemo(() => Chunk837268.find(e => e.key === I), [Chunk837268, Chunk886118]), A = Chunk473749.useCallback(e => {
    P(e)
  }, []), {
    renderSelectedTab: Z
  } = (0, Chunk621060.ZP)({
    tabs: eE
  }, []);
  (0, Chunk301801.BO)(Chunk991186, Chunk829907, Chunk449224, eN, [Chunk837268]);
  let D = Chunk473749.useCallback(e => {
      s(e), f.Z.setModuleLogging(e)
    }, []),
    [M, U] = Chunk473749.useState(false),
    F = Chunk473749.useRef(null),
    G = Chunk473749.useCallback(() => {
      (0, Chunk572004.JG)(JSON.stringify(Chunk829907)), Chunk70956(true)
    }, [Chunk829907]);
  Chunk473749.useEffect(() => {
    if (Chunk55935) return Chunk13140.current = setTimeout(() => {
      Chunk70956(false)
    }, 4e3), () => {
      null != Chunk13140.current && clearTimeout(Chunk13140.current)
    }
  }, [Chunk55935]);
  let z = Chunk473749.useCallback(e => {
      _(null != e ? JSON.parse(e) : null)
    }, []),
    V = Chunk473749.useCallback(e => {
      if (e) return _(null);
      (0, p.h7j)(e => (0, a.jsx)(eg, {
        modalProps: e,
        onClose: t => {
          z(t), e.onClose()
        }
      }), {
        modalKey: "breadcrumb-import-panel"
      }, p.z1l)
    }, [Chunk246992]);
  return (0, Chunk54381.jsxs)("div", {
    ref: module,
    className: Chunk454741.panelContainer,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk454741.panelGroup,
      children: [(0, Chunk54381.jsxs)("div", {
        className: i()(Chunk454741.toolbar, Chunk454741.filtersToolbar),
        children: [(0, Chunk54381.jsx)("div", {
          title: "Toggles the Polling of Native",
          className: Chunk454741.pollBreadcrumbs,
          children: (0, Chunk54381.jsx)(Chunk481060.Checkbox, {
            label: "Poll Native",
            checked: Chunk120356,
            onChange: e => D(e)
          })
        }), (0, Chunk54381.jsx)("div", {
          title: "Only show breadcrumbs for active games",
          className: Chunk454741.pollBreadcrumbs,
          children: (0, Chunk54381.jsx)(Chunk481060.Checkbox, {
            label: "Only Active Games",
            checked: o,
            onChange: e => c(e)
          })
        }), (0, Chunk54381.jsxs)(Chunk481060.P3F, {
          className: Chunk454741.copyAll,
          onClick: Chunk145597,
          children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: Chunk55935 ? "Copied" : "Copy All"
          }), Chunk55935 ? (0, Chunk54381.jsx)(Chunk481060.dz2, {
            size: "sm",
            color: Chunk481060.TVs.unsafe_rawColors.GREEN_330.css
          }) : (0, Chunk54381.jsx)(Chunk481060.TIy, {
            color: "currentColor",
            size: "sm"
          })]
        }), (0, Chunk54381.jsx)(Chunk481060.P3F, {
          className: Chunk454741.copyAll,
          onClick: () => Chunk257785(null != Chunk594190),
          children: (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "currentColor",
            children: null != Chunk594190 ? "Clear" : "Import"
          })
        })]
      }), (0, Chunk54381.jsx)("div", {
        className: i()(Chunk454741.toolbar, Chunk454741.filtersToolbar),
        children: Object.entries(eb).map(e => {
          let [t, n] = e;
          return (0, a.jsx)(p.P3F, {
            className: i()(X.filter, h.includes(t) && X.activeFilter),
            onClick: () => {
              x(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t])
            },
            children: (0, a.jsx)(p.Text, {
              variant: "text-sm/normal",
              color: "currentColor",
              children: n.label
            })
          }, t)
        })
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk454741.toolbar,
        children: (0, Chunk54381.jsx)(Chunk481060.E1j, {
          query: Chunk991186,
          onChange: Chunk371651,
          onClear: () => Chunk371651(""),
          placeholder: "Regex search by breadcrumb name and data"
        })
      })]
    }), (0, Chunk54381.jsx)("div", {
      className: i()(Chunk454741.panelGroup, Chunk454741.tableContainer),
      children: (0, Chunk54381.jsx)(Chunk681619.Z, {
        columns: ej,
        data: Chunk610394,
        selectedRowKey: null != Chunk886118 ? Chunk886118 : true,
        onClickRow: e => k(e.key)
      })
    }), null != Chunk355863 && (0, Chunk54381.jsx)(Chunk484036.Z, {
      className: i()(Chunk454741.panelGroup, Chunk454741.subPanel),
      minHeight: 100,
      initialHeight: null != exports ? exports / 3 : 300,
      children: Chunk556296({
        breadcrumb: Chunk355863,
        onClose: () => Chunk352527(null)
      })
    })]
  })
}
let eT = Chunk473749.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk610394.Z], () => Chunk610394.Z.getPopoutInitializationStages());
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk454741.panelGroup,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk454741.panelHeader,
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/bold",
          color: "text-strong",
          children: "Popout Initialization Stages"
        })
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: (0, Chunk54381.jsx)("pre", {
          children: JSON.stringify(module, true, 2)
        })
      })]
    })
  }),
  eP = Chunk473749.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.isStateDebuggingEnabled()),
      t = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.getDebuggingState());
    return Chunk473749.useEffect(() => (Chunk13245.Z.setStateDebugging(true), () => {
      Chunk13245.Z.setStateDebugging(false)
    }), []), (0, Chunk54381.jsxs)("div", {
      className: Chunk454741.panelGroup,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk454741.panelHeader,
        children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
          checked: module,
          onChange: () => Chunk13245.Z.setStateDebugging(!module),
          label: "Poll Native Module State"
        })
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: (0, Chunk54381.jsx)("pre", {
          children: JSON.stringify(exports, true, 2)
        })
      })]
    })
  });

function eI() {
  return (0, Chunk54381.jsx)(Chunk481060.w0Z, {
    children: (0, Chunk54381.jsxs)("div", {
      className: i()(Chunk451429.panel, Chunk454741.subPanel),
      children: [(0, Chunk54381.jsx)(eh, {}), (0, Chunk54381.jsx)(ef, {}), (0, Chunk54381.jsx)(ex, {}), (0, Chunk54381.jsx)(em, {}), (0, Chunk54381.jsx)(ec, {}), (0, Chunk54381.jsx)(eu, {}), (0, Chunk54381.jsx)(eT, {}), (0, Chunk54381.jsx)(eP, {})]
    })
  })
}
let ew = e => {
    switch (e) {
      case "Disabled":
        return;
      case "False":
        returnfalse;
      case "True":
        returntrue
    }
  },
  ek = e => null == e ? "Disabled" : e ? "True" : "False",
  eR = Chunk473749.memo(function() {
    let e = (0, Chunk991186.xj)(),
      t = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getOverlayKeybind());
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk454741.panelGroup,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        children: "Overlay Default Keybind Experiment"
      }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/semibold",
        children: "Experiment State"
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: (0, Chunk54381.jsx)("pre", {
          children: JSON.stringify(ee($({}, module), {
            overlayKeybind: (0, Chunk13140.BB)(exports.shortcut)
          }), true, 2)
        })
      }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/semibold",
        children: "Overrides"
      }), (0, Chunk54381.jsx)(Chunk199849.B6, {
        label: "Overlay User Status",
        description: "Override whether the current user was a new or existing user",
        serialize: e => null != e ? e.toString() : "Disabled",
        isSelected: t => t === ek(e.overrideIsNewOverlayUser),
        options: [{
          label: "Disabled (no override)",
          value: "Disabled"
        }, {
          label: "Existing user",
          value: "False"
        }, {
          label: "New user",
          value: "True"
        }],
        select: e => {
          (0, S.jt)(ew(e))
        },
        popoutLayerContext: Chunk246992.O$
      }), (0, Chunk54381.jsx)(Chunk199849.B6, {
        label: "Override Previous Keybind Status",
        description: "Override whether the user's pre-experiment keybind was the default keybind",
        serialize: e => null != e ? e.toString() : "Disabled",
        isSelected: t => t === ek(e.overrideIsUsingDefaultOverlayKeybind),
        options: [{
          label: "Disabled (no override)",
          value: "Disabled"
        }, {
          label: "Using default keybind",
          value: "True"
        }, {
          label: "Not using default keybind",
          value: "False"
        }],
        select: e => {
          (0, S.FM)(ew(e))
        },
        popoutLayerContext: Chunk246992.O$
      }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/semibold",
        children: "Actions"
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        size: "sm",
        text: "Reset isNewOverlayUser",
        onClick: () => (0, Chunk991186.Wx)()
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        size: "sm",
        text: "Reset isUsingDefaultOverlayKeybind",
        onClick: () => (0, Chunk991186.Zh)()
      })]
    })
  });

function eA() {
  return (0, Chunk54381.jsx)(Chunk481060.w0Z, {
    children: (0, Chunk54381.jsx)("div", {
      className: i()(Chunk451429.panel, Chunk454741.subPanel),
      children: (0, Chunk54381.jsx)(eR, {})
    })
  })
}

function eZ() {
  let [e, t] = Chunk473749.useState("state");
  return Chunk473749.useEffect(() => (Chunk570140.Z.dispatch({
    type: "OVERLAY_SET_DETAILED_LOGGING",
    enabled: true
  }), () => {
    Chunk570140.Z.dispatch({
      type: "OVERLAY_SET_DETAILED_LOGGING",
      enabled: false
    })
  }), []), (0, Chunk54381.jsxs)("div", {
    className: i()(Chunk451429.panel, Chunk454741.panel),
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk454741.toolbar,
      children: [(0, Chunk54381.jsx)(Chunk481060.P3F, {
        className: i()(Chunk454741.paneOption, "state" === module && Chunk454741.activePaneOption),
        onClick: () => exports("state"),
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Client State"
        })
      }), (0, Chunk54381.jsx)(Chunk481060.P3F, {
        className: i()(Chunk454741.paneOption, "logging" === module && Chunk454741.activePaneOption),
        onClick: () => exports("logging"),
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Logging"
        })
      }), (0, Chunk54381.jsx)(Chunk481060.P3F, {
        className: i()(Chunk454741.paneOption, "experiments" === module && Chunk454741.activePaneOption),
        onClick: () => exports("experiments"),
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Experiments"
        })
      })]
    }), "state" === module && (0, Chunk54381.jsx)(eI, {}), "logging" === module && (0, Chunk54381.jsx)(eO, {}), "experiments" === module && (0, Chunk54381.jsx)(eA, {})]
  })
}