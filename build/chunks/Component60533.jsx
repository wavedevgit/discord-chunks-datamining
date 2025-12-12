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
  return (0, r.jsxs)(s.Kqy, {
    gap: 24,
    className: d.container,
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: u.intl.string(u.t.Ms33Ds)
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: u.intl.string(u.t.xK7oic)
    }), (0, r.jsx)(l.u, {
      text: u.intl.string(u.t.VAIHXQ),
      shouldShow: !n,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(s.Button, {
          variant: "primary",
          text: u.intl.string(u.t.ZXeJbS),
          disabled: !n,
          onClick: () => {
            (0, a.q)(t.id, {
              demonetized: true
            })
          }
        })
      })
    })]
  })
}