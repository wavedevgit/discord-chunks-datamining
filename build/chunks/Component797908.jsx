/** Chunk was on 92504 **/
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
  Chunk219279 = require("./219279.js");
let m = function(e) {
  var t, n, m;
  let {
    application: h,
    onSelectApplication: f,
    showCategory: g = false
  } = e, b = r.useRef(null), x = null == (t = h.categories) ? true : t[0], [v, C] = r.useState(false), j = r.useCallback(e => {
    e && C(true)
  }, []), _ = (0, s.lf)(h), y = r.useCallback(() => {
    f(h.id)
  }, [f, h.id]), I = r.useMemo(() => v ? c.ZP.getApplicationIconURL({
    id: h.id,
    icon: h.icon,
    size: 48
  }) : true, [v, h]), S = g && null != x;
  return (0, a.jsx)(i.$, {
    innerRef: b,
    onChange: j,
    active: !v,
    children: (0, a.jsx)("div", {
      ref: b,
      className: p.container,
      children: (0, a.jsxs)(o.Z, {
        className: p.card,
        onClick: y,
        onContextMenu: () => {},
        "aria-label": u.intl.string(u.t.np1Wru),
        children: [(0, a.jsxs)("div", {
          className: p.header,
          children: [(0, a.jsx)("div", {
            style: {
              width: "100%",
              display: "block",
              aspectRatio: 16 / 9
            },
            children: v ? (0, a.jsx)(d.Z, {
              application: h,
              bannerType: "card",
              iconURL: I
            }) : null
          }), (0, a.jsx)("div", {
            className: p.avatarContainer,
            style: {
              height: 28
            },
            children: v ? (0, a.jsx)("img", {
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
        }), (0, a.jsxs)("div", {
          className: p.appDetails,
          children: [(0, a.jsx)("div", {
            className: p.titleContainer,
            children: (0, a.jsx)("div", {
              className: p.title,
              children: (0, a.jsx)(l.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                className: p.appName,
                children: h.name
              })
            })
          }), S || _ ? (0, a.jsxs)("div", {
            className: p.infoContainer,
            children: [S ? (0, a.jsx)(l.Text, {
              className: p.appCategory,
              variant: "text-xs/medium",
              color: "text-default",
              children: x.name
            }) : null, S && _ ? (0, a.jsx)(l.Text, {
              variant: "text-xs/medium",
              color: "text-subtle",
              children: "•"
            }) : null, _ ? (0, a.jsx)(l.Text, {
              variant: "text-xs/medium",
              color: "text-subtle",
              children: u.intl.string(u.t["/eVltv"])
            }) : null]
          }) : null, (0, a.jsx)(l.Text, {
            className: p.description,
            variant: "text-sm/medium",
            color: "text-default",
            lineClamp: S || _ ? 2 : 3,
            children: null != (m = null == (n = h.directory_entry) ? true : n.short_description) ? m : h.description
          })]
        })]
      })
    })
  })
}