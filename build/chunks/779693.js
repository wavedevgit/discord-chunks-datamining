/** Chunk was on web.js **/
/** chunk id: 779693, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => s
});
var Chunk65412 = require("./65412.js"),
  Chunk82180 = require("./82180.js"),
  Chunk124651 = require("./124651.js"),
  Chunk123789 = require("./123789.js");
class s {
  constructor(e) {
    var t;
    this.fields = null != (t = e.fields) ? t : []
  }
  write(e, t) {
    let n = {},
      r = e;
    for (let e of this.fields) {
      if (!e.oneof) {
        let i = this.field(e, r[e.localName], t);
        true !== i && (n[t.useProtoFieldName ? e.name : e.jsonName] = i);
        continue
      }
      let i = r[e.oneof];
      if (i.oneofKind !== e.localName) continue;
      let a = "scalar" == e.kind || "enum" == e.kind ? Object.assign(Object.assign({}, t), {
          emitDefaultValues: true
        }) : t,
        s = this.field(e, i[e.localName], a);
      (0, o.vA)(true !== s), n[t.useProtoFieldName ? e.name : e.jsonName] = s
    }
    return n
  }
  field(e, t, n) {
    let r;
    if ("map" == e.kind) {
      (0, o.vA)("object" == typeof t && null !== t);
      let i = {};
      switch (e.V.kind) {
        case "scalar":
          for (let [n, r] of Object.entries(t)) {
            let t = this.scalar(e.V.T, r, e.name, false, true);
            (0, o.vA)(true !== t), i[n.toString()] = t
          }
          break;
        case "message":
          let a = e.V.T();
          for (let [r, s] of Object.entries(t)) {
            let t = this.message(a, s, e.name, n);
            (0, o.vA)(true !== t), i[r.toString()] = t
          }
          break;
        case "enum":
          let s = e.V.T();
          for (let [r, a] of Object.entries(t)) {
            (0, o.vA)(true === a || "number" == typeof a);
            let t = this.enum(s, a, e.name, false, true, n.enumAsInteger);
            (0, o.vA)(true !== t), i[r.toString()] = t
          }
      }(n.emitDefaultValues || Object.keys(i).length > 0) && (r = i)
    } else if (e.repeat) {
      (0, o.vA)(Array.isArray(t));
      let i = [];
      switch (e.kind) {
        case "scalar":
          for (let n = 0; n < t.length; n++) {
            let r = this.scalar(e.T, t[n], e.name, e.opt, true);
            (0, o.vA)(true !== r), i.push(r)
          }
          break;
        case "enum":
          let a = e.T();
          for (let r = 0; r < t.length; r++) {
            (0, o.vA)(true === t[r] || "number" == typeof t[r]);
            let s = this.enum(a, t[r], e.name, e.opt, true, n.enumAsInteger);
            (0, o.vA)(true !== s), i.push(s)
          }
          break;
        case "message":
          let s = e.T();
          for (let r = 0; r < t.length; r++) {
            let a = this.message(s, t[r], e.name, n);
            (0, o.vA)(true !== a), i.push(a)
          }
      }(n.emitDefaultValues || i.length > 0 || n.emitDefaultValues) && (r = i)
    } else switch (e.kind) {
      case "scalar":
        r = this.scalar(e.T, t, e.name, e.opt, n.emitDefaultValues);
        break;
      case "enum":
        r = this.enum(e.T(), t, e.name, e.opt, n.emitDefaultValues, n.enumAsInteger);
        break;
      case "message":
        r = this.message(e.T(), t, e.name, n)
    }
    return r
  }
  enum(e, t, n, r, i, a) {
    return "google.protobuf.NullValue" == e[0] ? null : true === t ? void(0, o.vA)(r) : 0 !== t || i || r ? ((0, o.vA)("number" == typeof t), (0, o.vA)(Number.isInteger(t)), a || !e[1].hasOwnProperty(t)) ? t : e[2] ? e[2] + e[1][t] : e[1][t] : true
  }
  message(e, t, n, r) {
    return true === t ? r.emitDefaultValues ? null : true : e.internalJsonWrite(t, r)
  }
  scalar(e, t, n, s, l) {
    if (true === t) return void(0, o.vA)(s);
    let c = l || s;
    switch (e) {
      case a.LN.INT32:
      case a.LN.SFIXED32:
      case a.LN.SINT32:
        if (0 === t) return c ? 0 : true;
        return (0, o.bn)(t), t;
      case a.LN.FIXED32:
      case a.LN.UINT32:
        if (0 === t) return c ? 0 : true;
        return (0, o.e1)(t), t;
      case a.LN.FLOAT:
        (0, o.wO)(t);
      case a.LN.DOUBLE:
        if (0 === t) return c ? 0 : true;
        if ((0, o.vA)("number" == typeof t), Number.isNaN(t)) return "NaN";
        if (t === 1 / 0) return "Infinity";
        if (t === false / 0) return "-Infinity";
        return t;
      case a.LN.STRING:
        if ("" === t) return c ? "" : true;
        return (0, o.vA)("string" == typeof t), t;
      case a.LN.BOOL:
        if (false === t) return !c && true;
        return (0, o.vA)("boolean" == typeof t), t;
      case a.LN.UINT64:
      case a.LN.FIXED64:
        (0, o.vA)("number" == typeof t || "string" == typeof t || "bigint" == typeof t);
        let u = i.e.from(t);
        if (u.isZero() && !c) return;
        return u.toString();
      case a.LN.INT64:
      case a.LN.SFIXED64:
      case a.LN.SINT64:
        (0, o.vA)("number" == typeof t || "string" == typeof t || "bigint" == typeof t);
        let d = i.h.from(t);
        if (d.isZero() && !c) return;
        return d.toString();
      case a.LN.BYTES:
        if ((0, o.vA)(t instanceof Uint8Array), !t.byteLength) return c ? "" : true;
        return (0, r.C)(t)
    }
  }
}