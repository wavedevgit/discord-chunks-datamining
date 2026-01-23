/** Chunk was on 56159 **/
/** chunk id: 599466, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => H
}), require("./65821.js"), require("./896048.js"), require("./321073.js"), require("./638769.js"), require("./457529.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk812729 = require("./812729.js"),
  i = require.n(Chunk812729),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk499979 = require("./499979.js"),
  Chunk397927 = require("./397927.js"),
  Chunk684013 = require("./684013.js"),
  Chunk56562 = require("./56562.js"),
  Chunk964486 = require("./964486.js"),
  Chunk77729 = require("./77729.js"),
  Chunk49463 = require("./49463.js"),
  Chunk15285 = require("./15285.js"),
  Chunk651930 = require("./651930.jsx"),
  Chunk760751 = require("./760751.js"),
  Chunk383501 = require("./383501.js"),
  Chunk242286 = require("./242286.js"),
  Chunk954571 = require("./954571.js"),
  Chunk220478 = require("./220478.js"),
  Chunk661191 = require("./661191.js"),
  Chunk9302 = require("./9302.js"),
  Chunk41984 = require("./41984.js"),
  Chunk181435 = require("./181435.js"),
  Chunk78878 = require("./78878.js"),
  Chunk833551 = require("./833551.js"),
  Chunk395011 = require("./395011.js"),
  Chunk127242 = require("./127242.js"),
  Chunk680243 = require("./680243.js"),
  Chunk243612 = require("./243612.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk345860 = require("./345860.js");

function R(e, t) {
  return i()(e, t)
}
let C = new Chunk661191.SnowflakeSequence,
  L = {},
  F = new Set([Chunk56562.aI.BORDERLESS_FULLSCREEN, Chunk56562.aI.FULLSCREEN, Chunk56562.aI.WINDOWED, Chunk56562.aI.MAXIMIZED, Chunk56562.aI.MINIMIZED, Chunk56562.aI.UNKNOWN]);

function W(e) {
  for (let t of Object.values(O.default.getClosedTrackedGamesHistory()))
    if (t.applicationId === e.id || t.gameName === e.name) return t;
  return null
}

function U(e) {
  var t, n, l;
  let r = W(e);
  return {
    gameId: e.id,
    gameName: e.name,
    gamePid: null != (t = null == r ? true : r.pid) ? t : true,
    fullscreenType: null != (n = null == r ? true : r.fullscreenType) ? n : true,
    trackedGame: null != r ? r : true,
    persistentGame: e,
    runningGame: null != e.name && null != (l = y.Ay.getGameForName(e.name)) ? l : true
  }
}

function B(e) {
  var t, n;
  let [l] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [_.A];
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
      C.willOverflowNext() && C.reset(), n = x.default.fromTimestampWithSequence(t, C)
    } catch (e) {
      C.reset(), n = x.default.fromTimestampWithSequence(t, C)
    }
    if (null == n) throw Error("Failed to generate snowflake id");
    return L[e] = n, n
  }(e.gameName);
  return {
    id: x.default.cast(a),
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

function K(e) {
  let {
    selectedGame: t,
    setSelectedGame: n
  } = e, r = (0, o.yK)([_.A, y.Ay], () => {
    let e = _.A.games,
      t = e.reduce((e, t) => (e[t.id] = t, e), {});
    return [...e, ...y.Ay.getGamesSeen(false).reduce((e, n) => {
      let l = n.id;
      if (null != l && null != t[l]) return e;
      let r = B(U(n), true);
      if (null != r) {
        if (null != t[r.id]) return e;
        e.push(r)
      }
      return e
    }, [])]
  }, []), a = (0, o.bG)([_.A], () => B(t, [_.A]), [t]);
  return (0, l.jsx)(p.i, {
    games: r,
    selectedGame: null != a ? a : null,
    onGameSelected: e => {
      if (null != e) {
        var t, l, r;
        let a;
        n((a = W(e), {
          gameId: e.id,
          gameName: e.name,
          gamePid: null != (t = null == a ? true : a.pid) ? t : true,
          fullscreenType: null != (l = null == a ? true : a.fullscreenType) ? l : true,
          trackedGame: null != a ? a : true,
          runningGame: null != e.name && null != (r = y.Ay.getGameForName(e.name)) ? r : true
        }))
      } else n(null)
    },
    placeholder: D.intl.string(D.t.b1IW2e)
  })
}
let q = {
  HandleFocusChanged: (e, t) => {
    var n;
    if (!(0, G.$8)(e, "HandleFocusChanged")) returntrue;
    let l = null != t && null != (n = w.A.getKnownWindowHandlesForPID(t)) ? n : new Set,
      {
        focusedPid: r,
        focusedWindowHandle: a
      } = e.data;
    return null != a && null != r && r !== S.UNSET_PID && !!l.has(a) && r === t
  },
  EventHook: (e, t) => {
    var n;
    if (!(0, G.$8)(e, "EventHook")) returntrue;
    let l = null != t && null != (n = w.A.getKnownWindowHandlesForPID(t)) ? n : new Set;
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

function H(e) {
  var t, a;
  let {
    onClose: i,
    transitionState: p,
    location: _,
    appContext: x
  } = e, C = (0, o.bG)([b.default], () => b.default.getFocusedPID()), L = null != C ? C : (0, S.getPID)(), B = (0, o.bG)([O.default], () => O.default.getTrackedGameByPid(L), [L]), [H, Z] = r.useState(null), [z, J] = r.useState(""), X = function() {
    var e, t, n, l, r, a;
    let i = (0, P.b4)(),
      u = (0, o.bG)([b.default], () => b.default.getFocusedPID()),
      s = null != u ? u : (0, S.getPID)(),
      d = (0, o.bG)([O.default], () => O.default.getTrackedGameByPid(s), [s]),
      c = (0, o.bG)([y.Ay], () => y.Ay.getVisibleGame()),
      m = (0, o.bG)([y.Ay], () => y.Ay.getGamesSeen(false)[0]);
    switch (true) {
      case null != d:
        return {
          gameId: null != (e = d.applicationId) ? e : true, gameName: null != (t = d.gameName) ? t : true, gamePid: d.pid, fullscreenType: d.fullscreenType, trackedGame: d, runningGame: null != d.gameName && null != (n = y.Ay.getGameForName(d.gameName)) ? n : true
        };
      case null != i:
        let g, f;
        return f = null == (g = y.Ay.getGameForName(i.name)) ? true : g.pid, {
          gameId: i.id,
          gameName: i.name,
          gamePid: null == g ? true : g.pid,
          fullscreenType: null != (l = null == g ? true : g.fullscreenType) ? l : true,
          runningGame: null != g ? g : true,
          trackedGame: null != f && null != (r = O.default.getTrackedGameByPid(f)) ? r : true
        };
      case null != c:
        return {
          gameId: c.id, gameName: c.name, gamePid: c.pid, fullscreenType: c.fullscreenType, trackedGame: null != (a = W(c)) ? a : true, runningGame: c
        };
      default:
        return null != m ? U(m) : null
    }
  }(), [Y, V] = r.useState(null != (t = null != (a = null == X ? true : X.fullscreenType) ? a : null == B ? true : B.fullscreenType) ? t : null), [Q, $] = r.useState(X), [ee, et] = r.useState(false), [en, el] = r.useState(false), [er, ea] = r.useState(false), {
    nativeState: ei,
    breadcrumbs: [eu]
  } = ((0, g.Ay)(() => (c.A.setModuleLogging(true), c.A.setStateDebugging(true), () => {
    c.A.setModuleLogging(false), c.A.setStateDebugging(false)
  })), (0, o.bG)([j.A], () => ({
    nativeState: j.A.getDebuggingState(),
    breadcrumbs: j.A.getOverlayLoggingBreadcrumbs()
  }), [], R)), eo = r.useMemo(() => {
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
      id: t,
      label: D.intl.string(e[t]),
      value: t
    }))
  }, []), es = r.useMemo(() => {
    let e = {
      [m.aI.FULLSCREEN]: D.t.AjBsPe,
      [m.aI.WINDOWED]: D.t["0oYq2i"],
      [m.aI.BORDERLESS_FULLSCREEN]: D.t.NwNvjf,
      [m.aI.MINIMIZED]: D.t.Wypflu,
      [m.aI.MAXIMIZED]: D.t["MUX2+G"],
      [m.aI.UNKNOWN]: D.t.QPOep8
    };
    return [...F].map(t => ({
      id: t.toString(),
      label: D.intl.string(e[t]),
      value: t
    }))
  }, []), ed = async () => {
    el(true), await (0, s.yy)(500), el(false)
  }, ec = async () => {
    var e, t, r, a, u;
    if (null === H && 0 === z.length) {
      ea(true), ed();
      return
    }
    et(true);
    let o = null != (e = b.default.getFocusedPID()) ? e : (0, S.getPID)(),
      c = O.default.getTrackedGameByPid(o),
      g = w.A.getPopoutInitializationStages(),
      y = (null == c ? true : c.overlayMethod) != null ? A.Ue[c.overlayMethod] : null,
      p = null != (t = null == c ? true : c.fullscreenType) ? t : m.aI.UNKNOWN,
      j = (0, G.tn)(eu, e => {
        for (let t of Object.values(q)) try {
          if (!t(e, o)) returnfalse
        } catch (e) {
          returnfalse
        }
        returntrue
      }),
      P = E.A.getRecentActions(10),
      D = N.A.getRecentExperimentBuckets(v.A.getAllExperimentAssignments(), new Date(Date.now() - 7776e6)),
      M = (null == c ? true : c.fullscreenHistory) == null ? null : Object.entries(c.fullscreenHistory).sort((e, t) => {
        let [n] = e, [l] = t;
        return Number(l) - Number(n)
      }).map(e => {
        let [t, n] = e;
        return "".concat(t, ":").concat(m.aI[n])
      }),
      R = {
        issue_category: H,
        details: z,
        overlay_render_method: y,
        hardware_display_count: null != (r = await (null === f.A || true === f.A || null == (u = f.A.hardware) || null == (a = u.getDisplayCount) ? true : a.call(u))) ? r : null,
        detected_fullscreen_type: m.aI[p],
        application_id: null == c ? true : c.applicationId,
        application_name: null == c ? true : c.gameName,
        game_pid: null == c ? true : c.pid,
        recent_overlay_flux_actions: P,
        overlay_module_state: null == c ? true : c.state,
        overlay_native_state: JSON.stringify(ei),
        overlay_module_oop_initialization_state: JSON.stringify(g),
        overlay_module_error_message: k.A.errorMessage,
        overlay_module_breadcrumbs: JSON.stringify(j),
        fullscreen_history_for_pid: M,
        media_session_id: h.A.getMediaSessionId(),
        recent_experiment_buckets: JSON.stringify(D),
        location: _
      };
    await I.default.track(T.HAw.OVERLAY_BUG_REPORT, R), await (0, s.yy)(1e3), et(false), null == i || i(), (0, d.mMO)(async () => {
      let {
        default: e
      } = await n.e("36058").then(n.bind(n, 823777));
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
      contextKey: (0, d.TId)(x)
    })
  };
  return (0, g.Ay)(() => {
    I.default.track(T.HAw.OPEN_MODAL, {
      type: "overlay_bug_reporter_modal",
      location: _
    })
  }), (0, l.jsx)(u.Modal, {
    transitionState: p,
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
      className: M.jE,
      children: [(0, l.jsxs)("div", {
        className: M.DB,
        children: [(0, l.jsx)(d.bfh, {
          isShaking: en,
          intensity: 1.5,
          children: (0, l.jsx)(d.Text, {
            variant: "text-md/medium",
            color: er ? "text-feedback-critical" : "text-strong",
            children: D.intl.string(D.t.Trx7eJ)
          })
        }), (0, l.jsx)(d.l6P, {
          label: D.intl.string(D.t.mKTzjI),
          hideLabel: true,
          placeholder: D.intl.string(D.t.mKTzjI),
          options: eo,
          value: H,
          onSelectionChange: e => {
            Z(e), ea(false), el(false)
          },
          selectionMode: "single",
          fullWidth: true
        }), er && (0, l.jsx)(d.Text, {
          variant: "text-xs/semibold",
          color: "text-feedback-critical",
          children: D.intl.string(D.t["5cqa9J"])
        })]
      }), (0, l.jsxs)("div", {
        className: M.DB,
        children: [(0, l.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "text-strong",
          children: D.intl.string(D.t.iZufAY)
        }), (0, l.jsx)(d.fs1, {
          autosize: true,
          value: z,
          maxLength: 1e3,
          showCharacterCount: false,
          placeholder: D.intl.string(D.t["68mJXW"]),
          onChange: J
        }), (0, l.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: D.intl.string(D.t.TzkM2a)
        })]
      }), (0, l.jsx)("div", {
        className: M.hr
      }), (0, l.jsxs)("div", {
        className: M.DB,
        children: [(0, l.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "text-strong",
          children: D.intl.string(D.t["8+SU+a"])
        }), (0, l.jsx)(K, {
          selectedGame: Q,
          setSelectedGame: $
        }), (0, l.jsx)(d.l6P, {
          label: D.intl.string(D.t.IjlqrF),
          hideLabel: true,
          placeholder: D.intl.string(D.t.IjlqrF),
          options: es,
          value: Y,
          onSelectionChange: V,
          selectionMode: "single",
          fullWidth: true
        })]
      })]
    })
  })
}