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
    t = d.default.getCurrentUser(),
    n = f.ZP.isPremiumExactly(t, h.PremiumTypes.TIER_2),
    r = (0, _.$)({
      location: "maybeFetchActivePromotions"
    }),
    i = p.g.getCurrentConfig({
      location: "maybeFetchActivePromotions"
    }, {
      autoTrackExposure: false,
      disable: n
    }).enabled;
  (r || n || i) && !m.Z.isFetchingActivePromotions && (e && null != m.Z.lastFetchedActivePromotions || b())
}
async function b() {
  try {
    o.Z.dispatch({
      type: "ACTIVE_PROMOTIONS_FETCH"
    });
    let t = r.H.DESKTOP,
      n = await i.tn.get({
        url: g.ANM.PROMOTIONS,
        query: {
          locale: l.default.locale,
          platform: t
        },
        oldFormErrors: true,
        rejectWithError: true
      }),
      a = m.Z.consumedInboundPromotionId;
    if (!m.Z.hasFetchedConsumedInboundPromotionId) {
      var e;
      let t = (await (0, s.yD)(h.CL, false)).find(e => null != e.promotion_id && true === e.consumed);
      a = null != (e = null == t ? true : t.promotion_id) ? e : null
    }
    o.Z.dispatch({
      type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
      promotions: n.body,
      consumedInboundPromotionId: a
    })
  } catch (e) {
    o.Z.dispatch({
      type: "ACTIVE_PROMOTIONS_FETCH_FAIL"
    })
  }
}
async function y() {
  if (!m.Z.isFetchingActiveBogoPromotion) try {
    o.Z.dispatch({
      type: "ACTIVE_BOGO_PROMOTION_FETCH"
    });
    let e = (await i.tn.get({
      url: g.ANM.BOGO_PROMOTIONS,
      query: {
        locale: l.default.locale
      },
      rejectWithError: true
    })).body;
    o.Z.dispatch({
      type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS",
      activePromotion: u.Z.createFromServer(e)
    })
  } catch (e) {
    o.Z.dispatch({
      type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL"
    })
  }
}
let O = {
  fetchActivePromotions: b,
  dismissOutboundPromotionNotice: function() {
    o.Z.dispatch({
      type: "OUTBOUND_PROMOTION_NOTICE_DISMISS"
    });
    let e = m.Z.lastDismissedOutboundPromotionStartDate;
    null != e && c.hW.updateAsync("userContent", t => {
      t.lastDismissedOutboundPromotionStartDate = a.Gm.create({
        value: e
      })
    }, c.fy.INFREQUENT_USER_ACTION)
  },
  markOutboundPromotionsSeen() {
    o.Z.dispatch({
      type: "OUTBOUND_PROMOTIONS_SEEN"
    })
  },
  fetchActiveBogoPromotion: y
}