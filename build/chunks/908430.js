/** Chunk was on 45620 **/
/** chunk id: 908430, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  f: () => i
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk570140 = require("./570140.js"),
  Chunk615006 = require("./615006.js");

function i() {
  let e = Chunk473749.useRef(new Map),
    t = (0, Chunk399606.e7)([Chunk615006.Z], () => Chunk615006.Z.getUserDiscounts());
  Chunk473749.useEffect(() => {
    let n = module.current,
      r = Date.now(),
      l = [];
    return exports.forEach(e => {
      if (null == e.expiresAt) return;
      let t = e.expiresAt.getTime() - r;
      if (t <= 0) l.push(e.discountId);
      else {
        let r = setTimeout(() => {
          a.Z.dispatch({
            type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED",
            discountIds: [e.discountId]
          }), n.delete(e.discountId)
        }, t);
        n.set(e.discountId, r)
      }
    }), Chunk399606.length > 0 && Chunk570140.Z.dispatch({
      type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED",
      discountIds: Chunk399606
    }), () => {
      require.forEach(e => clearTimeout(e)), require.clear()
    }
  }, [exports])
}