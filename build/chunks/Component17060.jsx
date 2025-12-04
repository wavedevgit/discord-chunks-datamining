/** Chunk was on 74815 **/
/** chunk id: 17060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => z
}), require("./415506.js"), require("./388685.js"), require("./539854.js"), require("./642613.js"), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk348327 = require("./348327.js"),
  i = require.n(Chunk348327),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk379649 = require("./379649.js"),
  Chunk199849 = require("./199849.jsx"),
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

function R(e, t) {
  return i()(e, t)
}
let J = new Chunk709054.SnowflakeSequence,
  L = {},
  F = new Set([Chunk593472.Jx.BORDERLESS_FULLSCREEN, Chunk593472.Jx.FULLSCREEN, Chunk593472.Jx.WINDOWED, Chunk593472.Jx.MAXIMIZED, Chunk593472.Jx.MINIMIZED, Chunk593472.Jx.UNKNOWN]);

function U(e) {
  for (let t of Object.values(G.default.getClosedTrackedGamesHistory()))
    if (t.applicationId === e.id || t.gameName === e.name) return t;
  return null
}

function W(e) {
  var t, n, l;
  let r = U(e);
  return {
    gameId: e.id,
    gameName: e.name,
    gamePid: null != (t = null == r ? true : r.pid) ? t : true,
    fullscreenType: null != (n = null == r ? true : r.fullscreenType) ? n : true,
    trackedGame: null != r ? r : true,
    persistentGame: e,
    runningGame: null != e.name && null != (l = y.ZP.getGameForName(e.name)) ? l : true
  }
}

function B(e) {
  var t, n;
  let [l] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [h.Z];
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
    if (null != L[e]) return L[e];
    let t = Date.now(),
      n = null;
    try {
      J.willOverflowNext() && J.reset(), n = E.default.fromTimestampWithSequence(t, J)
    } catch (e) {
      J.reset(), n = E.default.fromTimestampWithSequence(t, J)
    }
    if (null == n) throw Error("Failed to generate snowflake id");
    return L[e] = n, n
  }(e.gameName);
  return {
    id: E.default.cast(a),
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
  } = e, r = (0, o.Wu)([h.Z, y.ZP], () => {
    let e = h.Z.games,
      t = e.reduce((e, t) => (e[t.id] = t, e), {});
    return [...e, ...y.ZP.getGamesSeen(false).reduce((e, n) => {
      let l = n.id;
      if (null != l && null != t[l]) return e;
      let r = B(W(n), true);
      if (null != r) {
        if (null != t[r.id]) return e;
        e.push(r)
      }
      return e
    }, [])]
  }, []), a = (0, o.e7)([h.Z], () => B(t, [h.Z]), [t]);
  return (0, l.jsx)(_.g, {
    games: r,
    selectedGame: null != a ? a : null,
    onGameSelected: e => {
      null != e ? n(function(e) {
        var t, n, l;
        let r = U(e);
        return {
          gameId: e.id,
          gameName: e.name,
          gamePid: null != (t = null == r ? true : r.pid) ? t : true,
          fullscreenType: null != (n = null == r ? true : r.fullscreenType) ? n : true,
          trackedGame: null != r ? r : true,
          runningGame: null != e.name && null != (l = y.ZP.getGameForName(e.name)) ? l : true
        }
      }(e)) : n(null)
    },
    placeholder: C.intl.string(C.t.b1IW2e)
  })
}
let K = {
  HandleFocusChanged: (e, t) => {
    var n;
    if (!(0, O._R)(e, "HandleFocusChanged")) returntrue;
    let l = null != t && null != (n = w.Z.getKnownWindowHandlesForPID(t)) ? n : new Set,
      {
        focusedPid: r,
        focusedWindowHandle: a
      } = e.data;
    return null != a && null != r && r !== I.UNSET_PID && !!l.has(a) && r === t
  },
  EventHook: (e, t) => {
    var n;
    if (!(0, O._R)(e, "EventHook")) returntrue;
    let l = null != t && null != (n = w.Z.getKnownWindowHandlesForPID(t)) ? n : new Set;
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

function z(e) {
  var t, a;
  let {
    onClose: i,
    transitionState: _,
    location: h,
    appContext: E
  } = e, J = (0, o.e7)([b.default], () => b.default.getFocusedPID()), L = null != J ? J : (0, I.getPID)(), B = (0, o.e7)([G.default], () => G.default.getTrackedGameByPid(L), [L]), [z, H] = r.useState(null), [q, X] = r.useState(""), V = function() {
    let e = (0, T.II)(),
      t = (0, o.e7)([b.default], () => b.default.getFocusedPID()),
      n = null != t ? t : (0, I.getPID)(),
      l = (0, o.e7)([G.default], () => G.default.getTrackedGameByPid(n), [n]),
      r = (0, o.e7)([y.ZP], () => y.ZP.getVisibleGame()),
      a = (0, o.e7)([y.ZP], () => y.ZP.getGamesSeen(false)[0]);
    switch (true) {
      case null != l:
        return {
          gameId: null != (u = l.applicationId) ? u : true, gameName: null != (s = l.gameName) ? s : true, gamePid: l.pid, fullscreenType: l.fullscreenType, trackedGame: l, runningGame: null != l.gameName && null != (d = y.ZP.getGameForName(l.gameName)) ? d : true
        };
      case null != e:
        var i, u, s, d, c, m;
        let g = y.ZP.getGameForName(e.name),
          f = null == g ? true : g.pid;
        return {
          gameId: e.id, gameName: e.name, gamePid: null == g ? true : g.pid, fullscreenType: null != (c = null == g ? true : g.fullscreenType) ? c : true, runningGame: null != g ? g : true, trackedGame: null != f && null != (m = G.default.getTrackedGameByPid(f)) ? m : true
        };
      case null != r:
        return {
          gameId: r.id, gameName: r.name, gamePid: r.pid, fullscreenType: r.fullscreenType, trackedGame: null != (i = U(r)) ? i : true, runningGame: r
        };
      default:
        return null != a ? W(a) : null
    }
  }(), [Y, Q] = r.useState(null != (a = null != (t = null == V ? true : V.fullscreenType) ? t : null == B ? true : B.fullscreenType) ? a : null), [$, ee] = r.useState(V), [et, en] = r.useState(false), [el, er] = r.useState(false), [ea, ei] = r.useState(false), {
    nativeState: eu,
    breadcrumbs: [eo]
  } = ((0, f.ZP)(() => (m.Z.setModuleLogging(true), m.Z.setStateDebugging(true), () => {
    m.Z.setModuleLogging(false), m.Z.setStateDebugging(false)
  })), (0, o.e7)([k.Z], () => ({
    nativeState: k.Z.getDebuggingState(),
    breadcrumbs: k.Z.getOverlayLoggingBreadcrumbs()
  }), [], R)), es = r.useMemo(() => {
    let e = {
      game_crashes_occurred: C.t["1UWmCV"],
      poor_performance: C.t["4owu+4"],
      overlay_unresponsive: C.t.Q8Z0xo,
      keybindings_not_working: C.t.UnzaZs,
      alt_tabbing_issues: C.t["/sG9Sf"],
      game_not_interactable: C.t["+18gq6"],
      game_forced_minimized: C.t.dabM8C,
      other: C.t["UhbPA+"]
    };
    return Object.keys(e).map(t => ({
      label: C.intl.string(e[t]),
      value: t
    }))
  }, []), ed = r.useMemo(() => {
    let e = {
      [g.Jx.FULLSCREEN]: C.t.AjBsPe,
      [g.Jx.WINDOWED]: C.t["0oYq2i"],
      [g.Jx.BORDERLESS_FULLSCREEN]: C.t.NwNvjf,
      [g.Jx.MINIMIZED]: C.t.Wypflu,
      [g.Jx.MAXIMIZED]: C.t["MUX2+G"],
      [g.Jx.UNKNOWN]: C.t.QPOep8
    };
    return [...F].map(t => ({
      label: C.intl.string(e[t]),
      value: t
    }))
  }, []), ec = async () => {
    er(true), await (0, s._v)(500), er(false)
  }, em = async () => {
    var e, t, r, a, u;
    if (null === z && 0 === q.length) {
      ei(true), ec();
      return
    }
    en(true);
    let o = null != (r = b.default.getFocusedPID()) ? r : (0, I.getPID)(),
      d = G.default.getTrackedGameByPid(o),
      m = w.Z.getPopoutInitializationStages(),
      f = (null == d ? true : d.overlayMethod) != null ? P.gl[d.overlayMethod] : null,
      y = null != (a = null == d ? true : d.fullscreenType) ? a : g.Jx.UNKNOWN,
      _ = (0, O.y2)(eo, e => {
        for (let t of Object.values(K)) try {
          if (!t(e, o)) returnfalse
        } catch (e) {
          returnfalse
        }
        returntrue
      }),
      k = Z.Z.getRecentActions(10),
      T = S.Z.getRecentExperimentBuckets(p.Z.getAllExperimentAssignments(), new Date(Date.now() - 7776e6)),
      C = (null == d ? true : d.fullscreenHistory) == null ? null : Object.entries(d.fullscreenHistory).sort((e, t) => {
        let [n] = e, [l] = t;
        return Number(l) - Number(n)
      }).map(e => {
        let [t, n] = e;
        return "".concat(t, ":").concat(g.Jx[n])
      }),
      M = {
        issue_category: z,
        details: q,
        overlay_render_method: f,
        hardware_display_count: null != (u = await (null === v.Z || true === v.Z || null == (t = v.Z.hardware) || null == (e = t.getDisplayCount) ? true : e.call(t))) ? u : null,
        detected_fullscreen_type: g.Jx[y],
        application_id: null == d ? true : d.applicationId,
        application_name: null == d ? true : d.gameName,
        game_pid: null == d ? true : d.pid,
        recent_overlay_flux_actions: k,
        overlay_module_state: null == d ? true : d.state,
        overlay_native_state: JSON.stringify(eu),
        overlay_module_oop_initialization_state: JSON.stringify(m),
        overlay_module_error_message: j.Z.errorMessage,
        overlay_module_breadcrumbs: JSON.stringify(_),
        fullscreen_history_for_pid: C,
        media_session_id: x.Z.getMediaSessionId(),
        recent_experiment_buckets: JSON.stringify(T),
        location: h
      };
    await N.default.track(D.rMx.OVERLAY_BUG_REPORT, M), await (0, s._v)(1e3), en(false), null == i || i(), (0, c.ZDy)(async () => {
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
      contextKey: (0, c.VnL)(E)
    })
  };
  return (0, f.ZP)(() => {
    N.default.track(D.rMx.OPEN_MODAL, {
      type: "overlay_bug_reporter_modal",
      location: h
    })
  }), (0, l.jsx)(u.Modal, {
    transitionState: _,
    title: C.intl.string(C.t.OKmenM),
    actions: [{
      text: C.intl.string(C.t["ETE/oC"]),
      onClick: i,
      variant: "secondary",
      disabled: et
    }, {
      text: C.intl.string(C.t.geKm7t),
      onClick: em,
      variant: "primary",
      loading: et
    }],
    onClose: i,
    children: (0, l.jsxs)("div", {
      className: M.modalContent,
      children: [(0, l.jsxs)("div", {
        className: M.itemContainer,
        children: [(0, l.jsx)(c.UkV, {
          isShaking: el,
          intensity: 1.5,
          children: (0, l.jsx)(c.Text, {
            variant: "text-md/medium",
            color: ea ? "text-feedback-critical" : "text-strong",
            children: C.intl.string(C.t.Trx7eJ)
          })
        }), (0, l.jsx)(d.B6, {
          placeholder: C.intl.string(C.t.mKTzjI),
          options: es,
          isSelected: e => e === z,
          select: e => {
            H(e), ei(false), er(false)
          },
          serialize: e => e
        }), ea && (0, l.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "text-feedback-critical",
          children: C.intl.string(C.t["5cqa9J"])
        })]
      }), (0, l.jsxs)("div", {
        className: M.itemContainer,
        children: [(0, l.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "text-strong",
          children: C.intl.string(C.t.iZufAY)
        }), (0, l.jsx)(c.Kx8, {
          autosize: true,
          value: q,
          maxLength: 1e3,
          showCharacterCount: false,
          placeholder: C.intl.string(C.t["68mJXW"]),
          onChange: X
        }), (0, l.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: C.intl.string(C.t.TzkM2a)
        })]
      }), (0, l.jsx)("div", {
        className: M.hr
      }), (0, l.jsxs)("div", {
        className: M.itemContainer,
        children: [(0, l.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "text-strong",
          children: C.intl.string(C.t["8+SU+a"])
        }), (0, l.jsx)(A, {
          selectedGame: $,
          setSelectedGame: ee
        }), (0, l.jsx)(d.B6, {
          placeholder: C.intl.string(C.t.IjlqrF),
          options: ed,
          isSelected: e => e === Y,
          select: Q,
          serialize: e => "".concat(e)
        })]
      })]
    })
  })
}