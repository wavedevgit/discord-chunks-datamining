/** Chunk was on web.js **/
/** chunk id: 169525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  As: () => E,
  BP: () => m,
  MC: () => y,
  dn: () => _,
  hL: () => b,
  lK: () => h
}), require("./997841.js");
var Chunk95015 = require("./95015.js"),
  Chunk399606 = require("./399606.js"),
  Chunk991621 = require("./991621.js"),
  Chunk936141 = require("./936141.js"),
  Chunk629710 = require("./629710.js"),
  Chunk368844 = require("./368844.js"),
  Chunk695346 = require("./695346.js"),
  Chunk496675 = require("./496675.js"),
  Chunk255269 = require("./255269.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let _ = (e, t) => {
    let {
      spoiler: n,
      flags: i = 0
    } = e, l = (0, s.LD)({
      type: o.l.Attachment,
      media: e
    }, t), c = (0, s.UJ)({
      type: o.l.Attachment,
      media: e
    }, t);
    return l.length > 0 ? l[0] : c ? a.wk.POTENTIAL_EXPLICIT_CONTENT : n || (0, r.yE)(i, f.J0y.IS_SPOILER) ? a.wk.SPOILER : null
  },
  m = (e, t, n, r) => {
    let i = (0, s.LD)({
        type: o.l.Embed,
        media: e
      }, r),
      l = !t.author.bot && (0, s.UJ)({
        type: o.l.Embed,
        media: e
      }, r);
    return i.length > 0 ? i[0] : l ? a.wk.POTENTIAL_EXPLICIT_CONTENT : n ? a.wk.SPOILER : null
  },
  h = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = arguments.length > 3 && true !== arguments[3] && arguments[3],
      i = (0, s.LD)({
        type: o.l.GenericMedia,
        media: e
      }, t),
      l = !r && (0, s.UJ)({
        type: o.l.GenericMedia,
        media: e
      }, t);
    return i.includes(a.wk.EXPLICIT_CONTENT) ? a.wk.EXPLICIT_CONTENT : i.includes(a.wk.GORE_CONTENT) ? a.wk.GORE_CONTENT : i.includes(a.wk.SELF_HARM_CONTENT) ? a.wk.SELF_HARM_CONTENT : l ? a.wk.POTENTIAL_EXPLICIT_CONTENT : n ? a.wk.SPOILER : null
  };

function g(e) {
  switch (e.type) {
    case l.Ah.EMBED:
      return {
        type: o.l.Embed, media: e
      };
    case l.Ah.ATTACHMENT:
      return {
        type: o.l.Attachment, media: e
      };
    case l.Ah.COMPONENT:
      return {
        type: o.l.GenericMedia, media: e.srcUnfurledMediaItem
      };
    default:
      return null
  }
}

function E(e, t, n) {
  if (null == e) return [false, true];
  let r = g(e);
  if (null == r) return [false, true];
  let i = (0, s.LD)(r, n),
    o = (0, s.UJ)(r, n);
  return i.length > 0 ? [true, i[0]] : o ? [true, a.wk.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [t, a.wk.SPOILER] : [false, true]
}

function b(e) {
  let {
    channel: t,
    media: n
  } = e, r = (0, i.e7)([u.Z], () => null != t && u.Z.can(f.Plq.MANAGE_MESSAGES, t)), a = c.cC.useSetting(), l = (0, s.kh)(o.n.GUILD);
  return E(n, !(0, d.Z)(a, r), l)
}
let y = e => {
  switch (e) {
    case a.wk.EXPLICIT_CONTENT:
    case a.wk.GORE_CONTENT:
    case a.wk.SELF_HARM_CONTENT:
      return p.intl.string(p.t.SEgHFh);
    case a.wk.SPOILER:
      return p.intl.string(p.t["XpfDH+"]);
    default:
      return
  }
}