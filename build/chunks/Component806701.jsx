/** Chunk was on 27978 **/
/** chunk id: 806701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk661824 = require("./661824.jsx"),
  Chunk720196 = require("./720196.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk710509 = require("./710509.js"),
  Chunk197571 = require("./197571.js");

function f(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("li", {
    className: h.listItem,
    children: (0, r.jsx)(o.Text, {
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
    children: [(0, r.jsx)(s.Ee, {
      src: n(26230),
      className: l()(p.marginBottom20, p.marginTop8)
    }), (0, r.jsx)(s.Dx, {
      className: p.marginBottom8,
      children: d.intl.string(d.t["8UcxIy"])
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      children: d.intl.string(d.t.O37hMj)
    }), (0, r.jsxs)(s.gO, {
      className: l()(p.marginBottom20, p.marginTop20),
      children: [(0, r.jsx)(o.Text, {
        variant: "text-sm/normal"
      }), (0, r.jsxs)("ul", {
        className: h.listContainer,
        children: [(0, r.jsx)(f, {
          children: d.intl.string(d.t.Gj1Zr6)
        }), (0, r.jsx)(a.Z, {}), (0, r.jsx)(f, {
          children: d.intl.string(d.t["8C6t3N"])
        }), (0, r.jsx)(a.Z, {}), (0, r.jsx)(f, {
          children: d.intl.string(d.t.mToZMD)
        }), (0, r.jsx)(a.Z, {}), (0, r.jsx)(f, {
          children: d.intl.string(d.t.TPEvkZ)
        }), (0, r.jsx)(a.Z, {}), (0, r.jsx)(f, {
          children: d.intl.string(d.t.H8Y1Li)
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: h.buttonContainer,
      children: [(0, r.jsx)(s.zx, {
        onClick: () => t(c.n.PASSWORD),
        children: d.intl.string(d.t.GgCRqa)
      }), (0, r.jsx)(s.zx, {
        color: s.zx.Colors.PRIMARY,
        onClick: () => i(u.Z5c.LOGIN, {
          source: "account_revert"
        }),
        children: d.intl.string(d.t["B/yHcX"])
      })]
    })]
  })
}