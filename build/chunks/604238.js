/** Chunk was on web.js **/
/** chunk id: 604238, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => d,
  e: () => f
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk408238 = require("./408238.jsx"),
  Chunk528226 = require("./528226.jsx"),
  Chunk889634 = require("./889634.jsx"),
  Chunk219561 = require("./219561.js"),
  Chunk825638 = require("./825638.jsx"),
  Chunk244190 = require("./244190.jsx");
let d = {
    ContainedHero: Chunk528226.A,
    BasicHero: e => {
      let {
        bannerSrc: t
      } = e;
      return null
    },
    PromotionalHero: () => null,
    InteractiveHScroll: Chunk408238.A,
    Grid: Chunk889634.A,
    Section: Chunk825638.A,
    ShopProductCard: Chunk244190.A,
    Stack: Chunk219561.Kp,
    Text: Chunk219561.t,
    Heading: Chunk219561.Oo
  },
  f = e => {
    let {
      overrides: t
    } = e;
    return r.useMemo(() => {
      let e = (0, i.cloneDeep)(d);
      if (null != t)
        for (let [n, r] of Object.entries(t)) null != r && (e[n] = r);
      return e
    }, [t])
  }