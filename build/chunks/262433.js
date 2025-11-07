/** Chunk was on 86642 **/
/** chunk id: 262433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => m,
  Z: () => b
}), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk772848 = require("./772848.js"),
  Chunk191336 = require("./191336.js"),
  Chunk731965 = require("./731965.js"),
  Chunk125268 = require("./125268.js"),
  Chunk673125 = require("./673125.js"),
  Chunk984063 = require("./984063.js"),
  Chunk88315 = require("./88315.js"),
  Chunk199766 = require("./199766.js"),
  Chunk813900 = require("./813900.js");
let h = {
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
  m = (0, Chunk191336.U)(() => ({
    particles: {},
    lastSpawned: {}
  }));

function g(e, t) {
  var n;
  r()(null != (n = m.getState().particles[e.id]) ? n : {}).forEach(t)
}

function b(e) {
  var t, n, i;
  let {
    emojiHose: a,
    context: b,
    canvasWidth: y,
    canvasHeight: C,
    fallbackColor: _,
    outlineColorDark: v,
    outlineColorLight: x,
    streamerId: O,
    deadDrawables: E
  } = e;
  b.save();
  let j = c.Z.getEmojiImage(null != (n = null != (t = a.emojiId) ? t : a.emojiName) ? n : ""),
    S = (0, d.np)(a.x, y),
    P = (0, d.np)(a.y, C),
    {
      outlineColor: I
    } = (0, d.bg)(a.userId, v, x, _);
  g(a, e => {
      e.x += e.xSpeed * window.devicePixelRatio, e.y += e.ySpeed * window.devicePixelRatio, e.opacity -= e.opacitySpeed, e.opacity <= 0 && (0, o.j)(() => {
        m.setState(t => (delete t.particles[a.id][e.id], 0 === Object.keys(t.particles[a.id]).length && delete t.particles[a.id], t))
      })
    }),
    function(e, t, n) {
      var i;
      let a = null != (i = m.getState().lastSpawned[e.id]) ? i : 0,
        s = Date.now();
      !(a + 100 > s) && e.state !== u.f.STOP && (.8 >= Math.random() || a + 300 < s) && (0, o.j)(() => {
        m.setState(i => {
          var a;
          let o = null != (a = i.particles[e.id]) ? a : {},
            s = r().random(1, 2);
          for (let e = 0; e < s; e++) {
            let e = {
              id: (0, l.Z)(),
              x: t + r().random(-h.X_OFFSET, h.X_OFFSET),
              y: n + r().random(-h.Y_OFFSET, h.Y_OFFSET),
              xSpeed: r().random(-h.X_SPEED, h.X_SPEED),
              ySpeed: r().random(h.Y_SPEED_MIN, h.Y_SPEED_MAX),
              opacity: h.OPACITY,
              opacitySpeed: r().random(h.OPACITY_SPEED_MIN, h.OPACITY_SPEED_MAX),
              size: r().random(h.SIZE_MIN, h.SIZE_MAX)
            };
            o[e.id] = e
          }
          return i.particles[e.id] = o, i.lastSpawned[e.id] = Date.now(), i
        })
      })
    }(a, S, P), (0, p.I)(b, S, P, I, f.q2), (0, p.T)(b, S, P, a.userId), g(a, e => (function(e, t, n) {
      if (null == t) return;
      let i = n.size * window.devicePixelRatio,
        r = n.x - i / 2 * window.devicePixelRatio,
        l = n.y - 1.2 * i * window.devicePixelRatio;
      e.globalAlpha = n.opacity, e.drawImage(t, i / 2 + r, i / 2 + l, i, i)
    })(b, j, e)), a.lastUpdatedAt + f.FO < Date.now() && (0, s.ZZ)(O, a), a.state !== u.f.STOP || Object.keys(null != (i = m.getState().particles[a.id]) ? i : {}).length > 0 || E.push(a), b.restore()
}