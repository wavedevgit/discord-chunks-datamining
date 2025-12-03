/** Chunk was on web.js **/
/** chunk id: 426642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d,
  d: () => u
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk752657 = require("./752657.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk749085 = require("./749085.js"),
  u = function(e) {
    return e[e.TOO_BIG = 0] = "TOO_BIG", e[e.RATE_LIMIT = 1] = "RATE_LIMIT", e[e.TOO_MANY_EMOJI = 2] = "TOO_MANY_EMOJI", e[e.TOO_MANY_ANIMATED_EMOJI = 3] = "TOO_MANY_ANIMATED_EMOJI", e[e.WRONG_TYPE = 4] = "WRONG_TYPE", e[e.RESIZE_GIF = 5] = "RESIZE_GIF", e
  }({});
let d = e => {
  let {
    error: t
  } = e, {
    type: n,
    filename: u
  } = t, {
    icon: d,
    description: f,
    color: p,
    tooltip: _
  } = {
    0: {
      icon: o.gm1,
      description: l.intl.string(l.t.YbdEFK),
      color: i.Z.unsafe_rawColors.RED_400.css,
      tooltip: l.intl.string(l.t.PanA4J)
    },
    4: {
      icon: o.LB9,
      description: l.intl.string(l.t["01Papm"]),
      color: i.Z.unsafe_rawColors.RED_400.css,
      tooltip: l.intl.string(l.t.PanA4J)
    },
    5: {
      icon: s.Z,
      description: l.intl.string(l.t.sp16MU),
      color: i.Z.unsafe_rawColors.RED_400.css,
      tooltip: l.intl.string(l.t.PanA4J)
    },
    1: {
      icon: o.EmW,
      description: l.intl.string(l.t["4rjikl"]),
      color: i.Z.unsafe_rawColors.ORANGE_345.css,
      tooltip: l.intl.string(l.t.dq9aTi)
    },
    2: {
      icon: o.d3s,
      description: l.intl.string(l.t["5VmbbF"]),
      color: i.Z.unsafe_rawColors.RED_400.css,
      tooltip: l.intl.string(l.t.PanA4J)
    },
    3: {
      icon: o.d3s,
      description: l.intl.string(l.t.rjFOZ2),
      color: i.Z.unsafe_rawColors.RED_400.css,
      tooltip: l.intl.string(l.t.PanA4J)
    }
  } [n];
  return (0, r.jsxs)("div", {
    className: c.emojiErrorItem,
    children: [(0, r.jsx)(d, {
      className: c.fileIcon,
      color: i.Z.unsafe_rawColors.PRIMARY_300.css
    }), (0, r.jsxs)("div", {
      className: c.fileInfo,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        className: c.fileName,
        children: u
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: f
      })]
    }), (0, r.jsx)(a.u, {
      asContainer: true,
      position: "right",
      text: _,
      children: (0, r.jsx)(o.Mgn, {
        size: "custom",
        width: 20,
        height: 20,
        color: p
      })
    })]
  })
}