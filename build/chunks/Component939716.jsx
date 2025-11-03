/** Chunk was on 84802 **/
/** chunk id: 939716, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => v,
  Z: () => k
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

function x() {
  var e, t;
  let n = (e = ["grayscale(", ")"], exports || (t = module.slice(0)), Object.freeze(Object.defineProperties(module, {
    raw: {
      value: Object.freeze(exports)
    }
  })));
  return x = function() {
    return require
  }, require
}
let v = 747,
  I = e => {
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
  j = e => (0, a.jsx)(g.ZP, f({}, e));

function P(e) {
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
    renderVideoComponent: I,
    renderImageComponent: j,
    renderLinkComponent: h.iT
  });
  return i ? o : (0, a.jsx)(s.P3F, {
    className: b.itemImageWrapper,
    onClick: l,
    children: o
  })
}
let k = (0, Chunk112724.Z)(e => {
  let {
    items: t,
    className: n,
    paused: l = false,
    autoplayInterval: c = 8e3
  } = e, [u, g] = (0, r.useState)(0), h = (0, r.useRef)(0), f = (0, r.useRef)(t.length), [I, j] = (0, r.useState)(true), [k, S] = (0, r.useState)(false), [y, N] = (0, r.useState)(false), [w, O] = (0, r.useState)(false), [E, R] = (0, r.useState)(false), L = (0, r.useCallback)((e, n) => {
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
      filter: o.Z.template(x(), l),
      backgroundImage: null != r ? "url(".concat(r, ")") : true,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }
  }, [t]), Z = (0, r.useCallback)(function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    S(false), N(t);
    let n = f.current,
      a = (0, p.gN)(h.current, n),
      r = (0, p.gN)(e, n);
    h.current = r, g(r), j(1 === Math.abs(r - a) || r === n - 1 && 0 === a || 0 === r && a === n - 1)
  }, []), B = (0, r.useCallback)(() => {
    Z(h.current + 1, false)
  }, [Z]), T = (0, r.useCallback)(() => {
    Z(h.current + 1)
  }, [Z]), A = (0, r.useCallback)(() => {
    Z(h.current - 1)
  }, [Z]), W = (0, r.useCallback)(e => {
    S(true), N(!e)
  }, []), H = (0, r.useCallback)(() => {
    y || B()
  }, [y, B]), D = (0, r.useCallback)(e => {
    let t = h.current;
    e < t ? O(true) : e > t && R(true)
  }, []), z = (0, r.useCallback)(() => {
    O(false), R(false)
  }, []), F = (0, r.useCallback)((e, t, n) => n ? (0, a.jsx)(s.P3F, {
    onClick: () => N(true),
    className: b.itemImageWrapper,
    children: (0, a.jsx)("img", {
      src: e.src,
      alt: "",
      className: b.currentImage
    })
  }) : (0, a.jsx)(s.P3F, {
    onClick: () => Z(t),
    className: b.itemImageWrapper,
    children: (0, a.jsx)("img", {
      alt: "",
      className: b.itemImage,
      src: e.src,
      draggable: false
    })
  }), [Z]), M = (0, r.useCallback)((e, n, r) => {
    let l = n === (0, p.gN)(u, t.length);
    return (0, a.jsx)(o.Z.div, {
      className: i()(b.item, {
        [b.currentItem]: l
      }),
      style: null != r ? L(n, r) : null,
      onMouseEnter: l ? null : () => D(n),
      onMouseLeave: l ? null : z,
      children: "video" === e.type ? (0, a.jsx)(P, {
        item: e,
        onPlay: W,
        onEnded: H,
        playable: l,
        onClick: () => Z(n)
      }) : F(e, n, l)
    })
  }, [u, t.length, L, D, z, W, H, Z, F]), Q = (0, r.useCallback)(() => {
    let e = (0, a.jsx)(p.ZP, {
      className: b.carousel,
      items: t,
      itemSize: {
        width: v,
        margin: 12
      },
      renderItem: M,
      currentIndex: u,
      animate: I,
      edgeItems: 2
    });
    return t.length <= 1 ? e : (0, a.jsxs)("div", {
      className: b.carouselButtonsContainer,
      children: [e, (0, a.jsx)(m.am, {
        onClick: A,
        className: i()(b.arrow, {
          [b.arrowHovered]: w
        })
      }), (0, a.jsx)(m.Pz, {
        onClick: T,
        className: i()(b.arrow, {
          [b.arrowHovered]: E
        })
      })]
    })
  }, [t, M, u, I, A, T, w, E]), U = (0, r.useCallback)((e, t) => {
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
  return (0, r.useEffect)(() => (C.S.subscribe(_.CkL.CAROUSEL_PREV, A), C.S.subscribe(_.CkL.CAROUSEL_NEXT, T), () => {
    C.S.unsubscribe(_.CkL.CAROUSEL_PREV, A), C.S.unsubscribe(_.CkL.CAROUSEL_NEXT, T)
  }), [A, T]), (0, r.useEffect)(() => {
    f.current = t.length
  }, [t]), (0, a.jsxs)(d.Z, {
    pauseOnHover: true,
    onInterval: B,
    interval: c,
    className: n,
    disable: k || y || l,
    children: [Q(), (0, a.jsx)("div", {
      className: b.pagination,
      children: (0, a.jsx)(m.ZP, {
        renderItem: U,
        scrollToPadding: 40,
        items: t,
        selectedIndex: u,
        onSetItem: Z,
        paginationContainerClass: b.scroller,
        align: m.ZP.Align.CENTER
      })
    })]
  })
})