/** Chunk was on 93886 **/
/** chunk id: 633001, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => eg
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
  X = {};

function Y(e) {
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
  }, [a]), (0, n.jsxs)(u.zx, {
    look: u.zx.Looks.LINK,
    color: u.zx.Colors.LINK,
    size: u.zx.Sizes.MIN,
    onClick: function() {
      (0, I.JG)(t, () => l(true))
    },
    className: G.copyId,
    children: ["Application Id: ", t, " ", a ? z.intl.string(z.t["t5VZ8/"]) : null]
  })
}
let J = Chunk647438.memo(function(e) {
    let {
      trackedGame: t
    } = e, a = (0, d.e7)([v.ZP], () => v.ZP.getGameOrTransformedSubgameForPID(t.pid)), r = (0, d.e7)([S.Z], () => S.Z.getGameForPID(t.pid)), l = (0, d.e7)([v.ZP], () => null == a ? null : v.ZP.getGameOverlayStatus(a));
    return (0, n.jsxs)("div", {
      className: G.panelGroup,
      children: [(0, n.jsx)(m.Text, {
        variant: "text-md/bold",
        color: "text-primary",
        children: t.gameName
      }), (0, n.jsx)(m.Text, {
        variant: "text-sm/bold",
        color: "text-secondary",
        children: t.pid
      }), (0, n.jsx)(m.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: null == a ? true : a.exeName
      }), (0, n.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["isLauncher: ", (null == a ? true : a.isLauncher) ? "Yes" : "No"]
      }), null != t.applicationId && (0, n.jsx)(m.Text, {
        variant: "text-md/bold",
        color: "text-primary",
        children: (0, n.jsx)(Y, {
          id: t.applicationId
        })
      }), (0, n.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["fullscreenType: ", (0, y.sS)(t.fullscreenType)]
      }), (0, n.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["state: ", t.state]
      }), (0, n.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"]
      }), (0, n.jsxs)("div", {
        className: G.panelGroup,
        children: [(0, n.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["source: ", t.source]
        }), (0, n.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"]
        }), (0, n.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"]
        }), (0, n.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["overlayMethod: ", (0, y.P_)(t.overlayMethod)]
        })]
      }), null != l && (0, n.jsxs)("div", {
        className: G.panelGroup,
        children: [(0, n.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw source: ", l.source]
        }), (0, n.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw enabledLegacy: ", l.enabledLegacy ? "Yes" : "No"]
        }), (0, n.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw enabledOOP: ", l.enabledOOP ? "Yes" : "No"]
        }), (0, n.jsxs)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["raw overlayMethod: ", (0, y.P_)(l.overlayMethod)]
        })]
      }), (0, n.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["hidden: ", (null == a ? true : a.hidden) ? "Yes" : "No"]
      }), (0, n.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["hook: ", (null == r ? true : r.hook) ? "Yes" : "No"]
      }), (0, n.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["overlay: ", (null == r ? true : r.overlay) ? "Yes" : "No"]
      }), (0, n.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["overlayCompatibilityHook: ", (null == r ? true : r.overlayCompatibilityHook) ? "Yes" : "No"]
      }), (0, n.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["supportsOutOfProcessOverlay: ", (null == r ? true : r.supportsOutOfProcessOverlay) ? "Yes" : "No"]
      })]
    })
  }),
  q = Chunk647438.memo(function(e) {
    let {
      pid: t
    } = e, a = (0, d.cj)([P.default], () => P.default.getOverlayPIDStatuses()), r = (0, d.cj)([_.default], () => _.default.getTrackedGames()), l = (0, d.e7)([P.default], () => P.default.isInputLocked(t), [t]), i = (0, d.e7)([P.default], () => P.default.DEV_isInputLockedV3(t), [t]), s = (0, d.e7)([P.default], () => P.default.DEV_isInputLocked(t), [t]), o = (0, d.e7)([P.default], () => P.default.isReady(t), [t]);
    return (0, n.jsxs)("div", {
      className: G.panelGroup,
      children: [(0, n.jsx)(m.Text, {
        variant: "text-md/semibold",
        color: "text-primary",
        children: "".concat(t)
      }), (0, n.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: ["Screen Type Resolution: ", (e => {
          var t;
          let a = null == (t = r[e]) ? true : t.timer;
          if (null == a || null == a.screenTypeResolutionTimestamp) return "...";
          let n = a.screenTypeResolutionTimestamp - a.startTrackingTimestamp;
          return "".concat(n.toFixed(2), "ms")
        })(t)]
      }), (0, n.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: ["Window Creation: ", (e => {
          var t;
          let a = null == (t = r[e]) ? true : t.timer;
          if (null == a || null == a.moduleTrackingTimestamp || null == a.screenTypeResolutionTimestamp) return "...";
          let n = a.moduleTrackingTimestamp - a.screenTypeResolutionTimestamp;
          return "".concat(n.toFixed(2), "ms")
        })(t)]
      }), (0, n.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: ["Rendering: ", (e => {
          var t;
          let a = null == (t = r[e]) ? true : t.timer;
          if (null == a || null == a.overlayRenderingTimestamp || null == a.moduleTrackingTimestamp) return "...";
          let n = a.overlayRenderingTimestamp - a.moduleTrackingTimestamp;
          return "".concat(n.toFixed(2), "ms")
        })(t)]
      }), (0, n.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-primary",
        children: ["Bridge Status: ", a.get(Number(t))]
      }), (0, n.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-primary",
        children: ["isInputLocked: ", l]
      }), (0, n.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-primary",
        children: ["isInputLockedV3: ", i]
      }), (0, n.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-primary",
        children: ["isInputLockedV2: ", s]
      }), (0, n.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-primary",
        children: ["isReady: ", o]
      })]
    })
  });

function $(e) {
  let t, a = (t = Object.values((0, d.Wu)([E.Z], () => E.Z.getWidgetsForLayout(B.$S))), t.find(t => t.type === e));
  return [a, () => {
    if (null != a)(0, x.E9)(a.id);
    else {
      let t = K[e];
      if (null == t) return;
      let a = t(B.$S);
      (0, x.A4)(a)
    }
  }]
}

function Q(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return t ? "".concat(e.toFixed(2), "ms") : new Date(e).toLocaleTimeString()
}
let ee = Chunk647438.memo(function(e) {
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
  return (0, n.jsx)(m.Text, W(H({}, a), {
    variant: "text-md/semibold",
    color: "text-primary",
    children: r
  }))
});

function et() {
  let e = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.TrackFocusPIDs)),
    t = (0, Chunk442837.Wu)([Chunk371651.default], () => Chunk371651.default.getDevToolsFocusedPidsWithTimestamp(), []);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk454741.panelGroup,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk454741.panelHeader,
      children: [(0, Chunk951288.jsx)(Chunk481060.XZJ, {
        value: module,
        onChange: () => void Chunk13245.Z.setRenderDebugMode(!Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.TrackFocusPIDs), Chunk837268.GO.TrackFocusPIDs),
        size: 18,
        type: Chunk481060.XZJ.Types.INVERTED,
        shape: Chunk481060.XZJ.Shapes.BOX,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          tag: "span",
          variant: "text-md/normal",
          color: "text-muted",
          children: "Track Focus Pids"
        })
      }), (0, Chunk951288.jsx)(Chunk481060.P3F, {
        className: Chunk454741.panelButton,
        onClick: () => Chunk13245.Z.clearTrackedPids(),
        children: (0, Chunk951288.jsx)(Chunk481060.XHJ, {
          size: "md",
          color: "currentColor"
        })
      })]
    }), (0, Chunk951288.jsxs)(Chunk481060.zJl, {
      className: i()(Chunk454741.panelGroup, Chunk454741.scroller),
      children: [0 === exports.length && (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: "No recent focused pids"
      }), [...exports].reverse().map(e => {
        let [t, a, l] = e;
        return (0, n.jsx)(r.Fragment, {
          children: (0, n.jsx)(m.ua7, {
            position: "left",
            text: l === j.d5.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
            children: e => {
              var r;
              return (0, n.jsx)("div", W(H({}, e), {
                children: (0, n.jsxs)(m.Text, {
                  variant: "text-sm/medium",
                  color: l === j.d5.TRACK_FOCUS ? "text-default" : "text-danger",
                  children: [(0, n.jsx)(ee, {
                    pid: a,
                    tag: "span"
                  }), " - ", null != (r = null == a ? true : a.toString()) ? r : "null", " @ ", Q(t, true)]
                })
              }))
            }
          })
        }, "".concat(a, "-").concat(t))
      })]
    })]
  })
}
let ea = Chunk647438.memo(function(e) {
    let {
      pid: t
    } = e, a = (0, d.e7)([_.default, v.ZP], () => {
      var e, a;
      if (null == t) return null;
      let n = null == (e = _.default.getTrackedGameByPid(t)) ? true : e.fullscreenType;
      if (null != n) return n;
      let r = v.ZP.getGameOrTransformedSubgameForPID(t);
      return null != (a = null == r ? true : r.fullscreenType) ? a : p.Jx.UNKNOWN
    }, [t]);
    return (0, n.jsxs)(m.Text, {
      variant: "text-sm/normal",
      color: "text-secondary",
      tag: "span",
      children: ["Original Screen Type: ", null != a ? (0, y.sS)(a) : "Unknown"]
    })
  }),
  en = Chunk647438.memo(function() {
    let e = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      [t, a] = Chunk647438.useState({}),
      l = Chunk647438.useRef(null);
    return Chunk647438.useEffect(() => (Chunk120356.current = setInterval(async () => {
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
    }, +Chunk70956.Z.Millis.SECOND), () => clearInterval(Chunk120356.current)), []), (0, Chunk951288.jsx)(Chunk481060.ua7, {
      position: "left",
      text: "The most recent screen types we've logged, indexed by pid",
      children: a => (0, n.jsx)("div", W(H({}, a), {
        children: (0, n.jsxs)(m.zJl, {
          className: i()(G.panelGroup, G.scroller),
          children: [0 === Object.keys(e).length && (0, n.jsx)(m.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: "No recent screen types"
          }), Object.values(e).map(e => (0, n.jsxs)("div", {
            children: [(0, n.jsx)(ee, {
              tag: "div",
              pid: e.pid
            }), (0, n.jsx)(ea, {
              pid: e.pid
            }), null != t[e.pid] && [...t[e.pid]].reverse().map(t => {
              let {
                screenType: a,
                timestamp: r
              } = t;
              return (0, n.jsx)(m.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: "".concat(a, ":").concat((0, y.sS)(a), " @ ").concat(Q(r))
              }, "".concat(e.pid, "-").concat(a, "-").concat(r))
            })]
          }, e.pid))]
        })
      }))
    })
  }),
  er = Chunk647438.memo(function() {
    var e, t;
    let a = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      r = (0, Chunk145597.getPID)(),
      l = (0, Chunk442837.e7)([Chunk371651.default], () => Chunk371651.default.isOverlayOOPEnabledForPid(Chunk647438), [Chunk647438]),
      [i, s] = (0, Chunk442837.Wu)([Chunk352527.Z], () => [Chunk352527.Z.enabled, Chunk352527.Z.keepOpen]),
      o = (0, Chunk442837.e7)([Chunk808506.default], () => Chunk808506.default.getFocusedPID()),
      c = (0, Chunk442837.e7)([Chunk808506.default], () => Chunk808506.default.isFocusedPidOutOfProcess());
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk454741.panelGroup,
      children: [0 === Object.keys(require).length && (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: "No tracked game times"
      }), Object.values(require).map(e => (0, n.jsx)(q, {
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
  el = Chunk647438.memo(function() {
    let [e, t] = $(Chunk981631.Odu.CLICK_ZONE_DEBUG), [a, r] = $(Chunk981631.Odu.PERFORMANCE_DEBUG), l = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.ClickZones)), i = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.WidgetAreas)), s = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.DisabledGPUBoost)), o = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.hasRenderDebugMode(Chunk837268.GO.ForceGPUBoost)), c = e => {
      h.Z.setRenderDebugMode(!C.ZP.hasRenderDebugMode(e), e)
    };
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk454741.panelGroup,
      children: [(0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "Enables a red border around click zones to help with debugging.",
        children: e => (0, n.jsx)("div", W(H({}, e), {
          children: (0, n.jsx)(m.XZJ, {
            value: l,
            onChange: () => void c(j.GO.ClickZones),
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
        }))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        children: e => (0, n.jsx)("div", W(H({}, e), {
          children: (0, n.jsx)(m.XZJ, {
            value: i,
            onChange: () => void c(j.GO.WidgetAreas),
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
        }))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        children: e => (0, n.jsx)("div", W(H({}, e), {
          children: (0, n.jsx)(m.XZJ, {
            value: s,
            onChange: () => void c(j.GO.DisabledGPUBoost),
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
        }))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        children: e => (0, n.jsx)("div", W(H({}, e), {
          children: (0, n.jsx)(m.XZJ, {
            value: o,
            onChange: () => void c(j.GO.ForceGPUBoost),
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
        }))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        children: a => (0, n.jsx)("div", W(H({}, a), {
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
        }))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "Creates a widget that shows the overlay's window performance metrics.",
        children: e => (0, n.jsx)("div", W(H({}, e), {
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
        }))
      })]
    })
  }),
  ei = Chunk647438.memo(function() {
    let e = (0, Chunk442837.cj)([Chunk371651.default], () => Chunk371651.default.getTrackedGames()),
      t = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.getRunningGames()).filter(t => null == e[t.pid]);
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [exports.length > 0 && (0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "Games that are running but not tracked by the overlay",
        children: e => (0, n.jsx)("div", W(H({}, e), {
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
              }, e.pid), (0, n.jsx)(ea, {
                pid: e.pid
              })]
            }))]
          })
        }))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        position: "left",
        text: "The current running games process information",
        children: t => (0, n.jsx)("div", W(H({}, t), {
          children: (0, n.jsxs)("div", {
            className: G.panelGroup,
            children: [0 === Object.keys(e).length && (0, n.jsx)(m.Text, {
              variant: "text-sm/normal",
              color: "text-default",
              children: "No running games"
            }), Object.values(e).map(e => (0, n.jsx)(J, {
              trackedGame: e
            }, e.pid))]
          })
        }))
      })]
    })
  }),
  es = Chunk647438.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk371651.default], () => Chunk371651.default.getForcedRenderMode()),
      [t, a] = Chunk647438.useState(module),
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
    return (0, Chunk951288.jsx)(Chunk481060.ua7, {
      position: "left",
      text: "Override the overlay render mode",
      children: e => (0, n.jsx)("div", W(H({}, e), {
        className: G.panelGroup,
        children: (0, n.jsx)(m.PhF, {
          serialize: e => e,
          isSelected: e => e === t,
          options: i,
          select: l,
          popoutLayerContext: A.O$
        })
      }))
    })
  }),
  eo = {
    native: {
      label: "Native",
      filter: e => e.type === g.C7.NativeLegacy || e.type === g.C7.NativeOOP
    },
    render: {
      label: "Render",
      filter: e => e.type === g.C7.Renderer
    },
    client: {
      label: "Client",
      filter: e => e.type === g.C7.OOPModule || e.type === g.C7.LegacyModule
    }
  };

function ec(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : g.l6.Info;
  if (t === g.l6.Error) return "var(--text-danger)";
  switch (e) {
    case g.C7.NativeLegacy:
      return "var(--yellow-500)";
    case g.C7.NativeOOP:
      return "var(--green-500)";
    case g.C7.Renderer:
      return "var(--brand-500)";
    case g.C7.LegacyModule:
      return "var(--yellow-300)";
    case g.C7.OOPModule:
      return "var(--green-300)";
    default:
      return "var(--gray-400)"
  }
}
let ed = [{
  key: "type",
  cellClassName: Chunk454741.tableBarColumn,
  renderHeader: () => null,
  render(e) {
    let {
      type: t,
      logType: a
    } = e, r = eu(t);
    return (0, n.jsx)("div", {
      className: G.tableBar,
      style: {
        color: ec(t, a)
      },
      children: (0, n.jsx)(r, {
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
      type: a,
      logType: r
    } = e;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(m.Text, {
        variant: "text-md/normal",
        color: function(e) {
          switch (e) {
            case g.l6.Info:
              return "text-primary";
            case g.l6.Warning:
              return "text-feedback-warning";
            case g.l6.Error:
              return "text-danger";
            default:
              return "text-secondary"
          }
        }(r),
        children: t
      }), (0, n.jsxs)(m.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: ["(", a, ")"]
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
    return (0, w.vc)(o()(t), "h:mm:ss.SSS")
  }
}];

function eu(e) {
  switch (e) {
    case g.C7.NativeLegacy:
      return m.GON;
    case g.C7.NativeOOP:
      return m.ljO;
    case g.C7.Renderer:
      return m.n6r;
    case g.C7.LegacyModule:
      return m.pzj;
    case g.C7.OOPModule:
      return m.m3e;
    default:
      return m.pzj
  }
}

function em(e) {
  return JSON.stringify(e, (e, t) => true === t ? null : t, 2)
}
let ex = ["__webpack_require__", "fn"],
  eh = ["web.js", "web.js.map"],
  ep = [{
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
      } = r, b = o()(p), v = eu(c);
      return (0, n.jsxs)(m.w0Z, {
        className: G.subPanelScroller,
        children: [(0, n.jsxs)(f.Z, {
          className: i()(V.headerBar, G.subPanelHeaderBar),
          children: [(0, n.jsx)("div", {
            style: {
              color: ec(c, d)
            },
            className: G.headerIcon,
            children: (0, n.jsx)(v, {
              color: "currentColor",
              size: "sm"
            })
          }), (0, n.jsxs)(f.Z.Title, {
            wrapperClassName: G.headerTitle,
            children: [s, " (", c, ")", (0, n.jsx)(m.P3F, {
              tag: "span",
              className: G.copyEventButton,
              onClick: () => (0, I.JG)(s),
              children: (0, n.jsx)(m.TIy, {
                color: "currentColor",
                size: "sm"
              })
            })]
          }), (0, n.jsx)(f.Z.Icon, {
            icon: m.TIy,
            tooltip: "Copy all properties",
            onClick: () => {
              (0, I.JG)(em(r))
            }
          }), (0, n.jsx)(f.Z.Icon, {
            icon: m.k$p,
            tooltip: "Close",
            onClick: l
          })]
        }), (0, n.jsxs)(D.E, {
          className: G.commonProperties,
          children: [(0, n.jsx)(D.Z9, {
            name: "Timestamp",
            copyValue: b.toISOString(),
            children: (0, n.jsx)("time", {
              dateTime: b.toISOString(),
              title: (0, w.vc)(b, "LLLL"),
              children: (0, w.vc)(b, "L h:mm:ss.SSS")
            })
          }), (0, n.jsx)(D.Z9, {
            name: "Log Type",
            copyValue: d,
            children: (0, n.jsx)("code", {
              children: d
            })
          }), (0, n.jsx)(D.Z9, {
            name: "Native ID",
            copyValue: null != (t = null == u ? true : u.toString()) ? t : "null",
            children: (0, n.jsx)("code", {
              children: null != (a = null == u ? true : u.toString()) ? a : "null"
            })
          }), (0, n.jsx)(D.Z9, {
            name: "Data",
            copyValue: em(h),
            children: (0, n.jsx)("code", {
              children: em(h)
            })
          }), (0, n.jsx)(D.Z9, {
            name: "Stack Trace",
            copyValue: x,
            children: (0, n.jsx)("code", {
              children: x.split("\n").map((e, t) => {
                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                if (null != a) {
                  let [, e, r, l, i] = a, s = r.split(/[\\/]/).pop();
                  return ex.includes(e.trim()) ? null : (0, n.jsxs)("div", {
                    children: [(0, n.jsx)("span", {
                      className: G.stackTraceFunction,
                      children: e.trim()
                    }), !eh.includes(null != s ? s : "") && (0, n.jsxs)(n.Fragment, {
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
              })
            })
          })]
        })]
      })
    }
  }],
  eb = {
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
  } = (0, Chunk393238.ZP)(), s = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.DEV_isOverlayModuleLoggingEnabled()), [o, c] = Chunk647438.useState(Chunk913527), [u, x] = Chunk647438.useState(Object.keys(eo)), [p, v] = Chunk647438.useState(""), f = Chunk647438.useMemo(() => 0 === exports ? [] : module.filter(e => {
    for (let t of u) {
      let {
        filter: a
      } = eo[t];
      if (a(e)) returntrue
    }
    returnfalse
  }), [module, Chunk755721, exports]), [g, j] = Chunk647438.useState(Chunk984370), [_, y] = Chunk647438.useState(null), N = Chunk647438.useMemo(() => module.find(e => e.key === _), [module, Chunk371651]), O = Chunk647438.useCallback(e => {
    j(e)
  }, []), {
    renderSelectedTab: E
  } = (0, Chunk621060.ZP)({
    tabs: ep
  }, []);
  (0, Chunk301801.BO)(Chunk593472, Chunk984370, Chunk352527, eb, [module]);
  let S = Chunk647438.useCallback(e => {
    c(e), h.Z.setModuleLogging(e)
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
  let [P, w] = Chunk647438.useState(false), k = Chunk647438.useRef(null), Z = Chunk647438.useCallback(() => {
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
    className: Chunk454741.panelContainer,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk454741.panelGroup,
      children: [(0, Chunk951288.jsxs)("div", {
        className: i()(Chunk454741.toolbar, Chunk454741.filtersToolbar),
        children: [(0, Chunk951288.jsxs)("div", {
          title: "Toggles the Polling of Native",
          className: Chunk454741.pollBreadcrumbs,
          children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
            checked: o,
            onChange: e => S(e)
          }), (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            color: "currentColor",
            children: "Poll Native"
          })]
        }), Object.entries(eo).map(e => {
          let [t, a] = e;
          return (0, n.jsx)(m.P3F, {
            className: i()(G.filter, u.includes(t) && G.activeFilter),
            onClick: () => {
              x(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t])
            },
            children: (0, n.jsx)(m.Text, {
              variant: "text-sm/normal",
              color: "currentColor",
              children: a.label
            })
          }, t)
        }), (0, Chunk951288.jsxs)(Chunk481060.P3F, {
          className: Chunk454741.copyAll,
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
        className: Chunk454741.toolbar,
        children: (0, Chunk951288.jsx)(Chunk481060.E1j, {
          className: Chunk454741.searchBar,
          query: Chunk593472,
          onChange: Chunk594190,
          onClear: () => Chunk594190(""),
          placeholder: "Regex search by breadcrumb name and data"
        })
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: i()(Chunk454741.panelGroup, Chunk454741.tableContainer),
      children: (0, Chunk951288.jsx)(Chunk681619.Z, {
        columns: ed,
        data: Chunk427860,
        selectedRowKey: null != Chunk371651 ? Chunk371651 : true,
        onClickRow: e => y(e.key)
      })
    }), null != Chunk886118 && (0, Chunk951288.jsx)(Chunk484036.Z, {
      className: i()(Chunk454741.panelGroup, Chunk454741.subPanel),
      minHeight: 100,
      initialHeight: null != Chunk120356 ? Chunk120356 / 3 : 300,
      children: Chunk355863({
        breadcrumb: Chunk886118,
        onClose: () => Chunk829907(null)
      })
    })]
  })
}

function ef() {
  return (0, Chunk951288.jsx)(Chunk481060.w0Z, {
    children: (0, Chunk951288.jsxs)("div", {
      className: i()(Chunk451429.panel, Chunk454741.subPanel),
      children: [(0, Chunk951288.jsx)(el, {}), (0, Chunk951288.jsx)(es, {}), (0, Chunk951288.jsx)(ei, {}), (0, Chunk951288.jsx)(er, {}), (0, Chunk951288.jsx)(et, {}), (0, Chunk951288.jsx)(en, {})]
    })
  })
}

function eg() {
  let [e, t] = Chunk647438.useState("state");
  return (0, Chunk951288.jsxs)("div", {
    className: i()(Chunk451429.panel, Chunk454741.panel),
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk454741.toolbar,
      children: [(0, Chunk951288.jsx)(Chunk481060.P3F, {
        className: i()(Chunk454741.paneOption, "state" === module && Chunk454741.activePaneOption),
        onClick: () => exports("state"),
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Client State"
        })
      }), (0, Chunk951288.jsx)(Chunk481060.P3F, {
        className: i()(Chunk454741.paneOption, "logging" === module && Chunk454741.activePaneOption),
        onClick: () => exports("logging"),
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Logging"
        })
      })]
    }), "state" === module && (0, Chunk951288.jsx)(ef, {}), "logging" === module && (0, Chunk951288.jsx)(ev, {})]
  })
}