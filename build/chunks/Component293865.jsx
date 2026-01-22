/** Chunk was on 33957 **/
/** chunk id: 293865, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk57991 = require("./57991.jsx"),
  Chunk961973 = require("./961973.js"),
  Chunk997509 = require("./997509.js"),
  Chunk855687 = require("./855687.js"),
  Chunk576705 = require("./576705.js"),
  Chunk486020 = require("./486020.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk574885 = require("./574885.js"),
  Chunk66087 = require("./66087.js"),
  Chunk540725 = require("./540725.js");

function y(e) {
  let {
    guild: n
  } = e, {
    variant: l,
    icon: a,
    text: r
  } = n.features.has(g.GuildFeatures.BANNER) ? {
    variant: "overlay-secondary",
    icon: c.XGR,
    text: j.intl.string(j.t.b0y3DL)
  } : {
    variant: "expressive",
    icon: c._Jp,
    text: j.intl.string(j.t["+7XY31"])
  };
  return (0, t.jsx)("div", {
    className: A.SY,
    children: (0, t.jsx)(c.Button, {
      variant: l,
      icon: a,
      text: r,
      onClick: () => {
        h.A.open(n.id, g.BEX.ONBOARDING, true, g.nd0.SERVER_GUIDE)
      }
    })
  })
}
let N = Chunk64700.memo(function(e) {
  let n, {
      guild: r,
      titleClassName: h
    } = e,
    {
      homeHeaderImage: N,
      isHomeHeaderImageSet: O
    } = {
      homeHeaderImage: n = a.useMemo(() => null == r ? null : x.Ay.getGuildHomeHeaderURL({
        id: r.id,
        homeHeader: r.homeHeader
      }), [r]),
      isHomeHeaderImageSet: null != n,
      homeHeaderScroll: 200 * (null != n)
    },
    I = (0, f.A2)(r.id),
    C = (0, s.bG)([m.A], () => (0, b.K)(m.A, r)),
    _ = (0, d.Ay)();
  return (0, t.jsxs)("div", {
    className: A.wx,
    children: [(0, t.jsxs)("div", {
      className: A.w5,
      children: [(0, t.jsx)("div", {
        className: i()(A.NC, {
          [A.KN]: !O
        }),
        style: {
          backgroundImage: "url(".concat(O ? N : "dark" === _ ? p : v, ")")
        }
      }), I && (0, t.jsx)(y, {
        guild: r
      })]
    }), (0, t.jsx)("div", {
      className: A.oB,
      children: (0, t.jsxs)("div", {
        className: h,
        children: [(0, t.jsx)(o.A, {
          className: A.nr,
          guild: r,
          size: o.A.Sizes.XLARGE,
          active: true
        }), (0, t.jsx)(c.Fmo, {
          children: (0, t.jsxs)("div", {
            className: A.Bv,
            children: [(0, t.jsx)(c.Heading, {
              className: A.Bv,
              variant: "heading-xxl/bold",
              children: r.name
            }), (0, t.jsx)(u.A, {
              size: 24,
              guild: r,
              tooltipPosition: "bottom",
              tooltipColor: c.STz.Colors.PRIMARY
            }), C && (0, t.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: A.ak,
              children: (0, t.jsx)(c.Button, {
                variant: "secondary",
                text: j.intl.string(j.t.VINpSK),
                onClick: () => (0, c.mMO)(async () => {
                  let {
                    default: e
                  } = await Promise.all([l.e("43600"), l.e("65202")]).then(l.bind(l, 234355));
                  return n => {
                    var l, a;
                    return (0, t.jsx)(e, (l = function(e) {
                      for (var n = 1; n < arguments.length; n++) {
                        var l = null != arguments[n] ? arguments[n] : {},
                          t = Object.keys(l);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
                          return Object.getOwnPropertyDescriptor(l, e).enumerable
                        }))), t.forEach(function(n) {
                          var t;
                          t = l[n], n in e ? Object.defineProperty(e, n, {
                            value: t,
                            enumerable: true,
                            configurable: true,
                            writable: true
                          }) : e[n] = t
                        })
                      }
                      return e
                    }({}, n), a = a = {
                      guild: r,
                      source: g.PE1.GUILD_HOME
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, n) {
                      var l = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        l.push.apply(l, t)
                      }
                      return l
                    })(Object(a)).forEach(function(e) {
                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
                    }), l))
                  }
                })
              })
            })]
          })
        })]
      })
    })]
  })
})