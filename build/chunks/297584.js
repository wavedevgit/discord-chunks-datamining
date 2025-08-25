/** Chunk was on web.js **/
/** chunk id: 297584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => s
});
var Chunk230367 = require("./230367.js"),
  Chunk36056 = require("./36056.js"),
  Chunk17146 = require("./17146.js"),
  Chunk69122 = require("./69122.js");
class s {
  constructor(e) {
    this.info = e
  }
  prepare() {
    if (!this.fields) {
      let e = this.info.fields ? this.info.fields.concat() : [];
      this.fields = module.sort((e, t) => e.no - t.no)
    }
  }
  write(e, t, n) {
    for (let r of (this.prepare(), this.fields)) {
      let a, s, l = r.repeat,
        c = r.localName;
      if (r.oneof) {
        let t = e[r.oneof];
        if (t.oneofKind !== c) continue;
        a = t[c], s = true
      } else a = e[c], s = false;
      switch (r.kind) {
        case "scalar":
        case "enum":
          let u = "enum" == r.kind ? i.wx.INT32 : r.T;
          if (l)
            if ((0, o.hu)(Array.isArray(a)), l == i.P0.PACKED) this.packed(t, u, r.no, a);
            else
              for (let e of a) this.scalar(t, u, r.no, e, true);
          else true === a ? (0, o.hu)(r.opt) : this.scalar(t, u, r.no, a, s || r.opt);
          break;
        case "message":
          if (l)
            for (let e of ((0, o.hu)(Array.isArray(a)), a)) this.message(t, n, r.T(), r.no, e);
          else this.message(t, n, r.T(), r.no, a);
          break;
        case "map":
          for (let [e, i] of((0, o.hu)("object" == typeof a && null !== a), Object.entries(a))) this.mapEntry(t, n, r, e, i)
      }
    }
    let a = n.writeUnknownFields;
    false !== a && (true === a ? r.z.onWrite : a)(this.info.typeName, e, t)
  }
  mapEntry(e, t, n, a, s) {
    e.tag(n.no, r.TD.LengthDelimited), e.fork();
    let l = a;
    switch (n.K) {
      case i.wx.INT32:
      case i.wx.FIXED32:
      case i.wx.UINT32:
      case i.wx.SFIXED32:
      case i.wx.SINT32:
        l = Number.parseInt(a);
        break;
      case i.wx.BOOL:
        (0, o.hu)("true" == a || "false" == a), l = "true" == a
    }
    switch (this.scalar(e, n.K, 1, l, true), n.V.kind) {
      case "scalar":
        this.scalar(e, n.V.T, 2, s, true);
        break;
      case "enum":
        this.scalar(e, i.wx.INT32, 2, s, true);
        break;
      case "message":
        this.message(e, t, n.V.T(), 2, s)
    }
    e.join()
  }
  message(e, t, n, i, o) {
    true !== o && (n.internalBinaryWrite(o, e.tag(i, r.TD.LengthDelimited).fork(), t), e.join())
  }
  scalar(e, t, n, r, i) {
    let [o, a, s] = this.scalarInfo(t, r);
    (!s || i) && (e.tag(n, o), e[a](r))
  }
  packed(e, t, n, a) {
    if (!a.length) return;
    (0, o.hu)(t !== i.wx.BYTES && t !== i.wx.STRING), e.tag(n, r.TD.LengthDelimited), e.fork();
    let [, s] = this.scalarInfo(t);
    for (let t = 0; t < a.length; t++) e[s](a[t]);
    e.join()
  }
  scalarInfo(e, t) {
    let n, o = r.TD.Varint,
      s = true === t,
      l = 0 === t;
    switch (e) {
      case i.wx.INT32:
        n = "int32";
        break;
      case i.wx.STRING:
        l = s || !t.length, o = r.TD.LengthDelimited, n = "string";
        break;
      case i.wx.BOOL:
        l = false === t, n = "bool";
        break;
      case i.wx.UINT32:
        n = "uint32";
        break;
      case i.wx.DOUBLE:
        o = r.TD.Bit64, n = "double";
        break;
      case i.wx.FLOAT:
        o = r.TD.Bit32, n = "float";
        break;
      case i.wx.INT64:
        l = s || a.M.from(t).isZero(), n = "int64";
        break;
      case i.wx.UINT64:
        l = s || a.p.from(t).isZero(), n = "uint64";
        break;
      case i.wx.FIXED64:
        l = s || a.p.from(t).isZero(), o = r.TD.Bit64, n = "fixed64";
        break;
      case i.wx.BYTES:
        l = s || !t.byteLength, o = r.TD.LengthDelimited, n = "bytes";
        break;
      case i.wx.FIXED32:
        o = r.TD.Bit32, n = "fixed32";
        break;
      case i.wx.SFIXED32:
        o = r.TD.Bit32, n = "sfixed32";
        break;
      case i.wx.SFIXED64:
        l = s || a.M.from(t).isZero(), o = r.TD.Bit64, n = "sfixed64";
        break;
      case i.wx.SINT32:
        n = "sint32";
        break;
      case i.wx.SINT64:
        l = s || a.M.from(t).isZero(), n = "sint64"
    }
    return [o, n, s || l]
  }
}