/** Chunk was on 2827 **/
/** chunk id: 388773, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk641324 = require("./641324.jsx"),
  Chunk46373 = require("./46373.jsx"),
  Chunk112715 = require("./112715.js"),
  Chunk78837 = require("./78837.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk115686 = require("./115686.js");

function _(e) {
  var t;
  let n, {
      node: _
    } = e,
    [p, m] = i.useState(false),
    {
      layout: g,
      collapseAfter: A,
      useCollapsibleTitle: f,
      useCollapsedSubtitle: b,
      initialize: h
    } = _,
    E = null != A ? g.slice(0, A) : g,
    O = null != A ? g.slice(A) : [],
    C = null != (t = null == f ? true : f(p, O.length)) ? t : (n = O.length, p ? d.intl.formatToPlainString(d.t["3SHL+d"], {
      count: n
    }) : d.intl.formatToPlainString(d.t["8JRFyZ"], {
      count: n
    })),
    x = null == b ? true : b();
  return (0, o.Z)(h), (0, r.jsxs)(l.BJc, {
    gap: 8,
    children: [E.map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(s.A, {
        node: e
      }), t !== E.length - 1 && (0, r.jsx)(a.A, {})]
    }, e.key)), O.length > 0 && (0, r.jsxs)("div", {
      className: u.CT,
      children: [(0, r.jsx)(a.A, {
        className: u.mn
      }), (0, r.jsx)(c.f, {
        title: C,
        collapsedSubtitle: x,
        isExpanded: p,
        onExpandedChange: m,
        children: (0, r.jsx)(l.BJc, {
          gap: 8,
          children: O.map((e, t) => (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(s.A, {
              node: e
            }), t !== O.length - 1 && (0, r.jsx)(a.A, {})]
          }, e.key))
        })
      })]
    })]
  })
}