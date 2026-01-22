/** Chunk was on 90194 **/
/** chunk id: 566857, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./896048.js"), require("./321073.js"), require("./228524.js"), require("./638769.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk843282 = require("./843282.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk573648 = require("./573648.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js"),
  Chunk240248 = require("./240248.js"),
  Chunk555337 = require("./555337.js"),
  Chunk441715 = require("./441715.js"),
  Chunk549479 = require("./549479.js"),
  Chunk923121 = require("./923121.js"),
  Chunk539916 = require("./539916.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk819401 = require("./819401.js");

function S(e) {
  var t;
  let {
    transitionState: l,
    onClose: S,
    connection: v,
    index: L
  } = e, b = (0, c.Ay)(), m = null != v && null != L, T = A.A.getGuildId(), C = (0, o.bG)([I.A], () => {
    var e;
    return null != (e = I.A.getAllowedApplicationIds(T)) ? e : []
  }, [T]);
  i.useEffect(() => {
    null != T && (0, g.$)(T)
  }, [T]), i.useEffect(() => {
    for (let e of C) null != p.A.getApplication(e) || p.A.isFetchingApplication(e) || (0, u.TA)(e).catch(() => {})
  }, [C]);
  let N = (0, o.yK)([p.A], () => {
      let e = [];
      for (let t of C) {
        let l = p.A.getApplication(t);
        null != l && e.push(l)
      }
      return e
    }, [C]),
    [y, E] = i.useState(() => null != v ? (0, f.Sq)(v) : true),
    [G, j] = i.useState(null != (t = null == v ? true : v.description) ? t : ""),
    [D, P] = i.useState([]),
    w = i.useMemo(() => {
      let e = [];
      for (let n of d.A.filter(e => e.enabled && !f.tb.has(e.type))) {
        var t, l;
        let i = "light" === b ? null == (t = n.icon) ? true : t.lightPNG : null == (l = n.icon) ? true : l.darkPNG;
        e.push({
          label: n.name,
          value: "provider:".concat(n.type),
          icon: i
        })
      }
      for (let t of N) e.push({
        label: t.name,
        value: "app:".concat(t.id),
        icon: t.getIconURL(128)
      });
      for (let t of C) null == p.A.getApplication(t) && p.A.isFetchingApplication(t) && e.push({
        label: "Loading...",
        value: "app:".concat(t),
        icon: true
      });
      return e.sort((e, t) => e.label.localeCompare(t.label)), e
    }, [N, C, b]),
    F = i.useCallback(() => {
      if (null == y || "" === y) return void P(["Please select a connection"]);
      let e = (0, f.vK)(y);
      if (null == e) return void P(["Invalid connection selected"]);
      let t = G.trim(),
        l = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(l);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
              return Object.getOwnPropertyDescriptor(l, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = l[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({
          connection_type: e.type,
          description: (0, h.uJ)(t) ? true : t
        }, null != e.applicationId && {
          application_id: e.applicationId
        }, null != e.providerId && {
          provider_id: e.providerId
        }),
        n = (0, f.Ii)(l);
      n.length > 0 ? P(n) : (m ? (0, _.yM)(L, l) : (0, _.sF)(l), S())
    }, [y, G, m, L, S]),
    R = i.useCallback(e => (0, n.jsxs)("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "8px"
      },
      children: [e.icon ? "string" == typeof e.icon ? (0, n.jsx)("img", {
        src: e.icon,
        alt: "",
        width: 20,
        height: 20
      }) : null : (0, n.jsx)(s._xR, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor"
      }), (0, n.jsx)("span", {
        children: e.label
      })]
    }), []),
    U = i.useCallback(e => {
      if (0 === e.length) return null;
      let t = e[0];
      return (0, n.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "8px"
        },
        children: [t.icon && "string" == typeof t.icon ? (0, n.jsx)("img", {
          src: t.icon,
          alt: "",
          width: 20,
          height: 20
        }) : (0, n.jsx)(s._xR, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor"
        }), (0, n.jsx)("span", {
          children: t.label
        })]
      })
    }, []);
  return (0, n.jsx)(r.Modal, {
    transitionState: l,
    title: m ? x.intl.string(x.t.yqegs1) : x.intl.string(x.t.B6qOe2),
    onClose: S,
    actions: [{
      variant: "secondary",
      text: x.intl.string(x.t["ETE/oC"]),
      onClick: S
    }, {
      variant: "primary",
      text: m ? x.intl.string(x.t["R3BPH+"]) : x.intl.string(x.t.qMOnJu),
      onClick: F
    }],
    children: (0, n.jsxs)("div", {
      className: O.Qs,
      children: [!m && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: x.intl.string(x.t.mGhCgX)
        }), (0, n.jsx)(s.eIh, {
          title: x.intl.string(x.t.joNLrt),
          children: (0, n.jsx)(a.Te, {
            value: null != y ? y : "",
            onChange: e => {
              E(e), P([])
            },
            options: w,
            placeholder: x.intl.string(x.t.Wq1LfI),
            renderOptionLabel: R,
            renderOptionValue: U,
            "data-migration-pending": true
          })
        }), D.length > 0 && (0, n.jsx)("div", {
          className: O.sO,
          children: D.map((e, t) => (0, n.jsxs)("div", {
            className: O.Ff,
            children: [(0, n.jsx)(r.EpV, {
              size: "sm",
              color: "currentColor"
            }), (0, n.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "text-feedback-critical",
              children: e
            })]
          }, t))
        })]
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsxs)("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            marginBottom: "8px"
          },
          children: [(0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: x.intl.string(x.t.WoyrU8)
          }), (0, n.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: x.intl.string(x.t.zdWNET)
          })]
        }), (0, n.jsx)(s.fs1, {
          value: G,
          onChange: j,
          placeholder: x.intl.string(x.t["28bQNf"]),
          maxLength: f.sd
        })]
      })]
    })
  })
}