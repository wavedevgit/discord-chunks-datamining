/** Chunk was on 86142 **/
/** chunk id: 163698, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk813516 = require("./813516.jsx"),
  Chunk524832 = require("./524832.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk497039 = require("./497039.js"),
  Chunk473169 = require("./473169.js");

function g(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("li", {
    className: h.Aw,
    children: (0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: t
    })
  })
}

function f(e) {
  let {
    setSlide: t,
    transitionTo: i
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(a._V, {
      src: n(79418),
      className: s()(p.SX, p.Ot)
    }), (0, r.jsx)(a.hE, {
      className: p.QB,
      children: d.intl.string(d.t["8UcxI6"])
    }), (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      children: d.intl.string(d.t.O37hMl)
    }), (0, r.jsxs)(a.eB, {
      className: s()(p.SX, p.QX),
      children: [(0, r.jsx)(l.Text, {
        variant: "text-sm/normal"
      }), (0, r.jsxs)("ul", {
        className: h.qI,
        children: [(0, r.jsx)(g, {
          children: d.intl.string(d.t.Gj1Zry)
        }), (0, r.jsx)(o.A, {}), (0, r.jsx)(g, {
          children: d.intl.string(d.t["8C6t3B"])
        }), (0, r.jsx)(o.A, {}), (0, r.jsx)(g, {
          children: d.intl.string(d.t.mToZMA)
        }), (0, r.jsx)(o.A, {}), (0, r.jsx)(g, {
          children: d.intl.string(d.t.TPEvkc)
        }), (0, r.jsx)(o.A, {}), (0, r.jsx)(g, {
          children: d.intl.string(d.t.H8Y1Ln)
        })]
      })]
    }), (0, r.jsxs)(l.ButtonGroup, {
      direction: "vertical",
      fullWidth: true,
      className: h.UD,
      children: [(0, r.jsx)(l.Button, {
        text: d.intl.string(d.t.GgCRqR),
        onClick: () => t(c.k.PASSWORD)
      }), (0, r.jsx)(l.Button, {
        text: d.intl.string(d.t["B/yHcQ"]),
        variant: "secondary",
        onClick: () => i(u.BVt.LOGIN, {
          source: "account_revert"
        })
      })]
    })]
  })
}