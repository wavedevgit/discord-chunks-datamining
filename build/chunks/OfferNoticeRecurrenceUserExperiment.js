/** Chunk was on web.js **/
/** chunk id: 96320, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-08_offer_notice_recurrence",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  label: "Offer Notice Recurrence",
  defaultConfig: {
    useRecurringNotices: false
  },
  treatments: [{
    id: 1,
    label: "Recurring Notices",
    config: {
      useRecurringNotices: true
    }
  }]
})