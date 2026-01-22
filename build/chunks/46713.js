/** Chunk was on web.js **/
/** chunk id: 46713, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk624968 = require("./624968.jsx"),
  Chunk682420 = require("./682420.jsx"),
  Chunk405629 = require("./405629.js");
let l = {
    ContainedHero: Chunk682420.Z,
    BasicHero: e => {
      let {
        bannerSrc: t
      } = e;
      return null
    },
    PromotionalHero: () => null,
    InteractiveHScroll: Chunk624968.Z,
    Stack: Chunk405629.Nt,
    Text: Chunk405629.lc,
    Heading: Chunk405629.WS
  },
  c = e => {
    let {
      overrides: t
    } = e;
    return r.useMemo(() => {
      let e = (0, i.cloneDeep)(l);
      if (null != t)
        for (let [n, r] of Object.entries(t)) null != r && (e[n] = r);
      return e
    }, [t])
  }