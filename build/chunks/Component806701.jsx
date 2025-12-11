/** Chunk was on 27978 **/
/** chunk id: 806701, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk661824 = require("./661824.jsx"),
  Chunk720196 = require("./720196.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk839926 = require("./839926.js"),
  Chunk478411 = require("./478411.js");

function g(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("li", {
    className: h.listItem,
    children: (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: t
    })
  })
}

function m(e) {
  let {
    setSlide: t,
    transitionTo: i
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(l.Ee, {
      src: n(26230),
      className: s()(f.marginBottom20, f.marginTop8)
    }), (0, r.jsx)(l.Dx, {
      className: f.marginBottom8,
      children: d.intl.string(d.t["8UcxI6"])
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      children: d.intl.string(d.t.O37hMl)
    }), (0, r.jsxs)(l.gO, {
      className: s()(f.marginBottom20, f.marginTop20),
      children: [(0, r.jsx)(a.Text, {
        variant: "text-sm/normal"
      }), (0, r.jsxs)("ul", {
        className: h.listContainer,
        children: [(0, r.jsx)(g, {
          children: d.intl.string(d.t.Gj1Zry)
        }), (0, r.jsx)(o.Z, {}), (0, r.jsx)(g, {
          children: d.intl.string(d.t["8C6t3B"])
        }), (0, r.jsx)(o.Z, {}), (0, r.jsx)(g, {
          children: d.intl.string(d.t.mToZMA)
        }), (0, r.jsx)(o.Z, {}), (0, r.jsx)(g, {
          children: d.intl.string(d.t.TPEvkc)
        }), (0, r.jsx)(o.Z, {}), (0, r.jsx)(g, {
          children: d.intl.string(d.t.H8Y1Ln)
        })]
      })]
    }), (0, r.jsxs)(a.ButtonGroup, {
      direction: "vertical",
      fullWidth: true,
      className: h.buttonContainer,
      children: [(0, r.jsx)(a.Button, {
        text: d.intl.string(d.t.GgCRqR),
        onClick: () => t(c.n.PASSWORD)
      }), (0, r.jsx)(a.Button, {
        text: d.intl.string(d.t["B/yHcQ"]),
        variant: "secondary",
        onClick: () => i(u.Z5c.LOGIN, {
          source: "account_revert"
        })
      })]
    })]
  })
}