/** Chunk was on 40215 **/
/** chunk id: 57882, original params: r,E,a (module,exports,require) **/
require.d(exports, {
  OW: () => u,
  Xq: () => d,
  _V: () => c,
  oO: () => P,
  od: () => f
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
let S = [Chunk499979.pJ.HOURS, Chunk499979.pJ.MINUTES];

function d(r) {
  let {
    unit: E,
    time: a
  } = (0, o.$l)(r, S), _ = (0, C.i)();
  if (null == a) return e.intl.formatToPlainString(_.minutes, {
    minutes: 0
  });
  let n = Math.round(a);
  return E === o.pJ.HOURS ? e.intl.formatToPlainString(_.hours, {
    hours: n
  }) : e.intl.formatToPlainString(_.minutes, {
    minutes: n
  })
}

function P(r) {
  let {
    unit: E,
    time: a
  } = (0, o.$l)(r, S);
  return {
    duration: Math.round(null != a ? a : 0),
    unit: E
  }
}

function u(r) {
  switch (r) {
    case 0:
      return l.A;
    case 1:
      return t.A;
    case 2:
      return A.A;
    case 3:
      return O.A;
    case 4:
      return R.A;
    case 5:
      return T.A;
    case 6:
      return I.A;
    case 7:
      return n.A;
    case 8:
      return s.A;
    default:
      return N.A
  }
}

function f(r, E) {
  return {
    monthName: (0, _.useMemo)(() => {
      let a = new Date;
      return a.setDate(1), a.setMonth(r - 1), a.toLocaleString(E, {
        month: "long"
      })
    }, [r, E])
  }
}

function c(r) {
  return Math.min(Math.max(Math.round(r / 10), 1), 9)
}