/** Chunk was on 23087 **/
/** chunk id: 29131, original params: i,t,e (module,exports,require) **/
require.d(exports, {
  default: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk151459 = require("./151459.js"),
  Chunk388032 = require("./388032.js");

function a(i) {
  let {
    onClose: t
  } = i, {
    showSuggestions: e,
    showActivityTicker: a,
    setShowSuggestions: r,
    setShowActivityTicker: d
  } = (0, n.Z)();
  return <c.v2r navId={"friends-popout-settings"} onClose={t} aria-label={o.intl.string(o.t["3D5yo6"])} onSelect={() => {}}>{<c.S89 id={"show-suggestions"} label={"Show Suggestions"} checked={e} action={() => r(!e)} />}{<c.S89 id={"show-activity-ticker"} label={"Show Activity Ticker"} checked={a} action={() => d(!a)} />}</c.v2r>
}