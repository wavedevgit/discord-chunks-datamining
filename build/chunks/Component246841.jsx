/** Chunk was on 96750 **/
/** chunk id: 246841, original params: e,t,n (module,exports,require) **/
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
    color: p,
    fullWidth: m,
    onAction: g
  } = e, {
    label: h,
    tooltip: b,
    loading: v,
    disabled: _,
    onClick: y
  } = (0, o.Ih)(t, n, c), O = () => {
    null == g || g(), y()
  };
  return (0, r.jsx)(l.ua7, {
    text: b,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, r.jsxs)(i.zx, {
        className: u,
        innerClassName: s.playButtonInner,
        size: d,
        look: f,
        color: p,
        fullWidth: m,
        onClick: O,
        onMouseEnter: t,
        onMouseLeave: n,
        disabled: _,
        submitting: v,
        children: [(0, r.jsx)(a.Z, {
          width: 16,
          height: 16
        }), h]
      })
    }
  })
}