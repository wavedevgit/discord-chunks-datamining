/** Chunk was on 71264 **/
/** chunk id: 796263, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js");

function a(e) {
  let {
    text: t,
    icon: n,
    onClick: a,
    disabled: o,
    submitting: s
  } = e;
  return (0, i.jsx)(r.u, {
    __unsupportedReactNodeAsText: null != t ? t : true,
    children: (0, i.jsx)(l.hU, {
      icon: n,
      variant: "secondary",
      onClick: a,
      disabled: o,
      loading: s,
      "aria-label": t,
      size: "sm"
    })
  })
}