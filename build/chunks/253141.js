/** Chunk was on web.js **/
/** chunk id: 253141, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EY: () => u,
  KW: () => d,
  a: () => s,
  ig: () => c,
  kt: () => o
}), require("./733351.js"), require("./228524.js");
var Chunk198982 = require("./198982.js");
require("./576705.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let s = "_role";

function o(e) {
  if (!(e >= 0)) switch (-e) {
    case i.t02.ENTITY_TOO_LARGE:
      return a.intl.string(a.t.YbdEFK);
    case i.t02.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
      return a.intl.string(a.t.ZaXBoD);
    case 1:
      return a.intl.string(a.t.R0RpRX);
    default:
      return a.intl.formatToPlainString(a.t.cYwlp9, {
        code: -e
      })
  }
}

function l(e, t) {
  let n = {
    message: "Invalid form body",
    errors: {
      [e]: {
        _errors: [{
          code: "",
          message: t
        }]
      }
    }
  };
  return new r.LG({
    status: 400,
    body: n
  })
}

function c(e) {
  let {
    newRoleParams: t
  } = e;
  if (null != t && "" === t.name.trim()) return l(s, a.intl.string(a.t["V0B/k6"]))
}

function u(e) {
  var t;
  let {
    guildProductListing: n,
    name: r,
    priceTier: i,
    description: a,
    image: s,
    imageName: o,
    isImageChanged: l,
    newRoleParams: c,
    hasUnsavedAttachmentChanges: u
  } = e, d = {};
  (null == n ? true : n.name) !== r && "" !== r.trim() && (d.name = r), (null != (t = null == n ? true : n.description) ? t : "") !== a && (d.description = a), (null == n ? true : n.price_tier) !== i && null != i && (d.priceTier = i), null != c && "" !== c.name.trim() ? d.createNewRole = true : null === c && (d.unlinkRole = true), s.startsWith("data:") && (l || null == n && (Object.keys(d).length > 0 || u)) && (d.image = s, d.imageName = o);
  let f = Object.keys(d).length > 0 || u;
  return {
    changes: d,
    hasUnsavedChanges: f,
    canSaveForDraft: f,
    canSaveForPublished: f,
    canPublishOrUnpublish: !(null == n || f)
  }
}

function d(e, t) {
  return "".concat(location.protocol, "//").concat(location.host).concat(i.BVt.GUILD_PRODUCT(e, t))
}