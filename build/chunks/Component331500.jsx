/** Chunk was on 85683 **/
/** chunk id: 331500, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var r, a, Chunk951288 = require("./951288.js"),
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
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197530 = require("./197530.js");
let v = (r = function(e) {
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
}({}, Chunk473682.T9), a = a = {
  initialStep: Chunk473682.Vb.SERVER_SETTINGS
}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n.push.apply(n, r)
  }
  return n
})(Object(a)).forEach(function(e) {
  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
}), r);

function O(e) {
  let {
    guildId: t
  } = e;
  s.useEffect(() => {
    (0, u.po)(t)
  }, [t]);
  let n = (0, o.Wu)([m.Z], () => {
    let e = m.Z.getStateForGuild(t);
    return (null == e ? true : e.catalog) != null ? Object.values(e.catalog) : []
  });
  return 0 === n.length ? (0, i.jsx)("div", {
    className: x.container,
    children: (0, i.jsx)(l.$jN, {
      type: l.RAz.SPINNING_CIRCLE,
      className: x.spinner
    })
  }) : (0, i.jsxs)("div", {
    className: x.container,
    children: [(0, i.jsx)(c.X6q, {
      className: x.heading,
      variant: "heading-md/semibold",
      children: g.intl.string(j.default.jeYp1t)
    }), (0, i.jsx)(c.zJl, {
      className: x.gameContainerWrapper,
      children: (0, i.jsx)("div", {
        className: x.gameContainer,
        children: n.map((e, n) => (0, i.jsx)(b.Z, {
          className: x.game,
          game: e,
          onClick: () => (0, p.Z)({
            guildId: t,
            stepConfig: v,
            initialPortkeyGame: e,
            analyticsLocation: d.Z.PORTKEY_OVERVIEW
          }),
          imageClassName: x.image
        }, "sidebar-game-".concat(n, "-").concat(e.id)))
      })
    })]
  })
}