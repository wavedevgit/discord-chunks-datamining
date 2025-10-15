/** Chunk was on 1272 **/
/** chunk id: 990830, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => s
}), require("./980754.js"), require("./388685.js"), require("./415506.js");
var Chunk230367 = require("./230367.js"),
  Chunk320215 = require("./320215.js"),
  Chunk240773 = require("./240773.js"),
  Chunk495852 = require("./495852.js");
class o extends Chunk495852.C {
  create(e) {
    let t = {
      assetUrl: "",
      header: "",
      body: "",
      helpArticleId: ""
    };
    return globalThis.Object.defineProperty(t, l.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let l = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          l.assetUrl = e.string();
          break;
        case 2:
          l.header = e.string();
          break;
        case 3:
          l.body = e.string();
          break;
        case 4:
          l.helpArticleId = e.string();
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, l, t, i, o)
      }
    }
    return l
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.assetUrl && t.tag(1, r.TD.LengthDelimited).string(e.assetUrl), "" !== e.header && t.tag(2, r.TD.LengthDelimited).string(e.header), "" !== e.body && t.tag(3, r.TD.LengthDelimited).string(e.body), "" !== e.helpArticleId && t.tag(4, r.TD.LengthDelimited).string(e.helpArticleId);
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
    }])
  }
}
let s = new o