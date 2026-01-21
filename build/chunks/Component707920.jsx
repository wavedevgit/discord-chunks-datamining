/** Chunk was on 82124 **/
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
  Chunk555849 = require("./555849.jsx"),
  Chunk766241 = require("./766241.jsx"),
  Chunk815144 = require("./815144.jsx"),
  Chunk610746 = require("./610746.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk263731 = require("./263731.js");
let C = e => {
    let {
      channel: t,
      idle: n,
      className: l,
      participants: o
    } = e, p = (0, h.Z)(t.id), [f, C] = i.useState(false), E = i.useCallback(e => {
      d.ZP.update(t.id, {
        seat: e
      })
    }, [t.id]), [S, _] = (0, c.R)("haven-show-chat", false);
    i.useEffect(() => {
      setTimeout(() => {
        C(true)
      }, 2500)
    }, []);
    let [I, P] = i.useState(.65), [Z, N] = i.useState(.65), [T, A] = i.useState(.65), [w, R] = i.useState({
      x: 0,
      y: 0
    }), [D, M] = i.useState(false), [k, L] = i.useState(0), [U, G] = i.useState({
      x: 0,
      y: 0
    }), [B, F] = i.useState({
      x: 0,
      y: 0
    }), [H, V] = i.useState(false), z = i.useRef(null), [W, K] = i.useState(null), Y = (0, u.y)(e => {
      let {
        contentRect: t,
        target: n
      } = e, r = n.getBoundingClientRect(), i = t.width, l = t.height, a = i / g.U.width * 1.5, o = l / g.U.height * 1.5, s = i / g.U.width * 1.1, c = l / g.U.height * 1.1;
      G({
        x: i / 2 + r.x,
        y: l / 2 + r.y
      });
      let u = Math.max(a, o);
      if (P(Math.max(s, c)), A(u), null != z.current) {
        let e = z.current.getBoundingClientRect();
        K({
          x: e.left - r.left,
          y: e.top - r.top
        })
      }
    }), q = i.useCallback(e => {
      var t;
      let n = Math.max(e, I),
        r = null == (t = Y.current) ? true : t.getBoundingClientRect();
      if (null == r) return;
      let i = {
          x: 1156,
          y: 1110
        },
        l = true,
        a = 0,
        o = r.height / n;
      for (; l && a < 10;)(l = i.y + o / 2 > 1536) && (i.y -= 32), a++;
      let s = i.x * n,
        c = i.y * n,
        u = r.width / 2 - s,
        d = r.height / 2 - c;
      N(n), R({
        x: u,
        y: d
      })
    }, [Y, I]);
    i.useEffect(() => {
      q(T)
    }, [T, q]);
    let X = i.useCallback(e => {
      var t;
      let n = null == (t = Y.current) ? true : t.getBoundingClientRect();
      if (null == n) return;
      let r = n.height / Z,
        i = n.width / Z,
        l = {
          x: e.x / Z,
          y: e.y / Z
        },
        a = e.y / Z > 0,
        o = e.x / Z > 0,
        s = l.y - r < false,
        c = l.x - i < false;
      s || a || o || c || R(e)
    }, [Y, Z]);
    return (0, r.jsx)(s.tEY, {
      children: (0, r.jsxs)("div", {
        ref: Y,
        className: a()(x.havenWrapper, l),
        onClick: () => {
          L(0)
        },
        onMouseDown: () => M(Date.now()),
        onMouseUp: e => {
          if (null != Y.current) {
            if (k < 2) {
              let n = Date.now(),
                r = Y.current.getBoundingClientRect(),
                i = {
                  x: (e.pageX - r.x - w.x) / Z,
                  y: (e.pageY - r.y - w.y) / Z
                };
              false !== D && n - D > 250 && d.ZP.update(t.id, {
                position: i
              })
            }
            M(false)
          }
        },
        onMouseMove: e => {
          false !== D && (L(k + Math.abs(e.movementX) + Math.abs(e.movementY)), X({
            x: w.x + e.movementX,
            y: w.y + e.movementY
          })), F({
            x: e.pageX,
            y: e.pageY
          })
        },
        children: [(0, r.jsx)("div", {
          className: x.haven,
          style: {
            transform: "translate(".concat(w.x, "px, ").concat(w.y, "px) scale(").concat(Z, ") ")
          },
          children: (0, r.jsx)(g.Z, {
            roomSeats: p.seats,
            roomParticipants: p.participants,
            participants: o,
            channel: t,
            idle: n,
            skipNewUserEducation: !f,
            onSeatClick: E
          })
        }), (0, r.jsxs)("div", {
          className: a()(x.row, x.bottomActions),
          children: [(0, r.jsxs)("div", {
            className: a()(x.row, {
              [x.hidden]: n
            }),
            children: [(0, r.jsx)("div", {
              ref: z,
              children: (0, r.jsx)(s.hU, {
                variant: "icon-only",
                "aria-label": j.intl.string(O.default.W7TAH4),
                icon: s.RZG,
                disabled: n,
                onClick: e => {
                  e.preventDefault(), e.stopPropagation(), V(!H)
                }
              })
            }), (0, r.jsx)(s.hU, {
              variant: "icon-only",
              "aria-label": j.intl.string(O.default.O7EDNk),
              icon: S ? s.ics : s.kBi,
              disabled: n,
              onClick: e => {
                e.preventDefault(), e.stopPropagation(), _(!S)
              }
            })]
          }), (0, r.jsx)(m.Z, {
            channel: t,
            idle: n,
            showChat: null != S && S
          }), (0, r.jsxs)("div", {
            className: a()(x.row, {
              [x.hidden]: n
            }),
            children: [(0, r.jsx)(s.hU, {
              variant: "icon-only",
              "aria-label": "Zoom out Haven",
              icon: s.BlJ,
              disabled: n,
              onClick: e => {
                e.preventDefault(), e.stopPropagation(), q(Z - .05)
              }
            }), (0, r.jsx)(s.hU, {
              variant: "icon-only",
              "aria-label": "Zoom in Haven",
              icon: s.OyE,
              disabled: n,
              onClick: e => {
                e.preventDefault(), e.stopPropagation(), q(Z + .05)
              }
            })]
          })]
        }), (0, r.jsx)(v.Z, {
          channel: t,
          participants: o
        }), (0, r.jsx)(y.Z, {
          open: H,
          close: () => V(false),
          triggerRef: z,
          style: null != W ? {
            left: W.x,
            top: W.y
          } : true
        }), (0, r.jsx)(b.Z, {}), (0, r.jsx)("div", {
          className: a()(x.overlay, {
            [x.out]: f
          }),
          children: (0, r.jsx)("div", {
            className: x.welcome,
            children: (0, r.jsx)(s.Text, {
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
    return (i.useEffect(() => {
      t && (n || d.ZP.connect(e.channel.id))
    }, [e.channel.id, n, t]), t) ? (0, r.jsx)(C, function(e) {
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