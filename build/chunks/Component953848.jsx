/** Chunk was on 82077 **/
/** chunk id: 953848, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk810568 = require("./810568.js"),
  Chunk77498 = require("./77498.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk483517 = require("./483517.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk543733 = require("./543733.js");

function b(e) {
  var t, n;
  let {
    onClose: b,
    transitionState: _,
    onSubmitted: f,
    detectedActivity: j,
    defaultStep: O = "issue_selection"
  } = e, [w, y] = a.useState(O), [P, k] = a.useState(null), [I, G] = a.useState(""), [N, D] = a.useState(null), [T, S] = a.useState(""), C = a.useMemo(() => (0, d.fP)(), []), E = (0, o.e7)([u.Z], () => u.Z.games), A = null != j, Z = (0, o.e7)([s.Z], () => (null == j ? true : j.application_id) != null ? s.Z.getApplication(j.application_id) : null), M = a.useMemo(() => I.trim().length < 1 ? [] : E.filter(e => e.name.toLowerCase().includes(I.toLowerCase())).slice(0, 20).map(e => ({
    value: e.id,
    label: e.name,
    game: e
  })), [E, I]), L = () => {
    var e, t;
    (0, d.MH)({
      viewId: C,
      applicationId: null != (e = null == j ? true : j.application_id) ? e : "",
      suggestedGameName: "" !== I.trim() ? I.trim() : true,
      suggestedGameApplicationId: null != (t = null == N ? true : N.id) ? t : null,
      feedback: "" !== T.trim() ? T.trim() : true,
      submitted: true
    }), null == f || f(null != N ? N : null), b()
  }, F = (() => {
    switch (w) {
      case "issue_selection":
        return {
          title: v.intl.string(v.t["6tnjbD"]), actions: []
        };
      case "game_search":
        return {
          title: A ? v.intl.string(v.t.TZgkxY) : v.intl.string(v.t["+ie+wX"]), actions: [{
            text: v.intl.string(v.t.geKm7t),
            onClick: L,
            variant: "primary",
            disabled: "" === I.trim()
          }]
        };
      case "other_feedback":
        return {
          title: v.intl.string(v.t.tdDpJj), actions: [{
            text: v.intl.string(v.t.geKm7t),
            onClick: L,
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
  }({}, F), n = n = {
    transitionState: _,
    onClose: b,
    trackingProps: {
      impression: {
        impressionName: i.ImpressionNames.GAME_DETECTION_REPORT_MODAL
      }
    },
    children: (() => {
      switch (w) {
        case "issue_selection":
          return (0, l.jsxs)("div", {
            className: x.content,
            children: [(0, l.jsx)(c.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: v.intl.string(v.t.IQHicr)
            }), (0, l.jsx)("div", {
              className: x.radioGroup,
              children: (0, l.jsx)(c.FXm, {
                value: null != P ? P : true,
                onChange: e => {
                  var t;
                  k(e), m.default.track(h.rMx.GAME_DETECTION_FEEDBACK_MODAL, {
                    selected_option: e,
                    application_id: null != (t = null == j ? true : j.application_id) ? t : null
                  }), setTimeout(() => {
                    "game_not_detected" === e || "wrong_game_shown" === e ? y("game_search") : y("other_feedback")
                  }, 100)
                },
                options: A ? [{
                  name: v.intl.string(v.t.TZgkxY),
                  value: "wrong_game_shown"
                }, {
                  name: v.intl.string(v.t.tdDpJj),
                  value: "other_feedback"
                }] : [{
                  name: v.intl.string(v.t["+ie+wX"]),
                  value: "game_not_detected"
                }, {
                  name: v.intl.string(v.t.tdDpJj),
                  value: "other_feedback"
                }]
              })
            })]
          });
        case "game_search":
          var e;
          return (0, l.jsxs)("div", {
            className: x.content,
            children: [(0, l.jsx)(c.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: A ? v.intl.string(v.t["79o/iq"]) : v.intl.string(v.t["r/2pZy"])
            }), A && (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsxs)("div", {
                className: x.detectedGameFrame,
                children: [(() => {
                  var e, t, n;
                  let a = p.ZP.getApplicationIconURL({
                    id: null != (e = j.application_id) ? e : "",
                    icon: null != (t = null == Z ? true : Z.icon) ? t : null
                  });
                  return null != a ? (0, l.jsx)("img", {
                    src: a,
                    alt: null != j.name && "" !== j.name ? j.name : null != (n = null == Z ? true : Z.name) ? n : "",
                    className: x.detectedGameIcon
                  }) : (0, l.jsx)("div", {
                    className: "".concat(x.detectedGameIcon, " ").concat(x.detectedGameIconPlaceholder),
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
                })(), (0, l.jsx)(c.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: null != j.name && "" !== j.name ? j.name : null == Z ? true : Z.name
                })]
              }), (0, l.jsx)(g.Z, {})]
            }), (0, l.jsx)(c.VcW, {
              className: x.searchNoToggle,
              options: M,
              value: null != (e = null == N ? true : N.id) ? e : null,
              onChange: e => {
                var t;
                let n = E.find(t => t.id === e);
                D(null != n ? n : null), G(null != (t = null == n ? true : n.name) ? t : "")
              },
              onSearchChange: e => {
                G(e), null != N && e !== N.name && D(null)
              },
              placeholder: A ? v.intl.string(v.t["/SGi7v"]) : v.intl.string(v.t.ss9Zwa),
              clearable: true,
              filter: false,
              maxVisibleItems: 5,
              clearQueryOnSelect: false,
              onKeyDown: e => {
                0 === M.length && ("ArrowDown" === e.key || "ArrowUp" === e.key) && e.preventDefault()
              },
              renderOptionPrefix: e => {
                if (null == e) return null;
                let t = E.find(t => t.id === e.value);
                return null != t ? (0, l.jsx)("img", {
                  src: p.ZP.getApplicationIconURL({
                    id: t.id,
                    icon: t.icon
                  }),
                  alt: t.name,
                  className: x.gameIcon
                }) : null
              },
              renderOptionLabel: e => (0, l.jsx)(c.Text, {
                variant: "text-sm/normal",
                children: e.label
              })
            })]
          });
        case "other_feedback":
          return (0, l.jsxs)("div", {
            className: x.content,
            children: [(0, l.jsx)(c.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: v.intl.string(v.t.IblYEw)
            }), (0, l.jsx)(c.Kx8, {
              value: T,
              onChange: S,
              placeholder: v.intl.string(v.t.aiPKV4),
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