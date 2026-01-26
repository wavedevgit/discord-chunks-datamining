/** Chunk was on 67564 **/
/** chunk id: 224648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  RG: () => h,
  Uo: () => p
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

function p(e) {
  let t = (0, u.zy)(e, d.ip.AUDIENCE),
    [n, l] = r.useState(false);
  return r.useEffect(() => {
    t > 100 ? l(true) : t < 75 && l(false)
  }, [t]), 5e3 * !!n
}

function h(e, t, n) {
  let u, p, h = arguments.length > 3 && true !== arguments[3] && arguments[3],
    f = (u = (0, i.bG)([c.A], () => [e, c.A.getParticipantsVersion(e)], [e], o.D), p = (0, i.bG)([a.A], () => a.A.getSelectedParticipantId(e), [e]), r.useMemo(() => {
      let n = [],
        r = [],
        i = false,
        s = [];
      if (h)
        for (let t of c.A.getMutableParticipants(e, d.ip.SPEAKER))
          if (t.type === d.wY.STREAM) t.id !== p && s.push(t), i++;
          else break;
      let a = (e, t, s) => {
          let a = s ? e.filter((e, t) => e.id !== p && t > i) : e,
            o = (0, l.chunk)(a, t);
          r.push(o), n.push(o.length)
        },
        o = null != p ? c.A.getParticipant(e, p) : null;
      return (null == o ? true : o.speaker) ? a([o], 1, false) : a([], 1, false), [d.ip.SPEAKER, d.ip.AUDIENCE].forEach(e => {
        a(c.A.getMutableParticipants(u[0], e), t[e], e === d.ip.SPEAKER)
      }), a(s, 1, false), [n, r]
    }, [u, t, p, h, e])),
    [g, m] = f,
    [b, A] = (0, s.J)(f, n, [t[d.ip.AUDIENCE]]);
  return [
    [g[3 * !!h], g[1], b[2]],
    [m[3 * !!h], m[1], A[2]]
  ]
}