/** Chunk was on 85683 **/
/** chunk id: 15133, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk639777 = require("./639777.js"),
  Chunk744993 = require("./744993.js"),
  Chunk693587 = require("./693587.js"),
  Chunk682187 = require("./682187.jsx"),
  Chunk462923 = require("./462923.jsx"),
  Chunk331500 = require("./331500.jsx"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk828843 = require("./828843.js");

function j(e) {
  var n;
  let {
    guildId: t
  } = e;
  a.useEffect(() => {
    (0, u.EC)(t), o.Z.getDetectableGames()
  }, [t]);
  let j = (0, d.Z)(t),
    _ = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(t)),
    h = Object.values(null != (n = null == _ ? true : _.instances) ? n : {});
  return (0, r.jsxs)("div", {
    className: v.container,
    children: [(0, r.jsxs)(c.ZP, {
      className: v.toolbar,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(c.ZP.Icon, {
        icon: i.Ucv,
        "aria-label": ""
      }), (0, r.jsx)(c.ZP.Title, {
        children: p.intl.string(x.default.lH9Dio)
      }), (0, r.jsx)(l.IGR, {
        disableColor: true,
        text: p.intl.string(p.t.oW0eUV),
        className: v.badge
      })]
    }), (0, r.jsxs)("div", {
      className: v.contentContainer,
      children: [(null == _ ? true : _.instances) != null ? (0, r.jsx)(l.zJl, {
        className: v.gameContainerWrapper,
        children: (0, r.jsxs)("div", {
          className: v.gameContainer,
          children: [h.map((e, n) => (0, r.jsx)(b.ZP, {
            guildId: t,
            instance: e
          }, "".concat(e.gameId, "-").concat(n))), (0, r.jsx)(g.Z, {})]
        })
      }) : (0, r.jsx)("div", {
        className: v.spinnerContainer,
        children: (0, r.jsx)(l.$jN, {
          type: l.RAz.SPINNING_CIRCLE
        })
      }), j && (0, r.jsx)(f.Z, {
        guildId: t
      })]
    })]
  })
}