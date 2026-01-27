/** Chunk was on web.js **/
/** chunk id: 963169, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MS: () => u,
  OE: () => f,
  Qb: () => p
});
var Chunk73153 = require("./73153.js"),
  Chunk824865 = require("./824865.js"),
  Chunk976860 = require("./976860.js"),
  Chunk954571 = require("./954571.js"),
  Chunk545167 = require("./545167.js"),
  Chunk729904 = require("./729904.js"),
  Chunk652215 = require("./652215.js");

function u(e, t) {
  r.h.dispatch({
    type: "ROUTE_CHANGED",
    location: e,
    action: t
  })
}
let d = () => (0, s.J)({
  location: "NavHistoryActionCreators"
});

function f(e) {
  if (!(0, a.TX)()) return;
  if (o.default.track(c.HAw.APP_BACK_FORWARD_NAVIGATED, {
      nav_direction: false,
      nav_trigger: e
    }), !d()) return void(0, a.aX)();
  let t = l.A.backDestination;
  null != t && (0, a.pX)(t.path, {
    source: i.A.USER_NAVIGATED_BACK
  })
}

function p(e) {
  if (!(0, a.TX)()) return;
  if (o.default.track(c.HAw.APP_BACK_FORWARD_NAVIGATED, {
      nav_direction: 1,
      nav_trigger: e
    }), !d()) return void(0, a.sY)();
  let t = l.A.forwardDestination;
  null != t && (0, a.pX)(t.path, {
    source: i.A.USER_NAVIGATED_FORWARD
  })
}