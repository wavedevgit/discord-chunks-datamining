/** Chunk was on web.js **/
/** chunk id: 698779, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk22423 = require("./22423.js");

function d() {
  let e = (0, o.bG)([c.A], () => c.A.useReducedMotion),
    {
      styleLarge: t,
      styleSmall: n
    } = i.useMemo(() => ({
      styleLarge: {
        width: "".concat(10 + 50 * Math.random(), "%")
      },
      styleSmall: {
        width: "".concat(30 + 60 * Math.random(), "%")
      }
    }), []);
  return (0, r.jsxs)("div", {
    className: s()(u.kL, {
      [u.cb]: e
    }),
    children: [(0, r.jsx)("div", {
      className: u.Pz
    }), (0, r.jsxs)("div", {
      className: u.FS,
      children: [(0, r.jsx)("div", {
        className: u.jC,
        style: t,
        children: (0, r.jsx)(l.Heading, {
          className: u.R,
          variant: "heading-md/semibold",
          color: "text-strong",
          lineClamp: 1,
          children: "_"
        })
      }), (0, r.jsx)("div", {
        className: u.jC,
        style: n,
        children: (0, r.jsx)(l.Text, {
          className: u.R,
          variant: "text-sm/normal",
          color: "text-subtle",
          lineClamp: 1,
          children: "_"
        })
      })]
    }), (0, r.jsx)("div", {
      className: u.V1
    })]
  })
}