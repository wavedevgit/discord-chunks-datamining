/** Chunk was on web.js **/
/** chunk id: 859428, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk990186 = require("./990186.js"),
  Chunk226910 = require("./226910.js");
let b = () => {
  let e = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId(), []),
    t = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(module), [module]),
    [n, a] = Chunk647438.useState(false);
  if (null == exports) return null;
  let b = () => {
      (0, Chunk703656.s1)().goBack()
    },
    y = async () => {
      Chunk120356(true);
      try {
        Chunk900849.mT(exports.id), await Chunk749210.Z.joinGuild(exports.id, {
          source: Chunk981631.vtS.NOTICE_BAR
        })
      } catch (e) {
        Chunk120356(false)
      }
    };
  return (0, Chunk951288.jsxs)("div", {
    className: o()(Chunk990186.notice, Chunk226910.notice),
    children: [(0, Chunk951288.jsxs)(Chunk755721.zx, {
      look: Chunk755721.zx.Looks.OUTLINED,
      color: Chunk755721.zx.Colors.WHITE,
      size: Chunk755721.zx.Sizes.NONE,
      className: o()(Chunk990186.button, Chunk990186.back),
      innerClassName: Chunk990186.iconButton,
      onClick: b,
      children: [(0, Chunk951288.jsx)(Chunk481060.whL, {
        size: "xs",
        color: "currentColor",
        className: Chunk990186.arrow
      }), Chunk388032.intl.string(Chunk388032.t["13/7kX"])]
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk990186.header,
      variant: "text-sm/normal",
      children: Chunk388032.intl.string(Chunk388032.t["N/y2WE"])
    }), (0, Chunk951288.jsx)(Chunk755721.zx, {
      className: Chunk990186.button,
      look: Chunk755721.zx.Looks.OUTLINED,
      color: Chunk755721.zx.Colors.WHITE,
      size: Chunk755721.zx.Sizes.NONE,
      submitting: require,
      onClick: y,
      children: Chunk388032.intl.format(Chunk388032.t.uHN7ny, {
        guild: exports.name
      })
    })]
  })
}