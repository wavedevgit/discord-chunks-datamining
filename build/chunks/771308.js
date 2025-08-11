/** Chunk was on 1337 **/
/** chunk id: 771308, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Av: () => s,
  hp: () => d,
  wE: () => u
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk959776 = require("./959776.js"),
  Chunk626135 = require("./626135.js"),
  Chunk723359 = require("./723359.js"),
  Chunk981631 = require("./981631.js");

function s(e, t) {
  return (0, a.Z)(e, t), o.default.track(c.rMx.AGE_GATE_ACTION, {
    source: t,
    action: i.Al.AGE_GATE_SUBMITTED
  }), n.tn.patch({
    url: c.ANM.ME,
    oldFormErrors: true,
    body: {
      date_of_birth: e.format("YYYY-MM-DD")
    },
    rejectWithError: false
  }).then(e => {
    let r = e.body;
    l.Z.dispatch({
      type: "CURRENT_USER_UPDATE",
      user: r
    }), o.default.track(c.rMx.AGE_GATE_ACTION, {
      source: t,
      action: i.Al.AGE_GATE_SUCCESS
    })
  })
}

function u(e) {
  l.Z.dispatch({
    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
  }), o.default.track(c.rMx.AGE_GATE_ACTION, {
    source: e,
    action: i.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
  })
}

function d(e) {
  l.Z.dispatch({
    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
  }), o.default.track(c.rMx.AGE_GATE_ACTION, {
    source: e,
    action: i.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
  })
}