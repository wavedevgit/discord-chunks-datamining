/** Chunk was on web.js **/
/** chunk id: 931847, original params: e,t,n (module,exports,re quire) **/
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
  q: () => i
});
class i {
  toSubmission() {
    return {
      id: this.id,
      data: {
        type: this.type,
        application_id: this.applicationId
      }
    }
  }
  isSaveable() {
    returntrue
  }
  isEqual(e) {
    return e instanceof i && e.applicationId === this.applicationId
  }
  getProfileAnalyticsOptions() {
    return {
      widgetType: this.type,
      applicationId: this.applicationId
    }
  }
  getProfileEditAnalyticsOptions() {
    return {
      widgetEdited: this.type,
      applicationId: this.applicationId
    }
  }
  constructor({
    id: e,
    type: t,
    applicationId: n
  }) {
    r(this, "id", true), r(this, "type", true), r(this, "applicationId", true), this.id = e, this.type = t, this.applicationId = n
  }
}