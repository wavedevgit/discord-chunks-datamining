/** Chunk was on 86142 **/
/** chunk id: 955437, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  $2: () => d,
  Xv: () => u,
  n7: () => c
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk569717 = require("./569717.js"),
  Chunk954571 = require("./954571.js"),
  Chunk204925 = require("./204925.js"),
  Chunk652215 = require("./652215.js");

function c(e, t) {
  return (0, s.A)(e, t), l.default.track(o.HAw.AGE_GATE_ACTION, {
    source: t,
    action: a.AM.AGE_GATE_SUBMITTED
  }), r.Bo.patch({
    url: o.Rsh.ME,
    oldFormErrors: true,
    body: {
      date_of_birth: e.format("YYYY-MM-DD")
    },
    rejectWithError: false
  }).then(e => {
    let n = e.body;
    i.h.dispatch({
      type: "CURRENT_USER_UPDATE",
      user: n
    }), l.default.track(o.HAw.AGE_GATE_ACTION, {
      source: t,
      action: a.AM.AGE_GATE_SUCCESS
    })
  })
}

function u(e) {
  i.h.dispatch({
    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
  }), l.default.track(o.HAw.AGE_GATE_ACTION, {
    source: e,
    action: a.AM.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
  })
}

function d(e) {
  i.h.dispatch({
    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
  }), l.default.track(o.HAw.AGE_GATE_ACTION, {
    source: e,
    action: a.AM.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
  })
}