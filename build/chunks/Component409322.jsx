/** Chunk was on 16985 **/
/** chunk id: 409322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk457454 = require("./457454.js");

function u(e) {
  var t;
  let n, {
      node: u
    } = e,
    {
      useTitle: d
    } = u,
    [f, b] = l.useState(false),
    {
      layout: y,
      collapseAfter: p,
      ContextProvider: v,
      useCollapsibleTitle: m,
      useCollapsedSubtitle: j
    } = u,
    g = y.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    h = null != p ? g.slice(0, p) : g,
    x = null != p ? g.slice(p) : [],
    O = null != v ? v : l.Fragment,
    S = null == d ? true : d(),
    P = null != (t = null == m ? true : m(f, x.length)) ? t : (n = x.length, f ? c.intl.formatToPlainString(c.t["3SHL+d"], {
      count: n
    }) : c.intl.formatToPlainString(c.t["8JRFyZ"], {
      count: n
    })),
    C = null == j ? true : j();
  return (0, r.jsx)(O, {
    children: (0, r.jsxs)(i.Kqy, {
      gap: 8,
      children: [null != S && (0, r.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        color: "header-secondary",
        className: s.listTitle,
        children: S
      }), h.map((e, t) => (0, r.jsxs)(l.Fragment, {
        children: [(0, r.jsx)(o.Z, {
          node: e
        }), x.length > 0 && t !== h.length - 1 && (0, r.jsx)(i.izJ, {})]
      }, e.key)), x.length > 0 && (0, r.jsxs)("div", {
        className: s.collapsibleContainer,
        children: [(0, r.jsx)(i.izJ, {
          className: s.hoverDivider
        }), (0, r.jsx)(a.I, {
          title: P,
          collapsedSubtitle: C,
          isOpen: f,
          setIsOpen: b,
          children: (0, r.jsx)(i.Kqy, {
            gap: 8,
            padding: {
              top: 8
            },
            children: x.map((e, t) => (0, r.jsxs)(l.Fragment, {
              children: [(0, r.jsx)(o.Z, {
                node: e
              }), t !== x.length - 1 && (0, r.jsx)(i.izJ, {})]
            }, e.key))
          })
        })]
      })]
    })
  })
}