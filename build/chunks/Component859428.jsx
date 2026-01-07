/** Chunk was on web.js **/
/** chunk id: 859428, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk703656 = require("./703656.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk900849 = require("./900849.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk510093 = require("./510093.js"),
  Chunk99940 = require("./99940.js");
let b = () => {
  let e = (0, s.e7)([p.Z], () => p.Z.getGuildId(), []),
    t = (0, s.e7)([f.Z], () => f.Z.getGuild(e), [e]),
    [n, a] = i.useState(false);
  if (null == t) return null;
  let b = () => {
      (0, d.s1)().goBack()
    },
    y = async () => {
      a(true);
      try {
        _.mT(t.id), await u.Z.joinGuild(t.id, {
          source: m.vtS.NOTICE_BAR
        })
      } catch (e) {
        a(false)
      }
    };
  return (0, r.jsxs)("div", {
    className: o()(g.notice, E.notice),
    children: [(0, r.jsxs)(l.zx, {
      look: l.zx.Looks.OUTLINED,
      color: l.zx.Colors.WHITE,
      size: l.zx.Sizes.NONE,
      className: o()(g.button, g.back),
      innerClassName: g.iconButton,
      onClick: b,
      children: [(0, r.jsx)(c.whL, {
        size: "xs",
        color: "currentColor",
        className: g.arrow
      }), h.intl.string(h.t["13/7kX"])]
    }), (0, r.jsx)(c.Text, {
      className: g.header,
      variant: "text-sm/normal",
      children: h.intl.string(h.t["N/y2WE"])
    }), (0, r.jsx)(l.zx, {
      className: g.button,
      look: l.zx.Looks.OUTLINED,
      color: l.zx.Colors.WHITE,
      size: l.zx.Sizes.NONE,
      submitting: n,
      onClick: y,
      children: h.intl.format(h.t.uHN7ny, {
        guild: t.name
      })
    })]
  })
}