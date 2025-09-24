/** Chunk was on 85683 **/
/** chunk id: 15133, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk639777 = require("./639777.js"),
  Chunk744993 = require("./744993.js"),
  Chunk693587 = require("./693587.js"),
  Chunk462923 = require("./462923.jsx"),
  Chunk331500 = require("./331500.jsx"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk828843 = require("./828843.js");

function p(e) {
  var n;
  let {
    guildId: t
  } = e;
  r.useEffect(() => {
    (0, d.EC)(t)
  }, [t]);
  let p = (0, l.Z)(t),
    j = (0, o.e7)([u.Z], () => u.Z.getStateForGuild(t)),
    v = Object.values(null != (n = null == j ? true : j.instances) ? n : {});
  return (0, a.jsxs)("div", {
    className: x.container,
    children: [(0, a.jsxs)(c.ZP, {
      className: x.toolbar,
      toolbar: (0, a.jsx)("div", {}),
      children: [(0, a.jsx)(c.ZP.Icon, {
        icon: i.$Eu,
        "aria-label": ""
      }), (0, a.jsx)(c.ZP.Title, {
        children: f.intl.string(g.default.lH9Dio)
      })]
    }), (0, a.jsxs)("div", {
      className: x.contentContainer,
      children: [(null == j ? true : j.instances) != null ? (0, a.jsx)(s.zJl, {
        className: x.gameContainerWrapper,
        children: (0, a.jsx)("div", {
          className: x.gameContainer,
          children: v.map((e, n) => (0, a.jsx)(b.Z, {
            guildId: t,
            instance: e
          }, "".concat(e.gameId, "-").concat(n)))
        })
      }) : (0, a.jsx)("div", {
        className: x.spinnerContainer,
        children: (0, a.jsx)(s.$jN, {
          type: s.RAz.SPINNING_CIRCLE
        })
      }), p && (0, a.jsx)(m.Z, {
        guildId: t
      })]
    })]
  })
}