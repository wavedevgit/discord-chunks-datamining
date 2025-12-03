/** Chunk was on 74815 **/
/** chunk id: 17060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => K
}), require("./415506.js"), require("./388685.js"), require("./539854.js"), require("./642613.js"), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk348327 = require("./348327.js"),
  i = require.n(Chunk348327),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk379649 = require("./379649.js"),
  Chunk481060 = require("./481060.js"),
  Chunk13245 = require("./13245.js"),
  Chunk593472 = require("./593472.js"),
  Chunk493773 = require("./493773.js"),
  Chunk579806 = require("./579806.js"),
  Chunk353926 = require("./353926.js"),
  Chunk594190 = require("./594190.js"),
  Chunk953848 = require("./953848.jsx"),
  Chunk77498 = require("./77498.js"),
  Chunk19780 = require("./19780.js"),
  Chunk808506 = require("./808506.js"),
  Chunk626135 = require("./626135.js"),
  Chunk499533 = require("./499533.js"),
  Chunk709054 = require("./709054.js"),
  Chunk145597 = require("./145597.js"),
  Chunk837268 = require("./837268.js"),
  Chunk307149 = require("./307149.js"),
  Chunk475866 = require("./475866.js"),
  Chunk371651 = require("./371651.js"),
  Chunk610394 = require("./610394.js"),
  Chunk338949 = require("./338949.js"),
  Chunk509140 = require("./509140.js"),
  Chunk388627 = require("./388627.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk603841 = require("./603841.js");

function M(e, t) {
  return i()(e, t)
}
let R = new Chunk709054.SnowflakeSequence,
  J = {},
  F = new Set([Chunk593472.Jx.BORDERLESS_FULLSCREEN, Chunk593472.Jx.FULLSCREEN, Chunk593472.Jx.WINDOWED, Chunk593472.Jx.MAXIMIZED, Chunk593472.Jx.MINIMIZED, Chunk593472.Jx.UNKNOWN]);

function L(e) {
  for (let t of Object.values(Z.default.getClosedTrackedGamesHistory()))
    if (t.applicationId === e.id || t.gameName === e.name) return t;
  return null
}

function U(e) {
  var t, n, l;
  let r = L(e);
  return {
    gameId: e.id,
    gameName: e.name,
    gamePid: null != (t = null == r ? true : r.pid) ? t : true,
    fullscreenType: null != (n = null == r ? true : r.fullscreenType) ? n : true,
    trackedGame: null != r ? r : true,
    persistentGame: e,
    runningGame: null != e.name && null != (l = p.ZP.getGameForName(e.name)) ? l : true
  }
}

function W(e) {
  var t, n;
  let [l] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [_.Z];
  if (null == e) return null;
  if (null != e.gameId) {
    let t = l.getDetectableGame(e.gameId);
    if (null != t) return t
  }
  let r = null != (t = e.runningGame) ? t : e.persistentGame;
  if (null != r) {
    let e = l.getGameByGameData(r);
    if (null != e) return e
  }
  if (null != e.gameName) {
    let t = l.getGameByName(e.gameName);
    if (null != t) return t
  }
  if (null == e || null == e.gameName) return null;
  let a = null != (n = e.gameId) ? n : function(e) {
    if (null != J[e]) return J[e];
    let t = Date.now(),
      n = null;
    try {
      R.willOverflowNext() && R.reset(), n = S.default.fromTimestampWithSequence(t, R)
    } catch (e) {
      R.reset(), n = S.default.fromTimestampWithSequence(t, R)
    }
    if (null == n) throw Error("Failed to generate snowflake id");
    return J[e] = n, n
  }(e.gameName);
  return {
    id: S.default.cast(a),
    name: e.gameName,
    description: true,
    icon: true,
    icon_hash: true,
    cover_image_hash: true,
    aliases: [],
    executables: [],
    overlay: false,
    overlayWarn: false,
    overlayCompatibilityHook: false,
    hook: true,
    supportsOutOfProcessOverlay: false,
    thirdPartySkus: [],
    themes: [],
    linkedApplications: true
  }
}

function A(e) {
  let {
    selectedGame: t,
    setSelectedGame: n
  } = e, r = (0, o.Wu)([_.Z, p.ZP], () => {
    let e = _.Z.games,
      t = e.reduce((e, t) => (e[t.id] = t, e), {});
    return [...e, ...p.ZP.getGamesSeen(false).reduce((e, n) => {
      let l = n.id;
      if (null != l && null != t[l]) return e;
      let r = W(U(n), true);
      if (null != r) {
        if (null != t[r.id]) return e;
        e.push(r)
      }
      return e
    }, [])]
  }, []), a = (0, o.e7)([_.Z], () => W(t, [_.Z]), [t]);
  return (0, l.jsx)(y.g, {
    games: r,
    selectedGame: null != a ? a : null,
    onGameSelected: e => {
      null != e ? n(function(e) {
        var t, n, l;
        let r = L(e);
        return {
          gameId: e.id,
          gameName: e.name,
          gamePid: null != (t = null == r ? true : r.pid) ? t : true,
          fullscreenType: null != (n = null == r ? true : r.fullscreenType) ? n : true,
          trackedGame: null != r ? r : true,
          runningGame: null != e.name && null != (l = p.ZP.getGameForName(e.name)) ? l : true
        }
      }(e)) : n(null)
    },
    placeholder: D.intl.string(D.t.b1IW2e)
  })
}
let B = {
  HandleFocusChanged: (e, t) => {
    var n;
    if (!(0, I._R)(e, "HandleFocusChanged")) returntrue;
    let l = null != t && null != (n = G.Z.getKnownWindowHandlesForPID(t)) ? n : new Set,
      {
        focusedPid: r,
        focusedWindowHandle: a
      } = e.data;
    return null != a && null != r && r !== P.UNSET_PID && !!l.has(a) && r === t
  },
  EventHook: (e, t) => {
    var n;
    if (!(0, I._R)(e, "EventHook")) returntrue;
    let l = null != t && null != (n = G.Z.getKnownWindowHandlesForPID(t)) ? n : new Set;
    try {
      let {
        receivedWindow: n,
        targetPid: r
      } = e.data;
      if (null != n && l.has(n)) return null != r && r === t
    } finally {
      returnfalse
    }
  }
};

function K(e) {
  var t, a;
  let {
    onClose: i,
    transitionState: y,
    location: _,
    appContext: S
  } = e, R = (0, o.e7)([x.default], () => x.default.getFocusedPID()), J = null != R ? R : (0, P.getPID)(), W = (0, o.e7)([Z.default], () => Z.default.getTrackedGameByPid(J), [J]), [K, z] = r.useState(null), [H, q] = r.useState(""), X = function() {
    let e = (0, j.II)(),
      t = (0, o.e7)([x.default], () => x.default.getFocusedPID()),
      n = null != t ? t : (0, P.getPID)(),
      l = (0, o.e7)([Z.default], () => Z.default.getTrackedGameByPid(n), [n]),
      r = (0, o.e7)([p.ZP], () => p.ZP.getVisibleGame()),
      a = (0, o.e7)([p.ZP], () => p.ZP.getGamesSeen(false)[0]);
    switch (true) {
      case null != l:
        return {
          gameId: null != (u = l.applicationId) ? u : true, gameName: null != (s = l.gameName) ? s : true, gamePid: l.pid, fullscreenType: l.fullscreenType, trackedGame: l, runningGame: null != l.gameName && null != (d = p.ZP.getGameForName(l.gameName)) ? d : true
        };
      case null != e:
        var i, u, s, d, c, m;
        let g = p.ZP.getGameForName(e.name),
          f = null == g ? true : g.pid;
        return {
          gameId: e.id, gameName: e.name, gamePid: null == g ? true : g.pid, fullscreenType: null != (c = null == g ? true : g.fullscreenType) ? c : true, runningGame: null != g ? g : true, trackedGame: null != f && null != (m = Z.default.getTrackedGameByPid(f)) ? m : true
        };
      case null != r:
        return {
          gameId: r.id, gameName: r.name, gamePid: r.pid, fullscreenType: r.fullscreenType, trackedGame: null != (i = L(r)) ? i : true, runningGame: r
        };
      default:
        return null != a ? U(a) : null
    }
  }(), [V, Y] = r.useState(null != (a = null != (t = null == X ? true : X.fullscreenType) ? t : null == W ? true : W.fullscreenType) ? a : null), [Q, $] = r.useState(X), [ee, et] = r.useState(false), [en, el] = r.useState(false), [er, ea] = r.useState(false), {
    nativeState: ei,
    breadcrumbs: [eu]
  } = ((0, g.ZP)(() => (c.Z.setModuleLogging(true), c.Z.setStateDebugging(true), () => {
    c.Z.setModuleLogging(false), c.Z.setStateDebugging(false)
  })), (0, o.e7)([w.Z], () => ({
    nativeState: w.Z.getDebuggingState(),
    breadcrumbs: w.Z.getOverlayLoggingBreadcrumbs()
  }), [], M)), eo = r.useMemo(() => {
    let e = {
      game_crashes_occurred: D.t["1UWmCV"],
      poor_performance: D.t["4owu+4"],
      overlay_unresponsive: D.t.Q8Z0xo,
      keybindings_not_working: D.t.UnzaZs,
      alt_tabbing_issues: D.t["/sG9Sf"],
      game_not_interactable: D.t["+18gq6"],
      game_forced_minimized: D.t.dabM8C,
      other: D.t["UhbPA+"]
    };
    return Object.keys(e).map(t => ({
      label: D.intl.string(e[t]),
      value: t
    }))
  }, []), es = r.useMemo(() => {
    let e = {
      [m.Jx.FULLSCREEN]: D.t.AjBsPe,
      [m.Jx.WINDOWED]: D.t["0oYq2i"],
      [m.Jx.BORDERLESS_FULLSCREEN]: D.t.NwNvjf,
      [m.Jx.MINIMIZED]: D.t.Wypflu,
      [m.Jx.MAXIMIZED]: D.t["MUX2+G"],
      [m.Jx.UNKNOWN]: D.t.QPOep8
    };
    return [...F].map(t => ({
      label: D.intl.string(e[t]),
      value: t
    }))
  }, []), ed = async () => {
    el(true), await (0, s._v)(500), el(false)
  }, ec = async () => {
    var e, t, r, a, u;
    if (null === K && 0 === H.length) {
      ea(true), ed();
      return
    }
    et(true);
    let o = null != (r = x.default.getFocusedPID()) ? r : (0, P.getPID)(),
      c = Z.default.getTrackedGameByPid(o),
      g = G.Z.getPopoutInitializationStages(),
      p = (null == c ? true : c.overlayMethod) != null ? E.gl[c.overlayMethod] : null,
      y = null != (a = null == c ? true : c.fullscreenType) ? a : m.Jx.UNKNOWN,
      w = (0, I.y2)(eu, e => {
        for (let t of Object.values(B)) try {
          if (!t(e, o)) returnfalse
        } catch (e) {
          returnfalse
        }
        returntrue
      }),
      j = O.Z.getRecentActions(10),
      D = N.Z.getRecentExperimentBuckets(v.Z.getAllExperimentAssignments(), new Date(Date.now() - 7776e6)),
      C = (null == c ? true : c.fullscreenHistory) == null ? null : Object.entries(c.fullscreenHistory).sort((e, t) => {
        let [n] = e, [l] = t;
        return Number(l) - Number(n)
      }).map(e => {
        let [t, n] = e;
        return "".concat(t, ":").concat(m.Jx[n])
      }),
      M = {
        issue_category: K,
        details: H,
        overlay_render_method: p,
        hardware_display_count: null != (u = await (null === f.Z || true === f.Z || null == (t = f.Z.hardware) || null == (e = t.getDisplayCount) ? true : e.call(t))) ? u : null,
        detected_fullscreen_type: m.Jx[y],
        application_id: null == c ? true : c.applicationId,
        application_name: null == c ? true : c.gameName,
        game_pid: null == c ? true : c.pid,
        recent_overlay_flux_actions: j,
        overlay_module_state: null == c ? true : c.state,
        overlay_native_state: JSON.stringify(ei),
        overlay_module_oop_initialization_state: JSON.stringify(g),
        overlay_module_error_message: k.Z.errorMessage,
        overlay_module_breadcrumbs: JSON.stringify(w),
        fullscreen_history_for_pid: C,
        media_session_id: h.Z.getMediaSessionId(),
        recent_experiment_buckets: JSON.stringify(D),
        location: _
      };
    await b.default.track(T.rMx.OVERLAY_BUG_REPORT, M), await (0, s._v)(1e3), et(false), null == i || i(), (0, d.ZDy)(async () => {
      let {
        default: e
      } = await n.e("86974").then(n.bind(n, 251889));
      return t => (0, l.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({}, t))
    }, {
      contextKey: (0, d.VnL)(S)
    })
  };
  return (0, g.ZP)(() => {
    b.default.track(T.rMx.OPEN_MODAL, {
      type: "overlay_bug_reporter_modal",
      location: _
    })
  }), (0, l.jsx)(u.Modal, {
    transitionState: y,
    title: D.intl.string(D.t.OKmenM),
    actions: [{
      text: D.intl.string(D.t["ETE/oC"]),
      onClick: i,
      variant: "secondary",
      disabled: ee
    }, {
      text: D.intl.string(D.t.geKm7t),
      onClick: ec,
      variant: "primary",
      loading: ee
    }],
    onClose: i,
    children: (0, l.jsxs)("div", {
      className: C.modalContent,
      children: [(0, l.jsxs)("div", {
        className: C.itemContainer,
        children: [(0, l.jsx)(d.UkV, {
          isShaking: en,
          intensity: 1.5,
          children: (0, l.jsx)(d.Text, {
            variant: "text-md/medium",
            color: er ? "text-feedback-critical" : "text-primary",
            children: D.intl.string(D.t.Trx7eJ)
          })
        }), (0, l.jsx)(d.PhF, {
          placeholder: D.intl.string(D.t.mKTzjI),
          options: eo,
          isSelected: e => e === K,
          select: e => {
            z(e), ea(false), el(false)
          },
          serialize: e => e
        }), er && (0, l.jsx)(d.Text, {
          variant: "text-xs/semibold",
          color: "text-feedback-critical",
          children: D.intl.string(D.t["5cqa9J"])
        })]
      }), (0, l.jsxs)("div", {
        className: C.itemContainer,
        children: [(0, l.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "text-primary",
          children: D.intl.string(D.t.iZufAY)
        }), (0, l.jsx)(d.Kx8, {
          autosize: true,
          value: H,
          maxLength: 1e3,
          showCharacterCount: false,
          placeholder: D.intl.string(D.t["68mJXW"]),
          onChange: q
        }), (0, l.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: D.intl.string(D.t.TzkM2a)
        })]
      }), (0, l.jsx)("div", {
        className: C.hr
      }), (0, l.jsxs)("div", {
        className: C.itemContainer,
        children: [(0, l.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "text-primary",
          children: D.intl.string(D.t["8+SU+a"])
        }), (0, l.jsx)(A, {
          selectedGame: Q,
          setSelectedGame: $
        }), (0, l.jsx)(d.PhF, {
          placeholder: D.intl.string(D.t.IjlqrF),
          options: es,
          isSelected: e => e === V,
          select: Y,
          serialize: e => "".concat(e)
        })]
      })]
    })
  })
}