/** Chunk was on web.js **/
/** chunk id: 409322, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk111161 = require("./111161.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk457454 = require("./457454.js");
let d = (e, t) => e ? c.intl.formatToPlainString(c.t["3SHL+d"], {
  count: t
}) : c.intl.formatToPlainString(c.t["8JRFyZ"], {
  count: t
});

function f(e) {
  var t;
  let {
    node: n
  } = e, [c, f] = i.useState(false), {
    useTitle: p,
    layout: _,
    collapseAfter: m,
    ContextProvider: h,
    useCollapsibleTitle: g,
    useCollapsedSubtitle: E
  } = n, b = null != m ? _.slice(0, m) : _, y = null != m ? _.slice(m) : [], O = null != h ? h : i.Fragment, v = null == p ? true : p(), S = null != (t = null == g ? true : g(c, y.length)) ? t : d(c, y.length), I = null == E ? true : E();
  return (0, r.jsx)(O, {
    children: (0, r.jsxs)(a.Kqy, {
      gap: 8,
      children: [null != v && (0, r.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        color: "text-default",
        className: u.listTitle,
        children: v
      }), b.map((e, t) => (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(o.Z, {
          node: e
        }), y.length > 0 && t !== b.length - 1 && (0, r.jsx)(s.Z, {})]
      }, e.key)), y.length > 0 && (0, r.jsxs)("div", {
        className: u.collapsibleContainer,
        children: [(0, r.jsx)(s.Z, {
          className: u.hoverDivider
        }), (0, r.jsx)(l.I, {
          title: S,
          collapsedSubtitle: I,
          isExpanded: c,
          onExpandedChange: f,
          children: (0, r.jsx)(a.Kqy, {
            gap: 8,
            padding: {
              top: 8
            },
            children: y.map((e, t) => (0, r.jsxs)(i.Fragment, {
              children: [(0, r.jsx)(o.Z, {
                node: e
              }), t !== y.length - 1 && (0, r.jsx)(s.Z, {})]
            }, e.key))
          })
        })]
      })]
    })
  })
}