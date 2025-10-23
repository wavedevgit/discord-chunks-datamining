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
    [s.IIU.STREAMING]: e ? o.t["4CQq9Q"] : o.t["0wJXSh"],
    [s.IIU.LISTENING]: e ? o.t["b+lA5+"] : o.t.Vnuxue,
    [s.IIU.WATCHING]: e ? o.t.mqdfDc : o.t.pW3Ip3,
    [s.IIU.COMPETING]: e ? o.t.oHF7Ch : o.t.QQ2wVE
  }
}

function u(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (null != e && e.type === s.IIU.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
  let u = (0, r.R)("getActivityText");
  if (null != t) return null == e || e.type !== s.IIU.PLAYING ? o.intl.string(o.t.eXan7B) : u ? e.name : o.intl.format(c(n)[s.IIU.STREAMING], {
    name: e.name
  });
  if (null == e || null == e.name) return null;
  if ((0, a.Z)(e)) {
    let t = null != e.details && "" !== e.details ? e.details : e.name;
    return u ? t : o.intl.format(c(n)[s.IIU.STREAMING], {
      name: t
    })
  }
  return (0, l.Z)(e) ? (0, i.Z)(e.name) : function(e, t, n) {
    let i = (0, r.R)("formatActivityString"),
      l = c(n);
    switch (e) {
      case s.IIU.LISTENING:
      case s.IIU.WATCHING:
      case s.IIU.COMPETING:
      case s.IIU.STREAMING:
        return i ? t : o.intl.format(l[e], {
          name: t
        });
      case s.IIU.CUSTOM_STATUS:
      case s.IIU.HANG_STATUS:
        return null;
      case s.IIU.PLAYING:
      default:
        return i ? t : n ? o.intl.formatToPlainString(o.t.Sq9xJ7, {
          game: t
        }) : o.intl.format(o.t.lFApmz, {
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
      (null == e ? true : e.type) === s.IIU.CUSTOM_STATUS && null != e.emoji && (i = e)
    }
    return (null == i ? true : i.emoji) != null ? {
      activity: i,
      activityText: null
    } : null
  }
  return u(e, t, n)
}