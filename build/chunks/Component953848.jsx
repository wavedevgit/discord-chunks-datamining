/** Chunk was on 82077 **/
/** chunk id: 953848, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S,
  g: () => k
}), require("./388685.js"), require("./539854.js"), require("./953529.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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
let y = Chunk473749.memo(function(e) {
    let {
      game: t
    } = e, n = (0, s.e7)([u.Z], () => {
      var e;
      return null != (e = u.Z.getApplicationByName(t.name)) ? e : u.Z.getApplication(t.id)
    }, [t.id, t.name]), a = (0, s.e7)([d.ZP], () => {
      var e;
      let n = d.ZP.getVisibleGame(),
        l = null != n ? d.ZP.getGameOrTransformedSubgameForPID(n.pid) : null;
      return (null == l || null == (e = l.name) ? true : e.toLowerCase()) === t.name.toLowerCase() ? l : d.ZP.getGameForName(t.name)
    }, [t]), [i] = (0, c.Z)([function() {
      if (null != t.id) return t.id;
      if (null != t.name) {
        let e = u.Z.getApplicationByName(t.name);
        if (null != e) return e.id
      }
      if (null != a) return a.id
    }()]), r = null != i ? i : n;
    return (0, l.jsx)(m.Z, {
      pid: null == a ? true : a.pid,
      game: null != r ? r : t,
      size: m.A.XSMALL,
      className: O.gameIcon
    })
  }),
  w = {
    searchType: Chunk886118.S.FUZZY,
    sortType: Chunk886118.E.JARO_WINKLER,
    searchStringGenerator: e => {
      let {
        game: t,
        label: n
      } = e, l = [t.name, n, t.id.toString()];
      if (t.aliases.length > 0 && l.push(...t.aliases), null != t.description && l.push(t.description), null != t.linkedApplications)
        for (let e of t.linkedApplications) {
          let t = u.Z.getApplication(e.application_id);
          null != t && l.push(t.name)
        }
      return l
    },
    throttleMs: 100,
    maxSearchResults: 20
  },
  k = Chunk473749.memo(function(e) {
    var t;
    let {
      games: n,
      selectedGame: i,
      onGameSelected: r,
      onGameSearchQueryChange: s,
      placeholder: u
    } = e, [c, d] = a.useState(""), m = a.useCallback(e => {
      d(e), null == s || s(e)
    }, [s]), p = a.useMemo(() => {
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
    }, [n, i]), g = a.useMemo(() => p.reduce((e, t) => (null != e[t.value] || (e[t.value] = t), e), {}), [p]), [v, b] = a.useState(p), f = a.useCallback(e => {
      b(e)
    }, []), x = a.useCallback(e => {
      if (null == e) return null;
      let t = g[e.value];
      if (null == t) return null;
      let n = t.game;
      return n.name !== (null == i ? true : i.name) && n.id === (null == i || i.id), (0, l.jsx)(y, {
        game: t.game
      })
    }, [g, i]), j = a.useCallback(e => (0, l.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: e.label
    }), []), _ = a.useCallback(e => {
      var t;
      let n = g[e];
      if (null == n) return;
      let l = n.game;
      r(null != l ? l : null), m(null != (t = null == l ? true : l.name) ? t : "")
    }, [g, r, m]), k = a.useCallback(e => {
      m(e), null != i && e !== i.name && r(null)
    }, [i, r, m]), S = a.useCallback(e => {
      0 === v.length && ("ArrowDown" === e.key || "ArrowUp" === e.key) && e.preventDefault()
    }, [v]);
    return (0, h.BO)(c, p, f, w), (0, l.jsx)(o.VcW, {
      className: O.searchNoToggle,
      options: v,
      value: null != (t = null == i ? true : i.id) ? t : null,
      onChange: _,
      onSearchChange: k,
      placeholder: u,
      clearable: true,
      filter: false,
      maxVisibleItems: 5,
      clearQueryOnSelect: false,
      onKeyDown: S,
      renderOptionPrefix: x,
      renderOptionLabel: j
    })
  });

function S(e) {
  var t, n;
  let {
    onClose: c,
    transitionState: d,
    onSubmitted: m,
    detectedActivity: g,
    defaultStep: h = "issue_selection"
  } = e, [y, w] = a.useState(h), [S, C] = a.useState(null), [P, Z] = a.useState(""), [A, N] = a.useState(null), [D, G] = a.useState(""), T = a.useMemo(() => (0, p.fP)(), []), I = (0, s.e7)([v.Z], () => v.Z.games), E = null != g, L = (0, s.e7)([u.Z], () => (null == g ? true : g.application_id) != null ? u.Z.getApplication(g.application_id) : null), M = () => {
    var e, t;
    (0, p.MH)({
      viewId: T,
      applicationId: null != (e = null == g ? true : g.application_id) ? e : "",
      suggestedGameName: "" !== P.trim() ? P.trim() : true,
      suggestedGameApplicationId: null != (t = null == A ? true : A.id) ? t : null,
      feedback: "" !== D.trim() ? D.trim() : true,
      submitted: true
    }), null == m || m(null != A ? A : null), c()
  }, F = (() => {
    switch (y) {
      case "issue_selection":
        return {
          title: _.intl.string(_.t["6tnjbD"]), actions: []
        };
      case "game_search":
        return {
          title: E ? _.intl.string(_.t.TZgkxY) : _.intl.string(_.t["+ie+wX"]), actions: [{
            text: _.intl.string(_.t.geKm7t),
            onClick: M,
            variant: "primary",
            disabled: "" === P.trim()
          }]
        };
      case "other_feedback":
        return {
          title: _.intl.string(_.t.tdDpJj), actions: [{
            text: _.intl.string(_.t.geKm7t),
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
    onClose: c,
    trackingProps: {
      impression: {
        impressionName: i.ImpressionNames.GAME_DETECTION_REPORT_MODAL
      }
    },
    children: (() => {
      switch (y) {
        case "issue_selection":
          return (0, l.jsxs)("div", {
            className: O.content,
            children: [(0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: _.intl.string(_.t.IQHicr)
            }), (0, l.jsx)("div", {
              className: O.radioGroup,
              children: (0, l.jsx)(o.FXm, {
                value: null != S ? S : true,
                onChange: e => {
                  var t;
                  C(e), b.default.track(j.rMx.GAME_DETECTION_FEEDBACK_MODAL, {
                    selected_option: e,
                    application_id: null != (t = null == g ? true : g.application_id) ? t : null
                  }), setTimeout(() => {
                    "game_not_detected" === e || "wrong_game_shown" === e ? w("game_search") : w("other_feedback")
                  }, 100)
                },
                options: E ? [{
                  name: _.intl.string(_.t.TZgkxY),
                  value: "wrong_game_shown"
                }, {
                  name: _.intl.string(_.t.tdDpJj),
                  value: "other_feedback"
                }] : [{
                  name: _.intl.string(_.t["+ie+wX"]),
                  value: "game_not_detected"
                }, {
                  name: _.intl.string(_.t.tdDpJj),
                  value: "other_feedback"
                }]
              })
            })]
          });
        case "game_search":
          return (0, l.jsxs)("div", {
            className: O.content,
            children: [(0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: E ? _.intl.string(_.t["79o/iq"]) : _.intl.string(_.t["r/2pZy"])
            }), E && (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsxs)("div", {
                className: O.detectedGameFrame,
                children: [(() => {
                  var e, t, n;
                  let a = f.ZP.getApplicationIconURL({
                    id: null != (e = g.application_id) ? e : "",
                    icon: null != (t = null == L ? true : L.icon) ? t : null
                  });
                  return null != a ? (0, l.jsx)("img", {
                    src: a,
                    alt: null != g.name && "" !== g.name ? g.name : null != (n = null == L ? true : L.name) ? n : "",
                    className: O.detectedGameIcon
                  }) : (0, l.jsx)("div", {
                    className: "".concat(O.detectedGameIcon, " ").concat(O.detectedGameIconPlaceholder),
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
                })(), (0, l.jsx)(o.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: null != g.name && "" !== g.name ? g.name : null == L ? true : L.name
                })]
              }), (0, l.jsx)(x.Z, {})]
            }), (0, l.jsx)(k, {
              games: I,
              selectedGame: A,
              onGameSelected: N,
              onGameSearchQueryChange: Z,
              placeholder: E ? _.intl.string(_.t["/SGi7v"]) : _.intl.string(_.t.ss9Zwa)
            })]
          });
        case "other_feedback":
          return (0, l.jsxs)("div", {
            className: O.content,
            children: [(0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: _.intl.string(_.t.IblYEw)
            }), (0, l.jsx)(o.Kx8, {
              value: D,
              onChange: G,
              placeholder: _.intl.string(_.t.aiPKV4),
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