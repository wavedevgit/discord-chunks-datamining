/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  Z: () => f
}), n(878331);
var r = n(200651),
  i = n(192379),
  o = n(25209),
  a = n(794295),
  s = n(865427),
  l = n(853425),
  c = n(49012),
  u = n(773352);
let d = 1024;

function f(e) {
  return {
    react(t, n, f) {
      if (e.enableBuildOverrides && (0, s._G)(t.target)) return (0, r.jsx)(i.Fragment, {
        children: (0, r.jsx)(l.Z, {
          url: t.target
        }, t.target)
      }, f.key);
      let p = n(t.content, f),
        _ = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, o.Rp)(t.content),
        h = () => (0, u.r)(t),
        m = (null == e ? void 0 : e.mustConfirmExternalLink) ? e => (null == e || e.stopPropagation(), null == e || e.preventDefault(), (0, c.q)({
          href: t.target,
          shouldConfirm: !0,
          messageId: f.messageId,
          channelId: f.channelId
        }), null) : void 0;
      if (f.previewLinkTarget && !(0, u.r)(t)) {
        let e = "\n\n(".concat(t.target, ")");
        _.length + e.length > d && (e = "..." + e, _ = (_ = _.substr(0, d - e.length)).trimEnd()), _ += e
      }
      return f.noStyleAndInteraction ? (0, r.jsx)("span", {
        title: _,
        children: p
      }, f.key) : (0, r.jsx)(a.Z, {
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