/** Chunk was on web.js **/
/** chunk id: 758119, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C8: () => u,
  mN: () => s,
  qV: () => l,
  qq: () => c
});
var Chunk570140 = require("./570140.js");
require("./893776.js"), require("./703656.js");
var Chunk626135 = require("./626135.js"),
  Chunk723359 = require("./723359.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  i.default.track(o.rMx.OPEN_MODAL, {
    type: "Enter Your Birthday",
    source: {
      section: e
    }
  }), r.Z.dispatch({
    type: "AGE_GATE_MODAL_OPEN",
    source: e
  })
}

function l(e) {
  r.Z.wait(() => r.Z.dispatch({
    type: "AGE_GATE_MODAL_CLOSE"
  })), true !== e && i.default.track(o.rMx.AGE_GATE_ACTION, {
    source: e,
    action: a.Al.AGE_GATE_CLOSE
  })
}

function c(e) {
  r.Z.wait(() => {
    r.Z.dispatch({
      type: "AGE_GATE_SUCCESS_MODAL_OPEN"
    })
  }), i.default.track(o.rMx.AGE_GATE_ACTION, {
    source: e,
    action: a.Al.AGE_GATE_SUCCESS
  })
}

function u(e, t) {
  r.Z.wait(() => {
    r.Z.dispatch({
      type: "AGE_GATE_FAILURE_MODAL_OPEN",
      underageMessage: t
    })
  }), i.default.track(o.rMx.AGE_GATE_ACTION, {
    source: e,
    action: a.Al.AGE_GATE_FAILURE
  })
}