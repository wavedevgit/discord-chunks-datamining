/** Chunk was on 63141 **/
/** chunk id: 483962, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk831218 = require("./831218.jsx"),
  Chunk840780 = require("./840780.jsx"),
  Chunk51596 = require("./51596.js"),
  Chunk905423 = require("./905423.js"),
  Chunk237997 = require("./237997.js"),
  Chunk145597 = require("./145597.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk377723 = require("./377723.js");
let g = () => (0, Chunk51596.$Z)("DM_SEARCH"),
  m = Chunk473749.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk237997.default], () => Chunk237997.default.isLocked((0, Chunk145597.getPID)()) ? "true" : "false"),
      t = (0, Chunk905423.Z)(e => {
        let {
          channelId: t
        } = e;
        return t
      });
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk377723.privateChannels,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk377723.searchBar,
        children: (0, Chunk54381.jsx)("button", {
          type: "button",
          className: Chunk377723.searchBarComponent,
          onClick: g,
          children: Chunk388032.intl.string(Chunk388032.t.LzcpeZ)
        })
      }), (0, Chunk54381.jsx)(Chunk831218.Z, {
        padding: 8,
        theme: Chunk981631.BRd.DARK,
        version: module,
        selectedChannelId: exports
      }), (0, Chunk54381.jsx)("section", {
        className: Chunk377723.panels,
        "aria-label": Chunk388032.intl.string(Chunk388032.t.StREWK),
        children: (0, Chunk54381.jsx)(Chunk840780.Z, {
          guildId: null
        })
      })]
    })
  })