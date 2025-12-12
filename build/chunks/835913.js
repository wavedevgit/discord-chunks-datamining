/** Chunk was on web.js **/
/** chunk id: 835913, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => u
}), require("./415506.js"), require("./704826.js"), require("./35282.js"), require("./980754.js"), require("./388685.js");
var Chunk230367 = require("./230367.js"),
  Chunk320215 = require("./320215.js"),
  Chunk240773 = require("./240773.js"),
  Chunk660284 = require("./660284.js"),
  Chunk69122 = require("./69122.js"),
  Chunk495852 = require("./495852.js");
class c extends Chunk495852.C {
  now() {
    let e = this.create(),
      t = Date.now();
    return module.seconds = Chunk69122.M.from(Math.floor(exports / 1e3)).toString(), module.nanos = exports % 1e3 * 1e6, module
  }
  toDate(e) {
    return new Date(1e3 * s.M.from(e.seconds).toNumber() + Math.ceil(e.nanos / 1e6))
  }
  fromDate(e) {
    let t = this.create(),
      n = e.getTime();
    return t.seconds = s.M.from(Math.floor(n / 1e3)).toString(), t.nanos = n % 1e3 * 1e6, t
  }
  internalJsonWrite(e, t) {
    let n = 1e3 * s.M.from(e.seconds).toNumber();
    if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z")) throw Error("Unable to encode Timestamp to JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.");
    if (e.nanos < 0) throw Error("Unable to encode invalid Timestamp to JSON. Nanos must not be negative.");
    let r = "Z";
    if (e.nanos > 0) {
      let t = (e.nanos + 1e9).toString().substring(1);
      r = "000000" === t.substring(3) ? "." + t.substring(0, 3) + "Z" : "000" === t.substring(6) ? "." + t.substring(0, 6) + "Z" : "." + t + "Z"
    }
    return new Date(n).toISOString().replace(".000Z", r)
  }
  internalJsonRead(e, t, n) {
    if ("string" != typeof e) throw Error("Unable to parse Timestamp from JSON " + (0, o.Z)(e) + ".");
    let r = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if (!r) throw Error("Unable to parse Timestamp from JSON. Invalid format.");
    let i = Date.parse(r[1] + "-" + r[2] + "-" + r[3] + "T" + r[4] + ":" + r[5] + ":" + r[6] + (r[8] ? r[8] : "Z"));
    if (Number.isNaN(i)) throw Error("Unable to parse Timestamp from JSON. Invalid value.");
    if (i < Date.parse("0001-01-01T00:00:00Z") || i > Date.parse("9999-12-31T23:59:59Z")) throw new globalThis.Error("Unable to parse Timestamp from JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.");
    return n || (n = this.create()), n.seconds = s.M.from(i / 1e3).toString(), n.nanos = 0, r[7] && (n.nanos = parseInt("1" + r[7] + "0".repeat(9 - r[7].length)) - 1e9), n
  }
  create(e) {
    let t = {
      seconds: "0",
      nanos: 0
    };
    return globalThis.Object.defineProperty(t, a.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let a = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          a.seconds = e.int64().toString();
          break;
        case 2:
          a.nanos = e.int32();
          break;
        default:
          let o = n.readUnknownField;
          if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== o && (true === o ? r.z.onRead : o)(this.typeName, a, t, i, s)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "0" !== e.seconds && t.tag(1, r.TD.Varint).int64(e.seconds), 0 !== e.nanos && t.tag(2, r.TD.Varint).int32(e.nanos);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.Timestamp", [{
      no: 1,
      name: "seconds",
      kind: "scalar",
      T: 3
    }, {
      no: 2,
      name: "nanos",
      kind: "scalar",
      T: 5
    }])
  }
}
let u = new c