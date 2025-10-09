/** Chunk was on 45620 **/
/** chunk id: 849275, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./290780.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
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
    l = (0, a.e7)([o.Z], () => o.Z.hasConsented(C.pjP.PERSONALIZATION)),
    _ = r.useMemo(() => {
      var t;
      return null != (t = null == e ? true : e[i.m.RECOMMENDED]) ? t : []
    }, [e]),
    m = r.useMemo(() => {
      var t;
      return null != (t = null == e ? true : e[i.m.POPULAR]) ? t : []
    }, [e]),
    b = _.length > 0 && l,
    [E, v] = r.useState(b ? i.m.RECOMMENDED : i.m.POPULAR),
    S = (0, p.Z)(),
    x = (0, a.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
    O = (0, a.e7)([u.Z], () => u.Z.getUserDiscounts()),
    y = (0, g.a)(),
    [j, k] = r.useState([]),
    T = r.useCallback(() => {
      v(i.m.RANDOM), k(s().shuffle(x))
    }, [x]);
  r.useEffect(() => {
    k(s().shuffle(x))
  }, [x]);
  let L = r.useMemo(() => {
    let e = [];
    return E === i.m.RECENT ? e = x : E === i.m.PRICE_LOW_TO_HIGH ? e = (0, d.hC)([...x], t) : E === i.m.RECOMMENDED ? e = n ? (0, d.Qf)(S(_), O) : S(_) : E === i.m.POPULAR ? e = n ? (0, d.Qf)(S(m), O) : S(m) : E === i.m.RANDOM && (e = j), y(e)
  }, [E, y, x, j, t, S, _, m, O, n]);
  return {
    sortType: E,
    setSortType: v,
    sortedItems: (0, f.l)(L),
    sortOptions: r.useMemo(() => {
      let e = [{
        value: i.m.POPULAR,
        label: h.intl.string(h.t["1wQj4O"])
      }, {
        value: i.m.RECENT,
        label: h.intl.string(h.t["6NZpt7"])
      }, {
        value: i.m.PRICE_LOW_TO_HIGH,
        label: h.intl.string(h.t.RTG4yM)
      }];
      return b && e.unshift({
        value: i.m.RECOMMENDED,
        label: h.intl.string(h.t.JrlKlp)
      }), e
    }, [b]),
    showRecommendationOption: b,
    shuffleProducts: T
  }
}