/** Chunk was on 75685 **/
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
      layout: m,
      collapseAfter: b,
      ContextProvider: p,
      useCollapsibleTitle: j
    } = u,
    x = m.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    v = null != b ? x.slice(0, b) : x,
    y = null != b ? x.slice(b) : [],
    h = null != p ? p : l.Fragment,
    g = null != (t = null == j ? true : j(d, y.length)) ? t : (n = y.length, d ? s.intl.formatToPlainString(s.t["3SHL+f"], {
      count: n
    }) : s.intl.formatToPlainString(s.t["8JRFyc"], {
      count: n
    }));
  return (0, r.jsx)(h, {
    children: (0, r.jsxs)(o.Kqy, {
      gap: 8,
      children: [v.map((e, t) => (0, r.jsxs)(l.Fragment, {
        children: [(0, r.jsx)(i.Z, {
          node: e
        }), y.length > 0 && t !== v.length - 1 && (0, r.jsx)(o.izJ, {})]
      }, e.key)), y.length > 0 && (0, r.jsxs)("div", {
        className: c.collapsibleContainer,
        children: [(0, r.jsx)(o.izJ, {
          className: c.hoverDivider
        }), (0, r.jsx)(a.I, {
          title: g,
          isOpen: d,
          setIsOpen: f,
          compact: true,
          children: y.map((e, t) => (0, r.jsxs)(l.Fragment, {
            children: [(0, r.jsx)(i.Z, {
              node: e
            }), t !== y.length - 1 && (0, r.jsx)(o.izJ, {})]
          }, e.key))
        })]
      })]
    })
  })
}