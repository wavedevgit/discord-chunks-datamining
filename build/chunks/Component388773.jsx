/** Chunk was on 60667 **/
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
      useCollapsedSubtitle: h,
      initialize: b
    } = _,
    E = null != A ? g.slice(0, A) : g,
    x = null != A ? g.slice(A) : [],
    O = null != (t = null == f ? true : f(p, x.length)) ? t : (n = x.length, p ? d.intl.formatToPlainString(d.t["3SHL+d"], {
      count: n
    }) : d.intl.formatToPlainString(d.t["8JRFyZ"], {
      count: n
    })),
    C = null == h ? true : h();
  return (0, o.Z)(b), (0, r.jsxs)(l.BJc, {
    gap: 8,
    children: [E.map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(s.A, {
        node: e
      }), t !== E.length - 1 && (0, r.jsx)(a.A, {})]
    }, e.key)), x.length > 0 && (0, r.jsxs)("div", {
      className: u.CT,
      children: [(0, r.jsx)(a.A, {
        className: u.mn
      }), (0, r.jsx)(c.f, {
        title: O,
        collapsedSubtitle: C,
        isExpanded: p,
        onExpandedChange: m,
        children: (0, r.jsx)(l.BJc, {
          gap: 8,
          children: x.map((e, t) => (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(s.A, {
              node: e
            }), t !== x.length - 1 && (0, r.jsx)(a.A, {})]
          }, e.key))
        })
      })]
    })]
  })
}