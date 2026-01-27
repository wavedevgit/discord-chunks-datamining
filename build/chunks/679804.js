/** Chunk was on web.js **/
/** chunk id: 679804, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk734057 = require("./734057.js");

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
      return null != (t = this.sortOrder) ? t : null == (n = r.A.getChannel(e)) ? true : n.getDefaultSortOrder()
    }), i(this, "getLayoutAnalytics", e => {
      var t, n;
      return null != (t = this.layout) ? t : null == (n = r.A.getChannel(e)) ? true : n.getDefaultLayout()
    }), i(this, "getTagSettingAnalytics", e => {
      var t, n;
      return null != (t = this.tagSetting) ? t : null == (n = r.A.getChannel(e)) ? true : n.getDefaultTagSetting()
    })
  }
}
let o = new a