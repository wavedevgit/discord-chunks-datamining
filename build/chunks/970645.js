/** Chunk was on 67000 **/
/** chunk id: 970645, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => s
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk355467 = require("./355467.js"),
  Chunk853872 = require("./853872.js"),
  Chunk981631 = require("./981631.js");
async function s() {
  try {
    i.Z.dispatch({
      type: "CHECKOUT_RECOVERY_STATUS_FETCH"
    });
    let {
      body: e
    } = await r.tn.get({
      url: o.ANM.CHECKOUT_RECOVERY,
      rejectWithError: true
    }), t = (null == e ? true : e.is_eligible) === true;
    t && !a.Z.hasFetchedPaymentSources && await (0, l.tZ)(), i.Z.dispatch({
      type: "CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS",
      isTargeted: t
    })
  } catch (e) {
    i.Z.dispatch({
      type: "CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE"
    })
  }
}