/** Chunk was on 69844 **/
/** chunk id: 797908, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk783097 = require("./783097.js"),
  Chunk66637 = require("./66637.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk956965 = require("./956965.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk401346 = require("./401346.js");
let m = function(e) {
  var t, n, m;
  let {
    application: h,
    onSelectApplication: g,
    showCategory: _ = false
  } = e, f = a.useRef(null), b = null == (t = h.categories) ? true : t[0], [x, v] = a.useState(false), C = a.useCallback(e => {
    e && v(true)
  }, []), j = (0, s.lf)(h), y = a.useCallback(() => {
    g(h.id)
  }, [g, h.id]), I = a.useMemo(() => x ? c.ZP.getApplicationIconURL({
    id: h.id,
    icon: h.icon,
    size: 48
  }) : true, [x, h]), S = _ && null != b;
  return (0, r.jsx)(i.$, {
    innerRef: f,
    onChange: C,
    active: !x,
    children: (0, r.jsx)("div", {
      ref: f,
      className: p.container,
      children: (0, r.jsxs)(o.Z, {
        className: p.card,
        onClick: y,
        onContextMenu: () => {},
        "aria-label": u.intl.string(u.t.np1Wru),
        children: [(0, r.jsxs)("div", {
          className: p.header,
          children: [(0, r.jsx)("div", {
            style: {
              width: "100%",
              display: "block",
              aspectRatio: 16 / 9
            },
            children: x ? (0, r.jsx)(d.Z, {
              application: h,
              bannerType: "card",
              iconURL: I
            }) : null
          }), (0, r.jsx)("div", {
            className: p.avatarContainer,
            style: {
              height: 28
            },
            children: x ? (0, r.jsx)("img", {
              src: I,
              alt: "",
              className: p.avatar,
              height: 48,
              width: 48,
              style: {
                borderWidth: 4,
                marginLeft: 12
              }
            }) : null
          })]
        }), (0, r.jsxs)("div", {
          className: p.appDetails,
          children: [(0, r.jsx)("div", {
            className: p.titleContainer,
            children: (0, r.jsx)("div", {
              className: p.title,
              children: (0, r.jsx)(l.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                className: p.appName,
                children: h.name
              })
            })
          }), S || j ? (0, r.jsxs)("div", {
            className: p.infoContainer,
            children: [S ? (0, r.jsx)(l.Text, {
              className: p.appCategory,
              variant: "text-xs/medium",
              color: "text-default",
              children: b.name
            }) : null, S && j ? (0, r.jsx)(l.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              children: "•"
            }) : null, j ? (0, r.jsx)(l.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              children: u.intl.string(u.t["/eVltv"])
            }) : null]
          }) : null, (0, r.jsx)(l.Text, {
            className: p.description,
            variant: "text-sm/medium",
            color: "header-secondary",
            lineClamp: S || j ? 2 : 3,
            children: null != (m = null == (n = h.directory_entry) ? true : n.short_description) ? m : h.description
          })]
        })]
      })
    })
  })
}