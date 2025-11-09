/** Chunk was on 50642 **/
/** chunk id: 185145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk932032 = require("./932032.js");

function g(e) {
  let {
    guild: t,
    disabledUntil: n
  } = e, [g, b] = (0, d.i)(t.id), y = (0, r.e7)([c.ZP, s.default], () => c.ZP.getMember(t.id, s.default.getId()), [t.id]);
  return (0, u.$)(y), (0, i.jsxs)("div", {
    children: [g ? (0, i.jsx)(p.Z, {
      onClose: () => b(t.id),
      guildName: t.name
    }) : null, (0, i.jsx)(o.i, {
      bannerIcon: (0, i.jsx)(l.YlB, {
        size: "md",
        color: "currentColor",
        className: m.bannerIcon
      }),
      bannerHeader: f.intl.string(f.t["9UoK6Y"]),
      bannerSubtext: f.intl.format(f.t["4ZwD5G"], {
        link: h.cu
      }),
      textStyles: m.bannerContainer,
      headerStyles: m.bannerHeader,
      children: (0, i.jsx)(l.Text, {
        variant: "text-sm/semibold",
        children: (0, i.jsx)(a.Z, {
          deadline: new Date(n),
          showUnits: true,
          stopAtOneSec: true
        })
      })
    })]
  })
}