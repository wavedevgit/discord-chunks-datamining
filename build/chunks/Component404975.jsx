/** Chunk was on 75685 **/
/** chunk id: 404975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => j
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk984802 = require("./984802.js"),
  Chunk59662 = require("./59662.js"),
  Chunk28682 = require("./28682.js"),
  Chunk854014 = require("./854014.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk845435 = require("./845435.js");

function j(e) {
  let {
    root: t,
    header: n,
    footer: o,
    onClose: m,
    emptyState: j
  } = e, {
    showNavigationMobile: x
  } = (0, d.t)(), y = l.useMemo(() => {
    let e = [];
    return t.layout.forEach(t => {
      let {
        layout: n
      } = t;
      n.forEach(t => {
        if (null != t.trailing) switch (t.trailing.type) {
          case f.PU.BADGE_NEW:
          case f.PU.STRONGLY_DISCOURAGED_CUSTOM:
            var n, r, l;
            null == (r = (l = t.trailing).getDismissibleContentTypes) || null == (n = r.call(l)) || n.forEach(t => {
              e.push(t)
            })
        }
      })
    }), e
  }, [t.layout]), [h, g] = l.useMemo(() => {
    let e = [],
      n = [];
    return t.layout.forEach(t => {
      t.hoisted ? e.push(t) : n.push(t)
    }), [e, n]
  }, [t.layout]), O = (0, u.Ll)();
  return (0, r.jsx)(s.f6W, {
    theme: O,
    children: e => (0, r.jsx)(c.ZP, {
      contentTypes: y,
      children: t => {
        let {
          visibleContent: l
        } = t;
        return (0, r.jsxs)("div", {
          className: i()(p.sidebar, e, {
            [p.mobile]: a.tq,
            [p.mobileNavigationOpen]: x
          }),
          children: [(0, r.jsxs)("div", {
            className: p.fixedContent,
            children: [a.tq && (0, r.jsx)("div", {
              className: p.mobileCloseButton,
              children: (0, r.jsx)(s.hU, {
                icon: s.Uz9,
                onClick: m,
                variant: "icon-only",
                size: "sm",
                "aria-label": b.intl.string(b.t.cpT0Cg)
              })
            }), (0, r.jsx)("div", {
              children: h.map(e => (0, r.jsx)(v, {
                section: e,
                visibleContent: l
              }, e.key))
            }), null != n && (0, r.jsx)(n, {}), null != j && 0 === g.length && (0, r.jsx)(j, {})]
          }), (0, r.jsxs)(s.zJl, {
            className: p.navScroller,
            fade: true,
            children: [(0, r.jsx)("nav", {
              className: p.nav,
              children: g.map(e => (0, r.jsx)(v, {
                section: e,
                visibleContent: l
              }, e.key))
            }), null != o && (0, r.jsx)(o, {})]
          })]
        })
      }
    })
  })
}

function v(e) {
  var t;
  let {
    section: n,
    visibleContent: l
  } = e, o = null == (t = n.useLabel) ? true : t.call(n);
  return (0, r.jsxs)("ul", {
    className: p.section,
    children: [null != o && (0, r.jsx)("div", {
      className: p.sectionLabel,
      children: (0, r.jsx)(s.Heading, {
        className: p.label,
        variant: "heading-sm/medium",
        color: "text-tertiary",
        children: o
      })
    }), n.layout.map(e => (0, r.jsx)("li", {
      children: (0, r.jsx)(m.y, {
        node: e,
        visibleContent: l
      })
    }, e.key))]
  })
}