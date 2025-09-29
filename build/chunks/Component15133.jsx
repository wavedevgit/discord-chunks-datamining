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
  Chunk462923 = require("./462923.jsx"),
  Chunk331500 = require("./331500.jsx"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk50803 = require("./50803.js");

function j(e) {
  var n;
  let {
    guildId: t
  } = e;
  r.useEffect(() => {
    (0, u.EC)(t), l.Z.getDetectableGames()
  }, [t]);
  let j = (0, d.Z)(t),
    v = (0, s.e7)([b.Z], () => b.Z.getStateForGuild(t)),
    _ = Object.values(null != (n = null == v ? true : v.instances) ? n : {});
  return (0, a.jsxs)("div", {
    className: x.container,
    children: [(0, a.jsxs)(c.ZP, {
      className: x.toolbar,
      toolbar: (0, a.jsx)("div", {}),
      children: [(0, a.jsx)(c.ZP.Icon, {
        icon: i.$Eu,
        "aria-label": ""
      }), (0, a.jsx)(c.ZP.Title, {
        children: p.intl.string(f.default.lH9Dio)
      }), (0, a.jsx)(o.IGR, {
        disableColor: true,
        text: p.intl.string(p.t.oW0eUV),
        className: x.badge
      })]
    }), (0, a.jsxs)("div", {
      className: x.contentContainer,
      children: [(null == v ? true : v.instances) != null ? (0, a.jsx)(o.zJl, {
        className: x.gameContainerWrapper,
        children: (0, a.jsx)("div", {
          className: x.gameContainer,
          children: _.map((e, n) => (0, a.jsx)(m.Z, {
            guildId: t,
            instance: e
          }, "".concat(e.gameId, "-").concat(n)))
        })
      }) : (0, a.jsx)("div", {
        className: x.spinnerContainer,
        children: (0, a.jsx)(o.$jN, {
          type: o.RAz.SPINNING_CIRCLE
        })
      }), j && (0, a.jsx)(g.Z, {
        guildId: t
      })]
    })]
  })
}