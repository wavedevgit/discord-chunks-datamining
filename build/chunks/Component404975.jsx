/** Chunk was on 75685 **/
/** chunk id: 404975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => p
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk984802 = require("./984802.js"),
  Chunk28682 = require("./28682.js"),
  Chunk996435 = require("./996435.js"),
  Chunk854014 = require("./854014.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk845435 = require("./845435.js");

function p(e) {
  let {
    root: t,
    header: n,
    footer: o,
    onClose: b,
    emptyState: p
  } = e, x = f.Z.useField("showNavigationMobile"), y = l.useMemo(() => {
    let e = [];
    return t.layout.forEach(t => {
      let {
        layout: n
      } = t;
      n.forEach(t => {
        if (null != t.trailing) switch (t.trailing.type) {
          case d.PU.BADGE_NEW:
          case d.PU.STRONGLY_DISCOURAGED_CUSTOM:
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
          className: i()(v.sidebar, e, {
            [v.mobile]: a.tq,
            [v.mobileNavigationOpen]: x
          }),
          children: [(0, r.jsxs)("div", {
            className: v.fixedContent,
            children: [a.tq && (0, r.jsx)("div", {
              className: v.mobileCloseButton,
              children: (0, r.jsx)(s.hU, {
                icon: s.Uz9,
                onClick: b,
                variant: "icon-only",
                size: "sm",
                "aria-label": m.intl.string(m.t.cpT0Cg)
              })
            }), (0, r.jsx)("div", {
              children: h.map(e => (0, r.jsx)(j, {
                section: e,
                visibleContent: l
              }, e.key))
            }), null != n && (0, r.jsx)(n, {}), null != p && 0 === g.length && (0, r.jsx)(p, {})]
          }), (0, r.jsxs)(s.zJl, {
            className: v.navScroller,
            fade: true,
            children: [(0, r.jsx)("nav", {
              className: v.nav,
              children: g.map(e => (0, r.jsx)(j, {
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

function j(e) {
  var t;
  let {
    section: n,
    visibleContent: l
  } = e, o = null == (t = n.useLabel) ? true : t.call(n);
  return (0, r.jsxs)("ul", {
    className: v.section,
    children: [null != o && (0, r.jsx)("div", {
      className: v.sectionLabel,
      children: (0, r.jsx)(s.Heading, {
        className: v.label,
        variant: "heading-sm/medium",
        color: "text-tertiary",
        children: o
      })
    }), n.layout.map(e => (0, r.jsx)("li", {
      children: (0, r.jsx)(b.y, {
        node: e,
        visibleContent: l
      })
    }, e.key))]
  })
}