/** Chunk was on web.js **/
/** chunk id: 51331, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk43190 = require("./43190.js");

function u(e) {
  let {
    value: t,
    onChange: n,
    className: o,
    note: u,
    title: d,
    disabled: f
  } = e, _ = i.useRef(null), p = i.useRef(null), h = i.useId(), m = (0, r.jsx)(s.rsf, {
    id: h,
    checked: t,
    onChange: n,
    focusProps: {
      enabled: false
    },
    innerRef: _,
    disabled: f
  });
  return (0, r.jsx)("div", {
    className: a()(c.container, o, {
      [c.disabled]: f
    }),
    children: (0, r.jsx)(s.tEY, {
      within: true,
      offset: false,
      focusTarget: _,
      ringTarget: p,
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: c.text,
          children: (0, r.jsx)(l.H, {
            header: d,
            description: u,
            relatedId: h,
            disabled: f
          })
        }), (0, r.jsx)("div", {
          className: c.control,
          children: m
        })]
      })
    })
  })
}