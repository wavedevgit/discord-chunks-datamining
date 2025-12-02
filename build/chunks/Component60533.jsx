/** Chunk was on 384 **/
/** chunk id: 60533, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk90815 = require("./90815.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk254574 = require("./254574.js");

function g(e) {
  let {
    guild: t
  } = e, n = (0, i.e7)([c.default], () => {
    let e = c.default.getCurrentUser();
    return (0, o.eM)(t, e)
  });
  return (0, r.jsxs)(a.Kqy, {
    gap: 24,
    className: u.container,
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: d.intl.string(d.t.Ms33Ds)
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: d.intl.string(d.t.xK7oic)
    }), (0, r.jsx)(l.u, {
      text: d.intl.string(d.t.VAIHXQ),
      shouldShow: !n,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(a.Button, {
          variant: "primary",
          text: d.intl.string(d.t.ZXeJbS),
          disabled: !n,
          onClick: () => {
            (0, s.q)(t.id, {
              demonetized: true
            })
          }
        })
      })
    })]
  })
}