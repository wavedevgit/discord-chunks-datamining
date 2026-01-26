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
    layout: _,
    collapseAfter: h,
    useCollapsibleTitle: m,
    useCollapsedSubtitle: g,
    initialize: E
  } = n, y = null != h ? _.slice(0, h) : _, b = null != h ? _.slice(h) : [], O = null != (t = null == m ? true : m(u, b.length)) ? t : f(u, b.length), v = null == g ? true : g();
  return (0, l.Z)(E), (0, r.jsxs)(a.BJc, {
    gap: 8,
    children: [y.map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(s.A, {
        node: e
      }), t !== y.length - 1 && (0, r.jsx)(o.A, {})]
    }, e.key)), b.length > 0 && (0, r.jsxs)("div", {
      className: d.CT,
      children: [(0, r.jsx)(o.A, {
        className: d.mn
      }), (0, r.jsx)(c.f, {
        title: O,
        collapsedSubtitle: v,
        isExpanded: u,
        onExpandedChange: p,
        children: (0, r.jsx)(a.BJc, {
          gap: 8,
          children: b.map((e, t) => (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(s.A, {
              node: e
            }), t !== b.length - 1 && (0, r.jsx)(o.A, {})]
          }, e.key))
        })
      })]
    })]
  })
}