/** Chunk was on 89488 **/
/** chunk id: 294520, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K6: () => h,
  eJ: () => I,
  iW: () => f,
  rx: () => O,
  sC: () => m,
  tt: () => g
}), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk417597 = require("./417597.js"),
  Chunk930125 = require("./930125.js"),
  Chunk338717 = require("./338717.js"),
  Chunk282108 = require("./282108.js"),
  Chunk256265 = require("./256265.js"),
  Chunk253932 = require("./253932.js"),
  Chunk576705 = require("./576705.js"),
  Chunk863439 = require("./863439.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let f = (e, t) => {
    let {
      spoiler: n,
      flags: i = 0
    } = e, _ = (0, l.b)({
      type: o.D.Attachment,
      media: e
    }, t), c = (0, l.$V)({
      type: o.D.Attachment,
      media: e
    }, t);
    return _.length > 0 ? _[0] : c ? a.Oc.POTENTIAL_EXPLICIT_CONTENT : n || (0, r.Lt)(i, u.sbO.IS_SPOILER) ? a.Oc.SPOILER : null
  },
  m = (e, t, n, r) => {
    let i = (0, l.b)({
        type: o.D.Embed,
        media: e
      }, r),
      _ = !t.author.bot && (0, l.$V)({
        type: o.D.Embed,
        media: e
      }, r);
    return i.length > 0 ? i[0] : _ ? a.Oc.POTENTIAL_EXPLICIT_CONTENT : n ? a.Oc.SPOILER : null
  },
  g = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = arguments.length > 3 && true !== arguments[3] && arguments[3],
      i = (0, l.b)({
        type: o.D.GenericMedia,
        media: e
      }, t),
      _ = !r && (0, l.$V)({
        type: o.D.GenericMedia,
        media: e
      }, t);
    return i.includes(a.Oc.EXPLICIT_CONTENT) ? a.Oc.EXPLICIT_CONTENT : i.includes(a.Oc.GORE_CONTENT) ? a.Oc.GORE_CONTENT : i.includes(a.Oc.SELF_HARM_CONTENT) ? a.Oc.SELF_HARM_CONTENT : _ ? a.Oc.POTENTIAL_EXPLICIT_CONTENT : n ? a.Oc.SPOILER : null
  };

function h(e, t, n) {
  if (null == e) return [false, true];
  let r = function(e) {
    switch (e.type) {
      case _.vV.EMBED:
        return {
          type: o.D.Embed, media: e
        };
      case _.vV.ATTACHMENT:
        return {
          type: o.D.Attachment, media: e
        };
      case _.vV.COMPONENT:
        return {
          type: o.D.GenericMedia, media: e.srcUnfurledMediaItem
        };
      default:
        return null
    }
  }(e);
  if (null == r) return [false, true];
  let i = (0, l.b)(r, n),
    c = (0, l.$V)(r, n);
  return i.length > 0 ? [true, i[0]] : c ? [true, a.Oc.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [t, a.Oc.SPOILER] : [false, true]
}

function I(e) {
  let {
    channel: t,
    media: n
  } = e, r = (0, i.bG)([s.A], () => null != t && s.A.can(u.xBc.MANAGE_MESSAGES, t)), a = c.gs.useSetting(), _ = (0, l.O8)(o.v.GUILD);
  return h(n, !(0, d.A)(a, r), _)
}
let O = e => {
  switch (e) {
    case a.Oc.EXPLICIT_CONTENT:
    case a.Oc.GORE_CONTENT:
    case a.Oc.SELF_HARM_CONTENT:
      return p.intl.string(p.t.SEgHFh);
    case a.Oc.SPOILER:
      return p.intl.string(p.t["XpfDH+"]);
    default:
      return
  }
}