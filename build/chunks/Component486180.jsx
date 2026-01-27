/** Chunk was on 19750 **/
/** chunk id: 486180, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var r, a, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
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
let h = (r = function(e) {
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

function y(e) {
  let {
    guildId: t
  } = e;
  l.useEffect(() => {
    (0, m.z9)(t)
  }, [t]);
  let n = (0, o.bG)([f.A], () => f.A.getStateForGuild(t)),
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
    y = a.length >= v.ZI;
  return 0 === r.length ? (0, i.jsx)("div", {
    className: b.kL,
    children: (0, i.jsx)(d.y$y, {
      type: d.tVU.SPINNING_CIRCLE,
      className: b.u1
    })
  }) : (0, i.jsxs)("div", {
    className: b.kL,
    children: [(0, i.jsx)(s.DZT, {
      className: b.R_,
      variant: "heading-md/semibold",
      children: p.intl.string(j.default["3vWDMz"])
    }), y && (0, i.jsx)("div", {
      className: b.Bq,
      children: (0, i.jsx)(_.k, {})
    }), (0, i.jsx)(s.IpV, {
      className: b.nd,
      children: (0, i.jsx)("div", {
        className: b.Y_,
        children: r.map((e, n) => (0, i.jsx)(c.m, {
          asContainer: true,
          text: e.disabled ? p.intl.formatToPlainString(j.default.uVpJYf, {
            gameName: e.name
          }) : null,
          position: "top",
          children: (0, i.jsx)(g.A, {
            guildId: t,
            game: e,
            onClick: () => (0, x.A)({
              guildId: t,
              stepConfig: h,
              initialGameServerGame: e,
              analyticsLocation: u.A.GAME_SERVER_PAGE_SIDEBAR
            }),
            imageClassName: b.Sl,
            titleClassName: b.DD,
            disabled: y || e.disabled,
            location: u.A.GAME_SERVER_PAGE_SIDEBAR
          })
        }, "sidebar-game-".concat(n, "-").concat(e.id)))
      })
    })]
  })
}