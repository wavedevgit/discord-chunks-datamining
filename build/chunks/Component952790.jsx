/** Chunk was on 97492 **/
/** chunk id: 952790, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => P
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function _(e) {
  var t;
  let {
    guild: n,
    controller: l,
    guildBanner: i,
    animate: c
  } = e, {
    value: u
  } = l.springs;
  return (0, r.jsx)(s.animated.div, {
    className: x.nI,
    style: {
      opacity: u,
      transform: u.to(e => "translateY(-".concat((1 - e) * 90, "px)"))
    },
    children: (0, r.jsx)(s.animated.div, {
      className: a()(x._e, {
        [x.fr]: o.Fr
      }),
      style: {
        transform: u.to(e => "translateY(".concat((1 - e) * 90, "px)"))
      },
      children: (0, r.jsx)("img", {
        className: a()(x.Q, {
          [x.fr]: o.Fr
        }),
        src: null != (t = m.Ay.getGuildBannerURL({
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
  } = n.springs, c = t.features.has(O.GuildFeatures.DISCOVERABLE), f = (0, r.jsx)("div", {
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
    className: a()(x.pS, x.W$),
    children: f
  }) : (0, r.jsx)(s.animated.div, {
    className: x.pS,
    style: l ? {
      opacity: o
    } : {
      height: o.to(e => "".concat(20 * e, "px"))
    },
    children: f
  })
}

function S() {
  return (0, r.jsx)(d.Gg5, {
    size: "custom",
    color: "currentColor",
    className: x.PA,
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
    className: x.UU,
    children: t.name
  })
}
let N = [Chunk349828.V, Chunk652215.gNP];

function T(e) {
  var t;
  let {
    bannerVisible: i,
    guild: a,
    onClick: s,
    onContextMenu: o,
    ariaControls: f,
    ariaExpanded: b,
    children: m
  } = e, A = (0, c.bG)([g.A], () => (0, p.K)(g.A, a)), _ = l.useCallback(() => {
    A ? (0, d.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("43600"), n.e("65202")]).then(n.bind(n, 234355));
      return t => {
        var n, l;
        return (0, r.jsx)(e, (n = E({}, t), l = l = {
          guild: a,
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
  }, [A, a]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(d.DUT, {
      className: x.Vm,
      "aria-label": v.intl.formatToPlainString(v.t.xMXpl3, {
        guildName: null != (t = null == a ? true : a.name) ? t : ""
      }),
      "aria-controls": f,
      "aria-expanded": b,
      onContextMenu: o,
      onClick: s,
      children: [(0, r.jsxs)("div", {
        className: x.LO,
        children: [(0, r.jsx)(y.A, {
          guild: a,
          isBannerVisible: i
        }), a.id === j.V && (0, r.jsx)(S, {}), (0, r.jsx)(I, {
          guild: a
        })]
      }), (0, r.jsx)("div", {
        className: x.dx,
        children: m
      })]
    }), !N.includes(a.id) && (0, r.jsx)(u.m, {
      text: v.intl.string(v.t.Sd8Ixw),
      position: "bottom",
      asContainer: true,
      children: (0, r.jsx)(d.DUT, {
        className: x.ak,
        onClick: () => {
          _()
        },
        children: (0, r.jsx)(d.DpX, {
          size: "refresh_sm",
          color: "currentColor"
        })
      })
    }), a.id === O.gNP && (0, r.jsx)(h.g, {})]
  })
}
let P = Chunk64700.memo(function(e) {
  let {
    ref: t,
    bannerVisible: n,
    controller: i,
    className: s,
    onClick: c,
    onContextMenu: u,
    onMouseDown: p,
    disableBannerAnimation: h,
    "aria-expanded": g,
    "aria-controls": y,
    guild: j,
    guildBanner: v,
    animationOverlayHeight: E,
    children: S,
    headerClassName: I,
    communityInfoVisible: N,
    hasSubheader: P
  } = e, R = j.features.has(O.GuildFeatures.ANIMATED_BANNER), D = (0, f.A)(j), M = !D && (0, A.A)(j), L = !D && N, G = (0, m.VI)(v) && R && !h, [k, U] = l.useState(false), V = l.useRef(false), F = l.useRef(null), H = null != t ? t : F, B = l.useRef(true), K = b.kt.getSetting();
  l.useEffect(() => {
    if (G && n && !V.current && K) return U(true), B.current = setTimeout(() => {
      U(false)
    }, 5e3), () => {
      clearTimeout(B.current)
    }
  }, [G, n, K]), l.useEffect(() => {
    V.current = n
  }, [n]);
  let W = () => {
    let {
      renderBanner: t,
      guildBanner: n
    } = e;
    return null != n && !t
  };
  return (0, r.jsx)(d.NPJ, {
    theme: n ? O.NJ8.DARK : true,
    children: e => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        "data-has-banner": W(),
        "data-banner-visible": n,
        ref: H,
        className: a()(s, {
          [x.kL]: true,
          [x.r9]: W(),
          [x.Pi]: n,
          [e]: false,
          [x.Iv]: L || P && M
        }),
        onMouseDown: p,
        onContextMenu: u,
        children: [(0, r.jsxs)("header", {
          className: a()(x.wx, I, {
            [x.jD]: o.Fr
          }),
          children: [(0, r.jsx)("div", {
            className: a()(x.VW, x.Nk),
            children: (0, r.jsx)(T, {
              bannerVisible: n,
              guild: j,
              onClick: c,
              onContextMenu: u,
              ariaControls: y,
              ariaExpanded: g,
              children: S
            })
          }), M && (0, r.jsx)(C, {
            guild: j,
            controller: i,
            hasBanner: null != v,
            hasSubheader: null != P && P
          })]
        }), null != v ? (0, r.jsx)(_, {
          guild: j,
          controller: i,
          guildBanner: v,
          animate: k
        }) : null, (0, r.jsx)(w, {
          controller: i
        })]
      }), G && W() ? (0, r.jsx)("div", {
        className: x.rt,
        onMouseEnter: () => {
          U(true), clearTimeout(B.current)
        },
        onMouseLeave: () => U(false),
        style: {
          height: E
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
    children: [(0, r.jsx)(s.animated.div, {
      className: x.UL,
      style: {
        opacity: l.to(e => .5 * e)
      }
    }), (0, r.jsx)(s.animated.div, {
      className: x.ze,
      style: {
        opacity: l.to(e => e)
      }
    }), (0, r.jsx)(s.animated.div, {
      className: x.iI,
      style: {
        opacity: l.to(e => (1 - e) * 6),
        filter: (0, d.qB1)(n) ? l.to(e => "brightness(".concat(.75 + .25 * e, ")")) : true
      }
    })]
  })
}