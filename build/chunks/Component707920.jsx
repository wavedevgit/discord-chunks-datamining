/** Chunk was on 40184 **/
/** chunk id: 707920, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk918222 = require("./918222.js"),
  Chunk393903 = require("./393903.js"),
  Chunk785925 = require("./785925.js"),
  Chunk521506 = require("./521506.js"),
  Chunk805422 = require("./805422.js"),
  Chunk23303 = require("./23303.js"),
  Chunk393416 = require("./393416.jsx"),
  Chunk219226 = require("./219226.jsx"),
  Chunk766241 = require("./766241.jsx"),
  Chunk815144 = require("./815144.jsx"),
  Chunk610746 = require("./610746.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk263731 = require("./263731.js");
let O = e => {
    let {
      channel: t,
      idle: n,
      className: l,
      participants: o
    } = e, p = (0, h.Z)(t.id), [f, O] = r.useState(false), E = r.useCallback(e => {
      d.ZP.update(t.id, {
        seat: e
      })
    }, [t.id]), [j, S] = (0, c.R)("haven-show-chat", false);
    r.useEffect(() => {
      setTimeout(() => {
        O(true)
      }, 2500)
    }, []);
    let [_, P] = r.useState(.65), [I, Z] = r.useState(.65), [T, N] = r.useState(.65), [A, w] = r.useState({
      x: 0,
      y: 0
    }), [M, R] = r.useState(false), [D, L] = r.useState(0), [k, U] = r.useState({
      x: 0,
      y: 0
    }), [V, F] = r.useState({
      x: 0,
      y: 0
    }), [H, B] = r.useState(false), G = r.useRef(null), [W, z] = r.useState(null), q = (0, u.y)(e => {
      let {
        contentRect: t,
        target: n
      } = e, i = n.getBoundingClientRect(), r = t.width, l = t.height, a = r / m.U.width * 1.5, o = l / m.U.height * 1.5, s = r / m.U.width * 1.1, c = l / m.U.height * 1.1;
      U({
        x: r / 2 + i.x,
        y: l / 2 + i.y
      });
      let u = Math.max(a, o);
      if (P(Math.max(s, c)), N(u), null != G.current) {
        let e = G.current.getBoundingClientRect();
        z({
          x: e.left - i.left,
          y: e.top - i.top
        })
      }
    }), K = r.useCallback(e => {
      var t;
      let n = Math.max(e, _),
        i = null == (t = q.current) ? true : t.getBoundingClientRect();
      if (null == i) return;
      let r = {
          x: 1156,
          y: 1110
        },
        l = true,
        a = 0,
        o = i.height / n;
      for (; l && a < 10;)(l = r.y + o / 2 > 1536) && (r.y -= 32), a++;
      let s = r.x * n,
        c = r.y * n,
        u = i.width / 2 - s,
        d = i.height / 2 - c;
      Z(n), w({
        x: u,
        y: d
      })
    }, [q, _]);
    r.useEffect(() => {
      K(T)
    }, [T, K]);
    let Y = r.useCallback(e => {
      var t;
      let n = null == (t = q.current) ? true : t.getBoundingClientRect();
      if (null == n) return;
      let i = n.height / I,
        r = n.width / I,
        l = {
          x: e.x / I,
          y: e.y / I
        },
        a = e.y / I > 0,
        o = e.x / I > 0,
        s = l.y - i < false,
        c = l.x - r < false;
      s || a || o || c || w(e)
    }, [q, I]);
    return (0, i.jsx)(s.tEY, {
      children: (0, i.jsxs)("div", {
        ref: q,
        className: a()(x.havenWrapper, l),
        onClick: () => {
          L(0)
        },
        onMouseDown: () => R(Date.now()),
        onMouseUp: e => {
          if (null != q.current) {
            if (D < 2) {
              let n = Date.now(),
                i = q.current.getBoundingClientRect(),
                r = {
                  x: (e.pageX - i.x - A.x) / I,
                  y: (e.pageY - i.y - A.y) / I
                };
              false !== M && n - M > 250 && d.ZP.update(t.id, {
                position: r
              })
            }
            R(false)
          }
        },
        onMouseMove: e => {
          false !== M && (L(D + Math.abs(e.movementX) + Math.abs(e.movementY)), Y({
            x: A.x + e.movementX,
            y: A.y + e.movementY
          })), F({
            x: e.pageX,
            y: e.pageY
          })
        },
        children: [(0, i.jsx)("div", {
          className: x.haven,
          style: {
            transform: "translate(".concat(A.x, "px, ").concat(A.y, "px) scale(").concat(I, ") ")
          },
          children: (0, i.jsx)(m.Z, {
            roomSeats: p.seats,
            roomParticipants: p.participants,
            participants: o,
            channel: t,
            idle: n,
            skipNewUserEducation: !f,
            onSeatClick: E
          })
        }), (0, i.jsxs)("div", {
          className: a()(x.row, x.bottomActions),
          children: [(0, i.jsxs)("div", {
            className: a()(x.row, {
              [x.hidden]: n
            }),
            children: [(0, i.jsxs)("div", {
              ref: G,
              children: [(0, i.jsx)(s.hU, {
                variant: "icon-only",
                "aria-label": v.intl.string(y.default.W7TAH4),
                icon: s.RZG,
                disabled: n,
                onClick: e => {
                  e.preventDefault(), e.stopPropagation(), B(!H)
                }
              }), (0, i.jsx)(b.Z, {
                open: H,
                close: () => B(false),
                triggerRef: G,
                style: null != W ? {
                  left: W.x,
                  top: W.y
                } : true
              })]
            }), (0, i.jsx)(s.hU, {
              variant: "icon-only",
              "aria-label": v.intl.string(y.default.O7EDNk),
              icon: j ? s.ics : s.kBi,
              disabled: n,
              onClick: e => {
                e.preventDefault(), e.stopPropagation(), S(!j)
              }
            })]
          }), (0, i.jsx)(g.Z, {
            channel: t,
            idle: n,
            showChat: null != j && j
          }), (0, i.jsxs)("div", {
            className: a()(x.row, {
              [x.hidden]: n
            }),
            children: [(0, i.jsx)(s.hU, {
              variant: "icon-only",
              "aria-label": "Zoom out Haven",
              icon: s.BlJ,
              disabled: n,
              onClick: e => {
                e.preventDefault(), e.stopPropagation(), K(I - .05)
              }
            }), (0, i.jsx)(s.hU, {
              variant: "icon-only",
              "aria-label": "Zoom in Haven",
              icon: s.OyE,
              disabled: n,
              onClick: e => {
                e.preventDefault(), e.stopPropagation(), K(I + .05)
              }
            })]
          })]
        }), (0, i.jsx)(C.Z, {
          channel: t,
          participants: o
        }), (0, i.jsx)(b.Z, {
          open: H,
          close: () => B(false),
          triggerRef: G,
          style: null != W ? {
            left: W.x,
            top: W.y
          } : true
        }), (0, i.jsx)("div", {
          className: a()(x.overlay, {
            [x.out]: f
          }),
          children: (0, i.jsx)("div", {
            className: x.welcome,
            children: (0, i.jsx)(s.Text, {
              variant: "display-lg",
              children: "Welcome to Haven"
            })
          })
        })]
      })
    })
  },
  E = e => {
    let t = p.t.useConfig({
        location: "Haven"
      }).enabled,
      n = (0, o.e7)([f.Z], () => f.Z.isUserConnected(e.channel.id));
    return (r.useEffect(() => {
      t && (n || d.ZP.connect(e.channel.id))
    }, [e.channel.id, n, t]), t) ? (0, i.jsx)(O, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({}, e)) : null
  }