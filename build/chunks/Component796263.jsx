/** Chunk was on 88647 **/
/** chunk id: 796263, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  return (0, r.jsx)(i.u, {
    __unsupportedReactNodeAsText: null != t ? t : true,
    children: (0, r.jsx)(l.hU, {
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