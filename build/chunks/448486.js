/** Chunk was on 83098 **/
/** chunk id: 448486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let t = (0, r.Wu)([a.default], () => e.recipients.map(e => a.default.getUser(e)).filter(s.lm).map(e => i.ZP.getName(e)));
  return l.useMemo(() => {
    if ("" === e.name) return null;
    if (0 === t.length) return null;
    if (1 === t.length) return u.intl.formatToPlainString(u.t["J+Wpst"], {
      first: t[0]
    });
    if (2 === t.length) return u.intl.formatToPlainString(u.t.gwRP0Y, {
      first: t[0],
      second: t[1]
    });
    if (3 === t.length) return u.intl.formatToPlainString(u.t.QDB5et, {
      first: t[0],
      second: t[1],
      third: t[2]
    });
    let n = t.length - 3;
    return u.intl.formatToPlainString(u.t.VYfueb, {
      first: t[0],
      second: t[1],
      third: t[2],
      count: n
    })
  }, [e, t])
}