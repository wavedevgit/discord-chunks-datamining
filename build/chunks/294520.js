/** Chunk was on web.js **/
/** chunk id: 294520, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K6: () => E,
  eJ: () => b,
  iW: () => _,
  rx: () => y,
  sC: () => h,
  tt: () => m
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
let _ = (e, t) => {
    let {
      spoiler: n,
      flags: i = 0
    } = e, l = (0, o.b)({
      type: a.D.Attachment,
      media: e
    }, t), c = (0, o.$V)({
      type: a.D.Attachment,
      media: e
    }, t);
    return l.length > 0 ? l[0] : c ? s.Oc.POTENTIAL_EXPLICIT_CONTENT : n || (0, r.Lt)(i, f.sbO.IS_SPOILER) ? s.Oc.SPOILER : null
  },
  h = (e, t, n, r) => {
    let i = (0, o.b)({
        type: a.D.Embed,
        media: e
      }, r),
      l = !t.author.bot && (0, o.$V)({
        type: a.D.Embed,
        media: e
      }, r);
    return i.length > 0 ? i[0] : l ? s.Oc.POTENTIAL_EXPLICIT_CONTENT : n ? s.Oc.SPOILER : null
  },
  m = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = arguments.length > 3 && true !== arguments[3] && arguments[3],
      i = (0, o.b)({
        type: a.D.GenericMedia,
        media: e
      }, t),
      l = !r && (0, o.$V)({
        type: a.D.GenericMedia,
        media: e
      }, t);
    return i.includes(s.Oc.EXPLICIT_CONTENT) ? s.Oc.EXPLICIT_CONTENT : i.includes(s.Oc.GORE_CONTENT) ? s.Oc.GORE_CONTENT : i.includes(s.Oc.SELF_HARM_CONTENT) ? s.Oc.SELF_HARM_CONTENT : l ? s.Oc.POTENTIAL_EXPLICIT_CONTENT : n ? s.Oc.SPOILER : null
  };

function g(e) {
  switch (e.type) {
    case l.vV.EMBED:
      return {
        type: a.D.Embed, media: e
      };
    case l.vV.ATTACHMENT:
      return {
        type: a.D.Attachment, media: e
      };
    case l.vV.COMPONENT:
      return {
        type: a.D.GenericMedia, media: e.srcUnfurledMediaItem
      };
    default:
      return null
  }
}

function E(e, t, n) {
  if (null == e) return [false, true];
  let r = g(e);
  if (null == r) return [false, true];
  let i = (0, o.b)(r, n),
    a = (0, o.$V)(r, n);
  return i.length > 0 ? [true, i[0]] : a ? [true, s.Oc.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [t, s.Oc.SPOILER] : [false, true]
}

function b(e) {
  let {
    channel: t,
    media: n
  } = e, r = (0, i.bG)([u.A], () => null != t && u.A.can(f.xBc.MANAGE_MESSAGES, t)), s = c.gs.useSetting(), l = (0, o.O8)(a.v.GUILD);
  return E(n, !(0, d.A)(s, r), l)
}
let y = e => {
  switch (e) {
    case s.Oc.EXPLICIT_CONTENT:
    case s.Oc.GORE_CONTENT:
    case s.Oc.SELF_HARM_CONTENT:
      return p.intl.string(p.t.SEgHFh);
    case s.Oc.SPOILER:
      return p.intl.string(p.t["XpfDH+"]);
    default:
      return
  }
}