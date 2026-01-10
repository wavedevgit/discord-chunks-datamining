/** Chunk was on 49131 **/
/** chunk id: 639184, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk228392 = require("./228392.js"),
  Chunk404616 = require("./404616.jsx"),
  Chunk710352 = require("./710352.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk707545 = require("./707545.js"),
  Chunk584999 = require("./584999.js"),
  Chunk112021 = require("./112021.js"),
  Chunk504764 = require("./504764.js");

function x(e) {
  let {
    onDismiss: t
  } = e;
  return (0, r.jsxs)(l.P3F, {
    onClick: () => {
      open(c.V8), (0, s.GX)({
        readGuideCta: true
      })
    },
    className: i()(f.container, h.container, m.mainCard),
    children: [(0, r.jsxs)("div", {
      className: h.inline,
      children: [(0, r.jsxs)("div", {
        className: h.author,
        children: [(0, r.jsx)(l.gw7, {
          size: "custom",
          width: 28,
          height: 28,
          color: "currentColor",
          className: h.discordIcon
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/semibold",
          color: "text-strong",
          children: u.intl.string(u.t.uvGmCx)
        }), (0, r.jsxs)("div", {
          className: h.notice,
          children: [(0, r.jsx)(l.d3s, {
            size: "md",
            color: "currentColor",
            className: h.infoIcon
          }), (0, r.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: u.intl.string(u.t.t2GkVR)
          })]
        })]
      }), (0, r.jsx)(l.P3F, {
        onClick: e => {
          e.stopPropagation(), t(d.L.DISMISS), (0, s.GX)({
            readGuideCta: false
          })
        },
        children: (0, r.jsx)(l.Dio, {
          size: "xs",
          color: "currentColor",
          className: h.closeIcon
        })
      })]
    }), (0, r.jsx)("hr", {
      className: h.separator
    }), (0, r.jsxs)("div", {
      className: h.inline,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(l.Heading, {
          className: i()(f.__invalid_channelName, h.title),
          variant: "heading-lg/semibold",
          color: "text-strong",
          children: u.intl.string(u.t.JtSpD0)
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: u.intl.string(u.t.Ajhp03)
        })]
      }), (0, r.jsx)("img", {
        src: g,
        alt: u.intl.string(u.t.gAlJzV),
        width: o.TJ,
        height: o.TJ
      })]
    })]
  })
}