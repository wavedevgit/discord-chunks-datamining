/** Chunk was on 16985 **/
/** chunk id: 409322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
      layout: p,
      collapseAfter: y,
      ContextProvider: j,
      useCollapsibleTitle: m,
      useCollapsibleSubtitle: v
    } = u,
    g = p.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    x = null != y ? g.slice(0, y) : g,
    h = null != y ? g.slice(y) : [],
    O = null != j ? j : l.Fragment,
    P = null == d ? true : d(),
    S = null != (t = null == m ? true : m(f, h.length)) ? t : (n = h.length, f ? c.intl.formatToPlainString(c.t["3SHL+d"], {
      count: n
    }) : c.intl.formatToPlainString(c.t["8JRFyZ"], {
      count: n
    })),
    C = null == v ? true : v();
  return (0, r.jsx)(O, {
    children: (0, r.jsxs)(i.Kqy, {
      gap: 8,
      children: [null != P && (0, r.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        color: "header-secondary",
        className: s.listTitle,
        children: P
      }), x.map((e, t) => (0, r.jsxs)(l.Fragment, {
        children: [(0, r.jsx)(o.Z, {
          node: e
        }), h.length > 0 && t !== x.length - 1 && (0, r.jsx)(i.izJ, {})]
      }, e.key)), h.length > 0 && (0, r.jsxs)("div", {
        className: s.collapsibleContainer,
        children: [(0, r.jsx)(i.izJ, {
          className: s.hoverDivider
        }), (0, r.jsx)(a.I, {
          title: S,
          subtitle: C,
          isOpen: f,
          setIsOpen: b,
          children: (0, r.jsx)(i.Kqy, {
            gap: 8,
            padding: {
              top: 8
            },
            children: h.map((e, t) => (0, r.jsxs)(l.Fragment, {
              children: [(0, r.jsx)(o.Z, {
                node: e
              }), t !== h.length - 1 && (0, r.jsx)(i.izJ, {})]
            }, e.key))
          })
        })]
      })]
    })
  })
}