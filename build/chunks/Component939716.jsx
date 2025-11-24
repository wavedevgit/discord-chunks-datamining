/** Chunk was on 84802 **/
/** chunk id: 939716, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => j,
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
  Chunk925962 = require("./925962.js");

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function k() {
  var e, t;
  let n = (e = ["grayscale(", ")"], exports || (t = module.slice(0)), Object.freeze(Object.defineProperties(module, {
    raw: {
      value: Object.freeze(exports)
    }
  })));
  return k = function() {
    return require
  }, require
}
let j = 747,
  S = e => {
    var t, n;
    return (0, f.lV)((t = P({}, e), n = n = {
      className: v.videoWrapper,
      mediaPlayerClassName: v.mediaPlayer
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        n.push.apply(n, l)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  },
  y = e => (0, l.jsx)(C.ZP, P({}, e));

function N(e) {
  let t = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
    [n, l] = (0, m.Cf)(t, "#000000"),
    r = a.useMemo(() => {
      let e = o()(n).darken(1);
      return "radial-gradient(circle, ".concat(e.alpha(.2).hex(), " 0%, transparent 100%)")
    }, [n]);
  return null != t && "#000000" !== n ? r : true
}

function T(e) {
  let {
    item: t,
    onPlay: n,
    onEnded: a,
    onClick: r,
    playable: o,
    isMuted: i
  } = e, s = N(t), c = (0, l.jsx)(p.BC, {
    href: null,
    thumbnail: {
      url: t.videoThumbnailSrc,
      width: j,
      height: 560
    },
    video: {
      url: t.src,
      proxyURL: t.src,
      width: j,
      height: 560
    },
    provider: true,
    allowFullScreen: true,
    maxHeight: 560,
    maxWidth: j,
    onPlay: n,
    onEnded: a,
    playable: o,
    className: v.video,
    volume: 1,
    autoMute: i,
    autoPlay: o,
    renderVideoComponent: S,
    renderImageComponent: y,
    renderLinkComponent: f.iT
  }, i ? "player-muted" : "player-unmuted"), d = {
    background: s
  };
  return o ? (0, l.jsx)("div", {
    className: v.itemImageWrapper,
    style: d,
    children: c
  }) : (0, l.jsx)(u.P3F, {
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
    onSetItem: a,
    isCurrentItem: r,
    itemIndex: o
  } = e, i = {
    background: N(t)
  };
  return r ? (0, l.jsx)(u.P3F, {
    onClick: () => n(true),
    className: v.itemImageWrapper,
    style: i,
    children: (0, l.jsx)("img", {
      src: t.src,
      alt: "",
      className: v.currentImage
    })
  }) : (0, l.jsx)(u.P3F, {
    onClick: () => a(o),
    className: v.itemImageWrapper,
    style: i,
    children: (0, l.jsx)("img", {
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
  } = e, [m, p] = (0, a.useState)(0), C = (0, a.useRef)(0), f = (0, a.useRef)(t.length), [P, S] = (0, a.useState)(true), [y, N] = (0, a.useState)(false), [E, w] = (0, a.useState)(false), [R, L] = (0, a.useState)(false), [A, B] = (0, a.useState)(false), Z = (0, a.useCallback)((e, n) => {
    var l;
    let a = null == (l = t[e]) ? true : l.backgroundSrc,
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
      filter: c.Z.template(k(), r),
      backgroundImage: null != a ? "url(".concat(a, ")") : true,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }
  }, [t]), W = (0, a.useCallback)(function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    N(false), w(t);
    let n = f.current,
      l = (0, h.gN)(C.current, n),
      a = (0, h.gN)(e, n);
    C.current = a, p(a), S(1 === Math.abs(a - l) || a === n - 1 && 0 === l || 0 === a && l === n - 1)
  }, []), U = (0, a.useCallback)(() => {
    W(C.current + 1, false)
  }, [W]), D = (0, a.useCallback)(() => {
    null == d || d(I.o4.CAROUSEL_NEXT), W(C.current + 1)
  }, [W, d]), M = (0, a.useCallback)(() => {
    null == d || d(I.o4.CAROUSEL_PREV), W(C.current - 1)
  }, [W, d]), H = (0, a.useCallback)(e => {
    N(true), w(!e)
  }, []), F = (0, a.useCallback)(() => {
    E || U()
  }, [E, U]), z = (0, a.useCallback)(e => {
    let t = C.current;
    e < t ? L(true) : e > t && B(true)
  }, []), Q = (0, a.useCallback)(() => {
    L(false), B(false)
  }, []), Y = (0, a.useCallback)((e, t, n) => (0, l.jsx)(O, {
    item: e,
    itemIndex: t,
    isCurrentItem: n,
    onSetItem: e => {
      null == d || d(I.o4.CAROUSEL_ITEM), W(e)
    },
    setHasInteracted: w
  }), [W, d]), G = (0, a.useCallback)((e, n, a) => {
    let r = n === (0, h.gN)(m, t.length);
    return (0, l.jsx)(c.Z.div, {
      className: s()(v.item, {
        [v.currentItem]: r
      }),
      style: null != a ? Z(n, a) : null,
      onMouseEnter: r ? null : () => z(n),
      onMouseLeave: r ? null : Q,
      children: "video" === e.type ? (0, l.jsx)(T, {
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
  }, [m, t.length, Z, z, Q, H, F, W, Y, u, d]), V = (0, a.useCallback)(() => {
    let e = (0, l.jsx)(h.ZP, {
      className: v.carousel,
      items: t,
      itemSize: {
        width: j,
        margin: 0
      },
      renderItem: G,
      currentIndex: m,
      animate: P,
      edgeItems: 2
    });
    return t.length <= 1 ? e : (0, l.jsxs)("div", {
      className: v.carouselButtonsContainer,
      children: [e, (0, l.jsx)(_.am, {
        onClick: M,
        className: s()(v.arrow, {
          [v.arrowHovered]: R
        })
      }), (0, l.jsx)(_.Pz, {
        onClick: D,
        className: s()(v.arrow, {
          [v.arrowHovered]: A
        })
      })]
    })
  }, [t, G, m, P, M, D, R, A]), K = (0, a.useCallback)((e, t) => {
    let n = m === t;
    return (0, l.jsx)("div", {
      className: s()(v.paginationItem, n ? v.selectedStorePaginationItem : v.unselectedStorePaginationItem),
      children: (0, l.jsx)("img", {
        alt: "",
        className: v.storePaginationImg,
        src: null != e.thumbnailSrc ? e.thumbnailSrc : "image" === e.type ? e.src : "video" === e.type ? e.videoThumbnailSrc : true,
        draggable: false
      })
    }, "page-".concat(t))
  }, [m]);
  (0, a.useEffect)(() => (b.S.subscribe(x.CkL.CAROUSEL_PREV, M), b.S.subscribe(x.CkL.CAROUSEL_NEXT, D), () => {
    b.S.unsubscribe(x.CkL.CAROUSEL_PREV, M), b.S.unsubscribe(x.CkL.CAROUSEL_NEXT, D)
  }), [M, D]), (0, a.useEffect)(() => {
    f.current = t.length
  }, [t]), (0, a.useEffect)(() => {
    null == i || i(t[m], m)
  }, [m, t, i]);
  let X = (0, a.useCallback)(e => {
    null == d || d(I.o4.CAROUSEL_ITEM), W(e)
  }, [W, d]);
  return (0, l.jsxs)(g.Z, {
    pauseOnHover: true,
    onInterval: U,
    interval: o,
    className: n,
    disable: y || E || r,
    children: [V(), (0, l.jsx)("div", {
      className: v.pagination,
      children: (0, l.jsx)(_.ZP, {
        renderItem: K,
        scrollToPadding: 40,
        items: t,
        selectedIndex: m,
        onSetItem: X,
        paginationContainerClass: v.scroller,
        align: _.ZP.Align.CENTER
      })
    })]
  })
})