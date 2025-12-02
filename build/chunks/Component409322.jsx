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
  } = e, {
    useTitle: c
  } = n, [f, p] = i.useState(false), {
    layout: _,
    collapseAfter: m,
    ContextProvider: h,
    useCollapsibleTitle: g,
    useCollapsedSubtitle: E
  } = n, b = _.filter(e => {
    var t, n;
    return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
  }), y = null != m ? b.slice(0, m) : b, O = null != m ? b.slice(m) : [], v = null != h ? h : i.Fragment, S = null == c ? true : c(), I = null != (t = null == g ? true : g(f, O.length)) ? t : d(f, O.length), T = null == E ? true : E();
  return (0, r.jsx)(v, {
    children: (0, r.jsxs)(a.Kqy, {
      gap: 8,
      children: [null != S && (0, r.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        color: "header-secondary",
        className: u.listTitle,
        children: S
      }), y.map((e, t) => (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(o.Z, {
          node: e
        }), O.length > 0 && t !== y.length - 1 && (0, r.jsx)(s.Z, {})]
      }, e.key)), O.length > 0 && (0, r.jsxs)("div", {
        className: u.collapsibleContainer,
        children: [(0, r.jsx)(s.Z, {
          className: u.hoverDivider
        }), (0, r.jsx)(l.I, {
          title: I,
          collapsedSubtitle: T,
          isExpanded: f,
          onExpandedChange: p,
          children: (0, r.jsx)(a.Kqy, {
            gap: 8,
            padding: {
              top: 8
            },
            children: O.map((e, t) => (0, r.jsxs)(i.Fragment, {
              children: [(0, r.jsx)(o.Z, {
                node: e
              }), t !== O.length - 1 && (0, r.jsx)(s.Z, {})]
            }, e.key))
          })
        })]
      })]
    })
  })
}