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
    l = (0, i.e7)([o.Z], () => o.Z.hasConsented(C.pjP.PERSONALIZATION)),
    _ = r.useMemo(() => {
      var t;
      return null != (t = null == e ? true : e[s.m.RECOMMENDED]) ? t : []
    }, [e]),
    m = r.useMemo(() => {
      var t;
      return null != (t = null == e ? true : e[s.m.POPULAR]) ? t : []
    }, [e]),
    b = _.length > 0 && l,
    [E, S] = r.useState(b ? s.m.RECOMMENDED : s.m.POPULAR),
    v = (0, f.Z)(),
    x = (0, i.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
    O = (0, i.e7)([u.Z], () => u.Z.getUserDiscounts()),
    y = (0, g.a)(),
    [T, L] = r.useState([]),
    j = r.useCallback(() => {
      S(s.m.RANDOM), L(a().shuffle(x))
    }, [x]);
  r.useEffect(() => {
    L(a().shuffle(x))
  }, [x]);
  let k = r.useMemo(() => {
    let e = [];
    return E === s.m.RECENT ? e = x : E === s.m.PRICE_LOW_TO_HIGH ? e = (0, d.hC)([...x], t) : E === s.m.RECOMMENDED ? e = n ? (0, d.Qf)(v(_), O) : v(_) : E === s.m.POPULAR ? e = n ? (0, d.Qf)(v(m), O) : v(m) : E === s.m.RANDOM && (e = T), y(e)
  }, [E, y, x, T, t, v, _, m, O, n]);
  return {
    sortType: E,
    setSortType: S,
    sortedItems: (0, p.l)(k),
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
    shuffleProducts: j
  }
}