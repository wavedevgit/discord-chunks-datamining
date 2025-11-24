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
    [p, b] = l.useState(false),
    {
      layout: y,
      collapseAfter: v,
      ContextProvider: g,
      useCollapsibleTitle: h,
      useCollapsedSubtitle: m
    } = d,
    x = y.filter(e => {
      var t, n;
      return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
    }),
    j = null != v ? x.slice(0, v) : x,
    O = null != v ? x.slice(v) : [],
    C = null != g ? g : l.Fragment,
    P = null == f ? true : f(),
    S = null != (t = null == h ? true : h(p, O.length)) ? t : (n = O.length, p ? c.intl.formatToPlainString(c.t["3SHL+d"], {
      count: n
    }) : c.intl.formatToPlainString(c.t["8JRFyZ"], {
      count: n
    })),
    _ = null == m ? true : m();
  return (0, r.jsx)(C, {
    children: (0, r.jsxs)(i.Kqy, {
      gap: 8,
      children: [null != P && (0, r.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        color: "header-secondary",
        className: u.listTitle,
        children: P
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