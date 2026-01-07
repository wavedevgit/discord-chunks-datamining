/** Chunk was on 63141 **/
/** chunk id: 483962, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
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
  Chunk808006 = require("./808006.js");
let g = () => (0, l.$Z)("DM_SEARCH"),
  b = Chunk473749.memo(function() {
    let e = (0, a.e7)([d.default], () => d.default.isLocked((0, u.getPID)()) ? "true" : "false"),
      t = (0, c.Z)(e => {
        let {
          channelId: t
        } = e;
        return t
      });
    return (0, i.jsxs)("div", {
      className: p.privateChannels,
      children: [(0, i.jsx)("div", {
        className: p.searchBar,
        children: (0, i.jsx)("button", {
          type: "button",
          className: p.searchBarComponent,
          onClick: g,
          children: h.intl.string(h.t.LzcpeZ)
        })
      }), (0, i.jsx)(s.Z, {
        padding: 8,
        theme: f.BRd.DARK,
        version: e,
        selectedChannelId: t
      }), (0, i.jsx)("section", {
        className: p.panels,
        "aria-label": h.intl.string(h.t.StREWK),
        children: (0, i.jsx)(o.Z, {
          guildId: null
        })
      })]
    })
  })