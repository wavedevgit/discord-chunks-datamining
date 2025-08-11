/** Chunk was on 1272 **/
/** chunk id: 8853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => c
}), require("./980754.js"), require("./388685.js"), require("./415506.js");
var Chunk230367 = require("./230367.js"),
  Chunk320215 = require("./320215.js"),
  Chunk240773 = require("./240773.js"),
  Chunk495852 = require("./495852.js"),
  Chunk740111 = require("./740111.js");
class s extends Chunk495852.C {
  create(e) {
    let t = {
      properties: {
        oneofKind: true
      },
      contentIdentifier: ""
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
          l.properties = {
            oneofKind: "placeholder",
            placeholder: e.string()
          };
          break;
        case 2:
          l.properties = {
            oneofKind: "announcementModalVariant1",
            announcementModalVariant1: o.xY.internalBinaryRead(e, e.uint32(), n, l.properties.announcementModalVariant1)
          };
          break;
        case 3:
          l.contentIdentifier = e.string();
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, l, t, i, s)
      }
    }
    return l
  }
  internalBinaryWrite(e, t, n) {
    "placeholder" === e.properties.oneofKind && t.tag(1, r.TD.LengthDelimited).string(e.properties.placeholder), "announcementModalVariant1" === e.properties.oneofKind && o.xY.internalBinaryWrite(e.properties.announcementModalVariant1, t.tag(2, r.TD.LengthDelimited).fork(), n).join(), "" !== e.contentIdentifier && t.tag(3, r.TD.LengthDelimited).string(e.contentIdentifier);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", [{
      no: 1,
      name: "placeholder",
      kind: "scalar",
      oneof: "properties",
      T: 9
    }, {
      no: 2,
      name: "announcement_modal_variant_1",
      kind: "message",
      oneof: "properties",
      T: () => Chunk740111.xY
    }, {
      no: 3,
      name: "content_identifier",
      kind: "scalar",
      T: 9
    }])
  }
}
let c = new s