/** Chunk was on web.js **/
/** chunk id: 257474, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  mo: () => l
}), require("./734808.js"), require("./896048.js"), require("./65821.js"), require("./321073.js");
var Chunk852015 = require("./852015.js"),
  Chunk144367 = require("./144367.js"),
  Chunk428420 = require("./428420.js"),
  Chunk324281 = require("./324281.js"),
  Chunk335871 = require("./335871.js"),
  l = function(e) {
    return e[e.UNSPECIFIED_DISCLOSURE = 0] = "UNSPECIFIED_DISCLOSURE", e[e.IP_LOCATION = 1] = "IP_LOCATION", e[e.DISPLAYS_ADVERTISEMENTS = 2] = "DISPLAYS_ADVERTISEMENTS", e[e.PARTNER_SDK_DATA_SHARING_MESSAGE = 3] = "PARTNER_SDK_DATA_SHARING_MESSAGE", e
  }({});
class c extends Chunk324281.G {
  create(e) {
    let t = {
      metadata: {},
      platformName: "",
      platformUsername: "",
      version: "0"
    };
    return globalThis.Object.defineProperty(t, a.$, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.x)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let a = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          this.binaryReadMap1(a.metadata, e, n);
          break;
        case 2:
          a.platformName = e.string();
          break;
        case 3:
          a.platformUsername = e.string();
          break;
        case 4:
          a.version = e.fixed64().toString();
          break;
        default:
          let o = n.readUnknownField;
          if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== o && (true === o ? r.f$.onRead : o)(this.typeName, a, t, i, s)
      }
    }
    return a
  }
  binaryReadMap1(e, t, n) {
    let r = t.uint32(),
      i = t.pos + r,
      a, o;
    for (; t.pos < i;) {
      let [e, n] = t.tag();
      switch (e) {
        case 1:
          a = t.string();
          break;
        case 2:
          o = t.string();
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection.metadata")
      }
    }
    e[null != a ? a : ""] = null != o ? o : ""
  }
  internalBinaryWrite(e, t, n) {
    for (let n of Object.keys(e.metadata)) t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.LengthDelimited).string(n).tag(2, r.O0.LengthDelimited).string(e.metadata[n]).join();
    "" !== e.platformName && t.tag(2, r.O0.LengthDelimited).string(e.platformName), "" !== e.platformUsername && t.tag(3, r.O0.LengthDelimited).string(e.platformUsername), "0" !== e.version && t.tag(4, r.O0.Bit64).fixed64(e.version);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.f$.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection", [{
      no: 1,
      name: "metadata",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }, {
      no: 2,
      name: "platform_name",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "platform_username",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "version",
      kind: "scalar",
      T: 6
    }])
  }
}
new c;
class u extends Chunk324281.G {
  create(e) {
    let t = {
      disclosureType: 0
    };
    return globalThis.Object.defineProperty(t, a.$, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.x)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let a = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          a.disclosureType = e.int32();
          break;
        case 2:
          a.ackedAt = s.D.internalBinaryRead(e, e.uint32(), n, a.ackedAt);
          break;
        default:
          let o = n.readUnknownField;
          if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let l = e.skip(i);
          false !== o && (true === o ? r.f$.onRead : o)(this.typeName, a, t, i, l)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.disclosureType && t.tag(1, r.O0.Varint).int32(e.disclosureType), e.ackedAt && s.D.internalBinaryWrite(e.ackedAt, t.tag(2, r.O0.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.f$.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosure", [{
      no: 1,
      name: "disclosure_type",
      kind: "enum",
      T: () => ["discord_protos.discord_kkv_store_value_models.v1.ApplicationDisclosureType", l]
    }, {
      no: 2,
      name: "acked_at",
      kind: "message",
      T: () => s.D
    }])
  }
}
let d = new u;
class f extends Chunk324281.G {
  create(e) {
    let t = {
      ackedDisclosures: []
    };
    return globalThis.Object.defineProperty(t, a.$, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.x)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let a = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) a.ackedDisclosures.push(d.internalBinaryRead(e, e.uint32(), n));
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let s = e.skip(i);
        false !== o && (true === o ? r.f$.onRead : o)(this.typeName, a, t, i, s)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    for (let i = 0; i < e.ackedDisclosures.length; i++) d.internalBinaryWrite(e.ackedDisclosures[i], t.tag(1, r.O0.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.f$.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures", [{
      no: 1,
      name: "acked_disclosures",
      kind: "message",
      repeat: 1,
      T: () => d
    }])
  }
}
new f