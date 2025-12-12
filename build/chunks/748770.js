/** Chunk was on web.js **/
/** chunk id: 748770, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L9: () => y,
  Pu: () => E,
  ZP: () => O
});
var Chunk32662 = require("./32662.js"),
  Chunk544891 = require("./544891.js"),
  Chunk381499 = require("./381499.js"),
  Chunk570140 = require("./570140.js"),
  Chunk496929 = require("./496929.js"),
  Chunk706454 = require("./706454.js"),
  Chunk675478 = require("./675478.js"),
  Chunk605338 = require("./605338.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk163684 = require("./163684.js"),
  Chunk312973 = require("./312973.js"),
  Chunk1844 = require("./1844.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js");

function E() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    t = Chunk594174.default.getCurrentUser(),
    n = Chunk74538.ZP.isPremiumExactly(exports, Chunk474936.PremiumTypes.TIER_2),
    r = (0, Chunk312973.$)({
      location: "maybeFetchActivePromotions"
    }),
    i = Chunk163684.g.getCurrentConfig({
      location: "maybeFetchActivePromotions"
    }, {
      autoTrackExposure: false,
      disable: require
    }).enabled;
  (Chunk32662 || require || Chunk544891) && !Chunk1844.Z.isFetchingActivePromotions && (module && null != Chunk1844.Z.lastFetchedActivePromotions || b())
}
async function b() {
  try {
    Chunk570140.Z.dispatch({
      type: "ACTIVE_PROMOTIONS_FETCH"
    });
    let t = Chunk32662.H.DESKTOP,
      n = await Chunk544891.tn.get({
        url: Chunk981631.ANM.PROMOTIONS,
        query: {
          locale: Chunk706454.default.locale,
          platform: exports
        },
        oldFormErrors: true,
        rejectWithError: true
      }),
      o = Chunk1844.Z.consumedInboundPromotionId;
    if (!Chunk1844.Z.hasFetchedConsumedInboundPromotionId) {
      var e;
      let t = (await (0, Chunk496929.yD)(Chunk474936.CL, false)).find(e => null != e.promotion_id && true === e.consumed);
      o = null != (e = null == exports ? true : exports.promotion_id) ? module : null
    }
    Chunk570140.Z.dispatch({
      type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
      promotions: require.body,
      consumedInboundPromotionId: Chunk381499
    })
  } catch (e) {
    Chunk570140.Z.dispatch({
      type: "ACTIVE_PROMOTIONS_FETCH_FAIL"
    })
  }
}
async function y() {
  if (!Chunk1844.Z.isFetchingActiveBogoPromotion) try {
    Chunk570140.Z.dispatch({
      type: "ACTIVE_BOGO_PROMOTION_FETCH"
    });
    let e = (await Chunk544891.tn.get({
      url: Chunk981631.ANM.BOGO_PROMOTIONS,
      query: {
        locale: Chunk706454.default.locale
      },
      rejectWithError: true
    })).body;
    Chunk570140.Z.dispatch({
      type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS",
      activePromotion: Chunk605338.Z.createFromServer(module)
    })
  } catch (e) {
    Chunk570140.Z.dispatch({
      type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL"
    })
  }
}
let O = {
  fetchActivePromotions: b,
  dismissOutboundPromotionNotice: function() {
    Chunk570140.Z.dispatch({
      type: "OUTBOUND_PROMOTION_NOTICE_DISMISS"
    });
    let e = Chunk1844.Z.lastDismissedOutboundPromotionStartDate;
    null != module && Chunk675478.hW.updateAsync("userContent", t => {
      t.lastDismissedOutboundPromotionStartDate = o.Gm.create({
        value: e
      })
    }, Chunk675478.fy.INFREQUENT_USER_ACTION)
  },
  markOutboundPromotionsSeen() {
    Chunk570140.Z.dispatch({
      type: "OUTBOUND_PROMOTIONS_SEEN"
    })
  },
  fetchActiveBogoPromotion: y
}