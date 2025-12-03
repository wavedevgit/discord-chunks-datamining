/** Chunk was on 27978 **/
/** chunk id: 792766, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  y: () => u
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk411198 = require("./411198.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk407749 = require("./407749.js");
let u = e => {
  let {
    guild: t,
    onlineCount: n
  } = e;
  if (null == t) return null;
  let u = a.Qs(t),
    {
      name: d,
      description: h
    } = u;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-md/normal",
      color: "header-muted",
      className: c.alignStart,
      children: o.intl.string(o.t.Eabu1z)
    }), (0, r.jsxs)("div", {
      className: c.guild,
      children: [(0, r.jsx)(s.ZP, {
        mask: s.ZP.Masks.SQUIRCLE,
        width: 40,
        height: 40,
        children: (0, r.jsx)(l.Z, {
          guild: u,
          size: l.Z.Sizes.MEDIUM,
          active: true
        })
      }), (0, r.jsxs)("div", {
        className: c.guildInfo,
        children: [(0, r.jsx)(i.Heading, {
          variant: "heading-sm/semibold",
          children: d
        }), (0, r.jsxs)("div", {
          className: c.speaker,
          children: [(0, r.jsx)("div", {
            className: c.dot
          }), null != n && n > 0 ? (0, r.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: o.intl.format(o.t["LC+S+m"], {
              membersOnline: n
            })
          }) : null]
        })]
      })]
    }), null != h && "" !== h && (0, r.jsx)(i.Text, {
      color: "text-default",
      className: c.alignStart,
      variant: "text-sm/normal",
      children: h
    })]
  })
}