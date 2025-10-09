/** Chunk was on 45620 **/
/** chunk id: 849275, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./290780.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
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
      return null != (t = null == e ? true : e[s.m.RECOMMENDED]) ? t : []
    }, [e]),
    m = r.useMemo(() => {
      var t;
      return null != (t = null == e ? true : e[s.m.POPULAR]) ? t : []
    }, [e]),
    b = _.length > 0 && l,
    [E, v] = r.useState(b ? s.m.RECOMMENDED : s.m.POPULAR),
    S = (0, p.Z)(),
    O = (0, a.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
    x = (0, a.e7)([u.Z], () => u.Z.getUserDiscounts()),
    y = (0, g.a)(),
    [j, T] = r.useState([]),
    L = r.useCallback(() => {
      v(s.m.RANDOM), T(i().shuffle(O))
    }, [O]);
  r.useEffect(() => {
    T(i().shuffle(O))
  }, [O]);
  let k = r.useMemo(() => {
    let e = [];
    return E === s.m.RECENT ? e = O : E === s.m.PRICE_LOW_TO_HIGH ? e = (0, d.hC)([...O], t) : E === s.m.RECOMMENDED ? e = n ? (0, d.Qf)(S(_), x) : S(_) : E === s.m.POPULAR ? e = n ? (0, d.Qf)(S(m), x) : S(m) : E === s.m.RANDOM && (e = j), y(e)
  }, [E, y, O, j, t, S, _, m, x, n]);
  return {
    sortType: E,
    setSortType: v,
    sortedItems: (0, f.l)(k),
    sortOptions: r.useMemo(() => {
      let e = [{
        value: s.m.POPULAR,
        label: h.intl.string(h.t["1wQj4O"])
      }, {
        value: s.m.RECENT,
        label: h.intl.string(h.t["6NZpt7"])
      }, {
        value: s.m.PRICE_LOW_TO_HIGH,
        label: h.intl.string(h.t.RTG4yM)
      }];
      return b && e.unshift({
        value: s.m.RECOMMENDED,
        label: h.intl.string(h.t.JrlKlp)
      }), e
    }, [b]),
    showRecommendationOption: b,
    shuffleProducts: L
  }
}