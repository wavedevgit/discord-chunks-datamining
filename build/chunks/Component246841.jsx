/** Chunk was on web.js **/
/** chunk id: 246841, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk395361 = require("./395361.jsx"),
  Chunk829820 = require("./829820.js"),
  Chunk191242 = require("./191242.js");

function c(e) {
  let {
    activity: t,
    user: n,
    source: c,
    className: u,
    size: d,
    look: f,
    color: _,
    fullWidth: p,
    onAction: h
  } = e, {
    label: m,
    tooltip: g,
    loading: E,
    disabled: b,
    onClick: y
  } = (0, s.Ih)(t, n, c), O = () => {
    null == h || h(), y()
  };
  return (0, r.jsx)(o.ua7, {
    text: g,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, r.jsxs)(i.zx, {
        className: u,
        innerClassName: l.playButtonInner,
        size: d,
        look: f,
        color: _,
        fullWidth: p,
        onClick: O,
        onMouseEnter: t,
        onMouseLeave: n,
        disabled: b,
        submitting: E,
        children: [(0, r.jsx)(a.Z, {
          width: 16,
          height: 16
        }), m]
      })
    }
  })
}