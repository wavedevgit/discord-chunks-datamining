/** Chunk was on 45620 **/
/** chunk id: 243126, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  N: () => h
}), require("./388685.js"), require("./642613.js"), require("./290780.js");
var Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk482820 = require("./482820.js"),
  Chunk442837 = require("./442837.js"),
  Chunk480294 = require("./480294.js"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk26931 = require("./26931.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let h = (e, t) => {
  let n = (0, o.e7)([s.Z], () => s.Z.hasConsented(f.pjP.PERSONALIZATION)),
    l = r.useMemo(() => {
      var t;
      return null != (t = null == e ? true : e[i.m.RECOMMENDED]) ? t : []
    }, [e]),
    h = r.useMemo(() => {
      var t;
      return null != (t = null == e ? true : e[i.m.POPULAR]) ? t : []
    }, [e]),
    m = l.length > 0 && n,
    [_, v] = r.useState(m ? i.m.RECOMMENDED : i.m.POPULAR),
    [O, C] = r.useState(0),
    E = (0, d.u)(),
    S = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
    y = (0, p.a)(),
    x = r.useMemo(() => {
      let e = [];
      return _ === i.m.RECENT ? e = S : _ === i.m.PRICE_LOW_TO_HIGH ? e = [...S].sort((e, n) => {
        var r, l, a, i;
        return (null != (a = null == (r = (0, u.Vw)(e, t, false)) ? true : r.amount) ? a : 0) - (null != (i = null == (l = (0, u.Vw)(n, t, false)) ? true : l.amount) ? i : 0)
      }) : _ === i.m.RECOMMENDED ? e = E(l) : _ === i.m.POPULAR ? e = E(h) : _ === i.m.RANDOM && (e = a().shuffle(S)), y(e)
    }, [_, y, S, t, E, l, h, O]),
    j = r.useCallback(() => {
      C(e => e + 1), v(i.m.RANDOM)
    }, []);
  return {
    sortType: _,
    setSortType: v,
    sortedItems: (0, g.l)(x),
    sortOptions: r.useMemo(() => {
      let e = [{
        value: i.m.POPULAR,
        label: b.intl.string(b.t["1wQj4O"])
      }, {
        value: i.m.RECENT,
        label: b.intl.string(b.t["6NZpt7"])
      }, {
        value: i.m.PRICE_LOW_TO_HIGH,
        label: b.intl.string(b.t.RTG4yM)
      }];
      return m && e.unshift({
        value: i.m.RECOMMENDED,
        label: b.intl.string(b.t.JrlKlp)
      }), e
    }, [m]),
    showRecommendationOption: m,
    shuffleProducts: j
  }
}