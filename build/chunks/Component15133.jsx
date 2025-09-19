/** Chunk was on 85683 **/
/** chunk id: 15133, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => g
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

function g(e) {
  let {
    guildId: t
  } = e;
  a.useEffect(() => {
    (0, u.EC)(t)
  }, [t]);
  let n = (0, l.Z)(t),
    g = (0, s.e7)([d.Z], () => d.Z.getStateForGuild(t)),
    x = a.useMemo(() => (null == g ? true : g.instances) == null ? [] : Object.values(g.instances), [null == g ? true : g.instances]);
  return (0, r.jsxs)("div", {
    className: j.container,
    children: [(0, r.jsxs)(o.ZP, {
      className: j.toolbar,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(o.ZP.Icon, {
        icon: i.$Eu,
        "aria-label": ""
      }), (0, r.jsx)(o.ZP.Title, {
        children: f.intl.string(p.default.lH9Dio)
      })]
    }), (0, r.jsxs)("div", {
      className: j.contentContainer,
      children: [(null == g ? true : g.instances) != null ? (0, r.jsx)(c.zJl, {
        className: j.gameContainerWrapper,
        children: (0, r.jsx)("div", {
          className: j.gameContainer,
          children: x.map((e, n) => (0, r.jsx)(m.Z, {
            guildId: t,
            instance: e
          }, "".concat(e.gameId, "-").concat(n)))
        })
      }) : (0, r.jsx)("div", {
        className: j.spinnerContainer,
        children: (0, r.jsx)(c.$jN, {
          type: c.RAz.SPINNING_CIRCLE
        })
      }), n && (0, r.jsx)(b.Z, {
        guildId: t
      })]
    })]
  })
}