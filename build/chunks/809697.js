/** Chunk was on web.js **/
/** chunk id: 809697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk417597 = require("./417597.js"),
  Chunk954571 = require("./954571.js"),
  Chunk899847 = require("./899847.js"),
  Chunk695515 = require("./695515.js"),
  Chunk191627 = require("./191627.js"),
  Chunk652215 = require("./652215.js");
let c = () => ({
  selectedTab: (0, r.bG)([s.A], () => s.A.getSelectedTab()),
  handleTabChange: e => {
    a.Ay.selectTab(e), i.default.track(l.HAw.FAMILY_CENTER_ACTION, {
      action: o.qb.TabChange,
      tab: e
    })
  }
})