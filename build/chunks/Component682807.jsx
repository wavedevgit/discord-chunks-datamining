/** Chunk was on 92504 **/
/** chunk id: 682807, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk794295 = require("./794295.jsx"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk881294 = require("./881294.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk442245 = require("./442245.js");

function h(e) {
  var t, n;
  let {
    application: r,
    className: l,
    innerClassName: o
  } = e, c = null != (n = null == (t = r.directory_entry) ? true : t.external_urls) ? n : [];
  return null != r.terms_of_service_url || null != r.privacy_policy_url || c.length > 0 ? (0, a.jsxs)("div", {
    className: i()(m.container, l),
    children: [(0, a.jsx)(s.Heading, {
      variant: "heading-sm/semibold",
      color: "text-strong",
      children: p.intl.string(p.t.l6DP2n)
    }), (0, a.jsxs)("div", {
      className: i()(m.list, o),
      children: [c.map((e, t) => (0, a.jsx)(f, {
        url: e.url,
        children: e.name
      }, t)), null != r.terms_of_service_url ? (0, a.jsx)(g, {
        icon: s.aAW,
        url: r.terms_of_service_url,
        children: p.intl.string(p.t.s7STcY)
      }) : null, null != r.privacy_policy_url ? (0, a.jsx)(g, {
        icon: s.mBM,
        url: r.privacy_policy_url,
        children: p.intl.string(p.t.kH3JR5)
      }) : null]
    })]
  }) : null
}

function f(e) {
  var t, n;
  let {
    url: r,
    children: i
  } = e, o = (0, c.ZP)(), u = d.Z.getByUrl(r), p = (0, l.wj)(o) ? null == u || null == (t = u.icon) ? true : t.darkSVG : null == u || null == (n = u.icon) ? true : n.lightSVG;
  return (0, a.jsx)(g, {
    icon: true === p ? s.xPt : true,
    imageSrc: p,
    url: r,
    children: i
  })
}

function g(e) {
  let {
    icon: t,
    imageSrc: n,
    iconColor: r,
    url: l,
    children: c
  } = e, d = (0, u.nu)(), p = null;
  null != t ? p = (0, a.jsx)(t, {
    className: m.listIcon,
    color: null != r ? r : "currentColor",
    width: 20,
    height: 20,
    size: "custom"
  }) : null != n && (p = (0, a.jsx)("img", {
    className: m.listImage,
    src: n,
    alt: ""
  }));
  let h = (0, a.jsxs)(a.Fragment, {
    children: [p, (0, a.jsx)(s.Text, {
      className: m.listText,
      variant: "text-sm/medium",
      selectable: true,
      children: c
    })]
  });
  return (0, a.jsx)(o.Z, {
    href: l,
    className: i()(m.listItem, m.linkItem),
    trusted: !d,
    useDefaultUnderlineStyles: false,
    children: h
  })
}