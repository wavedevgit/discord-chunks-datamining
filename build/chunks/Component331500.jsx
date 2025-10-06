/** Chunk was on 85683 **/
/** chunk id: 331500, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var r, a, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk744993 = require("./744993.js"),
  Chunk693587 = require("./693587.js"),
  Chunk567225 = require("./567225.jsx"),
  Chunk678328 = require("./678328.jsx"),
  Chunk809741 = require("./809741.jsx"),
  Chunk473682 = require("./473682.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk134977 = require("./134977.js");
let O = (r = function(e) {
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
}({}, Chunk473682.T9), a = a = {
  initialStep: Chunk473682.Vb.SERVER_SETTINGS
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

function h(e) {
  let {
    guildId: n
  } = e;
  o.useEffect(() => {
    (0, b.po)(n)
  }, [n]);
  let t = (0, d.e7)([g.Z], () => g.Z.getStateForGuild(n)),
    {
      catalog: r,
      instances: a
    } = o.useMemo(() => {
      var e, n;
      return {
        catalog: Object.values(null != (e = null == t ? true : t.catalog) ? e : {}),
        instances: Object.values(null != (n = null == t ? true : t.instances) ? n : {})
      }
    }, [null == t ? true : t.catalog, null == t ? true : t.instances]),
    s = a.length >= v.zI;
  return 0 === r.length ? (0, i.jsx)("div", {
    className: y.container,
    children: (0, i.jsx)(u.$jN, {
      type: u.RAz.SPINNING_CIRCLE,
      className: y.spinner
    })
  }) : (0, i.jsxs)("div", {
    className: y.container,
    children: [(0, i.jsx)(c.X6q, {
      className: y.heading,
      variant: "heading-md/semibold",
      children: _.intl.string(j.default.DG1SHB)
    }), s && (0, i.jsx)("div", {
      className: y.maxInstancesWarning,
      children: (0, i.jsx)(x.Y, {})
    }), (0, i.jsx)(c.zJl, {
      className: l()(y.gameContainerWrapper, {
        [y.disabled]: s
      }),
      children: (0, i.jsx)("div", {
        className: y.gameContainer,
        children: r.map((e, t) => (0, i.jsx)(f.Z, {
          game: e,
          onClick: () => (0, p.Z)({
            guildId: n,
            stepConfig: O,
            initialPortkeyGame: e,
            analyticsLocation: m.Z.PORTKEY_OVERVIEW
          }),
          imageClassName: y.image,
          titleClassName: y.title,
          disabled: s
        }, "sidebar-game-".concat(t, "-").concat(e.id)))
      })
    })]
  })
}