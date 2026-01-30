/** Chunk was on 65787 **/
/** chunk id: 57882, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  OW: () => R,
  _V: () => f,
  oO: () => u
});
var Chunk499979 = require("./499979.js"),
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
let N = [Chunk499979.pJ.HOURS, Chunk499979.pJ.MINUTES];

function u(e) {
  let {
    unit: r,
    time: t
  } = (0, n.$l)(e, N), s = (0, a.i)();
  if (null == t) return o.intl.formatToPlainString(s.minutes, {
    minutes: 0
  });
  let _ = Math.round(t);
  return r === n.pJ.HOURS ? o.intl.formatToPlainString(s.hours, {
    hours: _
  }) : o.intl.formatToPlainString(s.minutes, {
    minutes: _
  })
}

function R(e) {
  switch (e) {
    case 0:
      return O.A;
    case 1:
      return C.A;
    case 2:
      return _.A;
    case 3:
      return E.A;
    case 4:
      return i.A;
    case 5:
      return A.A;
    case 6:
      return d.A;
    case 7:
      return s.A;
    case 8:
      return c.A;
    default:
      return l.A
  }
}

function f(e) {
  return Math.min(Math.max(Math.round(e / 10), 1), 9)
}