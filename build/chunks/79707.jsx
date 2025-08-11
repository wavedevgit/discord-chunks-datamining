/** Chunk was on 88934 **/
/** chunk id: 79707, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.js");

function l(e) {
  let {
    tabs: t,
    selectedTab: n,
    onTabSelect: l,
    onClose: s
  } = e;
  return <a.v2r navId={"global-discovery-tabs-overflow-menu"} aria-label={i.intl.string(i.t.riPnr6)} hideScroller={true} onClose={s} onSelect={s}><a.kSQ>{t.map(e => {
        let {
          id: t,
          label: i
        } = e;
        return (0, r.jsx)(a.sNh, {
          id: t,
          label: i,
          icon: t === n ? a.owK : true,
          action: () => l(t)
        }, t)
      })}</a.kSQ></a.v2r>
}