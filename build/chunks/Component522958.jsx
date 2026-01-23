/** Chunk was on 36054 **/
/** chunk id: 522958, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => d
}), require("./747238.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk159452 = require("./159452.js");

function o(e) {
  let {
    text: t
  } = e;
  return (0, a.jsx)("span", {
    className: s.IR,
    children: t.split("").map((e, t) => (0, a.jsx)("span", {
      className: s.ZF,
      style: {
        "--custom-letter-index": t
      },
      children: e
    }, t))
  })
}

function c(e) {
  let {
    text: t
  } = e;
  return (0, a.jsx)("span", {
    className: s.IR,
    children: "⭐ ".concat(t).split("").map((e, t) => (0, a.jsx)("span", {
      className: s.EC,
      style: {
        "--custom-letter-index": t
      },
      children: e
    }, t))
  })
}

function d(e) {
  let {
    title: t,
    initExpanded: n,
    highlightMode: d = "none",
    children: u
  } = e, [m, p] = l.useState(n), h = l.useCallback(() => {
    p(!m)
  }, [m]), x = "root" === d ? "status-warning" : "status-positive", g = e => "migrated" === d ? (0, a.jsx)(r.Text, {
    variant: e,
    children: (0, a.jsx)(o, {
      text: t
    })
  }) : "migrated-root" === d ? (0, a.jsx)(r.Text, {
    variant: e,
    children: (0, a.jsx)(c, {
      text: t
    })
  }) : (0, a.jsx)(r.Text, {
    variant: e,
    color: x,
    children: t
  });
  return null == u ? (0, a.jsx)("div", {
    className: s.NF,
    children: g("text-md/normal")
  }) : (0, a.jsxs)("div", {
    className: s.NF,
    children: [(0, a.jsxs)(r.DUT, {
      className: s.jr,
      onClick: h,
      children: [g("text-md/bold"), (0, a.jsx)(i.A, {
        direction: m ? i.A.Directions.DOWN : i.A.Directions.RIGHT,
        className: s.D
      })]
    }), m && (0, a.jsx)("div", {
      className: s.m4,
      children: u
    })]
  })
}