/** Chunk was on web.js **/
/** chunk id: 16779, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Rg: () => h,
  Xh: () => _,
  ho: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk841784 = require("./841784.js"),
  Chunk201812 = require("./201812.js"),
  Chunk297781 = require("./297781.jsx"),
  Chunk371991 = require("./371991.jsx"),
  Chunk561308 = require("./561308.js"),
  Chunk232174 = require("./232174.js"),
  Chunk981631 = require("./981631.js");
let f = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return t ? i.wGF : (0, a.Z)(e) ? n ? i.iWm : i.jje : e.type === d.IIU.LISTENING ? i.RZG : e.type === d.IIU.WATCHING ? i.ARS : i.iWm
};

function p(e) {
  var t, n, a, c, d;
  let {
    activity: p
  } = e, _ = null != (c = null == (t = p.timestamps) ? true : t.start) ? c : p.created_at, {
    now: h
  } = (0, o.t)();
  if (null == _ || (0, u.Z)(p)) return null;
  let m = null == (n = p.timestamps) ? true : n.end,
    g = null != (d = null == (a = p.timestamps) ? true : a.isCountDown) && d,
    E = f(p, g && null != m && m > h);
  return (0, r.jsxs)(s.m7, {
    children: [(0, r.jsx)(E, {
      size: "xxs",
      color: i.TVs.colors.TEXT_FEEDBACK_POSITIVE
    }), (0, r.jsx)(l.x, {
      entry: {
        start: _,
        end: m,
        isCountDown: g
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
  if ((0, a.Z)(t) || null == t.party) return null;
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