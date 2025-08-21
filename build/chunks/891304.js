/** Chunk was on web.js **/
/** chunk id: 891304, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hm: () => l,
  TL: () => c,
  pN: () => s
});
var Chunk570140 = require("./570140.js"),
  Chunk703656 = require("./703656.js"),
  Chunk365355 = require("./365355.js"),
  Chunk336219 = require("./336219.js");

function s(e, t, n) {
  r.Z.dispatch({
    type: "ROUTE_CHANGED",
    path: e,
    key: t,
    isReplace: n
  })
}

function l(e) {
  if (!(0, i.x3)()) return;
  if (!(0, o.v)({
      location: e
    })) return void(0, i.op)();
  let t = a.Z.backDestination;
  null != t && (r.Z.dispatch({
    type: "GO_BACK"
  }), (0, i.uL)(t.path))
}

function c(e) {
  if (!(0, i.x3)()) return;
  if (!(0, o.v)({
      location: e
    })) return void(0, i.eH)();
  let t = a.Z.forwardDestination;
  null != t && (r.Z.dispatch({
    type: "GO_FORWARD"
  }), (0, i.uL)(t.path))
}