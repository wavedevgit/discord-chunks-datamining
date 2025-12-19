/** Chunk was on 6043 **/
/** chunk id: 633001, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eZ
}), require("./388685.js"), require("./583741.js"), require("./539854.js"), require("./49124.js"), require("./35282.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk681715 = require("./681715.js"),
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
  Chunk975775 = require("./975775.jsx"),
  Chunk681619 = require("./681619.jsx"),
  Chunk621060 = require("./621060.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk757744 = require("./757744.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk622622 = require("./622622.js"),
  Chunk663618 = require("./663618.js");

function ee(e) {
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

function et(e, t) {
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
let en = {
    [Chunk981631.Odu.CLICK_ZONE_DEBUG]: e => et(ee({
      type: Y.Odu.CLICK_ZONE_DEBUG,
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
    }, A.Z.getWidgetDefaultSettings(Y.Odu.CLICK_ZONE_DEBUG)), {
      pinned: true
    }),
    [Chunk981631.Odu.PERFORMANCE_DEBUG]: e => et(ee({
      type: Y.Odu.PERFORMANCE_DEBUG,
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
    }, A.Z.getWidgetDefaultSettings(Y.Odu.PERFORMANCE_DEBUG)), {
      pinned: true
    })
  },
  ea = {};

function er(e) {
  let {
    id: t
  } = e, [n, i] = r.useState(false);
  return r.useEffect(() => {
    let e;
    return n && (e = setTimeout(() => {
      i(false)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [n]), (0, a.jsxs)(p.zx, {
    look: p.zx.Looks.LINK,
    color: p.zx.Colors.LINK,
    size: p.zx.Sizes.MIN,
    onClick: function() {
      (0, M.JG)(t, () => i(true))
    },
    className: J.copyId,
    children: ["Application Id: ", t, " ", n ? X.intl.string(X.t.t5VZ88) : null]
  })
}
let ei = Chunk473749.memo(function(e) {
    let {
      trackedGame: t
    } = e, n = (0, d.e7)([C.ZP], () => C.ZP.getGameOrTransformedSubgameForPID(t.pid)), r = (0, d.e7)([D.Z], () => D.Z.getGameForPID(t.pid)), i = (0, d.e7)([C.ZP], () => null == n ? null : C.ZP.getGameOverlayStatus(n));
    return (0, a.jsxs)("div", {
      className: J.panelGroup,
      children: [(0, a.jsx)(f.Text, {
        variant: "text-md/bold",
        color: "text-strong",
        children: t.gameName
      }), (0, a.jsx)(f.Text, {
        variant: "text-sm/bold",
        color: "text-subtle",
        children: t.pid
      }), (0, a.jsx)(f.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: null == n ? true : n.exeName
      }), (0, a.jsxs)(f.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["isLauncher: ", (null == n ? true : n.isLauncher) ? "Yes" : "No"]
      }), null != t.applicationId && (0, a.jsx)(f.Text, {
        variant: "text-md/bold",
        color: "text-strong",
        children: (0, a.jsx)(er, {
          id: t.applicationId
        })
      }), (0, a.jsxs)(f.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["fullscreenType: ", (0, O.sS)(t.fullscreenType)]
      }), (0, a.jsxs)(f.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["state: ", t.state]
      }), (0, a.jsxs)(f.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"]
      }), (0, a.jsxs)("div", {
        className: J.panelGroup,
        children: [(0, a.jsxs)(f.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["source: ", t.source]
        }), (0, a.jsxs)(f.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"]
        }), (0, a.jsxs)(f.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"]
        }), (0, a.jsxs)(f.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["overlayMethod: ", (0, O.P_)(t.overlayMethod)]
        })]
      }), null != i && (0, a.jsxs)("div", {
        className: J.panelGroup,
        children: [(0, a.jsxs)(f.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw source: ", i.source]
        }), (0, a.jsxs)(f.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw enabledLegacy: ", i.enabledLegacy ? "Yes" : "No"]
        }), (0, a.jsxs)(f.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw enabledOOP: ", i.enabledOOP ? "Yes" : "No"]
        }), (0, a.jsxs)(f.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw overlayMethod: ", (0, O.P_)(i.overlayMethod)]
        })]
      }), (0, a.jsxs)(f.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["hidden: ", (null == n ? true : n.hidden) ? "Yes" : "No"]
      }), (0, a.jsxs)(f.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["hook: ", (null == r ? true : r.hook) ? "Yes" : "No"]
      }), (0, a.jsxs)(f.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["overlay: ", (null == r ? true : r.overlay) ? "Yes" : "No"]
      }), (0, a.jsxs)(f.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["overlayCompatibilityHook: ", (null == r ? true : r.overlayCompatibilityHook) ? "Yes" : "No"]
      }), (0, a.jsxs)(f.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["supportsOutOfProcessOverlay: ", (null == r ? true : r.supportsOutOfProcessOverlay) ? "Yes" : "No"]
      })]
    })
  }),
  el = Chunk473749.memo(function(e) {
    let {
      pid: t
    } = e, n = (0, d.cj)([L.default], () => L.default.getOverlayPIDStatuses()), r = (0, d.cj)([T.default], () => T.default.getTrackedGames()), i = (0, d.e7)([L.default], () => L.default.isInputLocked(t), [t]), l = (0, d.e7)([L.default], () => L.default.DEV_isInputLockedV3(t), [t]), s = (0, d.e7)([L.default], () => L.default.DEV_isInputLocked(t), [t]), o = (0, d.e7)([L.default], () => L.default.isReady(t), [t]);
    return (0, a.jsxs)("div", {
      className: J.panelGroup,
      children: [(0, a.jsx)(f.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: "".concat(t)
      }), (0, a.jsxs)(f.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: ["Screen Type Resolution: ", (e => {
          var t;
          let n = null == (t = r[e]) ? true : t.timer;
          if (null == n || null == n.screenTypeResolutionTimestamp) return "...";
          let a = n.screenTypeResolutionTimestamp - n.startTrackingTimestamp;
          return "".concat(a.toFixed(2), "ms")
        })(t)]
      }), (0, a.jsxs)(f.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: ["Window Creation: ", (e => {
          var t;
          let n = null == (t = r[e]) ? true : t.timer;
          if (null == n || null == n.moduleTrackingTimestamp || null == n.screenTypeResolutionTimestamp) return "...";
          let a = n.moduleTrackingTimestamp - n.screenTypeResolutionTimestamp;
          return "".concat(a.toFixed(2), "ms")
        })(t)]
      }), (0, a.jsxs)(f.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: ["Rendering: ", (e => {
          var t;
          let n = null == (t = r[e]) ? true : t.timer;
          if (null == n || null == n.overlayRenderingTimestamp || null == n.moduleTrackingTimestamp) return "...";
          let a = n.overlayRenderingTimestamp - n.moduleTrackingTimestamp;
          return "".concat(a.toFixed(2), "ms")
        })(t)]
      }), (0, a.jsxs)(f.Text, {
        variant: "text-sm/normal",
        color: "text-strong",
        children: ["Bridge Status: ", n.get(Number(t))]
      }), (0, a.jsxs)(f.Text, {
        variant: "text-sm/normal",
        color: "text-strong",
        children: ["isInputLocked: ", i]
      }), (0, a.jsxs)(f.Text, {
        variant: "text-sm/normal",
        color: "text-strong",
        children: ["isInputLockedV3: ", l]
      }), (0, a.jsxs)(f.Text, {
        variant: "text-sm/normal",
        color: "text-strong",
        children: ["isInputLockedV2: ", s]
      }), (0, a.jsxs)(f.Text, {
        variant: "text-sm/normal",
        color: "text-strong",
        children: ["isReady: ", o]
      })]
    })
  });

function es(e) {
  let t, n = (t = Object.values((0, d.Wu)([A.Z], () => A.Z.getWidgetsForLayout(Q.$S))), t.find(t => t.type === e));
  return [n, () => {
    if (null != n)(0, x.E9)(n.id);
    else {
      let t = en[e];
      if (null == t) return;
      let n = t(Q.$S);
      (0, x.A4)(n)
    }
  }]
}

function eo(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return t ? "".concat(e.toFixed(2), "ms") : (0, U.vc)(o()(e), "h:mm:ss.SSS")
}
let ec = Chunk473749.memo(function(e) {
  var {
    pid: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, a, r = function(e, t) {
      if (null == e) return {};
      var n, a, r = {},
        i = Object.keys(e);
      for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["pid"]);
  let r = (0, d.e7)([T.default], () => {
    var e, n;
    if (null == t) return "Unknown";
    let a = null == (e = T.default.getTrackedGameByPid(t)) ? true : e.gameName;
    return null != a ? (ea[t] = a, a) : null != (n = ea[t]) ? n : "Unknown"
  }, [t]);
  return (0, a.jsx)(f.Text, et(ee({}, n), {
    variant: "text-md/semibold",
    color: "text-strong",
    children: r
  }))
});

function ed() {
  let e = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.hasRenderDebugMode(Chunk837268.GO.TrackFocusPIDs)),
    t = (0, Chunk442837.Wu)([Chunk371651.default], () => Chunk371651.default.getDevToolsFocusedPidsWithTimestamp());
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk622622.panelGroup,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk622622.panelHeader,
      children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
        checked: module,
        onChange: () => void Chunk13245.Z.setRenderDebugMode(!Chunk338949.Z.hasRenderDebugMode(Chunk837268.GO.TrackFocusPIDs), Chunk837268.GO.TrackFocusPIDs),
        label: "Track Focus Pids"
      }), (0, Chunk54381.jsx)(Chunk481060.P3F, {
        className: Chunk622622.panelButton,
        onClick: () => Chunk13245.Z.clearTrackedPids(),
        children: (0, Chunk54381.jsx)(Chunk481060.XHJ, {
          size: "md",
          color: "currentColor"
        })
      })]
    }), (0, Chunk54381.jsxs)(Chunk481060.zJl, {
      className: l()(Chunk622622.panelGroup, Chunk622622.scroller),
      children: [0 === exports.length && (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: "No recent focused pids"
      }), [...exports].reverse().map(e => {
        var t;
        let [n, i, l] = e;
        return (0, a.jsx)(r.Fragment, {
          children: (0, a.jsx)(m.u, {
            position: "left",
            text: l === _.d5.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
            children: (0, a.jsx)("div", {
              children: (0, a.jsxs)(f.Text, {
                variant: "text-sm/medium",
                color: l === _.d5.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                children: [(0, a.jsx)(ec, {
                  pid: i,
                  tag: "span"
                }), " - ", null != (t = null == i ? true : i.toString()) ? t : "null", " @ ", eo(n)]
              })
            })
          })
        }, "".concat(i, "-").concat(n))
      })]
    })]
  })
}
let eu = Chunk473749.memo(function(e) {
    let {
      pid: t
    } = e, n = (0, d.e7)([T.default, C.ZP], () => {
      var e, n;
      if (null == t) return null;
      let a = null == (e = T.default.getTrackedGameByPid(t)) ? true : e.fullscreenType;
      if (null != a) return a;
      let r = C.ZP.getGameOrTransformedSubgameForPID(t);
      return null != (n = null == r ? true : r.fullscreenType) ? n : g.Jx.UNKNOWN
    }, [t]);
    return (0, a.jsxs)(f.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      tag: "span",
      children: ["Original Screen Type: ", null != n ? (0, O.sS)(n) : "Unknown"]
    })
  }),
  em = Chunk473749.memo(function() {
    let e = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      [t, n] = Chunk473749.useState({}),
      i = Chunk473749.useRef(null);
    return Chunk473749.useEffect(() => (Chunk120356.current = setInterval(async () => {
      let e = Chunk594190.ZP.getRunningGames(),
        t = [],
        a = Date.now();
      for (let n of module) exports.push((0, Chunk829907.hj)(require.pid, 0).then(e => [n.pid, e, a]));
      let r = await Promise.all(exports);
      require(e => r.reduce((e, t) => {
        var n, a;
        let [r, i, l] = t;
        if (null == i || null == r) return e;
        let s = null != (a = e[r]) ? a : [],
          o = null == (n = s[s.length - 1]) ? true : n.screenType;
        return (0 === s.length || o !== i) && (e[r] = [...s, {
          pid: r,
          screenType: i,
          timestamp: l
        }]), e
      }, ee({}, e)))
    }, +Chunk70956.Z.Millis.SECOND), () => clearInterval(Chunk120356.current)), []), (0, Chunk54381.jsx)(Chunk681715.u, {
      position: "left",
      text: "The most recent screen types we've logged, indexed by pid",
      children: (0, Chunk54381.jsx)("div", {
        children: (0, Chunk54381.jsxs)(Chunk481060.zJl, {
          className: l()(Chunk622622.panelGroup, Chunk622622.scroller),
          children: [0 === Object.keys(module).length && (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: "No recent screen types"
          }), Object.values(module).map(e => (0, a.jsxs)("div", {
            children: [(0, a.jsx)(ec, {
              tag: "div",
              pid: e.pid
            }), (0, a.jsx)(eu, {
              pid: e.pid
            }), null != t[e.pid] && [...t[e.pid]].reverse().map(t => {
              let {
                screenType: n,
                timestamp: r
              } = t;
              return (0, a.jsx)(f.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: "".concat(n, ":").concat((0, O.sS)(n), " @ ").concat(eo(r))
              }, "".concat(e.pid, "-").concat(n, "-").concat(r))
            })]
          }, e.pid))]
        })
      })
    })
  }),
  ep = Chunk473749.memo(function() {
    var e, t;
    let n = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      r = (0, Chunk145597.getPID)(),
      i = (0, Chunk442837.e7)([Chunk371651.default], () => Chunk371651.default.isOverlayOOPEnabledForPid(Chunk473749), [Chunk473749]),
      [l, s] = (0, Chunk442837.Wu)([Chunk352527.Z], () => [Chunk352527.Z.enabled, Chunk352527.Z.keepOpen]),
      o = (0, Chunk442837.e7)([Chunk808506.default], () => Chunk808506.default.getFocusedPID()),
      c = (0, Chunk442837.e7)([Chunk808506.default], () => Chunk808506.default.isFocusedPidOutOfProcess());
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk622622.panelGroup,
      children: [0 === Object.keys(require).length && (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: "No tracked game times"
      }), Object.values(require).map(e => (0, a.jsx)(el, {
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
          children: ["SoundboardOverlay.enabled: ", l ? "Yes" : "No"]
        }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: ["SoundboardOverlay.keepOpen: ", Chunk913527 ? "Yes" : "No"]
        })]
      })]
    })
  }),
  ef = [{
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
    let [e, t] = es(Chunk981631.Odu.CLICK_ZONE_DEBUG), [n, i] = es(Chunk981631.Odu.PERFORMANCE_DEBUG), l = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.getRenderDebugModes()), [s, o] = Chunk473749.useState({});
    return Chunk473749.useEffect(() => {
      let e = setInterval(() => {
        o({})
      }, 200);
      return () => clearInterval(module)
    }, []), (0, Chunk54381.jsx)("div", {
      className: Chunk622622.panelGroup,
      children: ef.map(s => {
        let o = s.mode === _.GO.OverlayRafManagerForceEnabled ? "".concat(s.label, " (").concat(w.Z.getLastRAFCallbackReason(), ")") : s.label,
          c = () => s.mode === _.GO.ClickZones ? null != e : s.mode === _.GO.WidgetAreas ? null != n : l.has(s.mode);
        return (0, a.jsx)(r.Fragment, {
          children: (0, a.jsx)(f.rsf, {
            checked: c(),
            onChange: () => {
              var e;
              let n = c();
              s.mode === _.GO.ClickZones && t(), s.mode === _.GO.WidgetAreas && i(), e = s.mode, b.Z.setRenderDebugMode(!n, e)
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
      children: [exports.length > 0 && (0, Chunk54381.jsx)(Chunk681715.u, {
        position: "left",
        text: "Games that are running but not tracked by the overlay",
        children: (0, Chunk54381.jsx)("div", {
          children: (0, Chunk54381.jsxs)("div", {
            className: Chunk622622.panelGroup,
            children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
              variant: "text-md/bold",
              color: "text-feedback-critical",
              children: "Untracked Running Games"
            }), exports.map(e => (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(f.Text, {
                variant: "text-sm/normal",
                color: "text-feedback-critical",
                children: "".concat(e.pid, " - ").concat(e.name, " (").concat(e.exeName, ")")
              }, e.pid), (0, a.jsx)(eu, {
                pid: e.pid
              })]
            }))]
          })
        })
      }), (0, Chunk54381.jsx)(Chunk681715.u, {
        position: "left",
        text: "The current running games process information",
        children: (0, Chunk54381.jsx)("div", {
          children: (0, Chunk54381.jsxs)("div", {
            className: Chunk622622.panelGroup,
            children: [0 === Object.keys(module).length && (0, Chunk54381.jsx)(Chunk481060.Text, {
              variant: "text-sm/normal",
              color: "text-default",
              children: "No running games"
            }), Object.values(module).map(e => (0, a.jsx)(ei, {
              trackedGame: e
            }, e.pid))]
          })
        })
      })]
    })
  }),
  eb = Chunk473749.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk371651.default], () => Chunk371651.default.getForcedRenderMode()),
      [t, n] = Chunk473749.useState(module),
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
      }].map(t => et(ee({}, t), {
        label: "".concat(t.label, " ").concat(e === t.value ? "(current)" : "")
      }));
    return (0, Chunk54381.jsx)(Chunk681715.u, {
      position: "left",
      text: "Override the overlay render mode",
      children: (0, Chunk54381.jsx)("div", {
        className: Chunk622622.panelGroup,
        children: (0, Chunk54381.jsx)(Chunk199849.B6, {
          serialize: e => e,
          isSelected: e => e === t,
          options: Chunk120356,
          select: e => {
            n(e), b.Z.forceRenderMode(e)
          },
          popoutLayerContext: Chunk246992.O$
        })
      })
    })
  });

function eg(e) {
  let {
    modalProps: t,
    onClose: n
  } = e, [i, l] = r.useState(null);

  function s() {
    n(null)
  }
  return (0, a.jsxs)(f.Y0X, et(ee({
    size: f.CgR.LARGE,
    "aria-label": "Breadcrumb Import"
  }, t), {
    transitionState: t.transitionState,
    parentComponent: "BreadcrumbImportPanel",
    children: [(0, a.jsxs)(f.xBx, {
      align: j.Z.Align.CENTER,
      justify: j.Z.Justify.BETWEEN,
      children: [(0, a.jsx)(f.Text, {
        variant: "text-md/bold",
        color: "text-feedback-critical",
        children: "Breadcrumb Import"
      }), (0, a.jsx)(f.olH, {
        onClick: s
      })]
    }), (0, a.jsx)(f.hzk, {
      children: (0, a.jsx)("div", {
        className: J.panelGroup,
        children: (0, a.jsx)(f.Kx8, {
          label: "Paste JSON Here",
          onChange: l,
          value: null != i ? i : "",
          rows: 12
        })
      })
    }), (0, a.jsx)(f.mzw, {
      children: (0, a.jsxs)(f.ButtonGroup, {
        direction: "horizontal-reverse",
        children: [(0, a.jsx)(f.Button, {
          variant: "primary",
          text: "Import",
          onClick: function() {
            n(i)
          }
        }), (0, a.jsx)(f.Button, {
          variant: "secondary",
          text: "Clear",
          onClick: s
        })]
      })
    })]
  }))
}
let ev = {
  native: {
    label: "Native",
    filter: e => e.type === S.C7.NativeLegacy || e.type === S.C7.NativeOOP
  },
  render: {
    label: "Render",
    filter: e => e.type === S.C7.Renderer
  },
  flux: {
    label: "Flux",
    filter: e => e.type === S.C7.Flux
  },
  client: {
    label: "Client",
    filter: e => e.type === S.C7.OOPModule || e.type === S.C7.LegacyModule
  }
};

function ej(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : S.l6.Info;
  if (t === S.l6.Error) return "var(--text-feedback-critical)";
  switch (e) {
    case S.C7.NativeLegacy:
      return "var(--yellow-500)";
    case S.C7.NativeOOP:
      return "var(--green-500)";
    case S.C7.Flux:
      return "var(--brand-400)";
    case S.C7.Renderer:
      return "var(--brand-500)";
    case S.C7.LegacyModule:
      return "var(--yellow-300)";
    case S.C7.OOPModule:
      return "var(--green-300)";
    default:
      return "var(--gray-400)"
  }
}
let eC = [{
  key: "type",
  cellClassName: Chunk622622.tableBarColumn,
  renderHeader: () => null,
  render(e) {
    let {
      type: t,
      logType: n
    } = e, r = ey(t);
    return (0, a.jsx)("div", {
      className: J.tableBar,
      style: {
        color: ej(t, n)
      },
      children: (0, a.jsx)(r, {
        color: "currentColor",
        size: "sm"
      })
    })
  }
}, {
  key: "name",
  cellClassName: Chunk622622.nameColumn,
  render(e) {
    let {
      name: t,
      type: n,
      logType: r
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(f.Text, {
        variant: "text-md/normal",
        color: function(e) {
          switch (e) {
            case S.l6.Info:
              return "text-strong";
            case S.l6.Warning:
              return "text-feedback-warning";
            case S.l6.Error:
              return "text-feedback-critical";
            default:
              return "text-subtle"
          }
        }(r),
        children: t
      }), (0, a.jsxs)(f.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: ["(", n, ")"]
      })]
    })
  }
}, {
  key: "timestamp",
  cellClassName: Chunk622622.rightColumn,
  render(e) {
    let {
      timestamp: t
    } = e;
    return (0, U.vc)(o()(t), "h:mm:ss.SSS")
  }
}];

function ey(e) {
  switch (e) {
    case S.C7.NativeLegacy:
      return f.GON;
    case S.C7.NativeOOP:
      return f.ljO;
    case S.C7.Renderer:
    case S.C7.Flux:
      return f.n6r;
    case S.C7.LegacyModule:
      return f.pzj;
    case S.C7.OOPModule:
      return f.m3e;
    default:
      return f.pzj
  }
}

function e_(e) {
  return JSON.stringify(e, (e, t) => true === t ? null : t, 2)
}
let eS = ["__webpack_require__", "fn"],
  eE = ["web.js", "web.js.map"],
  eT = [{
    id: "details",
    name: "Details",
    group: Chunk621060.v0.NONE,
    render: e => {
      var t, n, r, i;
      let {
        breadcrumb: s,
        onClose: c
      } = e, {
        name: d,
        type: u,
        logType: m,
        nativeId: p,
        stack: h,
        data: x,
        timestamp: b,
        pid: g
      } = s, v = o()(b), j = ey(u);
      return (0, a.jsxs)(f.w0Z, {
        className: J.subPanelScroller,
        children: [(0, a.jsxs)(y.Z, {
          className: l()($.headerBar, J.subPanelHeaderBar),
          children: [(0, a.jsx)("div", {
            style: {
              color: ej(u, m)
            },
            className: J.headerIcon,
            children: (0, a.jsx)(j, {
              color: "currentColor",
              size: "sm"
            })
          }), (0, a.jsxs)(y.Z.Title, {
            wrapperClassName: J.headerTitle,
            children: [d, " (", u, ")", (0, a.jsx)(f.P3F, {
              tag: "span",
              className: J.copyEventButton,
              onClick: () => (0, M.JG)(d),
              children: (0, a.jsx)(f.TIy, {
                color: "currentColor",
                size: "sm"
              })
            })]
          }), (0, a.jsx)(y.Z.Icon, {
            icon: f.TIy,
            tooltip: "Copy all properties",
            onClick: () => {
              (0, M.JG)(e_(s))
            }
          }), (0, a.jsx)(y.Z.Icon, {
            icon: f.k$p,
            tooltip: "Close",
            onClick: c
          })]
        }), (0, a.jsxs)(W.E, {
          className: J.commonProperties,
          children: [(0, a.jsx)(W.Z9, {
            name: "Timestamp",
            copyValue: v.toISOString(),
            children: (0, a.jsx)("time", {
              dateTime: v.toISOString(),
              title: (0, U.vc)(v, "LLLL"),
              children: (0, U.vc)(v, "L h:mm:ss.SSS")
            })
          }), (0, a.jsx)(W.Z9, {
            name: "Log Type",
            copyValue: m,
            children: (0, a.jsx)("code", {
              children: m
            })
          }), (0, a.jsx)(W.Z9, {
            name: "PID",
            copyValue: null != (t = null == g ? true : g.toString()) ? t : "null",
            children: (0, a.jsx)("code", {
              children: null != (n = null == g ? true : g.toString()) ? n : "null"
            })
          }), (0, a.jsx)(W.Z9, {
            name: "Native ID",
            copyValue: null != (r = null == p ? true : p.toString()) ? r : "null",
            children: (0, a.jsx)("code", {
              children: null != (i = null == p ? true : p.toString()) ? i : "null"
            })
          }), (0, a.jsx)(W.Z9, {
            name: "Data",
            copyValue: e_(x),
            children: (0, a.jsx)("code", {
              children: e_(x)
            })
          }), null != h && (0, a.jsx)(W.Z9, {
            name: "Stack Trace",
            copyValue: h,
            children: (0, a.jsx)("code", {
              children: h.split("\n").map((e, t) => {
                let n = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                if (null != n) {
                  let [, e, r, i, l] = n, s = r.split(/[\\/]/).pop();
                  return eS.includes(e.trim()) ? null : (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("span", {
                      className: J.stackTraceFunction,
                      children: e.trim()
                    }), !eE.includes(null != s ? s : "") && (0, a.jsxs)(a.Fragment, {
                      children: [" (", (0, a.jsxs)("span", {
                        className: J.stackTraceLocation,
                        title: r,
                        children: [s, ":", i, ":", l]
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
  eO = {
    searchType: Chunk886118.S.REGEX,
    searchStringGenerator: e => {
      let {
        name: t,
        type: n,
        stack: a,
        data: r
      } = e, i = [t, n, JSON.stringify(r)];
      return null != a && i.push(a), i
    },
    throttleMs: 100
  };

function eN() {
  let {
    ref: e,
    height: t
  } = (0, Chunk393238.ZP)(), n = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.isModuleLoggingEnabled()), [i, s] = Chunk473749.useState(require), [o, c] = Chunk473749.useState(false), [u, m] = Chunk473749.useState(null), [p, h] = Chunk473749.useState(Object.keys(ev)), [x, g] = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.getOverlayLoggingBreadcrumbs(), [], Chunk136015.Q), [j, C] = Chunk473749.useState(null), y = null != Chunk600164 ? Chunk600164 : Chunk765250, _ = null != Chunk600164 ? false : Chunk593472;
  Chunk473749.useEffect(() => {
    0 !== Chunk837268 && (o ? Chunk681715(Chunk984370.reduce((e, t) => "game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e, 0)) : Chunk681715(null))
  }, [o, Chunk984370, Chunk837268]);
  let [S, E] = Chunk473749.useState(""), T = Chunk473749.useMemo(() => 0 === Chunk837268 ? [] : Chunk984370.filter(e => {
    if (o && null != u && e.timestamp < u) returnfalse;
    for (let t of p) {
      let {
        filter: n
      } = ev[t];
      if (n(e)) returntrue
    }
    returnfalse
  }), [Chunk984370, Chunk755721, Chunk199849, o, Chunk837268]), [O, N] = Chunk473749.useState(Chunk371651), [w, I] = Chunk473749.useState(null), R = Chunk473749.useMemo(() => Chunk984370.find(e => e.key === w), [Chunk984370, Chunk556809]), A = Chunk473749.useCallback(e => {
    N(e)
  }, []), {
    renderSelectedTab: D
  } = (0, Chunk621060.ZP)({
    tabs: eT
  }, []);
  (0, Chunk301801.BO)(Chunk307149, Chunk371651, Chunk355863, eO, [Chunk984370]);
  let Z = Chunk473749.useCallback(e => {
      s(e), b.Z.setModuleLogging(e)
    }, []),
    [L, U] = Chunk473749.useState(false),
    B = Chunk473749.useRef(null),
    G = Chunk473749.useCallback(() => {
      (0, Chunk572004.JG)(JSON.stringify(Chunk371651)), Chunk55935(true)
    }, [Chunk371651]);
  Chunk473749.useEffect(() => {
    if (Chunk808506) return Chunk70956.current = setTimeout(() => {
      Chunk55935(false)
    }, 4e3), () => {
      null != Chunk70956.current && clearTimeout(Chunk70956.current)
    }
  }, [Chunk808506]);
  let V = Chunk473749.useCallback(e => {
      C(null != e ? JSON.parse(e) : null)
    }, []),
    z = Chunk473749.useCallback(e => {
      if (e) return C(null);
      (0, f.h7j)(e => (0, a.jsx)(eg, {
        modalProps: e,
        onClose: t => {
          V(t), e.onClose()
        }
      }), {
        modalKey: "breadcrumb-import-panel"
      }, f.z1l)
    }, [Chunk145597]);
  return (0, Chunk54381.jsxs)("div", {
    ref: module,
    className: Chunk622622.panelContainer,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk622622.panelGroup,
      children: [(0, Chunk54381.jsxs)("div", {
        className: l()(Chunk622622.toolbar, Chunk622622.filtersToolbar),
        children: [(0, Chunk54381.jsx)("div", {
          title: "Toggles the Polling of Native",
          className: Chunk622622.pollBreadcrumbs,
          children: (0, Chunk54381.jsx)(Chunk481060.Checkbox, {
            label: "Poll Native",
            checked: Chunk120356,
            onChange: e => Z(e)
          })
        }), (0, Chunk54381.jsx)("div", {
          title: "Only show breadcrumbs for active games",
          className: Chunk622622.pollBreadcrumbs,
          children: (0, Chunk54381.jsx)(Chunk481060.Checkbox, {
            label: "Only Active Games",
            checked: o,
            onChange: e => c(e)
          })
        }), (0, Chunk54381.jsxs)(Chunk481060.P3F, {
          className: Chunk622622.copyAll,
          onClick: Chunk13140,
          children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: Chunk808506 ? "Copied" : "Copy All"
          }), Chunk808506 ? (0, Chunk54381.jsx)(Chunk481060.dz2, {
            size: "sm",
            color: Chunk481060.TVs.unsafe_rawColors.GREEN_330.css
          }) : (0, Chunk54381.jsx)(Chunk481060.TIy, {
            color: "currentColor",
            size: "sm"
          })]
        }), (0, Chunk54381.jsx)(Chunk481060.P3F, {
          className: Chunk622622.copyAll,
          onClick: () => Chunk246992(null != Chunk600164),
          children: (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "currentColor",
            children: null != Chunk600164 ? "Clear" : "Import"
          })
        })]
      }), (0, Chunk54381.jsx)("div", {
        className: l()(Chunk622622.toolbar, Chunk622622.filtersToolbar),
        children: Object.entries(ev).map(e => {
          let [t, n] = e;
          return (0, a.jsx)(f.P3F, {
            className: l()(J.filter, p.includes(t) && J.activeFilter),
            onClick: () => {
              h(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t])
            },
            children: (0, a.jsx)(f.Text, {
              variant: "text-sm/normal",
              color: "currentColor",
              children: n.label
            })
          }, t)
        })
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk622622.toolbar,
        children: (0, Chunk54381.jsx)(Chunk481060.E1j, {
          query: Chunk307149,
          onChange: Chunk991186,
          onClear: () => Chunk991186(""),
          placeholder: "Regex search by breadcrumb name and data"
        })
      })]
    }), (0, Chunk54381.jsx)("div", {
      className: l()(Chunk622622.panelGroup, Chunk622622.tableContainer),
      children: (0, Chunk54381.jsx)(Chunk681619.Z, {
        columns: eC,
        data: Chunk829907,
        selectedRowKey: null != Chunk556809 ? Chunk556809 : true,
        onClickRow: e => I(e.key)
      })
    }), null != Chunk352527 && (0, Chunk54381.jsx)(Chunk975775.Z, {
      className: l()(Chunk622622.panelGroup, Chunk622622.subPanel),
      minHeight: 100,
      initialHeight: null != exports ? exports / 3 : 300,
      children: Chunk449224({
        breadcrumb: Chunk352527,
        onClose: () => Chunk886118(null)
      })
    })]
  })
}
let eP = Chunk473749.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk610394.Z], () => Chunk610394.Z.getPopoutInitializationStages());
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk622622.panelGroup,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk622622.panelHeader,
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
  ew = Chunk473749.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.isStateDebuggingEnabled()),
      t = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.getDebuggingState());
    return Chunk473749.useEffect(() => (Chunk13245.Z.setStateDebugging(true), () => {
      Chunk13245.Z.setStateDebugging(false)
    }), []), (0, Chunk54381.jsxs)("div", {
      className: Chunk622622.panelGroup,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk622622.panelHeader,
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
      className: l()(Chunk663618.panel, Chunk622622.subPanel),
      children: [(0, Chunk54381.jsx)(eh, {}), (0, Chunk54381.jsx)(eb, {}), (0, Chunk54381.jsx)(ex, {}), (0, Chunk54381.jsx)(ep, {}), (0, Chunk54381.jsx)(ed, {}), (0, Chunk54381.jsx)(em, {}), (0, Chunk54381.jsx)(eP, {}), (0, Chunk54381.jsx)(ew, {})]
    })
  })
}
let ek = e => {
    switch (e) {
      case "Disabled":
        return;
      case "False":
        returnfalse;
      case "True":
        returntrue
    }
  },
  eR = e => null == e ? "Disabled" : e ? "True" : "False",
  eA = Chunk473749.memo(function() {
    let e = (0, Chunk991186.xj)(),
      t = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getOverlayKeybind());
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk622622.panelGroup,
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
          children: JSON.stringify(et(ee({}, module), {
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
        isSelected: t => t === eR(e.overrideIsNewOverlayUser),
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
          (0, E.jt)(ek(e))
        },
        popoutLayerContext: Chunk246992.O$
      }), (0, Chunk54381.jsx)(Chunk199849.B6, {
        label: "Override Previous Keybind Status",
        description: "Override whether the user's pre-experiment keybind was the default keybind",
        serialize: e => null != e ? e.toString() : "Disabled",
        isSelected: t => t === eR(e.overrideIsUsingDefaultOverlayKeybind),
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
          (0, E.FM)(ek(e))
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

function eD() {
  return (0, Chunk54381.jsx)(Chunk481060.w0Z, {
    children: (0, Chunk54381.jsx)("div", {
      className: l()(Chunk663618.panel, Chunk622622.subPanel),
      children: (0, Chunk54381.jsx)(eA, {})
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
    className: l()(Chunk663618.panel, Chunk622622.panel),
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk622622.toolbar,
      children: [(0, Chunk54381.jsx)(Chunk481060.P3F, {
        className: l()(Chunk622622.paneOption, "state" === module && Chunk622622.activePaneOption),
        onClick: () => exports("state"),
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Client State"
        })
      }), (0, Chunk54381.jsx)(Chunk481060.P3F, {
        className: l()(Chunk622622.paneOption, "logging" === module && Chunk622622.activePaneOption),
        onClick: () => exports("logging"),
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Logging"
        })
      }), (0, Chunk54381.jsx)(Chunk481060.P3F, {
        className: l()(Chunk622622.paneOption, "experiments" === module && Chunk622622.activePaneOption),
        onClick: () => exports("experiments"),
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Experiments"
        })
      })]
    }), "state" === module && (0, Chunk54381.jsx)(eI, {}), "logging" === module && (0, Chunk54381.jsx)(eN, {}), "experiments" === module && (0, Chunk54381.jsx)(eD, {})]
  })
}