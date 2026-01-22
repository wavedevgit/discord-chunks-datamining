/** Chunk was on 27495 **/
/** chunk id: 651930, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C,
  i: () => k
}), require("./896048.js"), require("./321073.js"), require("./228524.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk444550 = require("./444550.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk587895 = require("./587895.js"),
  Chunk429913 = require("./429913.js"),
  Chunk15285 = require("./15285.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk409626 = require("./409626.js"),
  Chunk379078 = require("./379078.js"),
  Chunk704554 = require("./704554.js"),
  Chunk760751 = require("./760751.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk21241 = require("./21241.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk936944 = require("./936944.js");
let O = Chunk64700.memo(function(e) {
    let {
      game: t
    } = e, n = (0, s.bG)([c.A], () => {
      var e;
      return null != (e = c.A.getApplicationByName(t.name)) ? e : c.A.getApplication(t.id)
    }, [t.id, t.name]), a = (0, s.bG)([m.Ay], () => {
      var e;
      let n = m.Ay.getVisibleGame(),
        l = null != n ? m.Ay.getGameOrTransformedSubgameForPID(n.pid) : null;
      return (null == l || null == (e = l.name) ? true : e.toLowerCase()) === t.name.toLowerCase() ? l : m.Ay.getGameForName(t.name)
    }, [t]), [i] = (0, d.A)([function() {
      if (null != t.id) return t.id;
      if (null != t.name) {
        let e = c.A.getApplicationByName(t.name);
        if (null != e) return e.id
      }
      if (null != a) return a.id
    }()]), r = null != i ? i : n;
    return (0, l.jsx)(p.A, {
      pid: null == a ? true : a.pid,
      game: null != r ? r : t,
      size: p.M.XSMALL,
      className: A.Gt
    })
  }),
  w = {
    searchType: Chunk379078.n.FUZZY,
    sortType: Chunk379078.r.JARO_WINKLER,
    searchStringGenerator: e => {
      let {
        game: t,
        label: n
      } = e, l = [t.name, n, t.id.toString()];
      if (t.aliases.length > 0 && l.push(...t.aliases), null != t.description && l.push(t.description), null != t.linkedApplications)
        for (let e of t.linkedApplications) {
          let t = c.A.getApplication(e.application_id);
          null != t && l.push(t.name)
        }
      return l
    },
    throttleMs: 100,
    maxSearchResults: 20
  },
  k = Chunk64700.memo(function(e) {
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
      return n.name !== (null == i ? true : i.name) && n.id === (null == i || i.id), (0, l.jsx)(O, {
        game: t.game
      })
    }, [h, i]), _ = a.useCallback(e => (0, l.jsx)(u.Text, {
      variant: "text-sm/normal",
      children: e.label
    }), []), y = a.useCallback(e => {
      var t;
      let n = h[e];
      if (null == n) return;
      let l = n.game;
      r(null != l ? l : null), p(null != (t = null == l ? true : l.name) ? t : "")
    }, [h, r, p]), k = a.useCallback(e => {
      p(e), null != i && e !== i.name && r(null)
    }, [i, r, p]), C = a.useCallback(e => {
      0 === b.length && ("ArrowDown" === e.key || "ArrowUp" === e.key) && e.preventDefault()
    }, [b]);
    return (0, v.RT)(d, g, x, w), (0, l.jsx)(o.p, {
      className: A.Oh,
      options: b,
      value: null != (t = null == i ? true : i.id) ? t : null,
      onChange: y,
      onSearchChange: k,
      placeholder: c,
      clearable: true,
      filter: false,
      maxVisibleItems: 5,
      clearQueryOnSelect: false,
      onKeyDown: C,
      renderOptionPrefix: j,
      renderOptionLabel: _,
      "data-migration-pending": true
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
  } = e, [v, O] = a.useState(h), [w, C] = a.useState(null), [S, G] = a.useState(""), [N, D] = a.useState(null), [T, P] = a.useState(""), E = a.useMemo(() => (0, g.u9)(), []), L = (0, s.bG)([b.A], () => b.A.games), M = null != p, I = (0, s.bG)([c.A], () => (null == p ? true : p.application_id) != null ? c.A.getApplication(p.application_id) : null), R = () => {
    var e, t;
    (0, g.K6)({
      viewId: E,
      applicationId: null != (e = null == p ? true : p.application_id) ? e : "",
      suggestedGameName: "" !== S.trim() ? S.trim() : true,
      suggestedGameApplicationId: null != (t = null == N ? true : N.id) ? t : null,
      feedback: "" !== T.trim() ? T.trim() : true,
      submitted: true
    }), null == m || m(null != N ? N : null), o()
  }, K = (() => {
    switch (v) {
      case "issue_selection":
        return {
          title: y.intl.string(y.t["6tnjbD"]), actions: []
        };
      case "game_search":
        return {
          title: M ? y.intl.string(y.t.TZgkxY) : y.intl.string(y.t["+ie+wX"]), actions: [{
            text: y.intl.string(y.t.geKm7t),
            onClick: R,
            variant: "primary",
            disabled: "" === S.trim()
          }]
        };
      case "other_feedback":
        return {
          title: y.intl.string(y.t.tdDpJj), actions: [{
            text: y.intl.string(y.t.geKm7t),
            onClick: R,
            variant: "primary",
            disabled: "" === T.trim()
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
  }({}, K), n = n = {
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
            className: A.Qs,
            children: [(0, l.jsx)(u.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: y.intl.string(y.t.IQHicr)
            }), (0, l.jsx)("div", {
              className: A.R$,
              children: (0, l.jsx)(u.z6M, {
                value: null != w ? w : true,
                onChange: e => {
                  var t;
                  C(e), f.default.track(_.HAw.GAME_DETECTION_FEEDBACK_MODAL, {
                    selected_option: e,
                    application_id: null != (t = null == p ? true : p.application_id) ? t : null
                  }), setTimeout(() => {
                    "game_not_detected" === e || "wrong_game_shown" === e ? O("game_search") : O("other_feedback")
                  }, 100)
                },
                options: M ? [{
                  name: y.intl.string(y.t.TZgkxY),
                  value: "wrong_game_shown"
                }, {
                  name: y.intl.string(y.t.tdDpJj),
                  value: "other_feedback"
                }] : [{
                  name: y.intl.string(y.t["+ie+wX"]),
                  value: "game_not_detected"
                }, {
                  name: y.intl.string(y.t.tdDpJj),
                  value: "other_feedback"
                }]
              })
            })]
          });
        case "game_search":
          var e, t, n;
          let a;
          return (0, l.jsxs)("div", {
            className: A.Qs,
            children: [(0, l.jsx)(u.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: M ? y.intl.string(y.t["79o/iq"]) : y.intl.string(y.t["r/2pZy"])
            }), M && (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsxs)("div", {
                className: A.Gr,
                children: [null != (a = x.Ay.getApplicationIconURL({
                  id: null != (e = p.application_id) ? e : "",
                  icon: null != (t = null == I ? true : I.icon) ? t : null
                })) ? (0, l.jsx)("img", {
                  src: a,
                  alt: null != p.name && "" !== p.name ? p.name : null != (n = null == I ? true : I.name) ? n : "",
                  className: A.q_
                }) : (0, l.jsx)("div", {
                  className: "".concat(A.q_, " ").concat(A.x_),
                  children: (0, l.jsx)("div", {
                    style: {
                      fontSize: "28px",
                      fontWeight: "bold",
                      color: "var(--text-muted)",
                      userSelect: "none"
                    },
                    children: "?"
                  })
                }), (0, l.jsx)(u.Text, {
                  variant: "text-md/semibold",
                  color: "text-strong",
                  children: null != p.name && "" !== p.name ? p.name : null == I ? true : I.name
                })]
              }), (0, l.jsx)(j.A, {})]
            }), (0, l.jsx)(k, {
              games: L,
              selectedGame: N,
              onGameSelected: D,
              onGameSearchQueryChange: G,
              placeholder: M ? y.intl.string(y.t["/SGi7v"]) : y.intl.string(y.t.ss9Zwa)
            })]
          });
        case "other_feedback":
          return (0, l.jsxs)("div", {
            className: A.Qs,
            children: [(0, l.jsx)(u.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: y.intl.string(y.t.IblYEw)
            }), (0, l.jsx)(u.fs1, {
              value: T,
              onChange: P,
              placeholder: y.intl.string(y.t.aiPKV4),
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