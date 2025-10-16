/** Chunk was on web.js **/
/** chunk id: 357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk581282 = require("./581282.js"),
  Chunk8853 = require("./8853.js"),
  Chunk81825 = require("./81825.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk81825.Z {
  static createFromServer(e) {
    return new s({
      id: e.id,
      componentType: e.component_type,
      properties: i.t.fromBinary((0, r.c)(e.properties))
    })
  }
  constructor(e) {
    super(), o(this, "id", true), o(this, "componentType", true), o(this, "properties", true), this.id = e.id, this.componentType = e.componentType, this.properties = e.properties
  }
}