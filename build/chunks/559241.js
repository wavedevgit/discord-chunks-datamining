/** Chunk was on web.js **/
/** chunk id: 559241, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk592125 = require("./592125.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  constructor() {
    i(this, "filterTagIds", true), i(this, "sortOrder", true), i(this, "layout", true), i(this, "tagSetting", true), i(this, "setFilterTagIds", e => {
      this.filterTagIds = e
    }), i(this, "setSortOrder", e => {
      this.sortOrder = e
    }), i(this, "setLayout", e => {
      this.layout = e
    }), i(this, "setTagSetting", e => {
      this.tagSetting = e
    }), i(this, "getFilterTagIdsAnalytics", () => null != this.filterTagIds ? Array.from(this.filterTagIds) : []), i(this, "getSortOrderAnalytics", e => {
      var t, n;
      return null != (n = this.sortOrder) ? n : null == (t = r.Z.getChannel(e)) ? true : t.getDefaultSortOrder()
    }), i(this, "getLayoutAnalytics", e => {
      var t, n;
      return null != (n = this.layout) ? n : null == (t = r.Z.getChannel(e)) ? true : t.getDefaultLayout()
    }), i(this, "getTagSettingAnalytics", e => {
      var t, n;
      return null != (n = this.tagSetting) ? n : null == (t = r.Z.getChannel(e)) ? true : t.getDefaultTagSetting()
    })
  }
}
let o = new a