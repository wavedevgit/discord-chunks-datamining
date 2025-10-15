/** Chunk was on 1272 **/
/** chunk id: 74433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./781311.js"), require("./388685.js");
var Chunk835834 = require("./835834.js"),
  Chunk657305 = require("./657305.js"),
  Chunk841784 = require("./841784.js"),
  Chunk420660 = require("./420660.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  return {
    [o.IIU.STREAMING]: e ? s.t["4CQq9f"] : s.t["0wJXSk"],
    [o.IIU.LISTENING]: e ? s.t["b+lA5+"] : s.t.Vnuxub,
    [o.IIU.WATCHING]: e ? s.t.mqdfDQ : s.t.pW3Ip6,
    [o.IIU.COMPETING]: e ? s.t.oHF7Cg : s.t.QQ2wVF
  }
}

function u(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (null != e && e.type === o.IIU.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
  let u = (0, r.R)("getActivityText");
  if (null != t) return null == e || e.type !== o.IIU.PLAYING ? s.intl.string(s.t.eXan7O) : u ? e.name : s.intl.format(c(n)[o.IIU.STREAMING], {
    name: e.name
  });
  if (null == e || null == e.name) return null;
  if ((0, a.Z)(e)) {
    let t = null != e.details && "" !== e.details ? e.details : e.name;
    return u ? t : s.intl.format(c(n)[o.IIU.STREAMING], {
      name: t
    })
  }
  return (0, l.Z)(e) ? (0, i.Z)(e.name) : function(e, t, n) {
    let i = (0, r.R)("formatActivityString"),
      l = c(n);
    switch (e) {
      case o.IIU.LISTENING:
      case o.IIU.WATCHING:
      case o.IIU.COMPETING:
      case o.IIU.STREAMING:
        return i ? t : s.intl.format(l[e], {
          name: t
        });
      case o.IIU.CUSTOM_STATUS:
      case o.IIU.HANG_STATUS:
        return null;
      case o.IIU.PLAYING:
      default:
        return i ? t : n ? s.intl.formatToPlainString(s.t.Sq9xJy, {
          game: t
        }) : s.intl.format(s.t.lFApm5, {
          game: t
        })
    }
  }(e.type, e.name, n)
}

function d(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (Array.isArray(e)) {
    let r = e;
    null != t && false !== t.discoverable && (r = [...r, null]);
    let i = null;
    for (let e of r) {
      let r = u(e, t, n);
      if (null != r) return {
        activity: e,
        activityText: r
      };
      (null == e ? true : e.type) === o.IIU.CUSTOM_STATUS && null != e.emoji && (i = e)
    }
    return (null == i ? true : i.emoji) != null ? {
      activity: i,
      activityText: null
    } : null
  }
  return u(e, t, n)
}