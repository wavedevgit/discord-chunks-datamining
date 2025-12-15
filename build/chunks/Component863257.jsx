/** Chunk was on web.js **/
/** chunk id: 863257, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk961150 = require("./961150.js"),
  Chunk282793 = require("./282793.js"),
  Chunk73051 = require("./73051.js");

function u(e) {
  let {
    className: t,
    premiumGroupRole: n
  } = e, i = (0, s.Z)(n, true);
  if (null == i) return null;
  let {
    subheaderString: u,
    bodyString: d
  } = i;
  return (0, r.jsxs)("div", {
    className: a()(c.container, t),
    children: [(0, r.jsxs)(o.Kqy, {
      direction: "horizontal",
      gap: 8,
      align: "center",
      className: c.header,
      children: [(0, r.jsx)(o.Heading, {
        variant: "display-md",
        className: c.wordmark,
        children: (0, l.sO)()
      }), (0, r.jsx)(o.Cts, {
        type: "beta",
        variant: "expressive"
      })]
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      className: c.subheader,
      color: "text-default",
      children: u
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "text-default",
      children: d
    })]
  })
}