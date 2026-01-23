/** Chunk was on 28636 **/
/** chunk id: 379581, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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
    application: l,
    className: a,
    innerClassName: o
  } = e, c = null != (t = null == (n = l.directory_entry) ? true : n.external_urls) ? t : [];
  return null != l.terms_of_service_url || null != l.privacy_policy_url || c.length > 0 ? (0, r.jsxs)("div", {
    className: i()(h.kL, a),
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-sm/semibold",
      color: "text-strong",
      children: p.intl.string(p.t.l6DP2n)
    }), (0, r.jsxs)("div", {
      className: i()(h.p_, o),
      children: [c.map((e, t) => (0, r.jsx)(g, {
        url: e.url,
        children: e.name
      }, t)), null != l.terms_of_service_url ? (0, r.jsx)(_, {
        icon: s.oSV,
        url: l.terms_of_service_url,
        children: p.intl.string(p.t.s7STcY)
      }) : null, null != l.privacy_policy_url ? (0, r.jsx)(_, {
        icon: s.XAi,
        url: l.privacy_policy_url,
        children: p.intl.string(p.t.kH3JR5)
      }) : null]
    })]
  }) : null
}

function g(e) {
  var t, n;
  let {
    url: l,
    children: i
  } = e, o = (0, c.Ay)(), u = d.A.getByUrl(l), p = (0, a.Mw)(o) ? null == u || null == (t = u.icon) ? true : t.darkSVG : null == u || null == (n = u.icon) ? true : n.lightSVG;
  return (0, r.jsx)(_, {
    icon: true === p ? s.qYV : true,
    imageSrc: p,
    url: l,
    children: i
  })
}

function _(e) {
  let {
    icon: t,
    imageSrc: n,
    iconColor: l,
    url: a,
    children: c
  } = e, d = (0, u.DB)(), p = null;
  null != t ? p = (0, r.jsx)(t, {
    className: h.GU,
    color: null != l ? l : "currentColor",
    width: 20,
    height: 20,
    size: "custom"
  }) : null != n && (p = (0, r.jsx)("img", {
    className: h.GR,
    src: n,
    alt: ""
  }));
  let m = (0, r.jsxs)(r.Fragment, {
    children: [p, (0, r.jsx)(s.Text, {
      className: h.so,
      variant: "text-sm/medium",
      selectable: true,
      children: c
    })]
  });
  return (0, r.jsx)(o.A, {
    href: a,
    className: i()(h.Aw, h.SF),
    trusted: !d,
    useDefaultUnderlineStyles: false,
    children: m
  })
}