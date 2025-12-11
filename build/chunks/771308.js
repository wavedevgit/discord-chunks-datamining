/** Chunk was on 76323 **/
/** chunk id: 771308, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Av: () => c,
  hp: () => f,
  wE: () => s
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk959776 = require("./959776.js"),
  Chunk626135 = require("./626135.js"),
  Chunk723359 = require("./723359.js"),
  Chunk981631 = require("./981631.js");

function c(e, t) {
  return (0, o.Z)(e, t), a.default.track(u.rMx.AGE_GATE_ACTION, {
    source: t,
    action: i.Al.AGE_GATE_SUBMITTED
  }), r.tn.patch({
    url: u.ANM.ME,
    oldFormErrors: true,
    body: {
      date_of_birth: e.format("YYYY-MM-DD")
    },
    rejectWithError: false
  }).then(e => {
    let n = e.body;
    l.Z.dispatch({
      type: "CURRENT_USER_UPDATE",
      user: n
    }), a.default.track(u.rMx.AGE_GATE_ACTION, {
      source: t,
      action: i.Al.AGE_GATE_SUCCESS
    })
  })
}

function s(e) {
  l.Z.dispatch({
    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
  }), a.default.track(u.rMx.AGE_GATE_ACTION, {
    source: e,
    action: i.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
  })
}

function f(e) {
  l.Z.dispatch({
    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
  }), a.default.track(u.rMx.AGE_GATE_ACTION, {
    source: e,
    action: i.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
  })
}