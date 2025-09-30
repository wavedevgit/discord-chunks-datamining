/** Chunk was on 27978 **/
/** chunk id: 806701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function m(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("li", {
    className: h.listItem,
    children: (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: t
    })
  })
}

function p(e) {
  let {
    setSlide: t,
    transitionTo: i
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(o.Ee, {
      src: n(26230),
      className: l()(g.marginBottom20, g.marginTop8)
    }), (0, r.jsx)(o.Dx, {
      className: g.marginBottom8,
      children: d.intl.string(d.t["8UcxIy"])
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      children: d.intl.string(d.t.O37hMj)
    }), (0, r.jsxs)(o.gO, {
      className: l()(g.marginBottom20, g.marginTop20),
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/normal"
      }), (0, r.jsxs)("ul", {
        className: h.listContainer,
        children: [(0, r.jsx)(m, {
          children: d.intl.string(d.t.Gj1Zr6)
        }), (0, r.jsx)(a.Z, {}), (0, r.jsx)(m, {
          children: d.intl.string(d.t["8C6t3N"])
        }), (0, r.jsx)(a.Z, {}), (0, r.jsx)(m, {
          children: d.intl.string(d.t.mToZMD)
        }), (0, r.jsx)(a.Z, {}), (0, r.jsx)(m, {
          children: d.intl.string(d.t.TPEvkZ)
        }), (0, r.jsx)(a.Z, {}), (0, r.jsx)(m, {
          children: d.intl.string(d.t.H8Y1Li)
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: h.buttonContainer,
      children: [(0, r.jsx)(o.zx, {
        onClick: () => t(c.n.PASSWORD),
        children: d.intl.string(d.t.GgCRqa)
      }), (0, r.jsx)(o.zx, {
        color: o.zx.Colors.PRIMARY,
        onClick: () => i(u.Z5c.LOGIN, {
          source: "account_revert"
        }),
        children: d.intl.string(d.t["B/yHcX"])
      })]
    })]
  })
}