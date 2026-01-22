/** Chunk was on 21738 **/
/** chunk id: 526900, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk793943 = require("./793943.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    className: t
  } = e, {
    activePanel: n
  } = (0, l.fy)(), o = n === l.HP.APPLICATION_TEST_MODE_DEBUG;
  return (0, r.jsx)(a.In, {
    className: t,
    onClick: () => {
      o ? (0, l.Jp)() : (0, l.nf)(l.HP.APPLICATION_TEST_MODE_DEBUG)
    },
    icon: i.PXj,
    "aria-label": s.intl.string(s.t["9Isknj"]),
    tooltip: o ? null : s.intl.string(s.t["9Isknj"]),
    selected: o
  })
}