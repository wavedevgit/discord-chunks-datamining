/** Chunk was on 66866 **/
/** chunk id: 863663, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  NB: () => a,
  ar: () => u,
  fG: () => c,
  kg: () => o,
  pM: () => s
}), require("./781311.js"), require("./953529.js");
var Chunk881052 = require("./881052.js");
require("./496675.js");
var Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let a = "_role";

function o(e) {
  if (!(e >= 0)) switch (-e) {
    case i.evJ.ENTITY_TOO_LARGE:
      return l.intl.string(l.t.YbdEFB);
    case i.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
      return l.intl.string(l.t.ZaXBoK);
    case 1:
      return l.intl.string(l.t.R0RpRU);
    default:
      return l.intl.formatToPlainString(l.t.cYwlp6, {
        code: -e
      })
  }
}

function s(e) {
  let {
    newRoleParams: t
  } = e;
  if (null != t && "" === t.name.trim()) {
    var n;
    return n = l.intl.string(l.t["V0B/k5"]), new r.Hx({
      status: 400,
      body: {
        message: "Invalid form body",
        errors: {
          [a]: {
            _errors: [{
              code: "",
              message: n
            }]
          }
        }
      }
    })
  }
}

function c(e) {
  var t;
  let {
    guildProductListing: n,
    name: r,
    priceTier: i,
    description: l,
    image: a,
    imageName: o,
    isImageChanged: s,
    newRoleParams: c,
    hasUnsavedAttachmentChanges: u
  } = e, d = {};
  (null == n ? true : n.name) !== r && "" !== r.trim() && (d.name = r), (null != (t = null == n ? true : n.description) ? t : "") !== l && (d.description = l), (null == n ? true : n.price_tier) !== i && null != i && (d.priceTier = i), null != c && "" !== c.name.trim() ? d.createNewRole = true : null === c && (d.unlinkRole = true), a.startsWith("data:") && (s || null == n && (Object.keys(d).length > 0 || u)) && (d.image = a, d.imageName = o);
  let p = Object.keys(d).length > 0 || u;
  return {
    changes: d,
    hasUnsavedChanges: p,
    canSaveForDraft: p,
    canSaveForPublished: p,
    canPublishOrUnpublish: !(null == n || p)
  }
}

function u(e, t) {
  return "".concat(location.protocol, "//").concat(location.host).concat(i.Z5c.GUILD_PRODUCT(e, t))
}