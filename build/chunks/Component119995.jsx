/** Chunk was on 90948 **/
/** chunk id: 119995, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk991635 = require("./991635.js");

function l(e) {
  let {
    rewardName: t
  } = e;
  return (0, i.jsx)(a.Text, {
    variant: "text-xs/medium",
    className: s.tI,
    children: r.intl.format(r.t.loyTil, {
      rewardName: (e, n) => (0, i.jsx)(a.Text, {
        variant: "text-xs/medium",
        className: s.Ht,
        children: t
      }, n),
      verticalDivider: (e, t) => (0, i.jsx)("div", {
        className: s.yF
      }, t)
    })
  })
}