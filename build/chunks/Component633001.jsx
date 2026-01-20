/** Chunk was on 22979 **/
/** chunk id: 633001, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eA
}), require("./388685.js"), require("./583741.js"), require("./539854.js"), require("./49124.js"), require("./35282.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk257785 = require("./257785.jsx"),
  Chunk975775 = require("./975775.jsx"),
  Chunk681619 = require("./681619.jsx"),
  Chunk621060 = require("./621060.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk757744 = require("./757744.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk622622 = require("./622622.js"),
  Chunk663618 = require("./663618.js");

function J(e) {
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
    [Chunk981631.Odu.CLICK_ZONE_DEBUG]: e => $(J({
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
    [Chunk981631.Odu.PERFORMANCE_DEBUG]: e => $(J({
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
  et = {};

function en(e) {
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
  }, [n]), (0, a.jsxs)(m.zx, {
    look: m.zx.Looks.LINK,
    color: m.zx.Colors.LINK,
    size: m.zx.Sizes.MIN,
    onClick: function() {
      (0, M.JG)(t, () => i(true))
    },
    className: Y.copyId,
    children: ["Application Id: ", t, " ", n ? Q.intl.string(Q.t.t5VZ88) : null]
  })
}
let ea = Chunk473749.memo(function(e) {
    let {
      trackedGame: t
    } = e, n = (0, d.e7)([j.ZP], () => j.ZP.getGameOrTransformedSubgameForPID(t.pid)), r = (0, d.e7)([A.Z], () => A.Z.getGameForPID(t.pid)), i = (0, d.e7)([j.ZP], () => null == n ? null : j.ZP.getGameOverlayStatus(n));
    return (0, a.jsxs)("div", {
      className: Y.panelGroup,
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
        children: (0, a.jsx)(en, {
          id: t.applicationId
        })
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["fullscreenType: ", (0, T.sS)(t.fullscreenType)]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["state: ", t.state]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"]
      }), (0, a.jsxs)("div", {
        className: Y.panelGroup,
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
          children: ["overlayMethod: ", (0, T.P_)(t.overlayMethod)]
        })]
      }), null != i && (0, a.jsxs)("div", {
        className: Y.panelGroup,
        children: [(0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw source: ", i.source]
        }), (0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw enabledLegacy: ", i.enabledLegacy ? "Yes" : "No"]
        }), (0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw enabledOOP: ", i.enabledOOP ? "Yes" : "No"]
        }), (0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw overlayMethod: ", (0, T.P_)(i.overlayMethod)]
        })]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["hidden: ", (null == n ? true : n.hidden) ? "Yes" : "No"]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["hook: ", (null == r ? true : r.hook) ? "Yes" : "No"]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["overlay: ", (null == r ? true : r.overlay) ? "Yes" : "No"]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["overlayCompatibilityHook: ", (null == r ? true : r.overlayCompatibilityHook) ? "Yes" : "No"]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["supportsOutOfProcessOverlay: ", (null == r ? true : r.supportsOutOfProcessOverlay) ? "Yes" : "No"]
      })]
    })
  }),
  er = Chunk473749.memo(function(e) {
    let {
      pid: t
    } = e, n = (0, d.cj)([D.default], () => D.default.getOverlayPIDStatuses()), r = (0, d.cj)([E.default], () => E.default.getTrackedGames()), i = (0, d.e7)([D.default], () => D.default.isInputLocked(t), [t]), l = (0, d.e7)([D.default], () => D.default.DEV_isInputLockedV3(t), [t]), s = (0, d.e7)([D.default], () => D.default.DEV_isInputLocked(t), [t]), o = (0, d.e7)([D.default], () => D.default.isReady(t), [t]);
    return (0, a.jsxs)("div", {
      className: Y.panelGroup,
      children: [(0, a.jsx)(p.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: "".concat(t)
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: ["Screen Type Resolution: ", (e => {
          var t;
          let n = null == (t = r[e]) ? true : t.timer;
          if (null == n || null == n.screenTypeResolutionTimestamp) return "...";
          let a = n.screenTypeResolutionTimestamp - n.startTrackingTimestamp;
          return "".concat(a.toFixed(2), "ms")
        })(t)]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: ["Window Creation: ", (e => {
          var t;
          let n = null == (t = r[e]) ? true : t.timer;
          if (null == n || null == n.moduleTrackingTimestamp || null == n.screenTypeResolutionTimestamp) return "...";
          let a = n.moduleTrackingTimestamp - n.screenTypeResolutionTimestamp;
          return "".concat(a.toFixed(2), "ms")
        })(t)]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: ["Rendering: ", (e => {
          var t;
          let n = null == (t = r[e]) ? true : t.timer;
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
        children: ["isInputLocked: ", i]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-strong",
        children: ["isInputLockedV3: ", l]
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
  let t, n = (t = Object.values((0, d.Wu)([R.Z], () => R.Z.getWidgetsForLayout(K.$S))), t.find(t => t.type === e));
  return [n, () => {
    if (null != n)(0, f.E9)(n.id);
    else {
      let t = ee[e];
      if (null == t) return;
      let n = t(K.$S);
      (0, f.A4)(n)
    }
  }]
}

function el(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return t ? "".concat(e.toFixed(2), "ms") : (0, L.vc)(o()(e), "h:mm:ss.SSS")
}
let es = Chunk473749.memo(function(e) {
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
  let r = (0, d.e7)([E.default], () => {
    var e, n;
    if (null == t) return "Unknown";
    let a = null == (e = E.default.getTrackedGameByPid(t)) ? true : e.gameName;
    return null != a ? (et[t] = a, a) : null != (n = et[t]) ? n : "Unknown"
  }, [t]);
  return (0, a.jsx)(p.Text, $(J({}, n), {
    variant: "text-md/semibold",
    color: "text-strong",
    children: r
  }))
});

function eo() {
  let e = (0, d.e7)([N.Z], () => N.Z.hasRenderDebugMode(C.GO.TrackFocusPIDs)),
    t = (0, d.Wu)([E.default], () => E.default.getDevToolsFocusedPidsWithTimestamp());
  return (0, a.jsxs)("div", {
    className: Y.panelGroup,
    children: [(0, a.jsxs)("div", {
      className: Y.panelHeader,
      children: [(0, a.jsx)(p.rsf, {
        checked: e,
        onChange: () => void b.Z.setRenderDebugMode(!N.Z.hasRenderDebugMode(C.GO.TrackFocusPIDs), C.GO.TrackFocusPIDs),
        label: "Track Focus Pids"
      }), (0, a.jsx)(p.P3F, {
        className: Y.panelButton,
        onClick: () => b.Z.clearTrackedPids(),
        children: (0, a.jsx)(p.XHJ, {
          size: "md",
          color: "currentColor"
        })
      })]
    }), (0, a.jsxs)(p.zJl, {
      className: l()(Y.panelGroup, Y.scroller),
      children: [0 === t.length && (0, a.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: "No recent focused pids"
      }), [...t].reverse().map(e => {
        var t;
        let [n, i, l] = e;
        return (0, a.jsx)(r.Fragment, {
          children: (0, a.jsx)(u.u, {
            position: "left",
            text: l === C.d5.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
            children: (0, a.jsx)("div", {
              children: (0, a.jsxs)(p.Text, {
                variant: "text-sm/medium",
                color: l === C.d5.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                children: [(0, a.jsx)(es, {
                  pid: i,
                  tag: "span"
                }), " - ", null != (t = null == i ? true : i.toString()) ? t : "null", " @ ", el(n)]
              })
            })
          })
        }, "".concat(i, "-").concat(n))
      })]
    })]
  })
}
let ec = Chunk473749.memo(function(e) {
    let {
      pid: t
    } = e, n = (0, d.e7)([E.default, j.ZP], () => {
      var e, n;
      if (null == t) return null;
      let a = null == (e = E.default.getTrackedGameByPid(t)) ? true : e.fullscreenType;
      if (null != a) return a;
      let r = j.ZP.getGameOrTransformedSubgameForPID(t);
      return null != (n = null == r ? true : r.fullscreenType) ? n : x.Jx.UNKNOWN
    }, [t]);
    return (0, a.jsxs)(p.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      tag: "span",
      children: ["Original Screen Type: ", null != n ? (0, T.sS)(n) : "Unknown"]
    })
  }),
  ed = Chunk473749.memo(function() {
    let e = (0, d.cj)([E.default], () => E.default.getTrackedGames()),
      [t, n] = r.useState({}),
      i = r.useRef(null);
    return r.useEffect(() => (i.current = setInterval(async () => {
      let e = j.ZP.getRunningGames(),
        t = [],
        a = Date.now();
      for (let n of e) t.push((0, T.hj)(n.pid, 0).then(e => [n.pid, e, a]));
      let r = await Promise.all(t);
      n(e => r.reduce((e, t) => {
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
      }, J({}, e)))
    }, +U.Z.Millis.SECOND), () => clearInterval(i.current)), []), (0, a.jsx)(u.u, {
      position: "left",
      text: "The most recent screen types we've logged, indexed by pid",
      children: (0, a.jsx)("div", {
        children: (0, a.jsxs)(p.zJl, {
          className: l()(Y.panelGroup, Y.scroller),
          children: [0 === Object.keys(e).length && (0, a.jsx)(p.Text, {
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
                timestamp: r
              } = t;
              return (0, a.jsx)(p.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: "".concat(n, ":").concat((0, T.sS)(n), " @ ").concat(el(r))
              }, "".concat(e.pid, "-").concat(n, "-").concat(r))
            })]
          }, e.pid))]
        })
      })
    })
  }),
  eu = Chunk473749.memo(function() {
    var e, t;
    let n = (0, d.cj)([E.default], () => E.default.getTrackedGames()),
      r = (0, G.getPID)(),
      i = (0, d.e7)([E.default], () => E.default.isOverlayOOPEnabledForPid(r), [r]),
      [l, s] = (0, d.Wu)([k.Z], () => [k.Z.enabled, k.Z.keepOpen]),
      o = (0, d.e7)([D.default], () => D.default.getFocusedPID()),
      c = (0, d.e7)([D.default], () => D.default.isFocusedPidOutOfProcess());
    return (0, a.jsxs)("div", {
      className: Y.panelGroup,
      children: [0 === Object.keys(n).length && (0, a.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: "No tracked game times"
      }), Object.values(n).map(e => (0, a.jsx)(er, {
        pid: e.pid
      }, e.pid)), (0, a.jsxs)("div", {
        children: [(0, a.jsxs)(p.Text, {
          variant: "text-sm/medium",
          color: "text-strong",
          children: ["focusedPID: ", null != (e = null == o ? true : o.toString()) ? e : "null"]
        }), (0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: ["isFocusedPidOutOfProcess: ", c ? "Yes" : "No"]
        }), (0, a.jsxs)(p.Text, {
          variant: "text-sm/medium",
          color: "text-strong",
          children: ["processPid: ", null != (t = null == r ? true : r.toString()) ? t : "unknown"]
        }), (0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: ["isOOPEnabledForPid: ", i ? "Yes" : "No"]
        }), (0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: ["SoundboardOverlay.enabled: ", l ? "Yes" : "No"]
        }), (0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: ["SoundboardOverlay.keepOpen: ", s ? "Yes" : "No"]
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
    let [e, t] = ei(q.Odu.CLICK_ZONE_DEBUG), [n, i] = ei(q.Odu.PERFORMANCE_DEBUG), l = (0, d.e7)([N.Z], () => N.Z.getRenderDebugModes()), [s, o] = r.useState({});
    return r.useEffect(() => {
      let e = setInterval(() => {
        o({})
      }, 200);
      return () => clearInterval(e)
    }, []), (0, a.jsx)("div", {
      className: Y.panelGroup,
      children: em.map(s => {
        let o = s.mode === C.GO.OverlayRafManagerForceEnabled ? "".concat(s.label, " (").concat(P.Z.getLastRAFCallbackReason(), ")") : s.label,
          c = () => s.mode === C.GO.ClickZones ? null != e : s.mode === C.GO.WidgetAreas ? null != n : l.has(s.mode);
        return (0, a.jsx)(r.Fragment, {
          children: (0, a.jsx)(p.rsf, {
            checked: c(),
            onChange: () => {
              var e;
              let n = c();
              s.mode === C.GO.ClickZones && t(), s.mode === C.GO.WidgetAreas && i(), e = s.mode, b.Z.setRenderDebugMode(!n, e)
            },
            label: o,
            description: s.tooltip
          })
        }, s.mode)
      })
    })
  }),
  eh = Chunk473749.memo(function() {
    let e = (0, d.cj)([E.default], () => E.default.getTrackedGames()),
      t = (0, d.e7)([j.ZP], () => j.ZP.getRunningGames()).filter(t => null == e[t.pid]);
    return (0, a.jsxs)(a.Fragment, {
      children: [t.length > 0 && (0, a.jsx)(u.u, {
        position: "left",
        text: "Games that are running but not tracked by the overlay",
        children: (0, a.jsx)("div", {
          children: (0, a.jsxs)("div", {
            className: Y.panelGroup,
            children: [(0, a.jsx)(p.Text, {
              variant: "text-md/bold",
              color: "text-feedback-critical",
              children: "Untracked Running Games"
            }), t.map(e => (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(p.Text, {
                variant: "text-sm/normal",
                color: "text-feedback-critical",
                children: "".concat(e.pid, " - ").concat(e.name, " (").concat(e.exeName, ")")
              }, e.pid), (0, a.jsx)(ec, {
                pid: e.pid
              })]
            }))]
          })
        })
      }), (0, a.jsx)(u.u, {
        position: "left",
        text: "The current running games process information",
        children: (0, a.jsx)("div", {
          children: (0, a.jsxs)("div", {
            className: Y.panelGroup,
            children: [0 === Object.keys(e).length && (0, a.jsx)(p.Text, {
              variant: "text-sm/normal",
              color: "text-default",
              children: "No running games"
            }), Object.values(e).map(e => (0, a.jsx)(ea, {
              trackedGame: e
            }, e.pid))]
          })
        })
      })]
    })
  }),
  ef = Chunk473749.memo(function() {
    let e = (0, d.e7)([E.default], () => E.default.getForcedRenderMode()),
      [t, n] = r.useState(e),
      i = [{
        label: C.R5.UNSET,
        value: C.R5.UNSET,
        id: C.R5.UNSET
      }, {
        label: C.R5.IN_PROCESS_V2,
        value: C.R5.IN_PROCESS_V2,
        id: C.R5.IN_PROCESS_V2
      }, {
        label: C.R5.OUT_OF_PROCESS_V3,
        value: C.R5.OUT_OF_PROCESS_V3,
        id: C.R5.OUT_OF_PROCESS_V3
      }, {
        label: C.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        value: C.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        id: C.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION
      }].map(t => $(J({}, t), {
        label: "".concat(t.label, " ").concat(e === t.value ? "(current)" : "")
      }));
    return (0, a.jsx)(p.PhF, {
      label: "Override the overlay render mode",
      value: t,
      options: i,
      onSelectionChange: e => {
        n(e), b.Z.forceRenderMode(e)
      },
      selectionMode: "single",
      fullWidth: true
    })
  });

function eb(e) {
  let {
    modalProps: t,
    onClose: n
  } = e, [i, l] = r.useState(null);

  function s() {
    n(null)
  }
  return (0, a.jsxs)(p.Y0X, $(J({
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
        className: Y.panelGroup,
        children: (0, a.jsx)(p.Kx8, {
          label: "Paste JSON Here",
          onChange: l,
          value: null != i ? i : "",
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
            n(i)
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
let ex = {
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

function eg(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : _.l6.Info;
  if (t === _.l6.Error) return "var(--text-feedback-critical)";
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
  cellClassName: Chunk622622.tableBarColumn,
  renderHeader: () => null,
  render(e) {
    let {
      type: t,
      logType: n
    } = e, r = ej(t);
    return (0, a.jsx)("div", {
      className: Y.tableBar,
      style: {
        color: eg(t, n)
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
      children: [(0, a.jsx)(p.Text, {
        variant: "text-md/normal",
        color: function(e) {
          switch (e) {
            case _.l6.Info:
              return "text-strong";
            case _.l6.Warning:
              return "text-feedback-warning";
            case _.l6.Error:
              return "text-feedback-critical";
            default:
              return "text-subtle"
          }
        }(r),
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
  cellClassName: Chunk622622.rightColumn,
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
      return p.GON;
    case _.C7.NativeOOP:
      return p.ljO;
    case _.C7.Renderer:
    case _.C7.Flux:
      return p.n6r;
    case _.C7.LegacyModule:
      return p.pzj;
    case _.C7.OOPModule:
      return p.m3e;
    default:
      return p.pzj
  }
}

function ey(e) {
  return JSON.stringify(e, (e, t) => true === t ? null : t, 2)
}
let eC = ["__webpack_require__", "fn"],
  e_ = ["web.js", "web.js.map"],
  eS = [{
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
        nativeId: h,
        stack: f,
        data: b,
        timestamp: x,
        pid: g
      } = s, v = o()(x), j = ej(u);
      return (0, a.jsxs)(p.w0Z, {
        className: Y.subPanelScroller,
        children: [(0, a.jsxs)(y.Z, {
          className: l()(X.headerBar, Y.subPanelHeaderBar),
          children: [(0, a.jsx)("div", {
            style: {
              color: eg(u, m)
            },
            className: Y.headerIcon,
            children: (0, a.jsx)(j, {
              color: "currentColor",
              size: "sm"
            })
          }), (0, a.jsxs)(y.Z.Title, {
            wrapperClassName: Y.headerTitle,
            children: [d, " (", u, ")", (0, a.jsx)(p.P3F, {
              tag: "span",
              className: Y.copyEventButton,
              onClick: () => (0, M.JG)(d),
              children: (0, a.jsx)(p.TIy, {
                color: "currentColor",
                size: "sm"
              })
            })]
          }), (0, a.jsx)(y.Z.Icon, {
            icon: p.TIy,
            tooltip: "Copy all properties",
            onClick: () => {
              (0, M.JG)(ey(s))
            }
          }), (0, a.jsx)(y.Z.Icon, {
            icon: p.k$p,
            tooltip: "Close",
            onClick: c
          })]
        }), (0, a.jsxs)(V.E, {
          className: Y.commonProperties,
          children: [(0, a.jsx)(V.Z9, {
            name: "Timestamp",
            copyValue: v.toISOString(),
            children: (0, a.jsx)("time", {
              dateTime: v.toISOString(),
              title: (0, L.vc)(v, "LLLL"),
              children: (0, L.vc)(v, "L h:mm:ss.SSS")
            })
          }), (0, a.jsx)(V.Z9, {
            name: "Log Type",
            copyValue: m,
            children: (0, a.jsx)("code", {
              children: m
            })
          }), (0, a.jsx)(V.Z9, {
            name: "PID",
            copyValue: null != (t = null == g ? true : g.toString()) ? t : "null",
            children: (0, a.jsx)("code", {
              children: null != (n = null == g ? true : g.toString()) ? n : "null"
            })
          }), (0, a.jsx)(V.Z9, {
            name: "Native ID",
            copyValue: null != (r = null == h ? true : h.toString()) ? r : "null",
            children: (0, a.jsx)("code", {
              children: null != (i = null == h ? true : h.toString()) ? i : "null"
            })
          }), (0, a.jsx)(V.Z9, {
            name: "Data",
            copyValue: ey(b),
            children: (0, a.jsx)("code", {
              children: ey(b)
            })
          }), null != f && (0, a.jsx)(V.Z9, {
            name: "Stack Trace",
            copyValue: f,
            children: (0, a.jsx)("code", {
              children: f.split("\n").map((e, t) => {
                let n = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                if (null != n) {
                  let [, e, r, i, l] = n, s = r.split(/[\\/]/).pop();
                  return eC.includes(e.trim()) ? null : (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("span", {
                      className: Y.stackTraceFunction,
                      children: e.trim()
                    }), !e_.includes(null != s ? s : "") && (0, a.jsxs)(a.Fragment, {
                      children: [" (", (0, a.jsxs)("span", {
                        className: Y.stackTraceLocation,
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
  eE = {
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

function eT() {
  let {
    ref: e,
    height: t
  } = (0, g.ZP)(), n = (0, d.e7)([N.Z], () => N.Z.isModuleLoggingEnabled()), [i, s] = r.useState(n), [o, c] = r.useState(false), [u, m] = r.useState(null), [h, f] = r.useState(Object.keys(ex)), [x, v] = (0, d.e7)([N.Z], () => N.Z.getOverlayLoggingBreadcrumbs(), [], B.Q), [j, y] = r.useState(null), C = null != j ? j : x, _ = null != j ? false : v;
  r.useEffect(() => {
    0 !== _ && (o ? m(C.reduce((e, t) => "game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e, 0)) : m(null))
  }, [o, C, _]);
  let [S, E] = r.useState(""), T = r.useMemo(() => 0 === _ ? [] : C.filter(e => {
    if (o && null != u && e.timestamp < u) returnfalse;
    for (let t of h) {
      let {
        filter: n
      } = ex[t];
      if (n(e)) returntrue
    }
    returnfalse
  }), [C, h, u, o, _]), [O, P] = r.useState(T), [w, k] = r.useState(null), R = r.useMemo(() => C.find(e => e.key === w), [C, w]), A = r.useCallback(e => {
    P(e)
  }, []), {
    renderSelectedTab: Z
  } = (0, H.ZP)({
    tabs: eS
  }, []);
  (0, I.BO)(S, T, A, eE, [C]);
  let D = r.useCallback(e => {
      s(e), b.Z.setModuleLogging(e)
    }, []),
    [L, U] = r.useState(false),
    F = r.useRef(null),
    G = r.useCallback(() => {
      (0, M.JG)(JSON.stringify(T)), U(true)
    }, [T]);
  r.useEffect(() => {
    if (L) return F.current = setTimeout(() => {
      U(false)
    }, 4e3), () => {
      null != F.current && clearTimeout(F.current)
    }
  }, [L]);
  let V = r.useCallback(e => {
      y(null != e ? JSON.parse(e) : null)
    }, []),
    q = r.useCallback(e => {
      if (e) return y(null);
      (0, p.h7j)(e => (0, a.jsx)(eb, {
        modalProps: e,
        onClose: t => {
          V(t), e.onClose()
        }
      }), {
        modalKey: "breadcrumb-import-panel"
      }, p.z1l)
    }, [V]);
  return (0, a.jsxs)("div", {
    ref: e,
    className: Y.panelContainer,
    children: [(0, a.jsxs)("div", {
      className: Y.panelGroup,
      children: [(0, a.jsxs)("div", {
        className: l()(Y.toolbar, Y.filtersToolbar),
        children: [(0, a.jsx)("div", {
          title: "Toggles the Polling of Native",
          className: Y.pollBreadcrumbs,
          children: (0, a.jsx)(p.Checkbox, {
            label: "Poll Native",
            checked: i,
            onChange: e => D(e)
          })
        }), (0, a.jsx)("div", {
          title: "Only show breadcrumbs for active games",
          className: Y.pollBreadcrumbs,
          children: (0, a.jsx)(p.Checkbox, {
            label: "Only Active Games",
            checked: o,
            onChange: e => c(e)
          })
        }), (0, a.jsxs)(p.P3F, {
          className: Y.copyAll,
          onClick: G,
          children: [(0, a.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: L ? "Copied" : "Copy All"
          }), L ? (0, a.jsx)(p.dz2, {
            size: "sm",
            color: p.TVs.unsafe_rawColors.GREEN_330.css
          }) : (0, a.jsx)(p.TIy, {
            color: "currentColor",
            size: "sm"
          })]
        }), (0, a.jsx)(p.P3F, {
          className: Y.copyAll,
          onClick: () => q(null != j),
          children: (0, a.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "currentColor",
            children: null != j ? "Clear" : "Import"
          })
        })]
      }), (0, a.jsx)("div", {
        className: l()(Y.toolbar, Y.filtersToolbar),
        children: Object.entries(ex).map(e => {
          let [t, n] = e;
          return (0, a.jsx)(p.P3F, {
            className: l()(Y.filter, h.includes(t) && Y.activeFilter),
            onClick: () => {
              f(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t])
            },
            children: (0, a.jsx)(p.Text, {
              variant: "text-sm/normal",
              color: "currentColor",
              children: n.label
            })
          }, t)
        })
      }), (0, a.jsx)("div", {
        className: Y.toolbar,
        children: (0, a.jsx)(p.E1j, {
          query: S,
          onChange: E,
          onClear: () => E(""),
          placeholder: "Regex search by breadcrumb name and data"
        })
      })]
    }), (0, a.jsx)("div", {
      className: l()(Y.panelGroup, Y.tableContainer),
      children: (0, a.jsx)(z.Z, {
        columns: ev,
        data: O,
        selectedRowKey: null != w ? w : true,
        onClickRow: e => k(e.key)
      })
    }), null != R && (0, a.jsx)(W.Z, {
      className: l()(Y.panelGroup, Y.subPanel),
      minHeight: 100,
      initialHeight: null != t ? t / 3 : 300,
      children: Z({
        breadcrumb: R,
        onClose: () => k(null)
      })
    })]
  })
}
let eO = Chunk473749.memo(function() {
    let e = (0, d.e7)([O.Z], () => O.Z.getPopoutInitializationStages());
    return (0, a.jsxs)("div", {
      className: Y.panelGroup,
      children: [(0, a.jsx)("div", {
        className: Y.panelHeader,
        children: (0, a.jsx)(p.Text, {
          variant: "text-md/bold",
          color: "text-strong",
          children: "Popout Initialization Stages"
        })
      }), (0, a.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: (0, a.jsx)("pre", {
          children: JSON.stringify(e, true, 2)
        })
      })]
    })
  }),
  eN = Chunk473749.memo(function() {
    let e = (0, d.e7)([N.Z], () => N.Z.isStateDebuggingEnabled()),
      t = (0, d.e7)([N.Z], () => N.Z.getDebuggingState());
    return r.useEffect(() => (b.Z.setStateDebugging(true), () => {
      b.Z.setStateDebugging(false)
    }), []), (0, a.jsxs)("div", {
      className: Y.panelGroup,
      children: [(0, a.jsx)("div", {
        className: Y.panelHeader,
        children: (0, a.jsx)(p.rsf, {
          checked: e,
          onChange: () => b.Z.setStateDebugging(!e),
          label: "Poll Native Module State"
        })
      }), (0, a.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: (0, a.jsx)("pre", {
          children: JSON.stringify(t, true, 2)
        })
      })]
    })
  });

function eP() {
  return (0, a.jsx)(p.w0Z, {
    children: (0, a.jsxs)("div", {
      className: l()(X.panel, Y.subPanel),
      children: [(0, a.jsx)(ep, {}), (0, a.jsx)(ef, {}), (0, a.jsx)(eh, {}), (0, a.jsx)(eu, {}), (0, a.jsx)(eo, {}), (0, a.jsx)(ed, {}), (0, a.jsx)(eO, {}), (0, a.jsx)(eN, {})]
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
  eI = e => null == e ? "Disabled" : e ? "True" : "False",
  ek = Chunk473749.memo(function() {
    let e = (0, S.xj)(),
      t = (0, d.e7)([Z.ZP], () => Z.ZP.getOverlayKeybind());
    return (0, a.jsxs)("div", {
      className: Y.panelGroup,
      children: [(0, a.jsx)(p.Heading, {
        variant: "heading-lg/semibold",
        children: "Overlay Default Keybind Experiment"
      }), (0, a.jsx)(p.Heading, {
        variant: "heading-md/semibold",
        children: "Experiment State"
      }), (0, a.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: (0, a.jsx)("pre", {
          children: JSON.stringify($(J({}, e), {
            overlayKeybind: (0, F.BB)(t.shortcut)
          }), true, 2)
        })
      }), (0, a.jsx)(p.Heading, {
        variant: "heading-md/semibold",
        children: "Overrides"
      }), (0, a.jsx)(p.PhF, {
        label: "Overlay User Status",
        description: "Override whether the current user was a new or existing user",
        value: eI(e.overrideIsNewOverlayUser),
        options: [{
          label: "Disabled (no override)",
          value: "Disabled",
          id: "Disabled"
        }, {
          label: "Existing user",
          value: "False",
          id: "False"
        }, {
          label: "New user",
          value: "True",
          id: "True"
        }],
        onSelectionChange: e => {
          (0, S.jt)(ew(e))
        },
        selectionMode: "single",
        fullWidth: true
      }), (0, a.jsx)(p.PhF, {
        label: "Override Previous Keybind Status",
        description: "Override whether the user's pre-experiment keybind was the default keybind",
        value: eI(e.overrideIsUsingDefaultOverlayKeybind),
        options: [{
          label: "Disabled (no override)",
          value: "Disabled",
          id: "Disabled"
        }, {
          label: "Using default keybind",
          value: "True",
          id: "True"
        }, {
          label: "Not using default keybind",
          value: "False",
          id: "False"
        }],
        onSelectionChange: e => {
          (0, S.FM)(ew(e))
        },
        selectionMode: "single",
        fullWidth: true
      }), (0, a.jsx)(p.Heading, {
        variant: "heading-md/semibold",
        children: "Actions"
      }), (0, a.jsx)(p.Button, {
        size: "sm",
        text: "Reset isNewOverlayUser",
        onClick: () => (0, S.Wx)()
      }), (0, a.jsx)(p.Button, {
        size: "sm",
        text: "Reset isUsingDefaultOverlayKeybind",
        onClick: () => (0, S.Zh)()
      })]
    })
  });

function eR() {
  return (0, a.jsx)(p.w0Z, {
    children: (0, a.jsx)("div", {
      className: l()(X.panel, Y.subPanel),
      children: (0, a.jsx)(ek, {})
    })
  })
}

function eA() {
  let [e, t] = r.useState("state");
  return r.useEffect(() => (h.Z.dispatch({
    type: "OVERLAY_SET_DETAILED_LOGGING",
    enabled: true
  }), () => {
    h.Z.dispatch({
      type: "OVERLAY_SET_DETAILED_LOGGING",
      enabled: false
    })
  }), []), (0, a.jsxs)("div", {
    className: l()(X.panel, Y.panel),
    children: [(0, a.jsxs)("div", {
      className: Y.toolbar,
      children: [(0, a.jsx)(p.P3F, {
        className: l()(Y.paneOption, "state" === e && Y.activePaneOption),
        onClick: () => t("state"),
        children: (0, a.jsx)(p.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Client State"
        })
      }), (0, a.jsx)(p.P3F, {
        className: l()(Y.paneOption, "logging" === e && Y.activePaneOption),
        onClick: () => t("logging"),
        children: (0, a.jsx)(p.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Logging"
        })
      }), (0, a.jsx)(p.P3F, {
        className: l()(Y.paneOption, "experiments" === e && Y.activePaneOption),
        onClick: () => t("experiments"),
        children: (0, a.jsx)(p.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Experiments"
        })
      })]
    }), "state" === e && (0, a.jsx)(eP, {}), "logging" === e && (0, a.jsx)(eT, {}), "experiments" === e && (0, a.jsx)(eR, {})]
  })
}