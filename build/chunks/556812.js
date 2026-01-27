/** Chunk was on web.js **/
/** chunk id: 556812, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => s
});
var Chunk852015 = require("./852015.js"),
  Chunk124651 = require("./124651.js"),
  Chunk123789 = require("./123789.js"),
  Chunk82180 = require("./82180.js");
class s {
  constructor(e) {
    this.info = e
  }
  prepare() {
    if (!this.fields) {
      let e = this.info.fields ? this.info.fields.concat() : [];
      this.fields = e.sort((e, t) => e.no - t.no)
    }
  }
  write(e, t, n) {
    for (let r of (this.prepare(), this.fields)) {
      let o, s, l = r.repeat,
        c = r.localName;
      if (r.oneof) {
        let t = e[r.oneof];
        if (t.oneofKind !== c) continue;
        o = t[c], s = true
      } else o = e[c], s = false;
      switch (r.kind) {
        case "scalar":
        case "enum":
          let u = "enum" == r.kind ? i.LN.INT32 : r.T;
          if (l)
            if ((0, a.vA)(Array.isArray(o)), l == i.sA.PACKED) this.packed(t, u, r.no, o);
            else
              for (let e of o) this.scalar(t, u, r.no, e, true);
          else true === o ? (0, a.vA)(r.opt) : this.scalar(t, u, r.no, o, s || r.opt);
          break;
        case "message":
          if (l)
            for (let e of ((0, a.vA)(Array.isArray(o)), o)) this.message(t, n, r.T(), r.no, e);
          else this.message(t, n, r.T(), r.no, o);
          break;
        case "map":
          for (let [e, i] of((0, a.vA)("object" == typeof o && null !== o), Object.entries(o))) this.mapEntry(t, n, r, e, i)
      }
    }
    let o = n.writeUnknownFields;
    false !== o && (true === o ? r.f$.onWrite : o)(this.info.typeName, e, t)
  }
  mapEntry(e, t, n, o, s) {
    e.tag(n.no, r.O0.LengthDelimited), e.fork();
    let l = o;
    switch (n.K) {
      case i.LN.INT32:
      case i.LN.FIXED32:
      case i.LN.UINT32:
      case i.LN.SFIXED32:
      case i.LN.SINT32:
        l = Number.parseInt(o);
        break;
      case i.LN.BOOL:
        (0, a.vA)("true" == o || "false" == o), l = "true" == o
    }
    switch (this.scalar(e, n.K, 1, l, true), n.V.kind) {
      case "scalar":
        this.scalar(e, n.V.T, 2, s, true);
        break;
      case "enum":
        this.scalar(e, i.LN.INT32, 2, s, true);
        break;
      case "message":
        this.message(e, t, n.V.T(), 2, s)
    }
    e.join()
  }
  message(e, t, n, i, a) {
    true !== a && (n.internalBinaryWrite(a, e.tag(i, r.O0.LengthDelimited).fork(), t), e.join())
  }
  scalar(e, t, n, r, i) {
    let [a, o, s] = this.scalarInfo(t, r);
    (!s || i) && (e.tag(n, a), e[o](r))
  }
  packed(e, t, n, o) {
    if (!o.length) return;
    (0, a.vA)(t !== i.LN.BYTES && t !== i.LN.STRING), e.tag(n, r.O0.LengthDelimited), e.fork();
    let [, s] = this.scalarInfo(t);
    for (let t = 0; t < o.length; t++) e[s](o[t]);
    e.join()
  }
  scalarInfo(e, t) {
    let n, a = r.O0.Varint,
      s = true === t,
      l = 0 === t;
    switch (e) {
      case i.LN.INT32:
        n = "int32";
        break;
      case i.LN.STRING:
        l = s || !t.length, a = r.O0.LengthDelimited, n = "string";
        break;
      case i.LN.BOOL:
        l = false === t, n = "bool";
        break;
      case i.LN.UINT32:
        n = "uint32";
        break;
      case i.LN.DOUBLE:
        a = r.O0.Bit64, n = "double";
        break;
      case i.LN.FLOAT:
        a = r.O0.Bit32, n = "float";
        break;
      case i.LN.INT64:
        l = s || o.h.from(t).isZero(), n = "int64";
        break;
      case i.LN.UINT64:
        l = s || o.e.from(t).isZero(), n = "uint64";
        break;
      case i.LN.FIXED64:
        l = s || o.e.from(t).isZero(), a = r.O0.Bit64, n = "fixed64";
        break;
      case i.LN.BYTES:
        l = s || !t.byteLength, a = r.O0.LengthDelimited, n = "bytes";
        break;
      case i.LN.FIXED32:
        a = r.O0.Bit32, n = "fixed32";
        break;
      case i.LN.SFIXED32:
        a = r.O0.Bit32, n = "sfixed32";
        break;
      case i.LN.SFIXED64:
        l = s || o.h.from(t).isZero(), a = r.O0.Bit64, n = "sfixed64";
        break;
      case i.LN.SINT32:
        n = "sint32";
        break;
      case i.LN.SINT64:
        l = s || o.h.from(t).isZero(), n = "sint64"
    }
    return [a, n, s || l]
  }
}