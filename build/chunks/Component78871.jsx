/** Chunk was on web.js **/
/** chunk id: 78871, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QA: () => p,
  Rq: () => h,
  cy: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk765379 = require("./765379.js"),
  Chunk471107 = require("./471107.js"),
  Chunk506326 = require("./506326.jsx"),
  Chunk693879 = require("./693879.jsx"),
  Chunk583846 = require("./583846.js"),
  Chunk53257 = require("./53257.js"),
  Chunk652215 = require("./652215.js");
let f = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return t ? i.Qfk : (0, a.A)(e) ? n ? i._xR : i.k9F : e.type === d.$pd.LISTENING ? i.T7G : e.type === d.$pd.WATCHING ? i.Uk3 : i._xR
};

function p(e) {
  var t, n, a, c, d;
  let {
    activity: p
  } = e, _ = null != (t = null == (a = p.timestamps) ? true : a.start) ? t : p.created_at, {
    now: h
  } = (0, o.G)();
  if (null == _ || (0, u.A)(p)) return null;
  let m = null == (c = p.timestamps) ? true : c.end,
    g = null != (n = null == (d = p.timestamps) ? true : d.isCountDown) && n,
    E = f(p, g && null != m && m > h);
  return (0, r.jsxs)(s.er, {
    children: [(0, r.jsx)(E, {
      size: "xxs",
      color: i.LU0.colors.TEXT_FEEDBACK_POSITIVE
    }), (0, r.jsx)(l.z, {
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
  if ((0, a.A)(t) || null == t.party) return null;
  let n = (0, c.gF)(t.state, t.party);
  return null == n ? null : (0, r.jsx)(s.fM, {
    Icon: i.nFg,
    text: n
  })
}

function h(e) {
  var t;
  let {
    activity: n
  } = e, a = (0, c.kR)(null == (t = n.assets) ? true : t.large_text);
  return null == a ? null : (0, r.jsx)(s.fM, {
    Icon: i.Kck,
    text: a
  })
}