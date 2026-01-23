/** Chunk was on 47841 **/
/** chunk id: 720281, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk615900 = require("./615900.jsx"),
  Chunk260509 = require("./260509.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk552873 = require("./552873.js");

function g(e) {
  let {
    guild: t
  } = e, n = (0, i.bG)([c.default], () => {
    let e = c.default.getCurrentUser();
    return (0, o.bM)(t, e)
  });
  return (0, r.jsxs)(s.BJc, {
    gap: 24,
    className: u.k,
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: d.intl.string(d.t.Ms33Ds)
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: d.intl.string(d.t.xK7oic)
    }), (0, r.jsx)(l.m, {
      text: d.intl.string(d.t.VAIHXQ),
      shouldShow: !n,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(s.Button, {
          variant: "primary",
          text: d.intl.string(d.t.ZXeJbS),
          disabled: !n,
          onClick: () => {
            (0, a.h)(t.id, {
              demonetized: true
            })
          }
        })
      })
    })]
  })
}