/** Chunk was on 15647 **/
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
    Chunk570140.Z.dispatch({
      type: "CHECKOUT_RECOVERY_STATUS_FETCH"
    });
    let {
      body: e
    } = await Chunk544891.tn.get({
      url: Chunk981631.ANM.CHECKOUT_RECOVERY,
      rejectWithError: true
    }), t = (null == module ? true : module.is_eligible) === true;
    exports && !Chunk853872.Z.hasFetchedPaymentSources && await (0, Chunk355467.tZ)(), Chunk570140.Z.dispatch({
      type: "CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS",
      isTargeted: exports
    })
  } catch (e) {
    Chunk570140.Z.dispatch({
      type: "CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE"
    })
  }
}