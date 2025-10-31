/** Chunk was on 56710 **/
/** chunk id: 315174, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => D,
  wD: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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

function S(e, t) {
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

function I(e) {
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
        src: null != (t = _.ZP.getGuildBannerURL({
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
  } = n.springs, c = t.features.has(v.GuildFeatures.DISCOVERABLE), p = (0, r.jsx)("div", {
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
    className: o()(x.communityInfoContainer, x.hasSubheader),
    children: p
  }) : (0, r.jsx)(a.animated.div, {
    className: x.communityInfoContainer,
    style: i ? {
      opacity: s
    } : {
      height: s.to(e => "".concat(20 * e, "px"))
    },
    children: p
  })
}

function N() {
  return (0, Chunk951288.jsx)(Chunk481060.r7p, {
    size: "custom",
    color: "currentColor",
    className: Chunk869786.favoritesIcon,
    height: 20,
    width: 20
  })
}
let Z = e => {
  let {
    open: t
  } = e, n = t ? d.u04 : d.CJ0;
  return (0, r.jsx)(n, {
    size: "xs",
    color: "currentColor"
  })
};

function T(e) {
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
    children: u
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(y.Z, {
      guild: i,
      isBannerVisible: n
    }), i.id === j._ && (0, r.jsx)(N, {}), (0, r.jsx)(T, {
      guild: i
    }), null != l && (0, r.jsx)(d.P3F, {
      className: x.headerButton,
      onClick: l,
      onContextMenu: o,
      "aria-controls": a,
      "aria-expanded": s,
      focusProps: {
        ringTarget: c,
        offset: 4
      },
      "aria-label": C.intl.formatToPlainString(C.t.xMXpl3, {
        guildName: null != (t = null == i ? true : i.name) ? t : ""
      })
    }), (0, r.jsx)("div", {
      className: x.headerChildren,
      children: u
    })]
  })
}
let A = [Chunk647086._, Chunk981631.STv];

function R(e) {
  var t;
  let {
    bannerVisible: l,
    guild: o,
    onClick: a,
    onContextMenu: s,
    ariaControls: p,
    ariaExpanded: h,
    children: m
  } = e, _ = (0, c.e7)([b.Z], () => (0, f.b)(b.Z, o)), O = i.useCallback(() => {
    _ ? (0, d.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("7654"), n.e("89772")]).then(n.bind(n, 560114));
      return t => (0, r.jsx)(e, S(E({}, t), {
        guild: o,
        source: v.t4x.GUILD_HEADER_INVITE_BUTTON
      }))
    }) : (0, d.ZDy)(async () => {
      let {
        default: e
      } = await n.e("18332").then(n.bind(n, 633057));
      return t => (0, r.jsx)(e, E({}, t))
    })
  }, [_, o]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(d.P3F, {
      className: x.guildDropdown,
      "aria-label": C.intl.formatToPlainString(C.t.xMXpl3, {
        guildName: null != (t = null == o ? true : o.name) ? t : ""
      }),
      "aria-controls": p,
      "aria-expanded": h,
      onContextMenu: s,
      onClick: a,
      children: [(0, r.jsxs)("div", {
        className: x.guildBadgeAndName,
        children: [(0, r.jsx)(y.Z, {
          guild: o,
          isBannerVisible: l
        }), o.id === j._ && (0, r.jsx)(N, {}), (0, r.jsx)(T, {
          guild: o
        })]
      }), (0, r.jsx)("div", {
        className: x.headerChildren,
        children: m
      })]
    }), !A.includes(o.id) && (0, r.jsx)(u.u, {
      text: C.intl.string(C.t.Sd8Ixw),
      position: "bottom",
      asContainer: true,
      children: (0, r.jsx)(d.P3F, {
        className: x.inviteButton,
        onClick: () => {
          O()
        },
        children: (0, r.jsx)(d.ejJ, {
          size: "refresh_sm",
          color: "currentColor"
        })
      })
    }), o.id === v.STv && (0, r.jsx)(g.p, {})]
  })
}
let D = Chunk647438.memo(function(e) {
  let {
    ref: t,
    bannerVisible: n,
    controller: l,
    className: a,
    onClick: c,
    onContextMenu: u,
    onMouseDown: f,
    disableBannerAnimation: g,
    "aria-expanded": b,
    "aria-controls": y,
    guild: j,
    guildBanner: C,
    animationOverlayHeight: N,
    children: Z,
    headerClassName: T,
    communityInfoVisible: A,
    hasSubheader: D
  } = e, M = j.features.has(v.GuildFeatures.ANIMATED_BANNER), k = (0, p.Z)(j), G = !k && (0, O.Z)(j), U = !k && A, B = (0, _.xR)(C) && M && !g, [F, V] = i.useState(false), H = i.useRef(false), z = i.useRef(null), W = null != t ? t : z, K = i.useRef(true), Y = m.QK.getSetting();
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
    X = (0, h._k)({
      location: "guild_header"
    }),
    Q = {
      bannerVisible: n,
      guild: j,
      onClick: c,
      onContextMenu: u,
      ariaControls: y,
      ariaExpanded: b,
      guildHeaderRef: W
    };
  return (0, r.jsx)(d.f6W, {
    theme: n ? v.BRd.DARK : true,
    children: e => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        "data-has-banner": q(),
        "data-banner-visible": n,
        ref: W,
        className: o()(a, {
          [x.container]: true,
          [x.clickable]: !X.isGuildEntrypointEnabled && null != c,
          [x.selected]: !X.isGuildEntrypointEnabled && null != c && b,
          [x.hasBanner]: q(),
          [x.bannerVisible]: n,
          [e]: false,
          [x.communityInfoVisible]: U || D && G,
          [x.invitesRefresh]: X.isGuildEntrypointEnabled
        }),
        onMouseDown: f,
        onClick: X.isGuildEntrypointEnabled ? true : c,
        onContextMenu: u,
        children: [(0, r.jsxs)("header", {
          className: o()(x.header, T, {
            [x.themedHeaderMobile]: s.tq
          }),
          children: [(0, r.jsx)("div", {
            className: o()(x.headerContent, x.primaryInfo),
            children: X.isGuildEntrypointEnabled ? (0, r.jsx)(R, S(E({}, Q), {
              children: Z
            })) : (0, r.jsx)(w, S(E({}, Q), {
              children: Z
            }))
          }), G && (0, r.jsx)(P, {
            guild: j,
            controller: l,
            hasBanner: null != C,
            hasSubheader: null != D && D
          })]
        }), null != C ? (0, r.jsx)(I, {
          guild: j,
          controller: l,
          guildBanner: C,
          animate: F
        }) : null, (0, r.jsx)(L, {
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

function L(e) {
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