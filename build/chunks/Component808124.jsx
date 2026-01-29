/** Chunk was on 1113 **/
/** chunk id: 808124, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk517461 = require("./517461.js"),
  Chunk770178 = require("./770178.js"),
  Chunk418126 = require("./418126.js"),
  Chunk266626 = require("./266626.js"),
  Chunk998740 = require("./998740.js"),
  Chunk732777 = require("./732777.js"),
  Chunk709382 = require("./709382.jsx"),
  Chunk287245 = require("./287245.jsx"),
  Chunk615658 = require("./615658.jsx"),
  Chunk592044 = require("./592044.jsx"),
  Chunk100449 = require("./100449.jsx"),
  Chunk588703 = require("./588703.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk185014 = require("./185014.js");
let j = e => {
    let {
      channel: t,
      idle: n,
      className: i,
      participants: a
    } = e, h = (0, g.A)(t.id), [p, j] = l.useState(false), v = l.useCallback(e => {
      d.Ay.update(t.id, {
        seat: e
      })
    }, [t.id]), [E, C] = (0, c.V)("haven-show-chat", false);
    l.useEffect(() => {
      setTimeout(() => {
        j(true)
      }, 2500)
    }, []);
    let [S, I] = l.useState(.65), [N, T] = l.useState(.65), [P, w] = l.useState(.65), [R, D] = l.useState({
      x: 0,
      y: 0
    }), [L, M] = l.useState(false), [k, G] = l.useState(0), [U, V] = l.useState({
      x: 0,
      y: 0
    }), [B, H] = l.useState({
      x: 0,
      y: 0
    }), [F, K] = l.useState(false), Y = l.useRef(null), [W, z] = l.useState(null), q = (0, u.w)(e => {
      let {
        contentRect: t,
        target: n
      } = e, r = n.getBoundingClientRect(), l = t.width, i = t.height, s = l / f.i.width * 1.5, a = i / f.i.height * 1.5, o = l / f.i.width * 1.1, c = i / f.i.height * 1.1;
      V({
        x: l / 2 + r.x,
        y: i / 2 + r.y
      });
      let u = Math.max(s, a);
      if (I(Math.max(o, c)), w(u), null != Y.current) {
        let e = Y.current.getBoundingClientRect();
        z({
          x: e.left - r.left,
          y: e.top - r.top
        })
      }
    }), X = l.useCallback(e => {
      var t;
      let n = Math.max(e, S),
        r = null == (t = q.current) ? true : t.getBoundingClientRect();
      if (null == r) return;
      let l = {
          x: 1156,
          y: 1110
        },
        i = true,
        s = 0,
        a = r.height / n;
      for (; i && s < 10;)(i = l.y + a / 2 > 1536) && (l.y -= 32), s++;
      let o = l.x * n,
        c = l.y * n,
        u = r.width / 2 - o,
        d = r.height / 2 - c;
      T(n), D({
        x: u,
        y: d
      })
    }, [q, S]);
    l.useEffect(() => {
      X(P)
    }, [P, X]);
    let J = l.useCallback(e => {
      var t;
      let n = null == (t = q.current) ? true : t.getBoundingClientRect();
      if (null == n) return;
      let r = n.height / N,
        l = n.width / N,
        i = {
          x: e.x / N,
          y: e.y / N
        },
        s = e.y / N > 0,
        a = e.x / N > 0,
        o = i.y - r < false,
        c = i.x - l < false;
      o || s || a || c || D(e)
    }, [q, N]);
    return (0, r.jsx)(o.vN3, {
      children: (0, r.jsxs)("div", {
        ref: q,
        className: s()(x.km, i),
        onClick: () => {
          G(0)
        },
        onMouseDown: () => M(Date.now()),
        onMouseUp: e => {
          if (null != q.current) {
            if (k < 2) {
              let n = Date.now(),
                r = q.current.getBoundingClientRect(),
                l = {
                  x: (e.pageX - r.x - R.x) / N,
                  y: (e.pageY - r.y - R.y) / N
                };
              false !== L && n - L > 250 && d.Ay.update(t.id, {
                position: l
              })
            }
            M(false)
          }
        },
        onMouseMove: e => {
          false !== L && (G(k + Math.abs(e.movementX) + Math.abs(e.movementY)), J({
            x: R.x + e.movementX,
            y: R.y + e.movementY
          })), H({
            x: e.pageX,
            y: e.pageY
          })
        },
        children: [(0, r.jsx)("div", {
          className: x.VT,
          style: {
            transform: "translate(".concat(R.x, "px, ").concat(R.y, "px) scale(").concat(N, ") ")
          },
          children: (0, r.jsx)(f.A, {
            roomSeats: h.seats,
            roomParticipants: h.participants,
            participants: a,
            channel: t,
            idle: n,
            skipNewUserEducation: !p,
            onSeatClick: v
          })
        }), (0, r.jsxs)("div", {
          className: s()(x.nM, x.vf),
          children: [(0, r.jsxs)("div", {
            className: s()(x.nM, {
              [x.R]: n
            }),
            children: [(0, r.jsx)("div", {
              ref: Y,
              children: (0, r.jsx)(o.K0, {
                variant: "icon-only",
                "aria-label": _.intl.string(O.default.W7TAH4),
                icon: o.T7G,
                disabled: n,
                onClick: e => {
                  e.preventDefault(), e.stopPropagation(), K(!F)
                }
              })
            }), (0, r.jsx)(o.K0, {
              variant: "icon-only",
              "aria-label": _.intl.string(O.default.O7EDNk),
              icon: E ? o._mZ : o.oyn,
              disabled: n,
              onClick: e => {
                e.preventDefault(), e.stopPropagation(), C(!E)
              }
            })]
          }), (0, r.jsx)(m.A, {
            channel: t,
            idle: n,
            showChat: null != E && E
          }), (0, r.jsxs)("div", {
            className: s()(x.nM, {
              [x.R]: n
            }),
            children: [(0, r.jsx)(o.K0, {
              variant: "icon-only",
              "aria-label": "Zoom out Haven",
              icon: o.V0_,
              disabled: n,
              onClick: e => {
                e.preventDefault(), e.stopPropagation(), X(N - .05)
              }
            }), (0, r.jsx)(o.K0, {
              variant: "icon-only",
              "aria-label": "Zoom in Haven",
              icon: o.r1u,
              disabled: n,
              onClick: e => {
                e.preventDefault(), e.stopPropagation(), X(N + .05)
              }
            })]
          })]
        }), (0, r.jsx)(y.A, {
          channel: t,
          participants: a
        }), (0, r.jsx)(A.A, {
          open: F,
          close: () => K(false),
          triggerRef: Y,
          style: null != W ? {
            left: W.x,
            top: W.y
          } : true
        }), (0, r.jsx)(b.A, {}), (0, r.jsx)("div", {
          className: s()(x.Lw, {
            [x.FD]: p
          }),
          children: (0, r.jsx)("div", {
            className: x.dH,
            children: (0, r.jsx)(o.Text, {
              variant: "display-lg",
              children: "Welcome to Haven"
            })
          })
        })]
      })
    })
  },
  v = e => {
    let t = h.s.useConfig({
        location: "Haven"
      }).enabled,
      n = (0, a.bG)([p.A], () => p.A.isUserConnected(e.channel.id));
    return (l.useEffect(() => {
      !t || n || d.Ay.connect(e.channel.id)
    }, [e.channel.id, n, t]), t) ? (0, r.jsx)(j, function(e) {
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
    }({}, e)) : null
  }