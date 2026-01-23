/** Chunk was on web.js **/
/** chunk id: 57882, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OW: () => b,
  Xq: () => E,
  _V: () => v,
  oO: () => y,
  od: () => O
});
var Chunk64700 = require("./64700.js"),
  Chunk499979 = require("./499979.js"),
  Chunk381849 = require("./381849.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk532063 = require("./532063.js"),
  Chunk367485 = require("./367485.js"),
  Chunk607374 = require("./607374.js"),
  Chunk862446 = require("./862446.js"),
  Chunk818952 = require("./818952.js"),
  Chunk443670 = require("./443670.js"),
  Chunk583623 = require("./583623.js"),
  Chunk620324 = require("./620324.js"),
  Chunk379043 = require("./379043.js"),
  Chunk979143 = require("./979143.js");
let g = [Chunk499979.pJ.HOURS, Chunk499979.pJ.MINUTES];

function E(e) {
  let {
    unit: t,
    time: n
  } = (0, i.$l)(e, g), r = (0, a.i)();
  if (null == n) return s.intl.formatToPlainString(r.minutes, {
    minutes: 0
  });
  let o = Math.round(n);
  return t === i.pJ.HOURS ? s.intl.formatToPlainString(r.hours, {
    hours: o
  }) : s.intl.formatToPlainString(r.minutes, {
    minutes: o
  })
}

function y(e) {
  let {
    unit: t,
    time: n
  } = (0, i.$l)(e, g);
  return {
    duration: Math.round(null != n ? n : 0),
    unit: t
  }
}

function b(e) {
  switch (e) {
    case 0:
      return h.A;
    case 1:
      return f.A;
    case 2:
      return l.A;
    case 3:
      return d.A;
    case 4:
      return _.A;
    case 5:
      return m.A;
    case 6:
      return p.A;
    case 7:
      return o.A;
    case 8:
      return u.A;
    default:
      return c.A
  }
}

function O(e, t) {
  return {
    monthName: (0, r.useMemo)(() => {
      let n = new Date;
      return n.setDate(1), n.setMonth(e - 1), n.toLocaleString(t, {
        month: "long"
      })
    }, [e, t])
  }
}

function v(e) {
  return Math.min(Math.max(Math.round(e / 10), 1), 9)
}