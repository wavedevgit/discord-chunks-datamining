/** Chunk was on 28636 **/
/** chunk id: 116219, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk230109 = require("./230109.js"),
  Chunk397927 = require("./397927.js"),
  Chunk735991 = require("./735991.js"),
  Chunk486020 = require("./486020.js"),
  Chunk841985 = require("./841985.jsx"),
  Chunk569495 = require("./569495.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk240815 = require("./240815.js");
let h = function(e) {
  let {
    application: t,
    onButtonsVisibilityChange: n
  } = e, h = l.useRef(null), m = l.useMemo(() => o.Ay.getApplicationIconURL({
    id: t.id,
    icon: t.icon,
    size: 96
  }), [t]), g = l.useMemo(() => {
    let e = [];
    return (0, s.b7)(t) && e.push(u.intl.string(u.t.LO4f0P)), (0, s.K4)(t) && (0 !== e.length && e.push("•"), e.push(u.intl.string(u.t["8z5B2U"]))), (0, s.ME)(t) && (0 !== e.length && e.push("•"), e.push(u.intl.string(u.t["5khEk8"]))), e
  }, [t]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.A, {
      application: t,
      bannerType: "detail",
      iconURL: m
    }), (0, r.jsx)("div", {
      className: p.H,
      style: {
        height: 52
      },
      children: (0, r.jsx)("img", {
        src: m,
        alt: "",
        className: p.my,
        height: 96,
        width: 96,
        style: {
          borderWidth: 4,
          marginLeft: 28
        }
      })
    }), (0, r.jsxs)("div", {
      className: p.op,
      children: [(0, r.jsxs)("div", {
        className: p.tJ,
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-xxl/bold",
          color: "text-strong",
          lineClamp: 1,
          children: t.name
        }), (0, r.jsx)("div", {
          className: p.A7,
          children: g.map((e, t) => (0, r.jsx)(a.Text, {
            className: p.MO,
            variant: "text-xs/normal",
            color: "text-muted",
            children: e
          }, t))
        })]
      }), (0, r.jsx)(i.L, {
        innerRef: h,
        onChange: n,
        active: true,
        children: (0, r.jsx)(d.A, {
          ref: h,
          application: t,
          size: "md"
        })
      })]
    })]
  })
}