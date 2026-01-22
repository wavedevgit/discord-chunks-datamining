/** Chunk was on web.js **/
/** chunk id: 388773, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
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
let f = (e, t) => e ? u.intl.formatToPlainString(u.t["3SHL+d"], {
  count: t
}) : u.intl.formatToPlainString(u.t["8JRFyZ"], {
  count: t
});

function p(e) {
  var t;
  let {
    node: n
  } = e, [u, p] = i.useState(false), {
    useTitle: _,
    layout: h,
    collapseAfter: m,
    useCollapsibleTitle: g,
    useCollapsedSubtitle: E,
    initialize: b
  } = n, y = null != m ? h.slice(0, m) : h, O = null != m ? h.slice(m) : [], A = null == _ ? true : _(), v = null != (t = null == g ? true : g(u, O.length)) ? t : f(u, O.length), S = null == E ? true : E();
  return (0, l.Z)(b), (0, r.jsxs)(a.BJc, {
    gap: 8,
    children: [null != A && (0, r.jsx)(a.Heading, {
      variant: "heading-md/semibold",
      color: "text-default",
      className: d.Vu,
      children: A
    }), y.map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(s.A, {
        node: e
      }), O.length > 0 && t !== y.length - 1 && (0, r.jsx)(o.A, {})]
    }, e.key)), O.length > 0 && (0, r.jsxs)("div", {
      className: d.CT,
      children: [(0, r.jsx)(o.A, {
        className: d.mn
      }), (0, r.jsx)(c.f, {
        title: v,
        collapsedSubtitle: S,
        isExpanded: u,
        onExpandedChange: p,
        children: (0, r.jsx)(a.BJc, {
          gap: 8,
          children: O.map((e, t) => (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(s.A, {
              node: e
            }), t !== O.length - 1 && (0, r.jsx)(o.A, {})]
          }, e.key))
        })
      })]
    })]
  })
}