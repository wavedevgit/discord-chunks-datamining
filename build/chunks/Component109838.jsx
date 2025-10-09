/** Chunk was on 62934 **/
/** chunk id: 109838, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk639777 = require("./639777.js"),
  Chunk905551 = require("./905551.js"),
  Chunk60482 = require("./60482.js"),
  Chunk52021 = require("./52021.jsx"),
  Chunk809121 = require("./809121.jsx"),
  Chunk546303 = require("./546303.jsx"),
  Chunk948208 = require("./948208.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk215365 = require("./215365.js");

function p(e) {
  var n;
  let {
    guildId: t
  } = e;
  a.useEffect(() => {
    (0, u.mF)(t), l.Z.getDetectableGames()
  }, [t]);
  let p = (0, d.Z)(t),
    j = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(t)),
    h = Object.values(null != (n = null == j ? true : j.instances) ? n : {});
  return (0, r.jsxs)("div", {
    className: v.container,
    children: [(0, r.jsxs)(c.ZP, {
      className: v.toolbar,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(c.ZP.Icon, {
        icon: i.Ucv,
        "aria-label": ""
      }), (0, r.jsx)(c.ZP.Title, {
        children: _.intl.string(b.default.vCzwMz)
      }), (0, r.jsx)(o.IGR, {
        disableColor: true,
        text: _.intl.string(_.t.oW0eUV),
        className: v.badge
      })]
    }), (0, r.jsxs)("div", {
      className: v.contentContainer,
      children: [(null == j ? true : j.instances) != null ? (0, r.jsx)(o.zJl, {
        className: v.gameContainerWrapper,
        children: (0, r.jsxs)("div", {
          className: v.gameContainer,
          children: [h.map((e, n) => (0, r.jsx)(f.ZP, {
            guildId: t,
            instance: e
          }, "".concat(e.gameId, "-").concat(n))), (0, r.jsx)(g.Z, {})]
        })
      }) : (0, r.jsx)("div", {
        className: v.spinnerContainer,
        children: (0, r.jsx)(o.$jN, {
          type: o.RAz.SPINNING_CIRCLE
        })
      }), p && (0, r.jsx)(x.Z, {
        guildId: t
      })]
    })]
  })
}