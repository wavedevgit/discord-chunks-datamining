/** Chunk was on 44669 **/
/** chunk id: 952790, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
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
    className: v.nI,
    style: {
      opacity: u,
      transform: u.to(e => "translateY(-".concat((1 - e) * 90, "px)"))
    },
    children: (0, r.jsx)(a.animated.div, {
      className: s()(v._e, {
        [v.fr]: o.Fr
      }),
      style: {
        transform: u.to(e => "translateY(".concat((1 - e) * 90, "px)"))
      },
      children: (0, r.jsx)("img", {
        className: s()(v.Q, {
          [v.fr]: o.Fr
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
  } = n.springs, c = t.features.has(j.GuildFeatures.DISCOVERABLE), p = (0, r.jsx)("div", {
    className: v.WV,
    children: c && (0, r.jsx)(u.m, {
      text: _.intl.string(_.t.O8lDI2),
      position: "right",
      children: (0, r.jsxs)("div", {
        className: v.Pl,
        children: [(0, r.jsx)(d.L_e, {
          size: "custom",
          color: "currentColor",
          width: 12,
          height: 12,
          className: v.ju
        }), (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "none",
          children: _.intl.string(_.t["B/vjCu"])
        })]
      })
    })
  });
  return i ? (0, r.jsx)("div", {
    className: s()(v.pS, v.W$),
    children: p
  }) : (0, r.jsx)(a.animated.div, {
    className: v.pS,
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
    className: v.PA,
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
    className: v.UU,
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
    ariaExpanded: f,
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
          source: j.PE1.GUILD_HEADER_INVITE_BUTTON
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
      className: v.Vm,
      "aria-label": _.intl.formatToPlainString(_.t.xMXpl3, {
        guildName: null != (t = null == s ? true : s.name) ? t : ""
      }),
      "aria-controls": p,
      "aria-expanded": f,
      onContextMenu: o,
      onClick: a,
      children: [(0, r.jsxs)("div", {
        className: v.LO,
        children: [(0, r.jsx)(O.A, {
          guild: s,
          isBannerVisible: i
        }), s.id === x.V && (0, r.jsx)(I, {}), (0, r.jsx)(N, {
          guild: s
        })]
      }), (0, r.jsx)("div", {
        className: v.dx,
        children: m
      })]
    }), !T.includes(s.id) && (0, r.jsx)(u.m, {
      text: _.intl.string(_.t.Sd8Ixw),
      position: "bottom",
      asContainer: true,
      children: (0, r.jsx)(d.DUT, {
        className: v.ak,
        onClick: () => {
          y()
        },
        children: (0, r.jsx)(d.DpX, {
          size: "refresh_sm",
          color: "currentColor"
        })
      })
    }), s.id === j.gNP && (0, r.jsx)(g.g, {})]
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
    onMouseDown: g,
    disableBannerAnimation: b,
    "aria-expanded": O,
    "aria-controls": x,
    guild: _,
    guildBanner: E,
    animationOverlayHeight: I,
    children: N,
    headerClassName: T,
    communityInfoVisible: w,
    hasSubheader: D
  } = e, L = _.features.has(j.GuildFeatures.ANIMATED_BANNER), M = (0, p.A)(_), G = !M && (0, y.A)(_), k = !M && w, U = (0, A.VI)(E) && L && !b, [V, B] = l.useState(false), H = l.useRef(false), F = l.useRef(null), Y = null != t ? t : F, K = l.useRef(true), W = m.kt.getSetting(), z = (0, c.bG)([f.A], () => f.A.theme);
  l.useEffect(() => {
    if (U && n && !H.current && W) return B(true), K.current = setTimeout(() => {
      B(false)
    }, 5e3), () => {
      clearTimeout(K.current)
    }
  }, [U, n, W]), l.useEffect(() => {
    H.current = n
  }, [n]);
  let X = () => {
    let {
      renderBanner: t,
      guildBanner: n
    } = e;
    return null != n && !t
  };
  return (0, r.jsx)(d.NPJ, {
    theme: z,
    children: e => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        "data-has-banner": X(),
        "data-banner-visible": n,
        ref: Y,
        className: s()(a, {
          [v.kL]: true,
          [v.r9]: X(),
          [v.Pi]: n,
          [e]: false,
          [v.Iv]: k || D && G
        }),
        onMouseDown: g,
        onContextMenu: h,
        children: [(0, r.jsxs)("header", {
          className: s()(v.wx, T, {
            [v.jD]: o.Fr
          }),
          children: [(0, r.jsx)("div", {
            className: s()(v.VW, v.Nk),
            children: (0, r.jsx)(P, {
              bannerVisible: n,
              guild: _,
              onClick: u,
              onContextMenu: h,
              ariaControls: x,
              ariaExpanded: O,
              children: N
            })
          }), G && (0, r.jsx)(S, {
            guild: _,
            controller: i,
            hasBanner: null != E,
            hasSubheader: null != D && D
          })]
        }), null != E ? (0, r.jsx)(C, {
          guild: _,
          controller: i,
          guildBanner: E,
          animate: V
        }) : null, (0, r.jsx)(R, {
          controller: i
        })]
      }), U && X() ? (0, r.jsx)("div", {
        className: v.rt,
        onMouseEnter: () => {
          B(true), clearTimeout(K.current)
        },
        onMouseLeave: () => B(false),
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
      className: v.UL,
      style: {
        opacity: l.to(e => .5 * e)
      }
    }), (0, r.jsx)(a.animated.div, {
      className: v.ze,
      style: {
        opacity: l.to(e => e)
      }
    }), (0, r.jsx)(a.animated.div, {
      className: v.iI,
      style: {
        opacity: l.to(e => (1 - e) * 6),
        filter: (0, d.qB1)(n) ? l.to(e => "brightness(".concat(.75 + .25 * e, ")")) : true
      }
    })]
  })
}