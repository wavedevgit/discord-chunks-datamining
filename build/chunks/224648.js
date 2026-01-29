/** Chunk was on 1113 **/
/** chunk id: 224648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  RG: () => p,
  Uo: () => h
}), require("./321073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk59520 = require("./59520.js"),
  Chunk313961 = require("./313961.js"),
  Chunk996439 = require("./996439.js"),
  Chunk63995 = require("./63995.js"),
  Chunk113783 = require("./113783.js"),
  Chunk69407 = require("./69407.js");

function h(e) {
  let t = (0, u.zy)(e, d.ip.AUDIENCE),
    [n, l] = r.useState(false);
  return r.useEffect(() => {
    t > 100 ? l(true) : t < 75 && l(false)
  }, [t]), 5e3 * !!n
}

function p(e, t, n) {
  let u, h, p = arguments.length > 3 && true !== arguments[3] && arguments[3],
    g = (u = (0, i.bG)([c.A], () => [e, c.A.getParticipantsVersion(e)], [e], o.D), h = (0, i.bG)([a.A], () => a.A.getSelectedParticipantId(e), [e]), r.useMemo(() => {
      let n = [],
        r = [],
        i = false,
        s = [];
      if (p)
        for (let t of c.A.getMutableParticipants(e, d.ip.SPEAKER))
          if (t.type === d.wY.STREAM) t.id !== h && s.push(t), i++;
          else break;
      let a = (e, t, s) => {
          let a = s ? e.filter((e, t) => e.id !== h && t > i) : e,
            o = (0, l.chunk)(a, t);
          r.push(o), n.push(o.length)
        },
        o = null != h ? c.A.getParticipant(e, h) : null;
      return (null == o ? true : o.speaker) ? a([o], 1, false) : a([], 1, false), [d.ip.SPEAKER, d.ip.AUDIENCE].forEach(e => {
        a(c.A.getMutableParticipants(u[0], e), t[e], e === d.ip.SPEAKER)
      }), a(s, 1, false), [n, r]
    }, [u, t, h, p, e])),
    [f, m] = g,
    [b, A] = (0, s.J)(g, n, [t[d.ip.AUDIENCE]]);
  return [
    [f[3 * !!p], f[1], b[2]],
    [m[3 * !!p], m[1], A[2]]
  ]
}