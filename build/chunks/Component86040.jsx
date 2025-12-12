/** Chunk was on web.js **/
/** chunk id: 86040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => c,
  N: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk123472 = require("./123472.js");
let c = e => {
    let {
      className: t,
      isEmailResent: n,
      resendEmail: i
    } = e;
    return (0, r.jsx)("div", {
      className: t,
      children: (0, r.jsxs)("div", {
        className: l.awaitingWrapper,
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-xl/bold",
          children: s.intl.string(s.t.Q03WWV)
        }), (0, r.jsxs)("p", {
          children: [(0, r.jsx)(o.Text, {
            variant: "text-md/normal",
            children: s.intl.string(s.t.BxPxhI)
          }), (0, r.jsx)("br", {}), (0, r.jsx)(o.Text, {
            variant: "text-md/normal",
            children: s.intl.string(s.t.Y3fdOp)
          }), (0, r.jsx)("br", {}), (0, r.jsxs)(o.Text, {
            variant: "text-md/normal",
            children: [s.intl.string(s.t.Paa4v4), "\xa0", n ? s.intl.string(s.t.StGVvC) : (0, r.jsx)(o.Anchor, {
              onClick: i,
              children: s.intl.string(s.t.Ex7sk9)
            })]
          })]
        })]
      })
    })
  },
  u = () => (0, Chunk54381.jsx)("div", {
    children: (0, Chunk54381.jsx)(Chunk481060.mzw, {
      justify: Chunk600164.Z.Justify.BETWEEN,
      align: Chunk600164.Z.Align.CENTER,
      "data-migration-pending": true,
      children: (0, Chunk54381.jsx)(Chunk159691.zxk, {
        "data-testid": "continue",
        variant: "primary",
        disabled: true,
        text: Chunk388032.intl.string(Chunk388032.t.g8vPzy)
      })
    })
  })