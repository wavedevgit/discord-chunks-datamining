/** Chunk was on 63940 **/
/** chunk id: 17060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => F
}), require("./388685.js"), require("./642613.js"), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk348327 = require("./348327.js"),
  r = require.n(Chunk348327),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk379649 = require("./379649.js"),
  Chunk481060 = require("./481060.js"),
  Chunk13245 = require("./13245.js"),
  Chunk593472 = require("./593472.js"),
  Chunk493773 = require("./493773.js"),
  Chunk579806 = require("./579806.js"),
  Chunk835473 = require("./835473.js"),
  Chunk353926 = require("./353926.js"),
  Chunk594190 = require("./594190.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk19780 = require("./19780.js"),
  Chunk808506 = require("./808506.js"),
  Chunk626135 = require("./626135.js"),
  Chunk499533 = require("./499533.js"),
  Chunk145597 = require("./145597.js"),
  Chunk427860 = require("./427860.js"),
  Chunk837268 = require("./837268.js"),
  Chunk475866 = require("./475866.js"),
  Chunk371651 = require("./371651.js"),
  Chunk610394 = require("./610394.js"),
  Chunk338949 = require("./338949.js"),
  Chunk509140 = require("./509140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk284191 = require("./284191.js");

function k(e, t) {
  return r()(e, t)
}
let M = new Set([Chunk593472.Jx.BORDERLESS_FULLSCREEN, Chunk593472.Jx.FULLSCREEN, Chunk593472.Jx.WINDOWED, Chunk593472.Jx.MAXIMIZED, Chunk593472.Jx.MINIMIZED, Chunk593472.Jx.UNKNOWN]);

function J(e) {
  var t, n;
  let {
    game: a
  } = e, i = (null == a ? true : a.gameId) != null ? [a.gameId] : [], [r] = (0, f.Z)(i);
  return null == a ? (0, l.jsxs)("div", {
    className: D.gameSelectionOption,
    children: [(0, l.jsx)(d.Text, {
      variant: "text-md/medium",
      color: "text-primary",
      className: D.gameSelectionOptionText,
      children: w.intl.string(w.t.b1IW2e)
    }), (0, l.jsx)(d.Fbu, {
      color: d.TVs.colors.INTERACTIVE_NORMAL,
      size: "sm",
      className: D.gameSelectionOptionChevron
    })]
  }) : (0, l.jsxs)("div", {
    className: D.gameSelectionOption,
    children: [(0, l.jsx)(y.Z, {
      game: r,
      size: y.A.XSMALL
    }), (0, l.jsx)(d.Text, {
      variant: "text-md/medium",
      color: "text-primary",
      className: D.gameSelectionOptionText,
      children: null != (t = null == r ? true : r.name) ? t : null != (n = a.gameName) ? n : w.intl.string(w.t.kYpwDv)
    }), (0, l.jsx)(d.Fbu, {
      color: d.TVs.colors.INTERACTIVE_NORMAL,
      size: "sm",
      className: D.gameSelectionOptionChevron
    })]
  })
}

function L(e) {
  for (let t of Object.values(I.default.getClosedTrackedGamesHistory()))
    if (t.applicationId === e.id || t.gameName === e.name) return t;
  return null
}

function R(e) {
  let {
    selectedGame: t,
    setSelectedGame: a
  } = e, i = e => {
    null != e ? a(function(e) {
      var t, n;
      let l = L(e);
      return {
        gameId: e.id,
        gameName: e.name,
        gamePid: null != (t = null == l ? true : l.pid) ? t : true,
        fullscreenType: null != (n = null == l ? true : l.fullscreenType) ? n : true,
        trackedGame: null != l ? l : true
      }
    }(e)) : a(null)
  };
  return (0, l.jsx)(d.kL8, {
    "aria-label": w.intl.string(w.t.b1IW2e),
    onClick: () => {
      (0, d.ZDy)(async () => {
        let {
          default: e
        } = await n.e("82077").then(n.bind(n, 953848));
        return n => {
          var a, r, o, s;
          return (0, l.jsx)(e, (o = function(e) {
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
          }({}, n), s = s = {
            defaultStep: "game_search",
            detectedActivity: null != t ? {
              application_id: null != (a = t.gameId) ? a : true,
              name: null != (r = t.gameName) ? r : ""
            } : true,
            onSubmitted: i
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              n.push.apply(n, l)
            }
            return n
          })(Object(s)).forEach(function(e) {
            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e))
          }), o))
        }
      })
    },
    children: (0, l.jsx)(J, {
      game: t
    })
  })
}
let A = {
  HandleFocusChanged: (e, t) => {
    var n;
    if (!(0, N._R)(e, "HandleFocusChanged")) returntrue;
    let l = null != t && null != (n = P.Z.getKnownWindowHandlesForPID(t)) ? n : new Set,
      {
        focusedPid: a,
        focusedWindowHandle: i
      } = e.data;
    return null == i && null == a && !!l.has(i) && a === t
  },
  EventHook: (e, t) => {
    var n;
    if (!(0, N._R)(e, "EventHook")) returntrue;
    let l = null != t && null != (n = P.Z.getKnownWindowHandlesForPID(t)) ? n : new Set;
    try {
      let {
        receivedWindow: n,
        targetPid: a
      } = e.data;
      if (null != n && l.has(n)) return null != a && a === t
    } finally {
      returnfalse
    }
  }
};

function F(e) {
  var t, n;
  let {
    onClose: i,
    transitionState: r,
    location: f,
    appContext: y
  } = e, J = (0, s.e7)([b.default], () => {
    var e;
    return null != (e = b.default.getFocusedPID()) ? e : (0, S.getPID)()
  }), F = (0, s.e7)([I.default], () => I.default.getTrackedGameByPid(J)), [G, U] = a.useState(null), [W, z] = a.useState(""), B = function() {
    var e, t;
    let n = (0, s.e7)([b.default], () => {
        var e;
        return null != (e = b.default.getFocusedPID()) ? e : (0, S.getPID)()
      }),
      l = (0, s.e7)([I.default], () => I.default.getTrackedGameByPid(n)),
      a = (0, s.e7)([x.ZP], () => x.ZP.getVisibleGame()),
      i = (0, s.e7)([x.ZP], () => x.ZP.getGamesSeen(false)[0]);
    return null != l ? {
      gameId: null != (e = l.applicationId) ? e : true,
      gameName: null != (t = l.gameName) ? t : true,
      gamePid: l.pid,
      fullscreenType: l.fullscreenType,
      trackedGame: l
    } : null != a ? {
      gameId: a.id,
      gameName: a.name,
      gamePid: a.pid,
      fullscreenType: a.fullscreenType,
      runningGame: a
    } : null != i ? function(e) {
      var t, n;
      let l = L(e);
      return {
        gameId: e.id,
        gameName: e.name,
        gamePid: null != (t = null == l ? true : l.pid) ? t : true,
        fullscreenType: null != (n = null == l ? true : l.fullscreenType) ? n : true,
        trackedGame: null != l ? l : true,
        persistentGame: e
      }
    }(i) : null
  }(), [H, K] = a.useState(null != (n = null != (t = null == B ? true : B.fullscreenType) ? t : null == F ? true : F.fullscreenType) ? n : null), [V, q] = a.useState(B), [X, Y] = a.useState(false), [Q, $] = a.useState(false), [ee, et] = a.useState(false), {
    nativeState: en,
    breadcrumbs: [el]
  } = ((0, g.ZP)(() => (c.Z.setModuleLogging(true), c.Z.setStateDebugging(true), () => {
    c.Z.setModuleLogging(false), c.Z.setStateDebugging(false)
  })), (0, s.e7)([C.Z], () => ({
    nativeState: C.Z.getDebuggingState(),
    breadcrumbs: C.Z.getOverlayLoggingBreadcrumbs()
  }), [], k)), ea = a.useMemo(() => {
    let e = {
      game_crashes_occurred: w.t["1UWmCV"],
      poor_performance: w.t["4owu+4"],
      overlay_unresponsive: w.t.Q8Z0xo,
      keybindings_not_working: w.t.UnzaZs,
      alt_tabbing_issues: w.t["/sG9Sf"],
      game_not_interactable: w.t["+18gq6"],
      game_forced_minimized: w.t.dabM8C,
      other: w.t["UhbPA+"]
    };
    return Object.keys(e).map(t => ({
      label: w.intl.string(e[t]),
      value: t
    }))
  }, []), ei = a.useMemo(() => {
    let e = {
      [m.Jx.FULLSCREEN]: w.t.AjBsPe,
      [m.Jx.WINDOWED]: w.t["0oYq2i"],
      [m.Jx.BORDERLESS_FULLSCREEN]: w.t.NwNvjf,
      [m.Jx.MINIMIZED]: w.t.Wypflu,
      [m.Jx.MAXIMIZED]: w.t["MUX2+G"],
      [m.Jx.UNKNOWN]: w.t.QPOep8
    };
    return [...M].map(t => ({
      label: w.intl.string(e[t]),
      value: t
    }))
  }, []), er = async () => {
    $(true), await (0, u._v)(500), $(false)
  }, eo = async () => {
    var e, t, n, l, a;
    if (null === G && 0 === W.length) {
      et(true), er();
      return
    }
    Y(true);
    let r = null != (n = b.default.getFocusedPID()) ? n : (0, S.getPID)(),
      o = I.default.getTrackedGameByPid(r),
      s = P.Z.getPopoutInitializationStages(),
      c = (null == o ? true : o.overlayMethod) != null ? j.gl[o.overlayMethod] : null,
      g = null != (l = null == o ? true : o.fullscreenType) ? l : m.Jx.UNKNOWN,
      x = (0, N.y2)(el, e => {
        for (let t of Object.values(A)) try {
          if (!t(e, r)) returnfalse
        } catch (e) {
          returnfalse
        }
        returntrue
      }),
      C = T.Z.getRecentActions(10),
      D = O.Z.getRecentExperimentBuckets(v.Z.getAllExperimentAssignments(), new Date(Date.now() - 7776e6)),
      k = (null == o ? true : o.fullscreenHistory) == null ? null : Object.entries(o.fullscreenHistory).sort((e, t) => {
        let [n] = e, [l] = t;
        return Number(l) - Number(n)
      }).map(e => {
        let [t, n] = e;
        return "".concat(t, ":").concat(m.Jx[n])
      }),
      M = {
        issue_category: G,
        details: W,
        overlay_render_method: c,
        hardware_display_count: null != (a = await (null === p.Z || true === p.Z || null == (t = p.Z.hardware) || null == (e = t.getDisplayCount) ? true : e.call(t))) ? a : null,
        detected_fullscreen_type: m.Jx[g],
        application_id: null == o ? true : o.applicationId,
        application_name: null == o ? true : o.gameName,
        game_pid: null == o ? true : o.pid,
        recent_overlay_flux_actions: C,
        overlay_module_state: null == o ? true : o.state,
        overlay_native_state: JSON.stringify(en),
        overlay_module_oop_initialization_state: JSON.stringify(s),
        overlay_module_error_message: E.Z.errorMessage,
        overlay_module_breadcrumbs: JSON.stringify(x),
        fullscreen_history_for_pid: k,
        media_session_id: _.Z.getMediaSessionId(),
        recent_experiment_buckets: JSON.stringify(D),
        location: f
      };
    await h.default.track(Z.rMx.OVERLAY_BUG_REPORT, M), await (0, u._v)(1e3), Y(false), (0, d.showToast)((0, d.createToast)(w.intl.string(w.t.eQRpgV), d.ToastType.SUCCESS, {
      appContext: y
    })), i()
  };
  return (0, g.ZP)(() => {
    h.default.track(Z.rMx.OPEN_MODAL, {
      type: "overlay_disabled_questionnaire_modal"
    })
  }), (0, l.jsx)(o.Modal, {
    transitionState: r,
    title: w.intl.string(w.t.OKmenM),
    actions: [{
      text: w.intl.string(w.t["ETE/oC"]),
      onClick: i,
      variant: "secondary",
      disabled: X
    }, {
      text: w.intl.string(w.t.geKm7t),
      onClick: eo,
      variant: "primary",
      loading: X
    }],
    onClose: i,
    children: (0, l.jsxs)("div", {
      className: D.modalContent,
      children: [(0, l.jsxs)("div", {
        className: D.itemContainer,
        children: [(0, l.jsx)(d.UkV, {
          isShaking: Q,
          intensity: 1.5,
          children: (0, l.jsx)(d.Text, {
            variant: "text-md/medium",
            color: ee ? "text-danger" : "text-primary",
            children: w.intl.string(w.t.Trx7eJ)
          })
        }), (0, l.jsx)(d.PhF, {
          placeholder: w.intl.string(w.t.mKTzjI),
          options: ea,
          isSelected: e => e === G,
          select: e => {
            U(e), et(false), $(false)
          },
          serialize: e => e
        }), ee && (0, l.jsx)(d.Text, {
          variant: "text-xs/semibold",
          color: "text-danger",
          children: w.intl.string(w.t["5cqa9J"])
        })]
      }), (0, l.jsxs)("div", {
        className: D.itemContainer,
        children: [(0, l.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "text-primary",
          children: w.intl.string(w.t.iZufAY)
        }), (0, l.jsx)(d.Kx8, {
          autosize: true,
          value: W,
          maxLength: 1e3,
          showCharacterCount: false,
          placeholder: w.intl.string(w.t["68mJXW"]),
          onChange: z
        }), (0, l.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: w.intl.string(w.t.TzkM2a)
        })]
      }), (0, l.jsx)("div", {
        className: D.hr
      }), (0, l.jsxs)("div", {
        className: D.itemContainer,
        children: [(0, l.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "text-primary",
          children: w.intl.string(w.t["8+SU+a"])
        }), (0, l.jsx)(R, {
          selectedGame: V,
          setSelectedGame: q
        }), (0, l.jsx)(d.PhF, {
          placeholder: w.intl.string(w.t.IjlqrF),
          options: ei,
          isSelected: e => e === H,
          select: K,
          serialize: e => "".concat(e)
        })]
      })]
    })
  })
}