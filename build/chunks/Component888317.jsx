/** Chunk was on web.js **/
/** chunk id: 888317, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk26033 = require("./26033.js"),
  Chunk614716 = require("./614716.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  let {
    display: t,
    entry: n,
    onAction: l,
    onClose: c
  } = e, u = (0, o.Mq)(n), d = (0, a.Z)({
    applicationId: u ? n.extra.application_id : true,
    onClose: c
  });
  return "recent" === t && u ? (0, r.jsx)(i.sNh, {
    id: "view-activity",
    label: s.intl.string(s.t.GDWYR8),
    action: () => {
      null == l || l({
        action: "PRESS_VIEW_ACTIVITY_MENU_ITEM"
      }), d()
    }
  }) : null
}