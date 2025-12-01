/** Chunk was on web.js **/
/** chunk id: 260430, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./472816.js"), require("./794429.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk373793 = require("./373793.js"),
  Chunk243814 = require("./243814.js"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk211266 = require("./211266.js"),
  Chunk713938 = require("./713938.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk282320 = require("./282320.js");

function _(e) {
  let {
    text: t,
    error: n,
    isFake: i
  } = e;
  return (0, r.jsxs)("div", {
    className: p.scope,
    children: [i ? (0, r.jsx)(c.k$p, {
      size: "md",
      color: "currentColor",
      className: a()(p.icon, p.fakeScopeIcon)
    }) : (0, r.jsx)(c.owK, {
      size: "md",
      color: "currentColor",
      className: a()(p.icon, p.scopeIcon)
    }), (0, r.jsxs)("div", {
      className: p.scopeInner,
      children: [(0, r.jsx)(l.x, {
        variant: "text-md/normal",
        color: i ? "text-muted" : true,
        children: t
      }), null != n ? (0, r.jsx)(l.x, {
        variant: "text-xs/normal",
        color: "text-danger",
        children: n
      }) : null]
    })]
  })
}

function m(e) {
  var t;
  let {
    application: n,
    accountScopes: i,
    requestedScopes: l,
    integrationType: m,
    errors: h,
    isTrustedName: g = false,
    noDivider: E = false
  } = e, b = (0, u.Z)(() => d.ZW[Math.floor(Math.random() * d.ZW.length)]);
  if (0 === i.length) return null;
  let y = b(),
    O = g ? f.t.PZpY9c : f.t["1Hz+Sl"],
    v = m === o.Y.USER_INSTALL && l.includes(s.x.APPLICATIONS_COMMANDS);
  return (0, r.jsxs)("div", {
    className: a()(p.scopes, E ? p.noDivider : true),
    children: [(0, r.jsx)(c.Heading, {
      variant: "heading-sm/normal",
      className: p.sectionLabel,
      children: f.intl.format(O, {
        application: null != (t = null == n ? true : n.name) ? t : ""
      })
    }), i.map(e => (0, d.CI)(e, i).map((t, n) => {
      var i;
      return (0, r.jsx)(_, {
        text: t,
        error: 0 === n ? null == h || null == (i = h[e]) ? true : i[0] : true
      }, "".concat(e, "-").concat(n))
    })).flat(), v && (0, r.jsx)(_, {
      text: f.intl.string(f.t.Ls2XRq)
    }), (0, r.jsx)(_, {
      text: y,
      isFake: true
    })]
  })
}