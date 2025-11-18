/** Chunk was on 84283 **/
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
  Chunk68790 = require("./68790.js");

function h(e) {
  var t, n;
  let {
    application: a,
    className: l,
    innerClassName: o
  } = e, c = null != (n = null == (t = a.directory_entry) ? true : t.external_urls) ? n : [];
  return null != a.terms_of_service_url || null != a.privacy_policy_url || c.length > 0 ? (0, r.jsxs)("div", {
    className: i()(m.container, l),
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-sm/semibold",
      color: "header-primary",
      children: p.intl.string(p.t.l6DP2n)
    }), (0, r.jsxs)("div", {
      className: i()(m.list, o),
      children: [c.map((e, t) => (0, r.jsx)(g, {
        url: e.url,
        children: e.name
      }, t)), null != a.terms_of_service_url ? (0, r.jsx)(_, {
        icon: s.aAW,
        url: a.terms_of_service_url,
        children: p.intl.string(p.t.s7STcY)
      }) : null, null != a.privacy_policy_url ? (0, r.jsx)(_, {
        icon: s.mBM,
        url: a.privacy_policy_url,
        children: p.intl.string(p.t.kH3JR5)
      }) : null]
    })]
  }) : null
}

function g(e) {
  var t, n;
  let {
    url: a,
    children: i
  } = e, o = (0, c.ZP)(), u = d.Z.getByUrl(a), p = (0, l.wj)(o) ? null == u || null == (t = u.icon) ? true : t.darkSVG : null == u || null == (n = u.icon) ? true : n.lightSVG;
  return (0, r.jsx)(_, {
    icon: true === p ? s.xPt : true,
    imageSrc: p,
    url: a,
    children: i
  })
}

function _(e) {
  let {
    icon: t,
    imageSrc: n,
    iconColor: a,
    url: l,
    children: c
  } = e, d = (0, u.nu)(), p = null;
  null != t ? p = (0, r.jsx)(t, {
    className: m.listIcon,
    color: null != a ? a : "currentColor",
    width: 20,
    height: 20,
    size: "custom"
  }) : null != n && (p = (0, r.jsx)("img", {
    className: m.listImage,
    src: n,
    alt: ""
  }));
  let h = (0, r.jsxs)(r.Fragment, {
    children: [p, (0, r.jsx)(s.Text, {
      className: m.listText,
      variant: "text-sm/medium",
      selectable: true,
      children: c
    })]
  });
  return (0, r.jsx)(o.Z, {
    href: l,
    className: i()(m.listItem, m.linkItem),
    trusted: !d,
    useDefaultUnderlineStyles: false,
    children: h
  })
}