/** Chunk was on 84802 **/
/** chunk id: 939716, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Q: () => I,
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
  Chunk613324 = require("./613324.js");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = a[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function v() {
  var e, t;
  let a = (e = ["grayscale(", ")"], exports || (t = module.slice(0)), Object.freeze(Object.defineProperties(module, {
    raw: {
      value: Object.freeze(exports)
    }
  })));
  return v = function() {
    return require
  }, require
}
let I = 747,
  x = e => {
    var t, a;
    return (0, b.lV)((t = f({}, e), a = a = {
      className: _.videoWrapper,
      mediaPlayerClassName: _.mediaPlayer
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        a.push.apply(a, n)
      }
      return a
    })(Object(a)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
    }), t))
  },
  j = e => (0, n.jsx)(g.ZP, f({}, e));

function y(e) {
  let {
    item: t,
    onPlay: a,
    onEnded: l,
    onClick: r,
    playable: i
  } = e, o = (0, n.jsx)(u.BC, {
    href: null,
    thumbnail: {
      url: t.videoThumbnailSrc,
      width: I,
      height: 560
    },
    video: {
      url: t.src,
      proxyURL: t.src,
      width: I,
      height: 560
    },
    provider: true,
    allowFullScreen: true,
    maxHeight: 560,
    maxWidth: I,
    onPlay: a,
    onEnded: l,
    playable: i,
    className: _.video,
    volume: 1,
    autoMute: true,
    autoPlay: i,
    renderVideoComponent: x,
    renderImageComponent: j,
    renderLinkComponent: b.iT
  });
  return i ? o : (0, n.jsx)(s.P3F, {
    className: _.itemImageWrapper,
    onClick: r,
    children: o
  })
}
let k = (0, Chunk112724.Z)(e => {
  let {
    items: t,
    className: a,
    paused: r = false,
    autoplayInterval: c = 8e3
  } = e, [u, g] = (0, l.useState)(0), [b, f] = (0, l.useState)(true), [x, j] = (0, l.useState)(false), [k, P] = (0, l.useState)(false), [S, N] = (0, l.useState)(false), [w, O] = (0, l.useState)(false), A = (0, l.useCallback)((e, a) => {
    var n;
    let l = null == (n = t[e]) ? true : n.backgroundSrc,
      r = a.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
        extrapolate: o.Z.Extrapolate.CLAMP
      });
    return {
      opacity: a.interpolate({
        inputRange: [0, 1],
        outputRange: [.3, 1],
        extrapolate: o.Z.Extrapolate.CLAMP
      }),
      filter: o.Z.template(v(), r),
      backgroundImage: null != l ? "url(".concat(l, ")") : true,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }
  }, [t]), W = (0, l.useCallback)(function(e) {
    let a = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      n = (0, p.gN)(u, t.length),
      l = (0, p.gN)(e, t.length),
      r = 1 === Math.abs(e - n) || e === t.length - 1 && 0 === n || 0 === e && n === t.length - 1;
    j(false), g(l), f(r), P(a)
  }, [u, t]), E = (0, l.useCallback)(() => {
    W(u + 1, false)
  }, [W, u]), L = (0, l.useCallback)(() => {
    W(u + 1)
  }, [W, u]), R = (0, l.useCallback)(() => {
    W(u - 1)
  }, [W, u]), Z = (0, l.useCallback)(e => {
    j(true), P(!e)
  }, []), H = (0, l.useCallback)(() => {
    k || E()
  }, [k, E]), T = (0, l.useCallback)(e => {
    e < u ? N(true) : e > u && O(true)
  }, [u]), B = (0, l.useCallback)(() => {
    N(false), O(false)
  }, []), D = (0, l.useCallback)((e, t, a) => a ? (0, n.jsx)(s.P3F, {
    onClick: () => P(true),
    className: _.itemImageWrapper,
    children: (0, n.jsx)("img", {
      src: e.src,
      alt: "",
      className: _.currentImage
    })
  }) : (0, n.jsx)(s.P3F, {
    onClick: () => W(t),
    className: _.itemImageWrapper,
    children: (0, n.jsx)("img", {
      alt: "",
      className: _.itemImage,
      src: e.src,
      draggable: false
    })
  }), [W]), M = (0, l.useCallback)((e, a, l) => {
    let r = a === (0, p.gN)(u, t.length);
    return (0, n.jsx)(o.Z.div, {
      className: i()(_.item, {
        [_.currentItem]: r
      }),
      style: null != l ? A(a, l) : null,
      onMouseEnter: r ? null : () => T(a),
      onMouseLeave: r ? null : B,
      children: "video" === e.type ? (0, n.jsx)(y, {
        item: e,
        onPlay: Z,
        onEnded: H,
        playable: r,
        onClick: () => W(a)
      }) : D(e, a, r)
    })
  }, [u, t.length, A, T, B, Z, H, W, D]), Q = (0, l.useCallback)(() => {
    let e = (0, n.jsx)(p.ZP, {
      className: _.carousel,
      items: t,
      itemSize: {
        width: I,
        margin: 12
      },
      renderItem: M,
      currentIndex: u,
      animate: b,
      edgeItems: 2
    });
    return t.length <= 1 ? e : (0, n.jsxs)("div", {
      className: _.carouselButtonsContainer,
      children: [e, (0, n.jsx)(m.am, {
        onClick: R,
        className: i()(_.arrow, {
          [_.arrowHovered]: S
        })
      }), (0, n.jsx)(m.Pz, {
        onClick: L,
        className: i()(_.arrow, {
          [_.arrowHovered]: w
        })
      })]
    })
  }, [t, M, u, b, R, L, S, w]), z = (0, l.useCallback)((e, t) => {
    let a = u === t;
    return (0, n.jsx)("div", {
      className: i()(_.paginationItem, a ? _.selectedStorePaginationItem : _.unselectedStorePaginationItem),
      children: (0, n.jsx)("img", {
        alt: "",
        className: _.storePaginationImg,
        src: null != e.thumbnailSrc ? e.thumbnailSrc : "image" === e.type ? e.src : "video" === e.type ? e.videoThumbnailSrc : true,
        draggable: false
      })
    }, "page-".concat(t))
  }, [u]);
  return (0, l.useEffect)(() => (h.S.subscribe(C.CkL.CAROUSEL_PREV, R), h.S.subscribe(C.CkL.CAROUSEL_NEXT, L), () => {
    h.S.unsubscribe(C.CkL.CAROUSEL_PREV, R), h.S.unsubscribe(C.CkL.CAROUSEL_NEXT, L)
  }), [R, L]), (0, n.jsxs)(d.Z, {
    pauseOnHover: true,
    onInterval: E,
    interval: c,
    className: a,
    disable: x || k || r,
    children: [Q(), (0, n.jsx)("div", {
      className: _.pagination,
      children: (0, n.jsx)(m.ZP, {
        renderItem: z,
        scrollToPadding: 40,
        items: t,
        selectedIndex: u,
        onSetItem: W,
        paginationContainerClass: _.scroller,
        align: m.ZP.Align.CENTER
      })
    })]
  })
})