/** Chunk was on 66663 **/
/** chunk id: 633001, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eE
}), require("./388685.js"), require("./583741.js"), require("./539854.js"), require("./49124.js"), require("./35282.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk600164 = require("./600164.jsx"),
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

function q(e) {
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
let Y = {
    [Chunk981631.Odu.CLICK_ZONE_DEBUG]: e => K(q({
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
    }, P.Z.getWidgetDefaultSettings(G.Odu.CLICK_ZONE_DEBUG)), {
      pinned: true
    }),
    [Chunk981631.Odu.PERFORMANCE_DEBUG]: e => K(q({
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
    }, P.Z.getWidgetDefaultSettings(G.Odu.PERFORMANCE_DEBUG)), {
      pinned: true
    })
  },
  X = {};

function J(e) {
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
  }, [n]), (0, a.jsxs)(u.zx, {
    look: u.zx.Looks.LINK,
    color: u.zx.Colors.LINK,
    size: u.zx.Sizes.MIN,
    onClick: function() {
      (0, w.JG)(t, () => i(true))
    },
    className: H.copyId,
    children: ["Application Id: ", t, " ", n ? V.intl.string(V.t["t5VZ8/"]) : null]
  })
}
let $ = Chunk647438.memo(function(e) {
    let {
      trackedGame: t
    } = e, n = (0, d.e7)([b.ZP], () => b.ZP.getGameOrTransformedSubgameForPID(t.pid)), r = (0, d.e7)([I.Z], () => I.Z.getGameForPID(t.pid)), i = (0, d.e7)([b.ZP], () => null == n ? null : b.ZP.getGameOverlayStatus(n));
    return (0, a.jsxs)("div", {
      className: H.panelGroup,
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
        children: (0, a.jsx)(J, {
          id: t.applicationId
        })
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["fullscreenType: ", (0, C.sS)(t.fullscreenType)]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["state: ", t.state]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"]
      }), (0, a.jsxs)("div", {
        className: H.panelGroup,
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
          children: ["overlayMethod: ", (0, C.P_)(t.overlayMethod)]
        })]
      }), null != i && (0, a.jsxs)("div", {
        className: H.panelGroup,
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
          children: ["raw overlayMethod: ", (0, C.P_)(i.overlayMethod)]
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
  Q = Chunk647438.memo(function(e) {
    let {
      pid: t
    } = e, n = (0, d.cj)([k.default], () => k.default.getOverlayPIDStatuses()), r = (0, d.cj)([y.default], () => y.default.getTrackedGames()), i = (0, d.e7)([k.default], () => k.default.isInputLocked(t), [t]), l = (0, d.e7)([k.default], () => k.default.DEV_isInputLockedV3(t), [t]), s = (0, d.e7)([k.default], () => k.default.DEV_isInputLocked(t), [t]), o = (0, d.e7)([k.default], () => k.default.isReady(t), [t]);
    return (0, a.jsxs)("div", {
      className: H.panelGroup,
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
        children: ["isInputLocked: ", i]
      }), (0, a.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-primary",
        children: ["isInputLockedV3: ", l]
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

function ee(e) {
  let t, n = (t = Object.values((0, d.Wu)([P.Z], () => P.Z.getWidgetsForLayout(z.$S))), t.find(t => t.type === e));
  return [n, () => {
    if (null != n)(0, p.E9)(n.id);
    else {
      let t = Y[e];
      if (null == t) return;
      let n = t(z.$S);
      (0, p.A4)(n)
    }
  }]
}

function et(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return t ? "".concat(e.toFixed(2), "ms") : new Date(e).toLocaleTimeString()
}
let en = Chunk647438.memo(function(e) {
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
  let r = (0, d.e7)([y.default], () => {
    var e, n;
    if (null == t) return "Unknown";
    let a = null == (e = y.default.getTrackedGameByPid(t)) ? true : e.gameName;
    return null != a ? (X[t] = a, a) : null != (n = X[t]) ? n : "Unknown"
  }, [t]);
  return (0, a.jsx)(m.Text, K(q({}, n), {
    variant: "text-md/semibold",
    color: "text-primary",
    children: r
  }))
});

function ea() {
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
      className: l()(Chunk312079.panelGroup, Chunk312079.scroller),
      children: [0 === exports.length && (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: "No recent focused pids"
      }), [...exports].reverse().map(e => {
        let [t, n, i] = e;
        return (0, a.jsx)(r.Fragment, {
          children: (0, a.jsx)(m.ua7, {
            position: "left",
            text: i === _.d5.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
            children: e => {
              var r;
              return (0, a.jsx)("div", K(q({}, e), {
                children: (0, a.jsxs)(m.Text, {
                  variant: "text-sm/medium",
                  color: i === _.d5.TRACK_FOCUS ? "text-default" : "text-danger",
                  children: [(0, a.jsx)(en, {
                    pid: n,
                    tag: "span"
                  }), " - ", null != (r = null == n ? true : n.toString()) ? r : "null", " @ ", et(t, true)]
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
    } = e, n = (0, d.e7)([y.default, b.ZP], () => {
      var e, n;
      if (null == t) return null;
      let a = null == (e = y.default.getTrackedGameByPid(t)) ? true : e.fullscreenType;
      if (null != a) return a;
      let r = b.ZP.getGameOrTransformedSubgameForPID(t);
      return null != (n = null == r ? true : r.fullscreenType) ? n : x.Jx.UNKNOWN
    }, [t]);
    return (0, a.jsxs)(m.Text, {
      variant: "text-sm/normal",
      color: "text-secondary",
      tag: "span",
      children: ["Original Screen Type: ", null != n ? (0, C.sS)(n) : "Unknown"]
    })
  }),
  ei = Chunk647438.memo(function() {
    let e = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      [t, n] = Chunk647438.useState({}),
      i = Chunk647438.useRef(null);
    return Chunk647438.useEffect(() => (Chunk120356.current = setInterval(async () => {
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
      }, q({}, e)))
    }, +Chunk70956.Z.Millis.SECOND), () => clearInterval(Chunk120356.current)), []), (0, Chunk951288.jsx)(Chunk481060.ua7, {
      position: "left",
      text: "The most recent screen types we've logged, indexed by pid",
      children: n => (0, a.jsx)("div", K(q({}, n), {
        children: (0, a.jsxs)(m.zJl, {
          className: l()(H.panelGroup, H.scroller),
          children: [0 === Object.keys(e).length && (0, a.jsx)(m.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: "No recent screen types"
          }), Object.values(e).map(e => (0, a.jsxs)("div", {
            children: [(0, a.jsx)(en, {
              tag: "div",
              pid: e.pid
            }), (0, a.jsx)(er, {
              pid: e.pid
            }), null != t[e.pid] && [...t[e.pid]].reverse().map(t => {
              let {
                screenType: n,
                timestamp: r
              } = t;
              return (0, a.jsx)(m.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: "".concat(n, ":").concat((0, C.sS)(n), " @ ").concat(et(r))
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
      i = (0, Chunk442837.e7)([Chunk371651.default], () => Chunk371651.default.isOverlayOOPEnabledForPid(Chunk647438), [Chunk647438]),
      [l, s] = (0, Chunk442837.Wu)([Chunk352527.Z], () => [Chunk352527.Z.enabled, Chunk352527.Z.keepOpen]),
      o = (0, Chunk442837.e7)([Chunk808506.default], () => Chunk808506.default.getFocusedPID()),
      c = (0, Chunk442837.e7)([Chunk808506.default], () => Chunk808506.default.isFocusedPidOutOfProcess());
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk312079.panelGroup,
      children: [0 === Object.keys(require).length && (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: "No tracked game times"
      }), Object.values(require).map(e => (0, a.jsx)(Q, {
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
          children: ["SoundboardOverlay.enabled: ", l ? "Yes" : "No"]
        }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: ["SoundboardOverlay.keepOpen: ", Chunk913527 ? "Yes" : "No"]
        })]
      })]
    })
  }),
  es = Chunk647438.memo(function() {
    let [e, t] = ee(Chunk981631.Odu.CLICK_ZONE_DEBUG), [n, i] = ee(Chunk981631.Odu.PERFORMANCE_DEBUG), l = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.ClickZones)), s = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.WidgetAreas)), o = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.WindowContainer)), c = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.DisabledGPUBoost)), p = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.ForceGPUBoost)), x = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.OverlayRafManagerForceEnabled)), f = e => {
      h.Z.setRenderDebugMode(!E.ZP.hasRenderDebugMode(e), e)
    }, [g, b] = Chunk647438.useState({});
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
        children: e => (0, a.jsx)("div", K(q({}, e), {
          children: (0, a.jsx)(u.$q, {
            value: l,
            onChange: () => void f(_.GO.ClickZones),
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
        children: e => (0, a.jsx)("div", K(q({}, e), {
          children: (0, a.jsx)(u.$q, {
            value: s,
            onChange: () => void f(_.GO.WidgetAreas),
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
        text: "Enables a border the overlay window",
        children: e => (0, a.jsx)("div", K(q({}, e), {
          children: (0, a.jsx)(u.$q, {
            value: o,
            onChange: () => void f(_.GO.WindowContainer),
            size: 18,
            type: u.M0.INVERTED,
            shape: u.zV.BOX,
            children: (0, a.jsx)(m.Text, {
              tag: "span",
              variant: "text-md/normal",
              color: "text-muted",
              children: "Enable Window Container Debug Mode"
            })
          })
        }))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        children: e => (0, a.jsx)("div", K(q({}, e), {
          children: (0, a.jsx)(u.$q, {
            value: c,
            onChange: () => void f(_.GO.DisabledGPUBoost),
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
        children: e => (0, a.jsx)("div", K(q({}, e), {
          children: (0, a.jsx)(u.$q, {
            value: p,
            onChange: () => void f(_.GO.ForceGPUBoost),
            size: 18,
            disabled: c,
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
        children: n => (0, a.jsx)("div", K(q({}, n), {
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
        children: e => (0, a.jsx)("div", K(q({}, e), {
          children: (0, a.jsx)(u.$q, {
            value: null != n,
            onChange: () => i(),
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
        value: Chunk593472,
        onChange: () => void Chunk393238(Chunk837268.GO.OverlayRafManagerForceEnabled),
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
  eo = Chunk647438.memo(function() {
    let e = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      t = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.getRunningGames()).filter(t => null == e[t.pid]);
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [exports.length > 0 && (0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "Games that are running but not tracked by the overlay",
        children: e => (0, a.jsx)("div", K(q({}, e), {
          children: (0, a.jsxs)("div", {
            className: H.panelGroup,
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
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "The current running games process information",
        children: t => (0, a.jsx)("div", K(q({}, t), {
          children: (0, a.jsxs)("div", {
            className: H.panelGroup,
            children: [0 === Object.keys(e).length && (0, a.jsx)(m.Text, {
              variant: "text-sm/normal",
              color: "text-default",
              children: "No running games"
            }), Object.values(e).map(e => (0, a.jsx)($, {
              trackedGame: e
            }, e.pid))]
          })
        }))
      })]
    })
  }),
  ec = Chunk647438.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk371651.default], () => Chunk371651.default.getForcedRenderMode()),
      [t, n] = Chunk647438.useState(module),
      i = e => {
        n(e), h.Z.forceRenderMode(e)
      },
      l = [{
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
      }].map(t => K(q({}, t), {
        label: "".concat(t.label, " ").concat(e === t.value ? "(current)" : "")
      }));
    return (0, Chunk951288.jsx)(Chunk481060.ua7, {
      position: "left",
      text: "Override the overlay render mode",
      children: e => (0, a.jsx)("div", K(q({}, e), {
        className: H.panelGroup,
        children: (0, a.jsx)(m.PhF, {
          serialize: e => e,
          isSelected: e => e === t,
          options: l,
          select: i,
          popoutLayerContext: L.O$
        })
      }))
    })
  });

function ed(e) {
  let {
    modalProps: t,
    onClose: n
  } = e, [i, l] = r.useState(null);

  function s() {
    n(null)
  }
  return (0, a.jsxs)(m.Y0X, K(q({
    size: m.CgR.LARGE,
    "aria-label": "Breadcrumb Import"
  }, t), {
    transitionState: t.transitionState,
    parentComponent: "BreadcrumbImportPanel",
    children: [(0, a.jsxs)(m.xBx, {
      align: g.Z.Align.CENTER,
      justify: g.Z.Justify.BETWEEN,
      children: [(0, a.jsx)(m.Text, {
        variant: "text-md/bold",
        color: "text-danger",
        children: "Breadcrumb Import"
      }), (0, a.jsx)(m.olH, {
        onClick: s
      })]
    }), (0, a.jsx)(m.hzk, {
      children: (0, a.jsx)("div", {
        className: H.panelGroup,
        children: (0, a.jsx)(m.Kx8, {
          label: "Paste JSON Here",
          onChange: l,
          value: null != i ? i : "",
          rows: 12
        })
      })
    }), (0, a.jsx)(m.mzw, {
      children: (0, a.jsxs)(m.hE2, {
        direction: "horizontal-reverse",
        children: [(0, a.jsx)(m.zxk, {
          variant: "primary",
          text: "Import",
          onClick: function() {
            n(i)
          }
        }), (0, a.jsx)(m.zxk, {
          variant: "secondary",
          text: "Clear",
          onClick: s
        })]
      })
    })]
  }))
}
let eu = {
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

function em(e) {
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
let ep = [{
  key: "type",
  cellClassName: Chunk312079.tableBarColumn,
  renderHeader: () => null,
  render(e) {
    let {
      type: t,
      logType: n
    } = e, r = eh(t);
    return (0, a.jsx)("div", {
      className: H.tableBar,
      style: {
        color: em(t, n)
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
            case j.l6.Info:
              return "text-primary";
            case j.l6.Warning:
              return "text-feedback-warning";
            case j.l6.Error:
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
    return (0, R.vc)(o()(t), "h:mm:ss.SSS")
  }
}];

function eh(e) {
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
let ef = ["__webpack_require__", "fn"],
  eg = ["web.js", "web.js.map"],
  eb = [{
    id: "details",
    name: "Details",
    group: Chunk621060.v0.NONE,
    render: e => {
      var t, n;
      let {
        breadcrumb: r,
        onClose: i
      } = e, {
        name: s,
        type: c,
        logType: d,
        nativeId: u,
        stack: p,
        data: h,
        timestamp: x
      } = r, f = o()(x), g = eh(c);
      return (0, a.jsxs)(m.w0Z, {
        className: H.subPanelScroller,
        children: [(0, a.jsxs)(v.Z, {
          className: l()(W.headerBar, H.subPanelHeaderBar),
          children: [(0, a.jsx)("div", {
            style: {
              color: em(c, d)
            },
            className: H.headerIcon,
            children: (0, a.jsx)(g, {
              color: "currentColor",
              size: "sm"
            })
          }), (0, a.jsxs)(v.Z.Title, {
            wrapperClassName: H.headerTitle,
            children: [s, " (", c, ")", (0, a.jsx)(m.P3F, {
              tag: "span",
              className: H.copyEventButton,
              onClick: () => (0, w.JG)(s),
              children: (0, a.jsx)(m.TIy, {
                color: "currentColor",
                size: "sm"
              })
            })]
          }), (0, a.jsx)(v.Z.Icon, {
            icon: m.TIy,
            tooltip: "Copy all properties",
            onClick: () => {
              (0, w.JG)(ex(r))
            }
          }), (0, a.jsx)(v.Z.Icon, {
            icon: m.k$p,
            tooltip: "Close",
            onClick: i
          })]
        }), (0, a.jsxs)(M.E, {
          className: H.commonProperties,
          children: [(0, a.jsx)(M.Z9, {
            name: "Timestamp",
            copyValue: f.toISOString(),
            children: (0, a.jsx)("time", {
              dateTime: f.toISOString(),
              title: (0, R.vc)(f, "LLLL"),
              children: (0, R.vc)(f, "L h:mm:ss.SSS")
            })
          }), (0, a.jsx)(M.Z9, {
            name: "Log Type",
            copyValue: d,
            children: (0, a.jsx)("code", {
              children: d
            })
          }), (0, a.jsx)(M.Z9, {
            name: "Native ID",
            copyValue: null != (t = null == u ? true : u.toString()) ? t : "null",
            children: (0, a.jsx)("code", {
              children: null != (n = null == u ? true : u.toString()) ? n : "null"
            })
          }), (0, a.jsx)(M.Z9, {
            name: "Data",
            copyValue: ex(h),
            children: (0, a.jsx)("code", {
              children: ex(h)
            })
          }), (0, a.jsx)(M.Z9, {
            name: "Stack Trace",
            copyValue: p,
            children: (0, a.jsx)("code", {
              children: p.split("\n").map((e, t) => {
                let n = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                if (null != n) {
                  let [, e, r, i, l] = n, s = r.split(/[\\/]/).pop();
                  return ef.includes(e.trim()) ? null : (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("span", {
                      className: H.stackTraceFunction,
                      children: e.trim()
                    }), !eg.includes(null != s ? s : "") && (0, a.jsxs)(a.Fragment, {
                      children: [" (", (0, a.jsxs)("span", {
                        className: H.stackTraceLocation,
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
  ev = {
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

function ej() {
  let {
    ref: e,
    height: t
  } = (0, Chunk393238.ZP)(), n = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.DEV_isOverlayModuleLoggingEnabled()), [i, s] = Chunk647438.useState(require), [o, c] = Chunk647438.useState(false), [p, x] = Chunk647438.useState(null), [g, b] = Chunk647438.useState(Object.keys(eu)), [v, j] = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.DEV_getOverlayLoggingBreadcrumbs(), [], Chunk136015.Q), [_, y] = Chunk647438.useState(null), C = null != Chunk837268 ? Chunk837268 : Chunk984370, N = null != Chunk837268 ? false : Chunk427860;
  Chunk647438.useEffect(() => {
    0 !== Chunk556809 && (o ? Chunk593472(Chunk829907.reduce((e, t) => "game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e, 0)) : Chunk593472(null))
  }, [o, Chunk829907, Chunk556809]);
  let [S, O] = Chunk647438.useState(""), P = Chunk647438.useMemo(() => 0 === Chunk556809 ? [] : Chunk829907.filter(e => {
    if (o && null != p && e.timestamp < p) returnfalse;
    for (let t of g) {
      let {
        filter: n
      } = eu[t];
      if (n(e)) returntrue
    }
    returnfalse
  }), [Chunk829907, Chunk600164, Chunk765250, o, Chunk556809]), [I, k] = Chunk647438.useState(Chunk355863), [R, A] = Chunk647438.useState(null), D = Chunk647438.useMemo(() => Chunk829907.find(e => e.key === R), [Chunk829907, Chunk55935]), L = Chunk647438.useCallback(e => {
    k(e)
  }, []), {
    renderSelectedTab: M
  } = (0, Chunk621060.ZP)({
    tabs: eb
  }, []);
  (0, Chunk301801.BO)(Chunk886118, Chunk355863, Chunk246992, ev, [Chunk829907]);
  let G = Chunk647438.useCallback(e => {
      s(e), h.Z.setModuleLogging(e)
    }, []),
    [z, V] = Chunk647438.useState(false),
    W = Chunk647438.useRef(null),
    q = Chunk647438.useCallback(() => {
      (0, Chunk572004.JG)(JSON.stringify(Chunk829907)), Chunk388032(true)
    }, [Chunk829907]);
  Chunk647438.useEffect(() => {
    if (Chunk757744) return Chunk866403.current = setTimeout(() => {
      Chunk388032(false)
    }, 4e3), () => {
      null != Chunk866403.current && clearTimeout(Chunk866403.current)
    }
  }, [Chunk757744]);
  let K = Chunk647438.useCallback(e => {
      y(null != e ? JSON.parse(e) : null)
    }, []),
    Y = Chunk647438.useCallback(e => {
      if (e) return y(null);
      (0, m.h7j)(e => (0, a.jsx)(ed, {
        modalProps: e,
        onClose: t => {
          K(t), e.onClose()
        }
      }), {
        modalKey: "breadcrumb-import-panel"
      }, m.z1l)
    }, [K]);
  return (0, Chunk951288.jsxs)("div", {
    ref: module,
    className: Chunk312079.panelContainer,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk312079.panelGroup,
      children: [(0, Chunk951288.jsxs)("div", {
        className: l()(Chunk312079.toolbar, Chunk312079.filtersToolbar),
        children: [(0, Chunk951288.jsxs)("div", {
          title: "Toggles the Polling of Native",
          className: Chunk312079.pollBreadcrumbs,
          children: [(0, Chunk951288.jsx)(Chunk755721.$q, {
            value: Chunk120356,
            onChange: (e, t) => G(t)
          }), (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-xs/medium",
            color: "currentColor",
            children: "Poll Native"
          })]
        }), (0, Chunk951288.jsxs)("div", {
          title: "Only show breadcrumbs for active games",
          className: Chunk312079.pollBreadcrumbs,
          children: [(0, Chunk951288.jsx)(Chunk755721.$q, {
            value: o,
            onChange: (e, t) => c(t)
          }), (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-xs/medium",
            color: "currentColor",
            children: "Only Active Games"
          })]
        }), (0, Chunk951288.jsxs)(Chunk481060.P3F, {
          className: Chunk312079.copyAll,
          onClick: q,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: Chunk757744 ? "Copied" : "Copy All"
          }), Chunk757744 ? (0, Chunk951288.jsx)(Chunk481060.dz2, {
            size: "sm",
            color: Chunk481060.TVs.unsafe_rawColors.GREEN_330.css
          }) : (0, Chunk951288.jsx)(Chunk481060.TIy, {
            color: "currentColor",
            size: "sm"
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.P3F, {
          className: Chunk312079.copyAll,
          onClick: () => Y(null != Chunk837268),
          children: (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "currentColor",
            children: null != Chunk837268 ? "Clear" : "Import"
          })
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: l()(Chunk312079.toolbar, Chunk312079.filtersToolbar),
        children: Object.entries(eu).map(e => {
          let [t, n] = e;
          return (0, a.jsx)(m.P3F, {
            className: l()(H.filter, g.includes(t) && H.activeFilter),
            onClick: () => {
              b(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t])
            },
            children: (0, a.jsx)(m.Text, {
              variant: "text-sm/normal",
              color: "currentColor",
              children: n.label
            })
          }, t)
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk312079.toolbar,
        children: (0, Chunk951288.jsx)(Chunk481060.E1j, {
          query: Chunk886118,
          onChange: Chunk352527,
          onClear: () => Chunk352527(""),
          placeholder: "Regex search by breadcrumb name and data"
        })
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: l()(Chunk312079.panelGroup, Chunk312079.tableContainer),
      children: (0, Chunk951288.jsx)(Chunk681619.Z, {
        columns: ep,
        data: Chunk449224,
        selectedRowKey: null != Chunk55935 ? Chunk55935 : true,
        onClickRow: e => A(e.key)
      })
    }), null != Chunk145597 && (0, Chunk951288.jsx)(Chunk484036.Z, {
      className: l()(Chunk312079.panelGroup, Chunk312079.subPanel),
      minHeight: 100,
      initialHeight: null != exports ? exports / 3 : 300,
      children: Chunk257785({
        breadcrumb: Chunk145597,
        onClose: () => Chunk70956(null)
      })
    })]
  })
}
let e_ = Chunk647438.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.getInitializationStages());
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk312079.panelGroup,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk312079.panelHeader,
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
  ey = Chunk647438.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.DEV_isStateDebuggingEnabled()),
      t = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.DEV_getDebuggingState());
    return Chunk647438.useEffect(() => (Chunk13245.Z.setStateDebugging(true), () => {
      Chunk13245.Z.setStateDebugging(false)
    }), []), (0, Chunk951288.jsxs)("div", {
      className: Chunk312079.panelGroup,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk312079.panelHeader,
        children: (0, Chunk951288.jsx)(Chunk755721.$q, {
          value: module,
          onChange: () => Chunk13245.Z.setStateDebugging(!module),
          size: 18,
          type: Chunk755721.M0.INVERTED,
          shape: Chunk755721.zV.BOX,
          children: (0, Chunk951288.jsx)(Chunk481060.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: "Poll Native Module State"
          })
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

function eC() {
  return (0, Chunk951288.jsx)(Chunk481060.w0Z, {
    children: (0, Chunk951288.jsxs)("div", {
      className: l()(Chunk866403.panel, Chunk312079.subPanel),
      children: [(0, Chunk951288.jsx)(es, {}), (0, Chunk951288.jsx)(ec, {}), (0, Chunk951288.jsx)(eo, {}), (0, Chunk951288.jsx)(el, {}), (0, Chunk951288.jsx)(ea, {}), (0, Chunk951288.jsx)(ei, {}), (0, Chunk951288.jsx)(e_, {}), (0, Chunk951288.jsx)(ey, {})]
    })
  })
}

function eE() {
  let [e, t] = Chunk647438.useState("state");
  return (0, Chunk951288.jsxs)("div", {
    className: l()(Chunk866403.panel, Chunk312079.panel),
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk312079.toolbar,
      children: [(0, Chunk951288.jsx)(Chunk481060.P3F, {
        className: l()(Chunk312079.paneOption, "state" === module && Chunk312079.activePaneOption),
        onClick: () => exports("state"),
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Client State"
        })
      }), (0, Chunk951288.jsx)(Chunk481060.P3F, {
        className: l()(Chunk312079.paneOption, "logging" === module && Chunk312079.activePaneOption),
        onClick: () => exports("logging"),
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Logging"
        })
      })]
    }), "state" === module && (0, Chunk951288.jsx)(eC, {}), "logging" === module && (0, Chunk951288.jsx)(ej, {})]
  })
}