/** Chunk was on web.js **/
/** chunk id: 86040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => c,
  N: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk680018 = require("./680018.jsx"),
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
        children: [(0, r.jsx)(a.X6q, {
          variant: "heading-xl/bold",
          children: s.intl.string(s.t.Q03WWV)
        }), (0, r.jsxs)("p", {
          children: [(0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: s.intl.string(s.t.BxPxhI)
          }), (0, r.jsx)("br", {}), (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: s.intl.string(s.t.Y3fdOj)
          }), (0, r.jsx)("br", {}), (0, r.jsxs)(a.Text, {
            variant: "text-md/normal",
            children: [s.intl.string(s.t.Paa4v7), "\xa0", n ? s.intl.string(s.t.StGVvL) : (0, r.jsx)(a.eee, {
              onClick: i,
              children: s.intl.string(s.t.Ex7sk5)
            })]
          })]
        })]
      })
    })
  },
  u = () => (0, Chunk255367.jsx)("div", {
    children: (0, Chunk255367.jsx)(Chunk481060.mzw, {
      justify: Chunk600164.Z.Justify.BETWEEN,
      align: Chunk600164.Z.Align.CENTER,
      "data-migration-pending": true,
      children: (0, Chunk255367.jsx)(Chunk680018.z, {
        "data-testid": "continue",
        variant: "primary",
        disabled: true,
        text: Chunk388032.intl.string(Chunk388032.t.g8vPz8)
      })
    })
  })