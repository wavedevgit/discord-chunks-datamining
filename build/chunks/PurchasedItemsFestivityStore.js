/** Chunk was on 67110 **/
/** chunk id: 438820, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var n, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let s = {
  canPlayWowMoment: false,
  isFetchingWowMomentMedia: false,
  wowMomentWumpusMediaUrl: null
};
class d extends(i = Chunk442837.ZP.Store) {
  getState() {
    return s
  }
  get canPlayWowMoment() {
    return s.canPlayWowMoment
  }
  get isFetchingWowMomentMedia() {
    return s.isFetchingWowMomentMedia
  }
  get wowMomentWumpusMedia() {
    return s.wowMomentWumpusMediaUrl
  }
}(n = "displayName") in d ? Object.defineProperty(d, n, {
  value: "PurchasedItemsFestivityStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[n] = "PurchasedItemsFestivityStore";
let r = new d(Chunk570140.Z, {
  LOGOUT: function() {
    s = {
      canPlayWowMoment: false,
      isFetchingWowMomentMedia: false,
      wowMomentWumpusMediaUrl: null
    }
  },
  PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function(e) {
    let {
      value: t
    } = e;
    s.canPlayWowMoment = t
  },
  PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function() {
    s.isFetchingWowMomentMedia = true
  },
  PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
    let {
      wumpusMedia: t
    } = e;
    s.wowMomentWumpusMediaUrl = t, s.isFetchingWowMomentMedia = false
  },
  PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE: function() {
    s.isFetchingWowMomentMedia = false, s.canPlayWowMoment = false
  }
})