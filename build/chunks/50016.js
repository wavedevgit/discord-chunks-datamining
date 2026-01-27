/** Chunk was on web.js **/
/** chunk id: 50016, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => s
});
var Chunk852015 = require("./852015.js"),
  Chunk124651 = require("./124651.js"),
  Chunk716115 = require("./716115.js"),
  Chunk960731 = require("./960731.js");
class s {
  constructor(e) {
    this.info = e
  }
  prepare() {
    var e;
    if (!this.fieldNoToField) {
      let t = null != (e = this.info.fields) ? e : [];
      this.fieldNoToField = new Map(t.map(e => [e.no, e]))
    }
  }
  read(e, t, n, a) {
    this.prepare();
    let o = true === a ? e.len : e.pos + a;
    for (; e.pos < o;) {
      let [a, o] = e.tag(), s = this.fieldNoToField.get(a);
      if (!s) {
        let i = n.readUnknownField;
        if ("throw" == i) throw Error(`Unknown field ${a} (wire type ${o}) for ${this.info.typeName}`);
        let s = e.skip(o);
        false !== i && (true === i ? r.f$.onRead : i)(this.info.typeName, t, a, o, s);
        continue
      }
      let l = t,
        c = s.repeat,
        u = s.localName;
      switch (s.oneof && (l = l[s.oneof]).oneofKind !== u && (l = t[s.oneof] = {
          oneofKind: u
        }), s.kind) {
        case "scalar":
        case "enum":
          let d = "enum" == s.kind ? i.LN.INT32 : s.T,
            f = "scalar" == s.kind ? s.L : true;
          if (c) {
            let t = l[u];
            if (o == r.O0.LengthDelimited && d != i.LN.STRING && d != i.LN.BYTES) {
              let n = e.uint32() + e.pos;
              for (; e.pos < n;) t.push(this.scalar(e, d, f))
            } else t.push(this.scalar(e, d, f))
          } else l[u] = this.scalar(e, d, f);
          break;
        case "message":
          if (c) {
            let t = l[u],
              r = s.T().internalBinaryRead(e, e.uint32(), n);
            t.push(r)
          } else l[u] = s.T().internalBinaryRead(e, e.uint32(), n, l[u]);
          break;
        case "map":
          let [p, _] = this.mapEntry(s, e, n);
          l[u][p] = _
      }
    }
  }
  mapEntry(e, t, n) {
    let r, a, s = t.uint32(),
      l = t.pos + s;
    for (; t.pos < l;) {
      let [o, s] = t.tag();
      switch (o) {
        case 1:
          r = e.K == i.LN.BOOL ? t.bool().toString() : this.scalar(t, e.K, i.rO.STRING);
          break;
        case 2:
          switch (e.V.kind) {
            case "scalar":
              a = this.scalar(t, e.V.T, e.V.L);
              break;
            case "enum":
              a = t.int32();
              break;
            case "message":
              a = e.V.T().internalBinaryRead(t, t.uint32(), n)
          }
          break;
        default:
          throw Error(`Unknown field ${o} (wire type ${s}) in map entry for ${this.info.typeName}#${e.name}`)
      }
    }
    if (true === r) {
      let t = (0, o.V)(e.K);
      r = e.K == i.LN.BOOL ? t.toString() : t
    }
    if (true === a) switch (e.V.kind) {
      case "scalar":
        a = (0, o.V)(e.V.T, e.V.L);
        break;
      case "enum":
        a = 0;
        break;
      case "message":
        a = e.V.T().create()
    }
    return [r, a]
  }
  scalar(e, t, n) {
    switch (t) {
      case i.LN.INT32:
        return e.int32();
      case i.LN.STRING:
        return e.string();
      case i.LN.BOOL:
        return e.bool();
      case i.LN.DOUBLE:
        return e.double();
      case i.LN.FLOAT:
        return e.float();
      case i.LN.INT64:
        return (0, a.l)(e.int64(), n);
      case i.LN.UINT64:
        return (0, a.l)(e.uint64(), n);
      case i.LN.FIXED64:
        return (0, a.l)(e.fixed64(), n);
      case i.LN.FIXED32:
        return e.fixed32();
      case i.LN.BYTES:
        return e.bytes();
      case i.LN.UINT32:
        return e.uint32();
      case i.LN.SFIXED32:
        return e.sfixed32();
      case i.LN.SFIXED64:
        return (0, a.l)(e.sfixed64(), n);
      case i.LN.SINT32:
        return e.sint32();
      case i.LN.SINT64:
        return (0, a.l)(e.sint64(), n)
    }
  }
}