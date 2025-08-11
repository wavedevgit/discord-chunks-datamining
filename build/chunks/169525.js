/** Chunk was on web.js **/
/** chunk id: 169525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  As: () => E,
  BP: () => h,
  MC: () => y,
  dn: () => p,
  hL: () => b,
  lK: () => m
}), require("./997841.js");
var Chunk399606 = require("./399606.js"),
  Chunk991621 = require("./991621.js"),
  Chunk936141 = require("./936141.js"),
  Chunk629710 = require("./629710.js"),
  Chunk368844 = require("./368844.js"),
  Chunk695346 = require("./695346.js"),
  Chunk496675 = require("./496675.js"),
  Chunk630388 = require("./630388.js"),
  Chunk255269 = require("./255269.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let p = (e, t) => {
    let {
      spoiler: n,
      flags: r = 0
    } = e, s = (0, a.LD)({
      type: i.l.Attachment,
      media: e
    }, t), l = (0, a.UJ)({
      type: i.l.Attachment,
      media: e
    }, t);
    return s.length > 0 ? s[0] : l ? o.wk.POTENTIAL_EXPLICIT_CONTENT : n || (0, u.yE)(r, f.J0y.IS_SPOILER) ? o.wk.SPOILER : null
  },
  h = (e, t, n, r) => {
    let s = (0, a.LD)({
        type: i.l.Embed,
        media: e
      }, r),
      l = !t.author.bot && (0, a.UJ)({
        type: i.l.Embed,
        media: e
      }, r);
    return s.length > 0 ? s[0] : l ? o.wk.POTENTIAL_EXPLICIT_CONTENT : n ? o.wk.SPOILER : null
  },
  m = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = arguments.length > 3 && true !== arguments[3] && arguments[3],
      s = (0, a.LD)({
        type: i.l.GenericMedia,
        media: e
      }, t),
      l = !r && (0, a.UJ)({
        type: i.l.GenericMedia,
        media: e
      }, t);
    return s.includes(o.wk.EXPLICIT_CONTENT) ? o.wk.EXPLICIT_CONTENT : s.includes(o.wk.GORE_CONTENT) ? o.wk.GORE_CONTENT : l ? o.wk.POTENTIAL_EXPLICIT_CONTENT : n ? o.wk.SPOILER : null
  };

function g(e) {
  switch (e.type) {
    case s.Ah.EMBED:
      return {
        type: i.l.Embed, media: e
      };
    case s.Ah.ATTACHMENT:
      return {
        type: i.l.Attachment, media: e
      };
    case s.Ah.COMPONENT:
      return {
        type: i.l.GenericMedia, media: e.srcUnfurledMediaItem
      };
    default:
      return null
  }
}

function E(e, t, n) {
  if (null == e) return [false, true];
  let r = g(e);
  if (null == r) return [false, true];
  let i = (0, a.LD)(r, n),
    s = (0, a.UJ)(r, n);
  return i.length > 0 ? [true, i[0]] : s ? [true, o.wk.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [t, o.wk.SPOILER] : [false, true]
}

function b(e) {
  let {
    channel: t,
    media: n
  } = e, o = (0, r.e7)([c.Z], () => null != t && c.Z.can(f.Plq.MANAGE_MESSAGES, t)), s = l.cC.useSetting(), u = (0, a.kh)(i.n.GUILD);
  return E(n, !(0, d.Z)(s, o), u)
}
let y = e => {
  switch (e) {
    case o.wk.EXPLICIT_CONTENT:
    case o.wk.GORE_CONTENT:
      return _.intl.string(_.t.SEgHFh);
    case o.wk.SPOILER:
      return _.intl.string(_.t.XpfDHx);
    default:
      return
  }
}