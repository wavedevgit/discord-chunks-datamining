/** Chunk was on 84802 **/
/** chunk id: 939716, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => v,
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    return (0, g.lV)((t = f({}, e), n = n = {
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
  P = e => (0, a.jsx)(h.ZP, f({}, e));

function j(e) {
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
    renderImageComponent: P,
    renderLinkComponent: g.iT
  });
  return i ? o : (0, a.jsx)(s.P3F, {
    className: b.itemImageWrapper,
    onClick: l,
    children: o
  })
}
let S = (0, Chunk112724.Z)(e => {
  let {
    items: t,
    className: n,
    paused: l = false,
    autoplayInterval: c = 8e3,
    onItemChange: u
  } = e, [h, g] = (0, r.useState)(0), f = (0, r.useRef)(0), I = (0, r.useRef)(t.length), [P, S] = (0, r.useState)(true), [k, y] = (0, r.useState)(false), [N, w] = (0, r.useState)(false), [O, R] = (0, r.useState)(false), [E, T] = (0, r.useState)(false), L = (0, r.useCallback)((e, n) => {
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
  }, [t]), A = (0, r.useCallback)(function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    y(false), w(t);
    let n = I.current,
      a = (0, p.gN)(f.current, n),
      r = (0, p.gN)(e, n);
    f.current = r, g(r), S(1 === Math.abs(r - a) || r === n - 1 && 0 === a || 0 === r && a === n - 1)
  }, []), Z = (0, r.useCallback)(() => {
    A(f.current + 1, false)
  }, [A]), B = (0, r.useCallback)(() => {
    A(f.current + 1)
  }, [A]), W = (0, r.useCallback)(() => {
    A(f.current - 1)
  }, [A]), D = (0, r.useCallback)(e => {
    y(true), w(!e)
  }, []), H = (0, r.useCallback)(() => {
    N || Z()
  }, [N, Z]), F = (0, r.useCallback)(e => {
    let t = f.current;
    e < t ? R(true) : e > t && T(true)
  }, []), U = (0, r.useCallback)(() => {
    R(false), T(false)
  }, []), z = (0, r.useCallback)((e, t, n) => n ? (0, a.jsx)(s.P3F, {
    onClick: () => w(true),
    className: b.itemImageWrapper,
    children: (0, a.jsx)("img", {
      src: e.src,
      alt: "",
      className: b.currentImage
    })
  }) : (0, a.jsx)(s.P3F, {
    onClick: () => A(t),
    className: b.itemImageWrapper,
    children: (0, a.jsx)("img", {
      alt: "",
      className: b.itemImage,
      src: e.src,
      draggable: false
    })
  }), [A]), M = (0, r.useCallback)((e, n, r) => {
    let l = n === (0, p.gN)(h, t.length);
    return (0, a.jsx)(o.Z.div, {
      className: i()(b.item, {
        [b.currentItem]: l
      }),
      style: null != r ? L(n, r) : null,
      onMouseEnter: l ? null : () => F(n),
      onMouseLeave: l ? null : U,
      children: "video" === e.type ? (0, a.jsx)(j, {
        item: e,
        onPlay: D,
        onEnded: H,
        playable: l,
        onClick: () => A(n)
      }) : z(e, n, l)
    })
  }, [h, t.length, L, F, U, D, H, A, z]), Q = (0, r.useCallback)(() => {
    let e = (0, a.jsx)(p.ZP, {
      className: b.carousel,
      items: t,
      itemSize: {
        width: v,
        margin: 12
      },
      renderItem: M,
      currentIndex: h,
      animate: P,
      edgeItems: 2
    });
    return t.length <= 1 ? e : (0, a.jsxs)("div", {
      className: b.carouselButtonsContainer,
      children: [e, (0, a.jsx)(m.am, {
        onClick: W,
        className: i()(b.arrow, {
          [b.arrowHovered]: O
        })
      }), (0, a.jsx)(m.Pz, {
        onClick: B,
        className: i()(b.arrow, {
          [b.arrowHovered]: E
        })
      })]
    })
  }, [t, M, h, P, W, B, O, E]), G = (0, r.useCallback)((e, t) => {
    let n = h === t;
    return (0, a.jsx)("div", {
      className: i()(b.paginationItem, n ? b.selectedStorePaginationItem : b.unselectedStorePaginationItem),
      children: (0, a.jsx)("img", {
        alt: "",
        className: b.storePaginationImg,
        src: null != e.thumbnailSrc ? e.thumbnailSrc : "image" === e.type ? e.src : "video" === e.type ? e.videoThumbnailSrc : true,
        draggable: false
      })
    }, "page-".concat(t))
  }, [h]);
  return (0, r.useEffect)(() => (C.S.subscribe(_.CkL.CAROUSEL_PREV, W), C.S.subscribe(_.CkL.CAROUSEL_NEXT, B), () => {
    C.S.unsubscribe(_.CkL.CAROUSEL_PREV, W), C.S.unsubscribe(_.CkL.CAROUSEL_NEXT, B)
  }), [W, B]), (0, r.useEffect)(() => {
    I.current = t.length
  }, [t]), (0, r.useEffect)(() => {
    null == u || u(t[h], h)
  }, [h, t, u]), (0, a.jsxs)(d.Z, {
    pauseOnHover: true,
    onInterval: Z,
    interval: c,
    className: n,
    disable: k || N || l,
    children: [Q(), (0, a.jsx)("div", {
      className: b.pagination,
      children: (0, a.jsx)(m.ZP, {
        renderItem: G,
        scrollToPadding: 40,
        items: t,
        selectedIndex: h,
        onSetItem: A,
        paginationContainerClass: b.scroller,
        align: m.ZP.Align.CENTER
      })
    })]
  })
})