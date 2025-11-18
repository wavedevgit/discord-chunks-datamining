/** Chunk was on 11798 **/
/** chunk id: 8656, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./388685.js"), require("./539854.js"), require("./953529.js"), require("./642613.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk624138 = require("./624138.js"),
  Chunk999382 = require("./999382.js"),
  Chunk980555 = require("./980555.js"),
  Chunk987350 = require("./987350.js"),
  Chunk190007 = require("./190007.js"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk999021 = require("./999021.js");

function O(e) {
  var t;
  let {
    transitionState: n,
    onClose: O,
    connection: S,
    index: v
  } = e, m = (0, c.ZP)(), L = null != S && null != v, N = h.Z.getGuildId(), C = (0, o.e7)([f.Z], () => {
    var e;
    return null != (e = f.Z.getAllowedApplicationIds(N)) ? e : []
  }, [N]);
  i.useEffect(() => {
    null != N && (0, g.X)(N)
  }, [N]), i.useEffect(() => {
    for (let e of C) null != u.Z.getApplication(e) || u.Z.isFetchingApplication(e) || (0, d.UM)(e).catch(() => {})
  }, [C]);
  let T = (0, o.Wu)([u.Z], () => {
      let e = [];
      for (let t of C) {
        let n = u.Z.getApplication(t);
        null != n && e.push(n)
      }
      return e
    }, [C]),
    [E, y] = i.useState(() => null != S ? (0, _.a4)(S) : true),
    [b, j] = i.useState(null != (t = null == S ? true : S.description) ? t : ""),
    [G, P] = i.useState([]),
    D = i.useMemo(() => {
      let e = [];
      for (let l of s.Z.filter(e => e.enabled && !_.Ni.has(e.type))) {
        var t, n;
        let i = "light" === m ? null == (t = l.icon) ? true : t.lightPNG : null == (n = l.icon) ? true : n.darkPNG;
        e.push({
          label: l.name,
          value: "provider:".concat(l.type),
          icon: i
        })
      }
      for (let t of T) e.push({
        label: t.name,
        value: "app:".concat(t.id),
        icon: t.getIconURL(128)
      });
      for (let t of C) null == u.Z.getApplication(t) && u.Z.isFetchingApplication(t) && e.push({
        label: "Loading...",
        value: "app:".concat(t),
        icon: true
      });
      return e.sort((e, t) => e.label.localeCompare(t.label)), e
    }, [T, C, m]),
    w = i.useCallback(() => {
      if (null == E || "" === E) return void P(["Please select a connection"]);
      let e = (0, _.BN)(E);
      if (null == e) return void P(["Invalid connection selected"]);
      let t = b.trim(),
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
          description: (0, p.Ew)(t) ? true : t
        }, null != e.applicationId && {
          application_id: e.applicationId
        }, null != e.providerId && {
          provider_id: e.providerId
        }),
        l = (0, _.t9)(n);
      if (l.length > 0) return void P(l);
      L ? (0, I.HZ)(v, n) : (0, I.HE)(n), O()
    }, [E, b, L, v, O]),
    Z = i.useCallback(e => (0, l.jsxs)("div", {
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
    R = i.useCallback(e => {
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
    title: L ? A.intl.string(A.t.yqegs1) : A.intl.string(A.t.B6qOe2),
    onClose: O,
    actions: [{
      variant: "secondary",
      text: A.intl.string(A.t["ETE/oC"]),
      onClick: O
    }, {
      variant: "primary",
      text: L ? A.intl.string(A.t["R3BPH+"]) : A.intl.string(A.t.qMOnJu),
      onClick: w
    }],
    children: (0, l.jsxs)("div", {
      className: x.content,
      children: [!L && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: A.intl.string(A.t.mGhCgX)
        }), (0, l.jsx)(a.xJW, {
          title: A.intl.string(A.t.joNLrt),
          children: (0, l.jsx)(a.q4e, {
            value: null != E ? E : "",
            onChange: e => {
              y(e), P([])
            },
            options: D,
            placeholder: A.intl.string(A.t.Wq1LfI),
            renderOptionLabel: Z,
            renderOptionValue: R
          })
        }), G.length > 0 && (0, l.jsx)("div", {
          className: x.errors,
          children: G.map((e, t) => (0, l.jsxs)("div", {
            className: x.errorRow,
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
            children: A.intl.string(A.t.WoyrU8)
          }), (0, l.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: A.intl.string(A.t.zdWNET)
          })]
        }), (0, l.jsx)(a.Kx8, {
          value: b,
          onChange: j,
          placeholder: A.intl.string(A.t["28bQNf"]),
          maxLength: _.kk
        })]
      })]
    })
  })
}