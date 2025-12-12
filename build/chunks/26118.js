/** Chunk was on web.js **/
/** chunk id: 26118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bi: () => b,
  CE: () => O,
  QB: () => v,
  UN: () => y,
  nJ: () => E
});
var Chunk473749 = require("./473749.js"),
  Chunk379649 = require("./379649.js"),
  Chunk925928 = require("./925928.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk946215 = require("./946215.js"),
  Chunk534675 = require("./534675.js"),
  Chunk584121 = require("./584121.js"),
  Chunk860029 = require("./860029.js"),
  Chunk787183 = require("./787183.js"),
  Chunk305714 = require("./305714.js"),
  Chunk235887 = require("./235887.js"),
  Chunk729146 = require("./729146.js"),
  Chunk907359 = require("./907359.js"),
  Chunk281684 = require("./281684.js");
let g = [Chunk379649.J6.HOURS, Chunk379649.J6.MINUTES];

function E(e) {
  let {
    unit: t,
    time: n
  } = (0, i.CI)(e, g), r = (0, a.d0)();
  if (null == n) return o.intl.formatToPlainString(r.minutes, {
    minutes: 0
  });
  let s = Math.round(n);
  return t === i.J6.HOURS ? o.intl.formatToPlainString(r.hours, {
    hours: s
  }) : o.intl.formatToPlainString(r.minutes, {
    minutes: s
  })
}

function b(e) {
  let {
    unit: t,
    time: n
  } = (0, i.CI)(e, g);
  return {
    duration: Math.round(null != n ? n : 0),
    unit: t
  }
}

function y(e) {
  switch (e) {
    case 0:
      return m.Z;
    case 1:
      return f.Z;
    case 2:
      return l.Z;
    case 3:
      return d.Z;
    case 4:
      return _.Z;
    case 5:
      return h.Z;
    case 6:
      return p.Z;
    case 7:
      return s.Z;
    case 8:
      return u.Z;
    default:
      return c.Z
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