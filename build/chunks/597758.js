/** Chunk was on web.js **/
/** chunk id: 597758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => O,
  BE: () => E,
  hS: () => b
});
var Chunk160517 = require("./160517.js"),
  Chunk562465 = require("./562465.js"),
  Chunk406935 = require("./406935.js"),
  Chunk73153 = require("./73153.js"),
  Chunk339048 = require("./339048.js"),
  Chunk773669 = require("./773669.js"),
  Chunk594061 = require("./594061.js"),
  Chunk835095 = require("./835095.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk728364 = require("./728364.js"),
  Chunk91435 = require("./91435.js"),
  Chunk412260 = require("./412260.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js");

function E() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    t = d.default.getCurrentUser(),
    n = f.Ay.isPremiumExactly(t, m.PremiumTypes.TIER_2),
    r = (0, _.r)({
      location: "maybeFetchActivePromotions"
    }),
    i = p.m.getCurrentConfig({
      location: "maybeFetchActivePromotions"
    }, {
      autoTrackExposure: false,
      disable: n
    }).enabled;
  (r || n || i) && !h.A.isFetchingActivePromotions && (e && null != h.A.lastFetchedActivePromotions || y())
}
async function y() {
  try {
    s.h.dispatch({
      type: "ACTIVE_PROMOTIONS_FETCH"
    });
    let t = r.j.DESKTOP,
      n = await i.Bo.get({
        url: g.Rsh.PROMOTIONS,
        query: {
          locale: l.default.locale,
          platform: t
        },
        oldFormErrors: true,
        rejectWithError: true
      }),
      a = h.A.consumedInboundPromotionId;
    if (!h.A.hasFetchedConsumedInboundPromotionId) {
      var e;
      let t = (await (0, o.LM)(m.tv, false)).find(e => null != e.promotion_id && true === e.consumed);
      a = null != (e = null == t ? true : t.promotion_id) ? e : null
    }
    s.h.dispatch({
      type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
      promotions: n.body,
      consumedInboundPromotionId: a
    })
  } catch (e) {
    s.h.dispatch({
      type: "ACTIVE_PROMOTIONS_FETCH_FAIL"
    })
  }
}
async function b() {
  if (!h.A.isFetchingActiveBogoPromotion) try {
    s.h.dispatch({
      type: "ACTIVE_BOGO_PROMOTION_FETCH"
    });
    let e = (await i.Bo.get({
      url: g.Rsh.BOGO_PROMOTIONS,
      query: {
        locale: l.default.locale
      },
      rejectWithError: true
    })).body;
    s.h.dispatch({
      type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS",
      activePromotion: u.A.createFromServer(e)
    })
  } catch (e) {
    s.h.dispatch({
      type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL"
    })
  }
}
let O = {
  fetchActivePromotions: y,
  dismissOutboundPromotionNotice: function() {
    s.h.dispatch({
      type: "OUTBOUND_PROMOTION_NOTICE_DISMISS"
    });
    let e = h.A.lastDismissedOutboundPromotionStartDate;
    null != e && c.wc.updateAsync("userContent", t => {
      t.lastDismissedOutboundPromotionStartDate = a.hU.create({
        value: e
      })
    }, c.Sb.INFREQUENT_USER_ACTION)
  },
  markOutboundPromotionsSeen() {
    s.h.dispatch({
      type: "OUTBOUND_PROMOTIONS_SEEN"
    })
  },
  fetchActiveBogoPromotion: b
}