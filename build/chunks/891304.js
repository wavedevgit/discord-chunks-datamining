/** Chunk was on web.js **/
/** chunk id: 891304, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hm: () => u,
  TL: () => d,
  pN: () => c
});
var Chunk570140 = require("./570140.js"),
  Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
  Chunk719961 = require("./719961.js"),
  Chunk365355 = require("./365355.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  r.Z.dispatch({
    type: "ROUTE_CHANGED",
    path: e,
    key: t,
    isReplace: n
  })
}

function u(e) {
  if (!(0, i.x3)()) return;
  if (o.default.track(l.rMx.APP_BACK_FORWARD_NAVIGATED, {
      nav_direction: false,
      nav_trigger: e
    }), !(0, a.v)({
      location: e
    })) return void(0, i.op)();
  let t = s.Z.backDestination;
  null != t && (r.Z.dispatch({
    type: "GO_BACK"
  }), (0, i.uL)(t.path))
}

function d(e) {
  if (!(0, i.x3)()) return;
  if (o.default.track(l.rMx.APP_BACK_FORWARD_NAVIGATED, {
      nav_direction: 1,
      nav_trigger: e
    }), !(0, a.v)({
      location: e
    })) return void(0, i.eH)();
  let t = s.Z.forwardDestination;
  null != t && (r.Z.dispatch({
    type: "GO_FORWARD"
  }), (0, i.uL)(t.path))
}