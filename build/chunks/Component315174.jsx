/** Chunk was on 67000 **/
/** chunk id: 315174, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk620792 = require("./620792.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk666188 = require("./666188.js"),
  Chunk159300 = require("./159300.js"),
  Chunk553984 = require("./553984.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk496675 = require("./496675.js"),
  Chunk768581 = require("./768581.js"),
  Chunk598056 = require("./598056.js"),
  Chunk358555 = require("./358555.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk647086 = require("./647086.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk371412 = require("./371412.js");

function E(e) {
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
}

function S(e) {
  var t;
  let {
    guild: n,
    controller: i,
    guildBanner: l,
    animate: c
  } = e, {
    value: u
  } = i.springs;
  return (0, r.jsx)(o.animated.div, {
    className: x.animatedContainer,
    style: {
      opacity: u,
      transform: u.to(e => "translateY(-".concat((1 - e) * 90, "px)"))
    },
    children: (0, r.jsx)(o.animated.div, {
      className: a()(x.bannerImage, {
        [x.bannerImgFullWidth]: s.tq
      }),
      style: {
        transform: u.to(e => "translateY(".concat((1 - e) * 90, "px)"))
      },
      children: (0, r.jsx)("img", {
        className: a()(x.bannerImg, {
          [x.bannerImgFullWidth]: s.tq
        }),
        src: null != (t = m.ZP.getGuildBannerURL({
          id: n.id,
          banner: l
        }, c)) ? t : "",
        alt: "",
        "aria-hidden": true
      })
    })
  })
}

function _(e) {
  let {
    guild: t,
    controller: n,
    hasBanner: i,
    hasSubheader: l
  } = e, {
    value: s
  } = n.springs, c = t.features.has(v.GuildFeatures.DISCOVERABLE), f = (0, r.jsx)("div", {
    className: x.communityInfo,
    children: c && (0, r.jsx)(u.u, {
      text: C.intl.string(C.t.O8lDI2),
      position: "right",
      children: (0, r.jsxs)("div", {
        className: x.communityInfoPill,
        children: [(0, r.jsx)(d.enf, {
          size: "custom",
          color: "currentColor",
          width: 12,
          height: 12,
          className: x.communityIcon
        }), (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "none",
          children: C.intl.string(C.t["B/vjCu"])
        })]
      })
    })
  });
  return l ? (0, r.jsx)("div", {
    className: a()(x.communityInfoContainer, x.hasSubheader),
    children: f
  }) : (0, r.jsx)(o.animated.div, {
    className: x.communityInfoContainer,
    style: i ? {
      opacity: s
    } : {
      height: s.to(e => "".concat(20 * e, "px"))
    },
    children: f
  })
}

function I() {
  return (0, Chunk54381.jsx)(Chunk481060.r7p, {
    size: "custom",
    color: "currentColor",
    className: Chunk371412.favoritesIcon,
    height: 20,
    width: 20
  })
}

function P(e) {
  let {
    guild: t
  } = e;
  return (0, r.jsx)(d.Heading, {
    variant: "text-md/semibold",
    lineClamp: 1,
    className: x.name,
    children: t.name
  })
}
let N = [Chunk647086._, Chunk981631.STv];

function Z(e) {
  var t;
  let {
    bannerVisible: l,
    guild: a,
    onClick: o,
    onContextMenu: s,
    ariaControls: f,
    ariaExpanded: g,
    children: m
  } = e, y = (0, c.e7)([b.Z], () => (0, h.b)(b.Z, a)), S = i.useCallback(() => {
    y ? (0, d.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("7654"), n.e("45965")]).then(n.bind(n, 560114));
      return t => {
        var n, i;
        return (0, r.jsx)(e, (n = E({}, t), i = i = {
          guild: a,
          source: v.t4x.GUILD_HEADER_INVITE_BUTTON
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      }
    }) : (0, d.ZDy)(async () => {
      let {
        default: e
      } = await n.e("18332").then(n.bind(n, 633057));
      return t => (0, r.jsx)(e, E({}, t))
    })
  }, [y, a]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(d.P3F, {
      className: x.guildDropdown,
      "aria-label": C.intl.formatToPlainString(C.t.xMXpl3, {
        guildName: null != (t = null == a ? true : a.name) ? t : ""
      }),
      "aria-controls": f,
      "aria-expanded": g,
      onContextMenu: s,
      onClick: o,
      children: [(0, r.jsxs)("div", {
        className: x.guildBadgeAndName,
        children: [(0, r.jsx)(O.Z, {
          guild: a,
          isBannerVisible: l
        }), a.id === j._ && (0, r.jsx)(I, {}), (0, r.jsx)(P, {
          guild: a
        })]
      }), (0, r.jsx)("div", {
        className: x.headerChildren,
        children: m
      })]
    }), !N.includes(a.id) && (0, r.jsx)(u.u, {
      text: C.intl.string(C.t.Sd8Ixw),
      position: "bottom",
      asContainer: true,
      children: (0, r.jsx)(d.P3F, {
        className: x.inviteButton,
        onClick: () => {
          S()
        },
        children: (0, r.jsx)(d.ejJ, {
          size: "refresh_sm",
          color: "currentColor"
        })
      })
    }), a.id === v.STv && (0, r.jsx)(p.p, {})]
  })
}
let w = Chunk473749.memo(function(e) {
  let {
    ref: t,
    bannerVisible: n,
    controller: l,
    className: o,
    onClick: c,
    onContextMenu: u,
    onMouseDown: h,
    disableBannerAnimation: p,
    "aria-expanded": b,
    "aria-controls": O,
    guild: j,
    guildBanner: C,
    animationOverlayHeight: E,
    children: I,
    headerClassName: P,
    communityInfoVisible: N,
    hasSubheader: w
  } = e, A = j.features.has(v.GuildFeatures.ANIMATED_BANNER), R = (0, f.Z)(j), D = !R && (0, y.Z)(j), M = !R && N, L = (0, m.xR)(C) && A && !p, [k, G] = i.useState(false), U = i.useRef(false), B = i.useRef(null), F = null != t ? t : B, V = i.useRef(true), H = g.QK.getSetting();
  i.useEffect(() => {
    if (L && n && !U.current && H) return G(true), V.current = setTimeout(() => {
      G(false)
    }, 5e3), () => {
      clearTimeout(V.current)
    }
  }, [L, n, H]), i.useEffect(() => {
    U.current = n
  }, [n]);
  let W = () => {
    let {
      renderBanner: t,
      guildBanner: n
    } = e;
    return null != n && !t
  };
  return (0, r.jsx)(d.f6W, {
    theme: n ? v.BRd.DARK : true,
    children: e => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        "data-has-banner": W(),
        "data-banner-visible": n,
        ref: F,
        className: a()(o, {
          [x.container]: true,
          [x.hasBanner]: W(),
          [x.bannerVisible]: n,
          [e]: false,
          [x.communityInfoVisible]: M || w && D
        }),
        onMouseDown: h,
        onContextMenu: u,
        children: [(0, r.jsxs)("header", {
          className: a()(x.header, P, {
            [x.themedHeaderMobile]: s.tq
          }),
          children: [(0, r.jsx)("div", {
            className: a()(x.headerContent, x.primaryInfo),
            children: (0, r.jsx)(Z, {
              bannerVisible: n,
              guild: j,
              onClick: c,
              onContextMenu: u,
              ariaControls: O,
              ariaExpanded: b,
              children: I
            })
          }), D && (0, r.jsx)(_, {
            guild: j,
            controller: l,
            hasBanner: null != C,
            hasSubheader: null != w && w
          })]
        }), null != C ? (0, r.jsx)(S, {
          guild: j,
          controller: l,
          guildBanner: C,
          animate: k
        }) : null, (0, r.jsx)(T, {
          controller: l
        })]
      }), L && W() ? (0, r.jsx)("div", {
        className: x.animatedBannerHoverLayer,
        onMouseEnter: () => {
          G(true), clearTimeout(V.current)
        },
        onMouseLeave: () => G(false),
        style: {
          height: E
        }
      }) : null]
    })
  })
});

function T(e) {
  let {
    controller: t
  } = e, {
    theme: n
  } = (0, d.TCT)(), i = t.springs.value;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.animated.div, {
      className: x.headerEllipseBackdrop,
      style: {
        opacity: i.to(e => .5 * e)
      }
    }), (0, r.jsx)(o.animated.div, {
      className: x.headerEllipseForeground,
      style: {
        opacity: i.to(e => e)
      }
    }), (0, r.jsx)(o.animated.div, {
      className: x.headerGlass,
      style: {
        opacity: i.to(e => (1 - e) * 6),
        filter: (0, d.apv)(n) ? i.to(e => "brightness(".concat(.75 + .25 * e, ")")) : true
      }
    })]
  })
}