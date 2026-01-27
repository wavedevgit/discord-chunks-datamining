/** Chunk was on web.js **/
/** chunk id: 864721, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./864466.js"), require("./443073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk485845 = require("./485845.js"),
  Chunk179771 = require("./179771.js"),
  Chunk571356 = require("./571356.js"),
  Chunk397927 = require("./397927.js"),
  Chunk444927 = require("./444927.js"),
  Chunk647053 = require("./647053.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk406421 = require("./406421.js");

function _(e) {
  let {
    text: t,
    error: n,
    isFake: i
  } = e;
  return (0, r.jsxs)("div", {
    className: p.z8,
    children: [i ? (0, r.jsx)(c.aXh, {
      size: "md",
      color: "currentColor",
      className: a()(p.Kk, p.RC)
    }) : (0, r.jsx)(c.yr3, {
      size: "md",
      color: "currentColor",
      className: a()(p.Kk, p.sc)
    }), (0, r.jsxs)("div", {
      className: p.rv,
      children: [(0, r.jsx)(l.E, {
        variant: "text-md/normal",
        color: i ? "text-muted" : true,
        children: t
      }), null != n ? (0, r.jsx)(l.E, {
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: n
      }) : null]
    })]
  })
}

function h(e) {
  var t;
  let {
    application: n,
    accountScopes: i,
    requestedScopes: l,
    integrationType: h,
    errors: m,
    isTrustedName: g = false,
    noDivider: E = false
  } = e, y = (0, u.A)(() => d.O_[Math.floor(Math.random() * d.O_.length)]);
  if (0 === i.length) return null;
  let b = y(),
    O = g ? f.t.PZpY9c : f.t["1Hz+Sl"],
    v = h === o.b.USER_INSTALL && l.includes(s.F.APPLICATIONS_COMMANDS);
  return (0, r.jsxs)("div", {
    className: a()(p.Wu, E ? p.bc : true),
    children: [(0, r.jsx)(c.Heading, {
      variant: "heading-sm/normal",
      className: p.a9,
      children: f.intl.format(O, {
        application: null != (t = null == n ? true : n.name) ? t : ""
      })
    }), i.map(e => (0, d.rY)(e, i).map((t, n) => {
      var i;
      return (0, r.jsx)(_, {
        text: t,
        error: 0 === n ? null == m || null == (i = m[e]) ? true : i[0] : true
      }, "".concat(e, "-").concat(n))
    })).flat(), v && (0, r.jsx)(_, {
      text: f.intl.string(f.t.Ls2XRq)
    }), (0, r.jsx)(_, {
      text: b,
      isFake: true
    })]
  })
}