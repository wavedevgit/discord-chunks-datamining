/** Chunk was on web.js **/
/** chunk id: 552468, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk20805 = require("./20805.js"),
  Chunk695311 = require("./695311.js"),
  Chunk985018 = require("./985018.jsx");

function l(e) {
  let {
    display: t,
    entry: n,
    onAction: l,
    onClose: c
  } = e, u = (0, a.yl)(n), d = (0, s.A)({
    applicationId: u ? n.extra.application_id : true,
    onClose: c
  });
  return "recent" === t && u ? (0, r.jsx)(i.Drp, {
    id: "view-activity",
    label: o.intl.string(o.t.GDWYR8),
    action: () => {
      null == l || l({
        action: "PRESS_VIEW_ACTIVITY_MENU_ITEM"
      }), d()
    }
  }) : null
}