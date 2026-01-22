/** Chunk was on 85426 **/
/** chunk id: 953590, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => O,
  B: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk310784 = require("./310784.js"),
  s = require.n(Chunk310784),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = l[t], t in e ? Object.defineProperty(e, t, {
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
  let l = (e = ["grayscale(", ")"], t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  })));
  return v = function() {
    return l
  }, l
}
let E = 747,
  I = e => {
    var t, l;
    return (0, C.$o)((t = A({}, e), l = l = {
      className: _.tN,
      mediaPlayerClassName: _.yf
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
      var l = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        l.push.apply(l, n)
      }
      return l
    })(Object(l)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
    }), t))
  },
  S = e => (0, n.jsx)(g.Ay, A({}, e));

function y(e) {
  let t = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
    [l, n] = (0, b.rh)(t, "#000000"),
    r = a.useMemo(() => {
      let e = s()(l).darken(1);
      return "radial-gradient(circle, ".concat(e.alpha(.2).hex(), " 0%, transparent 100%)")
    }, [l]);
  return null != t && "#000000" !== l ? r : true
}

function N(e) {
  let {
    item: t,
    onPlay: l,
    onEnded: a,
    onClick: r,
    playable: s,
    isMuted: c
  } = e, i = y(t), o = (0, n.jsx)(h.rr, {
    href: null,
    thumbnail: {
      url: t.videoThumbnailSrc,
      width: E,
      height: 560
    },
    video: {
      url: t.src,
      proxyURL: t.src,
      width: E,
      height: 560
    },
    provider: true,
    allowFullScreen: true,
    maxHeight: 560,
    maxWidth: E,
    onPlay: l,
    onEnded: a,
    playable: s,
    className: _.Ki,
    volume: 1,
    autoMute: c,
    autoPlay: s,
    renderVideoComponent: I,
    renderImageComponent: S,
    renderLinkComponent: C.bU
  }, c ? "player-muted" : "player-unmuted"), d = {
    background: i
  };
  return s ? (0, n.jsx)("div", {
    className: _.AU,
    style: d,
    children: o
  }) : (0, n.jsx)(u.DUT, {
    className: _.AU,
    onClick: r,
    style: d,
    children: o
  })
}

function T(e) {
  let {
    item: t,
    setHasInteracted: l,
    onSetItem: a,
    isCurrentItem: r,
    itemIndex: s
  } = e, c = {
    background: y(t)
  };
  return r ? (0, n.jsx)(u.DUT, {
    onClick: () => l(true),
    className: _.AU,
    style: c,
    children: (0, n.jsx)("img", {
      src: t.src,
      alt: "",
      className: _.NP
    })
  }) : (0, n.jsx)(u.DUT, {
    onClick: () => a(s),
    className: _.AU,
    style: c,
    children: (0, n.jsx)("img", {
      alt: "",
      className: _.tv,
      src: t.src,
      draggable: false
    })
  })
}
let O = (0, Chunk456412.A)(e => {
  let {
    items: t,
    className: l,
    paused: r = false,
    autoplayInterval: s = 8e3,
    onItemChange: c,
    isMuted: u = true,
    onTrackClick: d
  } = e, b = (0, a.useRef)(0), [h, g] = (0, a.useState)(0), [C, A] = (0, a.useState)(0), I = (0, a.useRef)(0), S = (0, a.useRef)(t.length), [y, O] = (0, a.useState)(true), [U, P] = (0, a.useState)(false), [R, L] = (0, a.useState)(false), [D, w] = (0, a.useState)(false), [M, Y] = (0, a.useState)(false), B = (0, a.useCallback)((e, l) => {
    var n;
    let a = null == (n = t[e]) ? true : n.backgroundSrc,
      r = l.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
        extrapolate: o.A.Extrapolate.CLAMP
      });
    return {
      opacity: l.interpolate({
        inputRange: [0, 1],
        outputRange: [.3, 1],
        extrapolate: o.A.Extrapolate.CLAMP
      }),
      filter: o.A.template(v(), r),
      backgroundImage: null != a ? "url(".concat(a, ")") : true,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }
  }, [t]), H = (0, a.useCallback)(function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    P(false), L(t);
    let l = S.current,
      n = (0, m.U3)(I.current, l),
      a = (0, m.U3)(e, l);
    I.current = a, A(a), b.current++, g(b.current), O(1 === Math.abs(a - n) || a === l - 1 && 0 === n || 0 === a && n === l - 1)
  }, []), X = (0, a.useCallback)(() => {
    H(I.current + 1, false)
  }, [H]), q = (0, a.useCallback)(() => {
    null == d || d(j.Jq.CAROUSEL_NEXT), H(I.current + 1)
  }, [H, d]), F = (0, a.useCallback)(() => {
    null == d || d(j.Jq.CAROUSEL_PREV), H(I.current - 1)
  }, [H, d]), G = (0, a.useCallback)(e => {
    P(true), L(!e)
  }, []), J = (0, a.useCallback)(() => {
    R || X()
  }, [R, X]), V = (0, a.useCallback)(e => {
    let t = I.current;
    e < t ? w(true) : e > t && Y(true)
  }, []), z = (0, a.useCallback)(() => {
    w(false), Y(false)
  }, []), W = (0, a.useCallback)((e, t, l) => (0, n.jsx)(T, {
    item: e,
    itemIndex: t,
    isCurrentItem: l,
    onSetItem: e => {
      null == d || d(j.Jq.CAROUSEL_ITEM), H(e)
    },
    setHasInteracted: L
  }), [H, d]), $ = (0, a.useCallback)((e, l, a) => {
    let r = l === (0, m.U3)(C, t.length);
    return (0, n.jsx)(o.A.div, {
      className: i()(_.AS, {
        [_.Xt]: r
      }),
      style: null != a ? B(l, a) : null,
      onMouseEnter: r ? null : () => V(l),
      onMouseLeave: r ? null : z,
      children: "video" === e.type ? (0, n.jsx)(N, {
        item: e,
        onPlay: G,
        onEnded: J,
        playable: r,
        isMuted: u,
        onClick: () => {
          null == d || d(j.Jq.CAROUSEL_ITEM), H(l)
        }
      }, h) : W(e, l, r)
    })
  }, [C, t.length, B, V, z, G, J, H, W, u, d, h]), K = (0, a.useCallback)(() => {
    let e = (0, n.jsx)(m.Ay, {
      className: _.Dk,
      items: t,
      itemSize: {
        width: E,
        margin: 0
      },
      renderItem: $,
      currentIndex: C,
      animate: y,
      edgeItems: 2
    });
    return t.length <= 1 ? e : (0, n.jsxs)("div", {
      className: _.HY,
      children: [e, (0, n.jsx)(p.Q8, {
        onClick: F,
        className: i()(_.UE, {
          [_.h_]: D
        })
      }), (0, n.jsx)(p.Oj, {
        onClick: q,
        className: i()(_.UE, {
          [_.h_]: M
        })
      })]
    })
  }, [t, $, C, y, F, q, D, M]), Q = (0, a.useCallback)((e, t) => {
    let l = C === t;
    return (0, n.jsx)("div", {
      className: i()(_.Yw, l ? _.sM : _.N7),
      children: (0, n.jsx)("img", {
        alt: "",
        className: _.Pr,
        src: null != e.thumbnailSrc ? e.thumbnailSrc : "image" === e.type ? e.src : "video" === e.type ? e.videoThumbnailSrc : true,
        draggable: false
      })
    }, "page-".concat(t))
  }, [C]);
  (0, a.useEffect)(() => (x._.subscribe(k.jej.CAROUSEL_PREV, F), x._.subscribe(k.jej.CAROUSEL_NEXT, q), () => {
    x._.unsubscribe(k.jej.CAROUSEL_PREV, F), x._.unsubscribe(k.jej.CAROUSEL_NEXT, q)
  }), [F, q]), (0, a.useEffect)(() => {
    S.current = t.length
  }, [t]), (0, a.useEffect)(() => {
    null == c || c(t[C], C)
  }, [C, t, c]);
  let Z = (0, a.useCallback)(e => {
    null == d || d(j.Jq.CAROUSEL_ITEM), H(e)
  }, [H, d]);
  return (0, n.jsxs)(f.A, {
    pauseOnHover: true,
    onInterval: X,
    interval: s,
    className: l,
    disable: U || R || r,
    children: [K(), (0, n.jsx)("div", {
      className: _.X$,
      children: (0, n.jsx)(p.Ay, {
        renderItem: Q,
        scrollToPadding: 40,
        items: t,
        selectedIndex: C,
        onSetItem: Z,
        paginationContainerClass: _.XG,
        align: p.Ay.Align.CENTER
      })
    })]
  })
})