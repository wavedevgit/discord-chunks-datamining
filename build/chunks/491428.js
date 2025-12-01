/** Chunk was on web.js **/
/** chunk id: 491428, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Xq: () => u,
  g8: () => p,
  hZ: () => d,
  wk: () => f
});
var Chunk990547 = require("./990547.js"),
  Chunk283693 = require("./283693.js"),
  Chunk570140 = require("./570140.js"),
  Chunk558724 = require("./558724.js"),
  Chunk626135 = require("./626135.js"),
  Chunk573261 = require("./573261.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  a.Z.dispatch({
    type: "SURVEY_OVERRIDE",
    id: e
  })
}

function d(e, t) {
  a.Z.dispatch({
    type: "SURVEY_HIDE",
    key: e
  }), t ? s.default.track(c.rMx.APP_NOTICE_CLOSED, {
    notice_type: c.kVF.SURVEY,
    survey_id: e,
    dismissed: t
  }) : s.default.track(c.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
    notice_type: c.kVF.SURVEY
  })
}

function f(e, t) {
  var n = {};
  return null != e && (n.survey_override = e), null != t && (n.disable_auto_seen = t), l.Z.get({
    url: c.ANM.USER_SURVEY,
    query: n,
    trackedActionData: {
      event: r.NetworkActionNames.USER_SURVEY_FETCH,
      properties: e => {
        var t;
        let n = null == e || null == (t = e.body) ? true : t.survey;
        return (0, i.iG)({
          key: null == n ? true : n.key
        })
      }
    },
    rejectWithError: false
  }).then(e => {
    var t;
    a.Z.dispatch({
      type: "SURVEY_FETCHED",
      survey: null == e || null == (t = e.body) ? true : t.survey
    })
  }, () => {
    a.Z.dispatch({
      type: "SURVEY_FETCHED",
      survey: null
    })
  })
}

function p(e) {
  let t = o.Z.getLastSeenTimestamp();
  if (null === t || null != t && Date.now() - t >= o.J) return a.Z.dispatch({
    type: "SURVEY_SEEN",
    key: e
  }), l.Z.post({
    url: c.ANM.USER_SURVEY_SEEN(e),
    trackedActionData: {
      event: r.NetworkActionNames.USER_SURVEY_SEEN,
      properties: t => (0, i.iG)({
        key: e
      })
    },
    rejectWithError: false
  })
}