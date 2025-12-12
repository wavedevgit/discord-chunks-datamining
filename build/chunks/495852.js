/** Chunk was on web.js **/
/** chunk id: 495852, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => h
});
var Chunk36056 = require("./36056.js"),
  Chunk950697 = require("./950697.js"),
  Chunk614456 = require("./614456.js"),
  Chunk528046 = require("./528046.js"),
  Chunk727037 = require("./727037.js"),
  Chunk297584 = require("./297584.js"),
  Chunk349992 = require("./349992.js"),
  Chunk320215 = require("./320215.js"),
  Chunk660284 = require("./660284.js"),
  Chunk838390 = require("./838390.js"),
  Chunk284267 = require("./284267.js"),
  Chunk973408 = require("./973408.js"),
  Chunk647943 = require("./647943.js");
class h {
  constructor(e, t, n) {
    this.defaultCheckDepth = 16, this.typeName = e, this.fields = t.map(r.nb), this.options = null != n ? n : {}, this.refTypeCheck = new i.Z(this), this.refJsonReader = new o.C(this), this.refJsonWriter = new a.k(this), this.refBinReader = new s.I(this), this.refBinWriter = new l.R(this)
  }
  create(e) {
    let t = (0, c.t)(this);
    return true !== e && (0, u.l)(this, t, e), t
  }
  clone(e) {
    let t = this.create();
    return (0, u.l)(this, t, e), t
  }
  equals(e, t) {
    return (0, p.Y)(this, e, t)
  }
  is(e, t = this.defaultCheckDepth) {
    return this.refTypeCheck.is(e, t, false)
  }
  isAssignable(e, t = this.defaultCheckDepth) {
    return this.refTypeCheck.is(e, t, true)
  }
  mergePartial(e, t) {
    (0, u.l)(this, e, t)
  }
  fromBinary(e, t) {
    let n = (0, m.Z)(t);
    return this.internalBinaryRead(n.readerFactory(e), e.byteLength, n)
  }
  fromJson(e, t) {
    return this.internalJsonRead(e, (0, f.jl)(t))
  }
  fromJsonString(e, t) {
    let n = JSON.parse(e);
    return this.fromJson(n, t)
  }
  toJson(e, t) {
    return this.internalJsonWrite(e, (0, f.P2)(t))
  }
  toJsonString(e, t) {
    var n;
    return JSON.stringify(this.toJson(e, t), null, null != (n = null == t ? true : t.prettySpaces) ? n : 0)
  }
  toBinary(e, t) {
    let n = (0, _.X)(t);
    return this.internalBinaryWrite(e, n.writerFactory(), n).finish()
  }
  internalJsonRead(e, t, n) {
    if (null !== e && "object" == typeof e && !Array.isArray(e)) {
      let r = null != n ? n : this.create();
      return this.refJsonReader.read(e, r, t), r
    }
    throw Error(`Unable to parse message ${this.typeName} from JSON ${(0,d.Z)(e)}.`)
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