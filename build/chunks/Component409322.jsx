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
    [d, f] = l.useState(false),
    {
      layout: b,
      collapseAfter: p,
      ContextProvider: y,
      useCollapsibleTitle: j,
      useCollapsibleSubtitle: m
    } = u,
    v = b.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    x = null != p ? v.slice(0, p) : v,
    g = null != p ? v.slice(p) : [],
    h = null != y ? y : l.Fragment,
    O = null != (t = null == j ? true : j(d, g.length)) ? t : (n = g.length, d ? c.intl.formatToPlainString(c.t["3SHL+d"], {
      count: n
    }) : c.intl.formatToPlainString(c.t["8JRFyZ"], {
      count: n
    })),
    P = null == m ? true : m();
  return (0, r.jsx)(h, {
    children: (0, r.jsxs)(o.Kqy, {
      gap: 8,
      children: [x.map((e, t) => (0, r.jsxs)(l.Fragment, {
        children: [(0, r.jsx)(i.Z, {
          node: e
        }), g.length > 0 && t !== x.length - 1 && (0, r.jsx)(o.izJ, {})]
      }, e.key)), g.length > 0 && (0, r.jsxs)("div", {
        className: s.collapsibleContainer,
        children: [(0, r.jsx)(o.izJ, {
          className: s.hoverDivider
        }), (0, r.jsx)(a.I, {
          title: O,
          subtitle: P,
          isOpen: d,
          setIsOpen: f,
          children: (0, r.jsx)(o.Kqy, {
            gap: 8,
            padding: {
              top: 8
            },
            children: g.map((e, t) => (0, r.jsxs)(l.Fragment, {
              children: [(0, r.jsx)(i.Z, {
                node: e
              }), t !== g.length - 1 && (0, r.jsx)(o.izJ, {})]
            }, e.key))
          })
        })]
      })]
    })
  })
}