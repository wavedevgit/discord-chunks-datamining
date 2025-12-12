/** Chunk was on 69844 **/
/** chunk id: 79707, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  let {
    tabs: t,
    selectedTab: n,
    onTabSelect: l,
    onClose: s
  } = e;
  return (0, r.jsx)(i.v2r, {
    navId: "global-discovery-tabs-overflow-menu",
    "aria-label": a.intl.string(a.t.riPnr0),
    hideScroller: true,
    onClose: s,
    onSelect: s,
    children: (0, r.jsx)(i.kSQ, {
      children: t.map(e => {
        let {
          id: t,
          label: a
        } = e;
        return (0, r.jsx)(i.sNh, {
          id: t,
          label: a,
          icon: t === n ? i.owK : true,
          action: () => l(t)
        }, t)
      })
    }, "overflow-tabs")
  })
}