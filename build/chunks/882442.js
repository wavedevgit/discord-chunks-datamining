/** Chunk was on 77870 **/
/** chunk id: 882442, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => o
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk384904 = require("./384904.js"),
  Chunk295405 = require("./295405.js"),
  Chunk652215 = require("./652215.js");
async function o() {
  try {
    l.h.dispatch({
      type: "CHECKOUT_RECOVERY_STATUS_FETCH"
    });
    let {
      body: e
    } = await r.Bo.get({
      url: a.Rsh.CHECKOUT_RECOVERY,
      rejectWithError: true
    }), t = (null == e ? true : e.is_eligible) === true;
    t && !s.A.hasFetchedPaymentSources && await (0, i.$o)(), l.h.dispatch({
      type: "CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS",
      isTargeted: t
    })
  } catch (e) {
    l.h.dispatch({
      type: "CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE"
    })
  }
}