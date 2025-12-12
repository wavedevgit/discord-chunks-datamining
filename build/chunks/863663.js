/** Chunk was on web.js **/
/** chunk id: 863663, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NB: () => a,
  ar: () => d,
  fG: () => u,
  kg: () => s,
  pM: () => c
}), require("./781311.js"), require("./953529.js");
var Chunk881052 = require("./881052.js");
require("./496675.js");
var Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let a = "_role";

function s(e) {
  if (!(e >= 0)) switch (-e) {
    case i.evJ.ENTITY_TOO_LARGE:
      return o.intl.string(o.t.YbdEFK);
    case i.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
      return o.intl.string(o.t.ZaXBoD);
    case 1:
      return o.intl.string(o.t.R0RpRX);
    default:
      return o.intl.formatToPlainString(o.t.cYwlp9, {
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
  return new r.Hx({
    status: 400,
    body: n
  })
}

function c(e) {
  let {
    newRoleParams: t
  } = e;
  if (null != t && "" === t.name.trim()) return l(a, o.intl.string(o.t["V0B/k6"]))
}

function u(e) {
  var t;
  let {
    guildProductListing: n,
    name: r,
    priceTier: i,
    description: o,
    image: a,
    imageName: s,
    isImageChanged: l,
    newRoleParams: c,
    hasUnsavedAttachmentChanges: u
  } = e, d = {};
  (null == n ? true : n.name) !== r && "" !== r.trim() && (d.name = r), (null != (t = null == n ? true : n.description) ? t : "") !== o && (d.description = o), (null == n ? true : n.price_tier) !== i && null != i && (d.priceTier = i), null != c && "" !== c.name.trim() ? d.createNewRole = true : null === c && (d.unlinkRole = true), a.startsWith("data:") && (l || null == n && (Object.keys(d).length > 0 || u)) && (d.image = a, d.imageName = s);
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
  return "".concat(location.protocol, "//").concat(location.host).concat(i.Z5c.GUILD_PRODUCT(e, t))
}