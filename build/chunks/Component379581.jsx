/** Chunk was on 28636 **/
/** chunk id: 379581, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk9578 = require("./9578.jsx"),
  Chunk736653 = require("./736653.js"),
  Chunk573648 = require("./573648.js"),
  Chunk412461 = require("./412461.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk125257 = require("./125257.js");

function m(e) {
  var t, n;
  let {
    application: a,
    className: i,
    innerClassName: c
  } = e, o = null != (t = null == (n = a.directory_entry) ? true : n.external_urls) ? t : [];
  return null != a.terms_of_service_url || null != a.privacy_policy_url || o.length > 0 ? (0, l.jsxs)("div", {
    className: r()(h.kL, i),
    children: [(0, l.jsx)(s.Heading, {
      variant: "heading-sm/semibold",
      color: "text-strong",
      children: p.intl.string(p.t.l6DP2n)
    }), (0, l.jsxs)("div", {
      className: r()(h.p_, c),
      children: [o.map((e, t) => (0, l.jsx)(b, {
        url: e.url,
        children: e.name
      }, t)), null != a.terms_of_service_url ? (0, l.jsx)(f, {
        icon: s.oSV,
        url: a.terms_of_service_url,
        children: p.intl.string(p.t.s7STcY)
      }) : null, null != a.privacy_policy_url ? (0, l.jsx)(f, {
        icon: s.XAi,
        url: a.privacy_policy_url,
        children: p.intl.string(p.t.kH3JR5)
      }) : null]
    })]
  }) : null
}

function b(e) {
  var t, n;
  let {
    url: a,
    children: r
  } = e, c = (0, o.Ay)(), u = d.A.getByUrl(a), p = (0, i.Mw)(c) ? null == u || null == (t = u.icon) ? true : t.darkSVG : null == u || null == (n = u.icon) ? true : n.lightSVG;
  return (0, l.jsx)(f, {
    icon: true === p ? s.qYV : true,
    imageSrc: p,
    url: a,
    children: r
  })
}

function f(e) {
  let {
    icon: t,
    imageSrc: n,
    iconColor: a,
    url: i,
    children: o
  } = e, d = (0, u.DB)(), p = null;
  null != t ? p = (0, l.jsx)(t, {
    className: h.GU,
    color: null != a ? a : "currentColor",
    width: 20,
    height: 20,
    size: "custom"
  }) : null != n && (p = (0, l.jsx)("img", {
    className: h.GR,
    src: n,
    alt: ""
  }));
  let m = (0, l.jsxs)(l.Fragment, {
    children: [p, (0, l.jsx)(s.Text, {
      className: h.so,
      variant: "text-sm/medium",
      selectable: true,
      children: o
    })]
  });
  return (0, l.jsx)(c.A, {
    href: i,
    className: r()(h.Aw, h.SF),
    trusted: !d,
    useDefaultUnderlineStyles: false,
    children: m
  })
}