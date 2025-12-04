/** Chunk was on 82077 **/
/** chunk id: 953848, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C,
  g: () => S
}), require("./388685.js"), require("./539854.js"), require("./953529.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk594190 = require("./594190.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk810568 = require("./810568.js"),
  Chunk886118 = require("./886118.js"),
  Chunk301801 = require("./301801.js"),
  Chunk77498 = require("./77498.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk483517 = require("./483517.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk90149 = require("./90149.js");
let w = Chunk473749.memo(function(e) {
    let {
      game: t
    } = e, n = (0, s.e7)([c.Z], () => {
      var e;
      return null != (e = c.Z.getApplicationByName(t.name)) ? e : c.Z.getApplication(t.id)
    }, [t.id, t.name]), a = (0, s.e7)([m.ZP], () => {
      var e;
      let n = m.ZP.getVisibleGame(),
        l = null != n ? m.ZP.getGameOrTransformedSubgameForPID(n.pid) : null;
      return (null == l || null == (e = l.name) ? true : e.toLowerCase()) === t.name.toLowerCase() ? l : m.ZP.getGameForName(t.name)
    }, [t]), [i] = (0, d.Z)([function() {
      if (null != t.id) return t.id;
      if (null != t.name) {
        let e = c.Z.getApplicationByName(t.name);
        if (null != e) return e.id
      }
      if (null != a) return a.id
    }()]), r = null != i ? i : n;
    return (0, l.jsx)(p.Z, {
      pid: null == a ? true : a.pid,
      game: null != r ? r : t,
      size: p.A.XSMALL,
      className: y.gameIcon
    })
  }),
  k = {
    searchType: Chunk886118.S.FUZZY,
    sortType: Chunk886118.E.JARO_WINKLER,
    searchStringGenerator: e => {
      let {
        game: t,
        label: n
      } = e, l = [t.name, n, t.id.toString()];
      if (t.aliases.length > 0 && l.push(...t.aliases), null != t.description && l.push(t.description), null != t.linkedApplications)
        for (let e of t.linkedApplications) {
          let t = c.Z.getApplication(e.application_id);
          null != t && l.push(t.name)
        }
      return l
    },
    throttleMs: 100,
    maxSearchResults: 20
  },
  S = Chunk473749.memo(function(e) {
    var t;
    let {
      games: n,
      selectedGame: i,
      onGameSelected: r,
      onGameSearchQueryChange: s,
      placeholder: c
    } = e, [d, m] = a.useState(""), p = a.useCallback(e => {
      m(e), null == s || s(e)
    }, [s]), g = a.useMemo(() => {
      let e = [];
      for (let t of (null != i && e.push({
          value: i.id,
          label: i.name,
          game: i
        }), n))(null == i || i.id !== t.id && i.name.toLowerCase() !== t.name.toLowerCase()) && e.push({
        value: t.id,
        label: t.name,
        game: t
      });
      return e
    }, [n, i]), h = a.useMemo(() => g.reduce((e, t) => (null != e[t.value] || (e[t.value] = t), e), {}), [g]), [b, f] = a.useState(g), x = a.useCallback(e => {
      f(e)
    }, []), j = a.useCallback(e => {
      if (null == e) return null;
      let t = h[e.value];
      if (null == t) return null;
      let n = t.game;
      return n.name !== (null == i ? true : i.name) && n.id === (null == i || i.id), (0, l.jsx)(w, {
        game: t.game
      })
    }, [h, i]), _ = a.useCallback(e => (0, l.jsx)(u.Text, {
      variant: "text-sm/normal",
      children: e.label
    }), []), O = a.useCallback(e => {
      var t;
      let n = h[e];
      if (null == n) return;
      let l = n.game;
      r(null != l ? l : null), p(null != (t = null == l ? true : l.name) ? t : "")
    }, [h, r, p]), S = a.useCallback(e => {
      p(e), null != i && e !== i.name && r(null)
    }, [i, r, p]), C = a.useCallback(e => {
      0 === b.length && ("ArrowDown" === e.key || "ArrowUp" === e.key) && e.preventDefault()
    }, [b]);
    return (0, v.BO)(d, g, x, k), (0, l.jsx)(o.d, {
      className: y.searchNoToggle,
      options: b,
      value: null != (t = null == i ? true : i.id) ? t : null,
      onChange: O,
      onSearchChange: S,
      placeholder: c,
      clearable: true,
      filter: false,
      maxVisibleItems: 5,
      clearQueryOnSelect: false,
      onKeyDown: C,
      renderOptionPrefix: j,
      renderOptionLabel: _
    })
  });

function C(e) {
  var t, n;
  let {
    onClose: o,
    transitionState: d,
    onSubmitted: m,
    detectedActivity: p,
    defaultStep: h = "issue_selection"
  } = e, [v, w] = a.useState(h), [k, C] = a.useState(null), [P, Z] = a.useState(""), [A, N] = a.useState(null), [D, G] = a.useState(""), T = a.useMemo(() => (0, g.fP)(), []), I = (0, s.e7)([b.Z], () => b.Z.games), E = null != p, L = (0, s.e7)([c.Z], () => (null == p ? true : p.application_id) != null ? c.Z.getApplication(p.application_id) : null), M = () => {
    var e, t;
    (0, g.MH)({
      viewId: T,
      applicationId: null != (e = null == p ? true : p.application_id) ? e : "",
      suggestedGameName: "" !== P.trim() ? P.trim() : true,
      suggestedGameApplicationId: null != (t = null == A ? true : A.id) ? t : null,
      feedback: "" !== D.trim() ? D.trim() : true,
      submitted: true
    }), null == m || m(null != A ? A : null), o()
  }, F = (() => {
    switch (v) {
      case "issue_selection":
        return {
          title: O.intl.string(O.t["6tnjbD"]), actions: []
        };
      case "game_search":
        return {
          title: E ? O.intl.string(O.t.TZgkxY) : O.intl.string(O.t["+ie+wX"]), actions: [{
            text: O.intl.string(O.t.geKm7t),
            onClick: M,
            variant: "primary",
            disabled: "" === P.trim()
          }]
        };
      case "other_feedback":
        return {
          title: O.intl.string(O.t.tdDpJj), actions: [{
            text: O.intl.string(O.t.geKm7t),
            onClick: M,
            variant: "primary",
            disabled: "" === D.trim()
          }]
        };
      default:
        return {
          title: "", actions: []
        }
    }
  })();
  return (0, l.jsx)(r.Modal, (t = function(e) {
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
  }({}, F), n = n = {
    transitionState: d,
    onClose: o,
    trackingProps: {
      impression: {
        impressionName: i.ImpressionNames.GAME_DETECTION_REPORT_MODAL
      }
    },
    children: (() => {
      switch (v) {
        case "issue_selection":
          return (0, l.jsxs)("div", {
            className: y.content,
            children: [(0, l.jsx)(u.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: O.intl.string(O.t.IQHicr)
            }), (0, l.jsx)("div", {
              className: y.radioGroup,
              children: (0, l.jsx)(u.FXm, {
                value: null != k ? k : true,
                onChange: e => {
                  var t;
                  C(e), f.default.track(_.rMx.GAME_DETECTION_FEEDBACK_MODAL, {
                    selected_option: e,
                    application_id: null != (t = null == p ? true : p.application_id) ? t : null
                  }), setTimeout(() => {
                    "game_not_detected" === e || "wrong_game_shown" === e ? w("game_search") : w("other_feedback")
                  }, 100)
                },
                options: E ? [{
                  name: O.intl.string(O.t.TZgkxY),
                  value: "wrong_game_shown"
                }, {
                  name: O.intl.string(O.t.tdDpJj),
                  value: "other_feedback"
                }] : [{
                  name: O.intl.string(O.t["+ie+wX"]),
                  value: "game_not_detected"
                }, {
                  name: O.intl.string(O.t.tdDpJj),
                  value: "other_feedback"
                }]
              })
            })]
          });
        case "game_search":
          return (0, l.jsxs)("div", {
            className: y.content,
            children: [(0, l.jsx)(u.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: E ? O.intl.string(O.t["79o/iq"]) : O.intl.string(O.t["r/2pZy"])
            }), E && (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsxs)("div", {
                className: y.detectedGameFrame,
                children: [(() => {
                  var e, t, n;
                  let a = x.ZP.getApplicationIconURL({
                    id: null != (e = p.application_id) ? e : "",
                    icon: null != (t = null == L ? true : L.icon) ? t : null
                  });
                  return null != a ? (0, l.jsx)("img", {
                    src: a,
                    alt: null != p.name && "" !== p.name ? p.name : null != (n = null == L ? true : L.name) ? n : "",
                    className: y.detectedGameIcon
                  }) : (0, l.jsx)("div", {
                    className: "".concat(y.detectedGameIcon, " ").concat(y.detectedGameIconPlaceholder),
                    children: (0, l.jsx)("div", {
                      style: {
                        fontSize: "28px",
                        fontWeight: "bold",
                        color: "var(--text-muted)",
                        userSelect: "none"
                      },
                      children: "?"
                    })
                  })
                })(), (0, l.jsx)(u.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: null != p.name && "" !== p.name ? p.name : null == L ? true : L.name
                })]
              }), (0, l.jsx)(j.Z, {})]
            }), (0, l.jsx)(S, {
              games: I,
              selectedGame: A,
              onGameSelected: N,
              onGameSearchQueryChange: Z,
              placeholder: E ? O.intl.string(O.t["/SGi7v"]) : O.intl.string(O.t.ss9Zwa)
            })]
          });
        case "other_feedback":
          return (0, l.jsxs)("div", {
            className: y.content,
            children: [(0, l.jsx)(u.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: O.intl.string(O.t.IblYEw)
            }), (0, l.jsx)(u.Kx8, {
              value: D,
              onChange: G,
              placeholder: O.intl.string(O.t.aiPKV4),
              maxLength: 300,
              rows: 4
            })]
          });
        default:
          return null
      }
    })()
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}