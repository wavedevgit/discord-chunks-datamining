/** Chunk was on 65347 **/
/** chunk id: 633001, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eR
}), require("./388685.js"), require("./583741.js"), require("./539854.js"), require("./49124.js"), require("./35282.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk312079 = require("./312079.js"),
  Chunk866403 = require("./866403.js");

function Q(e) {
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

function $(e, t) {
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
let ee = {
    [Chunk981631.Odu.CLICK_ZONE_DEBUG]: e => $(Q({
      type: K.Odu.CLICK_ZONE_DEBUG,
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
    }, k.Z.getWidgetDefaultSettings(K.Odu.CLICK_ZONE_DEBUG)), {
      pinned: true
    }),
    [Chunk981631.Odu.PERFORMANCE_DEBUG]: e => $(Q({
      type: K.Odu.PERFORMANCE_DEBUG,
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
    }, k.Z.getWidgetDefaultSettings(K.Odu.PERFORMANCE_DEBUG)), {
      pinned: true
    })
  },
  et = {};

function en(e) {
  let {
    id: t
  } = e, [n, i] = l.useState(false);
  return l.useEffect(() => {
    let e;
    return n && (e = setTimeout(() => {
      i(false)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [n]), (0, a.jsxs)(u.zx, {
    look: u.zx.Looks.LINK,
    color: u.zx.Colors.LINK,
    size: u.zx.Sizes.MIN,
    onClick: function() {
      (0, D.JG)(t, () => i(true))
    },
    className: J.copyId,
    children: ["Application Id: ", t, " ", n ? Y.intl.string(Y.t.t5VZ88) : null]
  })
}
let ea = Chunk473749.memo(function(e) {
    let {
      trackedGame: t
    } = e, n = (0, d.e7)([v.ZP], () => v.ZP.getGameOrTransformedSubgameForPID(t.pid)), l = (0, d.e7)([A.Z], () => A.Z.getGameForPID(t.pid)), i = (0, d.e7)([v.ZP], () => null == n ? null : v.ZP.getGameOverlayStatus(n));
    return (0, a.jsxs)("div", {
      className: J.panelGroup,
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
        children: (0, a.jsx)(en, {
          id: t.applicationId
        })
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["fullscreenType: ", (0, E.sS)(t.fullscreenType)]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["state: ", t.state]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"]
      }), (0, a.jsxs)("div", {
        className: J.panelGroup,
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
          children: ["overlayMethod: ", (0, E.P_)(t.overlayMethod)]
        })]
      }), null != i && (0, a.jsxs)("div", {
        className: J.panelGroup,
        children: [(0, a.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw source: ", i.source]
        }), (0, a.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw enabledLegacy: ", i.enabledLegacy ? "Yes" : "No"]
        }), (0, a.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw enabledOOP: ", i.enabledOOP ? "Yes" : "No"]
        }), (0, a.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw overlayMethod: ", (0, E.P_)(i.overlayMethod)]
        })]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["hidden: ", (null == n ? true : n.hidden) ? "Yes" : "No"]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["hook: ", (null == l ? true : l.hook) ? "Yes" : "No"]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["overlay: ", (null == l ? true : l.overlay) ? "Yes" : "No"]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["overlayCompatibilityHook: ", (null == l ? true : l.overlayCompatibilityHook) ? "Yes" : "No"]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["supportsOutOfProcessOverlay: ", (null == l ? true : l.supportsOutOfProcessOverlay) ? "Yes" : "No"]
      })]
    })
  }),
  el = Chunk473749.memo(function(e) {
    let {
      pid: t
    } = e, n = (0, d.cj)([Z.default], () => Z.default.getOverlayPIDStatuses()), l = (0, d.cj)([S.default], () => S.default.getTrackedGames()), i = (0, d.e7)([Z.default], () => Z.default.isInputLocked(t), [t]), r = (0, d.e7)([Z.default], () => Z.default.DEV_isInputLockedV3(t), [t]), s = (0, d.e7)([Z.default], () => Z.default.DEV_isInputLocked(t), [t]), o = (0, d.e7)([Z.default], () => Z.default.isReady(t), [t]);
    return (0, a.jsxs)("div", {
      className: J.panelGroup,
      children: [(0, a.jsx)(m.Text, {
        variant: "text-md/semibold",
        color: "text-primary",
        children: "".concat(t)
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: ["Screen Type Resolution: ", (e => {
          var t;
          let n = null == (t = l[e]) ? true : t.timer;
          if (null == n || null == n.screenTypeResolutionTimestamp) return "...";
          let a = n.screenTypeResolutionTimestamp - n.startTrackingTimestamp;
          return "".concat(a.toFixed(2), "ms")
        })(t)]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: ["Window Creation: ", (e => {
          var t;
          let n = null == (t = l[e]) ? true : t.timer;
          if (null == n || null == n.moduleTrackingTimestamp || null == n.screenTypeResolutionTimestamp) return "...";
          let a = n.moduleTrackingTimestamp - n.screenTypeResolutionTimestamp;
          return "".concat(a.toFixed(2), "ms")
        })(t)]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: ["Rendering: ", (e => {
          var t;
          let n = null == (t = l[e]) ? true : t.timer;
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
        children: ["isInputLocked: ", i]
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

function ei(e) {
  let t, n = (t = Object.values((0, d.Wu)([k.Z], () => k.Z.getWidgetsForLayout(q.$S))), t.find(t => t.type === e));
  return [n, () => {
    if (null != n)(0, h.E9)(n.id);
    else {
      let t = ee[e];
      if (null == t) return;
      let n = t(q.$S);
      (0, h.A4)(n)
    }
  }]
}

function er(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return t ? "".concat(e.toFixed(2), "ms") : (0, L.vc)(o()(e), "h:mm:ss.SSS")
}
let es = Chunk473749.memo(function(e) {
  var {
    pid: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, a, l = function(e, t) {
      if (null == e) return {};
      var n, a, l = {},
        i = Object.keys(e);
      for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["pid"]);
  let l = (0, d.e7)([S.default], () => {
    var e, n;
    if (null == t) return "Unknown";
    let a = null == (e = S.default.getTrackedGameByPid(t)) ? true : e.gameName;
    return null != a ? (et[t] = a, a) : null != (n = et[t]) ? n : "Unknown"
  }, [t]);
  return (0, a.jsx)(m.Text, $(Q({}, n), {
    variant: "text-md/semibold",
    color: "text-primary",
    children: l
  }))
});

function eo() {
  let e = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.hasRenderDebugMode(Chunk837268.GO.TrackFocusPIDs)),
    t = (0, Chunk442837.Wu)([Chunk371651.default], () => Chunk371651.default.getDevToolsFocusedPidsWithTimestamp());
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk312079.panelGroup,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk312079.panelHeader,
      children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
        checked: module,
        onChange: () => void Chunk13245.Z.setRenderDebugMode(!Chunk338949.Z.hasRenderDebugMode(Chunk837268.GO.TrackFocusPIDs), Chunk837268.GO.TrackFocusPIDs),
        label: "Track Focus Pids"
      }), (0, Chunk54381.jsx)(Chunk481060.P3F, {
        className: Chunk312079.panelButton,
        onClick: () => Chunk13245.Z.clearTrackedPids(),
        children: (0, Chunk54381.jsx)(Chunk481060.XHJ, {
          size: "md",
          color: "currentColor"
        })
      })]
    }), (0, Chunk54381.jsxs)(Chunk481060.zJl, {
      className: r()(Chunk312079.panelGroup, Chunk312079.scroller),
      children: [0 === exports.length && (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: "No recent focused pids"
      }), [...exports].reverse().map(e => {
        let [t, n, i] = e;
        return (0, a.jsx)(l.Fragment, {
          children: (0, a.jsx)(m.aML, {
            "data-migration-pending": true,
            position: "left",
            text: i === y.d5.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
            children: e => {
              var l;
              return (0, a.jsx)("div", $(Q({}, e), {
                children: (0, a.jsxs)(m.Text, {
                  variant: "text-sm/medium",
                  color: i === y.d5.TRACK_FOCUS ? "text-default" : "text-danger",
                  children: [(0, a.jsx)(es, {
                    pid: n,
                    tag: "span"
                  }), " - ", null != (l = null == n ? true : n.toString()) ? l : "null", " @ ", er(t)]
                })
              }))
            }
          })
        }, "".concat(n, "-").concat(t))
      })]
    })]
  })
}
let ec = Chunk473749.memo(function(e) {
    let {
      pid: t
    } = e, n = (0, d.e7)([S.default, v.ZP], () => {
      var e, n;
      if (null == t) return null;
      let a = null == (e = S.default.getTrackedGameByPid(t)) ? true : e.fullscreenType;
      if (null != a) return a;
      let l = v.ZP.getGameOrTransformedSubgameForPID(t);
      return null != (n = null == l ? true : l.fullscreenType) ? n : g.Jx.UNKNOWN
    }, [t]);
    return (0, a.jsxs)(m.Text, {
      variant: "text-sm/normal",
      color: "text-secondary",
      tag: "span",
      children: ["Original Screen Type: ", null != n ? (0, E.sS)(n) : "Unknown"]
    })
  }),
  ed = Chunk473749.memo(function() {
    let e = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      [t, n] = Chunk473749.useState({}),
      i = Chunk473749.useRef(null);
    return Chunk473749.useEffect(() => (Chunk120356.current = setInterval(async () => {
      let e = Chunk594190.ZP.getRunningGames(),
        t = [],
        a = Date.now();
      for (let n of module) exports.push((0, Chunk829907.hj)(require.pid, 0).then(e => [n.pid, e, a]));
      let l = await Promise.all(exports);
      require(e => l.reduce((e, t) => {
        var n, a;
        let [l, i, r] = t;
        if (null == i || null == l) return e;
        let s = null != (a = e[l]) ? a : [],
          o = null == (n = s[s.length - 1]) ? true : n.screenType;
        return (0 === s.length || o !== i) && (e[l] = [...s, {
          pid: l,
          screenType: i,
          timestamp: r
        }]), e
      }, Q({}, e)))
    }, +Chunk70956.Z.Millis.SECOND), () => clearInterval(Chunk120356.current)), []), (0, Chunk54381.jsx)(Chunk481060.aML, {
      "data-migration-pending": true,
      position: "left",
      text: "The most recent screen types we've logged, indexed by pid",
      children: n => (0, a.jsx)("div", $(Q({}, n), {
        children: (0, a.jsxs)(m.zJl, {
          className: r()(J.panelGroup, J.scroller),
          children: [0 === Object.keys(e).length && (0, a.jsx)(m.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: "No recent screen types"
          }), Object.values(e).map(e => (0, a.jsxs)("div", {
            children: [(0, a.jsx)(es, {
              tag: "div",
              pid: e.pid
            }), (0, a.jsx)(ec, {
              pid: e.pid
            }), null != t[e.pid] && [...t[e.pid]].reverse().map(t => {
              let {
                screenType: n,
                timestamp: l
              } = t;
              return (0, a.jsx)(m.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: "".concat(n, ":").concat((0, E.sS)(n), " @ ").concat(er(l))
              }, "".concat(e.pid, "-").concat(n, "-").concat(l))
            })]
          }, e.pid))]
        })
      }))
    })
  }),
  eu = Chunk473749.memo(function() {
    var e, t;
    let n = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      l = (0, Chunk145597.getPID)(),
      i = (0, Chunk442837.e7)([Chunk371651.default], () => Chunk371651.default.isOverlayOOPEnabledForPid(Chunk473749), [Chunk473749]),
      [r, s] = (0, Chunk442837.Wu)([Chunk352527.Z], () => [Chunk352527.Z.enabled, Chunk352527.Z.keepOpen]),
      o = (0, Chunk442837.e7)([Chunk808506.default], () => Chunk808506.default.getFocusedPID()),
      c = (0, Chunk442837.e7)([Chunk808506.default], () => Chunk808506.default.isFocusedPidOutOfProcess());
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk312079.panelGroup,
      children: [0 === Object.keys(require).length && (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: "No tracked game times"
      }), Object.values(require).map(e => (0, a.jsx)(el, {
        pid: e.pid
      }, e.pid)), (0, Chunk54381.jsxs)("div", {
        children: [(0, Chunk54381.jsxs)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "text-primary",
          children: ["focusedPID: ", null != (e = null == o ? true : o.toString()) ? module : "null"]
        }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: ["isFocusedPidOutOfProcess: ", Chunk772848 ? "Yes" : "No"]
        }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "text-primary",
          children: ["processPid: ", null != (t = null == Chunk473749 ? true : Chunk473749.toString()) ? exports : "unknown"]
        }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: ["isOOPEnabledForPid: ", Chunk120356 ? "Yes" : "No"]
        }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: ["SoundboardOverlay.enabled: ", r ? "Yes" : "No"]
        }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: ["SoundboardOverlay.keepOpen: ", Chunk913527 ? "Yes" : "No"]
        })]
      })]
    })
  }),
  em = [{
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
  ep = Chunk473749.memo(function() {
    let [e, t] = ei(Chunk981631.Odu.CLICK_ZONE_DEBUG), [n, i] = ei(Chunk981631.Odu.PERFORMANCE_DEBUG), r = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.getRenderDebugModes()), [s, o] = Chunk473749.useState({});
    return Chunk473749.useEffect(() => {
      let e = setInterval(() => {
        o({})
      }, 200);
      return () => clearInterval(module)
    }, []), (0, Chunk54381.jsx)("div", {
      className: Chunk312079.panelGroup,
      children: em.map(s => {
        let o = s.mode === y.GO.OverlayRafManagerForceEnabled ? "".concat(s.label, " (").concat(O.Z.getLastRAFCallbackReason(), ")") : s.label,
          c = () => s.mode === y.GO.ClickZones ? null != e : s.mode === y.GO.WidgetAreas ? null != n : r.has(s.mode);
        return (0, a.jsx)(l.Fragment, {
          children: (0, a.jsx)(m.rsf, {
            checked: c(),
            onChange: () => {
              var e;
              let n = c();
              s.mode === y.GO.ClickZones && t(), s.mode === y.GO.WidgetAreas && i(), e = s.mode, x.Z.setRenderDebugMode(!n, e)
            },
            label: o,
            description: s.tooltip
          })
        }, s.mode)
      })
    })
  }),
  eh = Chunk473749.memo(function() {
    let e = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      t = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.getRunningGames()).filter(t => null == e[t.pid]);
    return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [exports.length > 0 && (0, Chunk54381.jsx)(Chunk481060.aML, {
        "data-migration-pending": true,
        position: "left",
        text: "Games that are running but not tracked by the overlay",
        children: e => (0, a.jsx)("div", $(Q({}, e), {
          children: (0, a.jsxs)("div", {
            className: J.panelGroup,
            children: [(0, a.jsx)(m.Text, {
              variant: "text-md/bold",
              color: "text-danger",
              children: "Untracked Running Games"
            }), t.map(e => (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(m.Text, {
                variant: "text-sm/normal",
                color: "text-danger",
                children: "".concat(e.pid, " - ").concat(e.name, " (").concat(e.exeName, ")")
              }, e.pid), (0, a.jsx)(ec, {
                pid: e.pid
              })]
            }))]
          })
        }))
      }), (0, Chunk54381.jsx)(Chunk481060.aML, {
        "data-migration-pending": true,
        position: "left",
        text: "The current running games process information",
        children: t => (0, a.jsx)("div", $(Q({}, t), {
          children: (0, a.jsxs)("div", {
            className: J.panelGroup,
            children: [0 === Object.keys(e).length && (0, a.jsx)(m.Text, {
              variant: "text-sm/normal",
              color: "text-default",
              children: "No running games"
            }), Object.values(e).map(e => (0, a.jsx)(ea, {
              trackedGame: e
            }, e.pid))]
          })
        }))
      })]
    })
  }),
  ex = Chunk473749.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk371651.default], () => Chunk371651.default.getForcedRenderMode()),
      [t, n] = Chunk473749.useState(module),
      i = e => {
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
      }].map(t => $(Q({}, t), {
        label: "".concat(t.label, " ").concat(e === t.value ? "(current)" : "")
      }));
    return (0, Chunk54381.jsx)(Chunk481060.aML, {
      "data-migration-pending": true,
      position: "left",
      text: "Override the overlay render mode",
      children: e => (0, a.jsx)("div", $(Q({}, e), {
        className: J.panelGroup,
        children: (0, a.jsx)(m.PhF, {
          serialize: e => e,
          isSelected: e => e === t,
          options: r,
          select: i,
          popoutLayerContext: G.O$
        })
      }))
    })
  });

function eg(e) {
  let {
    modalProps: t,
    onClose: n
  } = e, [i, r] = l.useState(null);

  function s() {
    n(null)
  }
  return (0, a.jsxs)(m.Y0X, $(Q({
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
        className: J.panelGroup,
        children: (0, a.jsx)(m.Kx8, {
          label: "Paste JSON Here",
          onChange: r,
          value: null != i ? i : "",
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
            n(i)
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
let ef = {
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

function eb(e) {
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
let ev = [{
  key: "type",
  cellClassName: Chunk312079.tableBarColumn,
  renderHeader: () => null,
  render(e) {
    let {
      type: t,
      logType: n
    } = e, l = ej(t);
    return (0, a.jsx)("div", {
      className: J.tableBar,
      style: {
        color: eb(t, n)
      },
      children: (0, a.jsx)(l, {
        color: "currentColor",
        size: "sm"
      })
    })
  }
}, {
  key: "name",
  cellClassName: Chunk312079.nameColumn,
  render(e) {
    let {
      name: t,
      type: n,
      logType: l
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
        }(l),
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
  cellClassName: Chunk312079.rightColumn,
  render(e) {
    let {
      timestamp: t
    } = e;
    return (0, L.vc)(o()(t), "h:mm:ss.SSS")
  }
}];

function ej(e) {
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

function e_(e) {
  return JSON.stringify(e, (e, t) => true === t ? null : t, 2)
}
let ey = ["__webpack_require__", "fn"],
  eC = ["web.js", "web.js.map"],
  eS = [{
    id: "details",
    name: "Details",
    group: Chunk621060.v0.NONE,
    render: e => {
      var t, n, l, i;
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
      } = s, v = o()(f), _ = ej(u);
      return (0, a.jsxs)(m.w0Z, {
        className: J.subPanelScroller,
        children: [(0, a.jsxs)(j.Z, {
          className: r()(X.headerBar, J.subPanelHeaderBar),
          children: [(0, a.jsx)("div", {
            style: {
              color: eb(u, p)
            },
            className: J.headerIcon,
            children: (0, a.jsx)(_, {
              color: "currentColor",
              size: "sm"
            })
          }), (0, a.jsxs)(j.Z.Title, {
            wrapperClassName: J.headerTitle,
            children: [d, " (", u, ")", (0, a.jsx)(m.P3F, {
              tag: "span",
              className: J.copyEventButton,
              onClick: () => (0, D.JG)(d),
              children: (0, a.jsx)(m.TIy, {
                color: "currentColor",
                size: "sm"
              })
            })]
          }), (0, a.jsx)(j.Z.Icon, {
            icon: m.TIy,
            tooltip: "Copy all properties",
            onClick: () => {
              (0, D.JG)(e_(s))
            }
          }), (0, a.jsx)(j.Z.Icon, {
            icon: m.k$p,
            tooltip: "Close",
            onClick: c
          })]
        }), (0, a.jsxs)(z.E, {
          className: J.commonProperties,
          children: [(0, a.jsx)(z.Z9, {
            name: "Timestamp",
            copyValue: v.toISOString(),
            children: (0, a.jsx)("time", {
              dateTime: v.toISOString(),
              title: (0, L.vc)(v, "LLLL"),
              children: (0, L.vc)(v, "L h:mm:ss.SSS")
            })
          }), (0, a.jsx)(z.Z9, {
            name: "Log Type",
            copyValue: p,
            children: (0, a.jsx)("code", {
              children: p
            })
          }), (0, a.jsx)(z.Z9, {
            name: "PID",
            copyValue: null != (t = null == b ? true : b.toString()) ? t : "null",
            children: (0, a.jsx)("code", {
              children: null != (n = null == b ? true : b.toString()) ? n : "null"
            })
          }), (0, a.jsx)(z.Z9, {
            name: "Native ID",
            copyValue: null != (l = null == h ? true : h.toString()) ? l : "null",
            children: (0, a.jsx)("code", {
              children: null != (i = null == h ? true : h.toString()) ? i : "null"
            })
          }), (0, a.jsx)(z.Z9, {
            name: "Data",
            copyValue: e_(g),
            children: (0, a.jsx)("code", {
              children: e_(g)
            })
          }), null != x && (0, a.jsx)(z.Z9, {
            name: "Stack Trace",
            copyValue: x,
            children: (0, a.jsx)("code", {
              children: x.split("\n").map((e, t) => {
                let n = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                if (null != n) {
                  let [, e, l, i, r] = n, s = l.split(/[\\/]/).pop();
                  return ey.includes(e.trim()) ? null : (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("span", {
                      className: J.stackTraceFunction,
                      children: e.trim()
                    }), !eC.includes(null != s ? s : "") && (0, a.jsxs)(a.Fragment, {
                      children: [" (", (0, a.jsxs)("span", {
                        className: J.stackTraceLocation,
                        title: l,
                        children: [s, ":", i, ":", r]
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
  eE = {
    searchType: Chunk886118.S.REGEX,
    searchStringGenerator: e => {
      let {
        name: t,
        type: n,
        stack: a,
        data: l
      } = e, i = [t, n, JSON.stringify(l)];
      return null != a && i.push(a), i
    },
    throttleMs: 100
  };

function eN() {
  let {
    ref: e,
    height: t
  } = (0, Chunk393238.ZP)(), n = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.isModuleLoggingEnabled()), [i, s] = Chunk473749.useState(require), [o, c] = Chunk473749.useState(false), [u, p] = Chunk473749.useState(null), [h, g] = Chunk473749.useState(Object.keys(ef)), [b, v] = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.getOverlayLoggingBreadcrumbs(), [], Chunk136015.Q), [j, _] = Chunk473749.useState(null), y = null != Chunk984370 ? Chunk984370 : Chunk600164, C = null != Chunk984370 ? false : Chunk594190;
  Chunk473749.useEffect(() => {
    0 !== Chunk991186 && (o ? Chunk570140(Chunk837268.reduce((e, t) => "game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e, 0)) : Chunk570140(null))
  }, [o, Chunk837268, Chunk991186]);
  let [S, E] = Chunk473749.useState(""), N = Chunk473749.useMemo(() => 0 === Chunk991186 ? [] : Chunk837268.filter(e => {
    if (o && null != u && e.timestamp < u) returnfalse;
    for (let t of h) {
      let {
        filter: n
      } = ef[t];
      if (n(e)) returntrue
    }
    returnfalse
  }), [Chunk837268, Chunk765250, Chunk755721, o, Chunk991186]), [O, P] = Chunk473749.useState(Chunk610394), [w, k] = Chunk473749.useState(null), A = Chunk473749.useMemo(() => Chunk837268.find(e => e.key === w), [Chunk837268, Chunk352527]), R = Chunk473749.useCallback(e => {
    P(e)
  }, []), {
    renderSelectedTab: Z
  } = (0, Chunk621060.ZP)({
    tabs: eS
  }, []);
  (0, Chunk301801.BO)(Chunk371651, Chunk610394, Chunk556296, eE, [Chunk837268]);
  let L = Chunk473749.useCallback(e => {
      s(e), x.Z.setModuleLogging(e)
    }, []),
    [M, B] = Chunk473749.useState(false),
    F = Chunk473749.useRef(null),
    G = Chunk473749.useCallback(() => {
      (0, Chunk572004.JG)(JSON.stringify(Chunk610394)), Chunk13140(true)
    }, [Chunk610394]);
  Chunk473749.useEffect(() => {
    if (Chunk70956) return Chunk145597.current = setTimeout(() => {
      Chunk13140(false)
    }, 4e3), () => {
      null != Chunk145597.current && clearTimeout(Chunk145597.current)
    }
  }, [Chunk70956]);
  let z = Chunk473749.useCallback(e => {
      _(null != e ? JSON.parse(e) : null)
    }, []),
    K = Chunk473749.useCallback(e => {
      if (e) return _(null);
      (0, m.h7j)(e => (0, a.jsx)(eg, {
        modalProps: e,
        onClose: t => {
          z(t), e.onClose()
        }
      }), {
        modalKey: "breadcrumb-import-panel"
      }, m.z1l)
    }, [Chunk257785]);
  return (0, Chunk54381.jsxs)("div", {
    ref: module,
    className: Chunk312079.panelContainer,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk312079.panelGroup,
      children: [(0, Chunk54381.jsxs)("div", {
        className: r()(Chunk312079.toolbar, Chunk312079.filtersToolbar),
        children: [(0, Chunk54381.jsx)("div", {
          title: "Toggles the Polling of Native",
          className: Chunk312079.pollBreadcrumbs,
          children: (0, Chunk54381.jsx)(Chunk481060.Checkbox, {
            label: "Poll Native",
            checked: Chunk120356,
            onChange: e => L(e)
          })
        }), (0, Chunk54381.jsx)("div", {
          title: "Only show breadcrumbs for active games",
          className: Chunk312079.pollBreadcrumbs,
          children: (0, Chunk54381.jsx)(Chunk481060.Checkbox, {
            label: "Only Active Games",
            checked: o,
            onChange: e => c(e)
          })
        }), (0, Chunk54381.jsxs)(Chunk481060.P3F, {
          className: Chunk312079.copyAll,
          onClick: Chunk246992,
          children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: Chunk70956 ? "Copied" : "Copy All"
          }), Chunk70956 ? (0, Chunk54381.jsx)(Chunk481060.dz2, {
            size: "sm",
            color: Chunk481060.TVs.unsafe_rawColors.GREEN_330.css
          }) : (0, Chunk54381.jsx)(Chunk481060.TIy, {
            color: "currentColor",
            size: "sm"
          })]
        }), (0, Chunk54381.jsx)(Chunk481060.P3F, {
          className: Chunk312079.copyAll,
          onClick: () => Chunk981631(null != Chunk984370),
          children: (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "currentColor",
            children: null != Chunk984370 ? "Clear" : "Import"
          })
        })]
      }), (0, Chunk54381.jsx)("div", {
        className: r()(Chunk312079.toolbar, Chunk312079.filtersToolbar),
        children: Object.entries(ef).map(e => {
          let [t, n] = e;
          return (0, a.jsx)(m.P3F, {
            className: r()(J.filter, h.includes(t) && J.activeFilter),
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
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk312079.toolbar,
        children: (0, Chunk54381.jsx)(Chunk481060.E1j, {
          query: Chunk371651,
          onChange: Chunk829907,
          onClear: () => Chunk829907(""),
          placeholder: "Regex search by breadcrumb name and data"
        })
      })]
    }), (0, Chunk54381.jsx)("div", {
      className: r()(Chunk312079.panelGroup, Chunk312079.tableContainer),
      children: (0, Chunk54381.jsx)(Chunk681619.Z, {
        columns: ev,
        data: Chunk556809,
        selectedRowKey: null != Chunk352527 ? Chunk352527 : true,
        onClickRow: e => k(e.key)
      })
    }), null != Chunk449224 && (0, Chunk54381.jsx)(Chunk484036.Z, {
      className: r()(Chunk312079.panelGroup, Chunk312079.subPanel),
      minHeight: 100,
      initialHeight: null != exports ? exports / 3 : 300,
      children: Chunk808506({
        breadcrumb: Chunk449224,
        onClose: () => Chunk355863(null)
      })
    })]
  })
}
let eT = Chunk473749.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk610394.Z], () => Chunk610394.Z.getPopoutInitializationStages());
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk312079.panelGroup,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk312079.panelHeader,
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/bold",
          color: "text-primary",
          children: "Popout Initialization Stages"
        })
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: (0, Chunk54381.jsx)("pre", {
          children: JSON.stringify(module, true, 2)
        })
      })]
    })
  }),
  eO = Chunk473749.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.isStateDebuggingEnabled()),
      t = (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.getDebuggingState());
    return Chunk473749.useEffect(() => (Chunk13245.Z.setStateDebugging(true), () => {
      Chunk13245.Z.setStateDebugging(false)
    }), []), (0, Chunk54381.jsxs)("div", {
      className: Chunk312079.panelGroup,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk312079.panelHeader,
        children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
          checked: module,
          onChange: () => Chunk13245.Z.setStateDebugging(!module),
          label: "Poll Native Module State"
        })
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: (0, Chunk54381.jsx)("pre", {
          children: JSON.stringify(exports, true, 2)
        })
      })]
    })
  });

function eP() {
  return (0, Chunk54381.jsx)(Chunk481060.w0Z, {
    children: (0, Chunk54381.jsxs)("div", {
      className: r()(Chunk866403.panel, Chunk312079.subPanel),
      children: [(0, Chunk54381.jsx)(ep, {}), (0, Chunk54381.jsx)(ex, {}), (0, Chunk54381.jsx)(eh, {}), (0, Chunk54381.jsx)(eu, {}), (0, Chunk54381.jsx)(eo, {}), (0, Chunk54381.jsx)(ed, {}), (0, Chunk54381.jsx)(eT, {}), (0, Chunk54381.jsx)(eO, {})]
    })
  })
}
let eI = e => {
    switch (e) {
      case "Disabled":
        return;
      case "False":
        returnfalse;
      case "True":
        returntrue
    }
  },
  ew = e => null == e ? "Disabled" : e ? "True" : "False",
  ek = Chunk473749.memo(function() {
    let e = (0, Chunk991186.xj)(),
      t = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getOverlayKeybind());
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk312079.panelGroup,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        children: "Overlay Default Keybind Experiment"
      }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/semibold",
        children: "Experiment State"
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: (0, Chunk54381.jsx)("pre", {
          children: JSON.stringify($(Q({}, module), {
            overlayKeybind: (0, Chunk13140.BB)(exports.shortcut)
          }), true, 2)
        })
      }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/semibold",
        children: "Overrides"
      }), (0, Chunk54381.jsx)(Chunk481060.PhF, {
        label: "Overlay User Status",
        description: "Override whether the current user was a new or existing user",
        serialize: e => null != e ? e.toString() : "Disabled",
        isSelected: t => t === ew(e.overrideIsNewOverlayUser),
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
          (0, C.jt)(eI(e))
        },
        popoutLayerContext: Chunk246992.O$
      }), (0, Chunk54381.jsx)(Chunk481060.PhF, {
        label: "Override Previous Keybind Status",
        description: "Override whether the user's pre-experiment keybind was the default keybind",
        serialize: e => null != e ? e.toString() : "Disabled",
        isSelected: t => t === ew(e.overrideIsUsingDefaultOverlayKeybind),
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
          (0, C.FM)(eI(e))
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
      className: r()(Chunk866403.panel, Chunk312079.subPanel),
      children: (0, Chunk54381.jsx)(ek, {})
    })
  })
}

function eR() {
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
    className: r()(Chunk866403.panel, Chunk312079.panel),
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk312079.toolbar,
      children: [(0, Chunk54381.jsx)(Chunk481060.P3F, {
        className: r()(Chunk312079.paneOption, "state" === module && Chunk312079.activePaneOption),
        onClick: () => exports("state"),
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Client State"
        })
      }), (0, Chunk54381.jsx)(Chunk481060.P3F, {
        className: r()(Chunk312079.paneOption, "logging" === module && Chunk312079.activePaneOption),
        onClick: () => exports("logging"),
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Logging"
        })
      }), (0, Chunk54381.jsx)(Chunk481060.P3F, {
        className: r()(Chunk312079.paneOption, "experiments" === module && Chunk312079.activePaneOption),
        onClick: () => exports("experiments"),
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Experiments"
        })
      })]
    }), "state" === module && (0, Chunk54381.jsx)(eP, {}), "logging" === module && (0, Chunk54381.jsx)(eN, {}), "experiments" === module && (0, Chunk54381.jsx)(eA, {})]
  })
}