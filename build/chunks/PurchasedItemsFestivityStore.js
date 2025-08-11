/** Chunk was on 67110 **/
/** chunk id: 438820, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var n, i, c, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let d = {
  canPlayWowMoment: false,
  isFetchingWowMomentMedia: false,
  wowMomentWumpusMediaUrl: null
};
class r extends(c = Chunk442837.ZP.Store) {
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
}
i = "PurchasedItemsFestivityStore", (n = "displayName") in r ? Object.defineProperty(r, n, {
  value: i,
  enumerable: true,
  configurable: true,
  writable: true
}) : r[n] = i;
let p = new r(Chunk570140.Z, {
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