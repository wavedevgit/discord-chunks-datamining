/** Chunk was on 62934 **/
/** chunk id: 546303, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var a, r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk160589 = require("./160589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk468678 = require("./468678.js");
let h = (a = function(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      a = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), a.forEach(function(n) {
      var a;
      a = t[n], n in e ? Object.defineProperty(e, n, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = a
    })
  }
  return e
}({}, Chunk619733.IX), r = r = {
  initialStep: Chunk619733.EK.SERVER_SETTINGS
}, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t.push.apply(t, a)
  }
  return t
})(Object(r)).forEach(function(e) {
  Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(r, e))
}), a);

function C(e) {
  let {
    guildId: n
  } = e;
  l.useEffect(() => {
    (0, u.ce)(n)
  }, [n]);
  let t = (0, o.e7)([m.Z], () => m.Z.getStateForGuild(n)),
    {
      catalog: a,
      instances: r
    } = l.useMemo(() => {
      var e, n;
      return {
        catalog: Object.values(null != (e = null == t ? true : t.catalog) ? e : {}),
        instances: Object.values(null != (n = null == t ? true : t.instances) ? n : {})
      }
    }, [null == t ? true : t.catalog, null == t ? true : t.instances]),
    C = r.length >= x.YX;
  return 0 === a.length ? (0, i.jsx)("div", {
    className: p.container,
    children: (0, i.jsx)(c.$jN, {
      type: c.RAz.SPINNING_CIRCLE,
      className: p.spinner
    })
  }) : (0, i.jsxs)("div", {
    className: p.container,
    children: [(0, i.jsx)(s.X6q, {
      className: p.heading,
      variant: "heading-md/semibold",
      children: j.intl.string(v.default["3vWDMz"])
    }), C && (0, i.jsx)("div", {
      className: p.maxInstancesWarning,
      children: (0, i.jsx)(f.C, {})
    }), (0, i.jsx)(s.zJl, {
      className: p.gameContainerWrapper,
      children: (0, i.jsx)("div", {
        className: p.gameContainer,
        children: a.map((e, t) => (0, i.jsx)(g.Z, {
          guildId: n,
          game: e,
          onClick: () => (0, b.Z)({
            guildId: n,
            stepConfig: h,
            initialGameServerGame: e,
            analyticsLocation: d.Z.GAME_SERVER_PAGE_SIDEBAR
          }),
          imageClassName: p.image,
          titleClassName: p.title,
          disabled: C,
          location: d.Z.GAME_SERVER_PAGE_SIDEBAR
        }, "sidebar-game-".concat(t, "-").concat(e.id)))
      })
    })]
  })
}