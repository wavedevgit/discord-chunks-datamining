/** Chunk was on 84802 **/
/** chunk id: 939716, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => S,
  Z: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk688619 = require("./688619.js"),
  o = require.n(Chunk688619),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js"),
  Chunk112724 = require("./112724.jsx"),
  Chunk220082 = require("./220082.js"),
  Chunk446411 = require("./446411.jsx"),
  Chunk679056 = require("./679056.jsx"),
  Chunk44488 = require("./44488.jsx"),
  Chunk519160 = require("./519160.jsx"),
  Chunk124347 = require("./124347.jsx"),
  Chunk524444 = require("./524444.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk181268 = require("./181268.js"),
  Chunk981631 = require("./981631.js"),
  Chunk224527 = require("./224527.js");

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function P() {
  var e, t;
  let n = (e = ["grayscale(", ")"], exports || (t = module.slice(0)), Object.freeze(Object.defineProperties(module, {
    raw: {
      value: Object.freeze(exports)
    }
  })));
  return P = function() {
    return require
  }, require
}
let S = 747,
  j = e => {
    var t, n;
    return (0, h.lV)((t = k({}, e), n = n = {
      className: v.videoWrapper,
      mediaPlayerClassName: v.mediaPlayer
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        n.push.apply(n, a)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  },
  y = e => (0, a.jsx)(C.ZP, k({}, e));

function N(e) {
  let t = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
    [n, a] = (0, m.Cf)(t, "#000000"),
    r = l.useMemo(() => {
      let e = o()(n).darken(1);
      return "radial-gradient(circle, ".concat(e.alpha(.2).hex(), " 0%, transparent 100%)")
    }, [n]);
  return null != t && "#000000" !== n ? r : true
}

function T(e) {
  let {
    item: t,
    onPlay: n,
    onEnded: l,
    onClick: r,
    playable: o,
    isMuted: i
  } = e, s = N(t), c = (0, a.jsx)(f.BC, {
    href: null,
    thumbnail: {
      url: t.videoThumbnailSrc,
      width: S,
      height: 560
    },
    video: {
      url: t.src,
      proxyURL: t.src,
      width: S,
      height: 560
    },
    provider: true,
    allowFullScreen: true,
    maxHeight: 560,
    maxWidth: S,
    onPlay: n,
    onEnded: l,
    playable: o,
    className: v.video,
    volume: 1,
    autoMute: i,
    autoPlay: o,
    renderVideoComponent: j,
    renderImageComponent: y,
    renderLinkComponent: h.iT
  }, i ? "player-muted" : "player-unmuted"), d = {
    background: s
  };
  return o ? (0, a.jsx)("div", {
    className: v.itemImageWrapper,
    style: d,
    children: c
  }) : (0, a.jsx)(u.P3F, {
    className: v.itemImageWrapper,
    onClick: r,
    style: d,
    children: c
  })
}

function O(e) {
  let {
    item: t,
    setHasInteracted: n,
    onSetItem: l,
    isCurrentItem: r,
    itemIndex: o
  } = e, i = {
    background: N(t)
  };
  return r ? (0, a.jsx)(u.P3F, {
    onClick: () => n(true),
    className: v.itemImageWrapper,
    style: i,
    children: (0, a.jsx)("img", {
      src: t.src,
      alt: "",
      className: v.currentImage
    })
  }) : (0, a.jsx)(u.P3F, {
    onClick: () => l(o),
    className: v.itemImageWrapper,
    style: i,
    children: (0, a.jsx)("img", {
      alt: "",
      className: v.itemImage,
      src: t.src,
      draggable: false
    })
  })
}
let E = (0, Chunk112724.Z)(e => {
  let {
    items: t,
    className: n,
    paused: r = false,
    autoplayInterval: o = 8e3,
    onItemChange: i,
    isMuted: u = true,
    onTrackClick: d
  } = e, [m, f] = (0, l.useState)(0), C = (0, l.useRef)(0), h = (0, l.useRef)(t.length), [k, j] = (0, l.useState)(true), [y, N] = (0, l.useState)(false), [E, w] = (0, l.useState)(false), [L, R] = (0, l.useState)(false), [A, B] = (0, l.useState)(false), Z = (0, l.useCallback)((e, n) => {
    var a;
    let l = null == (a = t[e]) ? true : a.backgroundSrc,
      r = n.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
        extrapolate: c.Z.Extrapolate.CLAMP
      });
    return {
      opacity: n.interpolate({
        inputRange: [0, 1],
        outputRange: [.3, 1],
        extrapolate: c.Z.Extrapolate.CLAMP
      }),
      filter: c.Z.template(P(), r),
      backgroundImage: null != l ? "url(".concat(l, ")") : true,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }
  }, [t]), W = (0, l.useCallback)(function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    N(false), w(t);
    let n = h.current,
      a = (0, g.gN)(C.current, n),
      l = (0, g.gN)(e, n);
    C.current = l, f(l), j(1 === Math.abs(l - a) || l === n - 1 && 0 === a || 0 === l && a === n - 1)
  }, []), D = (0, l.useCallback)(() => {
    W(C.current + 1, false)
  }, [W]), U = (0, l.useCallback)(() => {
    null == d || d(I.o4.CAROUSEL_NEXT), W(C.current + 1)
  }, [W, d]), M = (0, l.useCallback)(() => {
    null == d || d(I.o4.CAROUSEL_PREV), W(C.current - 1)
  }, [W, d]), H = (0, l.useCallback)(e => {
    N(true), w(!e)
  }, []), F = (0, l.useCallback)(() => {
    E || D()
  }, [E, D]), z = (0, l.useCallback)(e => {
    let t = C.current;
    e < t ? R(true) : e > t && B(true)
  }, []), Q = (0, l.useCallback)(() => {
    R(false), B(false)
  }, []), Y = (0, l.useCallback)((e, t, n) => (0, a.jsx)(O, {
    item: e,
    itemIndex: t,
    isCurrentItem: n,
    onSetItem: e => {
      null == d || d(I.o4.CAROUSEL_ITEM), W(e)
    },
    setHasInteracted: w
  }), [W, d]), G = (0, l.useCallback)((e, n, l) => {
    let r = n === (0, g.gN)(m, t.length);
    return (0, a.jsx)(c.Z.div, {
      className: s()(v.item, {
        [v.currentItem]: r
      }),
      style: null != l ? Z(n, l) : null,
      onMouseEnter: r ? null : () => z(n),
      onMouseLeave: r ? null : Q,
      children: "video" === e.type ? (0, a.jsx)(T, {
        item: e,
        onPlay: H,
        onEnded: F,
        playable: r,
        isMuted: u,
        onClick: () => {
          null == d || d(I.o4.CAROUSEL_ITEM), W(n)
        }
      }) : Y(e, n, r)
    })
  }, [m, t.length, Z, z, Q, H, F, W, Y, u, d]), V = (0, l.useCallback)(() => {
    let e = (0, a.jsx)(g.ZP, {
      className: v.carousel,
      items: t,
      itemSize: {
        width: S,
        margin: 0
      },
      renderItem: G,
      currentIndex: m,
      animate: k,
      edgeItems: 2
    });
    return t.length <= 1 ? e : (0, a.jsxs)("div", {
      className: v.carouselButtonsContainer,
      children: [e, (0, a.jsx)(p.am, {
        onClick: M,
        className: s()(v.arrow, {
          [v.arrowHovered]: L
        })
      }), (0, a.jsx)(p.Pz, {
        onClick: U,
        className: s()(v.arrow, {
          [v.arrowHovered]: A
        })
      })]
    })
  }, [t, G, m, k, M, U, L, A]), K = (0, l.useCallback)((e, t) => {
    let n = m === t;
    return (0, a.jsx)("div", {
      className: s()(v.paginationItem, n ? v.selectedStorePaginationItem : v.unselectedStorePaginationItem),
      children: (0, a.jsx)("img", {
        alt: "",
        className: v.storePaginationImg,
        src: null != e.thumbnailSrc ? e.thumbnailSrc : "image" === e.type ? e.src : "video" === e.type ? e.videoThumbnailSrc : true,
        draggable: false
      })
    }, "page-".concat(t))
  }, [m]);
  (0, l.useEffect)(() => (_.S.subscribe(x.CkL.CAROUSEL_PREV, M), _.S.subscribe(x.CkL.CAROUSEL_NEXT, U), () => {
    _.S.unsubscribe(x.CkL.CAROUSEL_PREV, M), _.S.unsubscribe(x.CkL.CAROUSEL_NEXT, U)
  }), [M, U]), (0, l.useEffect)(() => {
    h.current = t.length
  }, [t]), (0, l.useEffect)(() => {
    null == i || i(t[m], m)
  }, [m, t, i]);
  let X = (0, l.useCallback)(e => {
    null == d || d(I.o4.CAROUSEL_ITEM), W(e)
  }, [W, d]);
  return (0, a.jsxs)(b.Z, {
    pauseOnHover: true,
    onInterval: D,
    interval: o,
    className: n,
    disable: y || E || r,
    children: [V(), (0, a.jsx)("div", {
      className: v.pagination,
      children: (0, a.jsx)(p.ZP, {
        renderItem: K,
        scrollToPadding: 40,
        items: t,
        selectedIndex: m,
        onSetItem: X,
        paginationContainerClass: v.scroller,
        align: p.ZP.Align.CENTER
      })
    })]
  })
})