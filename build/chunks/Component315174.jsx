/** Chunk was on 11160 **/
/** chunk id: 315174, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => R,
  wD: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk401393 = require("./401393.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk666188 = require("./666188.js"),
  Chunk340541 = require("./340541.js"),
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

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
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

function P(e) {
  let {
    guild: t,
    controller: n,
    hasBanner: i,
    hasSubheader: l
  } = e, {
    value: s
  } = n.springs, c = t.features.has(_.oNc.DISCOVERABLE), d = (0, r.jsx)("div", {
    className: x.communityInfo,
    children: c && (0, r.jsx)(u.ua7, {
      text: j.intl.string(j.t.O8lDIy),
      position: "right",
      children: e => (0, r.jsxs)("div", E(C({
        className: x.communityInfoPill
      }, e), {
        children: [(0, r.jsx)(u.enf, {
          size: "custom",
          color: "currentColor",
          width: 12,
          height: 12,
          className: x.communityIcon
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "none",
          children: j.intl.string(j.t["B/vjCg"])
        })]
      }))
    })
  });
  return l ? (0, r.jsx)("div", {
    className: o()(x.communityInfoContainer, x.hasSubheader),
    children: d
  }) : (0, r.jsx)(a.animated.div, {
    className: x.communityInfoContainer,
    style: i ? {
      opacity: s
    } : {
      height: s.to(e => "".concat(20 * e, "px"))
    },
    children: d
  })
}

function I() {
  return (0, Chunk951288.jsx)(Chunk481060.r7p, {
    size: "custom",
    color: "currentColor",
    className: Chunk869786.favoritesIcon,
    height: 20,
    width: 20
  })
}
let N = e => {
  let {
    open: t
  } = e, n = t ? u.u04 : u.CJ0;
  return (0, r.jsx)(n, {
    size: "xs",
    color: "currentColor"
  })
};

function Z(e) {
  let {
    guild: t
  } = e;
  return (0, r.jsx)(u.X6q, {
    variant: "text-md/semibold",
    lineClamp: 1,
    className: x.name,
    children: t.name
  })
}

function w(e) {
  var t;
  let {
    bannerVisible: n,
    guild: i,
    onClick: l,
    onContextMenu: o,
    ariaControls: a,
    ariaExpanded: s,
    guildHeaderRef: c,
    children: d
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(y.Z, {
      guild: i,
      isBannerVisible: n
    }), i.id === v._ && (0, r.jsx)(I, {}), (0, r.jsx)(Z, {
      guild: i
    }), null != l && (0, r.jsx)(u.P3F, {
      className: x.headerButton,
      onClick: l,
      onContextMenu: o,
      "aria-controls": a,
      "aria-expanded": s,
      focusProps: {
        ringTarget: c,
        offset: 4
      },
      "aria-label": j.intl.formatToPlainString(j.t.xMXpl5, {
        guildName: null != (t = null == i ? true : i.name) ? t : ""
      })
    }), (0, r.jsx)("div", {
      className: x.headerChildren,
      children: d
    })]
  })
}
let T = [Chunk647086._, Chunk981631.STv];

function A(e) {
  var t;
  let {
    bannerVisible: l,
    guild: o,
    onClick: a,
    onContextMenu: s,
    ariaControls: d,
    ariaExpanded: p,
    children: g
  } = e, b = (0, c.e7)([m.Z], () => (0, f.b)(m.Z, o)), O = i.useCallback(() => {
    b ? (0, u.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("7654"), n.e("62292")]).then(n.bind(n, 560114));
      return t => (0, r.jsx)(e, E(C({}, t), {
        guild: o,
        source: _.t4x.GUILD_HEADER_INVITE_BUTTON
      }))
    }) : (0, u.ZDy)(async () => {
      let {
        default: e
      } = await n.e("88358").then(n.bind(n, 598402));
      return t => (0, r.jsx)(e, C({}, t))
    })
  }, [b, o]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(u.P3F, {
      className: x.guildDropdown,
      "aria-label": j.intl.formatToPlainString(j.t.xMXpl5, {
        guildName: null != (t = null == o ? true : o.name) ? t : ""
      }),
      "aria-controls": d,
      "aria-expanded": p,
      onContextMenu: s,
      onClick: a,
      children: [(0, r.jsxs)("div", {
        className: x.guildBadgeAndName,
        children: [(0, r.jsx)(y.Z, {
          guild: o,
          isBannerVisible: l
        }), o.id === v._ && (0, r.jsx)(I, {}), (0, r.jsx)(Z, {
          guild: o
        })]
      }), (0, r.jsx)("div", {
        className: x.headerChildren,
        children: g
      })]
    }), !T.includes(o.id) && (0, r.jsx)(u.ua7, {
      text: j.intl.string(j.t.Sd8Ix8),
      position: "bottom",
      children: e => (0, r.jsx)(u.P3F, E(C({
        className: x.inviteButton
      }, e), {
        onClick: () => {
          var t;
          null == (t = e.onClick) || t.call(e), O()
        },
        children: (0, r.jsx)(u.ejJ, {
          size: "refresh_sm",
          color: "currentColor"
        })
      }))
    }), o.id === _.STv && (0, r.jsx)(h.p, {})]
  })
}
let R = Chunk647438.memo(function(e) {
  let {
    ref: t,
    bannerVisible: n,
    controller: l,
    className: a,
    onClick: c,
    onContextMenu: f,
    onMouseDown: h,
    disableBannerAnimation: m,
    "aria-expanded": y,
    "aria-controls": v,
    guild: j,
    guildBanner: I,
    animationOverlayHeight: N,
    children: Z,
    headerClassName: T,
    communityInfoVisible: R,
    hasSubheader: L
  } = e, M = j.features.has(_.oNc.ANIMATED_BANNER), k = (0, d.Z)(j), U = !k && (0, O.Z)(j), G = !k && R, B = (0, b.xR)(I) && M && !m, [F, V] = i.useState(false), H = i.useRef(false), z = i.useRef(null), W = null != t ? t : z, K = i.useRef(true), Y = g.QK.getSetting();
  i.useEffect(() => {
    if (B && n && !H.current && Y) return V(true), K.current = setTimeout(() => {
      V(false)
    }, 5e3), () => {
      clearTimeout(K.current)
    }
  }, [B, n, Y]), i.useEffect(() => {
    H.current = n
  }, [n]);
  let q = () => {
      let {
        renderBanner: t,
        guildBanner: n
      } = e;
      return null != n && !t
    },
    X = (0, p._k)({
      location: "guild_header"
    }),
    Q = {
      bannerVisible: n,
      guild: j,
      onClick: c,
      onContextMenu: f,
      ariaControls: v,
      ariaExpanded: y,
      guildHeaderRef: W
    };
  return (0, r.jsx)(u.f6W, {
    theme: n ? _.BRd.DARK : true,
    children: e => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        "data-has-banner": q(),
        "data-banner-visible": n,
        ref: W,
        className: o()(a, {
          [x.container]: true,
          [x.clickable]: !X.isGuildEntrypointEnabled && null != c,
          [x.selected]: !X.isGuildEntrypointEnabled && null != c && y,
          [x.hasBanner]: q(),
          [x.bannerVisible]: n,
          [e]: false,
          [x.communityInfoVisible]: G || L && U,
          [x.invitesRefresh]: X.isGuildEntrypointEnabled
        }),
        onMouseDown: h,
        onClick: X.isGuildEntrypointEnabled ? true : c,
        onContextMenu: f,
        children: [(0, r.jsxs)("header", {
          className: o()(x.header, T, {
            [x.themedHeaderMobile]: s.tq
          }),
          children: [(0, r.jsx)("div", {
            className: o()(x.headerContent, x.primaryInfo),
            children: X.isGuildEntrypointEnabled ? (0, r.jsx)(A, E(C({}, Q), {
              children: Z
            })) : (0, r.jsx)(w, E(C({}, Q), {
              children: Z
            }))
          }), U && (0, r.jsx)(P, {
            guild: j,
            controller: l,
            hasBanner: null != I,
            hasSubheader: null != L && L
          })]
        }), null != I ? (0, r.jsx)(S, {
          guild: j,
          controller: l,
          guildBanner: I,
          animate: F
        }) : null, (0, r.jsx)(D, {
          controller: l
        })]
      }), B && q() ? (0, r.jsx)("div", {
        className: x.animatedBannerHoverLayer,
        onMouseEnter: () => {
          V(true), clearTimeout(K.current)
        },
        onMouseLeave: () => V(false),
        style: {
          height: N
        }
      }) : null]
    })
  })
});

function D(e) {
  let {
    controller: t
  } = e, {
    theme: n
  } = (0, u.TCT)(), i = t.springs.value;
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
        filter: (0, u.apv)(n) ? i.to(e => "brightness(".concat(.75 + .25 * e, ")")) : true
      }
    })]
  })
}