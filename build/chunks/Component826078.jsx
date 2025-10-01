/** Chunk was on 61526 **/
/** chunk id: 826078, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk98650 = require("./98650.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk917042 = require("./917042.js"),
  Chunk20437 = require("./20437.js"),
  Chunk356659 = require("./356659.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk169267 = require("./169267.js");

function b(e) {
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

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = function(e) {
  var t, n, l, y, C, k;
  let {
    sourceURL: O
  } = e, {
    videoPlayerRef: P,
    cropData: S,
    setCropData: N
  } = (0, v.S)(), [E, R] = r.useState(((k = !(null == (n = P.current) || null == (t = n.videoElement) ? true : t.paused), true), k)), L = r.useRef(null), [T, D] = r.useState(null), [F, A] = r.useState(), I = r.useRef(null), Z = r.useRef(null), [B, M] = r.useState(0), [z, H] = r.useState(false), [W, U] = r.useState(null);
  (0, d.Z)(() => {
    var e;
    let t = null == (e = P.current) ? true : e.videoElement;
    null != t && B !== t.currentTime && M(t.currentTime)
  });
  let V = r.useMemo(() => S.end - S.start, [S]);
  r.useEffect(() => {
    var e;
    let t = null == (e = P.current) ? true : e.videoElement,
      n = I.current,
      a = Z.current;
    if (null == t || null == n || null == a) return;
    let r = (0, o.debounce)(R, h.HW),
      l = () => {
        D(null), H(false), r.cancel(), r(true)
      },
      i = () => {
        r.cancel(), r(false)
      };
    return t.addEventListener("play", l), t.addEventListener("pause", i), () => {
      t.removeEventListener("play", l), t.removeEventListener("pause", i)
    }
  }, [P]);
  let {
    ref: X,
    width: Y = 0,
    height: G = 0
  } = (0, c.ZP)(), K = (0, s.e7)([p.Z], () => p.Z.windowSize());
  r.useMemo(() => {
    K.width, K.height;
    let e = X.current;
    null != e && U(e.getBoundingClientRect())
  }, [K.width, K.height, Y, X]);
  let Q = r.useRef(null),
    J = r.useRef({}),
    $ = r.useCallback(e => {
      var t;
      let n = (0, o.clamp)(e, 0, S.end - h.Hp);
      N(j(b({}, S), {
        start: n
      })), null == (t = P.current) || t.seek(n)
    }, [S, N, P]),
    q = r.useCallback(e => {
      var t, n;
      let a = null == (t = P.current) ? true : t.videoElement;
      if (null == a) return;
      let r = (0, o.clamp)(e, S.start + h.Hp, a.duration);
      N(j(b({}, S), {
        end: r
      })), null == (n = P.current) || n.seek(r)
    }, [S, N, P]),
    ee = r.useCallback((e, t) => {
      var n, a;
      if (null == F) return;
      if (null == W) return null;
      let r = ((0, o.clamp)(e, W.left, W.right) - W.left) / W.width * F,
        l = (0, o.clamp)(r, 0, F),
        i = T;
      if (null == i && t && (i = l <= S.start ? "start" : l >= S.end ? "end" : "playhead", null == (n = P.current) || n.pause(), D(i), H(E)), "start" === i) $(l);
      else if ("end" === i) q(l);
      else if ("playhead" === i) {
        let e = (0, o.clamp)(l, S.start, S.end);
        null == (a = P.current) || a.seek(e)
      }
    }, [F, W, T, S.start, S.end, P, E, $, q]),
    et = r.useCallback(e => {
      var t;
      let n = null == (t = P.current) ? true : t.videoElement;
      if (null == n) return;
      let a = (0, f.Z)(n.duration, e.shiftKey),
        r = false;
      switch (e.key) {
        case "ArrowLeft":
          r = true, $(S.start - a);
          break;
        case "ArrowRight":
          r = true, $(S.start + a)
      }
      r && (e.stopPropagation(), e.preventDefault())
    }, [P, $, S.start]),
    en = r.useCallback(e => {
      var t;
      let n = null == (t = P.current) ? true : t.videoElement;
      if (null == n) return;
      let a = (0, f.Z)(n.duration, e.shiftKey),
        r = false;
      switch (e.key) {
        case "ArrowLeft":
          r = true, q(S.end - a);
          break;
        case "ArrowRight":
          r = true, q(S.end + a)
      }
      r && (e.stopPropagation(), e.preventDefault())
    }, [P, q, S.end]),
    ea = r.useCallback(e => {
      ee(e.clientX, true)
    }, [ee]),
    er = r.useCallback(e => {
      ee(e.clientX, false)
    }, [ee]),
    el = r.useCallback(() => {
      if (z) {
        var e;
        null == (e = P.current) || e.play()
      }
      H(false), D(null)
    }, [P, z]);
  r.useEffect(() => (document.addEventListener("mousemove", er), document.addEventListener("mouseup", el), () => {
    document.removeEventListener("mousemove", er), document.removeEventListener("mouseup", el)
  }), [er, el]), r.useEffect(() => {
    !async function() {
      var e;
      let t = X.current,
        n = L.current;
      if (null == t || null == n || null == F) return;
      t.height = G, t.width = Y;
      let a = t.getContext("2d");
      if (null == a) return;
      a.fillStyle = "#000", a.fillRect(0, 0, Y, G);
      let r = Math.ceil(G * (n.videoWidth / n.videoHeight)),
        l = Math.ceil(Y / r),
        i = Q.current;
      if (null == i) return;
      i.width = r, i.height = G;
      let o = null == i ? true : i.getContext("2d", {
        willReadFrequently: true
      });
      if (null == o) return;
      let s = J.current;
      if ((null == (e = s[l]) ? true : e.length) === l) {
        for (let e = 0; e < l; e++) a.putImageData(s[l][e], r * e, 0);
        return
      }
      for (let e = 0; e < l; e++) await new Promise(t => {
        n.onseeked = () => {
          a.drawImage(n, r * e, 0, r, G), o.drawImage(n, 0, 0, r, G);
          let i = o.getImageData(0, 0, r, G);
          null == s[l] && (s[l] = []), s[l][e] = i, t()
        }, n.currentTime = r / Y * F * e
      })
    }()
  }, [Y, G, X, F, Q]);
  let ei = B - S.start,
    eo = null == (l = P.current) ? true : l.videoElement;
  return (0, a.jsx)("div", {
    className: x.centeringWrapper,
    children: (0, a.jsxs)("div", {
      className: x.timelineContainer,
      children: [(0, a.jsx)("div", {
        className: x.playPauseButtonWrapper,
        children: (0, a.jsx)(u.P3F, {
          tabIndex: 0,
          onClick: () => {
            var e, t;
            return E ? null == (e = P.current) ? true : e.pause() : null == (t = P.current) ? true : t.play()
          },
          className: x.playPauseButton,
          children: E ? (0, a.jsx)(u.fpf, {
            size: "md",
            color: "currentColor",
            className: x.playPauseIcon
          }) : (0, a.jsx)(u.o1U, {
            size: "md",
            color: "currentColor",
            className: x.playPauseIcon
          })
        })
      }), (0, a.jsxs)("div", {
        className: i()(x.timeline, {
          [x.timelineDragging]: null != T
        }),
        onMouseDown: ea,
        children: [(0, a.jsx)("canvas", {
          className: x.hiddenCanvas,
          ref: Q
        }), (0, a.jsx)("canvas", {
          className: x.timelineBackground,
          ref: X
        }), (0, a.jsx)(u.tEY, {
          children: (0, a.jsx)("div", {
            tabIndex: 0,
            ref: I,
            className: x.playhead,
            style: {
              left: null != eo ? "".concat(eo.currentTime / eo.duration * 100, "%") : 0
            }
          })
        }), (0, a.jsx)(m.Z, {
          preload: "auto",
          onLoadedMetadata: function() {
            let e = L.current;
            if (null != e) {
              if (A(e.duration), 0 === S.start && (0 === S.end || S.end === e.duration)) {
                var t;
                null == (t = P.current) || t.seek(e.duration / 2), M(e.duration / 2)
              }
              0 === S.end && N(t => j(b({}, t), {
                end: e.duration
              }))
            }
          },
          className: x.timelineVideo,
          ref: L,
          src: O,
          muted: true
        }), (0, a.jsxs)("div", {
          className: x.dragBox,
          style: {
            left: null != F ? "".concat(S.start / F * 100, "%") : "0",
            right: null != F ? "".concat((F - S.end) / F * 100, "%") : "0"
          },
          children: [(0, a.jsx)("div", {
            className: x.timePillContainer,
            children: (0, a.jsx)("div", {
              ref: Z,
              className: x.timePillBackground,
              children: (0, a.jsxs)(u.Text, {
                variant: "text-sm/normal",
                className: x.timePillText,
                color: "always-white",
                children: [_(ei), (0, a.jsx)("span", {
                  className: x.slashCharacter,
                  children: " / "
                }), _(V)]
              })
            })
          }), (0, a.jsx)(u.tEY, {
            children: (0, a.jsx)("button", {
              className: i()(x.dragHandleLeft, {
                [x.dragging]: "start" === T
              }),
              onMouseDown: ea,
              onKeyDown: et,
              role: "slider",
              tabIndex: 0,
              "aria-valuemin": 0,
              "aria-valuenow": S.start,
              "aria-valuetext": w(S.start),
              "aria-valuemax": S.end - h.Hp,
              "aria-label": g.intl.string(g.t["+BTvw8"]),
              children: (0, a.jsx)("div", {
                className: x.cropLeftArrow
              })
            })
          }), (0, a.jsx)(u.tEY, {
            children: (0, a.jsx)("button", {
              className: i()(x.dragHandleRight, {
                [x.dragging]: "end" === T
              }),
              onMouseDown: ea,
              onKeyDown: en,
              role: "slider",
              tabIndex: 0,
              "aria-valuemin": S.start + h.Hp,
              "aria-valuenow": S.end,
              "aria-valuetext": w(S.end),
              "aria-valuemax": null == (C = P.current) || null == (y = C.videoElement) ? true : y.duration,
              "aria-label": g.intl.string(g.t.bBgBYm),
              children: (0, a.jsx)("div", {
                className: x.cropRightArrow
              })
            })
          })]
        })]
      })]
    })
  })
};

function _(e) {
  ((e = Math.round(100 * e) / 100) < 0 || .01 > Math.abs(e)) && (e = 0);
  let t = Math.floor(e / 60),
    n = Math.floor(e % 60),
    a = Math.floor(e % 1 * 100);
  return t = t < 10 ? "0" + t : t, n = n < 10 ? "0" + n : n, a = a < 10 ? "0" + a : a, "".concat(t, ":").concat(n, ".").concat(a)
}

function w(e) {
  let t = Math.floor(e / 60),
    n = g.intl.formatToPlainString(g.t.iXLF9f, {
      minutes: t
    }),
    a = g.intl.formatToPlainString(g.t.geSp4O, {
      seconds: e % 60
    });
  return "".concat(n, " ").concat(a)
}