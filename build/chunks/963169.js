/** Chunk was on web.js **/
/** chunk id: 963169, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MS: () => c,
  OE: () => u,
  Qb: () => d
});
var Chunk73153 = require("./73153.js"),
  Chunk976860 = require("./976860.js"),
  Chunk954571 = require("./954571.js"),
  Chunk545167 = require("./545167.js"),
  Chunk729904 = require("./729904.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  r.h.dispatch({
    type: "ROUTE_CHANGED",
    path: e,
    key: t,
    isReplace: n
  })
}

function u(e) {
  if (!(0, i.TX)()) return;
  if (a.default.track(l.HAw.APP_BACK_FORWARD_NAVIGATED, {
      nav_direction: false,
      nav_trigger: e
    }), !(0, s.J)({
      location: e
    })) return void(0, i.aX)();
  let t = o.A.backDestination;
  null != t && (r.h.dispatch({
    type: "GO_BACK"
  }), (0, i.pX)(t.path))
}

function d(e) {
  if (!(0, i.TX)()) return;
  if (a.default.track(l.HAw.APP_BACK_FORWARD_NAVIGATED, {
      nav_direction: 1,
      nav_trigger: e
    }), !(0, s.J)({
      location: e
    })) return void(0, i.sY)();
  let t = o.A.forwardDestination;
  null != t && (r.h.dispatch({
    type: "GO_FORWARD"
  }), (0, i.pX)(t.path))
}