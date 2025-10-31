/** Chunk was on 84802 **/
/** chunk id: 939716, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => v,
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js"),
  Chunk112724 = require("./112724.jsx"),
  Chunk446411 = require("./446411.jsx"),
  Chunk679056 = require("./679056.jsx"),
  Chunk44488 = require("./44488.jsx"),
  Chunk519160 = require("./519160.jsx"),
  Chunk124347 = require("./124347.jsx"),
  Chunk524444 = require("./524444.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk925962 = require("./925962.js");

function f(e) {
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

function I() {
  var e, t;
  let n = (e = ["grayscale(", ")"], exports || (t = module.slice(0)), Object.freeze(Object.defineProperties(module, {
    raw: {
      value: Object.freeze(exports)
    }
  })));
  return I = function() {
    return require
  }, require
}
let v = 747,
  x = e => {
    var t, n;
    return (0, h.lV)((t = f({}, e), n = n = {
      className: b.videoWrapper,
      mediaPlayerClassName: b.mediaPlayer
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
  P = e => (0, a.jsx)(g.ZP, f({}, e));

function S(e) {
  let {
    item: t,
    onPlay: n,
    onEnded: r,
    onClick: l,
    playable: i
  } = e, o = (0, a.jsx)(u.BC, {
    href: null,
    thumbnail: {
      url: t.videoThumbnailSrc,
      width: v,
      height: 560
    },
    video: {
      url: t.src,
      proxyURL: t.src,
      width: v,
      height: 560
    },
    provider: true,
    allowFullScreen: true,
    maxHeight: 560,
    maxWidth: v,
    onPlay: n,
    onEnded: r,
    playable: i,
    className: b.video,
    volume: 1,
    autoMute: true,
    autoPlay: i,
    renderVideoComponent: x,
    renderImageComponent: P,
    renderLinkComponent: h.iT
  });
  return i ? o : (0, a.jsx)(s.P3F, {
    className: b.itemImageWrapper,
    onClick: l,
    children: o
  })
}
let j = (0, Chunk112724.Z)(e => {
  let {
    items: t,
    className: n,
    paused: l = false,
    autoplayInterval: c = 8e3
  } = e, [u, g] = (0, r.useState)(0), [h, f] = (0, r.useState)(true), [x, P] = (0, r.useState)(false), [j, y] = (0, r.useState)(false), [k, N] = (0, r.useState)(false), [O, R] = (0, r.useState)(false), E = (0, r.useCallback)((e, n) => {
    var a;
    let r = null == (a = t[e]) ? true : a.backgroundSrc,
      l = n.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
        extrapolate: o.Z.Extrapolate.CLAMP
      });
    return {
      opacity: n.interpolate({
        inputRange: [0, 1],
        outputRange: [.3, 1],
        extrapolate: o.Z.Extrapolate.CLAMP
      }),
      filter: o.Z.template(I(), l),
      backgroundImage: null != r ? "url(".concat(r, ")") : true,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }
  }, [t]), w = (0, r.useCallback)(function(e) {
    let n = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      a = (0, p.gN)(u, t.length),
      r = (0, p.gN)(e, t.length),
      l = 1 === Math.abs(e - a) || e === t.length - 1 && 0 === a || 0 === e && a === t.length - 1;
    P(false), g(r), f(l), y(n)
  }, [u, t]), L = (0, r.useCallback)(() => {
    w(u + 1, false)
  }, [w, u]), A = (0, r.useCallback)(() => {
    w(u + 1)
  }, [w, u]), T = (0, r.useCallback)(() => {
    w(u - 1)
  }, [w, u]), Z = (0, r.useCallback)(e => {
    P(true), y(!e)
  }, []), W = (0, r.useCallback)(() => {
    j || L()
  }, [j, L]), D = (0, r.useCallback)(e => {
    e < u ? N(true) : e > u && R(true)
  }, [u]), B = (0, r.useCallback)(() => {
    N(false), R(false)
  }, []), F = (0, r.useCallback)((e, t, n) => n ? (0, a.jsx)(s.P3F, {
    onClick: () => y(true),
    className: b.itemImageWrapper,
    children: (0, a.jsx)("img", {
      src: e.src,
      alt: "",
      className: b.currentImage
    })
  }) : (0, a.jsx)(s.P3F, {
    onClick: () => w(t),
    className: b.itemImageWrapper,
    children: (0, a.jsx)("img", {
      alt: "",
      className: b.itemImage,
      src: e.src,
      draggable: false
    })
  }), [w]), H = (0, r.useCallback)((e, n, r) => {
    let l = n === (0, p.gN)(u, t.length);
    return (0, a.jsx)(o.Z.div, {
      className: i()(b.item, {
        [b.currentItem]: l
      }),
      style: null != r ? E(n, r) : null,
      onMouseEnter: l ? null : () => D(n),
      onMouseLeave: l ? null : B,
      children: "video" === e.type ? (0, a.jsx)(S, {
        item: e,
        onPlay: Z,
        onEnded: W,
        playable: l,
        onClick: () => w(n)
      }) : F(e, n, l)
    })
  }, [u, t.length, E, D, B, Z, W, w, F]), z = (0, r.useCallback)(() => {
    let e = (0, a.jsx)(p.ZP, {
      className: b.carousel,
      items: t,
      itemSize: {
        width: v,
        margin: 12
      },
      renderItem: H,
      currentIndex: u,
      animate: h,
      edgeItems: 2
    });
    return t.length <= 1 ? e : (0, a.jsxs)("div", {
      className: b.carouselButtonsContainer,
      children: [e, (0, a.jsx)(m.am, {
        onClick: T,
        className: i()(b.arrow, {
          [b.arrowHovered]: k
        })
      }), (0, a.jsx)(m.Pz, {
        onClick: A,
        className: i()(b.arrow, {
          [b.arrowHovered]: O
        })
      })]
    })
  }, [t, H, u, h, T, A, k, O]), M = (0, r.useCallback)((e, t) => {
    let n = u === t;
    return (0, a.jsx)("div", {
      className: i()(b.paginationItem, n ? b.selectedStorePaginationItem : b.unselectedStorePaginationItem),
      children: (0, a.jsx)("img", {
        alt: "",
        className: b.storePaginationImg,
        src: null != e.thumbnailSrc ? e.thumbnailSrc : "image" === e.type ? e.src : "video" === e.type ? e.videoThumbnailSrc : true,
        draggable: false
      })
    }, "page-".concat(t))
  }, [u]);
  return (0, r.useEffect)(() => (_.S.subscribe(C.CkL.CAROUSEL_PREV, T), _.S.subscribe(C.CkL.CAROUSEL_NEXT, A), () => {
    _.S.unsubscribe(C.CkL.CAROUSEL_PREV, T), _.S.unsubscribe(C.CkL.CAROUSEL_NEXT, A)
  }), [T, A]), (0, a.jsxs)(d.Z, {
    pauseOnHover: true,
    onInterval: L,
    interval: c,
    className: n,
    disable: x || j || l,
    children: [z(), (0, a.jsx)("div", {
      className: b.pagination,
      children: (0, a.jsx)(m.ZP, {
        renderItem: M,
        scrollToPadding: 40,
        items: t,
        selectedIndex: u,
        onSetItem: w,
        paginationContainerClass: b.scroller,
        align: m.ZP.Align.CENTER
      })
    })]
  })
})