/** Chunk was on web.js **/
/** chunk id: 990830, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => c
}), require("./980754.js"), require("./388685.js"), require("./415506.js");
var Chunk230367 = require("./230367.js"),
  Chunk320215 = require("./320215.js"),
  Chunk240773 = require("./240773.js"),
  Chunk495852 = require("./495852.js"),
  Chunk740111 = require("./740111.js");
class l extends Chunk495852.C {
  create(e) {
    let t = {
      assetUrl: "",
      header: "",
      body: "",
      helpArticleId: ""
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
          let o = n.readUnknownField;
          if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== o && (true === o ? r.z.onRead : o)(this.typeName, a, t, i, s)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.assetUrl && t.tag(1, r.TD.LengthDelimited).string(e.assetUrl), "" !== e.header && t.tag(2, r.TD.LengthDelimited).string(e.header), "" !== e.body && t.tag(3, r.TD.LengthDelimited).string(e.body), "" !== e.helpArticleId && t.tag(4, r.TD.LengthDelimited).string(e.helpArticleId), e.button && d.internalBinaryWrite(e.button, t.tag(5, r.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
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
class u extends Chunk495852.C {
  create(e) {
    let t = {
      copy: "",
      buttonAction: 0
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
          a.copy = e.string();
          break;
        case 2:
          a.buttonAction = e.int32();
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
    "" !== e.copy && t.tag(1, r.TD.LengthDelimited).string(e.copy), 0 !== e.buttonAction && t.tag(2, r.TD.Varint).int32(e.buttonAction);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
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
      T: () => ["discord_protos.premium_marketing.v1.ButtonAction", s.Wc, "BUTTON_ACTION_"]
    }])
  }
}
let d = new u