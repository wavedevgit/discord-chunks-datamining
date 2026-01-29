/** Chunk was on 67851 **/
/** chunk id: 953590, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k,
  B: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk310784 = require("./310784.js"),
  i = require.n(Chunk310784),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk615300 = require("./615300.js"),
  Chunk397927 = require("./397927.js"),
  Chunk456412 = require("./456412.jsx"),
  Chunk654107 = require("./654107.js"),
  Chunk871751 = require("./871751.jsx"),
  Chunk133296 = require("./133296.jsx"),
  Chunk848752 = require("./848752.jsx"),
  Chunk452282 = require("./452282.jsx"),
  Chunk619517 = require("./619517.jsx"),
  Chunk652176 = require("./652176.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk995393 = require("./995393.js"),
  Chunk652215 = require("./652215.js"),
  Chunk863876 = require("./863876.js");

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

function A() {
  var e, t;
  let n = (e = ["grayscale(", ")"], t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  })));
  return A = function() {
    return n
  }, n
}
let x = 747,
  E = e => {
    var t, n;
    return (0, g.$o)((t = C({}, e), n = n = {
      className: v.tN,
      mediaPlayerClassName: v.yf
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  },
  S = e => (0, r.jsx)(f.Ay, C({}, e));

function T(e) {
  let t = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
    [n, r] = (0, _.rh)(t, "#000000"),
    a = l.useMemo(() => {
      let e = i()(n).darken(1);
      return "radial-gradient(circle, ".concat(e.alpha(.2).hex(), " 0%, transparent 100%)")
    }, [n]);
  return null != t && "#000000" !== n ? a : true
}

function I(e) {
  let {
    item: t,
    onPlay: n,
    onEnded: l,
    onClick: a,
    playable: i,
    isMuted: o
  } = e, s = T(t), c = (0, r.jsx)(m.rr, {
    href: null,
    thumbnail: {
      url: t.videoThumbnailSrc,
      width: x,
      height: 560
    },
    video: {
      url: t.src,
      proxyURL: t.src,
      width: x,
      height: 560
    },
    provider: true,
    allowFullScreen: true,
    maxHeight: 560,
    maxWidth: x,
    onPlay: n,
    onEnded: l,
    playable: i,
    className: v.Ki,
    volume: 1,
    autoMute: o,
    autoPlay: i,
    renderVideoComponent: E,
    renderImageComponent: S,
    renderLinkComponent: g.bU
  }, o ? "player-muted" : "player-unmuted"), u = {
    background: s
  };
  return i ? (0, r.jsx)("div", {
    className: v.AU,
    style: u,
    children: c
  }) : (0, r.jsx)(d.DUT, {
    className: v.AU,
    onClick: a,
    style: u,
    children: c
  })
}

function P(e) {
  let {
    item: t,
    setHasInteracted: n,
    onSetItem: l,
    isCurrentItem: a,
    itemIndex: i
  } = e, o = {
    background: T(t)
  };
  return a ? (0, r.jsx)(d.DUT, {
    onClick: () => n(true),
    className: v.AU,
    style: o,
    children: (0, r.jsx)("img", {
      src: t.src,
      alt: "",
      className: v.NP
    })
  }) : (0, r.jsx)(d.DUT, {
    onClick: () => l(i),
    className: v.AU,
    style: o,
    children: (0, r.jsx)("img", {
      alt: "",
      className: v.tv,
      src: t.src,
      draggable: false
    })
  })
}
let k = (0, Chunk456412.A)(e => {
  let {
    items: t,
    className: n,
    paused: a = false,
    autoplayInterval: i = 8e3,
    onItemChange: o,
    isMuted: d = true,
    onTrackClick: u
  } = e, _ = (0, l.useRef)(0), [m, f] = (0, l.useState)(0), [g, C] = (0, l.useState)(0), E = (0, l.useRef)(0), S = (0, l.useRef)(t.length), [T, k] = (0, l.useState)(true), [N, w] = (0, l.useState)(false), [R, U] = (0, l.useState)(false), [D, L] = (0, l.useState)(false), [M, B] = (0, l.useState)(false), F = (0, l.useCallback)((e, n) => {
    var r;
    let l = null == (r = t[e]) ? true : r.backgroundSrc,
      a = n.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
        extrapolate: c.A.Extrapolate.CLAMP
      });
    return {
      opacity: n.interpolate({
        inputRange: [0, 1],
        outputRange: [.3, 1],
        extrapolate: c.A.Extrapolate.CLAMP
      }),
      filter: c.A.template(A(), a),
      backgroundImage: null != l ? "url(".concat(l, ")") : true,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }
  }, [t]), H = (0, l.useCallback)(function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    w(false), U(t);
    let n = S.current,
      r = (0, h.U3)(E.current, n),
      l = (0, h.U3)(e, n);
    E.current = l, C(l), _.current++, f(_.current), k(1 === Math.abs(l - r) || l === n - 1 && 0 === r || 0 === l && r === n - 1)
  }, []), G = (0, l.useCallback)(() => {
    H(E.current + 1, false)
  }, [H]), W = (0, l.useCallback)(() => {
    null == u || u(y.Jq.CAROUSEL_NEXT), H(E.current + 1)
  }, [H, u]), Y = (0, l.useCallback)(() => {
    null == u || u(y.Jq.CAROUSEL_PREV), H(E.current - 1)
  }, [H, u]), q = (0, l.useCallback)(e => {
    w(true), U(!e)
  }, []), V = (0, l.useCallback)(() => {
    R || G()
  }, [R, G]), X = (0, l.useCallback)(e => {
    let t = E.current;
    e < t ? L(true) : e > t && B(true)
  }, []), z = (0, l.useCallback)(() => {
    L(false), B(false)
  }, []), J = (0, l.useCallback)((e, t, n) => (0, r.jsx)(P, {
    item: e,
    itemIndex: t,
    isCurrentItem: n,
    onSetItem: e => {
      null == u || u(y.Jq.CAROUSEL_ITEM), H(e)
    },
    setHasInteracted: U
  }), [H, u]), $ = (0, l.useCallback)((e, n, l) => {
    let a = n === (0, h.U3)(g, t.length);
    return (0, r.jsx)(c.A.div, {
      className: s()(v.AS, {
        [v.Xt]: a
      }),
      style: null != l ? F(n, l) : null,
      onMouseEnter: a ? null : () => X(n),
      onMouseLeave: a ? null : z,
      children: "video" === e.type ? (0, r.jsx)(I, {
        item: e,
        onPlay: q,
        onEnded: V,
        playable: a,
        isMuted: d,
        onClick: () => {
          null == u || u(y.Jq.CAROUSEL_ITEM), H(n)
        }
      }, m) : J(e, n, a)
    })
  }, [g, t.length, F, X, z, q, V, H, J, d, u, m]), K = (0, l.useCallback)(() => {
    let e = (0, r.jsx)(h.Ay, {
      className: v.Dk,
      items: t,
      itemSize: {
        width: x,
        margin: 0
      },
      renderItem: $,
      currentIndex: g,
      animate: T,
      edgeItems: 2
    });
    return t.length <= 1 ? e : (0, r.jsxs)("div", {
      className: v.HY,
      children: [e, (0, r.jsx)(p.Q8, {
        onClick: Y,
        className: s()(v.UE, {
          [v.h_]: D
        })
      }), (0, r.jsx)(p.Oj, {
        onClick: W,
        className: s()(v.UE, {
          [v.h_]: M
        })
      })]
    })
  }, [t, $, g, T, Y, W, D, M]), Q = (0, l.useCallback)((e, t) => {
    let n = g === t;
    return (0, r.jsx)("div", {
      className: s()(v.Yw, n ? v.sM : v.N7),
      children: (0, r.jsx)("img", {
        alt: "",
        className: v.Pr,
        src: null != e.thumbnailSrc ? e.thumbnailSrc : "image" === e.type ? e.src : "video" === e.type ? e.videoThumbnailSrc : true,
        draggable: false
      })
    }, "page-".concat(t))
  }, [g]);
  (0, l.useEffect)(() => (O._.subscribe(j.jej.CAROUSEL_PREV, Y), O._.subscribe(j.jej.CAROUSEL_NEXT, W), () => {
    O._.unsubscribe(j.jej.CAROUSEL_PREV, Y), O._.unsubscribe(j.jej.CAROUSEL_NEXT, W)
  }), [Y, W]), (0, l.useEffect)(() => {
    S.current = t.length
  }, [t]), (0, l.useEffect)(() => {
    null == o || o(t[g], g)
  }, [g, t, o]);
  let Z = (0, l.useCallback)(e => {
    null == u || u(y.Jq.CAROUSEL_ITEM), H(e)
  }, [H, u]);
  return (0, r.jsxs)(b.A, {
    pauseOnHover: true,
    onInterval: G,
    interval: i,
    className: n,
    disable: N || R || a,
    children: [K(), (0, r.jsx)("div", {
      className: v.X$,
      children: (0, r.jsx)(p.Ay, {
        renderItem: Q,
        scrollToPadding: 40,
        items: t,
        selectedIndex: g,
        onSetItem: Z,
        paginationContainerClass: v.XG,
        align: p.Ay.Align.CENTER
      })
    })]
  })
})