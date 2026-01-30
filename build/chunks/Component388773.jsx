/** Chunk was on 78376 **/
/** chunk id: 388773, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk641324 = require("./641324.jsx"),
  Chunk46373 = require("./46373.jsx"),
  Chunk78837 = require("./78837.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk115686 = require("./115686.js");

function u(e) {
  var t;
  let n, {
      node: u
    } = e,
    [_, p] = i.useState(false),
    {
      layout: m,
      collapseAfter: g,
      useCollapsibleTitle: A,
      useCollapsedSubtitle: f
    } = u,
    b = null != g ? m.slice(0, g) : m,
    h = null != g ? m.slice(g) : [],
    E = null != (t = null == A ? true : A(_, h.length)) ? t : (n = h.length, _ ? c.intl.formatToPlainString(c.t["3SHL+d"], {
      count: n
    }) : c.intl.formatToPlainString(c.t["8JRFyZ"], {
      count: n
    })),
    O = null == f ? true : f();
  return (0, r.jsxs)(l.BJc, {
    gap: 8,
    children: [b.map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(s.A, {
        node: e
      }), t !== b.length - 1 && (0, r.jsx)(a.A, {})]
    }, e.key)), h.length > 0 && (0, r.jsxs)("div", {
      className: d.CT,
      children: [(0, r.jsx)(a.A, {
        className: d.mn
      }), (0, r.jsx)(o.f, {
        title: E,
        collapsedSubtitle: O,
        isExpanded: _,
        onExpandedChange: p,
        children: (0, r.jsx)(l.BJc, {
          gap: 8,
          children: h.map((e, t) => (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(s.A, {
              node: e
            }), t !== h.length - 1 && (0, r.jsx)(a.A, {})]
          }, e.key))
        })
      })]
    })]
  })
}