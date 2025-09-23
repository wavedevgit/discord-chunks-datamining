/** Chunk was on web.js **/
/** chunk id: 51331, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk953821 = require("./953821.js");

function d(e) {
  let {
    value: t,
    onChange: n,
    className: a,
    note: d,
    title: f,
    disabled: _
  } = e, p = i.useRef(null), h = i.useRef(null), m = i.useId(), g = (0, r.jsx)(s.T2, {
    id: m,
    checked: t,
    onChange: n,
    focusProps: {
      enabled: false
    },
    innerRef: p,
    disabled: _
  });
  return (0, r.jsx)("div", {
    className: o()(u.container, a, {
      [u.disabled]: _
    }),
    children: (0, r.jsx)(l.tEY, {
      within: true,
      offset: false,
      focusTarget: p,
      ringTarget: h,
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: u.text,
          children: (0, r.jsx)(c.H, {
            header: f,
            description: d,
            relatedId: m,
            disabled: _
          })
        }), (0, r.jsx)("div", {
          className: u.control,
          children: g
        })]
      })
    })
  })
}