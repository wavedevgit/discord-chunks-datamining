/** Chunk was on 28636 **/
/** chunk id: 487953, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk230109 = require("./230109.js"),
  Chunk397927 = require("./397927.js"),
  Chunk735991 = require("./735991.js"),
  Chunk635350 = require("./635350.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk841985 = require("./841985.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk286453 = require("./286453.js");
let h = function(e) {
  var t, n, h;
  let {
    application: m,
    onSelectApplication: g,
    showCategory: _ = false
  } = e, b = l.useRef(null), f = null == (n = m.categories) ? true : n[0], [x, v] = l.useState(false), j = l.useCallback(e => {
    e && v(true)
  }, []), A = (0, s.NO)(m), y = l.useCallback(() => {
    g(m.id)
  }, [g, m.id]), C = l.useMemo(() => x ? c.Ay.getApplicationIconURL({
    id: m.id,
    icon: m.icon,
    size: 48
  }) : true, [x, m]), O = _ && null != f;
  return (0, r.jsx)(i.L, {
    innerRef: b,
    onChange: j,
    active: !x,
    children: (0, r.jsx)("div", {
      ref: b,
      className: p.kL,
      children: (0, r.jsxs)(o.A, {
        className: p.Nr,
        onClick: y,
        onContextMenu: () => {},
        "aria-label": u.intl.string(u.t.np1Wru),
        children: [(0, r.jsxs)("div", {
          className: p.wx,
          children: [(0, r.jsx)("div", {
            style: {
              width: "100%",
              display: "block",
              aspectRatio: 16 / 9
            },
            children: x ? (0, r.jsx)(d.A, {
              application: m,
              bannerType: "card",
              iconURL: C
            }) : null
          }), (0, r.jsx)("div", {
            className: p.H,
            style: {
              height: 28
            },
            children: x ? (0, r.jsx)("img", {
              src: C,
              alt: "",
              className: p.my,
              height: 48,
              width: 48,
              style: {
                borderWidth: 4,
                marginLeft: 12
              }
            }) : null
          })]
        }), (0, r.jsxs)("div", {
          className: p.eV,
          children: [(0, r.jsx)("div", {
            className: p.gn,
            children: (0, r.jsx)("div", {
              className: p.DD,
              children: (0, r.jsx)(a.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                className: p.JB,
                children: m.name
              })
            })
          }), O || A ? (0, r.jsxs)("div", {
            className: p.op,
            children: [O ? (0, r.jsx)(a.Text, {
              className: p.m4,
              variant: "text-xs/medium",
              color: "text-default",
              children: f.name
            }) : null, O && A ? (0, r.jsx)(a.Text, {
              variant: "text-xs/medium",
              color: "text-subtle",
              children: "•"
            }) : null, A ? (0, r.jsx)(a.Text, {
              variant: "text-xs/medium",
              color: "text-subtle",
              children: u.intl.string(u.t["/eVltv"])
            }) : null]
          }) : null, (0, r.jsx)(a.Text, {
            className: p.h_,
            variant: "text-sm/medium",
            color: "text-default",
            lineClamp: O || A ? 2 : 3,
            children: null != (t = null == (h = m.directory_entry) ? true : h.short_description) ? t : m.description
          })]
        })]
      })
    })
  })
}