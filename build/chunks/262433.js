/** Chunk was on 69813 **/
/** chunk id: 262433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => b,
  Z: () => h
}), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk772848 = require("./772848.js"),
  Chunk121168 = require("./121168.js"),
  Chunk731965 = require("./731965.js"),
  Chunk125268 = require("./125268.js"),
  Chunk673125 = require("./673125.js"),
  Chunk984063 = require("./984063.js"),
  Chunk88315 = require("./88315.js"),
  Chunk199766 = require("./199766.js"),
  Chunk813900 = require("./813900.js");
let g = {
    X_OFFSET: 2 * Chunk813900.qh,
    Y_OFFSET: 25,
    X_SPEED: .5,
    Y_SPEED_MIN: false,
    Y_SPEED_MAX: false,
    OPACITY: 1,
    OPACITY_SPEED_MIN: .01,
    OPACITY_SPEED_MAX: .05,
    SIZE_MIN: Chunk813900.qh / 2,
    SIZE_MAX: Chunk813900.qh
  },
  b = (0, Chunk121168.U)(() => ({
    particles: {},
    lastSpawned: {}
  }));

function m(e, t) {
  var n;
  l()(null != (n = b.getState().particles[e.id]) ? n : {}).forEach(t)
}

function h(e) {
  var t, n, r;
  let {
    emojiHose: a,
    context: h,
    canvasWidth: E,
    canvasHeight: _,
    fallbackColor: v,
    outlineColorDark: y,
    outlineColorLight: O,
    streamerId: S,
    deadDrawables: C
  } = e;
  h.save();
  let I = s.Z.getEmojiImage(null != (n = null != (t = a.emojiId) ? t : a.emojiName) ? n : ""),
    N = (0, d.np)(a.x, E),
    T = (0, d.np)(a.y, _),
    {
      outlineColor: x
    } = (0, d.bg)(a.userId, y, O, v);
  m(a, e => {
      e.x += e.xSpeed * window.devicePixelRatio, e.y += e.ySpeed * window.devicePixelRatio, e.opacity -= e.opacitySpeed, e.opacity <= 0 && (0, o.j)(() => {
        b.setState(t => (delete t.particles[a.id][e.id], 0 === Object.keys(t.particles[a.id]).length && delete t.particles[a.id], t))
      })
    }),
    function(e, t, n) {
      var r;
      let a = null != (r = b.getState().lastSpawned[e.id]) ? r : 0,
        c = Date.now();
      !(a + 100 > c) && e.state !== u.f.STOP && (.8 >= Math.random() || a + 300 < c) && (0, o.j)(() => {
        b.setState(r => {
          var a;
          let o = null != (a = r.particles[e.id]) ? a : {},
            c = l().random(1, 2);
          for (let e = 0; e < c; e++) {
            let e = {
              id: (0, i.Z)(),
              x: t + l().random(-g.X_OFFSET, g.X_OFFSET),
              y: n + l().random(-g.Y_OFFSET, g.Y_OFFSET),
              xSpeed: l().random(-g.X_SPEED, g.X_SPEED),
              ySpeed: l().random(g.Y_SPEED_MIN, g.Y_SPEED_MAX),
              opacity: g.OPACITY,
              opacitySpeed: l().random(g.OPACITY_SPEED_MIN, g.OPACITY_SPEED_MAX),
              size: l().random(g.SIZE_MIN, g.SIZE_MAX)
            };
            o[e.id] = e
          }
          return r.particles[e.id] = o, r.lastSpawned[e.id] = Date.now(), r
        })
      })
    }(a, N, T), (0, f.I)(h, N, T, x, p.q2), (0, f.T)(h, N, T, a.userId), m(a, e => (function(e, t, n) {
      if (null == t) return;
      let r = n.size * window.devicePixelRatio,
        l = n.x - r / 2 * window.devicePixelRatio,
        i = n.y - 1.2 * r * window.devicePixelRatio;
      e.globalAlpha = n.opacity, e.drawImage(t, r / 2 + l, r / 2 + i, r, r)
    })(h, I, e)), a.lastUpdatedAt + p.FO < Date.now() && (0, c.ZZ)(S, a), a.state !== u.f.STOP || Object.keys(null != (r = b.getState().particles[a.id]) ? r : {}).length > 0 || C.push(a), h.restore()
}