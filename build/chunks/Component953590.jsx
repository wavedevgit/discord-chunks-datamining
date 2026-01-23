/** Chunk was on 85426 **/
/** chunk id: 953590, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => O,
  B: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk310784 = require("./310784.js"),
  s = require.n(Chunk310784),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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

function v(e) {
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

function A() {
  var e, t;
  let l = (e = ["grayscale(", ")"], t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  })));
  return A = function() {
    return l
  }, l
}
let I = 747,
  E = e => {
    var t, l;
    return (0, b.$o)((t = v({}, e), l = l = {
      className: k.tN,
      mediaPlayerClassName: k.yf
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
  S = e => (0, n.jsx)(g.Ay, v({}, e));

function y(e) {
  let t = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
    [l, n] = (0, m.rh)(t, "#000000"),
    a = r.useMemo(() => {
      let e = s()(l).darken(1);
      return "radial-gradient(circle, ".concat(e.alpha(.2).hex(), " 0%, transparent 100%)")
    }, [l]);
  return null != t && "#000000" !== l ? a : true
}

function N(e) {
  let {
    item: t,
    onPlay: l,
    onEnded: r,
    onClick: a,
    playable: s,
    isMuted: i
  } = e, o = y(t), c = (0, n.jsx)(_.rr, {
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
    onPlay: l,
    onEnded: r,
    playable: s,
    className: k.Ki,
    volume: 1,
    autoMute: i,
    autoPlay: s,
    renderVideoComponent: E,
    renderImageComponent: S,
    renderLinkComponent: b.bU
  }, i ? "player-muted" : "player-unmuted"), d = {
    background: o
  };
  return s ? (0, n.jsx)("div", {
    className: k.AU,
    style: d,
    children: c
  }) : (0, n.jsx)(u.DUT, {
    className: k.AU,
    onClick: a,
    style: d,
    children: c
  })
}

function T(e) {
  let {
    item: t,
    setHasInteracted: l,
    onSetItem: r,
    isCurrentItem: a,
    itemIndex: s
  } = e, i = {
    background: y(t)
  };
  return a ? (0, n.jsx)(u.DUT, {
    onClick: () => l(true),
    className: k.AU,
    style: i,
    children: (0, n.jsx)("img", {
      src: t.src,
      alt: "",
      className: k.NP
    })
  }) : (0, n.jsx)(u.DUT, {
    onClick: () => r(s),
    className: k.AU,
    style: i,
    children: (0, n.jsx)("img", {
      alt: "",
      className: k.tv,
      src: t.src,
      draggable: false
    })
  })
}
let O = (0, Chunk456412.A)(e => {
  let {
    items: t,
    className: l,
    paused: a = false,
    autoplayInterval: s = 8e3,
    onItemChange: i,
    isMuted: u = true,
    onTrackClick: d
  } = e, m = (0, r.useRef)(0), [_, g] = (0, r.useState)(0), [b, v] = (0, r.useState)(0), E = (0, r.useRef)(0), S = (0, r.useRef)(t.length), [y, O] = (0, r.useState)(true), [P, U] = (0, r.useState)(false), [R, w] = (0, r.useState)(false), [L, D] = (0, r.useState)(false), [B, M] = (0, r.useState)(false), H = (0, r.useCallback)((e, l) => {
    var n;
    let r = null == (n = t[e]) ? true : n.backgroundSrc,
      a = l.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
        extrapolate: c.A.Extrapolate.CLAMP
      });
    return {
      opacity: l.interpolate({
        inputRange: [0, 1],
        outputRange: [.3, 1],
        extrapolate: c.A.Extrapolate.CLAMP
      }),
      filter: c.A.template(A(), a),
      backgroundImage: null != r ? "url(".concat(r, ")") : true,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }
  }, [t]), Y = (0, r.useCallback)(function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    U(false), w(t);
    let l = S.current,
      n = (0, f.U3)(E.current, l),
      r = (0, f.U3)(e, l);
    E.current = r, v(r), m.current++, g(m.current), O(1 === Math.abs(r - n) || r === l - 1 && 0 === n || 0 === r && n === l - 1)
  }, []), X = (0, r.useCallback)(() => {
    Y(E.current + 1, false)
  }, [Y]), q = (0, r.useCallback)(() => {
    null == d || d(x.Jq.CAROUSEL_NEXT), Y(E.current + 1)
  }, [Y, d]), F = (0, r.useCallback)(() => {
    null == d || d(x.Jq.CAROUSEL_PREV), Y(E.current - 1)
  }, [Y, d]), G = (0, r.useCallback)(e => {
    U(true), w(!e)
  }, []), J = (0, r.useCallback)(() => {
    R || X()
  }, [R, X]), V = (0, r.useCallback)(e => {
    let t = E.current;
    e < t ? D(true) : e > t && M(true)
  }, []), z = (0, r.useCallback)(() => {
    D(false), M(false)
  }, []), W = (0, r.useCallback)((e, t, l) => (0, n.jsx)(T, {
    item: e,
    itemIndex: t,
    isCurrentItem: l,
    onSetItem: e => {
      null == d || d(x.Jq.CAROUSEL_ITEM), Y(e)
    },
    setHasInteracted: w
  }), [Y, d]), $ = (0, r.useCallback)((e, l, r) => {
    let a = l === (0, f.U3)(b, t.length);
    return (0, n.jsx)(c.A.div, {
      className: o()(k.AS, {
        [k.Xt]: a
      }),
      style: null != r ? H(l, r) : null,
      onMouseEnter: a ? null : () => V(l),
      onMouseLeave: a ? null : z,
      children: "video" === e.type ? (0, n.jsx)(N, {
        item: e,
        onPlay: G,
        onEnded: J,
        playable: a,
        isMuted: u,
        onClick: () => {
          null == d || d(x.Jq.CAROUSEL_ITEM), Y(l)
        }
      }, _) : W(e, l, a)
    })
  }, [b, t.length, H, V, z, G, J, Y, W, u, d, _]), K = (0, r.useCallback)(() => {
    let e = (0, n.jsx)(f.Ay, {
      className: k.Dk,
      items: t,
      itemSize: {
        width: I,
        margin: 0
      },
      renderItem: $,
      currentIndex: b,
      animate: y,
      edgeItems: 2
    });
    return t.length <= 1 ? e : (0, n.jsxs)("div", {
      className: k.HY,
      children: [e, (0, n.jsx)(p.Q8, {
        onClick: F,
        className: o()(k.UE, {
          [k.h_]: L
        })
      }), (0, n.jsx)(p.Oj, {
        onClick: q,
        className: o()(k.UE, {
          [k.h_]: B
        })
      })]
    })
  }, [t, $, b, y, F, q, L, B]), Q = (0, r.useCallback)((e, t) => {
    let l = b === t;
    return (0, n.jsx)("div", {
      className: o()(k.Yw, l ? k.sM : k.N7),
      children: (0, n.jsx)("img", {
        alt: "",
        className: k.Pr,
        src: null != e.thumbnailSrc ? e.thumbnailSrc : "image" === e.type ? e.src : "video" === e.type ? e.videoThumbnailSrc : true,
        draggable: false
      })
    }, "page-".concat(t))
  }, [b]);
  (0, r.useEffect)(() => (C._.subscribe(j.jej.CAROUSEL_PREV, F), C._.subscribe(j.jej.CAROUSEL_NEXT, q), () => {
    C._.unsubscribe(j.jej.CAROUSEL_PREV, F), C._.unsubscribe(j.jej.CAROUSEL_NEXT, q)
  }), [F, q]), (0, r.useEffect)(() => {
    S.current = t.length
  }, [t]), (0, r.useEffect)(() => {
    null == i || i(t[b], b)
  }, [b, t, i]);
  let Z = (0, r.useCallback)(e => {
    null == d || d(x.Jq.CAROUSEL_ITEM), Y(e)
  }, [Y, d]);
  return (0, n.jsxs)(h.A, {
    pauseOnHover: true,
    onInterval: X,
    interval: s,
    className: l,
    disable: P || R || a,
    children: [K(), (0, n.jsx)("div", {
      className: k.X$,
      children: (0, n.jsx)(p.Ay, {
        renderItem: Q,
        scrollToPadding: 40,
        items: t,
        selectedIndex: b,
        onSetItem: Z,
        paginationContainerClass: k.XG,
        align: p.Ay.Align.CENTER
      })
    })]
  })
})