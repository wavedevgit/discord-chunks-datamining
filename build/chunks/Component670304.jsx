/** Chunk was on 36878 **/
/** chunk id: 670304, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk770102 = require("./770102.jsx"),
  Chunk28682 = require("./28682.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk49354 = require("./49354.js");

function c(e) {
  let {
    node: t
  } = e, n = t.layout.filter(e => e.type === r.J.PANE);
  if (n.length > 1) throw Error("Panels with multiple nested panes must implement a custom render function.");
  if (1 === n.length) {
    let e = n[0];
    return null != e && null != e.render ? (0, i.jsx)(e.render, {}) : (0, i.jsx)(d, {
      layout: e.layout
    })
  }
  return (0, i.jsx)(d, {
    layout: t.layout
  })
}

function u(e) {
  let {
    node: t
  } = e;
  return null != t.render ? (0, i.jsx)(t.render, {}) : (0, i.jsx)(d, {
    layout: t.layout
  })
}

function d(e) {
  let {
    layout: t
  } = e;
  return (0, i.jsx)("div", {
    className: s.pane,
    children: t.map((e, n) => (0, i.jsxs)(o.Fragment, {
      children: [(0, i.jsx)(a.Z, {
        node: e
      }), n !== t.length - 1 && (0, i.jsx)(l.$, {
        className: s.divider
      })]
    }, e.key))
  })
}
let f = Chunk73800.memo(function(e) {
  let {
    node: t
  } = e;
  return t.type === r.J.PANEL ? (0, i.jsx)(c, {
    node: t
  }) : (0, i.jsx)(u, {
    node: t
  })
})