/** Chunk was on web.js **/
/** chunk id: 635995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  In: () => d,
  T0: () => p,
  fY: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk659039 = require("./659039.js");
let d = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)(o.Heading, {
      variant: "heading-sm/medium",
      color: "text-strong",
      className: u.ut,
      children: t
    })
  },
  f = e => {
    let {
      text: t,
      onClick: n
    } = e;
    return (0, r.jsx)(s.$nd, {
      onClick: n,
      text: t,
      size: "sm",
      icon: o.tvc,
      variant: "secondary"
    })
  };

function p(e) {
  let {
    className: t,
    ref: n,
    children: i,
    onClick: s
  } = e;
  return (0, r.jsx)(o.NPJ, {
    theme: l.NJ.DARKER,
    children: e => (0, r.jsxs)("div", {
      ref: n,
      className: a()(u.lm, e, t),
      children: [(0, r.jsx)("div", {
        className: u.qZ,
        children: i
      }), (0, r.jsx)(o.DUT, {
        focusProps: {
          offset: 6
        },
        className: u.b,
        onClick: s,
        "aria-label": c.intl.string(c.t.WAI6xu),
        children: (0, r.jsx)(o.PGe, {
          size: "sm"
        })
      })]
    })
  })
}