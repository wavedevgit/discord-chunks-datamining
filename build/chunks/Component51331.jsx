/** Chunk was on 20501 **/
/** chunk id: 51331, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk648958 = require("./648958.js");

function d(e) {
  let {
    value: t,
    onChange: n,
    className: s,
    note: d,
    title: u,
    disabled: m
  } = e, p = r.useRef(null), g = r.useRef(null), h = r.useId(), f = (0, i.jsx)(l.rsf, {
    id: h,
    checked: t,
    onChange: n,
    focusProps: {
      enabled: false
    },
    innerRef: p,
    disabled: m
  });
  return (0, i.jsx)("div", {
    className: a()(c.container, s, {
      [c.disabled]: m
    }),
    children: (0, i.jsx)(l.tEY, {
      within: true,
      offset: false,
      focusTarget: p,
      ringTarget: g,
      children: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: c.text,
          children: (0, i.jsx)(o.H, {
            header: u,
            description: d,
            relatedId: h,
            disabled: m
          })
        }), (0, i.jsx)("div", {
          className: c.control,
          children: f
        })]
      })
    })
  })
}