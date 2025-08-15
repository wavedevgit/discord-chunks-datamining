/** Chunk was on 47463 **/
/** chunk id: 996987, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk63063 = require("./63063.js"),
  Chunk453628 = require("./453628.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function u(e) {
  let {
    value: t,
    onChange: n,
    children: u,
    note: p,
    helpdeskArticleId: m,
    style: b,
    disabled: g = false,
    hideBorder: f = false,
    className: h = d.marginBottom20
  } = e, x = (0, a.Dt)();
  return (0, i.jsxs)(l.Z, {
    style: b,
    className: h,
    direction: l.Z.Direction.VERTICAL,
    children: [(0, i.jsxs)(l.Z, {
      children: [(0, i.jsx)(l.Z.Child, {
        children: (0, i.jsx)(r.vwX, {
          id: x,
          className: d.marginReset,
          tag: r.RB0.H3,
          disabled: g,
          children: u
        })
      }), (0, i.jsx)(l.Z.Child, {
        grow: 0,
        shrink: 0,
        children: (0, i.jsx)(s.Z, {
          value: t,
          onChange: n,
          disabled: g,
          labelledBy: x
        })
      })]
    }), null != p && (0, i.jsx)(l.Z.Child, {
      className: d.marginTop4,
      children: (0, i.jsx)(r.R94, {
        type: r.geA.DESCRIPTION,
        children: p
      })
    }), null != m && (0, i.jsx)(l.Z.Child, {
      className: d.marginTop4,
      children: (0, i.jsx)(r.R94, {
        disabled: g,
        type: r.geA.DESCRIPTION,
        children: (0, i.jsx)(r.eee, {
          href: o.Z.getArticleURL(m),
          children: c.intl.string(c.t.hvVgAQ)
        })
      })
    }), !f && (0, i.jsx)(l.Z.Child, {
      className: d.marginTop20,
      children: (0, i.jsx)(r.$i$, {})
    })]
  })
}
Chunk453628.Z.Types, u.Types = Chunk453628.Z.Types