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
  Chunk415191 = require("./415191.js"),
  Chunk103746 = require("./103746.js"),
  Chunk811272 = require("./811272.js"),
  Chunk484570 = require("./484570.js"),
  Chunk754283 = require("./754283.js"),
  Chunk291824 = require("./291824.js"),
  Chunk678976 = require("./678976.js"),
  Chunk38803 = require("./38803.js"),
  Chunk466577 = require("./466577.js"),
  Chunk446599 = require("./446599.js");
let g = [Chunk379649.J6.HOURS, Chunk379649.J6.MINUTES];

function E(e) {
  let {
    unit: t,
    time: n
  } = (0, i.CI)(e, g), r = (0, o.d0)();
  if (null == n) return a.intl.formatToPlainString(r.minutes, {
    minutes: 0
  });
  let s = Math.round(n);
  return t === i.J6.HOURS ? a.intl.formatToPlainString(r.hours, {
    hours: s
  }) : a.intl.formatToPlainString(r.minutes, {
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