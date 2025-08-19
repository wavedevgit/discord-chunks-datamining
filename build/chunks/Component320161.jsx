/** Chunk was on 66181 **/
/** chunk id: 320161, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk70956 = require("./70956.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let p = Chunk70956.Z.Millis.SECOND,
  g = 2 * p,
  h = Chunk70956.Z.Millis.HALF_SECOND,
  f = [() => Chunk388032.intl.string(Chunk388032.t.MSaeTU), () => Chunk388032.intl.string(Chunk388032.t.UmrCw8), () => Chunk388032.intl.string(Chunk388032.t.gKE0Ji), () => Chunk388032.intl.string(Chunk388032.t["4DSKbm"]), () => Chunk388032.intl.string(Chunk388032.t["+8ENdX"]), () => Chunk388032.intl.string(Chunk388032.t.GlWHv7), () => Chunk388032.intl.string(Chunk388032.t.hIzxU1), () => Chunk388032.intl.string(Chunk388032.t["26uMPD"]), () => Chunk388032.intl.string(Chunk388032.t.uFs7R0), () => Chunk388032.intl.string(Chunk388032.t.bLXdcX), () => Chunk388032.intl.string(Chunk388032.t.gPg9fX)];

function b(e) {
  let {
    text: t,
    copyValue: n,
    children: d,
    onCopy: m,
    "aria-label": b,
    delay: x = h
  } = e, [_, j] = r.useState(0), [E, C] = r.useState(false), [O, v] = r.useState(false), [S] = r.useState(() => new a.V7), [T] = r.useState(() => new a.V7);
  if (r.useEffect(() => () => {
      S.stop(), T.stop()
    }, [S, T]), !c.wS) return (0, i.jsx)(i.Fragment, {
    children: d({})
  });
  let N = _ >= f.length - 1,
    I = N ? l.FGA.RED : l.FGA.GREEN,
    y = E ? I : l.FGA.PRIMARY;
  return (0, i.jsx)(l.ua7, {
    text: (() => {
      var e;
      if (!E) return t;
      let n = (0, s.clamp)(_ - 1, 0, f.length - 1),
        r = null != (e = f[n]) ? e : f[0];
      return (0, i.jsx)(l.UkV, {
        isShaking: N,
        children: r()
      })
    })(),
    delay: x,
    "aria-label": b,
    color: y,
    forceOpen: O,
    onAnimationRest: (e, t) => {
      !O && E && t.phase === u.UkZ.LEAVE && C(false)
    },
    children: e => {
      var t, i, {
        onClick: r,
        onMouseEnter: s
      } = e;
      return d((t = function(e) {
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
      }({}, function(e, t) {
        if (null == e) return {};
        var n, i, r = function(e, t) {
          if (null == e) return {};
          var n, i, r = {},
            s = Object.keys(e);
          for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
          return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
      }(e, ["onClick", "onMouseEnter"])), i = i = {
        onClick: () => {
          null == r || r(), null == m || m(), (0, c.JG)(n), o.default.track(u.rMx.TEXT_COPIED), O || j(_ + 1), v(true), C(true), S.start(p, () => v(false)), T.start(g, () => j(0))
        },
        onMouseEnter: () => {
          if (!E) {
            null == s || s();
            return
          }
          S.stop(), v(false)
        }
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t))
    }
  })
}