/** Chunk was on 67564 **/
/** chunk id: 102817, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js");

function s(e) {
  let {
    text: t,
    icon: n,
    onClick: s,
    disabled: a,
    submitting: o
  } = e;
  return (0, r.jsx)(l.m, {
    __unsupportedReactNodeAsText: null != t ? t : true,
    children: (0, r.jsx)(i.K0, {
      icon: n,
      variant: "secondary",
      onClick: s,
      disabled: a,
      loading: o,
      "aria-label": t,
      size: "sm"
    })
  })
}