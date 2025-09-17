/** Chunk was on 85683 **/
/** chunk id: 331500, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var r, i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk744993 = require("./744993.js"),
  Chunk693587 = require("./693587.js"),
  Chunk567225 = require("./567225.jsx"),
  Chunk809741 = require("./809741.jsx"),
  Chunk473682 = require("./473682.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk134977 = require("./134977.js");
let C = (r = function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}({}, Chunk473682.T9), i = i = {
  initialStep: Chunk473682.Vb.SERVER_SETTINGS
}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n.push.apply(n, r)
  }
  return n
})(Object(i)).forEach(function(e) {
  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
}), r);

function j(e) {
  let {
    guildId: t
  } = e;
  o.useEffect(() => {
    (0, u.po)(t)
  }, [t]);
  let n = (0, l.Wu)([m.Z], () => {
    let e = m.Z.getStateForGuild(t);
    return (null == e ? true : e.catalog) != null ? Object.values(e.catalog) : []
  });
  return 0 === n.length ? (0, a.jsx)("div", {
    className: y.container,
    children: (0, a.jsx)(c.$jN, {
      type: c.RAz.SPINNING_CIRCLE,
      className: y.spinner
    })
  }) : (0, a.jsxs)("div", {
    className: y.container,
    children: [(0, a.jsx)(s.X6q, {
      variant: "heading-md/semibold",
      children: v.intl.string(f.default.jeYp1t)
    }), (0, a.jsx)("div", {
      className: y.gameContainer,
      children: n.map((e, n) => (0, a.jsx)(p.Z, {
        className: y.game,
        game: e,
        onClick: () => (0, g.Z)({
          guildId: t,
          stepConfig: C,
          initialPortkeyGame: e,
          analyticsLocation: d.Z.PORTKEY_OVERVIEW
        }),
        imageClassName: y.image
      }, "sidebar-game-".concat(n, "-").concat(e.id)))
    })]
  })
}