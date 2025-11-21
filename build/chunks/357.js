/** Chunk was on web.js **/
/** chunk id: 357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk581282 = require("./581282.js"),
  Chunk647943 = require("./647943.js"),
  Chunk8853 = require("./8853.js"),
  Chunk81825 = require("./81825.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk81825.Z {
  static createFromServer(e) {
    let t = new TextDecoder("utf-8", {
      ignoreBOM: true
    });
    return new l({
      id: e.id,
      componentType: e.component_type,
      properties: a.t.fromBinary((0, r.c)(e.properties), {
        readUnknownField: true,
        readerFactory: e => new i.o(e, t)
      }),
      promotionId: e.promotion_id
    })
  }
  constructor(e) {
    super(), s(this, "id", true), s(this, "componentType", true), s(this, "properties", true), s(this, "promotionId", true), this.id = e.id, this.componentType = e.componentType, this.properties = e.properties, this.promotionId = e.promotionId
  }
}