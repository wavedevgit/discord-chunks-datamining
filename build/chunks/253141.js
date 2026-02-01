/** Chunk was on 9753 **/
/** chunk id: 253141, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EY: () => c,
  KW: () => u,
  a: () => a,
  ig: () => o,
  kt: () => s
}), require("./733351.js"), require("./228524.js");
var Chunk198982 = require("./198982.js");
require("./576705.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let a = "_role";

function s(e) {
  if (!(e >= 0)) switch (-e) {
    case i.t02.ENTITY_TOO_LARGE:
      return l.intl.string(l.t.YbdEFK);
    case i.t02.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
      return l.intl.string(l.t.ZaXBoD);
    case 1:
      return l.intl.string(l.t.R0RpRX);
    default:
      return l.intl.formatToPlainString(l.t.cYwlp9, {
        code: -e
      })
  }
}

function o(e) {
  let {
    newRoleParams: t
  } = e;
  if (null != t && "" === t.name.trim()) {
    var n;
    return n = l.intl.string(l.t["V0B/k6"]), new r.LG({
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
    imageName: s,
    isImageChanged: o,
    newRoleParams: c,
    hasUnsavedAttachmentChanges: u
  } = e, d = {};
  (null == n ? true : n.name) !== r && "" !== r.trim() && (d.name = r), (null != (t = null == n ? true : n.description) ? t : "") !== l && (d.description = l), (null == n ? true : n.price_tier) !== i && null != i && (d.priceTier = i), null != c && "" !== c.name.trim() ? d.createNewRole = true : null === c && (d.unlinkRole = true), a.startsWith("data:") && (o || null == n && (Object.keys(d).length > 0 || u)) && (d.image = a, d.imageName = s);
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
  return "".concat(location.protocol, "//").concat(location.host).concat(i.BVt.GUILD_PRODUCT(e, t))
}