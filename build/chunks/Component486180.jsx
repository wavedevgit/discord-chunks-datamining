/** Chunk was on 19750 **/
/** chunk id: 486180, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var r, a, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk665171 = require("./665171.js"),
  Chunk522055 = require("./522055.js"),
  Chunk895770 = require("./895770.jsx"),
  Chunk355609 = require("./355609.jsx"),
  Chunk843095 = require("./843095.jsx"),
  Chunk800007 = require("./800007.js"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk979402 = require("./979402.js");
let b = (r = function(e) {
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
}({}, Chunk800007.ZN), a = a = {
  initialStep: Chunk800007.HS.SERVER_SETTINGS
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

function h(e) {
  let {
    guildId: t
  } = e;
  l.useEffect(() => {
    (0, u.z9)(t)
  }, [t]);
  let n = (0, o.bG)([m.A], () => m.A.getStateForGuild(t)),
    {
      catalog: r,
      instances: a
    } = l.useMemo(() => {
      var e, t;
      return {
        catalog: Object.values(null != (e = null == n ? true : n.catalog) ? e : {}),
        instances: Object.values(null != (t = null == n ? true : n.instances) ? t : {})
      }
    }, [null == n ? true : n.catalog, null == n ? true : n.instances]),
    h = a.length >= x.ZI;
  return 0 === r.length ? (0, i.jsx)("div", {
    className: p.kL,
    children: (0, i.jsx)(c.y$y, {
      type: c.tVU.SPINNING_CIRCLE,
      className: p.u1
    })
  }) : (0, i.jsxs)("div", {
    className: p.kL,
    children: [(0, i.jsx)(s.DZT, {
      className: p.R_,
      variant: "heading-md/semibold",
      children: j.intl.string(v.default["3vWDMz"])
    }), h && (0, i.jsx)("div", {
      className: p.Bq,
      children: (0, i.jsx)(g.k, {})
    }), (0, i.jsx)(s.IpV, {
      className: p.nd,
      children: (0, i.jsx)("div", {
        className: p.Y_,
        children: r.map((e, n) => (0, i.jsx)(f.A, {
          guildId: t,
          game: e,
          onClick: () => (0, _.A)({
            guildId: t,
            stepConfig: b,
            initialGameServerGame: e,
            analyticsLocation: d.A.GAME_SERVER_PAGE_SIDEBAR
          }),
          imageClassName: p.Sl,
          titleClassName: p.DD,
          disabled: h,
          location: d.A.GAME_SERVER_PAGE_SIDEBAR
        }, "sidebar-game-".concat(n, "-").concat(e.id)))
      })
    })]
  })
}