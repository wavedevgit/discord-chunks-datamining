/** Chunk was on 33957 **/
/** chunk id: 293865, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  A: () => y
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

function v(e) {
  let {
    guild: n
  } = e, {
    variant: l,
    icon: r,
    text: a
  } = n.features.has(b.GuildFeatures.BANNER) ? {
    variant: "overlay-secondary",
    icon: c.XGR,
    text: j.intl.string(j.t.b0y3DL)
  } : {
    variant: "expressive",
    icon: c._Jp,
    text: j.intl.string(j.t["+7XY31"])
  };
  return (0, t.jsx)("div", {
    className: p.SY,
    children: (0, t.jsx)(c.Button, {
      variant: l,
      icon: r,
      text: a,
      onClick: () => {
        h.A.open(n.id, b.BEX.ONBOARDING, true, b.nd0.SERVER_GUIDE)
      }
    })
  })
}
let y = Chunk64700.memo(function(e) {
  let n, {
      guild: a,
      titleClassName: h
    } = e,
    {
      homeHeaderImage: y,
      isHomeHeaderImageSet: I
    } = {
      homeHeaderImage: n = r.useMemo(() => null == a ? null : x.Ay.getGuildHomeHeaderURL({
        id: a.id,
        homeHeader: a.homeHeader
      }), [a]),
      isHomeHeaderImageSet: null != n,
      homeHeaderScroll: 200 * (null != n)
    },
    N = (0, m.A2)(a.id),
    C = (0, s.bG)([g.A], () => (0, f.K)(g.A, a)),
    O = (0, o.Ay)();
  return (0, t.jsxs)("div", {
    className: p.wx,
    children: [(0, t.jsxs)("div", {
      className: p.w5,
      children: [(0, t.jsx)("div", {
        className: i()(p.NC, {
          [p.KN]: !I
        }),
        style: {
          backgroundImage: "url(".concat(I ? y : "dark" === O ? A : _, ")")
        }
      }), N && (0, t.jsx)(v, {
        guild: a
      })]
    }), (0, t.jsx)("div", {
      className: p.oB,
      children: (0, t.jsxs)("div", {
        className: h,
        children: [(0, t.jsx)(d.A, {
          className: p.nr,
          guild: a,
          size: d.A.Sizes.XLARGE,
          active: true
        }), (0, t.jsx)(c.Fmo, {
          children: (0, t.jsxs)("div", {
            className: p.Bv,
            children: [(0, t.jsx)(c.Heading, {
              className: p.Bv,
              variant: "heading-xxl/bold",
              children: a.name
            }), (0, t.jsx)(u.A, {
              size: 24,
              guild: a,
              tooltipPosition: "bottom",
              tooltipColor: c.STz.Colors.PRIMARY
            }), C && (0, t.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: p.ak,
              children: (0, t.jsx)(c.Button, {
                variant: "secondary",
                text: j.intl.string(j.t.VINpSK),
                onClick: () => (0, c.mMO)(async () => {
                  let {
                    default: e
                  } = await Promise.all([l.e("43600"), l.e("65202")]).then(l.bind(l, 234355));
                  return n => {
                    var l, r;
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
                    }({}, n), r = r = {
                      guild: a,
                      source: b.PE1.GUILD_HOME
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
                      var l = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        l.push.apply(l, t)
                      }
                      return l
                    })(Object(r)).forEach(function(e) {
                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e))
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