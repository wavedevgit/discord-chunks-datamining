/** Chunk was on web.js **/
/** chunk id: 931847, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => a
});
var Chunk296009 = require("./296009.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  toSubmission() {
    return {
      id: this.id,
      data: {
        type: this.type,
        application_id: this.applicationId
      }
    }
  }
  isDiscardable() {
    returnfalse
  }
  isValid() {
    returntrue
  }
  isEqual(e) {
    return e instanceof a && e.applicationId === this.applicationId
  }
  getUniqueKey() {
    return "".concat(this.type, "-").concat(this.applicationId)
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
    applicationId: t
  }) {
    i(this, "id", true), i(this, "type", true), i(this, "applicationId", true), this.id = e, this.type = r.l.APPLICATION, this.applicationId = t
  }
}