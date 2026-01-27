/** Chunk was on web.js **/
/** chunk id: 49005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./183875.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk436857 = require("./436857.js"),
  Chunk9578 = require("./9578.jsx"),
  Chunk380610 = require("./380610.js"),
  Chunk348056 = require("./348056.jsx"),
  Chunk307600 = require("./307600.js"),
  Chunk637557 = require("./637557.js");
let d = 1024;

function f(e) {
  return {
    react(t, n, f) {
      if (e.enableBuildOverrides && (0, s.vS)(t.target)) return (0, r.jsx)(i.Fragment, {
        children: (0, r.jsx)(l.A, {
          url: t.target
        }, t.target)
      }, f.key);
      let p = n(t.content, f),
        _ = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, a.$)(t.content),
        h = () => (0, u.m)(t),
        m = (null == e ? true : e.mustConfirmExternalLink) ? e => (null == e || e.stopPropagation(), null == e || e.preventDefault(), (0, c.h)({
          href: t.target,
          shouldConfirm: true,
          messageId: f.messageId,
          channelId: f.channelId
        }), null) : true;
      if (f.previewLinkTarget && !(0, u.m)(t)) {
        let e = "\n\n(".concat(t.target, ")");
        _.length + e.length > d && (e = "..." + e, _ = (_ = _.substr(0, d - e.length)).trimEnd()), _ += e
      }
      return f.noStyleAndInteraction ? (0, r.jsx)("span", {
        title: _,
        children: p
      }, f.key) : (0, r.jsx)(o.A, {
        title: _,
        href: t.target,
        trusted: h,
        onClick: m,
        messageId: f.messageId,
        channelId: f.channelId,
        children: p
      }, f.key)
    }
  }
}