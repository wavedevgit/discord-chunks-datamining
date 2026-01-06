/** Chunk was on web.js **/
/** chunk id: 16779, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Rg: () => _,
  Xh: () => p,
  ho: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk841784 = require("./841784.js"),
  Chunk297781 = require("./297781.jsx"),
  Chunk371991 = require("./371991.jsx"),
  Chunk561308 = require("./561308.js"),
  Chunk232174 = require("./232174.js"),
  Chunk981631 = require("./981631.js");
let d = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return (0, a.Z)(e) ? t ? i.iWm : i.jje : e.type === u.IIU.LISTENING ? i.RZG : e.type === u.IIU.WATCHING ? i.ARS : i.iWm
};

function f(e) {
  var t, n, a;
  let {
    activity: l
  } = e, u = null != (a = null == (t = l.timestamps) ? true : t.start) ? a : l.created_at;
  if (null == u || (0, c.Z)(l)) return null;
  let f = d(l);
  return (0, r.jsxs)(o.m7, {
    children: [(0, r.jsx)(f, {
      size: "xxs",
      color: i.TVs.colors.TEXT_FEEDBACK_POSITIVE
    }), (0, r.jsx)(s.x, {
      entry: {
        start: u,
        end: null == (n = l.timestamps) ? true : n.end
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
  if ((0, a.Z)(t) || null == t.party) return null;
  let n = (0, l.bT)(t.state, t.party);
  return null == n ? null : (0, r.jsx)(o.ej, {
    Icon: i.BFJ,
    text: n
  })
}

function _(e) {
  var t;
  let {
    activity: n
  } = e, a = (0, l.ap)(null == (t = n.assets) ? true : t.large_text);
  return null == a ? null : (0, r.jsx)(o.ej, {
    Icon: i.sVe,
    text: a
  })
}