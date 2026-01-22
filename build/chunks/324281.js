/** Chunk was on web.js **/
/** chunk id: 324281, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => m
});
var Chunk124651 = require("./124651.js"),
  Chunk944010 = require("./944010.js"),
  Chunk428673 = require("./428673.js"),
  Chunk779693 = require("./779693.js"),
  Chunk50016 = require("./50016.js"),
  Chunk556812 = require("./556812.js"),
  Chunk65939 = require("./65939.js"),
  Chunk144367 = require("./144367.js"),
  Chunk467276 = require("./467276.js"),
  Chunk934672 = require("./934672.js"),
  Chunk384770 = require("./384770.js"),
  Chunk119844 = require("./119844.js"),
  Chunk638504 = require("./638504.js");
class m {
  constructor(e, t, n) {
    this.defaultCheckDepth = 16, this.typeName = e, this.fields = t.map(r.mS), this.options = null != n ? n : {}, this.refTypeCheck = new i.u(this), this.refJsonReader = new a.L(this), this.refJsonWriter = new s.X(this), this.refBinReader = new o.W(this), this.refBinWriter = new l.c(this)
  }
  create(e) {
    let t = (0, c.C)(this);
    return true !== e && (0, u.x)(this, t, e), t
  }
  clone(e) {
    let t = this.create();
    return (0, u.x)(this, t, e), t
  }
  equals(e, t) {
    return (0, p.F)(this, e, t)
  }
  is(e, t = this.defaultCheckDepth) {
    return this.refTypeCheck.is(e, t, false)
  }
  isAssignable(e, t = this.defaultCheckDepth) {
    return this.refTypeCheck.is(e, t, true)
  }
  mergePartial(e, t) {
    (0, u.x)(this, e, t)
  }
  fromBinary(e, t) {
    let n = (0, h.e)(t);
    return this.internalBinaryRead(n.readerFactory(e), e.byteLength, n)
  }
  fromJson(e, t) {
    return this.internalJsonRead(e, (0, f.bm)(t))
  }
  fromJsonString(e, t) {
    let n = JSON.parse(e);
    return this.fromJson(n, t)
  }
  toJson(e, t) {
    return this.internalJsonWrite(e, (0, f.yG)(t))
  }
  toJsonString(e, t) {
    var n;
    return JSON.stringify(this.toJson(e, t), null, null != (n = null == t ? true : t.prettySpaces) ? n : 0)
  }
  toBinary(e, t) {
    let n = (0, _.d)(t);
    return this.internalBinaryWrite(e, n.writerFactory(), n).finish()
  }
  internalJsonRead(e, t, n) {
    if (null !== e && "object" == typeof e && !Array.isArray(e)) {
      let r = null != n ? n : this.create();
      return this.refJsonReader.read(e, r, t), r
    }
    throw Error(`Unable to parse message ${this.typeName} from JSON ${(0,d.V)(e)}.`)
  }
  internalJsonWrite(e, t) {
    return this.refJsonWriter.write(e, t)
  }
  internalBinaryWrite(e, t, n) {
    return this.refBinWriter.write(e, t, n), t
  }
  internalBinaryRead(e, t, n, r) {
    let i = null != r ? r : this.create();
    return this.refBinReader.read(e, i, n, t), i
  }
}