/** Chunk was on 91848 **/
/** chunk id: 771308, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Av: () => c,
  hp: () => d,
  wE: () => u
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk959776 = require("./959776.js"),
  Chunk626135 = require("./626135.js"),
  Chunk723359 = require("./723359.js"),
  Chunk981631 = require("./981631.js");

function c(e, t) {
  return (0, s.Z)(e, t), r.default.track(l.rMx.AGE_GATE_ACTION, {
    source: t,
    action: i.Al.AGE_GATE_SUBMITTED
  }), a.tn.patch({
    url: l.ANM.ME,
    oldFormErrors: true,
    body: {
      date_of_birth: e.format("YYYY-MM-DD")
    },
    rejectWithError: false
  }).then(e => {
    let n = e.body;
    o.Z.dispatch({
      type: "CURRENT_USER_UPDATE",
      user: n
    }), r.default.track(l.rMx.AGE_GATE_ACTION, {
      source: t,
      action: i.Al.AGE_GATE_SUCCESS
    })
  })
}

function u(e) {
  o.Z.dispatch({
    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
  }), r.default.track(l.rMx.AGE_GATE_ACTION, {
    source: e,
    action: i.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
  })
}

function d(e) {
  o.Z.dispatch({
    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
  }), r.default.track(l.rMx.AGE_GATE_ACTION, {
    source: e,
    action: i.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
  })
}