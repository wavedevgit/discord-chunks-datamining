/** Chunk was on 27495 **/
/** chunk id: 651930, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => k,
  i: () => w
}), require("./896048.js"), require("./321073.js"), require("./228524.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
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
let y = Chunk64700.memo(function(e) {
    let {
      game: t
    } = e, n = (0, s.bG)([u.A], () => {
      var e;
      return null != (e = u.A.getApplicationByName(t.name)) ? e : u.A.getApplication(t.id)
    }, [t.id, t.name]), i = (0, s.bG)([d.Ay], () => {
      var e;
      let n = d.Ay.getVisibleGame(),
        l = null != n ? d.Ay.getGameOrTransformedSubgameForPID(n.pid) : null;
      return (null == l || null == (e = l.name) ? true : e.toLowerCase()) === t.name.toLowerCase() ? l : d.Ay.getGameForName(t.name)
    }, [t]), [a] = (0, c.A)([function() {
      if (null != t.id) return t.id;
      if (null != t.name) {
        let e = u.A.getApplicationByName(t.name);
        if (null != e) return e.id
      }
      if (null != i) return i.id
    }()]), r = null != a ? a : n;
    return (0, l.jsx)(m.A, {
      pid: null == i ? true : i.pid,
      game: null != r ? r : t,
      size: m.M.XSMALL,
      className: A.Gt
    })
  }),
  O = {
    searchType: Chunk379078.n.FUZZY,
    sortType: Chunk379078.r.JARO_WINKLER,
    searchStringGenerator: e => {
      let {
        game: t,
        label: n
      } = e, l = [t.name, n, t.id.toString()];
      if (t.aliases.length > 0 && l.push(...t.aliases), null != t.description && l.push(t.description), null != t.linkedApplications)
        for (let e of t.linkedApplications) {
          let t = u.A.getApplication(e.application_id);
          null != t && l.push(t.name)
        }
      return l
    },
    throttleMs: 100,
    maxSearchResults: 20
  },
  w = Chunk64700.memo(function(e) {
    var t;
    let {
      games: n,
      selectedGame: a,
      onGameSelected: r,
      onGameSearchQueryChange: s,
      placeholder: u
    } = e, [c, d] = i.useState(""), m = i.useCallback(e => {
      d(e), null == s || s(e)
    }, [s]), p = i.useMemo(() => {
      let e = [];
      for (let t of (null != a && e.push({
          id: a.id,
          value: a.id,
          label: a.name,
          game: a,
          leading: (0, l.jsx)(y, {
            game: a
          })
        }), n))(null == a || a.id !== t.id && a.name.toLowerCase() !== t.name.toLowerCase()) && e.push({
        id: t.id,
        value: t.id,
        label: t.name,
        game: t,
        leading: (0, l.jsx)(y, {
          game: t
        })
      });
      return e
    }, [n, a]), g = i.useMemo(() => p.reduce((e, t) => (null != e[t.value] || (e[t.value] = t), e), {}), [p]), [h, b] = i.useState(p), f = i.useCallback(e => {
      b(e)
    }, []), x = i.useCallback(e => {
      var t;
      let n = g[e];
      if (null == n) return;
      let l = n.game;
      r(null != l ? l : null), m(null != (t = null == l ? true : l.name) ? t : "")
    }, [g, r, m]), j = i.useCallback(e => {
      let t = e.target.value;
      m(t), null != a && t !== a.name && r(null)
    }, [a, r, m]);
    return (0, v.RT)(c, p, f, O), (0, l.jsx)(o.ZiE, {
      options: h,
      selectionMode: "single",
      value: null != (t = null == a ? true : a.id) ? t : true,
      onSelectionChange: x,
      onQueryChange: j,
      placeholder: u,
      clearable: true,
      maxOptionsVisible: 5
    })
  });

function k(e) {
  var t, n;
  let {
    onClose: c,
    transitionState: d,
    onSubmitted: m,
    detectedActivity: g,
    defaultStep: v = "issue_selection"
  } = e, [y, O] = i.useState(v), [k, S] = i.useState(null), [C, G] = i.useState(""), [N, T] = i.useState(null), [P, D] = i.useState(""), E = i.useMemo(() => (0, p.u9)(), []), M = (0, s.bG)([h.A], () => h.A.games), L = null != g, I = (0, s.bG)([u.A], () => (null == g ? true : g.application_id) != null ? u.A.getApplication(g.application_id) : null), R = () => {
    var e, t;
    (0, p.K6)({
      viewId: E,
      applicationId: null != (e = null == g ? true : g.application_id) ? e : "",
      suggestedGameName: "" !== C.trim() ? C.trim() : true,
      suggestedGameApplicationId: null != (t = null == N ? true : N.id) ? t : null,
      feedback: "" !== P.trim() ? P.trim() : true,
      submitted: true
    }), null == m || m(null != N ? N : null), c()
  }, Z = (() => {
    switch (y) {
      case "issue_selection":
        return {
          title: _.intl.string(_.t["6tnjbD"]), actions: []
        };
      case "game_search":
        return {
          title: L ? _.intl.string(_.t.TZgkxY) : _.intl.string(_.t["+ie+wX"]), actions: [{
            text: _.intl.string(_.t.geKm7t),
            onClick: R,
            variant: "primary",
            disabled: "" === C.trim()
          }]
        };
      case "other_feedback":
        return {
          title: _.intl.string(_.t.tdDpJj), actions: [{
            text: _.intl.string(_.t.geKm7t),
            onClick: R,
            variant: "primary",
            disabled: "" === P.trim()
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
  }({}, Z), n = n = {
    transitionState: d,
    onClose: c,
    trackingProps: {
      impression: {
        impressionName: a.ImpressionNames.GAME_DETECTION_REPORT_MODAL
      }
    },
    children: (() => {
      switch (y) {
        case "issue_selection":
          return (0, l.jsxs)("div", {
            className: A.Qs,
            children: [(0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: _.intl.string(_.t.IQHicr)
            }), (0, l.jsx)("div", {
              className: A.R$,
              children: (0, l.jsx)(o.z6M, {
                value: null != k ? k : true,
                onChange: e => {
                  var t;
                  S(e), b.default.track(j.HAw.GAME_DETECTION_FEEDBACK_MODAL, {
                    selected_option: e,
                    application_id: null != (t = null == g ? true : g.application_id) ? t : null
                  }), setTimeout(() => {
                    "game_not_detected" === e || "wrong_game_shown" === e ? O("game_search") : O("other_feedback")
                  }, 100)
                },
                options: L ? [{
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
          var e, t, n;
          let i;
          return (0, l.jsxs)("div", {
            className: A.Qs,
            children: [(0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: L ? _.intl.string(_.t["79o/iq"]) : _.intl.string(_.t["r/2pZy"])
            }), L && (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsxs)("div", {
                className: A.Gr,
                children: [null != (i = f.Ay.getApplicationIconURL({
                  id: null != (e = g.application_id) ? e : "",
                  icon: null != (t = null == I ? true : I.icon) ? t : null
                })) ? (0, l.jsx)("img", {
                  src: i,
                  alt: null != g.name && "" !== g.name ? g.name : null != (n = null == I ? true : I.name) ? n : "",
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
                }), (0, l.jsx)(o.Text, {
                  variant: "text-md/semibold",
                  color: "text-strong",
                  children: null != g.name && "" !== g.name ? g.name : null == I ? true : I.name
                })]
              }), (0, l.jsx)(x.A, {})]
            }), (0, l.jsx)(w, {
              games: M,
              selectedGame: N,
              onGameSelected: T,
              onGameSearchQueryChange: G,
              placeholder: L ? _.intl.string(_.t["/SGi7v"]) : _.intl.string(_.t.ss9Zwa)
            })]
          });
        case "other_feedback":
          return (0, l.jsxs)("div", {
            className: A.Qs,
            children: [(0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: _.intl.string(_.t.IblYEw)
            }), (0, l.jsx)(o.fs1, {
              value: P,
              onChange: D,
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