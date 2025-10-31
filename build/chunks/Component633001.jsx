/** Chunk was on 3020 **/
/** chunk id: 633001, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eN
}), require("./388685.js"), require("./583741.js"), require("./539854.js"), require("./49124.js"), require("./35282.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk427860 = require("./427860.js"),
  Chunk837268 = require("./837268.js"),
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
  Chunk808506 = require("./808506.js"),
  Chunk572004 = require("./572004.js"),
  Chunk55935 = require("./55935.js"),
  Chunk70956 = require("./70956.js"),
  Chunk136015 = require("./136015.js"),
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

function Y(e) {
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

function J(e, t) {
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
let X = {
    [Chunk981631.Odu.CLICK_ZONE_DEBUG]: e => J(Y({
      type: H.Odu.CLICK_ZONE_DEBUG,
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
    }, I.Z.getWidgetDefaultSettings(H.Odu.CLICK_ZONE_DEBUG)), {
      pinned: true
    }),
    [Chunk981631.Odu.PERFORMANCE_DEBUG]: e => J(Y({
      type: H.Odu.PERFORMANCE_DEBUG,
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
    }, I.Z.getWidgetDefaultSettings(H.Odu.PERFORMANCE_DEBUG)), {
      pinned: true
    })
  },
  Q = {};

function $(e) {
  let {
    id: t
  } = e, [n, l] = i.useState(false);
  return i.useEffect(() => {
    let e;
    return n && (e = setTimeout(() => {
      l(false)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [n]), (0, a.jsxs)(u.zx, {
    look: u.zx.Looks.LINK,
    color: u.zx.Colors.LINK,
    size: u.zx.Sizes.MIN,
    onClick: function() {
      (0, R.JG)(t, () => l(true))
    },
    className: K.copyId,
    children: ["Application Id: ", t, " ", n ? W.intl.string(W.t.t5VZ88) : null]
  })
}
let ee = Chunk647438.memo(function(e) {
    let {
      trackedGame: t
    } = e, n = (0, d.e7)([v.ZP], () => v.ZP.getGameOrTransformedSubgameForPID(t.pid)), i = (0, d.e7)([k.Z], () => k.Z.getGameForPID(t.pid)), l = (0, d.e7)([v.ZP], () => null == n ? null : v.ZP.getGameOverlayStatus(n));
    return (0, a.jsxs)("div", {
      className: K.panelGroup,
      children: [(0, a.jsx)(m.Text, {
        variant: "text-md/bold",
        color: "text-primary",
        children: t.gameName
      }), (0, a.jsx)(m.Text, {
        variant: "text-sm/bold",
        color: "text-secondary",
        children: t.pid
      }), (0, a.jsx)(m.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: null == n ? true : n.exeName
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["isLauncher: ", (null == n ? true : n.isLauncher) ? "Yes" : "No"]
      }), null != t.applicationId && (0, a.jsx)(m.Text, {
        variant: "text-md/bold",
        color: "text-primary",
        children: (0, a.jsx)($, {
          id: t.applicationId
        })
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["fullscreenType: ", (0, S.sS)(t.fullscreenType)]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["state: ", t.state]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"]
      }), (0, a.jsxs)("div", {
        className: K.panelGroup,
        children: [(0, a.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["source: ", t.source]
        }), (0, a.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"]
        }), (0, a.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"]
        }), (0, a.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["overlayMethod: ", (0, S.P_)(t.overlayMethod)]
        })]
      }), null != l && (0, a.jsxs)("div", {
        className: K.panelGroup,
        children: [(0, a.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw source: ", l.source]
        }), (0, a.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw enabledLegacy: ", l.enabledLegacy ? "Yes" : "No"]
        }), (0, a.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw enabledOOP: ", l.enabledOOP ? "Yes" : "No"]
        }), (0, a.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw overlayMethod: ", (0, S.P_)(l.overlayMethod)]
        })]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["hidden: ", (null == n ? true : n.hidden) ? "Yes" : "No"]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["hook: ", (null == i ? true : i.hook) ? "Yes" : "No"]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["overlay: ", (null == i ? true : i.overlay) ? "Yes" : "No"]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["overlayCompatibilityHook: ", (null == i ? true : i.overlayCompatibilityHook) ? "Yes" : "No"]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["supportsOutOfProcessOverlay: ", (null == i ? true : i.supportsOutOfProcessOverlay) ? "Yes" : "No"]
      })]
    })
  }),
  et = Chunk647438.memo(function(e) {
    let {
      pid: t
    } = e, n = (0, d.cj)([A.default], () => A.default.getOverlayPIDStatuses()), i = (0, d.cj)([C.default], () => C.default.getTrackedGames()), l = (0, d.e7)([A.default], () => A.default.isInputLocked(t), [t]), r = (0, d.e7)([A.default], () => A.default.DEV_isInputLockedV3(t), [t]), s = (0, d.e7)([A.default], () => A.default.DEV_isInputLocked(t), [t]), o = (0, d.e7)([A.default], () => A.default.isReady(t), [t]);
    return (0, a.jsxs)("div", {
      className: K.panelGroup,
      children: [(0, a.jsx)(m.Text, {
        variant: "text-md/semibold",
        color: "text-primary",
        children: "".concat(t)
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: ["Screen Type Resolution: ", (e => {
          var t;
          let n = null == (t = i[e]) ? true : t.timer;
          if (null == n || null == n.screenTypeResolutionTimestamp) return "...";
          let a = n.screenTypeResolutionTimestamp - n.startTrackingTimestamp;
          return "".concat(a.toFixed(2), "ms")
        })(t)]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: ["Window Creation: ", (e => {
          var t;
          let n = null == (t = i[e]) ? true : t.timer;
          if (null == n || null == n.moduleTrackingTimestamp || null == n.screenTypeResolutionTimestamp) return "...";
          let a = n.moduleTrackingTimestamp - n.screenTypeResolutionTimestamp;
          return "".concat(a.toFixed(2), "ms")
        })(t)]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: ["Rendering: ", (e => {
          var t;
          let n = null == (t = i[e]) ? true : t.timer;
          if (null == n || null == n.overlayRenderingTimestamp || null == n.moduleTrackingTimestamp) return "...";
          let a = n.overlayRenderingTimestamp - n.moduleTrackingTimestamp;
          return "".concat(a.toFixed(2), "ms")
        })(t)]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-primary",
        children: ["Bridge Status: ", n.get(Number(t))]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-primary",
        children: ["isInputLocked: ", l]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-primary",
        children: ["isInputLockedV3: ", r]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-primary",
        children: ["isInputLockedV2: ", s]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-primary",
        children: ["isReady: ", o]
      })]
    })
  });

function en(e) {
  let t, n = (t = Object.values((0, d.Wu)([I.Z], () => I.Z.getWidgetsForLayout(V.$S))), t.find(t => t.type === e));
  return [n, () => {
    if (null != n)(0, h.E9)(n.id);
    else {
      let t = X[e];
      if (null == t) return;
      let n = t(V.$S);
      (0, h.A4)(n)
    }
  }]
}

function ea(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return t ? "".concat(e.toFixed(2), "ms") : (0, Z.vc)(o()(e), "h:mm:ss.SSS")
}
let ei = Chunk647438.memo(function(e) {
  var {
    pid: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, a, i = function(e, t) {
      if (null == e) return {};
      var n, a, i = {},
        l = Object.keys(e);
      for (a = 0; a < l.length; a++) n = l[a], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (a = 0; a < l.length; a++) n = l[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["pid"]);
  let i = (0, d.e7)([C.default], () => {
    var e, n;
    if (null == t) return "Unknown";
    let a = null == (e = C.default.getTrackedGameByPid(t)) ? true : e.gameName;
    return null != a ? (Q[t] = a, a) : null != (n = Q[t]) ? n : "Unknown"
  }, [t]);
  return (0, a.jsx)(m.Text, J(Y({}, n), {
    variant: "text-md/semibold",
    color: "text-primary",
    children: i
  }))
});

function el() {
  let e = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.hasRenderDebugMode(Chunk837268.GO.TrackFocusPIDs)),
    t = (0, Chunk442837.Wu)([Chunk371651.default], () => Chunk371651.default.getDevToolsFocusedPidsWithTimestamp());
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk454741.panelGroup,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk454741.panelHeader,
      children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
        checked: module,
        onChange: () => void Chunk13245.Z.setRenderDebugMode(!Chunk338949.Z.hasRenderDebugMode(Chunk837268.GO.TrackFocusPIDs), Chunk837268.GO.TrackFocusPIDs),
        label: "Track Focus Pids"
      }), (0, Chunk951288.jsx)(Chunk481060.P3F, {
        className: Chunk454741.panelButton,
        onClick: () => Chunk13245.Z.clearTrackedPids(),
        children: (0, Chunk951288.jsx)(Chunk481060.XHJ, {
          size: "md",
          color: "currentColor"
        })
      })]
    }), (0, Chunk951288.jsxs)(Chunk481060.zJl, {
      className: r()(Chunk454741.panelGroup, Chunk454741.scroller),
      children: [0 === exports.length && (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: "No recent focused pids"
      }), [...exports].reverse().map(e => {
        let [t, n, l] = e;
        return (0, a.jsx)(i.Fragment, {
          children: (0, a.jsx)(m.aML, {
            "data-migration-pending": true,
            position: "left",
            text: l === y.d5.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
            children: e => {
              var i;
              return (0, a.jsx)("div", J(Y({}, e), {
                children: (0, a.jsxs)(m.Text, {
                  variant: "text-sm/medium",
                  color: l === y.d5.TRACK_FOCUS ? "text-default" : "text-danger",
                  children: [(0, a.jsx)(ei, {
                    pid: n,
                    tag: "span"
                  }), " - ", null != (i = null == n ? true : n.toString()) ? i : "null", " @ ", ea(t)]
                })
              }))
            }
          })
        }, "".concat(n, "-").concat(t))
      })]
    })]
  })
}
let er = Chunk647438.memo(function(e) {
    let {
      pid: t
    } = e, n = (0, d.e7)([C.default, v.ZP], () => {
      var e, n;
      if (null == t) return null;
      let a = null == (e = C.default.getTrackedGameByPid(t)) ? true : e.fullscreenType;
      if (null != a) return a;
      let i = v.ZP.getGameOrTransformedSubgameForPID(t);
      return null != (n = null == i ? true : i.fullscreenType) ? n : g.Jx.UNKNOWN
    }, [t]);
    return (0, a.jsxs)(m.Text, {
      variant: "text-sm/normal",
      color: "text-secondary",
      tag: "span",
      children: ["Original Screen Type: ", null != n ? (0, S.sS)(n) : "Unknown"]
    })
  }),
  es = Chunk647438.memo(function() {
    let e = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      [t, n] = Chunk647438.useState({}),
      l = Chunk647438.useRef(null);
    return Chunk647438.useEffect(() => (Chunk120356.current = setInterval(async () => {
      let e = Chunk594190.ZP.getRunningGames(),
        t = [],
        a = Date.now();
      for (let n of module) exports.push((0, Chunk829907.hj)(require.pid, 0).then(e => [n.pid, e, a]));
      let i = await Promise.all(exports);
      require(e => i.reduce((e, t) => {
        var n, a;
        let [i, l, r] = t;
        if (null == l || null == i) return e;
        let s = null != (a = e[i]) ? a : [],
          o = null == (n = s[s.length - 1]) ? true : n.screenType;
        return (0 === s.length || o !== l) && (e[i] = [...s, {
          pid: i,
          screenType: l,
          timestamp: r
        }]), e
      }, Y({}, e)))
    }, +Chunk70956.Z.Millis.SECOND), () => clearInterval(Chunk120356.current)), []), (0, Chunk951288.jsx)(Chunk481060.aML, {
      "data-migration-pending": true,
      position: "left",
      text: "The most recent screen types we've logged, indexed by pid",
      children: n => (0, a.jsx)("div", J(Y({}, n), {
        children: (0, a.jsxs)(m.zJl, {
          className: r()(K.panelGroup, K.scroller),
          children: [0 === Object.keys(e).length && (0, a.jsx)(m.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: "No recent screen types"
          }), Object.values(e).map(e => (0, a.jsxs)("div", {
            children: [(0, a.jsx)(ei, {
              tag: "div",
              pid: e.pid
            }), (0, a.jsx)(er, {
              pid: e.pid
            }), null != t[e.pid] && [...t[e.pid]].reverse().map(t => {
              let {
                screenType: n,
                timestamp: i
              } = t;
              return (0, a.jsx)(m.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: "".concat(n, ":").concat((0, S.sS)(n), " @ ").concat(ea(i))
              }, "".concat(e.pid, "-").concat(n, "-").concat(i))
            })]
          }, e.pid))]
        })
      }))
    })
  }),
  eo = Chunk647438.memo(function() {
    var e, t;
    let n = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      i = (0, Chunk145597.getPID)(),
      l = (0, Chunk442837.e7)([Chunk371651.default], () => Chunk371651.default.isOverlayOOPEnabledForPid(Chunk647438), [Chunk647438]),
      [r, s] = (0, Chunk442837.Wu)([Chunk352527.Z], () => [Chunk352527.Z.enabled, Chunk352527.Z.keepOpen]),
      o = (0, Chunk442837.e7)([Chunk808506.default], () => Chunk808506.default.getFocusedPID()),
      c = (0, Chunk442837.e7)([Chunk808506.default], () => Chunk808506.default.isFocusedPidOutOfProcess());
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk454741.panelGroup,
      children: [0 === Object.keys(require).length && (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: "No tracked game times"
      }), Object.values(require).map(e => (0, a.jsx)(et, {
        pid: e.pid
      }, e.pid)), (0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsxs)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "text-primary",
          children: ["focusedPID: ", null != (e = null == o ? true : o.toString()) ? module : "null"]
        }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: ["isFocusedPidOutOfProcess: ", Chunk772848 ? "Yes" : "No"]
        }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "text-primary",
          children: ["processPid: ", null != (t = null == Chunk647438 ? true : Chunk647438.toString()) ? exports : "unknown"]
        }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: ["isOOPEnabledForPid: ", Chunk120356 ? "Yes" : "No"]
        }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: ["SoundboardOverlay.enabled: ", r ? "Yes" : "No"]
        }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: ["SoundboardOverlay.keepOpen: ", Chunk913527 ? "Yes" : "No"]
        })]
      })]
    })
  }),
  ec = [{
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
  ed = Chunk647438.memo(function() {
    let [e, t] = en(Chunk981631.Odu.CLICK_ZONE_DEBUG), [n, l] = en(Chunk981631.Odu.PERFORMANCE_DEBUG), r = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.getRenderDebugModes()), [s, o] = Chunk647438.useState({});
    return Chunk647438.useEffect(() => {
      let e = setInterval(() => {
        o({})
      }, 200);
      return () => clearInterval(module)
    }, []), (0, Chunk951288.jsx)("div", {
      className: Chunk454741.panelGroup,
      children: ec.map(s => {
        let o = s.mode === y.GO.OverlayRafManagerForceEnabled ? "".concat(s.label, " (").concat(N.Z.getLastRAFCallbackReason(), ")") : s.label,
          c = () => s.mode === y.GO.ClickZones ? null != e : s.mode === y.GO.WidgetAreas ? null != n : r.has(s.mode);
        return (0, a.jsx)(i.Fragment, {
          children: (0, a.jsx)(m.rsf, {
            checked: c(),
            onChange: () => {
              var e;
              let n = c();
              s.mode === y.GO.ClickZones && t(), s.mode === y.GO.WidgetAreas && l(), e = s.mode, x.Z.setRenderDebugMode(!n, e)
            },
            label: o,
            description: s.tooltip
          })
        }, s.mode)
      })
    })
  }),
  eu = Chunk647438.memo(function() {
    let e = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      t = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.getRunningGames()).filter(t => null == e[t.pid]);
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [exports.length > 0 && (0, Chunk951288.jsx)(Chunk481060.aML, {
        "data-migration-pending": true,
        position: "left",
        text: "Games that are running but not tracked by the overlay",
        children: e => (0, a.jsx)("div", J(Y({}, e), {
          children: (0, a.jsxs)("div", {
            className: K.panelGroup,
            children: [(0, a.jsx)(m.Text, {
              variant: "text-md/bold",
              color: "text-danger",
              children: "Untracked Running Games"
            }), t.map(e => (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(m.Text, {
                variant: "text-sm/normal",
                color: "text-danger",
                children: "".concat(e.pid, " - ").concat(e.name, " (").concat(e.exeName, ")")
              }, e.pid), (0, a.jsx)(er, {
                pid: e.pid
              })]
            }))]
          })
        }))
      }), (0, Chunk951288.jsx)(Chunk481060.aML, {
        "data-migration-pending": true,
        position: "left",
        text: "The current running games process information",
        children: t => (0, a.jsx)("div", J(Y({}, t), {
          children: (0, a.jsxs)("div", {
            className: K.panelGroup,
            children: [0 === Object.keys(e).length && (0, a.jsx)(m.Text, {
              variant: "text-sm/normal",
              color: "text-default",
              children: "No running games"
            }), Object.values(e).map(e => (0, a.jsx)(ee, {
              trackedGame: e
            }, e.pid))]
          })
        }))
      })]
    })
  }),
  em = Chunk647438.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk371651.default], () => Chunk371651.default.getForcedRenderMode()),
      [t, n] = Chunk647438.useState(module),
      l = e => {
        n(e), x.Z.forceRenderMode(e)
      },
      r = [{
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
      }].map(t => J(Y({}, t), {
        label: "".concat(t.label, " ").concat(e === t.value ? "(current)" : "")
      }));
    return (0, Chunk951288.jsx)(Chunk481060.aML, {
      "data-migration-pending": true,
      position: "left",
      text: "Override the overlay render mode",
      children: e => (0, a.jsx)("div", J(Y({}, e), {
        className: K.panelGroup,
        children: (0, a.jsx)(m.PhF, {
          serialize: e => e,
          isSelected: e => e === t,
          options: r,
          select: l,
          popoutLayerContext: U.O$
        })
      }))
    })
  });

function ep(e) {
  let {
    modalProps: t,
    onClose: n
  } = e, [l, r] = i.useState(null);

  function s() {
    n(null)
  }
  return (0, a.jsxs)(m.Y0X, J(Y({
    size: m.CgR.LARGE,
    "aria-label": "Breadcrumb Import"
  }, t), {
    transitionState: t.transitionState,
    parentComponent: "BreadcrumbImportPanel",
    children: [(0, a.jsxs)(m.xBx, {
      align: b.Z.Align.CENTER,
      justify: b.Z.Justify.BETWEEN,
      children: [(0, a.jsx)(m.Text, {
        variant: "text-md/bold",
        color: "text-danger",
        children: "Breadcrumb Import"
      }), (0, a.jsx)(m.olH, {
        onClick: s
      })]
    }), (0, a.jsx)(m.hzk, {
      children: (0, a.jsx)("div", {
        className: K.panelGroup,
        children: (0, a.jsx)(m.Kx8, {
          label: "Paste JSON Here",
          onChange: r,
          value: null != l ? l : "",
          rows: 12
        })
      })
    }), (0, a.jsx)(m.mzw, {
      children: (0, a.jsxs)(m.ButtonGroup, {
        direction: "horizontal-reverse",
        children: [(0, a.jsx)(m.Button, {
          variant: "primary",
          text: "Import",
          onClick: function() {
            n(l)
          }
        }), (0, a.jsx)(m.Button, {
          variant: "secondary",
          text: "Clear",
          onClick: s
        })]
      })
    })]
  }))
}
let eh = {
  native: {
    label: "Native",
    filter: e => e.type === _.C7.NativeLegacy || e.type === _.C7.NativeOOP
  },
  render: {
    label: "Render",
    filter: e => e.type === _.C7.Renderer
  },
  flux: {
    label: "Flux",
    filter: e => e.type === _.C7.Flux
  },
  client: {
    label: "Client",
    filter: e => e.type === _.C7.OOPModule || e.type === _.C7.LegacyModule
  }
};

function ex(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : _.l6.Info;
  if (t === _.l6.Error) return "var(--text-danger)";
  switch (e) {
    case _.C7.NativeLegacy:
      return "var(--yellow-500)";
    case _.C7.NativeOOP:
      return "var(--green-500)";
    case _.C7.Flux:
      return "var(--brand-400)";
    case _.C7.Renderer:
      return "var(--brand-500)";
    case _.C7.LegacyModule:
      return "var(--yellow-300)";
    case _.C7.OOPModule:
      return "var(--green-300)";
    default:
      return "var(--gray-400)"
  }
}
let eg = [{
  key: "type",
  cellClassName: Chunk454741.tableBarColumn,
  renderHeader: () => null,
  render(e) {
    let {
      type: t,
      logType: n
    } = e, i = ef(t);
    return (0, a.jsx)("div", {
      className: K.tableBar,
      style: {
        color: ex(t, n)
      },
      children: (0, a.jsx)(i, {
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
      logType: i
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(m.Text, {
        variant: "text-md/normal",
        color: function(e) {
          switch (e) {
            case _.l6.Info:
              return "text-primary";
            case _.l6.Warning:
              return "text-feedback-warning";
            case _.l6.Error:
              return "text-danger";
            default:
              return "text-secondary"
          }
        }(i),
        children: t
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
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
    return (0, Z.vc)(o()(t), "h:mm:ss.SSS")
  }
}];

function ef(e) {
  switch (e) {
    case _.C7.NativeLegacy:
      return m.GON;
    case _.C7.NativeOOP:
      return m.ljO;
    case _.C7.Renderer:
    case _.C7.Flux:
      return m.n6r;
    case _.C7.LegacyModule:
      return m.pzj;
    case _.C7.OOPModule:
      return m.m3e;
    default:
      return m.pzj
  }
}

function eb(e) {
  return JSON.stringify(e, (e, t) => true === t ? null : t, 2)
}
let ev = ["__webpack_require__", "fn"],
  ej = ["web.js", "web.js.map"],
  e_ = [{
    id: "details",
    name: "Details",
    group: Chunk621060.v0.NONE,
    render: e => {
      var t, n, i, l;
      let {
        breadcrumb: s,
        onClose: c
      } = e, {
        name: d,
        type: u,
        logType: p,
        nativeId: h,
        stack: x,
        data: g,
        timestamp: f,
        pid: b
      } = s, v = o()(f), _ = ef(u);
      return (0, a.jsxs)(m.w0Z, {
        className: K.subPanelScroller,
        children: [(0, a.jsxs)(j.Z, {
          className: r()(q.headerBar, K.subPanelHeaderBar),
          children: [(0, a.jsx)("div", {
            style: {
              color: ex(u, p)
            },
            className: K.headerIcon,
            children: (0, a.jsx)(_, {
              color: "currentColor",
              size: "sm"
            })
          }), (0, a.jsxs)(j.Z.Title, {
            wrapperClassName: K.headerTitle,
            children: [d, " (", u, ")", (0, a.jsx)(m.P3F, {
              tag: "span",
              className: K.copyEventButton,
              onClick: () => (0, R.JG)(d),
              children: (0, a.jsx)(m.TIy, {
                color: "currentColor",
                size: "sm"
              })
            })]
          }), (0, a.jsx)(j.Z.Icon, {
            icon: m.TIy,
            tooltip: "Copy all properties",
            onClick: () => {
              (0, R.JG)(eb(s))
            }
          }), (0, a.jsx)(j.Z.Icon, {
            icon: m.k$p,
            tooltip: "Close",
            onClick: c
          })]
        }), (0, a.jsxs)(F.E, {
          className: K.commonProperties,
          children: [(0, a.jsx)(F.Z9, {
            name: "Timestamp",
            copyValue: v.toISOString(),
            children: (0, a.jsx)("time", {
              dateTime: v.toISOString(),
              title: (0, Z.vc)(v, "LLLL"),
              children: (0, Z.vc)(v, "L h:mm:ss.SSS")
            })
          }), (0, a.jsx)(F.Z9, {
            name: "Log Type",
            copyValue: p,
            children: (0, a.jsx)("code", {
              children: p
            })
          }), (0, a.jsx)(F.Z9, {
            name: "PID",
            copyValue: null != (t = null == b ? true : b.toString()) ? t : "null",
            children: (0, a.jsx)("code", {
              children: null != (n = null == b ? true : b.toString()) ? n : "null"
            })
          }), (0, a.jsx)(F.Z9, {
            name: "Native ID",
            copyValue: null != (i = null == h ? true : h.toString()) ? i : "null",
            children: (0, a.jsx)("code", {
              children: null != (l = null == h ? true : h.toString()) ? l : "null"
            })
          }), (0, a.jsx)(F.Z9, {
            name: "Data",
            copyValue: eb(g),
            children: (0, a.jsx)("code", {
              children: eb(g)
            })
          }), null != x && (0, a.jsx)(F.Z9, {
            name: "Stack Trace",
            copyValue: x,
            children: (0, a.jsx)("code", {
              children: x.split("\n").map((e, t) => {
                let n = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                if (null != n) {
                  let [, e, i, l, r] = n, s = i.split(/[\\/]/).pop();
                  return ev.includes(e.trim()) ? null : (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("span", {
                      className: K.stackTraceFunction,
                      children: e.trim()
                    }), !ej.includes(null != s ? s : "") && (0, a.jsxs)(a.Fragment, {
                      children: [" (", (0, a.jsxs)("span", {
                        className: K.stackTraceLocation,
                        title: i,
                        children: [s, ":", l, ":", r]
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
  ey = {
    searchType: Chunk886118.S.REGEX,
    searchStringGenerator: e => {
      let {
        name: t,
        type: n,
        stack: a,
        data: i
      } = e, l = [t, n, JSON.stringify(i)];
      return null != a && l.push(a), l
    },
    throttleMs: 100
  };

function eC() {
  let {
    ref: e,
    height: t
  } = (0, Chunk393238.ZP)(), n = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.isModuleLoggingEnabled()), [l, s] = Chunk647438.useState(require), [o, c] = Chunk647438.useState(false), [u, p] = Chunk647438.useState(null), [h, g] = Chunk647438.useState(Object.keys(eh)), [b, v] = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.getOverlayLoggingBreadcrumbs(), [], Chunk136015.Q), [j, _] = Chunk647438.useState(null), y = null != Chunk984370 ? Chunk984370 : Chunk600164, C = null != Chunk984370 ? false : Chunk594190;
  Chunk647438.useEffect(() => {
    0 !== Chunk371651 && (o ? Chunk570140(Chunk837268.reduce((e, t) => "game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e, 0)) : Chunk570140(null))
  }, [o, Chunk837268, Chunk371651]);
  let [S, E] = Chunk647438.useState(""), N = Chunk647438.useMemo(() => 0 === Chunk371651 ? [] : Chunk837268.filter(e => {
    if (o && null != u && e.timestamp < u) returnfalse;
    for (let t of h) {
      let {
        filter: n
      } = eh[t];
      if (n(e)) returntrue
    }
    returnfalse
  }), [Chunk837268, Chunk765250, Chunk755721, o, Chunk371651]), [O, w] = Chunk647438.useState(Chunk556809), [I, k] = Chunk647438.useState(null), A = Chunk647438.useMemo(() => Chunk837268.find(e => e.key === I), [Chunk837268, Chunk355863]), Z = Chunk647438.useCallback(e => {
    w(e)
  }, []), {
    renderSelectedTab: D
  } = (0, Chunk621060.ZP)({
    tabs: e_
  }, []);
  (0, Chunk301801.BO)(Chunk829907, Chunk556809, Chunk55935, ey, [Chunk837268]);
  let M = Chunk647438.useCallback(e => {
      s(e), x.Z.setModuleLogging(e)
    }, []),
    [U, F] = Chunk647438.useState(false),
    H = Chunk647438.useRef(null),
    V = Chunk647438.useCallback(() => {
      (0, Chunk572004.JG)(JSON.stringify(Chunk556809)), Chunk257785(true)
    }, [Chunk556809]);
  Chunk647438.useEffect(() => {
    if (Chunk246992) return Chunk981631.current = setTimeout(() => {
      Chunk257785(false)
    }, 4e3), () => {
      null != Chunk981631.current && clearTimeout(Chunk981631.current)
    }
  }, [Chunk246992]);
  let W = Chunk647438.useCallback(e => {
      _(null != e ? JSON.parse(e) : null)
    }, []),
    q = Chunk647438.useCallback(e => {
      if (e) return _(null);
      (0, m.h7j)(e => (0, a.jsx)(ep, {
        modalProps: e,
        onClose: t => {
          W(t), e.onClose()
        }
      }), {
        modalKey: "breadcrumb-import-panel"
      }, m.z1l)
    }, [Chunk388032]);
  return (0, Chunk951288.jsxs)("div", {
    ref: module,
    className: Chunk454741.panelContainer,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk454741.panelGroup,
      children: [(0, Chunk951288.jsxs)("div", {
        className: r()(Chunk454741.toolbar, Chunk454741.filtersToolbar),
        children: [(0, Chunk951288.jsx)("div", {
          title: "Toggles the Polling of Native",
          className: Chunk454741.pollBreadcrumbs,
          children: (0, Chunk951288.jsx)(Chunk481060.Checkbox, {
            label: "Poll Native",
            checked: Chunk120356,
            onChange: e => M(e)
          })
        }), (0, Chunk951288.jsx)("div", {
          title: "Only show breadcrumbs for active games",
          className: Chunk454741.pollBreadcrumbs,
          children: (0, Chunk951288.jsx)(Chunk481060.Checkbox, {
            label: "Only Active Games",
            checked: o,
            onChange: e => c(e)
          })
        }), (0, Chunk951288.jsxs)(Chunk481060.P3F, {
          className: Chunk454741.copyAll,
          onClick: Chunk757744,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: Chunk246992 ? "Copied" : "Copy All"
          }), Chunk246992 ? (0, Chunk951288.jsx)(Chunk481060.dz2, {
            size: "sm",
            color: Chunk481060.TVs.unsafe_rawColors.GREEN_330.css
          }) : (0, Chunk951288.jsx)(Chunk481060.TIy, {
            color: "currentColor",
            size: "sm"
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.P3F, {
          className: Chunk454741.copyAll,
          onClick: () => Chunk451429(null != Chunk984370),
          children: (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "currentColor",
            children: null != Chunk984370 ? "Clear" : "Import"
          })
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: r()(Chunk454741.toolbar, Chunk454741.filtersToolbar),
        children: Object.entries(eh).map(e => {
          let [t, n] = e;
          return (0, a.jsx)(m.P3F, {
            className: r()(K.filter, h.includes(t) && K.activeFilter),
            onClick: () => {
              g(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t])
            },
            children: (0, a.jsx)(m.Text, {
              variant: "text-sm/normal",
              color: "currentColor",
              children: n.label
            })
          }, t)
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk454741.toolbar,
        children: (0, Chunk951288.jsx)(Chunk481060.E1j, {
          query: Chunk829907,
          onChange: Chunk610394,
          onClear: () => Chunk610394(""),
          placeholder: "Regex search by breadcrumb name and data"
        })
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: r()(Chunk454741.panelGroup, Chunk454741.tableContainer),
      children: (0, Chunk951288.jsx)(Chunk681619.Z, {
        columns: eg,
        data: Chunk886118,
        selectedRowKey: null != Chunk355863 ? Chunk355863 : true,
        onClickRow: e => k(e.key)
      })
    }), null != Chunk808506 && (0, Chunk951288.jsx)(Chunk484036.Z, {
      className: r()(Chunk454741.panelGroup, Chunk454741.subPanel),
      minHeight: 100,
      initialHeight: null != exports ? exports / 3 : 300,
      children: Chunk70956({
        breadcrumb: Chunk808506,
        onClose: () => Chunk449224(null)
      })
    })]
  })
}
let eS = Chunk647438.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk610394.Z], () => Chunk610394.Z.getPopoutInitializationStages());
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk454741.panelGroup,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk454741.panelHeader,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/bold",
          color: "text-primary",
          children: "Popout Initialization Stages"
        })
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: (0, Chunk951288.jsx)("pre", {
          children: JSON.stringify(module, true, 2)
        })
      })]
    })
  }),
  eE = Chunk647438.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.isStateDebuggingEnabled()),
      t = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.getDebuggingState());
    return Chunk647438.useEffect(() => (Chunk13245.Z.setStateDebugging(true), () => {
      Chunk13245.Z.setStateDebugging(false)
    }), []), (0, Chunk951288.jsxs)("div", {
      className: Chunk454741.panelGroup,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk454741.panelHeader,
        children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
          checked: module,
          onChange: () => Chunk13245.Z.setStateDebugging(!module),
          label: "Poll Native Module State"
        })
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: (0, Chunk951288.jsx)("pre", {
          children: JSON.stringify(exports, true, 2)
        })
      })]
    })
  });

function eT() {
  return (0, Chunk951288.jsx)(Chunk481060.w0Z, {
    children: (0, Chunk951288.jsxs)("div", {
      className: r()(Chunk451429.panel, Chunk454741.subPanel),
      children: [(0, Chunk951288.jsx)(ed, {}), (0, Chunk951288.jsx)(em, {}), (0, Chunk951288.jsx)(eu, {}), (0, Chunk951288.jsx)(eo, {}), (0, Chunk951288.jsx)(el, {}), (0, Chunk951288.jsx)(es, {}), (0, Chunk951288.jsx)(eS, {}), (0, Chunk951288.jsx)(eE, {})]
    })
  })
}

function eN() {
  let [e, t] = Chunk647438.useState("state");
  return Chunk647438.useEffect(() => (Chunk570140.Z.dispatch({
    type: "OVERLAY_SET_DETAILED_LOGGING",
    enabled: true
  }), () => {
    Chunk570140.Z.dispatch({
      type: "OVERLAY_SET_DETAILED_LOGGING",
      enabled: false
    })
  }), []), (0, Chunk951288.jsxs)("div", {
    className: r()(Chunk451429.panel, Chunk454741.panel),
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk454741.toolbar,
      children: [(0, Chunk951288.jsx)(Chunk481060.P3F, {
        className: r()(Chunk454741.paneOption, "state" === module && Chunk454741.activePaneOption),
        onClick: () => exports("state"),
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Client State"
        })
      }), (0, Chunk951288.jsx)(Chunk481060.P3F, {
        className: r()(Chunk454741.paneOption, "logging" === module && Chunk454741.activePaneOption),
        onClick: () => exports("logging"),
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Logging"
        })
      })]
    }), "state" === module && (0, Chunk951288.jsx)(eT, {}), "logging" === module && (0, Chunk951288.jsx)(eC, {})]
  })
}