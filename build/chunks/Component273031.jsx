/** Chunk was on web.js **/
/** chunk id: 273031, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk951394 = require("./951394.jsx"),
  Chunk820230 = require("./820230.js");

function u(e) {
  let {
    onClick: t,
    children: n,
    tooltip: o,
    dangerous: u = false,
    className: d,
    "aria-label": f
  } = e;
  return (0, r.jsx)(s.ua7, {
    text: o,
    hideOnClick: true,
    children: e => {
      let {
        onMouseEnter: s,
        onMouseLeave: _,
        onClick: p
      } = e;
      return (0, r.jsx)(l.zx, {
        onMouseEnter: s,
        onMouseLeave: _,
        onClick: e => {
          e.stopPropagation(), null == p || p(), t(e)
        },
        dangerous: u,
        "aria-label": null != f ? f : o,
        className: d,
        children: i.Children.map(n, e => i.isValidElement(e) ? i.cloneElement(e, {
          className: a()(e.props.className, c.actionBarIcon)
        }) : e)
      })
    }
  })
}