/** Chunk was on web.js **/
/** chunk id: 185145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk790806 = require("./790806.js");

function m(e) {
  let {
    guild: t,
    disabledUntil: n
  } = e, [m, g] = (0, d.i)(t.id), E = (0, i.e7)([c.ZP, l.default], () => c.ZP.getMember(t.id, l.default.getId()), [t.id]);
  (0, u.$)(E);
  let b = () => m ? (0, r.jsx)(f.Z, {
    onClose: () => g(t.id),
    guildName: t.name
  }) : null;
  return (0, r.jsxs)("div", {
    children: [b(), (0, r.jsx)(s.i, {
      bannerIcon: (0, r.jsx)(o.YlB, {
        size: "md",
        color: "currentColor",
        className: h.bannerIcon
      }),
      bannerHeader: p.intl.string(p.t["9UoK6e"]),
      bannerSubtext: p.intl.format(p.t["4ZwD5O"], {
        link: _.cu
      }),
      textStyles: h.bannerContainer,
      headerStyles: h.bannerHeader,
      children: (0, r.jsx)(o.Text, {
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