/** Chunk was on 85372 **/
/** chunk id: 169525, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  As: () => O,
  BP: () => f,
  MC: () => I,
  dn: () => p,
  hL: () => g,
  lK: () => y
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
    } = e, a = (0, o.LD)({
      type: i.l.Attachment,
      media: e
    }, t), s = (0, o.UJ)({
      type: i.l.Attachment,
      media: e
    }, t);
    return a.length > 0 ? a[0] : s ? l.wk.POTENTIAL_EXPLICIT_CONTENT : n || (0, c.yE)(r, m.J0y.IS_SPOILER) ? l.wk.SPOILER : null
  },
  f = (e, t, n, r) => {
    let a = (0, o.LD)({
        type: i.l.Embed,
        media: e
      }, r),
      s = !t.author.bot && (0, o.UJ)({
        type: i.l.Embed,
        media: e
      }, r);
    return a.length > 0 ? a[0] : s ? l.wk.POTENTIAL_EXPLICIT_CONTENT : n ? l.wk.SPOILER : null
  },
  y = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = arguments.length > 3 && true !== arguments[3] && arguments[3],
      a = (0, o.LD)({
        type: i.l.GenericMedia,
        media: e
      }, t),
      s = !r && (0, o.UJ)({
        type: i.l.GenericMedia,
        media: e
      }, t);
    return a.includes(l.wk.EXPLICIT_CONTENT) ? l.wk.EXPLICIT_CONTENT : a.includes(l.wk.GORE_CONTENT) ? l.wk.GORE_CONTENT : s ? l.wk.POTENTIAL_EXPLICIT_CONTENT : n ? l.wk.SPOILER : null
  };

function O(e, t, n) {
  if (null == e) return [false, true];
  let r = function(e) {
    switch (e.type) {
      case a.Ah.EMBED:
        return {
          type: i.l.Embed, media: e
        };
      case a.Ah.ATTACHMENT:
        return {
          type: i.l.Attachment, media: e
        };
      case a.Ah.COMPONENT:
        return {
          type: i.l.GenericMedia, media: e.srcUnfurledMediaItem
        };
      default:
        return null
    }
  }(e);
  if (null == r) return [false, true];
  let s = (0, o.LD)(r, n),
    u = (0, o.UJ)(r, n);
  return s.length > 0 ? [true, s[0]] : u ? [true, l.wk.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [t, l.wk.SPOILER] : [false, true]
}

function g(e) {
  let {
    channel: t,
    media: n
  } = e, l = (0, r.e7)([u.Z], () => null != t && u.Z.can(m.Plq.MANAGE_MESSAGES, t)), a = s.cC.useSetting(), c = (0, o.kh)(i.n.GUILD);
  return O(n, !(0, d.Z)(a, l), c)
}
let I = e => {
  switch (e) {
    case l.wk.EXPLICIT_CONTENT:
    case l.wk.GORE_CONTENT:
      return h.intl.string(h.t.SEgHFh);
    case l.wk.SPOILER:
      return h.intl.string(h.t.XpfDHx);
    default:
      return
  }
}