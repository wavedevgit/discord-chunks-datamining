/** Chunk was on 44384 **/
/** chunk id: 635995, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  In: () => E,
  T0: () => _,
  fY: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk659039 = require("./659039.js");
let E = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)(a.Heading, {
      variant: "heading-sm/medium",
      color: "text-strong",
      className: u.ut,
      children: t
    })
  },
  d = e => {
    let {
      text: t,
      onClick: n
    } = e;
    return (0, r.jsx)(o.$nd, {
      onClick: n,
      text: t,
      size: "sm",
      icon: a.tvc,
      variant: "secondary"
    })
  };

function _(e) {
  let {
    className: t,
    ref: n,
    children: i,
    onClick: o
  } = e;
  return (0, r.jsx)(a.NPJ, {
    theme: s.NJ.DARKER,
    children: e => (0, r.jsxs)("div", {
      ref: n,
      className: l()(u.lm, e, t),
      children: [(0, r.jsx)("div", {
        className: u.qZ,
        children: i
      }), (0, r.jsx)(a.DUT, {
        focusProps: {
          offset: 6
        },
        className: u.b,
        onClick: o,
        "aria-label": c.intl.string(c.t.WAI6xu),
        children: (0, r.jsx)(a.PGe, {
          size: "sm"
        })
      })]
    })
  })
}