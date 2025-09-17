/** Chunk was on 45620 **/
/** chunk id: 849275, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./290780.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk482820 = require("./482820.js"),
  Chunk442837 = require("./442837.js"),
  Chunk480294 = require("./480294.js"),
  Chunk597688 = require("./597688.js"),
  Chunk615006 = require("./615006.js"),
  Chunk884697 = require("./884697.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk934760 = require("./934760.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    l = (0, s.e7)([i.Z], () => i.Z.hasConsented(h.pjP.PERSONALIZATION)),
    _ = r.useMemo(() => {
      var t;
      return null != (t = null == e ? true : e[o.m.RECOMMENDED]) ? t : []
    }, [e]),
    C = r.useMemo(() => {
      var t;
      return null != (t = null == e ? true : e[o.m.POPULAR]) ? t : []
    }, [e]),
    b = _.length > 0 && l,
    [E, S] = r.useState(b ? o.m.RECOMMENDED : o.m.POPULAR),
    O = (0, p.Z)(),
    v = (0, s.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
    x = (0, s.e7)([u.Z], () => u.Z.getUserDiscounts()),
    y = (0, g.a)(),
    [T, L] = r.useState([]),
    j = r.useCallback(() => {
      S(o.m.RANDOM), L(a().shuffle(v))
    }, [v]);
  r.useEffect(() => {
    L(a().shuffle(v))
  }, [v]);
  let k = r.useMemo(() => {
    let e = [];
    return E === o.m.RECENT ? e = v : E === o.m.PRICE_LOW_TO_HIGH ? e = (0, d.hC)([...v], t) : E === o.m.RECOMMENDED ? e = n ? (0, d.Qf)(O(_), x) : O(_) : E === o.m.POPULAR ? e = n ? (0, d.Qf)(O(C), x) : O(C) : E === o.m.RANDOM && (e = T), y(e)
  }, [E, y, v, T, t, O, _, C, x, n]);
  return {
    sortType: E,
    setSortType: S,
    sortedItems: (0, f.l)(k),
    sortOptions: r.useMemo(() => {
      let e = [{
        value: o.m.POPULAR,
        label: m.intl.string(m.t["1wQj4O"])
      }, {
        value: o.m.RECENT,
        label: m.intl.string(m.t["6NZpt7"])
      }, {
        value: o.m.PRICE_LOW_TO_HIGH,
        label: m.intl.string(m.t.RTG4yM)
      }];
      return b && e.unshift({
        value: o.m.RECOMMENDED,
        label: m.intl.string(m.t.JrlKlp)
      }), e
    }, [b]),
    showRecommendationOption: b,
    shuffleProducts: j
  }
}