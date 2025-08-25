/** Chunk was on web.js **/
/** chunk id: 841409, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk399606 = require("./399606.js"),
  Chunk626135 = require("./626135.js"),
  Chunk260722 = require("./260722.js"),
  Chunk914788 = require("./914788.js"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js");
let c = () => ({
  selectedTab: (0, Chunk399606.e7)([Chunk914788.Z], () => Chunk914788.Z.getSelectedTab()),
  handleTabChange: e => {
    o.ZP.selectTab(e), i.default.track(l.rMx.FAMILY_CENTER_ACTION, {
      action: s.YC.TabChange,
      tab: e
    })
  }
})