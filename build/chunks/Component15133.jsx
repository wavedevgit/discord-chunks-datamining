/** Chunk was on 85683 **/
/** chunk id: 15133, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => v
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

function v(e) {
  let {
    guildId: t
  } = e;
  i.useEffect(() => {
    (0, d.EC)(t)
  }, [t]);
  let n = (0, c.Z)(t),
    v = (0, o.e7)([u.Z], () => u.Z.getStateForGuild(t)),
    y = i.useMemo(() => (null == v ? true : v.instances) == null ? [] : Object.values(v.instances), [null == v ? true : v.instances]);
  return (0, r.jsxs)("div", {
    className: f.container,
    children: [(0, r.jsxs)(l.ZP, {
      className: f.toolbar,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(l.ZP.Icon, {
        icon: a.$Eu,
        "aria-label": ""
      }), (0, r.jsx)(l.ZP.Title, {
        children: b.intl.string(g.default.lH9Dio)
      })]
    }), (0, r.jsxs)("div", {
      className: f.contentContainer,
      children: [(null == v ? true : v.instances) != null ? (0, r.jsx)("div", {
        className: f.gameContainer,
        children: y.map((e, n) => (0, r.jsx)(m.Z, {
          guildId: t,
          instance: e
        }, "".concat(e.gameId, "-").concat(n)))
      }) : (0, r.jsx)("div", {
        className: f.spinnerContainer,
        children: (0, r.jsx)(s.$jN, {
          type: s.RAz.SPINNING_CIRCLE
        })
      }), n && (0, r.jsx)(p.Z, {
        guildId: t
      })]
    })]
  })
}