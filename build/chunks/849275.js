/** Chunk was on 45620 **/
/** chunk id: 849275, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
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

function C(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    l = (0, s.e7)([o.Z], () => o.Z.hasConsented(h.pjP.PERSONALIZATION)),
    C = r.useMemo(() => {
      var t;
      return null != (t = null == e ? true : e[a.m.RECOMMENDED]) ? t : []
    }, [e]),
    m = r.useMemo(() => {
      var t;
      return null != (t = null == e ? true : e[a.m.POPULAR]) ? t : []
    }, [e]),
    b = C.length > 0 && l,
    [E, S] = r.useState(b ? a.m.RECOMMENDED : a.m.POPULAR),
    v = (0, f.Z)(),
    x = (0, s.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
    O = (0, s.e7)([u.Z], () => u.Z.getUserDiscounts()),
    T = (0, g.a)(),
    [y, L] = r.useState([]),
    j = r.useCallback(() => {
      S(a.m.RANDOM), L(i().shuffle(x))
    }, [x]);
  r.useEffect(() => {
    L(i().shuffle(x))
  }, [x]);
  let k = r.useMemo(() => {
    let e = [];
    return E === a.m.RECENT ? e = x : E === a.m.PRICE_LOW_TO_HIGH ? e = (0, d.hC)([...x], t) : E === a.m.RECOMMENDED ? e = n ? (0, d.Qf)(v(C), O) : v(C) : E === a.m.POPULAR ? e = n ? (0, d.Qf)(v(m), O) : v(m) : E === a.m.RANDOM && (e = y), T(e)
  }, [E, T, x, y, t, v, C, m, O, n]);
  return {
    sortType: E,
    setSortType: S,
    sortedItems: (0, p.l)(k),
    sortOptions: r.useMemo(() => {
      let e = [{
        value: a.m.POPULAR,
        label: _.intl.string(_.t["1wQj4O"])
      }, {
        value: a.m.RECENT,
        label: _.intl.string(_.t["6NZpt7"])
      }, {
        value: a.m.PRICE_LOW_TO_HIGH,
        label: _.intl.string(_.t.RTG4yM)
      }];
      return b && e.unshift({
        value: a.m.RECOMMENDED,
        label: _.intl.string(_.t.JrlKlp)
      }), e
    }, [b]),
    showRecommendationOption: b,
    shuffleProducts: j
  }
}