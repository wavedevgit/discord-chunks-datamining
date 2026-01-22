/** Chunk was on 97492 **/
/** chunk id: 102817, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js");

function a(e) {
  let {
    text: t,
    icon: n,
    onClick: a,
    disabled: s,
    submitting: o
  } = e;
  return (0, r.jsx)(l.m, {
    __unsupportedReactNodeAsText: null != t ? t : true,
    children: (0, r.jsx)(i.K0, {
      icon: n,
      variant: "secondary",
      onClick: a,
      disabled: s,
      loading: o,
      "aria-label": t,
      size: "sm"
    })
  })
}