/** Chunk was on web.js **/
/** chunk id: 406935, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZQ: () => E,
  _t: () => y,
  as: () => m,
  hU: () => A,
  j1: () => f,
  ol: () => _,
  uN: () => u
}), require("./734808.js"), require("./896048.js"), require("./65821.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var Chunk124651 = require("./124651.js"),
  Chunk852015 = require("./852015.js"),
  Chunk144367 = require("./144367.js"),
  Chunk428420 = require("./428420.js"),
  Chunk324281 = require("./324281.js");
class l extends Chunk324281.G {
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
    return globalThis.Object.defineProperty(t, s.$, {
      enumerable: false,
      value: this
    }), true !== e && (0, a.x)(this, t, e), t
  }
  internalBinaryRead(e, t, n, r) {
    let a = null != r ? r : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, r] = e.tag();
      if (1 === t) a.value = e.double();
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
        let o = e.skip(r);
        false !== s && (true === s ? i.f$.onRead : s)(this.typeName, a, t, r, o)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.value && t.tag(1, i.O0.Bit64).double(e.value);
    let r = n.writeUnknownFields;
    returnfalse !== r && (true == r ? i.f$.onWrite : r)(this.typeName, e, t), t
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
class c extends Chunk324281.G {
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
    return globalThis.Object.defineProperty(t, s.$, {
      enumerable: false,
      value: this
    }), true !== e && (0, a.x)(this, t, e), t
  }
  internalBinaryRead(e, t, n, r) {
    let a = null != r ? r : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, r] = e.tag();
      if (1 === t) a.value = e.float();
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
        let o = e.skip(r);
        false !== s && (true === s ? i.f$.onRead : s)(this.typeName, a, t, r, o)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.value && t.tag(1, i.O0.Bit32).float(e.value);
    let r = n.writeUnknownFields;
    returnfalse !== r && (true == r ? i.f$.onWrite : r)(this.typeName, e, t), t
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
class d extends Chunk324281.G {
  internalJsonWrite(e, t) {
    return this.refJsonWriter.scalar(r.LN.INT64, e.value, "value", false, true)
  }
  internalJsonRead(e, t, n) {
    return n || (n = this.create()), n.value = this.refJsonReader.scalar(e, r.LN.INT64, r.rO.STRING, "value"), n
  }
  create(e) {
    let t = {
      value: "0"
    };
    return globalThis.Object.defineProperty(t, s.$, {
      enumerable: false,
      value: this
    }), true !== e && (0, a.x)(this, t, e), t
  }
  internalBinaryRead(e, t, n, r) {
    let a = null != r ? r : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, r] = e.tag();
      if (1 === t) a.value = e.int64().toString();
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
        let o = e.skip(r);
        false !== s && (true === s ? i.f$.onRead : s)(this.typeName, a, t, r, o)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "0" !== e.value && t.tag(1, i.O0.Varint).int64(e.value);
    let r = n.writeUnknownFields;
    returnfalse !== r && (true == r ? i.f$.onWrite : r)(this.typeName, e, t), t
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
class p extends Chunk324281.G {
  internalJsonWrite(e, t) {
    return this.refJsonWriter.scalar(r.LN.UINT64, e.value, "value", false, true)
  }
  internalJsonRead(e, t, n) {
    return n || (n = this.create()), n.value = this.refJsonReader.scalar(e, r.LN.UINT64, r.rO.STRING, "value"), n
  }
  create(e) {
    let t = {
      value: "0"
    };
    return globalThis.Object.defineProperty(t, s.$, {
      enumerable: false,
      value: this
    }), true !== e && (0, a.x)(this, t, e), t
  }
  internalBinaryRead(e, t, n, r) {
    let a = null != r ? r : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, r] = e.tag();
      if (1 === t) a.value = e.uint64().toString();
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
        let o = e.skip(r);
        false !== s && (true === s ? i.f$.onRead : s)(this.typeName, a, t, r, o)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "0" !== e.value && t.tag(1, i.O0.Varint).uint64(e.value);
    let r = n.writeUnknownFields;
    returnfalse !== r && (true == r ? i.f$.onWrite : r)(this.typeName, e, t), t
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
class h extends Chunk324281.G {
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
    return globalThis.Object.defineProperty(t, s.$, {
      enumerable: false,
      value: this
    }), true !== e && (0, a.x)(this, t, e), t
  }
  internalBinaryRead(e, t, n, r) {
    let a = null != r ? r : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, r] = e.tag();
      if (1 === t) a.value = e.int32();
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
        let o = e.skip(r);
        false !== s && (true === s ? i.f$.onRead : s)(this.typeName, a, t, r, o)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.value && t.tag(1, i.O0.Varint).int32(e.value);
    let r = n.writeUnknownFields;
    returnfalse !== r && (true == r ? i.f$.onWrite : r)(this.typeName, e, t), t
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
let m = new h;
class g extends Chunk324281.G {
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
    return globalThis.Object.defineProperty(t, s.$, {
      enumerable: false,
      value: this
    }), true !== e && (0, a.x)(this, t, e), t
  }
  internalBinaryRead(e, t, n, r) {
    let a = null != r ? r : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, r] = e.tag();
      if (1 === t) a.value = e.uint32();
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
        let o = e.skip(r);
        false !== s && (true === s ? i.f$.onRead : s)(this.typeName, a, t, r, o)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.value && t.tag(1, i.O0.Varint).uint32(e.value);
    let r = n.writeUnknownFields;
    returnfalse !== r && (true == r ? i.f$.onWrite : r)(this.typeName, e, t), t
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
class b extends Chunk324281.G {
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
    return globalThis.Object.defineProperty(t, s.$, {
      enumerable: false,
      value: this
    }), true !== e && (0, a.x)(this, t, e), t
  }
  internalBinaryRead(e, t, n, r) {
    let a = null != r ? r : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, r] = e.tag();
      if (1 === t) a.value = e.bool();
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
        let o = e.skip(r);
        false !== s && (true === s ? i.f$.onRead : s)(this.typeName, a, t, r, o)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    false !== e.value && t.tag(1, i.O0.Varint).bool(e.value);
    let r = n.writeUnknownFields;
    returnfalse !== r && (true == r ? i.f$.onWrite : r)(this.typeName, e, t), t
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
class O extends Chunk324281.G {
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
    return globalThis.Object.defineProperty(t, s.$, {
      enumerable: false,
      value: this
    }), true !== e && (0, a.x)(this, t, e), t
  }
  internalBinaryRead(e, t, n, r) {
    let a = null != r ? r : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, r] = e.tag();
      if (1 === t) a.value = e.string();
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
        let o = e.skip(r);
        false !== s && (true === s ? i.f$.onRead : s)(this.typeName, a, t, r, o)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.value && t.tag(1, i.O0.LengthDelimited).string(e.value);
    let r = n.writeUnknownFields;
    returnfalse !== r && (true == r ? i.f$.onWrite : r)(this.typeName, e, t), t
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
let A = new O;
class v extends Chunk324281.G {
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
    return globalThis.Object.defineProperty(t, s.$, {
      enumerable: false,
      value: this
    }), true !== e && (0, a.x)(this, t, e), t
  }
  internalBinaryRead(e, t, n, r) {
    let a = null != r ? r : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, r] = e.tag();
      if (1 === t) a.value = e.bytes();
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
        let o = e.skip(r);
        false !== s && (true === s ? i.f$.onRead : s)(this.typeName, a, t, r, o)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    e.value.length && t.tag(1, i.O0.LengthDelimited).bytes(e.value);
    let r = n.writeUnknownFields;
    returnfalse !== r && (true == r ? i.f$.onWrite : r)(this.typeName, e, t), t
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
new v