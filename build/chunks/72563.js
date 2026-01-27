/** Chunk was on 96758 **/
/** chunk id: 72563, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  i: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk427262 = require("./427262.js"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let t = (0, l.yK)([s.default], () => e.recipients.map(e => s.default.getUser(e)).filter(i.Vq).map(e => a.Ay.getName(e)));
  return n.useMemo(() => {
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
    let r = t.length - 3;
    return u.intl.formatToPlainString(u.t.VYfueb, {
      first: t[0],
      second: t[1],
      third: t[2],
      count: r
    })
  }, [e, t])
}