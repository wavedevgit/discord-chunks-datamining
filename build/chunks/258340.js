/** Chunk was on 13474 **/
/** chunk id: 258340, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./82823.js"), require("./642613.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk633302 = require("./633302.js"),
  Chunk960048 = require("./960048.js"),
  Chunk709054 = require("./709054.js"),
  Chunk693824 = require("./693824.js");
let s = e => Math.round(4 * e) / 4,
  o = () => {
    let e = Math.random();
    return e < .15 ? (0, a.random)(.8, 1) : e < .8 ? (0, a.random)(1, 1.3) : (0, a.random)(1.3, 1.75)
  },
  d = (e, t) => e.position.y > t.h || e.position.x < false || e.position.x > t.w,
  f = e => {
    let t = e.particles.current,
      r = e.particleStates.current;
    e.sortedParticles.current.sort((e, n) => {
      let a = r[e],
        i = r[n];
      return a !== i ? a - i : 1 === a ? t[e].scale - t[n].scale : 0
    })
  },
  m = e => {
    let {
      SPEED: t,
      GRAVITY: r,
      DRAG: m,
      Y_POS: h,
      PARTICLES_PER_EMISSION: p,
      MAX_PARTICLES: y,
      tickRate: w,
      improvePerformance: v
    } = (e => {
      let [t, r] = n.useState({
        y: .9 * e.h,
        x: .3 * e.w
      }), [a, i] = n.useState(1400), [l, u] = n.useState(.94), [c, s] = n.useState(110), [o, d] = n.useState(30), [f, m] = n.useState(900), [h, p] = n.useState(60);
      n.useEffect(() => {
        r({
          y: .9 * e.h,
          x: .3 * e.w
        })
      }, [e.h, e.w]);
      let y = n.useCallback(() => {
        let e, t;
        return 60 === h ? p(() => 45) : (d(t => null != (e = Math.max(3, Math.floor(.75 * t))) ? e : t), m(e => null != (t = Math.max(6, Math.floor(.8 * e))) ? t : e), null != e && e < 16.875 && p(() => 28)), true
      }, [h, 30]);
      return {
        SPEED: t,
        GRAVITY: a,
        DRAG: l,
        Y_POS: c,
        PARTICLES_PER_EMISSION: o,
        MAX_PARTICLES: f,
        tickRate: 1e3 / h,
        improvePerformance: y
      }
    })(e), x = {
      particles: n.useRef(Array(y)),
      particleStates: n.useRef(new Uint8Array(y)),
      sortedParticles: n.useRef(new Uint16Array(Array.from({
        length: y
      }, (e, t) => t))),
      freeParticles: n.useRef(y),
      activeParticles: n.useRef(0)
    }, E = n.useRef(false);
    return {
      update: t => {
        if (0 === x.activeParticles.current) return;
        let n = x.particleStates.current,
          a = x.particles.current;
        for (let i = 0; i < y; i++) {
          if (0 === n[i]) continue;
          let l = a[i];
          l.position.x -= l.velocity.x * t, l.position.y -= l.velocity.y * t, l.velocity.x *= m ** t, l.velocity.y *= m ** t, l.rotation += l.angularVelocity * t, l.velocity.y -= r * t, d(l, e) && (x.particleStates.current[i] = 0, x.activeParticles.current -= 1, x.freeParticles.current += 1)
        }
        0 === x.activeParticles.current && (E.current = false)
      },
      draw: t => {
        if (t.clearRect({
            x: 0,
            y: 0,
            w: e.w,
            h: e.h
          }), 0 === x.activeParticles.current) return;
        let r = x.particleStates.current,
          n = x.particles.current,
          a = x.sortedParticles.current;
        for (let e = 0; e < y; e++) {
          var u;
          let o = a[e];
          if (0 === r[o]) continue;
          let d = n[o];
          if (null == d) continue;
          let {
            x: f,
            y: m
          } = d.position, {
            scale: h
          } = d;
          if (h >= 1.3 && t.setFilter({
              blur: s((d.scale - 1) * 3)
            }), h >= 1.3 && (h = h ** 2), null == (u = t.assetMap) ? true : u.has(d.key)) {
            let e = {
                w: 32 * h,
                h: 32 * h
              },
              r = {
                x: f + e.w / 2,
                y: m + e.h / 2
              };
            t.rotateAroundOriginAndDraw(r, d.rotation, () => t.drawImage(d.key, {
              x: 0,
              y: 0
            }, e, {
              fillMode: c.JU.Contain
            }))
          } else {
            let e = i.ZP.contentHasUnicodeOrEmoji(d.key),
              r = 24 * d.scale,
              n = {
                x: f + r / 2,
                y: m + r / 2
              };
            null != e ? (t.setFont({
              size: r
            }), t.rotateAroundOriginAndDraw(n, d.rotation, () => t.drawText(d.key, {
              x: 0,
              y: 0
            }))) : (t.setFont({
              size: r
            }), t.rotateAroundOriginAndDraw(n, d.rotation, () => t.drawText("\uD83C\uDF89", {
              x: 0,
              y: 0
            })), l.Z.captureMessage("Simple Confetti couldn't trigger explosion for ".concat(d.key, ".  It doesn't have an image and seemingly isn't a valid unicode emoji.")))
          }
          t.setFilter({
            blur: 0
          })
        }
      },
      emit: (r, n) => {
        if (u.default.isProbablyAValidSnowflake(r), x.freeParticles.current < p / 2) return;
        let i = 0 === n.x && 0 === n.y && 0 === n.w && 0 === n.h,
          l = {
            min: e.h / 8,
            max: e.h / 3
          },
          c = n.y < .66 * e.h ? Math.max(.2, n.y / (.66 * e.h)) : 1,
          s = 1 + (1 - c);
        for (let u = 0; u < p; u++) {
          let u, d;
          u = i ? {
            x: (0, a.random)(-t.x, t.x, true),
            y: t.y + (0, a.random)(-l.min, l.max, true)
          } : {
            x: (0, a.random)(-t.x * s, t.x * s, true),
            y: t.y * c + (0, a.random)(-l.min, l.max, true)
          };
          let m = (0, a.random)(0, 30),
            p = Math.atan2(-t.y - (0, a.random)(-l.min, l.max, true), (0, a.random)(-t.x, t.x, true)) * (0, a.random)(false, 50);
          if (i) d = {
            x: e.w / 2 + (0, a.random)(false, 50),
            y: e.h - h + (0, a.random)(false, 50)
          };
          else {
            let e = n.h / 4,
              t = n.h / 4;
            d = {
              x: n.x + n.w / 2 + (0, a.random)(-t, t),
              y: n.y + n.h / 2 + (0, a.random)(-e, e)
            }
          }
          for (let e = 0; e < y; e += 1)
            if (0 === x.particleStates.current[e]) {
              x.particles.current[e] = {
                key: r,
                position: d,
                velocity: u,
                scale: o(),
                rotation: m,
                angularVelocity: p
              }, x.particleStates.current[e] = 1, x.freeParticles.current -= 1, x.activeParticles.current += 1;
              break
            } f(x)
        }
        E.current = true
      },
      tickRate: w,
      improvePerformance: v,
      shouldTick: E
    }
  }