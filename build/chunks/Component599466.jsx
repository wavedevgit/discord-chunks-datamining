/** Chunk was on 56159 **/
/** chunk id: 599466, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => R
}), require("./896048.js"), require("./638769.js"), require("./457529.js");
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
  Chunk383501 = require("./383501.js"),
  Chunk242286 = require("./242286.js"),
  Chunk954571 = require("./954571.js"),
  Chunk220478 = require("./220478.js"),
  Chunk9302 = require("./9302.js"),
  Chunk41984 = require("./41984.js"),
  Chunk181435 = require("./181435.js"),
  Chunk78878 = require("./78878.js"),
  Chunk729292 = require("./729292.jsx"),
  Chunk833551 = require("./833551.js"),
  Chunk395011 = require("./395011.js"),
  Chunk127242 = require("./127242.js"),
  Chunk680243 = require("./680243.js"),
  Chunk554311 = require("./554311.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk345860 = require("./345860.js");

function T(e, t) {
  return i()(e, t)
}
let D = new Set([Chunk56562.aI.BORDERLESS_FULLSCREEN, Chunk56562.aI.FULLSCREEN, Chunk56562.aI.WINDOWED, Chunk56562.aI.MAXIMIZED, Chunk56562.aI.MINIMIZED, Chunk56562.aI.UNKNOWN]),
  M = {
    HandleFocusChanged: (e, t) => {
      var n;
      if (!(0, N.$8)(e, "HandleFocusChanged")) returntrue;
      let l = null != t && null != (n = G.A.getKnownWindowHandlesForPID(t)) ? n : new Set,
        {
          focusedPid: r,
          focusedWindowHandle: a
        } = e.data;
      return null != a && null != r && r !== b.UNSET_PID && !!l.has(a) && r === t
    },
    EventHook: (e, t) => {
      var n;
      if (!(0, N.$8)(e, "EventHook")) returntrue;
      let l = null != t && null != (n = G.A.getKnownWindowHandlesForPID(t)) ? n : new Set;
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

function R(e) {
  var t, a;
  let {
    onClose: i,
    transitionState: R,
    location: C,
    appContext: L
  } = e, U = (0, o.bG)([p.default], () => p.default.getFocusedPID()), F = null != U ? U : (0, b.getPID)(), W = (0, o.bG)([S.default], () => S.default.getTrackedGameByPid(F), [F]), [B, q] = r.useState(null), [K, H] = r.useState(""), Z = (0, w.tX)(), [z, X] = r.useState(null != (t = null != (a = null == Z ? true : Z.fullscreenType) ? a : null == W ? true : W.fullscreenType) ? t : null), [J, Y] = r.useState(Z), [V, Q] = r.useState(false), [$, ee] = r.useState(false), [et, en] = r.useState(false), {
    nativeState: el,
    breadcrumbs: [er]
  } = ((0, g.Ay)(() => (c.A.setModuleLogging(true), c.A.setStateDebugging(true), () => {
    c.A.setModuleLogging(false), c.A.setStateDebugging(false)
  })), (0, o.bG)([E.A], () => ({
    nativeState: E.A.getDebuggingState(),
    breadcrumbs: E.A.getOverlayLoggingBreadcrumbs()
  }), [], T)), ea = r.useMemo(() => {
    let e = {
      game_crashes_occurred: k.t["1UWmCV"],
      poor_performance: k.t["4owu+4"],
      overlay_unresponsive: k.t.Q8Z0xo,
      keybindings_not_working: k.t.UnzaZs,
      alt_tabbing_issues: k.t["/sG9Sf"],
      game_not_interactable: k.t["+18gq6"],
      game_forced_minimized: k.t.dabM8C,
      other: k.t["UhbPA+"]
    };
    return Object.keys(e).map(t => ({
      id: t,
      label: k.intl.string(e[t]),
      value: t
    }))
  }, []), ei = r.useMemo(() => {
    let e = {
      [m.aI.FULLSCREEN]: k.t.AjBsPe,
      [m.aI.WINDOWED]: k.t["0oYq2i"],
      [m.aI.BORDERLESS_FULLSCREEN]: k.t.NwNvjf,
      [m.aI.MINIMIZED]: k.t.Wypflu,
      [m.aI.MAXIMIZED]: k.t["MUX2+G"],
      [m.aI.UNKNOWN]: k.t.QPOep8
    };
    return [...D].map(t => ({
      id: t.toString(),
      label: k.intl.string(e[t]),
      value: t
    }))
  }, []), eu = async () => {
    ee(true), await (0, d.yy)(500), ee(false)
  }, eo = async () => {
    var e, t, r, a, u;
    if (null === B && 0 === K.length) {
      en(true), eu();
      return
    }
    Q(true);
    let o = null != (e = p.default.getFocusedPID()) ? e : (0, b.getPID)(),
      c = S.default.getTrackedGameByPid(o),
      g = G.A.getPopoutInitializationStages(),
      x = (null == c ? true : c.overlayMethod) != null ? I.Ue[c.overlayMethod] : null,
      E = null != (t = null == c ? true : c.fullscreenType) ? t : m.aI.UNKNOWN,
      w = (0, N.tn)(er, e => {
        for (let t of Object.values(M)) try {
          if (!t(e, o)) returnfalse
        } catch (e) {
          returnfalse
        }
        returntrue
      }),
      k = A.A.getRecentActions(10),
      P = _.A.getRecentExperimentBuckets(v.A.getAllExperimentAssignments(), new Date(Date.now() - 7776e6)),
      T = (null == c ? true : c.fullscreenHistory) == null ? null : Object.entries(c.fullscreenHistory).sort((e, t) => {
        let [n] = e, [l] = t;
        return Number(l) - Number(n)
      }).map(e => {
        let [t, n] = e;
        return "".concat(t, ":").concat(m.aI[n])
      }),
      D = {
        issue_category: B,
        details: K,
        overlay_render_method: x,
        hardware_display_count: null != (r = await (null === f.A || true === f.A || null == (u = f.A.hardware) || null == (a = u.getDisplayCount) ? true : a.call(u))) ? r : null,
        detected_fullscreen_type: m.aI[E],
        application_id: null == c ? true : c.applicationId,
        application_name: null == c ? true : c.gameName,
        game_pid: null == c ? true : c.pid,
        recent_overlay_flux_actions: k,
        overlay_module_state: null == c ? true : c.state,
        overlay_native_state: JSON.stringify(el),
        overlay_module_oop_initialization_state: JSON.stringify(g),
        overlay_module_error_message: O.A.errorMessage,
        overlay_module_breadcrumbs: JSON.stringify(w),
        fullscreen_history_for_pid: T,
        media_session_id: y.A.getMediaSessionId(),
        recent_experiment_buckets: JSON.stringify(P),
        location: C
      };
    await h.default.track(j.HAw.OVERLAY_BUG_REPORT, D), await (0, d.yy)(1e3), Q(false), null == i || i(), (0, s.mMO)(async () => {
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
      contextKey: (0, s.TId)(L)
    })
  };
  return (0, g.Ay)(() => {
    h.default.track(j.HAw.OPEN_MODAL, {
      type: "overlay_bug_reporter_modal",
      location: C
    })
  }), (0, l.jsx)(u.Modal, {
    transitionState: R,
    title: k.intl.string(k.t.OKmenM),
    actions: [{
      text: k.intl.string(k.t["ETE/oC"]),
      onClick: i,
      variant: "secondary",
      disabled: V
    }, {
      text: k.intl.string(k.t.geKm7t),
      onClick: eo,
      variant: "primary",
      loading: V
    }],
    onClose: i,
    children: (0, l.jsxs)("div", {
      className: P.jE,
      children: [(0, l.jsxs)("div", {
        className: P.DB,
        children: [(0, l.jsx)(s.bfh, {
          isShaking: $,
          intensity: 1.5,
          children: (0, l.jsx)(s.Text, {
            variant: "text-md/medium",
            color: et ? "text-feedback-critical" : "text-strong",
            children: k.intl.string(k.t.Trx7eJ)
          })
        }), (0, l.jsx)(s.l6P, {
          label: k.intl.string(k.t.mKTzjI),
          hideLabel: true,
          placeholder: k.intl.string(k.t.mKTzjI),
          options: ea,
          value: B,
          onSelectionChange: e => {
            q(e), en(false), ee(false)
          },
          selectionMode: "single",
          fullWidth: true
        }), et && (0, l.jsx)(s.Text, {
          variant: "text-xs/semibold",
          color: "text-feedback-critical",
          children: k.intl.string(k.t["5cqa9J"])
        })]
      }), (0, l.jsxs)("div", {
        className: P.DB,
        children: [(0, l.jsx)(s.Text, {
          variant: "text-md/medium",
          color: "text-strong",
          children: k.intl.string(k.t.iZufAY)
        }), (0, l.jsx)(s.fs1, {
          autosize: true,
          value: K,
          maxLength: 1e3,
          showCharacterCount: false,
          placeholder: k.intl.string(k.t["68mJXW"]),
          onChange: H
        }), (0, l.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: k.intl.string(k.t.TzkM2a)
        })]
      }), (0, l.jsx)("div", {
        className: P.hr
      }), (0, l.jsxs)("div", {
        className: P.DB,
        children: [(0, l.jsx)(s.Text, {
          variant: "text-md/medium",
          color: "text-strong",
          children: k.intl.string(k.t["8+SU+a"])
        }), (0, l.jsx)(x.A, {
          selectedGame: J,
          setSelectedGame: Y,
          placeholder: k.intl.string(k.t.b1IW2e)
        }), (0, l.jsx)(s.l6P, {
          label: k.intl.string(k.t.IjlqrF),
          hideLabel: true,
          placeholder: k.intl.string(k.t.IjlqrF),
          options: ei,
          value: z,
          onSelectionChange: X,
          selectionMode: "single",
          fullWidth: true
        })]
      })]
    })
  })
}