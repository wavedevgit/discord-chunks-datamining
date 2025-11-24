/** Chunk was on 46984 **/
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
    [b, y] = l.useState(false),
    {
      layout: p,
      collapseAfter: v,
      ContextProvider: j,
      useCollapsibleTitle: g,
      useCollapsedSubtitle: m
    } = d,
    h = p.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    x = null != v ? h.slice(0, v) : h,
    O = null != v ? h.slice(v) : [],
    S = null != j ? j : l.Fragment,
    C = null == f ? true : f(),
    P = null != (t = null == g ? true : g(b, O.length)) ? t : (n = O.length, b ? c.intl.formatToPlainString(c.t["3SHL+d"], {
      count: n
    }) : c.intl.formatToPlainString(c.t["8JRFyZ"], {
      count: n
    })),
    _ = null == m ? true : m();
  return (0, r.jsx)(S, {
    children: (0, r.jsxs)(i.Kqy, {
      gap: 8,
      children: [null != C && (0, r.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        color: "header-secondary",
        className: u.listTitle,
        children: C
      }), x.map((e, t) => (0, r.jsxs)(l.Fragment, {
        children: [(0, r.jsx)(o.Z, {
          node: e
        }), O.length > 0 && t !== x.length - 1 && (0, r.jsx)(a.Z, {})]
      }, e.key)), O.length > 0 && (0, r.jsxs)("div", {
        className: u.collapsibleContainer,
        children: [(0, r.jsx)(a.Z, {
          className: u.hoverDivider
        }), (0, r.jsx)(s.I, {
          title: P,
          collapsedSubtitle: _,
          isOpen: b,
          setIsOpen: y,
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