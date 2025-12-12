/** Chunk was on web.js **/
/** chunk id: 16779, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Rg: () => m,
  Xh: () => _,
  ho: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk841784 = require("./841784.js"),
  Chunk368176 = require("./368176.js"),
  Chunk297781 = require("./297781.jsx"),
  Chunk371991 = require("./371991.jsx"),
  Chunk561308 = require("./561308.js"),
  Chunk232174 = require("./232174.js"),
  Chunk981631 = require("./981631.js");
let f = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return (0, o.Z)(e) ? t ? i.iWm : i.jje : e.type === d.IIU.LISTENING ? i.RZG : e.type === d.IIU.WATCHING ? i.ARS : i.iWm
};

function p(e) {
  var t, n, o;
  let {
    activity: c
  } = e, {
    enabled: d
  } = a.Q.useConfig({
    location: "profile_timestamp_badge"
  }), p = null != (o = null == (t = c.timestamps) ? true : t.start) ? o : c.created_at;
  if (null == p || (0, u.Z)(c)) return null;
  let _ = f(c);
  return (0, r.jsxs)(s.m7, {
    children: [(0, r.jsx)(_, {
      size: "xxs",
      color: d ? i.TVs.colors.ICON_FEEDBACK_POSITIVE : i.TVs.colors.TEXT_FEEDBACK_POSITIVE
    }), (0, r.jsx)(l.x3, {
      entry: {
        start: p,
        end: null == (n = c.timestamps) ? true : n.end
      },
      textColor: "text-feedback-positive",
      bold: true
    })]
  })
}

function _(e) {
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

function m(e) {
  var t;
  let {
    activity: n
  } = e, o = (0, c.ap)(null == (t = n.assets) ? true : t.large_text);
  return null == o ? null : (0, r.jsx)(s.ej, {
    Icon: i.sVe,
    text: o
  })
}