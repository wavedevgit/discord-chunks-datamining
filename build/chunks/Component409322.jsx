/** Chunk was on 88569 **/
/** chunk id: 409322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk111161 = require("./111161.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk457454 = require("./457454.js");

function d(e) {
  var t;
  let n, {
      node: d
    } = e,
    {
      useTitle: f
    } = d,
    [p, b] = l.useState(false),
    {
      layout: y,
      collapseAfter: g,
      ContextProvider: v,
      useCollapsibleTitle: m,
      useCollapsedSubtitle: h
    } = d,
    x = y.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    j = null != g ? x.slice(0, g) : x,
    O = null != g ? x.slice(g) : [],
    P = null != v ? v : l.Fragment,
    C = null == f ? true : f(),
    S = null != (t = null == m ? true : m(p, O.length)) ? t : (n = O.length, p ? c.intl.formatToPlainString(c.t["3SHL+d"], {
      count: n
    }) : c.intl.formatToPlainString(c.t["8JRFyZ"], {
      count: n
    })),
    _ = null == h ? true : h();
  return (0, r.jsx)(P, {
    children: (0, r.jsxs)(i.Kqy, {
      gap: 8,
      children: [null != C && (0, r.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        color: "header-secondary",
        className: u.listTitle,
        children: C
      }), j.map((e, t) => (0, r.jsxs)(l.Fragment, {
        children: [(0, r.jsx)(o.Z, {
          node: e
        }), O.length > 0 && t !== j.length - 1 && (0, r.jsx)(a.Z, {})]
      }, e.key)), O.length > 0 && (0, r.jsxs)("div", {
        className: u.collapsibleContainer,
        children: [(0, r.jsx)(a.Z, {
          className: u.hoverDivider
        }), (0, r.jsx)(s.I, {
          title: S,
          collapsedSubtitle: _,
          isOpen: p,
          setIsOpen: b,
          children: (0, r.jsx)(i.Kqy, {
            gap: 8,
            padding: {
              top: 8
            },
            children: O.map((e, t) => (0, r.jsxs)(l.Fragment, {
              children: [(0, r.jsx)(o.Z, {
                node: e
              }), t !== O.length - 1 && (0, r.jsx)(a.Z, {})]
            }, e.key))
          })
        })]
      })]
    })
  })
}