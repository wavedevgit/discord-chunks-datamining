/** Chunk was on web.js **/
/** chunk id: 670474, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => c
}), require("./734808.js"), require("./896048.js"), require("./65821.js");
var Chunk852015 = require("./852015.js"),
  Chunk144367 = require("./144367.js"),
  Chunk428420 = require("./428420.js"),
  Chunk324281 = require("./324281.js"),
  Chunk232582 = require("./232582.js");
class l extends Chunk324281.G {
  create(e) {
    let t = {
      assetUrl: "",
      header: "",
      body: "",
      helpArticleId: ""
    };
    return globalThis.Object.defineProperty(t, a.$, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.x)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let a = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          a.assetUrl = e.string();
          break;
        case 2:
          a.header = e.string();
          break;
        case 3:
          a.body = e.string();
          break;
        case 4:
          a.helpArticleId = e.string();
          break;
        case 5:
          a.button = d.internalBinaryRead(e, e.uint32(), n, a.button);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          false !== s && (true === s ? r.f$.onRead : s)(this.typeName, a, t, i, o)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.assetUrl && t.tag(1, r.O0.LengthDelimited).string(e.assetUrl), "" !== e.header && t.tag(2, r.O0.LengthDelimited).string(e.header), "" !== e.body && t.tag(3, r.O0.LengthDelimited).string(e.body), "" !== e.helpArticleId && t.tag(4, r.O0.LengthDelimited).string(e.helpArticleId), e.button && d.internalBinaryWrite(e.button, t.tag(5, r.O0.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.f$.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.MarketingPageBanner", [{
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
      T: () => d
    }])
  }
}
let c = new l;
class u extends Chunk324281.G {
  create(e) {
    let t = {
      copy: "",
      buttonAction: 0
    };
    return globalThis.Object.defineProperty(t, a.$, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.x)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let a = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          a.copy = e.string();
          break;
        case 2:
          a.buttonAction = e.int32();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          false !== s && (true === s ? r.f$.onRead : s)(this.typeName, a, t, i, o)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.copy && t.tag(1, r.O0.LengthDelimited).string(e.copy), 0 !== e.buttonAction && t.tag(2, r.O0.Varint).int32(e.buttonAction);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.f$.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.MarketingPageBannerButton", [{
      no: 1,
      name: "copy",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "button_action",
      kind: "enum",
      T: () => ["discord_protos.premium_marketing.v1.ButtonAction", o.dz, "BUTTON_ACTION_"]
    }])
  }
}
let d = new u