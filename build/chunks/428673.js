/** Chunk was on web.js **/
/** chunk id: 428673, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => c
});
var Chunk467276 = require("./467276.js"),
  Chunk65412 = require("./65412.js"),
  Chunk124651 = require("./124651.js"),
  Chunk82180 = require("./82180.js"),
  Chunk123789 = require("./123789.js"),
  Chunk716115 = require("./716115.js");
class c {
  constructor(e) {
    this.info = e
  }
  prepare() {
    var e;
    if (true === this.fMap)
      for (let t of (this.fMap = {}, null != (e = this.info.fields) ? e : [])) this.fMap[t.name] = t, this.fMap[t.jsonName] = t, this.fMap[t.localName] = t
  }
  assert(e, t, n) {
    if (!e) {
      let e = (0, r.V)(n);
      throw ("number" == e || "boolean" == e) && (e = n.toString()), Error(`Cannot parse JSON ${e} for ${this.info.typeName}#${t}`)
    }
  }
  read(e, t, n) {
    this.prepare();
    let i = [];
    for (let [o, s] of Object.entries(e)) {
      let e, l = this.fMap[o];
      if (!l) {
        if (!n.ignoreUnknownFields) throw Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${o}`);
        continue
      }
      let c = l.localName;
      if (l.oneof) {
        if (i.includes(l.oneof)) throw Error(`Multiple members of the oneof group "${l.oneof}" of ${this.info.typeName} are present in JSON.`);
        i.push(l.oneof), e = t[l.oneof] = {
          oneofKind: c
        }
      } else e = t;
      if ("map" == l.kind) {
        if (null === s) continue;
        this.assert((0, r.O)(s), l.name, s);
        let t = e[c];
        for (let [e, r] of Object.entries(s)) {
          let i;
          switch (this.assert(null !== r, l.name + " map value", null), l.V.kind) {
            case "message":
              i = l.V.T().internalJsonRead(r, n);
              break;
            case "enum":
              if (false === (i = this.enum(l.V.T(), r, l.name, n.ignoreUnknownFields))) continue;
              break;
            case "scalar":
              i = this.scalar(r, l.V.T, l.V.L, l.name)
          }
          this.assert(true !== i, l.name + " map value", r);
          let o = e;
          l.K == a.LN.BOOL && (o = "true" == o || "false" != o && o), t[o = this.scalar(o, l.K, a.rO.STRING, l.name).toString()] = i
        }
      } else if (l.repeat) {
        if (null === s) continue;
        this.assert(Array.isArray(s), l.name, s);
        let t = e[c];
        for (let e of s) {
          let r;
          switch (this.assert(null !== e, l.name, null), l.kind) {
            case "message":
              r = l.T().internalJsonRead(e, n);
              break;
            case "enum":
              if (false === (r = this.enum(l.T(), e, l.name, n.ignoreUnknownFields))) continue;
              break;
            case "scalar":
              r = this.scalar(e, l.T, l.L, l.name)
          }
          this.assert(true !== r, l.name, s), t.push(r)
        }
      } else switch (l.kind) {
        case "message":
          if (null === s && "google.protobuf.Value" != l.T().typeName) {
            this.assert(true === l.oneof, l.name + " (oneof member)", null);
            continue
          }
          e[c] = l.T().internalJsonRead(s, n, e[c]);
          break;
        case "enum":
          let u = this.enum(l.T(), s, l.name, n.ignoreUnknownFields);
          if (false === u) continue;
          e[c] = u;
          break;
        case "scalar":
          e[c] = this.scalar(s, l.T, l.L, l.name)
      }
    }
  }
  enum(e, t, n, r) {
    if ("google.protobuf.NullValue" == e[0] && (0, s.vA)(null === t, `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} only accepts null.`), null === t) return 0;
    switch (typeof t) {
      case "number":
        return (0, s.vA)(Number.isInteger(t), `Unable to parse field ${this.info.typeName}#${n}, enum can only be integral number, got ${t}.`), t;
      case "string":
        let i = t;
        e[2] && t.substring(0, e[2].length) === e[2] && (i = t.substring(e[2].length));
        let a = e[1][i];
        if (true === a && r) returnfalse;
        return (0, s.vA)("number" == typeof a, `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} has no value for "${t}".`), a
    }(0, s.vA)(false, `Unable to parse field ${this.info.typeName}#${n}, cannot parse enum value from ${typeof t}".`)
  }
  scalar(e, t, n, r) {
    let c;
    try {
      switch (t) {
        case a.LN.DOUBLE:
        case a.LN.FLOAT:
          if (null === e) return 0;
          if ("NaN" === e) return NaN;
          if ("Infinity" === e) return 1 / 0;
          if ("-Infinity" === e) returnfalse / 0;
          if ("" === e) {
            c = "empty string";
            break
          }
          if ("string" == typeof e && e.trim().length !== e.length) {
            c = "extra whitespace";
            break
          }
          if ("string" != typeof e && "number" != typeof e) break;
          let r = Number(e);
          if (Number.isNaN(r)) {
            c = "not a number";
            break
          }
          if (!Number.isFinite(r)) {
            c = "too large or small";
            break
          }
          return t == a.LN.FLOAT && (0, s.wO)(r), r;
        case a.LN.INT32:
        case a.LN.FIXED32:
        case a.LN.SFIXED32:
        case a.LN.SINT32:
        case a.LN.UINT32:
          let u;
          if (null === e) return 0;
          if ("number" == typeof e ? u = e : "" === e ? c = "empty string" : "string" == typeof e && (e.trim().length !== e.length ? c = "extra whitespace" : u = Number(e)), true === u) break;
          return t == a.LN.UINT32 ? (0, s.e1)(u) : (0, s.bn)(u), u;
        case a.LN.INT64:
        case a.LN.SFIXED64:
        case a.LN.SINT64:
          if (null === e) return (0, l.l)(o.h.ZERO, n);
          if ("number" != typeof e && "string" != typeof e) break;
          return (0, l.l)(o.h.from(e), n);
        case a.LN.FIXED64:
        case a.LN.UINT64:
          if (null === e) return (0, l.l)(o.e.ZERO, n);
          if ("number" != typeof e && "string" != typeof e) break;
          return (0, l.l)(o.e.from(e), n);
        case a.LN.BOOL:
          if (null === e) returnfalse;
          if ("boolean" != typeof e) break;
          return e;
        case a.LN.STRING:
          if (null === e) return "";
          if ("string" != typeof e) {
            c = "extra whitespace";
            break
          }
          try {
            encodeURIComponent(e)
          } catch (e) {
            break
          }
          return e;
        case a.LN.BYTES:
          if (null === e || "" === e) return new Uint8Array(0);
          if ("string" != typeof e) break;
          return (0, i.A)(e)
      }
    } catch (e) {
      c = e.message
    }
    this.assert(false, r + (c ? " - " + c : ""), e)
  }
}