/** Chunk was on web.js **/
/** chunk id: 246605, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BC: () => f,
  oX: () => p,
  pX: () => d,
  xr: () => u
});
var Chunk110259 = require("./110259.js"),
  Chunk933681 = require("./933681.js"),
  Chunk73153 = require("./73153.js"),
  Chunk274184 = require("./274184.js"),
  Chunk954571 = require("./954571.js"),
  Chunk499785 = require("./499785.js"),
  Chunk652215 = require("./652215.js");

function u(e) {
  a.h.dispatch({
    type: "SURVEY_OVERRIDE",
    id: e
  })
}

function d(e, t) {
  a.h.dispatch({
    type: "SURVEY_HIDE",
    key: e
  }), t ? o.default.track(c.HAw.APP_NOTICE_CLOSED, {
    notice_type: c.kqX.SURVEY,
    survey_id: e,
    dismissed: t
  }) : o.default.track(c.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
    notice_type: c.kqX.SURVEY
  })
}

function f(e, t) {
  var n = {};
  return null != e && (n.survey_override = e), null != t && (n.disable_auto_seen = t), l.A.get({
    url: c.Rsh.USER_SURVEY,
    query: n,
    trackedActionData: {
      event: r.NetworkActionNames.USER_SURVEY_FETCH,
      properties: e => {
        var t;
        let n = null == e || null == (t = e.body) ? true : t.survey;
        return (0, i.e0)({
          key: null == n ? true : n.key
        })
      }
    },
    rejectWithError: false
  }).then(e => {
    var t, n;
    return a.h.dispatch({
      type: "SURVEY_FETCHED",
      survey: null == e || null == (t = e.body) ? true : t.survey
    }), null == e || null == (n = e.body) ? true : n.survey
  }, () => {
    a.h.dispatch({
      type: "SURVEY_FETCHED",
      survey: null
    })
  })
}

function p(e) {
  let t = s.Ay.getLastSeenTimestamp();
  if (null === t || null != t && Date.now() - t >= s.bh) return a.h.dispatch({
    type: "SURVEY_SEEN",
    key: e
  }), l.A.post({
    url: c.Rsh.USER_SURVEY_SEEN(e),
    trackedActionData: {
      event: r.NetworkActionNames.USER_SURVEY_SEEN,
      properties: t => (0, i.e0)({
        key: e
      })
    },
    rejectWithError: false
  })
}