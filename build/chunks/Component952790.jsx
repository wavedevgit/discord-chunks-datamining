/** Chunk was on 97492 **/
/** chunk id: 952790, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => P
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
  Chunk253932 = require("./253932.js"),
  Chunk576705 = require("./576705.js"),
  Chunk486020 = require("./486020.js"),
  Chunk885631 = require("./885631.js"),
  Chunk986268 = require("./986268.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk349828 = require("./349828.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk668560 = require("./668560.js");

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

function E(e) {
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
        src: null != (t = b.Ay.getGuildBannerURL({
          id: n.id,
          banner: i
        }, c)) ? t : "",
        alt: "",
        "aria-hidden": true
      })
    })
  })
}

function C(e) {
  let {
    guild: t,
    controller: n,
    hasBanner: l,
    hasSubheader: i
  } = e, {
    value: o
  } = n.springs, c = t.features.has(_.GuildFeatures.DISCOVERABLE), p = (0, r.jsx)("div", {
    className: v.WV,
    children: c && (0, r.jsx)(u.m, {
      text: j.intl.string(j.t.O8lDI2),
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
          children: j.intl.string(j.t["B/vjCu"])
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

function S() {
  return (0, r.jsx)(d.Gg5, {
    size: "custom",
    color: "currentColor",
    className: v.PA,
    height: 20,
    width: 20
  })
}

function I(e) {
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
let N = [Chunk349828.V, Chunk652215.gNP];

function T(e) {
  var t;
  let {
    bannerVisible: i,
    guild: s,
    onClick: a,
    onContextMenu: o,
    ariaControls: p,
    ariaExpanded: g,
    children: b
  } = e, A = (0, c.bG)([m.A], () => (0, h.K)(m.A, s)), E = l.useCallback(() => {
    A ? (0, d.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("43600"), n.e("65202")]).then(n.bind(n, 234355));
      return t => {
        var n, l;
        return (0, r.jsx)(e, (n = x({}, t), l = l = {
          guild: s,
          source: _.PE1.GUILD_HEADER_INVITE_BUTTON
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
      return t => (0, r.jsx)(e, x({}, t))
    })
  }, [A, s]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(d.DUT, {
      className: v.Vm,
      "aria-label": j.intl.formatToPlainString(j.t.xMXpl3, {
        guildName: null != (t = null == s ? true : s.name) ? t : ""
      }),
      "aria-controls": p,
      "aria-expanded": g,
      onContextMenu: o,
      onClick: a,
      children: [(0, r.jsxs)("div", {
        className: v.LO,
        children: [(0, r.jsx)(y.A, {
          guild: s,
          isBannerVisible: i
        }), s.id === O.V && (0, r.jsx)(S, {}), (0, r.jsx)(I, {
          guild: s
        })]
      }), (0, r.jsx)("div", {
        className: v.dx,
        children: b
      })]
    }), !N.includes(s.id) && (0, r.jsx)(u.m, {
      text: j.intl.string(j.t.Sd8Ixw),
      position: "bottom",
      asContainer: true,
      children: (0, r.jsx)(d.DUT, {
        className: v.ak,
        onClick: () => {
          E()
        },
        children: (0, r.jsx)(d.DpX, {
          size: "refresh_sm",
          color: "currentColor"
        })
      })
    }), s.id === _.gNP && (0, r.jsx)(f.g, {})]
  })
}
let P = Chunk64700.memo(function(e) {
  let {
    ref: t,
    bannerVisible: n,
    controller: i,
    className: a,
    onClick: c,
    onContextMenu: u,
    onMouseDown: h,
    disableBannerAnimation: f,
    "aria-expanded": m,
    "aria-controls": y,
    guild: O,
    guildBanner: j,
    animationOverlayHeight: x,
    children: S,
    headerClassName: I,
    communityInfoVisible: N,
    hasSubheader: P
  } = e, R = O.features.has(_.GuildFeatures.ANIMATED_BANNER), D = (0, p.A)(O), M = !D && (0, A.A)(O), L = !D && N, k = (0, b.VI)(j) && R && !f, [G, U] = l.useState(false), B = l.useRef(false), V = l.useRef(null), F = null != t ? t : V, H = l.useRef(true), K = g.kt.getSetting();
  l.useEffect(() => {
    if (k && n && !B.current && K) return U(true), H.current = setTimeout(() => {
      U(false)
    }, 5e3), () => {
      clearTimeout(H.current)
    }
  }, [k, n, K]), l.useEffect(() => {
    B.current = n
  }, [n]);
  let W = () => {
    let {
      renderBanner: t,
      guildBanner: n
    } = e;
    return null != n && !t
  };
  return (0, r.jsx)(d.NPJ, {
    theme: n ? _.NJ8.DARK : true,
    children: e => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        "data-has-banner": W(),
        "data-banner-visible": n,
        ref: F,
        className: s()(a, {
          [v.kL]: true,
          [v.r9]: W(),
          [v.Pi]: n,
          [e]: false,
          [v.Iv]: L || P && M
        }),
        onMouseDown: h,
        onContextMenu: u,
        children: [(0, r.jsxs)("header", {
          className: s()(v.wx, I, {
            [v.jD]: o.Fr
          }),
          children: [(0, r.jsx)("div", {
            className: s()(v.VW, v.Nk),
            children: (0, r.jsx)(T, {
              bannerVisible: n,
              guild: O,
              onClick: c,
              onContextMenu: u,
              ariaControls: y,
              ariaExpanded: m,
              children: S
            })
          }), M && (0, r.jsx)(C, {
            guild: O,
            controller: i,
            hasBanner: null != j,
            hasSubheader: null != P && P
          })]
        }), null != j ? (0, r.jsx)(E, {
          guild: O,
          controller: i,
          guildBanner: j,
          animate: G
        }) : null, (0, r.jsx)(w, {
          controller: i
        })]
      }), k && W() ? (0, r.jsx)("div", {
        className: v.rt,
        onMouseEnter: () => {
          U(true), clearTimeout(H.current)
        },
        onMouseLeave: () => U(false),
        style: {
          height: x
        }
      }) : null]
    })
  })
});

function w(e) {
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