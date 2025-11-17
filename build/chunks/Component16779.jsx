/** Chunk was on web.js **/
/** chunk id: 16779, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Rg: () => h,
  Xh: () => p,
  ho: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk456100 = require("./456100.js"),
  Chunk841784 = require("./841784.js"),
  Chunk297781 = require("./297781.jsx"),
  Chunk371991 = require("./371991.jsx"),
  Chunk561308 = require("./561308.js"),
  Chunk232174 = require("./232174.js"),
  Chunk981631 = require("./981631.js");
let f = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return (0, o.Z)(e) ? t ? i.iWm : i.jje : e.type === d.IIU.LISTENING ? i.RZG : e.type === d.IIU.WATCHING ? i.ARS : i.iWm
};

function _(e) {
  var t, n, o;
  let {
    activity: c
  } = e, {
    enabled: d
  } = a.c.useExperiment({
    location: "UserProfileActivityBadges"
  }, {
    autoTrackExposure: true
  }), _ = null != (o = null == (t = c.timestamps) ? true : t.start) ? o : c.created_at;
  if (null == _ || (0, u.Z)(c)) return null;
  let p = f(c, d);
  return (0, r.jsxs)(s.m7, {
    children: [(0, r.jsx)(p, {
      size: "xxs",
      color: i.TVs.colors.TEXT_FEEDBACK_POSITIVE
    }), (0, r.jsx)(l.x3, {
      entry: {
        start: _,
        end: null == (n = c.timestamps) ? true : n.end
      },
      textColor: "text-feedback-positive",
      bold: true
    })]
  })
}

function p(e) {
  let {
    activity: t
  } = e;
  if ((0, o.Z)(t) || null == t.party) return null;
  let n = (0, c.bT)(t.state, t.party);
  return null == n ? null : (0, r.jsx)(s.ej, {
    Icon: i.BFJ,
    text: n
  })
}

function h(e) {
  var t;
  let {
    activity: n
  } = e, a = (0, c.ap)(null == (t = n.assets) ? true : t.large_text);
  return null == a ? null : (0, r.jsx)(s.ej, {
    Icon: i.sVe,
    text: a
  })
}