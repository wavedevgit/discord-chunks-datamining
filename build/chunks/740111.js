/** Chunk was on web.js **/
/** chunk id: 740111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Wc: () => s,
  xY: () => g
}), require("./980754.js"), require("./388685.js"), require("./415506.js"), require("./539854.js");
var Chunk230367 = require("./230367.js"),
  Chunk320215 = require("./320215.js"),
  Chunk240773 = require("./240773.js"),
  Chunk495852 = require("./495852.js"),
  s = function(e) {
    return e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.OPEN_MARKETING_PAGE = 1] = "OPEN_MARKETING_PAGE", e[e.OPEN_TIER_2_PAYMENT_MODAL = 2] = "OPEN_TIER_2_PAYMENT_MODAL", e[e.OPEN_TIER_1_PAYMENT_MODAL = 3] = "OPEN_TIER_1_PAYMENT_MODAL", e[e.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER = 4] = "OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER", e
  }({});
class l extends Chunk495852.C {
  create(e) {
    let t = {
      header: "",
      pill: "",
      body: "",
      imageLink: "",
      imageLinkLightTheme: ""
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
          o.header = e.string();
          break;
        case 2:
          o.pill = e.string();
          break;
        case 3:
          o.body = e.string();
          break;
        case 4:
          o.imageLink = e.string();
          break;
        case 5:
          o.imageLinkLightTheme = e.string();
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
    "" !== e.header && t.tag(1, r.TD.LengthDelimited).string(e.header), "" !== e.pill && t.tag(2, r.TD.LengthDelimited).string(e.pill), "" !== e.body && t.tag(3, r.TD.LengthDelimited).string(e.body), "" !== e.imageLink && t.tag(4, r.TD.LengthDelimited).string(e.imageLink), "" !== e.imageLinkLightTheme && t.tag(5, r.TD.LengthDelimited).string(e.imageLinkLightTheme);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.FeatureCard", [{
      no: 1,
      name: "header",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "pill",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "body",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "image_link",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "image_link_light_theme",
      kind: "scalar",
      T: 9
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
          o.copy = e.string();
          break;
        case 2:
          o.buttonAction = e.int32();
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
    "" !== e.copy && t.tag(1, r.TD.LengthDelimited).string(e.copy), 0 !== e.buttonAction && t.tag(2, r.TD.Varint).int32(e.buttonAction);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.SubscriptionButton", [{
      no: 1,
      name: "copy",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "button_action",
      kind: "enum",
      T: () => ["discord_protos.premium_marketing.v1.ButtonAction", s, "BUTTON_ACTION_"]
    }])
  }
}
let d = new u;
class f extends Chunk495852.C {
  create(e) {
    let t = {
      heroArtLocalizedVideoLinksDarkTheme: {},
      heroArtLocalizedVideoLinksLightTheme: {},
      heroArtVideoSubtitleLinks: {}
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
          this.binaryReadMap1(o.heroArtLocalizedVideoLinksDarkTheme, e, n);
          break;
        case 2:
          this.binaryReadMap2(o.heroArtLocalizedVideoLinksLightTheme, e, n);
          break;
        case 3:
          this.binaryReadMap3(o.heroArtVideoSubtitleLinks, e, n);
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
  binaryReadMap1(e, t, n) {
    let r = t.uint32(),
      i = t.pos + r,
      o, a;
    for (; t.pos < i;) {
      let [e, n] = t.tag();
      switch (e) {
        case 1:
          o = t.string();
          break;
        case 2:
          a = t.string();
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_localized_video_links_dark_theme")
      }
    }
    e[null != o ? o : ""] = null != a ? a : ""
  }
  binaryReadMap2(e, t, n) {
    let r = t.uint32(),
      i = t.pos + r,
      o, a;
    for (; t.pos < i;) {
      let [e, n] = t.tag();
      switch (e) {
        case 1:
          o = t.string();
          break;
        case 2:
          a = t.string();
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_localized_video_links_light_theme")
      }
    }
    e[null != o ? o : ""] = null != a ? a : ""
  }
  binaryReadMap3(e, t, n) {
    let r = t.uint32(),
      i = t.pos + r,
      o, a;
    for (; t.pos < i;) {
      let [e, n] = t.tag();
      switch (e) {
        case 1:
          o = t.string();
          break;
        case 2:
          a = t.string();
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_video_subtitle_links")
      }
    }
    e[null != o ? o : ""] = null != a ? a : ""
  }
  internalBinaryWrite(e, t, n) {
    for (let n of Object.keys(e.heroArtLocalizedVideoLinksDarkTheme)) t.tag(1, r.TD.LengthDelimited).fork().tag(1, r.TD.LengthDelimited).string(n).tag(2, r.TD.LengthDelimited).string(e.heroArtLocalizedVideoLinksDarkTheme[n]).join();
    for (let n of Object.keys(e.heroArtLocalizedVideoLinksLightTheme)) t.tag(2, r.TD.LengthDelimited).fork().tag(1, r.TD.LengthDelimited).string(n).tag(2, r.TD.LengthDelimited).string(e.heroArtLocalizedVideoLinksLightTheme[n]).join();
    for (let n of Object.keys(e.heroArtVideoSubtitleLinks)) t.tag(3, r.TD.LengthDelimited).fork().tag(1, r.TD.LengthDelimited).string(n).tag(2, r.TD.LengthDelimited).string(e.heroArtVideoSubtitleLinks[n]).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.Variant1Storage", [{
      no: 1,
      name: "hero_art_localized_video_links_dark_theme",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }, {
      no: 2,
      name: "hero_art_localized_video_links_light_theme",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }, {
      no: 3,
      name: "hero_art_video_subtitle_links",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }])
  }
}
let p = new f;
class _ extends Chunk495852.C {
  create(e) {
    let t = {
      link: "",
      locale: "",
      isDefault: false
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
          o.link = e.string();
          break;
        case 2:
          o.locale = e.string();
          break;
        case 3:
          o.isDefault = e.bool();
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
    "" !== e.link && t.tag(1, r.TD.LengthDelimited).string(e.link), "" !== e.locale && t.tag(2, r.TD.LengthDelimited).string(e.locale), false !== e.isDefault && t.tag(3, r.TD.Varint).bool(e.isDefault);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.Subtitle", [{
      no: 1,
      name: "link",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "locale",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "is_default",
      kind: "scalar",
      T: 8
    }])
  }
}
let m = new _;
class h extends Chunk495852.C {
  create(e) {
    let t = {
      header: "",
      subheader: "",
      videoLink: "",
      helpArticleId: "",
      featureCards: [],
      dismissKey: "",
      heroArtVideoLinkLightTheme: "",
      heroArtImageLinkDarkTheme: "",
      heroArtImageLinkLightTheme: "",
      modalTopPill: "",
      body: "",
      heroArtVideoSubtitles: []
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
          o.header = e.string();
          break;
        case 2:
          o.subheader = e.string();
          break;
        case 3:
          o.videoLink = e.string();
          break;
        case 4:
          o.helpArticleId = e.string();
          break;
        case 5:
          o.featureCards.push(c.internalBinaryRead(e, e.uint32(), n));
          break;
        case 6:
          o.button = d.internalBinaryRead(e, e.uint32(), n, o.button);
          break;
        case 7:
          o.dismissKey = e.string();
          break;
        case 8:
          o.heroArtVideoLinkLightTheme = e.string();
          break;
        case 9:
          o.heroArtImageLinkDarkTheme = e.string();
          break;
        case 10:
          o.heroArtImageLinkLightTheme = e.string();
          break;
        case 11:
          o.modalTopPill = e.string();
          break;
        case 12:
          o.body = e.string();
          break;
        case 13:
          o.heroArtVideoSubtitles.push(m.internalBinaryRead(e, e.uint32(), n));
          break;
        case 14:
          o.storage = p.internalBinaryRead(e, e.uint32(), n, o.storage);
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
    "" !== e.header && t.tag(1, r.TD.LengthDelimited).string(e.header), "" !== e.subheader && t.tag(2, r.TD.LengthDelimited).string(e.subheader), "" !== e.videoLink && t.tag(3, r.TD.LengthDelimited).string(e.videoLink), "" !== e.helpArticleId && t.tag(4, r.TD.LengthDelimited).string(e.helpArticleId);
    for (let i = 0; i < e.featureCards.length; i++) c.internalBinaryWrite(e.featureCards[i], t.tag(5, r.TD.LengthDelimited).fork(), n).join();
    e.button && d.internalBinaryWrite(e.button, t.tag(6, r.TD.LengthDelimited).fork(), n).join(), "" !== e.dismissKey && t.tag(7, r.TD.LengthDelimited).string(e.dismissKey), "" !== e.heroArtVideoLinkLightTheme && t.tag(8, r.TD.LengthDelimited).string(e.heroArtVideoLinkLightTheme), "" !== e.heroArtImageLinkDarkTheme && t.tag(9, r.TD.LengthDelimited).string(e.heroArtImageLinkDarkTheme), "" !== e.heroArtImageLinkLightTheme && t.tag(10, r.TD.LengthDelimited).string(e.heroArtImageLinkLightTheme), "" !== e.modalTopPill && t.tag(11, r.TD.LengthDelimited).string(e.modalTopPill), "" !== e.body && t.tag(12, r.TD.LengthDelimited).string(e.body);
    for (let i = 0; i < e.heroArtVideoSubtitles.length; i++) m.internalBinaryWrite(e.heroArtVideoSubtitles[i], t.tag(13, r.TD.LengthDelimited).fork(), n).join();
    e.storage && p.internalBinaryWrite(e.storage, t.tag(14, r.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.AnnouncementModalVariant1Properties", [{
      no: 1,
      name: "header",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "subheader",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "video_link",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "help_article_id",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "feature_cards",
      kind: "message",
      repeat: 1,
      T: () => c
    }, {
      no: 6,
      name: "button",
      kind: "message",
      T: () => d
    }, {
      no: 7,
      name: "dismiss_key",
      kind: "scalar",
      T: 9
    }, {
      no: 8,
      name: "hero_art_video_link_light_theme",
      kind: "scalar",
      T: 9
    }, {
      no: 9,
      name: "hero_art_image_link_dark_theme",
      kind: "scalar",
      T: 9
    }, {
      no: 10,
      name: "hero_art_image_link_light_theme",
      kind: "scalar",
      T: 9
    }, {
      no: 11,
      name: "modal_top_pill",
      kind: "scalar",
      T: 9
    }, {
      no: 12,
      name: "body",
      kind: "scalar",
      T: 9
    }, {
      no: 13,
      name: "hero_art_video_subtitles",
      kind: "message",
      repeat: 1,
      T: () => m
    }, {
      no: 14,
      name: "storage",
      kind: "message",
      T: () => p
    }])
  }
}
let g = new h