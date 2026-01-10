/** Chunk was on 81985 **/
/** chunk id: 185145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk346486 = require("./346486.jsx"),
  Chunk545594 = require("./545594.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk322937 = require("./322937.js"),
  Chunk134049 = require("./134049.js"),
  Chunk893732 = require("./893732.jsx"),
  Chunk590433 = require("./590433.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk427988 = require("./427988.js");

function m(e) {
  let {
    guild: t,
    disabledUntil: n
  } = e, [m, b] = (0, d.i)(t.id), y = (0, i.e7)([c.ZP, s.default], () => c.ZP.getMember(t.id, s.default.getId()), [t.id]);
  return (0, u.$)(y), (0, r.jsxs)("div", {
    children: [m ? (0, r.jsx)(p.Z, {
      onClose: () => b(t.id),
      guildName: t.name
    }) : null, (0, r.jsx)(o.i, {
      bannerIcon: (0, r.jsx)(l.YlB, {
        size: "md",
        color: "currentColor",
        className: g.bannerIcon
      }),
      bannerHeader: h.intl.string(h.t["9UoK6Y"]),
      bannerSubtext: h.intl.format(h.t["4ZwD5G"], {
        link: f.cu
      }),
      textStyles: g.bannerContainer,
      headerStyles: g.bannerHeader,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/semibold",
        children: (0, r.jsx)(a.Z, {
          deadline: new Date(n),
          showUnits: true,
          stopAtOneSec: true
        })
      })
    })]
  })
}