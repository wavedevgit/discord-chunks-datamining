/** Chunk was on 62934 **/
/** chunk id: 546303, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var r, a, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk905551 = require("./905551.js"),
  Chunk60482 = require("./60482.js"),
  Chunk858594 = require("./858594.jsx"),
  Chunk899789 = require("./899789.jsx"),
  Chunk735276 = require("./735276.jsx"),
  Chunk619733 = require("./619733.js"),
  Chunk470658 = require("./470658.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk62525 = require("./62525.js");
let y = (r = function(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = r
    })
  }
  return e
}({}, Chunk619733.IX), a = a = {
  initialStep: Chunk619733.EK.SERVER_SETTINGS
}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t.push.apply(t, r)
  }
  return t
})(Object(a)).forEach(function(e) {
  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
}), r);

function C(e) {
  let {
    guildId: n
  } = e;
  s.useEffect(() => {
    (0, g.ce)(n)
  }, [n]);
  let t = (0, d.e7)([f.Z], () => f.Z.getStateForGuild(n)),
    {
      catalog: r,
      instances: a
    } = s.useMemo(() => {
      var e, n;
      return {
        catalog: Object.values(null != (e = null == t ? true : t.catalog) ? e : {}),
        instances: Object.values(null != (n = null == t ? true : t.instances) ? n : {})
      }
    }, [null == t ? true : t.catalog, null == t ? true : t.instances]),
    o = a.length >= v.YX;
  return 0 === r.length ? (0, i.jsx)("div", {
    className: h.container,
    children: (0, i.jsx)(u.$jN, {
      type: u.RAz.SPINNING_CIRCLE,
      className: h.spinner
    })
  }) : (0, i.jsxs)("div", {
    className: h.container,
    children: [(0, i.jsx)(c.X6q, {
      className: h.heading,
      variant: "heading-md/semibold",
      children: j.intl.string(p.default["3vWDMz"])
    }), o && (0, i.jsx)("div", {
      className: h.maxInstancesWarning,
      children: (0, i.jsx)(_.C, {})
    }), (0, i.jsx)(c.zJl, {
      className: l()(h.gameContainerWrapper, {
        [h.disabled]: o
      }),
      children: (0, i.jsx)("div", {
        className: h.gameContainer,
        children: r.map((e, t) => (0, i.jsx)(x.Z, {
          game: e,
          onClick: () => (0, b.Z)({
            guildId: n,
            stepConfig: y,
            initialGameServerGame: e,
            analyticsLocation: m.Z.GAME_SERVER_OVERVIEW
          }),
          imageClassName: h.image,
          titleClassName: h.title,
          disabled: o
        }, "sidebar-game-".concat(t, "-").concat(e.id)))
      })
    })]
  })
}