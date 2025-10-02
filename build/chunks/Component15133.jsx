/** Chunk was on 85683 **/
/** chunk id: 15133, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => v
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
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk828843 = require("./828843.js");

function v(e) {
  var n;
  let {
    guildId: t
  } = e;
  r.useEffect(() => {
    (0, u.EC)(t), c.Z.getDetectableGames()
  }, [t]);
  let v = (0, d.Z)(t),
    j = (0, s.e7)([b.Z], () => b.Z.getStateForGuild(t)),
    _ = Object.values(null != (n = null == j ? true : j.instances) ? n : {});
  return (0, a.jsxs)("div", {
    className: p.container,
    children: [(0, a.jsxs)(l.ZP, {
      className: p.toolbar,
      toolbar: (0, a.jsx)("div", {}),
      children: [(0, a.jsx)(l.ZP.Icon, {
        icon: i.$Eu,
        "aria-label": ""
      }), (0, a.jsx)(l.ZP.Title, {
        children: x.intl.string(f.default.lH9Dio)
      }), (0, a.jsx)(o.IGR, {
        disableColor: true,
        text: x.intl.string(x.t.oW0eUV),
        className: p.badge
      })]
    }), (0, a.jsxs)("div", {
      className: p.contentContainer,
      children: [(null == j ? true : j.instances) != null ? (0, a.jsx)(o.zJl, {
        className: p.gameContainerWrapper,
        children: (0, a.jsx)("div", {
          className: p.gameContainer,
          children: _.map((e, n) => (0, a.jsx)(m.Z, {
            guildId: t,
            instance: e
          }, "".concat(e.gameId, "-").concat(n)))
        })
      }) : (0, a.jsx)("div", {
        className: p.spinnerContainer,
        children: (0, a.jsx)(o.$jN, {
          type: o.RAz.SPINNING_CIRCLE
        })
      }), v && (0, a.jsx)(g.Z, {
        guildId: t
      })]
    })]
  })
}