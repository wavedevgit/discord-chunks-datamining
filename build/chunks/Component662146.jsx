/** Chunk was on 67000 **/
/** chunk id: 662146, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk682288 = require("./682288.js");

function c(e) {
  let {
    children: t,
    text: n,
    disableWrapper: l = false,
    disabled: c = false,
    hideOnClick: u = true,
    shouldShow: d,
    forceOpen: f,
    selected: h = false
  } = e, p = i.useMemo(() => null == n || c ? null : (0, r.jsx)("div", {
    className: s.listItemTooltipContent,
    children: n
  }), [n, c]), g = l ? t : (0, r.jsx)("div", {
    className: a()(s.listItemWrapper, {
      [s.selected]: h
    }),
    children: t
  });
  return (0, r.jsx)(o.u, {
    __unsupportedReactNodeAsText: p,
    position: "right",
    spacing: 12,
    hideOnClick: u,
    shouldShow: d,
    forceOpen: f,
    ariaHidden: true,
    asContainer: !l,
    children: g
  })
}