/** Chunk was on 81985 **/
/** chunk id: 315174, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk81239 = require("./81239.js"),
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
    className: C.animatedContainer,
    style: {
      opacity: u,
      transform: u.to(e => "translateY(-".concat((1 - e) * 90, "px)"))
    },
    children: (0, r.jsx)(o.animated.div, {
      className: a()(C.bannerImage, {
        [C.bannerImgFullWidth]: s.tq
      }),
      style: {
        transform: u.to(e => "translateY(".concat((1 - e) * 90, "px)"))
      },
      children: (0, r.jsx)("img", {
        className: a()(C.bannerImg, {
          [C.bannerImgFullWidth]: s.tq
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

function _(e) {
  let {
    guild: t,
    controller: n,
    hasBanner: i,
    hasSubheader: l
  } = e, {
    value: s
  } = n.springs, c = t.features.has(O.GuildFeatures.DISCOVERABLE), p = (0, r.jsx)("div", {
    className: C.communityInfo,
    children: c && (0, r.jsx)(u.u, {
      text: x.intl.string(x.t.O8lDI2),
      position: "right",
      children: (0, r.jsxs)("div", {
        className: C.communityInfoPill,
        children: [(0, r.jsx)(d.enf, {
          size: "custom",
          color: "currentColor",
          width: 12,
          height: 12,
          className: C.communityIcon
        }), (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "none",
          children: x.intl.string(x.t["B/vjCu"])
        })]
      })
    })
  });
  return l ? (0, r.jsx)("div", {
    className: a()(C.communityInfoContainer, C.hasSubheader),
    children: p
  }) : (0, r.jsx)(o.animated.div, {
    className: C.communityInfoContainer,
    style: i ? {
      opacity: s
    } : {
      height: s.to(e => "".concat(20 * e, "px"))
    },
    children: p
  })
}

function I() {
  return (0, r.jsx)(d.r7p, {
    size: "custom",
    color: "currentColor",
    className: C.favoritesIcon,
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
    className: C.name,
    children: t.name
  })
}
let Z = [Chunk647086._, Chunk981631.STv];

function N(e) {
  var t;
  let {
    bannerVisible: l,
    guild: a,
    onClick: o,
    onContextMenu: s,
    ariaControls: p,
    ariaExpanded: g,
    children: b
  } = e, y = (0, c.e7)([m.Z], () => (0, f.b)(m.Z, a)), S = i.useCallback(() => {
    y ? (0, d.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("7654"), n.e("45965")]).then(n.bind(n, 560114));
      return t => {
        var n, i;
        return (0, r.jsx)(e, (n = E({}, t), i = i = {
          guild: a,
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
      return t => (0, r.jsx)(e, E({}, t))
    })
  }, [y, a]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(d.P3F, {
      className: C.guildDropdown,
      "aria-label": x.intl.formatToPlainString(x.t.xMXpl3, {
        guildName: null != (t = null == a ? true : a.name) ? t : ""
      }),
      "aria-controls": p,
      "aria-expanded": g,
      onContextMenu: s,
      onClick: o,
      children: [(0, r.jsxs)("div", {
        className: C.guildBadgeAndName,
        children: [(0, r.jsx)(v.Z, {
          guild: a,
          isBannerVisible: l
        }), a.id === j._ && (0, r.jsx)(I, {}), (0, r.jsx)(P, {
          guild: a
        })]
      }), (0, r.jsx)("div", {
        className: C.headerChildren,
        children: b
      })]
    }), !Z.includes(a.id) && (0, r.jsx)(u.u, {
      text: x.intl.string(x.t.Sd8Ixw),
      position: "bottom",
      asContainer: true,
      children: (0, r.jsx)(d.P3F, {
        className: C.inviteButton,
        onClick: () => {
          S()
        },
        children: (0, r.jsx)(d.ejJ, {
          size: "refresh_sm",
          color: "currentColor"
        })
      })
    }), a.id === O.STv && (0, r.jsx)(h.p, {})]
  })
}
let T = Chunk473749.memo(function(e) {
  let {
    ref: t,
    bannerVisible: n,
    controller: l,
    className: o,
    onClick: c,
    onContextMenu: u,
    onMouseDown: f,
    disableBannerAnimation: h,
    "aria-expanded": m,
    "aria-controls": v,
    guild: j,
    guildBanner: x,
    animationOverlayHeight: E,
    children: I,
    headerClassName: P,
    communityInfoVisible: Z,
    hasSubheader: T
  } = e, w = j.features.has(O.GuildFeatures.ANIMATED_BANNER), R = (0, p.Z)(j), D = !R && (0, y.Z)(j), M = !R && Z, k = (0, b.xR)(x) && w && !h, [L, U] = i.useState(false), G = i.useRef(false), B = i.useRef(null), F = null != t ? t : B, H = i.useRef(true), V = g.QK.getSetting();
  i.useEffect(() => {
    if (k && n && !G.current && V) return U(true), H.current = setTimeout(() => {
      U(false)
    }, 5e3), () => {
      clearTimeout(H.current)
    }
  }, [k, n, V]), i.useEffect(() => {
    G.current = n
  }, [n]);
  let z = () => {
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
        "data-has-banner": z(),
        "data-banner-visible": n,
        ref: F,
        className: a()(o, {
          [C.container]: true,
          [C.hasBanner]: z(),
          [C.bannerVisible]: n,
          [e]: false,
          [C.communityInfoVisible]: M || T && D
        }),
        onMouseDown: f,
        onContextMenu: u,
        children: [(0, r.jsxs)("header", {
          className: a()(C.header, P, {
            [C.themedHeaderMobile]: s.tq
          }),
          children: [(0, r.jsx)("div", {
            className: a()(C.headerContent, C.primaryInfo),
            children: (0, r.jsx)(N, {
              bannerVisible: n,
              guild: j,
              onClick: c,
              onContextMenu: u,
              ariaControls: v,
              ariaExpanded: m,
              children: I
            })
          }), D && (0, r.jsx)(_, {
            guild: j,
            controller: l,
            hasBanner: null != x,
            hasSubheader: null != T && T
          })]
        }), null != x ? (0, r.jsx)(S, {
          guild: j,
          controller: l,
          guildBanner: x,
          animate: L
        }) : null, (0, r.jsx)(A, {
          controller: l
        })]
      }), k && z() ? (0, r.jsx)("div", {
        className: C.animatedBannerHoverLayer,
        onMouseEnter: () => {
          U(true), clearTimeout(H.current)
        },
        onMouseLeave: () => U(false),
        style: {
          height: E
        }
      }) : null]
    })
  })
});

function A(e) {
  let {
    controller: t
  } = e, {
    theme: n
  } = (0, d.TCT)(), i = t.springs.value;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.animated.div, {
      className: C.headerEllipseBackdrop,
      style: {
        opacity: i.to(e => .5 * e)
      }
    }), (0, r.jsx)(o.animated.div, {
      className: C.headerEllipseForeground,
      style: {
        opacity: i.to(e => e)
      }
    }), (0, r.jsx)(o.animated.div, {
      className: C.headerGlass,
      style: {
        opacity: i.to(e => (1 - e) * 6),
        filter: (0, d.apv)(n) ? i.to(e => "brightness(".concat(.75 + .25 * e, ")")) : true
      }
    })]
  })
}