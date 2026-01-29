/** Chunk was on 65298 **/
/** chunk id: 484762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => eR
}), require("./896048.js"), require("./264879.js"), require("./321073.js"), require("./457529.js"), require("./747238.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk391973 = require("./391973.js"),
  Chunk684013 = require("./684013.js"),
  Chunk56562 = require("./56562.js"),
  Chunk765671 = require("./765671.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk15285 = require("./15285.js"),
  Chunk742589 = require("./742589.jsx"),
  Chunk41984 = require("./41984.js"),
  Chunk181435 = require("./181435.js"),
  Chunk435736 = require("./435736.js"),
  Chunk833551 = require("./833551.js"),
  Chunk515183 = require("./515183.js"),
  Chunk395011 = require("./395011.js"),
  Chunk127242 = require("./127242.js"),
  Chunk869014 = require("./869014.js"),
  Chunk379078 = require("./379078.js"),
  Chunk704554 = require("./704554.js"),
  Chunk528772 = require("./528772.js"),
  Chunk555528 = require("./555528.js"),
  Chunk157257 = require("./157257.js"),
  Chunk532624 = require("./532624.js"),
  Chunk242286 = require("./242286.js"),
  Chunk957565 = require("./957565.js"),
  Chunk405269 = require("./405269.js"),
  Chunk927813 = require("./927813.js"),
  Chunk996439 = require("./996439.js"),
  Chunk350535 = require("./350535.js"),
  Chunk9302 = require("./9302.js"),
  Chunk708403 = require("./708403.jsx"),
  Chunk260880 = require("./260880.jsx"),
  Chunk303054 = require("./303054.jsx"),
  Chunk231643 = require("./231643.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk644434 = require("./644434.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk167056 = require("./167056.js"),
  Chunk661251 = require("./661251.js");

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

function Z(e, t) {
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
    [Chunk652215.uss.CLICK_ZONE_DEBUG]: e => Z($({
      type: q.uss.CLICK_ZONE_DEBUG,
      id: (0, c.A)(),
      layoutId: e,
      anchor: {
        top: .35,
        right: .35
      },
      size: {
        width: 100,
        height: 100
      }
    }, k.A.getWidgetDefaultSettings(q.uss.CLICK_ZONE_DEBUG)), {
      pinned: true
    }),
    [Chunk652215.uss.PERFORMANCE_DEBUG]: e => Z($({
      type: q.uss.PERFORMANCE_DEBUG,
      id: (0, c.A)(),
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
    }, k.A.getWidgetDefaultSettings(q.uss.PERFORMANCE_DEBUG)), {
      pinned: true
    })
  },
  et = {};

function en(e) {
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
  }, [n]), (0, a.jsxs)(m.$n, {
    look: m.$n.Looks.LINK,
    color: m.$n.Colors.LINK,
    size: m.$n.Sizes.MIN,
    onClick: function() {
      (0, L.C)(t, () => r(true))
    },
    className: J.DT,
    children: ["Application Id: ", t, " ", n ? Y.intl.string(Y.t.t5VZ88) : null]
  })
}
let ea = Chunk64700.memo(function(e) {
    let {
      trackedGame: t
    } = e, n = (0, d.bG)([j.Ay], () => j.Ay.getGameOrTransformedSubgameForPID(t.pid)), l = (0, d.bG)([R.A], () => R.A.getGameForPID(t.pid)), r = (0, d.bG)([j.Ay], () => null == n ? null : j.Ay.getGameOverlayStatus(n));
    return (0, a.jsxs)("div", {
      className: J.st,
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
        children: ["fullscreenType: ", (0, O.wR)(t.fullscreenType)]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["state: ", t.state]
      }), (0, a.jsxs)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"]
      }), (0, a.jsxs)("div", {
        className: J.st,
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
          children: ["overlayMethod: ", (0, O.gK)(t.overlayMethod)]
        })]
      }), null != r && (0, a.jsxs)("div", {
        className: J.st,
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
          children: ["raw overlayMethod: ", (0, O.gK)(r.overlayMethod)]
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
  el = Chunk64700.memo(function(e) {
    let {
      pid: t
    } = e, n = (0, d.cf)([M.default], () => M.default.getOverlayPIDStatuses()), l = (0, d.cf)([S.default], () => S.default.getTrackedGames()), r = (0, d.bG)([M.default], () => M.default.isInputLocked(t), [t]), i = (0, d.bG)([M.default], () => M.default.DEV_isInputLockedV3(t), [t]), s = (0, d.bG)([M.default], () => M.default.DEV_isInputLocked(t), [t]), o = (0, d.bG)([M.default], () => M.default.isReady(t), [t]);
    return (0, a.jsxs)("div", {
      className: J.st,
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

function er(e) {
  let t, n = (t = Object.values((0, d.yK)([k.A], () => k.A.getWidgetsForLayout(Q.G))), t.find(t => t.type === e));
  return [n, () => {
    if (null != n)(0, x.uv)(n.id);
    else {
      let t = ee[e];
      if (null == t) return;
      let n = t(Q.G);
      (0, x.jn)(n)
    }
  }]
}

function ei(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return t ? "".concat(e.toFixed(2), "ms") : (0, U.i$)(o()(e), "h:mm:ss.SSS")
}
let es = Chunk64700.memo(function(e) {
  let {
    pid: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, a, l, r = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
      return r
    }
    if (r = function(e, t) {
        if (null == e) return {};
        var n, a, l = {},
          r = Object.getOwnPropertyNames(e);
        for (a = 0; a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
    return r
  }(e, ["pid"]), l = (0, d.bG)([S.default], () => {
    var e, n;
    if (null == t) return "Unknown";
    let a = null == (n = S.default.getTrackedGameByPid(t)) ? true : n.gameName;
    return null != a ? (et[t] = a, a) : null != (e = et[t]) ? e : "Unknown"
  }, [t]);
  return (0, a.jsx)(p.Text, Z($({}, n), {
    variant: "text-md/semibold",
    color: "text-strong",
    children: l
  }))
});

function eo() {
  let e = (0, d.bG)([E.A], () => E.A.hasRenderDebugMode(y.x7.TrackFocusPIDs)),
    t = (0, d.yK)([S.default], () => S.default.getDevToolsFocusedPidsWithTimestamp());
  return (0, a.jsxs)("div", {
    className: J.st,
    children: [(0, a.jsxs)("div", {
      className: J.Iv,
      children: [(0, a.jsx)(p.dOG, {
        checked: e,
        onChange: () => void g.A.setRenderDebugMode(!E.A.hasRenderDebugMode(y.x7.TrackFocusPIDs), y.x7.TrackFocusPIDs),
        label: "Track Focus Pids"
      }), (0, a.jsx)(p.DUT, {
        className: J.LL,
        onClick: () => g.A.clearTrackedPids(),
        children: (0, a.jsx)(p.ucK, {
          size: "md",
          color: "currentColor"
        })
      })]
    }), (0, a.jsxs)(p.IpV, {
      className: i()(J.st, J.XG),
      children: [0 === t.length && (0, a.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: "No recent focused pids"
      }), [...t].reverse().map(e => {
        var t;
        let [n, r, i] = e;
        return (0, a.jsx)(l.Fragment, {
          children: (0, a.jsx)(u.m_, {
            position: "left",
            text: i === y.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
            children: (0, a.jsx)("div", {
              children: (0, a.jsxs)(p.Text, {
                variant: "text-sm/medium",
                color: i === y.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                children: [(0, a.jsx)(es, {
                  pid: r,
                  tag: "span"
                }), " - ", null != (t = null == r ? true : r.toString()) ? t : "null", " @ ", ei(n)]
              })
            })
          })
        }, "".concat(r, "-").concat(n))
      })]
    })]
  })
}
let ec = Chunk64700.memo(function(e) {
    let {
      pid: t
    } = e, n = (0, d.bG)([S.default, j.Ay], () => {
      var e, n;
      if (null == t) return null;
      let a = null == (n = S.default.getTrackedGameByPid(t)) ? true : n.fullscreenType;
      if (null != a) return a;
      let l = j.Ay.getGameOrTransformedSubgameForPID(t);
      return null != (e = null == l ? true : l.fullscreenType) ? e : f.aI.UNKNOWN
    }, [t]);
    return (0, a.jsxs)(p.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      tag: "span",
      children: ["Original Screen Type: ", null != n ? (0, O.wR)(n) : "Unknown"]
    })
  }),
  ed = Chunk64700.memo(function() {
    let e = (0, d.cf)([S.default], () => S.default.getTrackedGames()),
      [t, n] = l.useState({}),
      r = l.useRef(null);
    return l.useEffect(() => (r.current = setInterval(async () => {
      let e = j.Ay.getRunningGames(),
        t = [],
        a = Date.now();
      for (let n of e) t.push((0, O.E1)(n.pid, 0).then(e => [n.pid, e, a]));
      let l = await Promise.all(t);
      n(e => l.reduce((e, t) => {
        var n, a;
        let [l, r, i] = t;
        if (null == r || null == l) return e;
        let s = null != (n = e[l]) ? n : [],
          o = null == (a = s[s.length - 1]) ? true : a.screenType;
        return (0 === s.length || o !== r) && (e[l] = [...s, {
          pid: l,
          screenType: r,
          timestamp: i
        }]), e
      }, $({}, e)))
    }, +B.A.Millis.SECOND), () => clearInterval(r.current)), []), (0, a.jsx)(u.m_, {
      position: "left",
      text: "The most recent screen types we've logged, indexed by pid",
      children: (0, a.jsx)("div", {
        children: (0, a.jsxs)(p.IpV, {
          className: i()(J.st, J.XG),
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
                timestamp: l
              } = t;
              return (0, a.jsx)(p.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: "".concat(n, ":").concat((0, O.wR)(n), " @ ").concat(ei(l))
              }, "".concat(e.pid, "-").concat(n, "-").concat(l))
            })]
          }, e.pid))]
        })
      })
    })
  }),
  eu = Chunk64700.memo(function() {
    var e, t;
    let n = (0, d.cf)([S.default], () => S.default.getTrackedGames()),
      l = (0, V.getPID)(),
      r = (0, d.bG)([S.default], () => S.default.isOverlayOOPEnabledForPid(l), [l]),
      [i, s] = (0, d.yK)([P.A], () => [P.A.enabled, P.A.keepOpen]),
      o = (0, d.bG)([M.default], () => M.default.getFocusedPID()),
      c = (0, d.bG)([M.default], () => M.default.isFocusedPidOutOfProcess());
    return (0, a.jsxs)("div", {
      className: J.st,
      children: [0 === Object.keys(n).length && (0, a.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: "No tracked game times"
      }), Object.values(n).map(e => (0, a.jsx)(el, {
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
          children: ["processPid: ", null != (t = null == l ? true : l.toString()) ? t : "unknown"]
        }), (0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: ["isOOPEnabledForPid: ", r ? "Yes" : "No"]
        }), (0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: ["SoundboardOverlay.enabled: ", i ? "Yes" : "No"]
        }), (0, a.jsxs)(p.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: ["SoundboardOverlay.keepOpen: ", s ? "Yes" : "No"]
        })]
      })]
    })
  }),
  em = [{
    mode: Chunk41984.x7.ClickZones,
    label: "Click Zone Debug Mode",
    tooltip: "Enables a red border around click zones to help with debugging."
  }, {
    mode: Chunk41984.x7.WidgetAreas,
    label: "Render Debug Mode",
    tooltip: "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets"
  }, {
    mode: Chunk41984.x7.WindowContainer,
    label: "Window Container Debug Mode",
    tooltip: "Enables a border the overlay window"
  }, {
    mode: Chunk41984.x7.DisabledGPUBoost,
    label: "Disable GPU Boost",
    tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources."
  }, {
    mode: Chunk41984.x7.ForceGPUBoost,
    label: "Force GPU Boost",
    tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources."
  }, {
    mode: Chunk41984.x7.OverlayRafManagerForceEnabled,
    label: "Overlay SmartRAF",
    tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds."
  }, {
    mode: Chunk41984.x7.LegacyOverlayLogging,
    label: "Legacy Overlay Logging",
    tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console."
  }],
  ep = Chunk64700.memo(function() {
    let [e, t] = er(q.uss.CLICK_ZONE_DEBUG), [n, r] = er(q.uss.PERFORMANCE_DEBUG), i = (0, d.bG)([E.A], () => E.A.getRenderDebugModes()), [s, o] = l.useState({});
    return l.useEffect(() => {
      let e = setInterval(() => {
        o({})
      }, 200);
      return () => clearInterval(e)
    }, []), (0, a.jsx)("div", {
      className: J.st,
      children: em.map(s => {
        let o = s.mode === y.x7.OverlayRafManagerForceEnabled ? "".concat(s.label, " (").concat(N.A.getLastRAFCallbackReason(), ")") : s.label,
          c = () => s.mode === y.x7.ClickZones ? null != e : s.mode === y.x7.WidgetAreas ? null != n : i.has(s.mode);
        return (0, a.jsx)(l.Fragment, {
          children: (0, a.jsx)(p.dOG, {
            checked: c(),
            onChange: () => {
              var e;
              let n = c();
              s.mode === y.x7.ClickZones && t(), s.mode === y.x7.WidgetAreas && r(), e = s.mode, g.A.setRenderDebugMode(!n, e)
            },
            label: o,
            description: s.tooltip
          })
        }, s.mode)
      })
    })
  }),
  eh = Chunk64700.memo(function() {
    let e = (0, d.cf)([S.default], () => S.default.getTrackedGames()),
      t = (0, d.bG)([j.Ay], () => j.Ay.getRunningGames()).filter(t => null == e[t.pid]);
    return (0, a.jsxs)(a.Fragment, {
      children: [t.length > 0 && (0, a.jsx)(u.m_, {
        position: "left",
        text: "Games that are running but not tracked by the overlay",
        children: (0, a.jsx)("div", {
          children: (0, a.jsxs)("div", {
            className: J.st,
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
      }), (0, a.jsx)(u.m_, {
        position: "left",
        text: "The current running games process information",
        children: (0, a.jsx)("div", {
          children: (0, a.jsxs)("div", {
            className: J.st,
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
  ex = Chunk64700.memo(function() {
    let e = (0, d.bG)([S.default], () => S.default.getForcedRenderMode()),
      [t, n] = l.useState(e),
      r = [{
        label: y.V6.UNSET,
        value: y.V6.UNSET,
        id: y.V6.UNSET
      }, {
        label: y.V6.IN_PROCESS_V2,
        value: y.V6.IN_PROCESS_V2,
        id: y.V6.IN_PROCESS_V2
      }, {
        label: y.V6.OUT_OF_PROCESS_V3,
        value: y.V6.OUT_OF_PROCESS_V3,
        id: y.V6.OUT_OF_PROCESS_V3
      }, {
        label: y.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        value: y.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        id: y.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION
      }].map(t => Z($({}, t), {
        label: "".concat(t.label, " ").concat(e === t.value ? "(current)" : "")
      }));
    return (0, a.jsx)(p.l6P, {
      label: "Override the overlay render mode",
      value: t,
      options: r,
      onSelectionChange: e => {
        n(e), g.A.forceRenderMode(e)
      },
      selectionMode: "single",
      fullWidth: true
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
  return (0, a.jsxs)(p.EOs, Z($({
    size: p.rIJ.LARGE,
    "aria-label": "Breadcrumb Import"
  }, t), {
    transitionState: t.transitionState,
    parentComponent: "BreadcrumbImportPanel",
    children: [(0, a.jsxs)(p.rQ0, {
      align: v.A.Align.CENTER,
      justify: v.A.Justify.BETWEEN,
      children: [(0, a.jsx)(p.Text, {
        variant: "text-md/bold",
        color: "text-feedback-critical",
        children: "Breadcrumb Import"
      }), (0, a.jsx)(p.s_y, {
        onClick: s
      })]
    }), (0, a.jsx)(p.$mQ, {
      children: (0, a.jsx)("div", {
        className: J.st,
        children: (0, a.jsx)(p.fs1, {
          label: "Paste JSON Here",
          onChange: i,
          value: null != r ? r : "",
          rows: 12
        })
      })
    }), (0, a.jsx)(p.jlY, {
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
let ef = {
  native: {
    label: "Native",
    filter: e => e.type === A.ON.NativeLegacy || e.type === A.ON.NativeOOP
  },
  render: {
    label: "Render",
    filter: e => e.type === A.ON.Renderer
  },
  flux: {
    label: "Flux",
    filter: e => e.type === A.ON.Flux
  },
  client: {
    label: "Client",
    filter: e => e.type === A.ON.OOPModule || e.type === A.ON.LegacyModule
  }
};

function eb(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : A.QJ.Info;
  if (t === A.QJ.Error) return "var(--text-feedback-critical)";
  switch (e) {
    case A.ON.NativeLegacy:
      return "var(--yellow-500)";
    case A.ON.NativeOOP:
      return "var(--green-500)";
    case A.ON.Flux:
      return "var(--brand-400)";
    case A.ON.Renderer:
      return "var(--brand-500)";
    case A.ON.LegacyModule:
      return "var(--yellow-300)";
    case A.ON.OOPModule:
      return "var(--green-300)";
    default:
      return "var(--gray-400)"
  }
}
let ev = [{
  key: "type",
  cellClassName: Chunk167056.SZ,
  renderHeader: () => null,
  render(e) {
    let {
      type: t,
      logType: n
    } = e, l = ej(t);
    return (0, a.jsx)("div", {
      className: J.g$,
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
  cellClassName: Chunk167056.Cm,
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
            case A.QJ.Info:
              return "text-strong";
            case A.QJ.Warning:
              return "text-feedback-warning";
            case A.QJ.Error:
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
  cellClassName: Chunk167056.DK,
  render(e) {
    let {
      timestamp: t
    } = e;
    return (0, U.i$)(o()(t), "h:mm:ss.SSS")
  }
}];

function ej(e) {
  switch (e) {
    case A.ON.NativeLegacy:
      return p.WxK;
    case A.ON.NativeOOP:
      return p.qXB;
    case A.ON.Renderer:
    case A.ON.Flux:
      return p.vH5;
    case A.ON.LegacyModule:
      return p.kN9;
    case A.ON.OOPModule:
      return p.ofK;
    default:
      return p.kN9
  }
}

function e_(e) {
  return JSON.stringify(e, (e, t) => true === t ? null : t, 2)
}
let ey = ["__webpack_require__", "fn"],
  eA = ["web.js", "web.js.map"],
  eC = [{
    id: "details",
    name: "Details",
    group: Chunk231643.fu.NONE,
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
        data: g,
        timestamp: f,
        pid: b
      } = s, v = o()(f), j = ej(u);
      return (0, a.jsxs)(p.ArX, {
        className: J.bW,
        children: [(0, a.jsxs)(_.A, {
          className: i()(X.jr, J.nZ),
          children: [(0, a.jsx)("div", {
            style: {
              color: eb(u, m)
            },
            className: J.nr,
            children: (0, a.jsx)(j, {
              color: "currentColor",
              size: "sm"
            })
          }), (0, a.jsxs)(_.A.Title, {
            wrapperClassName: J.qd,
            children: [d, " (", u, ")", (0, a.jsx)(p.DUT, {
              tag: "span",
              className: J.KE,
              onClick: () => (0, L.C)(d),
              children: (0, a.jsx)(p.TdU, {
                color: "currentColor",
                size: "sm"
              })
            })]
          }), (0, a.jsx)(_.A.Icon, {
            icon: p.TdU,
            tooltip: "Copy all properties",
            onClick: () => {
              (0, L.C)(e_(s))
            }
          }), (0, a.jsx)(_.A.Icon, {
            icon: p.aXh,
            tooltip: "Close",
            onClick: c
          })]
        }), (0, a.jsxs)(W.OA, {
          className: J.ZK,
          children: [(0, a.jsx)(W.mA, {
            name: "Timestamp",
            copyValue: v.toISOString(),
            children: (0, a.jsx)("time", {
              dateTime: v.toISOString(),
              title: (0, U.i$)(v, "LLLL"),
              children: (0, U.i$)(v, "L h:mm:ss.SSS")
            })
          }), (0, a.jsx)(W.mA, {
            name: "Log Type",
            copyValue: m,
            children: (0, a.jsx)("code", {
              children: m
            })
          }), (0, a.jsx)(W.mA, {
            name: "PID",
            copyValue: null != (t = null == b ? true : b.toString()) ? t : "null",
            children: (0, a.jsx)("code", {
              children: null != (n = null == b ? true : b.toString()) ? n : "null"
            })
          }), (0, a.jsx)(W.mA, {
            name: "Native ID",
            copyValue: null != (l = null == h ? true : h.toString()) ? l : "null",
            children: (0, a.jsx)("code", {
              children: null != (r = null == h ? true : h.toString()) ? r : "null"
            })
          }), (0, a.jsx)(W.mA, {
            name: "Data",
            copyValue: e_(g),
            children: (0, a.jsx)("code", {
              children: e_(g)
            })
          }), null != x && (0, a.jsx)(W.mA, {
            name: "Stack Trace",
            copyValue: x,
            children: (0, a.jsx)("code", {
              children: x.split("\n").map((e, t) => {
                let n = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                if (null != n) {
                  let [, e, l, r, i] = n, s = l.split(/[\\/]/).pop();
                  return ey.includes(e.trim()) ? null : (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("span", {
                      className: J.e0,
                      children: e.trim()
                    }), !eA.includes(null != s ? s : "") && (0, a.jsxs)(a.Fragment, {
                      children: [" (", (0, a.jsxs)("span", {
                        className: J.lz,
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
  eS = {
    searchType: Chunk379078.n.REGEX,
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
  } = (0, b.Ay)(), n = (0, d.bG)([E.A], () => E.A.isModuleLoggingEnabled()), [r, s] = l.useState(n), [o, c] = l.useState(false), [u, m] = l.useState(null), [h, x] = l.useState(Object.keys(ef)), [f, v] = (0, d.bG)([E.A], () => E.A.getOverlayLoggingBreadcrumbs(), [], G.D), [j, _] = l.useState(null), y = null != j ? j : f, A = null != j ? false : v;
  l.useEffect(() => {
    0 !== A && (o ? m(y.reduce((e, t) => "game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e, 0)) : m(null))
  }, [o, y, A]);
  let [C, S] = l.useState(""), O = l.useMemo(() => 0 === A ? [] : y.filter(e => {
    if (o && null != u && e.timestamp < u) returnfalse;
    for (let t of h) {
      let {
        filter: n
      } = ef[t];
      if (n(e)) returntrue
    }
    returnfalse
  }), [y, h, u, o, A]), [T, N] = l.useState(O), [w, P] = l.useState(null), k = l.useMemo(() => y.find(e => e.key === w), [y, w]), R = l.useCallback(e => {
    N(e)
  }, []), {
    renderSelectedTab: D
  } = (0, z.Ay)({
    tabs: eC
  }, []);
  (0, I.RT)(C, O, R, eS, [y]);
  let M = l.useCallback(e => {
      s(e), g.A.setModuleLogging(e)
    }, []),
    [U, B] = l.useState(false),
    F = l.useRef(null),
    V = l.useCallback(() => {
      (0, L.C)(JSON.stringify(O)), B(true)
    }, [O]);
  l.useEffect(() => {
    if (U) return F.current = setTimeout(() => {
      B(false)
    }, 4e3), () => {
      null != F.current && clearTimeout(F.current)
    }
  }, [U]);
  let W = l.useCallback(e => {
      _(null != e ? JSON.parse(e) : null)
    }, []),
    q = l.useCallback(e => {
      if (e) return _(null);
      (0, p.qfG)(e => (0, a.jsx)(eg, {
        modalProps: e,
        onClose: t => {
          W(t), e.onClose()
        }
      }), {
        modalKey: "breadcrumb-import-panel"
      }, p.SYi)
    }, [W]);
  return (0, a.jsxs)("div", {
    ref: e,
    className: J.rh,
    children: [(0, a.jsxs)("div", {
      className: J.st,
      children: [(0, a.jsxs)("div", {
        className: i()(J._V, J.XQ),
        children: [(0, a.jsx)("div", {
          title: "Toggles the Polling of Native",
          className: J.iR,
          children: (0, a.jsx)(p.Checkbox, {
            label: "Poll Native",
            checked: r,
            onChange: e => M(e)
          })
        }), (0, a.jsx)("div", {
          title: "Only show breadcrumbs for active games",
          className: J.iR,
          children: (0, a.jsx)(p.Checkbox, {
            label: "Only Active Games",
            checked: o,
            onChange: e => c(e)
          })
        }), (0, a.jsxs)(p.DUT, {
          className: J.ny,
          onClick: V,
          children: [(0, a.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: U ? "Copied" : "Copy All"
          }), U ? (0, a.jsx)(p.A9s, {
            size: "sm",
            color: p.LU0.unsafe_rawColors.GREEN_330.css
          }) : (0, a.jsx)(p.TdU, {
            color: "currentColor",
            size: "sm"
          })]
        }), (0, a.jsx)(p.DUT, {
          className: J.ny,
          onClick: () => q(null != j),
          children: (0, a.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "currentColor",
            children: null != j ? "Clear" : "Import"
          })
        })]
      }), (0, a.jsx)("div", {
        className: i()(J._V, J.XQ),
        children: Object.entries(ef).map(e => {
          let [t, n] = e;
          return (0, a.jsx)(p.DUT, {
            className: i()(J.pb, h.includes(t) && J.bx),
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
      }), (0, a.jsx)("div", {
        className: J._V,
        children: (0, a.jsx)(p.IWV, {
          query: C,
          onChange: S,
          onClear: () => S(""),
          placeholder: "Regex search by breadcrumb name and data"
        })
      })]
    }), (0, a.jsx)("div", {
      className: i()(J.st, J.CZ),
      children: (0, a.jsx)(K.A, {
        columns: ev,
        data: T,
        selectedRowKey: null != w ? w : true,
        onClickRow: e => P(e.key)
      })
    }), null != k && (0, a.jsx)(H.A, {
      className: i()(J.st, J.rf),
      minHeight: 100,
      initialHeight: null != t ? t / 3 : 300,
      children: D({
        breadcrumb: k,
        onClose: () => P(null)
      })
    })]
  })
}
let eT = Chunk64700.memo(function() {
    let e = (0, d.bG)([T.A], () => T.A.getPopoutInitializationStages());
    return (0, a.jsxs)("div", {
      className: J.st,
      children: [(0, a.jsx)("div", {
        className: J.Iv,
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
  eE = Chunk64700.memo(function() {
    let e = (0, d.bG)([E.A], () => E.A.isStateDebuggingEnabled()),
      t = (0, d.bG)([E.A], () => E.A.getDebuggingState());
    return l.useEffect(() => (g.A.setStateDebugging(true), () => {
      g.A.setStateDebugging(false)
    }), []), (0, a.jsxs)("div", {
      className: J.st,
      children: [(0, a.jsx)("div", {
        className: J.Iv,
        children: (0, a.jsx)(p.dOG, {
          checked: e,
          onChange: () => g.A.setStateDebugging(!e),
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

function eN() {
  return (0, a.jsx)(p.ArX, {
    children: (0, a.jsxs)("div", {
      className: i()(X.nd, J.rf),
      children: [(0, a.jsx)(ep, {}), (0, a.jsx)(ex, {}), (0, a.jsx)(eh, {}), (0, a.jsx)(eu, {}), (0, a.jsx)(eo, {}), (0, a.jsx)(ed, {}), (0, a.jsx)(eT, {}), (0, a.jsx)(eE, {})]
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
  eP = Chunk64700.memo(function() {
    let e = (0, C.wW)(),
      t = (0, d.bG)([D.Ay], () => D.Ay.getOverlayKeybind());
    return (0, a.jsxs)("div", {
      className: J.st,
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
          children: JSON.stringify(Z($({}, e), {
            overlayKeybind: (0, F.dI)(t.shortcut)
          }), true, 2)
        })
      }), (0, a.jsx)(p.Heading, {
        variant: "heading-md/semibold",
        children: "Overrides"
      }), (0, a.jsx)(p.l6P, {
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
          (0, C.sw)(ew(e))
        },
        selectionMode: "single",
        fullWidth: true
      }), (0, a.jsx)(p.l6P, {
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
          (0, C.C3)(ew(e))
        },
        selectionMode: "single",
        fullWidth: true
      }), (0, a.jsx)(p.Heading, {
        variant: "heading-md/semibold",
        children: "Actions"
      }), (0, a.jsx)(p.Button, {
        size: "sm",
        text: "Reset isNewOverlayUser",
        onClick: () => (0, C.xc)()
      }), (0, a.jsx)(p.Button, {
        size: "sm",
        text: "Reset isUsingDefaultOverlayKeybind",
        onClick: () => (0, C.tM)()
      })]
    })
  });

function ek() {
  return (0, a.jsx)(p.ArX, {
    children: (0, a.jsx)("div", {
      className: i()(X.nd, J.rf),
      children: (0, a.jsx)(eP, {})
    })
  })
}

function eR() {
  let [e, t] = l.useState("state");
  return l.useEffect(() => (h.h.dispatch({
    type: "OVERLAY_SET_DETAILED_LOGGING",
    enabled: true
  }), () => {
    h.h.dispatch({
      type: "OVERLAY_SET_DETAILED_LOGGING",
      enabled: false
    })
  }), []), (0, a.jsxs)("div", {
    className: i()(X.nd, J.nd),
    children: [(0, a.jsxs)("div", {
      className: J._V,
      children: [(0, a.jsx)(p.DUT, {
        className: i()(J.k0, "state" === e && J.a),
        onClick: () => t("state"),
        children: (0, a.jsx)(p.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Client State"
        })
      }), (0, a.jsx)(p.DUT, {
        className: i()(J.k0, "logging" === e && J.a),
        onClick: () => t("logging"),
        children: (0, a.jsx)(p.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Logging"
        })
      }), (0, a.jsx)(p.DUT, {
        className: i()(J.k0, "experiments" === e && J.a),
        onClick: () => t("experiments"),
        children: (0, a.jsx)(p.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: "Experiments"
        })
      })]
    }), "state" === e && (0, a.jsx)(eN, {}), "logging" === e && (0, a.jsx)(eO, {}), "experiments" === e && (0, a.jsx)(ek, {})]
  })
}