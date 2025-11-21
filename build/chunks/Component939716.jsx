/** Chunk was on 84802 **/
/** chunk id: 939716, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => P,
  Z: () => O
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
  Chunk981631 = require("./981631.js"),
  Chunk925962 = require("./925962.js");

function v(e) {
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

function j() {
  var e, t;
  let n = (e = ["grayscale(", ")"], exports || (t = module.slice(0)), Object.freeze(Object.defineProperties(module, {
    raw: {
      value: Object.freeze(exports)
    }
  })));
  return j = function() {
    return require
  }, require
}
let P = 747,
  S = e => {
    var t, n;
    return (0, f.lV)((t = v({}, e), n = n = {
      className: I.videoWrapper,
      mediaPlayerClassName: I.mediaPlayer
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
  k = e => (0, r.jsx)(_.ZP, v({}, e));

function y(e) {
  let t = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
    [n, r] = (0, m.Cf)(t, "#000000"),
    l = a.useMemo(() => {
      let e = o()(n).darken(1);
      return "radial-gradient(circle, ".concat(e.alpha(.2).hex(), " 0%, transparent 100%)")
    }, [n]);
  return null != t && "#000000" !== n ? l : true
}

function N(e) {
  let {
    item: t,
    onPlay: n,
    onEnded: a,
    onClick: l,
    playable: o,
    isMuted: i
  } = e, s = y(t), c = (0, r.jsx)(p.BC, {
    href: null,
    thumbnail: {
      url: t.videoThumbnailSrc,
      width: P,
      height: 560
    },
    video: {
      url: t.src,
      proxyURL: t.src,
      width: P,
      height: 560
    },
    provider: true,
    allowFullScreen: true,
    maxHeight: 560,
    maxWidth: P,
    onPlay: n,
    onEnded: a,
    playable: o,
    className: I.video,
    volume: 1,
    autoMute: i,
    autoPlay: o,
    renderVideoComponent: S,
    renderImageComponent: k,
    renderLinkComponent: f.iT
  }, i ? "player-muted" : "player-unmuted"), d = {
    background: s
  };
  return o ? (0, r.jsx)("div", {
    className: I.itemImageWrapper,
    style: d,
    children: c
  }) : (0, r.jsx)(u.P3F, {
    className: I.itemImageWrapper,
    onClick: l,
    style: d,
    children: c
  })
}

function w(e) {
  let {
    item: t,
    setHasInteracted: n,
    setItem: a,
    isCurrentItem: l,
    itemIndex: o
  } = e, i = {
    background: y(t)
  };
  return l ? (0, r.jsx)(u.P3F, {
    onClick: () => n(true),
    className: I.itemImageWrapper,
    style: i,
    children: (0, r.jsx)("img", {
      src: t.src,
      alt: "",
      className: I.currentImage
    })
  }) : (0, r.jsx)(u.P3F, {
    onClick: () => a(o),
    className: I.itemImageWrapper,
    style: i,
    children: (0, r.jsx)("img", {
      alt: "",
      className: I.itemImage,
      src: t.src,
      draggable: false
    })
  })
}
let O = (0, Chunk112724.Z)(e => {
  let {
    items: t,
    className: n,
    paused: l = false,
    autoplayInterval: o = 8e3,
    onItemChange: i,
    isMuted: u = true
  } = e, [d, m] = (0, a.useState)(0), p = (0, a.useRef)(0), _ = (0, a.useRef)(t.length), [f, v] = (0, a.useState)(true), [S, k] = (0, a.useState)(false), [y, O] = (0, a.useState)(false), [R, T] = (0, a.useState)(false), [E, L] = (0, a.useState)(false), A = (0, a.useCallback)((e, n) => {
    var r;
    let a = null == (r = t[e]) ? true : r.backgroundSrc,
      l = n.interpolate({
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
      filter: c.Z.template(j(), l),
      backgroundImage: null != a ? "url(".concat(a, ")") : true,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }
  }, [t]), Z = (0, a.useCallback)(function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    k(false), O(t);
    let n = _.current,
      r = (0, C.gN)(p.current, n),
      a = (0, C.gN)(e, n);
    p.current = a, m(a), v(1 === Math.abs(a - r) || a === n - 1 && 0 === r || 0 === a && r === n - 1)
  }, []), W = (0, a.useCallback)(() => {
    Z(p.current + 1, false)
  }, [Z]), B = (0, a.useCallback)(() => {
    Z(p.current + 1)
  }, [Z]), D = (0, a.useCallback)(() => {
    Z(p.current - 1)
  }, [Z]), H = (0, a.useCallback)(e => {
    k(true), O(!e)
  }, []), z = (0, a.useCallback)(() => {
    y || W()
  }, [y, W]), M = (0, a.useCallback)(e => {
    let t = p.current;
    e < t ? T(true) : e > t && L(true)
  }, []), F = (0, a.useCallback)(() => {
    T(false), L(false)
  }, []), U = (0, a.useCallback)((e, t, n) => (0, r.jsx)(w, {
    item: e,
    itemIndex: t,
    isCurrentItem: n,
    setItem: Z,
    setHasInteracted: O
  }), [Z]), Q = (0, a.useCallback)((e, n, a) => {
    let l = n === (0, C.gN)(d, t.length);
    return (0, r.jsx)(c.Z.div, {
      className: s()(I.item, {
        [I.currentItem]: l
      }),
      style: null != a ? A(n, a) : null,
      onMouseEnter: l ? null : () => M(n),
      onMouseLeave: l ? null : F,
      children: "video" === e.type ? (0, r.jsx)(N, {
        item: e,
        onPlay: H,
        onEnded: z,
        playable: l,
        onClick: () => Z(n),
        isMuted: u
      }) : U(e, n, l)
    })
  }, [d, t.length, A, M, F, H, z, Z, U, u]), G = (0, a.useCallback)(() => {
    let e = (0, r.jsx)(C.ZP, {
      className: I.carousel,
      items: t,
      itemSize: {
        width: P,
        margin: 0
      },
      renderItem: Q,
      currentIndex: d,
      animate: f,
      edgeItems: 2
    });
    return t.length <= 1 ? e : (0, r.jsxs)("div", {
      className: I.carouselButtonsContainer,
      children: [e, (0, r.jsx)(h.am, {
        onClick: D,
        className: s()(I.arrow, {
          [I.arrowHovered]: R
        })
      }), (0, r.jsx)(h.Pz, {
        onClick: B,
        className: s()(I.arrow, {
          [I.arrowHovered]: E
        })
      })]
    })
  }, [t, Q, d, f, D, B, R, E]), Y = (0, a.useCallback)((e, t) => {
    let n = d === t;
    return (0, r.jsx)("div", {
      className: s()(I.paginationItem, n ? I.selectedStorePaginationItem : I.unselectedStorePaginationItem),
      children: (0, r.jsx)("img", {
        alt: "",
        className: I.storePaginationImg,
        src: null != e.thumbnailSrc ? e.thumbnailSrc : "image" === e.type ? e.src : "video" === e.type ? e.videoThumbnailSrc : true,
        draggable: false
      })
    }, "page-".concat(t))
  }, [d]);
  return (0, a.useEffect)(() => (b.S.subscribe(x.CkL.CAROUSEL_PREV, D), b.S.subscribe(x.CkL.CAROUSEL_NEXT, B), () => {
    b.S.unsubscribe(x.CkL.CAROUSEL_PREV, D), b.S.unsubscribe(x.CkL.CAROUSEL_NEXT, B)
  }), [D, B]), (0, a.useEffect)(() => {
    _.current = t.length
  }, [t]), (0, a.useEffect)(() => {
    null == i || i(t[d], d)
  }, [d, t, i]), (0, r.jsxs)(g.Z, {
    pauseOnHover: true,
    onInterval: W,
    interval: o,
    className: n,
    disable: S || y || l,
    children: [G(), (0, r.jsx)("div", {
      className: I.pagination,
      children: (0, r.jsx)(h.ZP, {
        renderItem: Y,
        scrollToPadding: 40,
        items: t,
        selectedIndex: d,
        onSetItem: Z,
        paginationContainerClass: I.scroller,
        align: h.ZP.Align.CENTER
      })
    })]
  })
})