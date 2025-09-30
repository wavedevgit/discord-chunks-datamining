/** Chunk was on web.js **/
/** chunk id: 225604, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  Z: () => i
});
class i {
  isFortniteActivity(e) {
    return e === this.prodActivityId || e === this.stagingActivityId || e === this.devActivityId
  }
  constructor(e) {
    r(this, "fortniteId", true), r(this, "prodActivityId", true), r(this, "stagingActivityId", true), r(this, "devActivityId", true), this.fortniteId = e.fortnite_id, this.prodActivityId = e.prod_activity_id, this.stagingActivityId = e.staging_activity_id, this.devActivityId = e.dev_activity_id
  }
}