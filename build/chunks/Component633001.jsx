/** Chunk was on 93886 **/
/** chunk id: 633001, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ej
}), require("./388685.js"), require("./583741.js"), require("./539854.js"), require("./49124.js"), require("./35282.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk984370 = require("./984370.jsx"),
  Chunk427860 = require("./427860.js"),
  Chunk837268 = require("./837268.js"),
  Chunk371651 = require("./371651.js"),
  Chunk829907 = require("./829907.js"),
  Chunk610394 = require("./610394.js"),
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
  Chunk312079 = require("./312079.js"),
  Chunk866403 = require("./866403.js");

function W(e) {
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

function K(e, t) {
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
let q = {
    [Chunk981631.Odu.CLICK_ZONE_DEBUG]: e => K(W({
      type: G.Odu.CLICK_ZONE_DEBUG,
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
    }, O.Z.getWidgetDefaultSettings(G.Odu.CLICK_ZONE_DEBUG)), {
      pinned: true
    }),
    [Chunk981631.Odu.PERFORMANCE_DEBUG]: e => K(W({
      type: G.Odu.PERFORMANCE_DEBUG,
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
    }, O.Z.getWidgetDefaultSettings(G.Odu.PERFORMANCE_DEBUG)), {
      pinned: true
    })
  },
  Y = {};

function X(e) {
  let {
    id: t
  } = e, [n, l] = r.useState(false);
  return r.useEffect(() => {
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
    className: V.copyId,
    children: ["Application Id: ", t, " ", n ? z.intl.string(z.t["t5VZ8/"]) : null]
  })
}
let J = Chunk647438.memo(function(e) {
    let {
      trackedGame: t
    } = e, n = (0, d.e7)([f.ZP], () => f.ZP.getGameOrTransformedSubgameForPID(t.pid)), r = (0, d.e7)([P.Z], () => P.Z.getGameForPID(t.pid)), l = (0, d.e7)([f.ZP], () => null == n ? null : f.ZP.getGameOverlayStatus(n));
    return (0, a.jsxs)("div", {
      className: V.panelGroup,
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
        children: (0, a.jsx)(X, {
          id: t.applicationId
        })
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["fullscreenType: ", (0, y.sS)(t.fullscreenType)]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["state: ", t.state]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"]
      }), (0, a.jsxs)("div", {
        className: V.panelGroup,
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
          children: ["overlayMethod: ", (0, y.P_)(t.overlayMethod)]
        })]
      }), null != l && (0, a.jsxs)("div", {
        className: V.panelGroup,
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
          children: ["raw overlayMethod: ", (0, y.P_)(l.overlayMethod)]
        })]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["hidden: ", (null == n ? true : n.hidden) ? "Yes" : "No"]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["hook: ", (null == r ? true : r.hook) ? "Yes" : "No"]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["overlay: ", (null == r ? true : r.overlay) ? "Yes" : "No"]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["overlayCompatibilityHook: ", (null == r ? true : r.overlayCompatibilityHook) ? "Yes" : "No"]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["supportsOutOfProcessOverlay: ", (null == r ? true : r.supportsOutOfProcessOverlay) ? "Yes" : "No"]
      })]
    })
  }),
  $ = Chunk647438.memo(function(e) {
    let {
      pid: t
    } = e, n = (0, d.cj)([k.default], () => k.default.getOverlayPIDStatuses()), r = (0, d.cj)([_.default], () => _.default.getTrackedGames()), l = (0, d.e7)([k.default], () => k.default.isInputLocked(t), [t]), i = (0, d.e7)([k.default], () => k.default.DEV_isInputLockedV3(t), [t]), s = (0, d.e7)([k.default], () => k.default.DEV_isInputLocked(t), [t]), o = (0, d.e7)([k.default], () => k.default.isReady(t), [t]);
    return (0, a.jsxs)("div", {
      className: V.panelGroup,
      children: [(0, a.jsx)(m.Text, {
        variant: "text-md/semibold",
        color: "text-primary",
        children: "".concat(t)
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: ["Screen Type Resolution: ", (e => {
          var t;
          let n = null == (t = r[e]) ? true : t.timer;
          if (null == n || null == n.screenTypeResolutionTimestamp) return "...";
          let a = n.screenTypeResolutionTimestamp - n.startTrackingTimestamp;
          return "".concat(a.toFixed(2), "ms")
        })(t)]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: ["Window Creation: ", (e => {
          var t;
          let n = null == (t = r[e]) ? true : t.timer;
          if (null == n || null == n.moduleTrackingTimestamp || null == n.screenTypeResolutionTimestamp) return "...";
          let a = n.moduleTrackingTimestamp - n.screenTypeResolutionTimestamp;
          return "".concat(a.toFixed(2), "ms")
        })(t)]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: ["Rendering: ", (e => {
          var t;
          let n = null == (t = r[e]) ? true : t.timer;
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
        children: ["isInputLockedV3: ", i]
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

function Q(e) {
  let t, n = (t = Object.values((0, d.Wu)([O.Z], () => O.Z.getWidgetsForLayout(B.$S))), t.find(t => t.type === e));
  return [n, () => {
    if (null != n)(0, h.E9)(n.id);
    else {
      let t = q[e];
      if (null == t) return;
      let n = t(B.$S);
      (0, h.A4)(n)
    }
  }]
}

function ee(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return t ? "".concat(e.toFixed(2), "ms") : new Date(e).toLocaleTimeString()
}
let et = Chunk647438.memo(function(e) {
  var {
    pid: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, a, r = function(e, t) {
      if (null == e) return {};
      var n, a, r = {},
        l = Object.keys(e);
      for (a = 0; a < l.length; a++) n = l[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (a = 0; a < l.length; a++) n = l[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["pid"]);
  let r = (0, d.e7)([_.default], () => {
    var e, n;
    if (null == t) return "Unknown";
    let a = null == (e = _.default.getTrackedGameByPid(t)) ? true : e.gameName;
    return null != a ? (Y[t] = a, a) : null != (n = Y[t]) ? n : "Unknown"
  }, [t]);
  return (0, a.jsx)(m.Text, K(W({}, n), {
    variant: "text-md/semibold",
    color: "text-primary",
    children: r
  }))
});

function en() {
  let e = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.TrackFocusPIDs)),
    t = (0, Chunk442837.Wu)([Chunk371651.default], () => Chunk371651.default.getDevToolsFocusedPidsWithTimestamp(), []);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk312079.panelGroup,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk312079.panelHeader,
      children: [(0, Chunk951288.jsx)(Chunk755721.$q, {
        value: module,
        onChange: () => void Chunk13245.Z.setRenderDebugMode(!Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.TrackFocusPIDs), Chunk837268.GO.TrackFocusPIDs),
        size: 18,
        type: Chunk755721.M0.INVERTED,
        shape: Chunk755721.zV.BOX,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          tag: "span",
          variant: "text-md/normal",
          color: "text-muted",
          children: "Track Focus Pids"
        })
      }), (0, Chunk951288.jsx)(Chunk481060.P3F, {
        className: Chunk312079.panelButton,
        onClick: () => Chunk13245.Z.clearTrackedPids(),
        children: (0, Chunk951288.jsx)(Chunk481060.XHJ, {
          size: "md",
          color: "currentColor"
        })
      })]
    }), (0, Chunk951288.jsxs)(Chunk481060.zJl, {
      className: i()(Chunk312079.panelGroup, Chunk312079.scroller),
      children: [0 === exports.length && (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: "No recent focused pids"
      }), [...exports].reverse().map(e => {
        let [t, n, l] = e;
        return (0, a.jsx)(r.Fragment, {
          children: (0, a.jsx)(m.ua7, {
            position: "left",
            text: l === j.d5.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
            children: e => {
              var r;
              return (0, a.jsx)("div", K(W({}, e), {
                children: (0, a.jsxs)(m.Text, {
                  variant: "text-sm/medium",
                  color: l === j.d5.TRACK_FOCUS ? "text-default" : "text-danger",
                  children: [(0, a.jsx)(et, {
                    pid: n,
                    tag: "span"
                  }), " - ", null != (r = null == n ? true : n.toString()) ? r : "null", " @ ", ee(t, true)]
                })
              }))
            }
          })
        }, "".concat(n, "-").concat(t))
      })]
    })]
  })
}
let ea = Chunk647438.memo(function(e) {
    let {
      pid: t
    } = e, n = (0, d.e7)([_.default, f.ZP], () => {
      var e, n;
      if (null == t) return null;
      let a = null == (e = _.default.getTrackedGameByPid(t)) ? true : e.fullscreenType;
      if (null != a) return a;
      let r = f.ZP.getGameOrTransformedSubgameForPID(t);
      return null != (n = null == r ? true : r.fullscreenType) ? n : x.Jx.UNKNOWN
    }, [t]);
    return (0, a.jsxs)(m.Text, {
      variant: "text-sm/normal",
      color: "text-secondary",
      tag: "span",
      children: ["Original Screen Type: ", null != n ? (0, y.sS)(n) : "Unknown"]
    })
  }),
  er = Chunk647438.memo(function() {
    let e = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      [t, n] = Chunk647438.useState({}),
      l = Chunk647438.useRef(null);
    return Chunk647438.useEffect(() => (Chunk120356.current = setInterval(async () => {
      let e = Chunk594190.ZP.getRunningGames(),
        t = [],
        a = Date.now();
      for (let n of module) exports.push((0, Chunk829907.hj)(require.pid, 0).then(e => [n.pid, e, a]));
      let r = await Promise.all(exports);
      require(e => r.reduce((e, t) => {
        var n, a;
        let [r, l, i] = t;
        if (null == l || null == r) return e;
        let s = null != (a = e[r]) ? a : [],
          o = null == (n = s[s.length - 1]) ? true : n.screenType;
        return (0 === s.length || o !== l) && (e[r] = [...s, {
          pid: r,
          screenType: l,
          timestamp: i
        }]), e
      }, W({}, e)))
    }, +Chunk70956.Z.Millis.SECOND), () => clearInterval(Chunk120356.current)), []), (0, Chunk951288.jsx)(Chunk481060.ua7, {
      position: "left",
      text: "The most recent screen types we've logged, indexed by pid",
      children: n => (0, a.jsx)("div", K(W({}, n), {
        children: (0, a.jsxs)(m.zJl, {
          className: i()(V.panelGroup, V.scroller),
          children: [0 === Object.keys(e).length && (0, a.jsx)(m.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: "No recent screen types"
          }), Object.values(e).map(e => (0, a.jsxs)("div", {
            children: [(0, a.jsx)(et, {
              tag: "div",
              pid: e.pid
            }), (0, a.jsx)(ea, {
              pid: e.pid
            }), null != t[e.pid] && [...t[e.pid]].reverse().map(t => {
              let {
                screenType: n,
                timestamp: r
              } = t;
              return (0, a.jsx)(m.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: "".concat(n, ":").concat((0, y.sS)(n), " @ ").concat(ee(r))
              }, "".concat(e.pid, "-").concat(n, "-").concat(r))
            })]
          }, e.pid))]
        })
      }))
    })
  }),
  el = Chunk647438.memo(function() {
    var e, t;
    let n = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      r = (0, Chunk145597.getPID)(),
      l = (0, Chunk442837.e7)([Chunk371651.default], () => Chunk371651.default.isOverlayOOPEnabledForPid(Chunk647438), [Chunk647438]),
      [i, s] = (0, Chunk442837.Wu)([Chunk352527.Z], () => [Chunk352527.Z.enabled, Chunk352527.Z.keepOpen]),
      o = (0, Chunk442837.e7)([Chunk808506.default], () => Chunk808506.default.getFocusedPID()),
      c = (0, Chunk442837.e7)([Chunk808506.default], () => Chunk808506.default.isFocusedPidOutOfProcess());
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk312079.panelGroup,
      children: [0 === Object.keys(require).length && (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: "No tracked game times"
      }), Object.values(require).map(e => (0, a.jsx)($, {
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
          children: ["SoundboardOverlay.enabled: ", i ? "Yes" : "No"]
        }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: ["SoundboardOverlay.keepOpen: ", Chunk913527 ? "Yes" : "No"]
        })]
      })]
    })
  }),
  ei = Chunk647438.memo(function() {
    let [e, t] = Q(Chunk981631.Odu.CLICK_ZONE_DEBUG), [n, l] = Q(Chunk981631.Odu.PERFORMANCE_DEBUG), i = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.ClickZones)), s = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.WidgetAreas)), o = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.DisabledGPUBoost)), c = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.ForceGPUBoost)), h = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.OverlayRafManagerForceEnabled)), x = e => {
      p.Z.setRenderDebugMode(!C.ZP.hasRenderDebugMode(e), e)
    }, [b, f] = Chunk647438.useState({});
    return Chunk647438.useEffect(() => {
      let e = setInterval(() => {
        Chunk594190({})
      }, 200);
      return () => clearInterval(module)
    }, []), (0, Chunk951288.jsxs)("div", {
      className: Chunk312079.panelGroup,
      children: [(0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "Enables a red border around click zones to help with debugging.",
        children: e => (0, a.jsx)("div", K(W({}, e), {
          children: (0, a.jsx)(u.$q, {
            value: i,
            onChange: () => void x(j.GO.ClickZones),
            size: 18,
            type: u.M0.INVERTED,
            shape: u.zV.BOX,
            children: (0, a.jsx)(m.Text, {
              tag: "span",
              variant: "text-md/normal",
              color: "text-muted",
              children: "Enable Click Zone Debug Mode"
            })
          })
        }))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        children: e => (0, a.jsx)("div", K(W({}, e), {
          children: (0, a.jsx)(u.$q, {
            value: s,
            onChange: () => void x(j.GO.WidgetAreas),
            size: 18,
            type: u.M0.INVERTED,
            shape: u.zV.BOX,
            children: (0, a.jsx)(m.Text, {
              tag: "span",
              variant: "text-md/normal",
              color: "text-muted",
              children: "Enable Render Debug Mode"
            })
          })
        }))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        children: e => (0, a.jsx)("div", K(W({}, e), {
          children: (0, a.jsx)(u.$q, {
            value: o,
            onChange: () => void x(j.GO.DisabledGPUBoost),
            size: 18,
            type: u.M0.INVERTED,
            shape: u.zV.BOX,
            children: (0, a.jsx)(m.Text, {
              tag: "span",
              variant: "text-md/normal",
              color: "text-muted",
              children: "Disable GPU Boost"
            })
          })
        }))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        children: e => (0, a.jsx)("div", K(W({}, e), {
          children: (0, a.jsx)(u.$q, {
            value: c,
            onChange: () => void x(j.GO.ForceGPUBoost),
            size: 18,
            disabled: o,
            type: u.M0.INVERTED,
            shape: u.zV.BOX,
            children: (0, a.jsx)(m.Text, {
              tag: "span",
              variant: "text-md/normal",
              color: "text-muted",
              children: "Force GPU Boost"
            })
          })
        }))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        children: n => (0, a.jsx)("div", K(W({}, n), {
          children: (0, a.jsx)(u.$q, {
            value: null != e,
            onChange: () => t(),
            size: 18,
            type: u.M0.INVERTED,
            shape: u.zV.BOX,
            children: (0, a.jsx)(m.Text, {
              tag: "span",
              variant: "text-md/normal",
              color: "text-muted",
              children: "Click Zone Debug Widget"
            })
          })
        }))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "Creates a widget that shows the overlay's window performance metrics.",
        children: e => (0, a.jsx)("div", K(W({}, e), {
          children: (0, a.jsx)(u.$q, {
            value: null != n,
            onChange: () => l(),
            size: 18,
            type: u.M0.INVERTED,
            shape: u.zV.BOX,
            children: (0, a.jsx)(m.Text, {
              tag: "span",
              variant: "text-md/normal",
              color: "text-muted",
              children: "Overlay Performance Debug Widget"
            })
          })
        }))
      }), (0, Chunk951288.jsx)(Chunk755721.$q, {
        value: Chunk765250,
        onChange: () => void Chunk593472(Chunk837268.GO.OverlayRafManagerForceEnabled),
        size: 18,
        type: Chunk755721.M0.INVERTED,
        shape: Chunk755721.zV.BOX,
        children: (0, Chunk951288.jsxs)(Chunk481060.Text, {
          tag: "span",
          variant: "text-md/normal",
          color: "text-muted",
          children: ["Overlay SmartRAF (", Chunk556809.Z.getLastRAFCallbackReason(), ")"]
        })
      })]
    })
  }),
  es = Chunk647438.memo(function() {
    let e = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      t = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.getRunningGames()).filter(t => null == e[t.pid]);
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [exports.length > 0 && (0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "Games that are running but not tracked by the overlay",
        children: e => (0, a.jsx)("div", K(W({}, e), {
          children: (0, a.jsxs)("div", {
            className: V.panelGroup,
            children: [(0, a.jsx)(m.Text, {
              variant: "text-md/bold",
              color: "text-danger",
              children: "Untracked Running Games"
            }), t.map(e => (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(m.Text, {
                variant: "text-sm/normal",
                color: "text-danger",
                children: "".concat(e.pid, " - ").concat(e.name, " (").concat(e.exeName, ")")
              }, e.pid), (0, a.jsx)(ea, {
                pid: e.pid
              })]
            }))]
          })
        }))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "The current running games process information",
        children: t => (0, a.jsx)("div", K(W({}, t), {
          children: (0, a.jsxs)("div", {
            className: V.panelGroup,
            children: [0 === Object.keys(e).length && (0, a.jsx)(m.Text, {
              variant: "text-sm/normal",
              color: "text-default",
              children: "No running games"
            }), Object.values(e).map(e => (0, a.jsx)(J, {
              trackedGame: e
            }, e.pid))]
          })
        }))
      })]
    })
  }),
  eo = Chunk647438.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk371651.default], () => Chunk371651.default.getForcedRenderMode()),
      [t, n] = Chunk647438.useState(module),
      l = e => {
        n(e), p.Z.forceRenderMode(e)
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
      }].map(t => K(W({}, t), {
        label: "".concat(t.label, " ").concat(e === t.value ? "(current)" : "")
      }));
    return (0, Chunk951288.jsx)(Chunk481060.ua7, {
      position: "left",
      text: "Override the overlay render mode",
      children: e => (0, a.jsx)("div", K(W({}, e), {
        className: V.panelGroup,
        children: (0, a.jsx)(m.PhF, {
          serialize: e => e,
          isSelected: e => e === t,
          options: i,
          select: l,
          popoutLayerContext: D.O$
        })
      }))
    })
  }),
  ec = {
    native: {
      label: "Native",
      filter: e => e.type === v.C7.NativeLegacy || e.type === v.C7.NativeOOP
    },
    render: {
      label: "Render",
      filter: e => e.type === v.C7.Renderer
    },
    client: {
      label: "Client",
      filter: e => e.type === v.C7.OOPModule || e.type === v.C7.LegacyModule
    }
  };

function ed(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : v.l6.Info;
  if (t === v.l6.Error) return "var(--text-danger)";
  switch (e) {
    case v.C7.NativeLegacy:
      return "var(--yellow-500)";
    case v.C7.NativeOOP:
      return "var(--green-500)";
    case v.C7.Renderer:
      return "var(--brand-500)";
    case v.C7.LegacyModule:
      return "var(--yellow-300)";
    case v.C7.OOPModule:
      return "var(--green-300)";
    default:
      return "var(--gray-400)"
  }
}
let eu = [{
  key: "type",
  cellClassName: Chunk312079.tableBarColumn,
  renderHeader: () => null,
  render(e) {
    let {
      type: t,
      logType: n
    } = e, r = em(t);
    return (0, a.jsx)("div", {
      className: V.tableBar,
      style: {
        color: ed(t, n)
      },
      children: (0, a.jsx)(r, {
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
      logType: r
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(m.Text, {
        variant: "text-md/normal",
        color: function(e) {
          switch (e) {
            case v.l6.Info:
              return "text-primary";
            case v.l6.Warning:
              return "text-feedback-warning";
            case v.l6.Error:
              return "text-danger";
            default:
              return "text-secondary"
          }
        }(r),
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
    return (0, w.vc)(o()(t), "h:mm:ss.SSS")
  }
}];

function em(e) {
  switch (e) {
    case v.C7.NativeLegacy:
      return m.GON;
    case v.C7.NativeOOP:
      return m.ljO;
    case v.C7.Renderer:
      return m.n6r;
    case v.C7.LegacyModule:
      return m.pzj;
    case v.C7.OOPModule:
      return m.m3e;
    default:
      return m.pzj
  }
}

function eh(e) {
  return JSON.stringify(e, (e, t) => true === t ? null : t, 2)
}
let ep = ["__webpack_require__", "fn"],
  ex = ["web.js", "web.js.map"],
  eb = [{
    id: "details",
    name: "Details",
    group: Chunk621060.v0.NONE,
    render: e => {
      var t, n;
      let {
        breadcrumb: r,
        onClose: l
      } = e, {
        name: s,
        type: c,
        logType: d,
        nativeId: u,
        stack: h,
        data: p,
        timestamp: x
      } = r, b = o()(x), f = em(c);
      return (0, a.jsxs)(m.w0Z, {
        className: V.subPanelScroller,
        children: [(0, a.jsxs)(g.Z, {
          className: i()(H.headerBar, V.subPanelHeaderBar),
          children: [(0, a.jsx)("div", {
            style: {
              color: ed(c, d)
            },
            className: V.headerIcon,
            children: (0, a.jsx)(f, {
              color: "currentColor",
              size: "sm"
            })
          }), (0, a.jsxs)(g.Z.Title, {
            wrapperClassName: V.headerTitle,
            children: [s, " (", c, ")", (0, a.jsx)(m.P3F, {
              tag: "span",
              className: V.copyEventButton,
              onClick: () => (0, R.JG)(s),
              children: (0, a.jsx)(m.TIy, {
                color: "currentColor",
                size: "sm"
              })
            })]
          }), (0, a.jsx)(g.Z.Icon, {
            icon: m.TIy,
            tooltip: "Copy all properties",
            onClick: () => {
              (0, R.JG)(eh(r))
            }
          }), (0, a.jsx)(g.Z.Icon, {
            icon: m.k$p,
            tooltip: "Close",
            onClick: l
          })]
        }), (0, a.jsxs)(L.E, {
          className: V.commonProperties,
          children: [(0, a.jsx)(L.Z9, {
            name: "Timestamp",
            copyValue: b.toISOString(),
            children: (0, a.jsx)("time", {
              dateTime: b.toISOString(),
              title: (0, w.vc)(b, "LLLL"),
              children: (0, w.vc)(b, "L h:mm:ss.SSS")
            })
          }), (0, a.jsx)(L.Z9, {
            name: "Log Type",
            copyValue: d,
            children: (0, a.jsx)("code", {
              children: d
            })
          }), (0, a.jsx)(L.Z9, {
            name: "Native ID",
            copyValue: null != (t = null == u ? true : u.toString()) ? t : "null",
            children: (0, a.jsx)("code", {
              children: null != (n = null == u ? true : u.toString()) ? n : "null"
            })
          }), (0, a.jsx)(L.Z9, {
            name: "Data",
            copyValue: eh(p),
            children: (0, a.jsx)("code", {
              children: eh(p)
            })
          }), (0, a.jsx)(L.Z9, {
            name: "Stack Trace",
            copyValue: h,
            children: (0, a.jsx)("code", {
              children: h.split("\n").map((e, t) => {
                let n = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                if (null != n) {
                  let [, e, r, l, i] = n, s = r.split(/[\\/]/).pop();
                  return ep.includes(e.trim()) ? null : (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("span", {
                      className: V.stackTraceFunction,
                      children: e.trim()
                    }), !ex.includes(null != s ? s : "") && (0, a.jsxs)(a.Fragment, {
                      children: [" (", (0, a.jsxs)("span", {
                        className: V.stackTraceLocation,
                        title: r,
                        children: [s, ":", l, ":", i]
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
  ef = {
    searchType: Chunk886118.S.REGEX,
    searchStringGenerator: e => {
      let {
        name: t,
        type: n,
        stack: a,
        data: r
      } = e;
      return [t, n, a, JSON.stringify(r)]
    },
    throttleMs: 100
  };

function eg() {
  let [e, t] = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.DEV_getOverlayLoggingBreadcrumbs(), [], Chunk136015.Q), {
    ref: n,
    height: l
  } = (0, Chunk393238.ZP)(), s = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.DEV_isOverlayModuleLoggingEnabled()), [o, c] = Chunk647438.useState(Chunk913527), [h, x] = Chunk647438.useState(Object.keys(ec)), [f, g] = Chunk647438.useState(""), v = Chunk647438.useMemo(() => 0 === exports ? [] : module.filter(e => {
    for (let t of h) {
      let {
        filter: n
      } = ec[t];
      if (n(e)) returntrue
    }
    returnfalse
  }), [module, Chunk765250, exports]), [j, _] = Chunk647438.useState(Chunk427860), [y, N] = Chunk647438.useState(null), E = Chunk647438.useMemo(() => module.find(e => e.key === y), [module, Chunk829907]), S = Chunk647438.useCallback(e => {
    _(e)
  }, []), {
    renderSelectedTab: O
  } = (0, Chunk621060.ZP)({
    tabs: eb
  }, []);
  (0, Chunk301801.BO)(Chunk594190, Chunk427860, Chunk352527, ef, [module]);
  let P = Chunk647438.useCallback(e => {
    c(e), p.Z.setModuleLogging(e)
  }, []);
  Chunk647438.useEffect(() => {
    if (Chunk610394.ZP.DEV_isOverlayModuleLoggingEnabled()) return;
    let e = setTimeout(() => {
      Chunk772848(true), Chunk13245.Z.setModuleLogging(true)
    }, 3e3);
    return () => {
      clearTimeout(module)
    }
  }, []);
  let [k, w] = Chunk647438.useState(false), I = Chunk647438.useRef(null), A = Chunk647438.useCallback(() => {
    (0, Chunk572004.JG)(JSON.stringify(module)), Chunk55935(true)
  }, [module]);
  return Chunk647438.useEffect(() => {
    if (Chunk808506) return Chunk70956.current = setTimeout(() => {
      Chunk55935(false)
    }, 4e3), () => {
      null != Chunk70956.current && clearTimeout(Chunk70956.current)
    }
  }, [Chunk808506]), (0, Chunk951288.jsxs)("div", {
    ref: require,
    className: Chunk312079.panelContainer,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk312079.panelGroup,
      children: [(0, Chunk951288.jsxs)("div", {
        className: i()(Chunk312079.toolbar, Chunk312079.filtersToolbar),
        children: [(0, Chunk951288.jsxs)("div", {
          title: "Toggles the Polling of Native",
          className: Chunk312079.pollBreadcrumbs,
          children: [(0, Chunk951288.jsx)(Chunk755721.T2, {
            checked: o,
            onChange: e => P(e)
          }), (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            color: "currentColor",
            children: "Poll Native"
          })]
        }), Object.entries(ec).map(e => {
          let [t, n] = e;
          return (0, a.jsx)(m.P3F, {
            className: i()(V.filter, h.includes(t) && V.activeFilter),
            onClick: () => {
              x(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t])
            },
            children: (0, a.jsx)(m.Text, {
              variant: "text-sm/normal",
              color: "currentColor",
              children: n.label
            })
          }, t)
        }), (0, Chunk951288.jsxs)(Chunk481060.P3F, {
          className: Chunk312079.copyAll,
          onClick: Chunk145597,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: Chunk808506 ? "Copied" : "Copy All"
          }), Chunk808506 ? (0, Chunk951288.jsx)(Chunk481060.dz2, {
            size: "sm",
            color: Chunk481060.TVs.unsafe_rawColors.GREEN_330.css
          }) : (0, Chunk951288.jsx)(Chunk481060.TIy, {
            color: "currentColor",
            size: "sm"
          })]
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk312079.toolbar,
        children: (0, Chunk951288.jsx)(Chunk481060.E1j, {
          query: Chunk594190,
          onChange: Chunk984370,
          onClear: () => Chunk984370(""),
          placeholder: "Regex search by breadcrumb name and data"
        })
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: i()(Chunk312079.panelGroup, Chunk312079.tableContainer),
      children: (0, Chunk951288.jsx)(Chunk681619.Z, {
        columns: eu,
        data: Chunk837268,
        selectedRowKey: null != Chunk829907 ? Chunk829907 : true,
        onClickRow: e => N(e.key)
      })
    }), null != Chunk886118 && (0, Chunk951288.jsx)(Chunk484036.Z, {
      className: i()(Chunk312079.panelGroup, Chunk312079.subPanel),
      minHeight: 100,
      initialHeight: null != Chunk120356 ? Chunk120356 / 3 : 300,
      children: Chunk355863({
        breadcrumb: Chunk886118,
        onClose: () => Chunk556809(null)
      })
    })]
  })
}

function ev() {
  return (0, Chunk951288.jsx)(Chunk481060.w0Z, {
    children: (0, Chunk951288.jsxs)("div", {
      className: i()(Chunk866403.panel, Chunk312079.subPanel),
      children: [(0, Chunk951288.jsx)(ei, {}), (0, Chunk951288.jsx)(eo, {}), (0, Chunk951288.jsx)(es, {}), (0, Chunk951288.jsx)(el, {}), (0, Chunk951288.jsx)(en, {}), (0, Chunk951288.jsx)(er, {})]
    })
  })
}

function ej() {
  let [e, t] = Chunk647438.useState("state");
  return (0, Chunk951288.jsxs)("div", {
    className: i()(Chunk866403.panel, Chunk312079.panel),
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk312079.toolbar,
      children: [(0, Chunk951288.jsx)(Chunk481060.P3F, {
        className: i()(Chunk312079.paneOption, "state" === module && Chunk312079.activePaneOption),
        onClick: () => exports("state"),
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Client State"
        })
      }), (0, Chunk951288.jsx)(Chunk481060.P3F, {
        className: i()(Chunk312079.paneOption, "logging" === module && Chunk312079.activePaneOption),
        onClick: () => exports("logging"),
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Logging"
        })
      })]
    }), "state" === module && (0, Chunk951288.jsx)(ev, {}), "logging" === module && (0, Chunk951288.jsx)(eg, {})]
  })
}