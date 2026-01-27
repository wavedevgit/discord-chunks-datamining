/** Chunk was on web.js **/
/** chunk id: 884496, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk134130 = require("./134130.js");
let u = e => {
  let {
    hasContent: t,
    onClear: n,
    className: i,
    isLoading: u,
    size: d = "sm"
  } = e;
  return (0, r.jsx)(o.DUT, {
    className: a()(i, c.Qm, {
      [c.Wn]: t
    }),
    "data-size": d,
    onClick: e => {
      e.stopPropagation(), null != n && n(e)
    },
    tabIndex: t ? 0 : false,
    "aria-hidden": !t,
    onMouseDown: e => {
      e.preventDefault(), e.stopPropagation()
    },
    children: (0, r.jsx)("div", {
      className: c.zc,
      children: u ? (0, r.jsx)(o.y$y, {
        type: o.y$y.Type.SPINNING_CIRCLE,
        className: a()(c.Kk, c.RK)
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.$p$, {
          color: "currentColor",
          className: a()(c.Kk, {
            [c.RK]: !t
          }),
          "aria-label": l.intl.string(l.t["5h0QOP"])
        }), (0, r.jsx)(s.PGe, {
          color: "currentColor",
          className: a()(c.IU, {
            [c.RK]: t
          }),
          "aria-label": l.intl.string(l.t.VkKicb)
        })]
      })
    })
  })
}