/** Chunk was on 83037 **/
/** chunk id: 315174, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
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
  Chunk869786 = require("./869786.js");

function C(e) {
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

function E(e) {
  var t;
  let {
    guild: n,
    controller: i,
    guildBanner: l,
    animate: c
  } = e, {
    value: u
  } = i.springs;
  return (0, r.jsx)(a.animated.div, {
    className: x.animatedContainer,
    style: {
      opacity: u,
      transform: u.to(e => "translateY(-".concat((1 - e) * 90, "px)"))
    },
    children: (0, r.jsx)(a.animated.div, {
      className: o()(x.bannerImage, {
        [x.bannerImgFullWidth]: s.tq
      }),
      style: {
        transform: u.to(e => "translateY(".concat((1 - e) * 90, "px)"))
      },
      children: (0, r.jsx)("img", {
        className: o()(x.bannerImg, {
          [x.bannerImgFullWidth]: s.tq
        }),
        src: null != (t = b.ZP.getGuildBannerURL({
          id: n.id,
          banner: l
        }, c)) ? t : "",
        alt: "",
        "aria-hidden": true
      })
    })
  })
}

function S(e) {
  let {
    guild: t,
    controller: n,
    hasBanner: i,
    hasSubheader: l
  } = e, {
    value: s
  } = n.springs, c = t.features.has(O.GuildFeatures.DISCOVERABLE), f = (0, r.jsx)("div", {
    className: x.communityInfo,
    children: c && (0, r.jsx)(u.u, {
      text: j.intl.string(j.t.O8lDI2),
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
          children: j.intl.string(j.t["B/vjCu"])
        })]
      })
    })
  });
  return l ? (0, r.jsx)("div", {
    className: o()(x.communityInfoContainer, x.hasSubheader),
    children: f
  }) : (0, r.jsx)(a.animated.div, {
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
    className: Chunk869786.favoritesIcon,
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
    guild: o,
    onClick: a,
    onContextMenu: s,
    ariaControls: f,
    ariaExpanded: g,
    children: b
  } = e, _ = (0, c.e7)([m.Z], () => (0, h.b)(m.Z, o)), E = i.useCallback(() => {
    _ ? (0, d.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("7654"), n.e("89772")]).then(n.bind(n, 560114));
      return t => {
        var n, i;
        return (0, r.jsx)(e, (n = C({}, t), i = i = {
          guild: o,
          source: O.t4x.GUILD_HEADER_INVITE_BUTTON
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
      return t => (0, r.jsx)(e, C({}, t))
    })
  }, [_, o]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(d.P3F, {
      className: x.guildDropdown,
      "aria-label": j.intl.formatToPlainString(j.t.xMXpl3, {
        guildName: null != (t = null == o ? true : o.name) ? t : ""
      }),
      "aria-controls": f,
      "aria-expanded": g,
      onContextMenu: s,
      onClick: a,
      children: [(0, r.jsxs)("div", {
        className: x.guildBadgeAndName,
        children: [(0, r.jsx)(y.Z, {
          guild: o,
          isBannerVisible: l
        }), o.id === v._ && (0, r.jsx)(I, {}), (0, r.jsx)(P, {
          guild: o
        })]
      }), (0, r.jsx)("div", {
        className: x.headerChildren,
        children: b
      })]
    }), !N.includes(o.id) && (0, r.jsx)(u.u, {
      text: j.intl.string(j.t.Sd8Ixw),
      position: "bottom",
      asContainer: true,
      children: (0, r.jsx)(d.P3F, {
        className: x.inviteButton,
        onClick: () => {
          E()
        },
        children: (0, r.jsx)(d.ejJ, {
          size: "refresh_sm",
          color: "currentColor"
        })
      })
    }), o.id === O.STv && (0, r.jsx)(p.p, {})]
  })
}
let w = Chunk473749.memo(function(e) {
  let {
    ref: t,
    bannerVisible: n,
    controller: l,
    className: a,
    onClick: c,
    onContextMenu: u,
    onMouseDown: h,
    disableBannerAnimation: p,
    "aria-expanded": m,
    "aria-controls": y,
    guild: v,
    guildBanner: j,
    animationOverlayHeight: C,
    children: I,
    headerClassName: P,
    communityInfoVisible: N,
    hasSubheader: w
  } = e, A = v.features.has(O.GuildFeatures.ANIMATED_BANNER), R = (0, f.Z)(v), D = !R && (0, _.Z)(v), L = !R && N, M = (0, b.xR)(j) && A && !p, [k, G] = i.useState(false), U = i.useRef(false), B = i.useRef(null), F = null != t ? t : B, V = i.useRef(true), H = g.QK.getSetting();
  i.useEffect(() => {
    if (M && n && !U.current && H) return G(true), V.current = setTimeout(() => {
      G(false)
    }, 5e3), () => {
      clearTimeout(V.current)
    }
  }, [M, n, H]), i.useEffect(() => {
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
    theme: n ? O.BRd.DARK : true,
    children: e => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        "data-has-banner": W(),
        "data-banner-visible": n,
        ref: F,
        className: o()(a, {
          [x.container]: true,
          [x.hasBanner]: W(),
          [x.bannerVisible]: n,
          [e]: false,
          [x.communityInfoVisible]: L || w && D
        }),
        onMouseDown: h,
        onContextMenu: u,
        children: [(0, r.jsxs)("header", {
          className: o()(x.header, P, {
            [x.themedHeaderMobile]: s.tq
          }),
          children: [(0, r.jsx)("div", {
            className: o()(x.headerContent, x.primaryInfo),
            children: (0, r.jsx)(Z, {
              bannerVisible: n,
              guild: v,
              onClick: c,
              onContextMenu: u,
              ariaControls: y,
              ariaExpanded: m,
              children: I
            })
          }), D && (0, r.jsx)(S, {
            guild: v,
            controller: l,
            hasBanner: null != j,
            hasSubheader: null != w && w
          })]
        }), null != j ? (0, r.jsx)(E, {
          guild: v,
          controller: l,
          guildBanner: j,
          animate: k
        }) : null, (0, r.jsx)(T, {
          controller: l
        })]
      }), M && W() ? (0, r.jsx)("div", {
        className: x.animatedBannerHoverLayer,
        onMouseEnter: () => {
          G(true), clearTimeout(V.current)
        },
        onMouseLeave: () => G(false),
        style: {
          height: C
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
    children: [(0, r.jsx)(a.animated.div, {
      className: x.headerEllipseBackdrop,
      style: {
        opacity: i.to(e => .5 * e)
      }
    }), (0, r.jsx)(a.animated.div, {
      className: x.headerEllipseForeground,
      style: {
        opacity: i.to(e => e)
      }
    }), (0, r.jsx)(a.animated.div, {
      className: x.headerGlass,
      style: {
        opacity: i.to(e => (1 - e) * 6),
        filter: (0, d.apv)(n) ? i.to(e => "brightness(".concat(.75 + .25 * e, ")")) : true
      }
    })]
  })
}