/** Chunk was on 41727 **/
/** chunk id: 952790, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk454938 = require("./454938.js"),
  Chunk855687 = require("./855687.js"),
  Chunk731091 = require("./731091.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk253932 = require("./253932.js"),
  Chunk576705 = require("./576705.js"),
  Chunk486020 = require("./486020.js"),
  Chunk885631 = require("./885631.js"),
  Chunk986268 = require("./986268.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk349828 = require("./349828.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk668560 = require("./668560.js");

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

function C(e) {
  var t;
  let {
    guild: n,
    controller: l,
    guildBanner: i,
    animate: c
  } = e, {
    value: u
  } = l.springs;
  return (0, r.jsx)(a.animated.div, {
    className: x.nI,
    style: {
      opacity: u,
      transform: u.to(e => "translateY(-".concat((1 - e) * 90, "px)"))
    },
    children: (0, r.jsx)(a.animated.div, {
      className: s()(x._e, {
        [x.fr]: o.Fr
      }),
      style: {
        transform: u.to(e => "translateY(".concat((1 - e) * 90, "px)"))
      },
      children: (0, r.jsx)("img", {
        className: s()(x.Q, {
          [x.fr]: o.Fr
        }),
        src: null != (t = A.Ay.getGuildBannerURL({
          id: n.id,
          banner: i
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
    hasBanner: l,
    hasSubheader: i
  } = e, {
    value: o
  } = n.springs, c = t.features.has(O.GuildFeatures.DISCOVERABLE), p = (0, r.jsx)("div", {
    className: x.WV,
    children: c && (0, r.jsx)(u.m, {
      text: v.intl.string(v.t.O8lDI2),
      position: "right",
      children: (0, r.jsxs)("div", {
        className: x.Pl,
        children: [(0, r.jsx)(d.L_e, {
          size: "custom",
          color: "currentColor",
          width: 12,
          height: 12,
          className: x.ju
        }), (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "none",
          children: v.intl.string(v.t["B/vjCu"])
        })]
      })
    })
  });
  return i ? (0, r.jsx)("div", {
    className: s()(x.pS, x.W$),
    children: p
  }) : (0, r.jsx)(a.animated.div, {
    className: x.pS,
    style: l ? {
      opacity: o
    } : {
      height: o.to(e => "".concat(20 * e, "px"))
    },
    children: p
  })
}

function I() {
  return (0, r.jsx)(d.Gg5, {
    size: "custom",
    color: "currentColor",
    className: x.PA,
    height: 20,
    width: 20
  })
}

function N(e) {
  let {
    guild: t
  } = e;
  return (0, r.jsx)(d.Heading, {
    variant: "text-md/semibold",
    lineClamp: 1,
    className: x.UU,
    children: t.name
  })
}
let T = [Chunk349828.V, Chunk652215.gNP];

function P(e) {
  var t;
  let {
    bannerVisible: i,
    guild: s,
    onClick: a,
    onContextMenu: o,
    ariaControls: p,
    ariaExpanded: g,
    children: m
  } = e, A = (0, c.bG)([b.A], () => (0, h.K)(b.A, s)), y = l.useCallback(() => {
    A ? (0, d.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("43600"), n.e("42821")]).then(n.bind(n, 234355));
      return t => {
        var n, l;
        return (0, r.jsx)(e, (n = E({}, t), l = l = {
          guild: s,
          source: O.PE1.GUILD_HEADER_INVITE_BUTTON
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n))
      }
    }) : (0, d.mMO)(async () => {
      let {
        default: e
      } = await n.e("62751").then(n.bind(n, 132610));
      return t => (0, r.jsx)(e, E({}, t))
    })
  }, [A, s]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(d.DUT, {
      className: x.Vm,
      "aria-label": v.intl.formatToPlainString(v.t.xMXpl3, {
        guildName: null != (t = null == s ? true : s.name) ? t : ""
      }),
      "aria-controls": p,
      "aria-expanded": g,
      onContextMenu: o,
      onClick: a,
      children: [(0, r.jsxs)("div", {
        className: x.LO,
        children: [(0, r.jsx)(_.A, {
          guild: s,
          isBannerVisible: i
        }), s.id === j.V && (0, r.jsx)(I, {}), (0, r.jsx)(N, {
          guild: s
        })]
      }), (0, r.jsx)("div", {
        className: x.dx,
        children: m
      })]
    }), !T.includes(s.id) && (0, r.jsx)(u.m, {
      text: v.intl.string(v.t.Sd8Ixw),
      position: "bottom",
      asContainer: true,
      children: (0, r.jsx)(d.DUT, {
        className: x.ak,
        onClick: () => {
          y()
        },
        children: (0, r.jsx)(d.DpX, {
          size: "refresh_sm",
          color: "currentColor"
        })
      })
    }), s.id === O.gNP && (0, r.jsx)(f.g, {})]
  })
}
let w = Chunk64700.memo(function(e) {
  let {
    ref: t,
    bannerVisible: n,
    controller: i,
    className: a,
    onClick: u,
    onContextMenu: h,
    onMouseDown: f,
    disableBannerAnimation: b,
    "aria-expanded": _,
    "aria-controls": j,
    guild: v,
    guildBanner: E,
    animationOverlayHeight: I,
    children: N,
    headerClassName: T,
    communityInfoVisible: w,
    hasSubheader: D
  } = e, M = v.features.has(O.GuildFeatures.ANIMATED_BANNER), L = (0, p.A)(v), k = !L && (0, y.A)(v), G = !L && w, U = (0, A.VI)(E) && M && !b, [B, V] = l.useState(false), F = l.useRef(false), H = l.useRef(null), K = null != t ? t : H, W = l.useRef(true), z = m.kt.getSetting(), Y = (0, c.bG)([g.A], () => g.A.theme);
  l.useEffect(() => {
    if (U && n && !F.current && z) return V(true), W.current = setTimeout(() => {
      V(false)
    }, 5e3), () => {
      clearTimeout(W.current)
    }
  }, [U, n, z]), l.useEffect(() => {
    F.current = n
  }, [n]);
  let q = () => {
    let {
      renderBanner: t,
      guildBanner: n
    } = e;
    return null != n && !t
  };
  return (0, r.jsx)(d.NPJ, {
    theme: Y,
    children: e => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        "data-has-banner": q(),
        "data-banner-visible": n,
        ref: K,
        className: s()(a, {
          [x.kL]: true,
          [x.r9]: q(),
          [x.Pi]: n,
          [e]: false,
          [x.Iv]: G || D && k
        }),
        onMouseDown: f,
        onContextMenu: h,
        children: [(0, r.jsxs)("header", {
          className: s()(x.wx, T, {
            [x.jD]: o.Fr
          }),
          children: [(0, r.jsx)("div", {
            className: s()(x.VW, x.Nk),
            children: (0, r.jsx)(P, {
              bannerVisible: n,
              guild: v,
              onClick: u,
              onContextMenu: h,
              ariaControls: j,
              ariaExpanded: _,
              children: N
            })
          }), k && (0, r.jsx)(S, {
            guild: v,
            controller: i,
            hasBanner: null != E,
            hasSubheader: null != D && D
          })]
        }), null != E ? (0, r.jsx)(C, {
          guild: v,
          controller: i,
          guildBanner: E,
          animate: B
        }) : null, (0, r.jsx)(R, {
          controller: i
        })]
      }), U && q() ? (0, r.jsx)("div", {
        className: x.rt,
        onMouseEnter: () => {
          V(true), clearTimeout(W.current)
        },
        onMouseLeave: () => V(false),
        style: {
          height: I
        }
      }) : null]
    })
  })
});

function R(e) {
  let {
    controller: t
  } = e, {
    theme: n
  } = (0, d.wRf)(), l = t.springs.value;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.animated.div, {
      className: x.UL,
      style: {
        opacity: l.to(e => .5 * e)
      }
    }), (0, r.jsx)(a.animated.div, {
      className: x.ze,
      style: {
        opacity: l.to(e => e)
      }
    }), (0, r.jsx)(a.animated.div, {
      className: x.iI,
      style: {
        opacity: l.to(e => (1 - e) * 6),
        filter: (0, d.qB1)(n) ? l.to(e => "brightness(".concat(.75 + .25 * e, ")")) : true
      }
    })]
  })
}