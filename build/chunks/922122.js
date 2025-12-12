/** Chunk was on web.js **/
/** chunk id: 922122, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => u
}), require("./980754.js"), require("./388685.js"), require("./415506.js");
var Chunk230367 = require("./230367.js"),
  Chunk320215 = require("./320215.js"),
  Chunk240773 = require("./240773.js"),
  Chunk495852 = require("./495852.js");
class s extends Chunk495852.C {
  create(e) {
    let t = {
      copy: ""
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      if (1 === t) o.copy = e.string();
      else {
        let a = n.readUnknownField;
        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let s = e.skip(i);
        false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.copy && t.tag(1, r.TD.LengthDelimited).string(e.copy);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.CTAButton", [{
      no: 1,
      name: "copy",
      kind: "scalar",
      T: 9
    }])
  }
}
let l = new s;
class c extends Chunk495852.C {
  create(e) {
    let t = {
      assetUrl: "",
      header: "",
      body: "",
      helpArticleId: ""
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.assetUrl = e.string();
          break;
        case 2:
          o.header = e.string();
          break;
        case 3:
          o.body = e.string();
          break;
        case 4:
          o.helpArticleId = e.string();
          break;
        case 5:
          o.button = l.internalBinaryRead(e, e.uint32(), n, o.button);
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.assetUrl && t.tag(1, r.TD.LengthDelimited).string(e.assetUrl), "" !== e.header && t.tag(2, r.TD.LengthDelimited).string(e.header), "" !== e.body && t.tag(3, r.TD.LengthDelimited).string(e.body), "" !== e.helpArticleId && t.tag(4, r.TD.LengthDelimited).string(e.helpArticleId), e.button && l.internalBinaryWrite(e.button, t.tag(5, r.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.MobileBottomSheet", [{
      no: 1,
      name: "asset_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "header",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "body",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "help_article_id",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "button",
      kind: "message",
      T: () => l
    }])
  }
}
let u = new c