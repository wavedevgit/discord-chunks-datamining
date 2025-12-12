/** Chunk was on web.js **/
/** chunk id: 381499, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A8: () => u,
  D5: () => y,
  Gm: () => v,
  T4: () => h,
  r1: () => f,
  wA: () => _,
  yC: () => E
}), require("./980754.js"), require("./388685.js"), require("./415506.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk36056 = require("./36056.js"),
  Chunk230367 = require("./230367.js"),
  Chunk320215 = require("./320215.js"),
  Chunk240773 = require("./240773.js"),
  Chunk495852 = require("./495852.js");
class l extends Chunk495852.C {
  internalJsonWrite(e, t) {
    return this.refJsonWriter.scalar(2, e.value, "value", false, true)
  }
  internalJsonRead(e, t, n) {
    return n || (n = this.create()), n.value = this.refJsonReader.scalar(e, 1, true, "value"), n
  }
  create(e) {
    let t = {
      value: 0
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, a.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, r) {
    let a = null != r ? r : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, r] = e.tag();
      if (1 === t) a.value = e.double();
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
        let s = e.skip(r);
        false !== o && (true === o ? i.z.onRead : o)(this.typeName, a, t, r, s)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.value && t.tag(1, i.TD.Bit64).double(e.value);
    let r = n.writeUnknownFields;
    returnfalse !== r && (true == r ? i.z.onWrite : r)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.DoubleValue", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 1
    }])
  }
}
new l;
class c extends Chunk495852.C {
  internalJsonWrite(e, t) {
    return this.refJsonWriter.scalar(1, e.value, "value", false, true)
  }
  internalJsonRead(e, t, n) {
    return n || (n = this.create()), n.value = this.refJsonReader.scalar(e, 1, true, "value"), n
  }
  create(e) {
    let t = {
      value: 0
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, a.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, r) {
    let a = null != r ? r : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, r] = e.tag();
      if (1 === t) a.value = e.float();
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
        let s = e.skip(r);
        false !== o && (true === o ? i.z.onRead : o)(this.typeName, a, t, r, s)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.value && t.tag(1, i.TD.Bit32).float(e.value);
    let r = n.writeUnknownFields;
    returnfalse !== r && (true == r ? i.z.onWrite : r)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.FloatValue", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 2
    }])
  }
}
let u = new c;
class d extends Chunk495852.C {
  internalJsonWrite(e, t) {
    return this.refJsonWriter.scalar(r.wx.INT64, e.value, "value", false, true)
  }
  internalJsonRead(e, t, n) {
    return n || (n = this.create()), n.value = this.refJsonReader.scalar(e, r.wx.INT64, r.pz.STRING, "value"), n
  }
  create(e) {
    let t = {
      value: "0"
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, a.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, r) {
    let a = null != r ? r : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, r] = e.tag();
      if (1 === t) a.value = e.int64().toString();
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
        let s = e.skip(r);
        false !== o && (true === o ? i.z.onRead : o)(this.typeName, a, t, r, s)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "0" !== e.value && t.tag(1, i.TD.Varint).int64(e.value);
    let r = n.writeUnknownFields;
    returnfalse !== r && (true == r ? i.z.onWrite : r)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.Int64Value", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 3
    }])
  }
}
let f = new d;
class p extends Chunk495852.C {
  internalJsonWrite(e, t) {
    return this.refJsonWriter.scalar(r.wx.UINT64, e.value, "value", false, true)
  }
  internalJsonRead(e, t, n) {
    return n || (n = this.create()), n.value = this.refJsonReader.scalar(e, r.wx.UINT64, r.pz.STRING, "value"), n
  }
  create(e) {
    let t = {
      value: "0"
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, a.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, r) {
    let a = null != r ? r : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, r] = e.tag();
      if (1 === t) a.value = e.uint64().toString();
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
        let s = e.skip(r);
        false !== o && (true === o ? i.z.onRead : o)(this.typeName, a, t, r, s)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "0" !== e.value && t.tag(1, i.TD.Varint).uint64(e.value);
    let r = n.writeUnknownFields;
    returnfalse !== r && (true == r ? i.z.onWrite : r)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.UInt64Value", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 4
    }])
  }
}
let _ = new p;
class m extends Chunk495852.C {
  internalJsonWrite(e, t) {
    return this.refJsonWriter.scalar(5, e.value, "value", false, true)
  }
  internalJsonRead(e, t, n) {
    return n || (n = this.create()), n.value = this.refJsonReader.scalar(e, 5, true, "value"), n
  }
  create(e) {
    let t = {
      value: 0
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, a.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, r) {
    let a = null != r ? r : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, r] = e.tag();
      if (1 === t) a.value = e.int32();
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
        let s = e.skip(r);
        false !== o && (true === o ? i.z.onRead : o)(this.typeName, a, t, r, s)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.value && t.tag(1, i.TD.Varint).int32(e.value);
    let r = n.writeUnknownFields;
    returnfalse !== r && (true == r ? i.z.onWrite : r)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.Int32Value", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 5
    }])
  }
}
let h = new m;
class g extends Chunk495852.C {
  internalJsonWrite(e, t) {
    return this.refJsonWriter.scalar(13, e.value, "value", false, true)
  }
  internalJsonRead(e, t, n) {
    return n || (n = this.create()), n.value = this.refJsonReader.scalar(e, 13, true, "value"), n
  }
  create(e) {
    let t = {
      value: 0
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, a.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, r) {
    let a = null != r ? r : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, r] = e.tag();
      if (1 === t) a.value = e.uint32();
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
        let s = e.skip(r);
        false !== o && (true === o ? i.z.onRead : o)(this.typeName, a, t, r, s)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.value && t.tag(1, i.TD.Varint).uint32(e.value);
    let r = n.writeUnknownFields;
    returnfalse !== r && (true == r ? i.z.onWrite : r)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.UInt32Value", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 13
    }])
  }
}
let E = new g;
class b extends Chunk495852.C {
  internalJsonWrite(e, t) {
    return e.value
  }
  internalJsonRead(e, t, n) {
    return n || (n = this.create()), n.value = this.refJsonReader.scalar(e, 8, true, "value"), n
  }
  create(e) {
    let t = {
      value: false
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, a.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, r) {
    let a = null != r ? r : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, r] = e.tag();
      if (1 === t) a.value = e.bool();
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
        let s = e.skip(r);
        false !== o && (true === o ? i.z.onRead : o)(this.typeName, a, t, r, s)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    false !== e.value && t.tag(1, i.TD.Varint).bool(e.value);
    let r = n.writeUnknownFields;
    returnfalse !== r && (true == r ? i.z.onWrite : r)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.BoolValue", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 8
    }])
  }
}
let y = new b;
class O extends Chunk495852.C {
  internalJsonWrite(e, t) {
    return e.value
  }
  internalJsonRead(e, t, n) {
    return n || (n = this.create()), n.value = this.refJsonReader.scalar(e, 9, true, "value"), n
  }
  create(e) {
    let t = {
      value: ""
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, a.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, r) {
    let a = null != r ? r : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, r] = e.tag();
      if (1 === t) a.value = e.string();
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
        let s = e.skip(r);
        false !== o && (true === o ? i.z.onRead : o)(this.typeName, a, t, r, s)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.value && t.tag(1, i.TD.LengthDelimited).string(e.value);
    let r = n.writeUnknownFields;
    returnfalse !== r && (true == r ? i.z.onWrite : r)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.StringValue", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 9
    }])
  }
}
let v = new O;
class S extends Chunk495852.C {
  internalJsonWrite(e, t) {
    return this.refJsonWriter.scalar(12, e.value, "value", false, true)
  }
  internalJsonRead(e, t, n) {
    return n || (n = this.create()), n.value = this.refJsonReader.scalar(e, 12, true, "value"), n
  }
  create(e) {
    let t = {
      value: new Uint8Array(0)
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, a.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, r) {
    let a = null != r ? r : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, r] = e.tag();
      if (1 === t) a.value = e.bytes();
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
        let s = e.skip(r);
        false !== o && (true === o ? i.z.onRead : o)(this.typeName, a, t, r, s)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    e.value.length && t.tag(1, i.TD.LengthDelimited).bytes(e.value);
    let r = n.writeUnknownFields;
    returnfalse !== r && (true == r ? i.z.onWrite : r)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.BytesValue", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 12
    }])
  }
}
new S