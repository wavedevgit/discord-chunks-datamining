/** Chunk was on 99063 **/
/** chunk id: 639735, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => M
});
var n, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let d = {
  canPlayWowMoment: false,
  isFetchingWowMomentMedia: false,
  wowMomentWumpusMediaUrl: null
};
class s extends(i = Chunk311907.Ay.Store) {
  getState() {
    return d
  }
  get canPlayWowMoment() {
    return d.canPlayWowMoment
  }
  get isFetchingWowMomentMedia() {
    return d.isFetchingWowMomentMedia
  }
  get wowMomentWumpusMedia() {
    return d.wowMomentWumpusMediaUrl
  }
}(n = "displayName") in s ? Object.defineProperty(s, n, {
  value: "PurchasedItemsFestivityStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : s[n] = "PurchasedItemsFestivityStore";
let M = new s(Chunk73153.h, {
  LOGOUT: function() {
    d = {
      canPlayWowMoment: false,
      isFetchingWowMomentMedia: false,
      wowMomentWumpusMediaUrl: null
    }
  },
  PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function(e) {
    let {
      value: t
    } = e;
    d.canPlayWowMoment = t
  },
  PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function() {
    d.isFetchingWowMomentMedia = true
  },
  PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
    let {
      wumpusMedia: t
    } = e;
    d.wowMomentWumpusMediaUrl = t, d.isFetchingWowMomentMedia = false
  },
  PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE: function() {
    d.isFetchingWowMomentMedia = false, d.canPlayWowMoment = false
  }
})