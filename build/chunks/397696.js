/** Chunk was on web.js **/
/** chunk id: 397696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => l
}), require("./980754.js"), require("./388685.js"), require("./415506.js");
var Chunk230367 = require("./230367.js"),
  Chunk320215 = require("./320215.js"),
  Chunk240773 = require("./240773.js"),
  Chunk495852 = require("./495852.js");
class s extends Chunk495852.C {
  create(e) {
    let t = {
      clientVersion: 0,
      serverVersion: 0,
      dataVersion: 0
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.clientVersion = e.uint32();
          break;
        case 2:
          o.serverVersion = e.uint32();
          break;
        case 3:
          o.dataVersion = e.uint32();
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.clientVersion && t.tag(1, r.TD.Varint).uint32(e.clientVersion), 0 !== e.serverVersion && t.tag(2, r.TD.Varint).uint32(e.serverVersion), 0 !== e.dataVersion && t.tag(3, r.TD.Varint).uint32(e.dataVersion);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.Versions", [{
      no: 1,
      name: "client_version",
      kind: "scalar",
      T: 13
    }, {
      no: 2,
      name: "server_version",
      kind: "scalar",
      T: 13
    }, {
      no: 3,
      name: "data_version",
      kind: "scalar",
      T: 13
    }])
  }
}
let l = new s