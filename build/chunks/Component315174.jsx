/** Chunk was on 49882 **/
/** chunk id: 315174, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => D,
  wD: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk803948 = require("./803948.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk666188 = require("./666188.js"),
  Chunk340541 = require("./340541.js"),
  Chunk159300 = require("./159300.js"),
  Chunk553984 = require("./553984.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk695346 = require("./695346.js"),
  Chunk496675 = require("./496675.js"),
  Chunk768581 = require("./768581.js"),
  Chunk598056 = require("./598056.js"),
  Chunk358555 = require("./358555.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk647086 = require("./647086.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk869786 = require("./869786.js");

function x(e) {
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
    className: E.animatedContainer,
    style: {
      opacity: u,
      transform: u.to(e => "translateY(-".concat((1 - e) * 90, "px)"))
    },
    children: (0, r.jsx)(a.animated.div, {
      className: o()(E.bannerImage, {
        [E.bannerImgFullWidth]: s.tq
      }),
      style: {
        transform: u.to(e => "translateY(".concat((1 - e) * 90, "px)"))
      },
      children: (0, r.jsx)("img", {
        className: o()(E.bannerImg, {
          [E.bannerImgFullWidth]: s.tq
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
  } = n.springs, c = t.features.has(v.oNc.DISCOVERABLE), d = (0, r.jsx)("div", {
    className: E.communityInfo,
    children: c && (0, r.jsx)(u.ua7, {
      text: C.intl.string(C.t.O8lDIy),
      position: "right",
      children: e => (0, r.jsxs)("div", S(x({
        className: E.communityInfoPill
      }, e), {
        children: [(0, r.jsx)(u.enf, {
          size: "custom",
          color: "currentColor",
          width: 12,
          height: 12,
          className: E.communityIcon
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "none",
          children: C.intl.string(C.t["B/vjCg"])
        })]
      }))
    })
  });
  return l ? (0, r.jsx)("div", {
    className: o()(E.communityInfoContainer, E.hasSubheader),
    children: d
  }) : (0, r.jsx)(a.animated.div, {
    className: E.communityInfoContainer,
    style: i ? {
      opacity: s
    } : {
      height: s.to(e => "".concat(20 * e, "px"))
    },
    children: d
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
let w = e => {
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
    className: E.name,
    children: t.name
  })
}

function T(e) {
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
    }), i.id === j._ && (0, r.jsx)(N, {}), (0, r.jsx)(Z, {
      guild: i
    }), null != l && (0, r.jsx)(u.P3F, {
      className: E.headerButton,
      onClick: l,
      onContextMenu: o,
      "aria-controls": a,
      "aria-expanded": s,
      focusProps: {
        ringTarget: c,
        offset: 4
      },
      "aria-label": C.intl.formatToPlainString(C.t.xMXpl5, {
        guildName: null != (t = null == i ? true : i.name) ? t : ""
      })
    }), (0, r.jsx)("div", {
      className: E.headerChildren,
      children: d
    })]
  })
}
let A = [Chunk647086._, Chunk981631.STv];

function R(e) {
  let {
    bannerVisible: t,
    guild: l,
    onClick: o,
    onContextMenu: a,
    children: s
  } = e, d = i.useRef(null), p = (0, c.e7)([g.Z], () => g.Z.theme), m = i.useCallback(async () => {
    let {
      default: e
    } = await Promise.all([n.e("87154"), n.e("45141")]).then(n.bind(n, 859432));
    return t => {
      let {
        closePopout: n
      } = t;
      return (0, r.jsx)(u.f6W, {
        theme: p,
        children: t => (0, r.jsx)("div", {
          className: t,
          children: (0, r.jsx)(e, {
            onClose: n,
            guild: l
          })
        })
      })
    }
  }, [l, p]), _ = (0, c.e7)([b.Z], () => (0, f.b)(b.Z, l)), O = i.useCallback(() => {
    _ ? (0, u.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("7654"), n.e("62292")]).then(n.bind(n, 560114));
      return t => (0, r.jsx)(e, S(x({}, t), {
        guild: l,
        source: v.t4x.GUILD_HEADER
      }))
    }) : (0, u.ZDy)(async () => {
      let {
        default: e
      } = await n.e("88358").then(n.bind(n, 598402));
      return t => (0, r.jsx)(e, x({}, t))
    })
  }, [_, l]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.KeG, {
      targetElementRef: d,
      renderPopout: m,
      position: "bottom",
      align: "left",
      animation: u.yRy.Animation.SCALE,
      spacing: 4,
      children: e => {
        var n;
        return (0, r.jsxs)(u.P3F, S(x({
          innerRef: d,
          className: E.guildDropdown,
          "aria-label": C.intl.formatToPlainString(C.t.xMXpl5, {
            guildName: null != (n = null == l ? true : l.name) ? n : ""
          }),
          onContextMenu: a
        }, e), {
          onClick: t => {
            var n;
            null == e || null == (n = e.onClick) || n.call(e, t), null == o || o(t)
          },
          children: [(0, r.jsxs)("div", {
            className: E.guildBadgeAndName,
            children: [(0, r.jsx)(y.Z, {
              guild: l,
              isBannerVisible: t
            }), l.id === j._ && (0, r.jsx)(N, {}), (0, r.jsx)(Z, {
              guild: l
            })]
          }), (0, r.jsx)("div", {
            className: E.headerChildren,
            children: s
          })]
        }))
      }
    }), !A.includes(l.id) && (0, r.jsx)(u.ua7, {
      text: C.intl.string(C.t.Sd8Ix8),
      position: "bottom",
      children: e => (0, r.jsx)(u.P3F, S(x({
        className: E.inviteButton
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
    }), l.id === v.STv && (0, r.jsx)(h.p, {})]
  })
}
let D = Chunk647438.memo(function(e) {
  let {
    ref: t,
    bannerVisible: n,
    controller: l,
    className: a,
    onClick: c,
    onContextMenu: f,
    onMouseDown: h,
    disableBannerAnimation: g,
    "aria-expanded": b,
    "aria-controls": y,
    guild: j,
    guildBanner: C,
    animationOverlayHeight: N,
    children: w,
    headerClassName: Z,
    communityInfoVisible: A,
    hasSubheader: D
  } = e, M = j.features.has(v.oNc.ANIMATED_BANNER), k = (0, d.Z)(j), U = !k && (0, O.Z)(j), G = !k && A, B = (0, _.xR)(C) && M && !g, [V, H] = i.useState(false), F = i.useRef(false), z = i.useRef(null), W = null != t ? t : z, K = i.useRef(true), Y = m.QK.getSetting();
  i.useEffect(() => {
    if (B && n && !F.current && Y) return H(true), K.current = setTimeout(() => {
      H(false)
    }, 5e3), () => {
      clearTimeout(K.current)
    }
  }, [B, n, Y]), i.useEffect(() => {
    F.current = n
  }, [n]);
  let q = () => {
      let {
        renderBanner: t,
        guildBanner: n
      } = e;
      return null != n && !t
    },
    {
      entrypoints: X
    } = (0, p._k)({
      location: "guild_header"
    }),
    Q = {
      bannerVisible: n,
      guild: j,
      onClick: c,
      onContextMenu: f,
      ariaControls: y,
      ariaExpanded: b,
      guildHeaderRef: W
    };
  return (0, r.jsx)(u.f6W, {
    theme: n ? v.BRd.DARK : true,
    children: e => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        "data-has-banner": q(),
        "data-banner-visible": n,
        ref: W,
        className: o()(a, {
          [E.container]: true,
          [E.clickable]: !X && null != c,
          [E.selected]: !X && null != c && b,
          [E.hasBanner]: q(),
          [E.bannerVisible]: n,
          [e]: false,
          [E.communityInfoVisible]: G || D && U,
          [E.invitesRefresh]: X
        }),
        onMouseDown: h,
        onClick: X ? true : c,
        onContextMenu: f,
        children: [(0, r.jsxs)("header", {
          className: o()(E.header, Z, {
            [E.themedHeaderMobile]: s.tq
          }),
          children: [(0, r.jsx)("div", {
            className: o()(E.headerContent, E.primaryInfo),
            children: X ? (0, r.jsx)(R, S(x({}, Q), {
              children: w
            })) : (0, r.jsx)(T, S(x({}, Q), {
              children: w
            }))
          }), U && (0, r.jsx)(P, {
            guild: j,
            controller: l,
            hasBanner: null != C,
            hasSubheader: null != D && D
          })]
        }), null != C ? (0, r.jsx)(I, {
          guild: j,
          controller: l,
          guildBanner: C,
          animate: V
        }) : null, (0, r.jsx)(L, {
          controller: l
        })]
      }), B && q() ? (0, r.jsx)("div", {
        className: E.animatedBannerHoverLayer,
        onMouseEnter: () => {
          H(true), clearTimeout(K.current)
        },
        onMouseLeave: () => H(false),
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
  } = (0, u.TCT)(), i = t.springs.value;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.animated.div, {
      className: E.headerEllipseBackdrop,
      style: {
        opacity: i.to(e => .5 * e)
      }
    }), (0, r.jsx)(a.animated.div, {
      className: E.headerEllipseForeground,
      style: {
        opacity: i.to(e => e)
      }
    }), (0, r.jsx)(a.animated.div, {
      className: E.headerGlass,
      style: {
        opacity: i.to(e => (1 - e) * 6),
        filter: (0, u.apv)(n) ? i.to(e => "brightness(".concat(.75 + .25 * e, ")")) : true
      }
    })]
  })
}