/** Chunk was on web.js **/
/** chunk id: 612200, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IO: () => l,
  MP: () => u,
  Nk: () => c,
  yO: () => s
});
var Chunk73153 = require("./73153.js");
require("./830215.js"), require("./976860.js");
var Chunk954571 = require("./954571.js"),
  Chunk204925 = require("./204925.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  i.default.track(o.HAw.OPEN_MODAL, {
    type: "Enter Your Birthday",
    source: {
      section: e
    }
  }), r.h.dispatch({
    type: "AGE_GATE_MODAL_OPEN",
    source: e
  })
}

function l(e) {
  r.h.wait(() => r.h.dispatch({
    type: "AGE_GATE_MODAL_CLOSE"
  })), true !== e && i.default.track(o.HAw.AGE_GATE_ACTION, {
    source: e,
    action: a.AM.AGE_GATE_CLOSE
  })
}

function c(e) {
  r.h.wait(() => {
    r.h.dispatch({
      type: "AGE_GATE_SUCCESS_MODAL_OPEN"
    })
  }), i.default.track(o.HAw.AGE_GATE_ACTION, {
    source: e,
    action: a.AM.AGE_GATE_SUCCESS
  })
}

function u(e, t) {
  r.h.wait(() => {
    r.h.dispatch({
      type: "AGE_GATE_FAILURE_MODAL_OPEN",
      underageMessage: t
    })
  }), i.default.track(o.HAw.AGE_GATE_ACTION, {
    source: e,
    action: a.AM.AGE_GATE_FAILURE
  })
}