/** Chunk was on 63141 **/
/** chunk id: 483962, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk831218 = require("./831218.jsx"),
  Chunk840780 = require("./840780.jsx"),
  Chunk51596 = require("./51596.js"),
  Chunk905423 = require("./905423.js"),
  Chunk237997 = require("./237997.js"),
  Chunk145597 = require("./145597.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk302615 = require("./302615.js");
let g = () => (0, Chunk51596.$Z)("DM_SEARCH"),
  m = Chunk73800.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk237997.default], () => Chunk237997.default.isLocked((0, Chunk145597.getPID)()) ? "true" : "false"),
      t = (0, Chunk905423.Z)(e => {
        let {
          channelId: t
        } = e;
        return t
      });
    return (0, Chunk255367.jsxs)("div", {
      className: Chunk302615.privateChannels,
      children: [(0, Chunk255367.jsx)("div", {
        className: Chunk302615.searchBar,
        children: (0, Chunk255367.jsx)("button", {
          type: "button",
          className: Chunk302615.searchBarComponent,
          onClick: g,
          children: Chunk388032.intl.string(Chunk388032.t.LzcpeX)
        })
      }), (0, Chunk255367.jsx)(Chunk831218.Z, {
        padding: 8,
        theme: Chunk981631.BRd.DARK,
        version: module,
        selectedChannelId: exports
      }), (0, Chunk255367.jsx)("section", {
        className: Chunk302615.panels,
        "aria-label": Chunk388032.intl.string(Chunk388032.t.StREWF),
        children: (0, Chunk255367.jsx)(Chunk840780.Z, {
          guildId: null
        })
      })]
    })
  })