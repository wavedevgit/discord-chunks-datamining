/** Chunk was on web.js **/
/** chunk id: 771887, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => c,
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk678863 = require("./678863.js");
let c = e => {
    let {
      className: t,
      isEmailResent: n,
      resendEmail: i
    } = e;
    return (0, r.jsx)("div", {
      className: t,
      children: (0, r.jsxs)("div", {
        className: l.a,
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-xl/bold",
          children: s.intl.string(s.t.Q03WWV)
        }), (0, r.jsxs)("p", {
          children: [(0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: s.intl.string(s.t.BxPxhI)
          }), (0, r.jsx)("br", {}), (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: s.intl.string(s.t.Y3fdOp)
          }), (0, r.jsx)("br", {}), (0, r.jsxs)(a.Text, {
            variant: "text-md/normal",
            children: [s.intl.string(s.t.Paa4v4), "\xa0", n ? s.intl.string(s.t.StGVvC) : (0, r.jsx)(a.MzZ, {
              onClick: i,
              children: s.intl.string(s.t.Ex7sk9)
            })]
          })]
        })]
      })
    })
  },
  u = () => (0, r.jsx)("div", {
    children: (0, r.jsx)(a.jlY, {
      justify: o.A.Justify.BETWEEN,
      align: o.A.Align.CENTER,
      "data-migration-pending": true,
      children: (0, r.jsx)(i.$nd, {
        "data-testid": "continue",
        variant: "primary",
        disabled: true,
        text: s.intl.string(s.t.g8vPzy)
      })
    })
  })