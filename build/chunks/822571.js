/** Chunk was on web.js **/
/** chunk id: 822571, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk65412 = require("./65412.js"),
  Chunk638504 = require("./638504.js"),
  Chunk287683 = require("./287683.js"),
  Chunk315069 = require("./315069.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk315069.A {
  static createFromServer(e) {
    let t = new TextDecoder("utf-8", {
      ignoreBOM: true
    });
    return new l({
      id: e.id,
      componentType: e.component_type,
      properties: a.m.fromBinary((0, r.A)(e.properties), {
        readUnknownField: true,
        readerFactory: e => new i.V(e, t)
      }),
      promotionId: e.promotion_id
    })
  }
  constructor(e) {
    super(), s(this, "id", true), s(this, "componentType", true), s(this, "properties", true), s(this, "promotionId", true), this.id = e.id, this.componentType = e.componentType, this.properties = e.properties, this.promotionId = e.promotionId
  }
}