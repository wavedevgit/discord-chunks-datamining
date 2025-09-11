/** Chunk was on web.js **/
/** chunk id: 607550, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  iI: () => o,
  ny: () => l,
  yj: () => s
}), require("./388685.js");
var Chunk879690 = require("./879690.js"),
  Chunk731965 = require("./731965.js");
let a = (0, Chunk879690.U)((e, t) => ({
  skuIds: new Set,
  addSku: t => {
    (0, i.j)(() => {
      e(e => ({
        skuIds: new Set([...e.skuIds, t])
      }))
    })
  },
  removeSku: t => {
    (0, i.j)(() => {
      e(e => {
        let n = new Set(e.skuIds);
        return n.delete(t), {
          skuIds: n
        }
      })
    })
  },
  hasSkuId: e => t().skuIds.has(e),
  getSkuIds: () => Array.from(t().skuIds),
  clearWishlist: () => {
    (0, i.j)(() => {
      e({
        skuIds: new Set
      })
    })
  }
}));

function o(e) {
  a.getState().addSku(e)
}

function s(e) {
  a.getState().removeSku(e)
}

function l(e) {
  return a(t => t.skuIds.has(e))
}