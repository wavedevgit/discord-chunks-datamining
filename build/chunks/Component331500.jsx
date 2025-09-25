/** Chunk was on 85683 **/
/** chunk id: 331500, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var a, r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
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
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197530 = require("./197530.js");
let y = (a = function(e) {
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
}({}, Chunk473682.T9), r = r = {
  initialStep: Chunk473682.Vb.SERVER_SETTINGS
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

function O(e) {
  let {
    guildId: n
  } = e;
  o.useEffect(() => {
    (0, m.po)(n)
  }, [n]);
  let t = (0, d.e7)([g.Z], () => g.Z.getStateForGuild(n)),
    {
      catalog: a,
      instances: r
    } = o.useMemo(() => {
      var e, n;
      return {
        catalog: Object.values(null != (e = null == t ? true : t.catalog) ? e : {}),
        instances: Object.values(null != (n = null == t ? true : t.instances) ? n : {})
      }
    }, [null == t ? true : t.catalog, null == t ? true : t.instances]),
    s = r.length >= j.zI;
  return 0 === a.length ? (0, i.jsx)("div", {
    className: h.container,
    children: (0, i.jsx)(u.$jN, {
      type: u.RAz.SPINNING_CIRCLE,
      className: h.spinner
    })
  }) : (0, i.jsxs)("div", {
    className: h.container,
    children: [(0, i.jsx)(l.X6q, {
      className: h.heading,
      variant: "heading-md/semibold",
      children: _.intl.string(v.default.jeYp1t)
    }), s && (0, i.jsx)("div", {
      className: h.maxInstancesWarning,
      children: (0, i.jsx)(x.Y, {})
    }), (0, i.jsx)(l.zJl, {
      className: c()(h.gameContainerWrapper, {
        [h.disabled]: s
      }),
      children: (0, i.jsx)("div", {
        className: h.gameContainer,
        children: a.map((e, t) => (0, i.jsx)(f.Z, {
          className: h.game,
          game: e,
          onClick: () => (0, p.Z)({
            guildId: n,
            stepConfig: y,
            initialPortkeyGame: e,
            analyticsLocation: b.Z.PORTKEY_OVERVIEW
          }),
          imageClassName: h.image,
          disabled: s
        }, "sidebar-game-".concat(t, "-").concat(e.id)))
      })
    })]
  })
}