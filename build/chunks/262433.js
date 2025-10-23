/** Chunk was on 99407 **/
/** chunk id: 262433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => m,
  Z: () => v
}), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk772848 = require("./772848.js"),
  Chunk191336 = require("./191336.js"),
  Chunk731965 = require("./731965.js"),
  Chunk125268 = require("./125268.js"),
  Chunk673125 = require("./673125.js"),
  Chunk984063 = require("./984063.js"),
  Chunk88315 = require("./88315.js"),
  Chunk199766 = require("./199766.js"),
  Chunk813900 = require("./813900.js");
let _ = {
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
  i()(null != (n = m.getState().particles[e.id]) ? n : {}).forEach(t)
}

function v(e) {
  var t, n, r;
  let {
    emojiHose: a,
    context: v,
    canvasWidth: b,
    canvasHeight: E,
    fallbackColor: h,
    outlineColorDark: S,
    outlineColorLight: y,
    streamerId: O,
    deadDrawables: I
  } = e;
  v.save();
  let C = s.Z.getEmojiImage(null != (n = null != (t = a.emojiId) ? t : a.emojiName) ? n : ""),
    w = (0, d.np)(a.x, b),
    P = (0, d.np)(a.y, E),
    {
      outlineColor: j
    } = (0, d.bg)(a.userId, S, y, h);
  g(a, e => {
      e.x += e.xSpeed * window.devicePixelRatio, e.y += e.ySpeed * window.devicePixelRatio, e.opacity -= e.opacitySpeed, e.opacity <= 0 && (0, o.j)(() => {
        m.setState(t => (delete t.particles[a.id][e.id], 0 === Object.keys(t.particles[a.id]).length && delete t.particles[a.id], t))
      })
    }),
    function(e, t, n) {
      var r;
      let a = null != (r = m.getState().lastSpawned[e.id]) ? r : 0,
        c = Date.now();
      !(a + 100 > c) && e.state !== u.f.STOP && (.8 >= Math.random() || a + 300 < c) && (0, o.j)(() => {
        m.setState(r => {
          var a;
          let o = null != (a = r.particles[e.id]) ? a : {},
            c = i().random(1, 2);
          for (let e = 0; e < c; e++) {
            let e = {
              id: (0, l.Z)(),
              x: t + i().random(-_.X_OFFSET, _.X_OFFSET),
              y: n + i().random(-_.Y_OFFSET, _.Y_OFFSET),
              xSpeed: i().random(-_.X_SPEED, _.X_SPEED),
              ySpeed: i().random(_.Y_SPEED_MIN, _.Y_SPEED_MAX),
              opacity: _.OPACITY,
              opacitySpeed: i().random(_.OPACITY_SPEED_MIN, _.OPACITY_SPEED_MAX),
              size: i().random(_.SIZE_MIN, _.SIZE_MAX)
            };
            o[e.id] = e
          }
          return r.particles[e.id] = o, r.lastSpawned[e.id] = Date.now(), r
        })
      })
    }(a, w, P), (0, f.I)(v, w, P, j, p.q2), (0, f.T)(v, w, P, a.userId), g(a, e => (function(e, t, n) {
      if (null == t) return;
      let r = n.size * window.devicePixelRatio,
        i = n.x - r / 2 * window.devicePixelRatio,
        l = n.y - 1.2 * r * window.devicePixelRatio;
      e.globalAlpha = n.opacity, e.drawImage(t, r / 2 + i, r / 2 + l, r, r)
    })(v, C, e)), a.lastUpdatedAt + p.FO < Date.now() && (0, c.ZZ)(O, a), a.state !== u.f.STOP || Object.keys(null != (r = m.getState().particles[a.id]) ? r : {}).length > 0 || I.push(a), v.restore()
}