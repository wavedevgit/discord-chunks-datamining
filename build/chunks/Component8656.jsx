/** Chunk was on 11798 **/
/** chunk id: 8656, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js"), require("./539854.js"), require("./953529.js"), require("./642613.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk624138 = require("./624138.js"),
  Chunk190007 = require("./190007.js"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk342203 = require("./342203.js");

function v(e) {
  var t;
  let {
    transitionState: n,
    onClose: v,
    connection: m,
    index: j
  } = e, y = (0, c.ZP)(), b = null != m && null != j;
  i.useEffect(() => {
    for (let e of g.vN) null != p.Z.getApplication(e) || p.Z.isFetchingApplication(e) || (0, d.UM)(e).catch(() => {})
  }, []);
  let C = (0, o.Wu)([p.Z], () => {
      let e = [];
      for (let t of g.vN) {
        let n = p.Z.getApplication(t);
        null != n && e.push(n)
      }
      return e
    }),
    [w, k] = i.useState(() => null != m ? (0, g.a4)(m) : true),
    [N, O] = i.useState(null != (t = null == m ? true : m.description) ? t : ""),
    [I, P] = i.useState([]),
    Z = i.useMemo(() => {
      let e = [];
      for (let l of s.Z.filter(e => e.enabled && !g.Ni.has(e.type))) {
        var t, n;
        let i = "light" === y ? null == (t = l.icon) ? true : t.lightPNG : null == (n = l.icon) ? true : n.darkPNG;
        e.push({
          label: l.name,
          value: "provider:".concat(l.type),
          icon: i
        })
      }
      for (let t of C) e.push({
        label: t.name,
        value: "app:".concat(t.id),
        icon: t.getIconURL(128)
      });
      for (let t of g.vN) null == p.Z.getApplication(t) && p.Z.isFetchingApplication(t) && e.push({
        label: "Loading...",
        value: "app:".concat(t),
        icon: true
      });
      return e.sort((e, t) => e.label.localeCompare(t.label)), e
    }, [C, y]),
    _ = i.useCallback(() => {
      if (null == w || "" === w) return void P(["Please select a connection"]);
      let e = (0, g.BN)(w);
      if (null == e) return void P(["Invalid connection selected"]);
      let t = N.trim(),
        n = function(e) {
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
        }({
          connection_type: e.type,
          description: (0, u.Ew)(t) ? true : t
        }, null != e.applicationId && {
          application_id: e.applicationId
        }, null != e.providerId && {
          provider_id: e.providerId
        }),
        l = (0, g.t9)(n);
      if (l.length > 0) return void P(l);
      b ? (0, h.HZ)(j, n) : (0, h.HE)(n), v()
    }, [w, N, b, j, v]),
    E = i.useCallback(e => (0, l.jsxs)("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "8px"
      },
      children: [e.icon ? "string" == typeof e.icon ? (0, l.jsx)("img", {
        src: e.icon,
        alt: "",
        width: 20,
        height: 20
      }) : null : (0, l.jsx)(a.iWm, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor"
      }), (0, l.jsx)("span", {
        children: e.label
      })]
    }), []),
    W = i.useCallback(e => {
      if (0 === e.length) return null;
      let t = e[0];
      return (0, l.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "8px"
        },
        children: [t.icon && "string" == typeof t.icon ? (0, l.jsx)("img", {
          src: t.icon,
          alt: "",
          width: 20,
          height: 20
        }) : (0, l.jsx)(a.iWm, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor"
        }), (0, l.jsx)("span", {
          children: t.label
        })]
      })
    }, []);
  return (0, l.jsx)(r.Modal, {
    transitionState: n,
    title: b ? x.intl.string(x.t.yqegs1) : x.intl.string(x.t.B6qOe2),
    onClose: v,
    actions: [{
      variant: "secondary",
      text: x.intl.string(x.t["ETE/oC"]),
      onClick: v
    }, {
      variant: "primary",
      text: b ? x.intl.string(x.t["R3BPH+"]) : x.intl.string(x.t.qMOnJu),
      onClick: _
    }],
    children: (0, l.jsxs)("div", {
      className: f.content,
      children: [!b && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: x.intl.string(x.t.mGhCgX)
        }), (0, l.jsx)(a.xJW, {
          title: x.intl.string(x.t.joNLrt),
          children: (0, l.jsx)(a.q4e, {
            value: null != w ? w : "",
            onChange: e => {
              k(e), P([])
            },
            options: Z,
            placeholder: x.intl.string(x.t.Wq1LfI),
            renderOptionLabel: E,
            renderOptionValue: W
          })
        }), I.length > 0 && (0, l.jsx)("div", {
          className: f.errors,
          children: I.map((e, t) => (0, l.jsxs)("div", {
            className: f.errorRow,
            children: [(0, l.jsx)(r.Mgn, {
              size: "sm",
              color: "currentColor"
            }), (0, l.jsx)(a.Text, {
              variant: "text-sm/normal",
              color: "text-danger",
              children: e
            })]
          }, t))
        })]
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsxs)("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            marginBottom: "8px"
          },
          children: [(0, l.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "text-primary",
            children: x.intl.string(x.t.WoyrU8)
          }), (0, l.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: x.intl.string(x.t.zdWNET)
          })]
        }), (0, l.jsx)(a.Kx8, {
          value: N,
          onChange: O,
          placeholder: x.intl.string(x.t["28bQNf"]),
          maxLength: g.kk
        })]
      })]
    })
  })
}