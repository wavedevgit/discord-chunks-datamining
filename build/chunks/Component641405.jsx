/** Chunk was on 1784 **/
/** chunk id: 641405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk450481 = require("./450481.js"),
  Chunk985018 = require("./985018.jsx");
let s = e => {
  let {
    product: t,
    onSuccess: n
  } = e, {
    handleUseNow: s,
    isApplying: c
  } = (0, a.p)({
    product: t,
    onSuccess: n
  });
  return (0, r.jsx)(l.Button, {
    variant: "primary",
    onClick: s,
    loading: c,
    text: i.intl.string(i.t.MAS7uK),
    fullWidth: true
  })
}