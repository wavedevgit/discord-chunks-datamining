/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => d
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(481060),
  s = n(249458),
  l = n(138599),
  c = n(388032),
  u = n(245477);
let d = e => {
  let {
    onPlay: t,
    externalURL: n,
    className: i,
    renderLinkComponent: d,
    inactive: f,
    messageId: p,
    channelId: _
  } = e;
  return (0, r.jsx)(s.G.Consumer, {
    children: e => (0, r.jsxs)("div", {
      className: o()(i, u.wrapper, {
        [u.disableInteractions]: e.disableInteractions
      }),
      children: [f && null == t ? (0, r.jsx)("div", {
        className: u.iconWrapper,
        children: (0, r.jsx)(a.o1U, {
          size: "xs",
          color: "currentColor",
          className: u.iconPlay
        })
      }) : null, null != t ? (0, r.jsx)(a.P3F, {
        onClick: t,
        className: o()(u.iconWrapperActive),
        tabIndex: f ? -1 : 0,
        "aria-label": c.NW.string(c.t.RscU7O),
        children: (0, r.jsx)(a.o1U, {
          size: "xs",
          color: "currentColor",
          className: u.iconPlay
        })
      }) : null, null != n ? d({
        href: n,
        target: "_blank",
        rel: "noreferrer noopener",
        className: u.iconWrapperActive,
        children: (0, r.jsx)(l.Z, {
          "aria-label": c.NW.string(c.t.wuRE8P),
          className: null != t ? u.iconExternalMargins : u.iconExternal
        }),
        messageId: p,
        channelId: _
      }) : null]
    })
  })
}