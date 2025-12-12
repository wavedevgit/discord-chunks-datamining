/** Chunk was on web.js **/
/** chunk id: 409322, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk111161 = require("./111161.jsx"),
  Chunk662097 = require("./662097.js"),
  Chunk530171 = require("./530171.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk768480 = require("./768480.js");
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
    layout: m,
    collapseAfter: h,
    useCollapsibleTitle: g,
    useCollapsedSubtitle: E,
    initialize: b
  } = n, y = null != h ? m.slice(0, h) : m, O = null != h ? m.slice(h) : [], v = null == _ ? true : _(), S = null != (t = null == g ? true : g(u, O.length)) ? t : f(u, O.length), I = null == E ? true : E();
  return (0, l.D)(b), (0, r.jsxs)(a.Kqy, {
    gap: 8,
    children: [null != v && (0, r.jsx)(a.Heading, {
      variant: "heading-md/semibold",
      color: "text-default",
      className: d.listTitle,
      children: v
    }), y.map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(o.Z, {
        node: e
      }), O.length > 0 && t !== y.length - 1 && (0, r.jsx)(s.Z, {})]
    }, e.key)), O.length > 0 && (0, r.jsxs)("div", {
      className: d.collapsibleContainer,
      children: [(0, r.jsx)(s.Z, {
        className: d.hoverDivider
      }), (0, r.jsx)(c.I, {
        title: S,
        collapsedSubtitle: I,
        isExpanded: u,
        onExpandedChange: p,
        children: (0, r.jsx)(a.Kqy, {
          gap: 8,
          children: O.map((e, t) => (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(o.Z, {
              node: e
            }), t !== O.length - 1 && (0, r.jsx)(s.Z, {})]
          }, e.key))
        })
      })]
    })]
  })
}