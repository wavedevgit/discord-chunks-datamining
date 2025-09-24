/** Chunk was on 1272 **/
/** chunk id: 74433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./781311.js"), require("./388685.js");
var Chunk657305 = require("./657305.js"),
  Chunk841784 = require("./841784.js"),
  Chunk420660 = require("./420660.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  return {
    [a.IIU.STREAMING]: e ? o.t["4CQq9f"] : o.t["0wJXSk"],
    [a.IIU.LISTENING]: e ? o.t["b+lA5+"] : o.t.Vnuxub,
    [a.IIU.WATCHING]: e ? o.t.mqdfDQ : o.t.pW3Ip6,
    [a.IIU.COMPETING]: e ? o.t.oHF7Cg : o.t.QQ2wVF
  }
}

function c(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (null != e && e.type === a.IIU.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
  if (null != t) return null == e || e.type !== a.IIU.PLAYING ? o.intl.string(o.t.eXan7O) : o.intl.format(s(n)[a.IIU.STREAMING], {
    name: e.name
  });
  if (null == e || null == e.name) return null;
  if ((0, l.Z)(e)) {
    let t = null != e.details && "" !== e.details ? e.details : e.name;
    return o.intl.format(s(n)[a.IIU.STREAMING], {
      name: t
    })
  }
  return (0, i.Z)(e) ? (0, r.Z)(e.name) : function(e, t, n) {
    let r = s(n);
    switch (e) {
      case a.IIU.LISTENING:
      case a.IIU.WATCHING:
      case a.IIU.COMPETING:
        return o.intl.format(r[e], {
          name: t
        });
      case a.IIU.CUSTOM_STATUS:
      case a.IIU.HANG_STATUS:
        return null;
      case a.IIU.PLAYING:
      default:
        return n ? o.intl.formatToPlainString(o.t.Sq9xJy, {
          game: t
        }) : o.intl.format(o.t.lFApm5, {
          game: t
        })
    }
  }(e.type, e.name, n)
}

function u(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (Array.isArray(e)) {
    let r = e;
    null != t && false !== t.discoverable && (r = [...r, null]);
    let i = null;
    for (let e of r) {
      let r = c(e, t, n);
      if (null != r) return {
        activity: e,
        activityText: r
      };
      (null == e ? true : e.type) === a.IIU.CUSTOM_STATUS && null != e.emoji && (i = e)
    }
    return (null == i ? true : i.emoji) != null ? {
      activity: i,
      activityText: null
    } : null
  }
  return c(e, t, n)
}