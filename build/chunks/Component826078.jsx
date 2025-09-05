/** Chunk was on 61526 **/
/** chunk id: 826078, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk399606 = require("./399606.js"),
  Chunk84735 = require("./84735.js"),
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

function j(e) {
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

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = function(e) {
  var t, n, l, _, k, O;
  let {
    sourceURL: P
  } = e, {
    videoPlayerRef: S,
    cropData: N,
    setCropData: E
  } = (0, h.S)(), [R, L] = a.useState(((O = !(null == (n = S.current) || null == (t = n.videoElement) ? true : t.paused), true), O)), T = a.useRef(null), [F, D] = a.useState(null), [I, A] = a.useState(), Z = a.useRef(null), B = a.useRef(null), [M, z] = a.useState(0), [H, W] = a.useState(false), [U, V] = a.useState(null);
  (0, m.Z)(() => {
    var e;
    let t = null == (e = S.current) ? true : e.videoElement;
    null != t && M !== t.currentTime && z(t.currentTime)
  });
  let X = a.useMemo(() => N.end - N.start, [N]);
  a.useEffect(() => {
    var e;
    let t = null == (e = S.current) ? true : e.videoElement,
      n = Z.current,
      r = B.current;
    if (null == t || null == n || null == r) return;
    let a = (0, o.debounce)(L, g.HW),
      l = () => {
        D(null), W(false), a.cancel(), a(true)
      },
      i = () => {
        a.cancel(), a(false)
      };
    return t.addEventListener("play", l), t.addEventListener("pause", i), () => {
      t.removeEventListener("play", l), t.removeEventListener("pause", i)
    }
  }, [S]);
  let {
    ref: G,
    width: K = 0,
    height: Y = 0
  } = (0, d.ZP)(), Q = (0, s.e7)([f.Z], () => f.Z.windowSize());
  a.useMemo(() => {
    Q.width, Q.height;
    let e = G.current;
    null != e && V(e.getBoundingClientRect())
  }, [Q.width, Q.height, K, G]);
  let J = a.useRef(null),
    $ = a.useRef({}),
    q = a.useCallback(e => {
      var t;
      let n = (0, o.clamp)(e, 0, N.end - g.Hp);
      E(y(j({}, N), {
        start: n
      })), null == (t = S.current) || t.seek(n)
    }, [N, E, S]),
    ee = a.useCallback(e => {
      var t, n;
      let r = null == (t = S.current) ? true : t.videoElement;
      if (null == r) return;
      let a = (0, o.clamp)(e, N.start + g.Hp, r.duration);
      E(y(j({}, N), {
        end: a
      })), null == (n = S.current) || n.seek(a)
    }, [N, E, S]),
    et = a.useCallback((e, t) => {
      var n, r;
      if (null == I) return;
      if (null == U) return null;
      let a = ((0, o.clamp)(e, U.left, U.right) - U.left) / U.width * I,
        l = (0, o.clamp)(a, 0, I),
        i = F;
      if (null == i && t && (i = l <= N.start ? "start" : l >= N.end ? "end" : "playhead", null == (n = S.current) || n.pause(), D(i), W(R)), "start" === i) q(l);
      else if ("end" === i) ee(l);
      else if ("playhead" === i) {
        let e = (0, o.clamp)(l, N.start, N.end);
        null == (r = S.current) || r.seek(e)
      }
    }, [I, U, F, N.start, N.end, S, R, q, ee]),
    en = a.useCallback(e => {
      var t;
      let n = null == (t = S.current) ? true : t.videoElement;
      if (null == n) return;
      let r = (0, v.Z)(n.duration, e.shiftKey),
        a = false;
      switch (e.key) {
        case "ArrowLeft":
          a = true, q(N.start - r);
          break;
        case "ArrowRight":
          a = true, q(N.start + r)
      }
      a && (e.stopPropagation(), e.preventDefault())
    }, [S, q, N.start]),
    er = a.useCallback(e => {
      var t;
      let n = null == (t = S.current) ? true : t.videoElement;
      if (null == n) return;
      let r = (0, v.Z)(n.duration, e.shiftKey),
        a = false;
      switch (e.key) {
        case "ArrowLeft":
          a = true, ee(N.end - r);
          break;
        case "ArrowRight":
          a = true, ee(N.end + r)
      }
      a && (e.stopPropagation(), e.preventDefault())
    }, [S, ee, N.end]),
    ea = a.useCallback(e => {
      et(e.clientX, true)
    }, [et]),
    el = a.useCallback(e => {
      et(e.clientX, false)
    }, [et]),
    ei = a.useCallback(() => {
      if (H) {
        var e;
        null == (e = S.current) || e.play()
      }
      W(false), D(null)
    }, [S, H]);
  a.useEffect(() => (document.addEventListener("mousemove", el), document.addEventListener("mouseup", ei), () => {
    document.removeEventListener("mousemove", el), document.removeEventListener("mouseup", ei)
  }), [el, ei]), a.useEffect(() => {
    !async function() {
      var e;
      let t = G.current,
        n = T.current;
      if (null == t || null == n || null == I) return;
      t.height = Y, t.width = K;
      let r = t.getContext("2d");
      if (null == r) return;
      r.fillStyle = "#000", r.fillRect(0, 0, K, Y);
      let a = Math.ceil(Y * (n.videoWidth / n.videoHeight)),
        l = Math.ceil(K / a),
        i = J.current;
      if (null == i) return;
      i.width = a, i.height = Y;
      let o = null == i ? true : i.getContext("2d", {
        willReadFrequently: true
      });
      if (null == o) return;
      let s = $.current;
      if ((null == (e = s[l]) ? true : e.length) === l) {
        for (let e = 0; e < l; e++) r.putImageData(s[l][e], a * e, 0);
        return
      }
      for (let e = 0; e < l; e++) await new Promise(t => {
        n.onseeked = () => {
          r.drawImage(n, a * e, 0, a, Y), o.drawImage(n, 0, 0, a, Y);
          let i = o.getImageData(0, 0, a, Y);
          null == s[l] && (s[l] = []), s[l][e] = i, t()
        }, n.currentTime = a / K * I * e
      })
    }()
  }, [K, Y, G, I, J]);
  let eo = M - N.start,
    es = null == (l = S.current) ? true : l.videoElement;
  return (0, r.jsx)("div", {
    className: b.centeringWrapper,
    children: (0, r.jsxs)("div", {
      className: b.timelineContainer,
      children: [(0, r.jsx)("div", {
        className: b.playPauseButtonWrapper,
        children: (0, r.jsx)(c.P3F, {
          tabIndex: 0,
          onClick: () => {
            var e, t;
            return R ? null == (e = S.current) ? true : e.pause() : null == (t = S.current) ? true : t.play()
          },
          className: b.playPauseButton,
          children: R ? (0, r.jsx)(c.fpf, {
            size: "md",
            color: "currentColor",
            className: b.playPauseIcon
          }) : (0, r.jsx)(c.o1U, {
            size: "md",
            color: "currentColor",
            className: b.playPauseIcon
          })
        })
      }), (0, r.jsxs)("div", {
        className: i()(b.timeline, {
          [b.timelineDragging]: null != F
        }),
        onMouseDown: ea,
        children: [(0, r.jsx)("canvas", {
          className: b.hiddenCanvas,
          ref: J
        }), (0, r.jsx)("canvas", {
          className: b.timelineBackground,
          ref: G
        }), (0, r.jsx)(u.t, {
          children: (0, r.jsx)("div", {
            tabIndex: 0,
            ref: Z,
            className: b.playhead,
            style: {
              left: null != es ? "".concat(es.currentTime / es.duration * 100, "%") : 0
            }
          })
        }), (0, r.jsx)(p.Z, {
          preload: "auto",
          onLoadedMetadata: function() {
            let e = T.current;
            if (null != e) {
              if (A(e.duration), 0 === N.start && (0 === N.end || N.end === e.duration)) {
                var t;
                null == (t = S.current) || t.seek(e.duration / 2), z(e.duration / 2)
              }
              0 === N.end && E(t => y(j({}, t), {
                end: e.duration
              }))
            }
          },
          className: b.timelineVideo,
          ref: T,
          src: P,
          muted: true
        }), (0, r.jsxs)("div", {
          className: b.dragBox,
          style: {
            left: null != I ? "".concat(N.start / I * 100, "%") : "0",
            right: null != I ? "".concat((I - N.end) / I * 100, "%") : "0"
          },
          children: [(0, r.jsx)("div", {
            className: b.timePillContainer,
            children: (0, r.jsx)("div", {
              ref: B,
              className: b.timePillBackground,
              children: (0, r.jsxs)(c.Text, {
                variant: "text-sm/normal",
                className: b.timePillText,
                color: "always-white",
                children: [w(eo), (0, r.jsx)("span", {
                  className: b.slashCharacter,
                  children: " / "
                }), w(X)]
              })
            })
          }), (0, r.jsx)(u.t, {
            children: (0, r.jsx)("button", {
              className: i()(b.dragHandleLeft, {
                [b.dragging]: "start" === F
              }),
              onMouseDown: ea,
              onKeyDown: en,
              role: "slider",
              tabIndex: 0,
              "aria-valuemin": 0,
              "aria-valuenow": N.start,
              "aria-valuetext": C(N.start),
              "aria-valuemax": N.end - g.Hp,
              "aria-label": x.intl.string(x.t["+BTvw8"]),
              children: (0, r.jsx)("div", {
                className: b.cropLeftArrow
              })
            })
          }), (0, r.jsx)(u.t, {
            children: (0, r.jsx)("button", {
              className: i()(b.dragHandleRight, {
                [b.dragging]: "end" === F
              }),
              onMouseDown: ea,
              onKeyDown: er,
              role: "slider",
              tabIndex: 0,
              "aria-valuemin": N.start + g.Hp,
              "aria-valuenow": N.end,
              "aria-valuetext": C(N.end),
              "aria-valuemax": null == (k = S.current) || null == (_ = k.videoElement) ? true : _.duration,
              "aria-label": x.intl.string(x.t.bBgBYm),
              children: (0, r.jsx)("div", {
                className: b.cropRightArrow
              })
            })
          })]
        })]
      })]
    })
  })
};

function w(e) {
  ((e = Math.round(100 * e) / 100) < 0 || .01 > Math.abs(e)) && (e = 0);
  let t = Math.floor(e / 60),
    n = Math.floor(e % 60),
    r = Math.floor(e % 1 * 100);
  return t = t < 10 ? "0" + t : t, n = n < 10 ? "0" + n : n, r = r < 10 ? "0" + r : r, "".concat(t, ":").concat(n, ".").concat(r)
}

function C(e) {
  let t = Math.floor(e / 60),
    n = x.intl.formatToPlainString(x.t.iXLF9f, {
      minutes: t
    }),
    r = x.intl.formatToPlainString(x.t.geSp4O, {
      seconds: e % 60
    });
  return "".concat(n, " ").concat(r)
}