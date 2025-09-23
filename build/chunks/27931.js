/** Chunk was on 63962 **/
/** chunk id: 27931, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Dx: () => p,
  aP: () => h
}), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk638730 = require("./638730.js"),
  Chunk358221 = require("./358221.js"),
  Chunk136015 = require("./136015.js"),
  Chunk565799 = require("./565799.js"),
  Chunk431328 = require("./431328.js"),
  Chunk501655 = require("./501655.js");

function p(e) {
  let t = (0, d.Rk)(e, u.pV.AUDIENCE),
    [n, i] = r.useState(false);
  return r.useEffect(() => {
    t > 100 ? i(true) : t < 75 && i(false)
  }, [t]), 5e3 * !!n
}

function h(e, t, n) {
  let d = arguments.length > 3 && true !== arguments[3] && arguments[3],
    p = function(e, t, n) {
      let a = (0, l.e7)([c.Z], () => [e, c.Z.getParticipantsVersion(e)], [e], o.Q),
        d = (0, l.e7)([s.Z], () => s.Z.getSelectedParticipantId(e), [e]);
      return r.useMemo(() => {
        let r = [],
          l = [],
          s = false,
          o = [];
        if (n)
          for (let t of c.Z.getMutableParticipants(e, u.pV.SPEAKER))
            if (t.type === u.Ui.STREAM) t.id !== d && o.push(t), s++;
            else break;
        let p = (e, t, n) => {
            let a = n ? e.filter((e, t) => e.id !== d && t > s) : e,
              o = (0, i.chunk)(a, t);
            l.push(o), r.push(o.length)
          },
          h = null != d ? c.Z.getParticipant(e, d) : null;
        return (null == h ? true : h.speaker) ? p([h], 1, false) : p([], 1, false), [u.pV.SPEAKER, u.pV.AUDIENCE].forEach(e => {
          p(c.Z.getMutableParticipants(a[0], e), t[e], e === u.pV.SPEAKER)
        }), p(o, 1, false), [r, l]
      }, [a, t, d, n, e])
    }(e, t, d),
    [h, f] = p,
    [g, m] = (0, a.T)(p, n, [t[u.pV.AUDIENCE]]);
  return [
    [h[3 * !!d], h[1], g[2]],
    [f[3 * !!d], f[1], m[2]]
  ]
}