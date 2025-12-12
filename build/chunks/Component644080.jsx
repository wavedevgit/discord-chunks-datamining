/** Chunk was on 12009 **/
/** chunk id: 644080, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk523751 = require("./523751.jsx"),
  Chunk637853 = require("./637853.js"),
  Chunk434404 = require("./434404.js"),
  Chunk159300 = require("./159300.js"),
  Chunk496675 = require("./496675.js"),
  Chunk768581 = require("./768581.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk622197 = require("./622197.js"),
  Chunk63190 = require("./63190.js"),
  Chunk102219 = require("./102219.js");

function Z(e) {
  let {
    guild: n
  } = e, {
    variant: t,
    icon: l,
    text: r
  } = n.features.has(x.GuildFeatures.BANNER) ? {
    variant: "overlay-secondary",
    icon: s.FmF,
    text: p.intl.string(p.t.b0y3DL)
  } : {
    variant: "expressive",
    icon: s.Ucv,
    text: p.intl.string(p.t["+7XY31"])
  };
  return (0, a.jsx)("div", {
    className: j.editButtonContainer,
    children: (0, a.jsx)(s.Button, {
      variant: t,
      icon: l,
      text: r,
      onClick: () => {
        h.Z.open(n.id, x.pNK.ONBOARDING, true, x.KsC.SERVER_GUIDE)
      }
    })
  })
}
let I = Chunk473749.memo(function(e) {
  let {
    guild: n,
    titleClassName: r
  } = e, {
    homeHeaderImage: h,
    isHomeHeaderImageSet: I
  } = (e => {
    let n = l.useMemo(() => null == e ? null : b.ZP.getGuildHomeHeaderURL({
      id: e.id,
      homeHeader: e.homeHeader
    }), [e]);
    return {
      homeHeaderImage: n,
      isHomeHeaderImageSet: null != n,
      homeHeaderScroll: 200 * (null != n)
    }
  })(n), N = (0, m.b$)(n.id), y = (0, c.e7)([g.Z], () => (0, f.b)(g.Z, n)), O = (0, d.ZP)();
  return (0, a.jsxs)("div", {
    className: j.header,
    children: [(0, a.jsxs)("div", {
      className: j.headerArtWrapper,
      children: [(0, a.jsx)("div", {
        className: i()(j.headerArt, {
          [j.headerArtPlaceholder]: !I
        }),
        style: {
          backgroundImage: "url(".concat(I ? h : "dark" === O ? C : v, ")")
        }
      }), N && (0, a.jsx)(Z, {
        guild: n
      })]
    }), (0, a.jsx)("div", {
      className: j.titleWrapper,
      children: (0, a.jsxs)("div", {
        className: r,
        children: [(0, a.jsx)(o.Z, {
          className: j.headerIcon,
          guild: n,
          size: o.Z.Sizes.XLARGE,
          active: true
        }), (0, a.jsx)(s.y5t, {
          children: (0, a.jsxs)("div", {
            className: j.headerName,
            children: [(0, a.jsx)(s.Heading, {
              className: j.headerName,
              variant: "heading-xxl/bold",
              children: n.name
            }), (0, a.jsx)(u.Z, {
              size: 24,
              guild: n,
              tooltipPosition: "bottom",
              tooltipColor: s.aML.Colors.PRIMARY
            }), y && (0, a.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: j.inviteButton,
              children: (0, a.jsx)(s.Button, {
                variant: "secondary",
                text: p.intl.string(p.t.VINpSK),
                onClick: () => (0, s.ZDy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([t.e("7654"), t.e("45965")]).then(t.bind(t, 560114));
                  return t => {
                    var l, r;
                    return (0, a.jsx)(e, (l = function(e) {
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
                    }({}, t), r = r = {
                      guild: n,
                      source: x.t4x.GUILD_HOME
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t.push.apply(t, a)
                      }
                      return t
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