/** Chunk was on web.js **/
/** chunk id: 532901, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./125548.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk25209 = require("./25209.js"),
  Chunk794295 = require("./794295.jsx"),
  Chunk865427 = require("./865427.js"),
  Chunk853425 = require("./853425.jsx"),
  Chunk49012 = require("./49012.js"),
  Chunk773352 = require("./773352.js");
let d = 1024;

function f(e) {
  return {
    react(t, n, f) {
      if (e.enableBuildOverrides && (0, s._G)(t.target)) return (0, r.jsx)(i.Fragment, {
        children: (0, r.jsx)(l.Z, {
          url: t.target
        }, t.target)
      }, f.key);
      let _ = n(t.content, f),
        p = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, a.Rp)(t.content),
        h = () => (0, u.r)(t),
        m = (null == e ? true : e.mustConfirmExternalLink) ? e => (null == e || e.stopPropagation(), null == e || e.preventDefault(), (0, c.q)({
          href: t.target,
          shouldConfirm: true,
          messageId: f.messageId,
          channelId: f.channelId
        }), null) : true;
      if (f.previewLinkTarget && !(0, u.r)(t)) {
        let e = "\n\n(".concat(t.target, ")");
        p.length + e.length > d && (e = "..." + e, p = (p = p.substr(0, d - e.length)).trimEnd()), p += e
      }
      return f.noStyleAndInteraction ? (0, r.jsx)("span", {
        title: p,
        children: _
      }, f.key) : (0, r.jsx)(o.Z, {
        title: p,
        href: t.target,
        trusted: h,
        onClick: m,
        messageId: f.messageId,
        channelId: f.channelId,
        children: _
      }, f.key)
    }
  }
}