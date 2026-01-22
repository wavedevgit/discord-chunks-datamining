/** Chunk was on 31748 **/
/** chunk id: 163432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => A,
  Vp: () => p,
  i4: () => h
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk90575 = require("./90575.js"),
  Chunk961350 = require("./961350.js"),
  Chunk927813 = require("./927813.js"),
  Chunk403362 = require("./403362.js"),
  Chunk175203 = require("./175203.jsx"),
  Chunk806931 = require("./806931.js"),
  Chunk107826 = require("./107826.js");
let p = 112,
  b = 16 / 9 * 112 + 8,
  g = 10 * Chunk927813.A.Millis.SECOND;

function m(e) {
  var t;
  let n = s.default.getId();
  return e.type === d.lp.USER && e.user.id === n && (null == (t = e.voiceState) ? true : t.selfVideo)
}

function h(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
      tileWidth: b,
      tileMinWidth: 124,
      tileMargin: 8,
      limit: 12,
      cropSelfVideo: false
    },
    {
      tileWidth: l,
      tileMinWidth: s,
      tileMargin: o,
      limit: u,
      cropSelfVideo: f,
      version: p
    } = n,
    [h, A] = r.useState(Date.now());
  r.useEffect(() => {
    let e = setTimeout(() => {
      A(Date.now())
    }, g);
    return () => {
      clearTimeout(e)
    }
  }, [t]);
  let y = r.useRef({}),
    {
      visibleParticipants: _,
      participantTileWidth: E
    } = r.useMemo(() => {
      let n = Date.now(),
        r = (0, i.sortBy)(t, e => (function(e) {
          let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Date.now();
          switch (e.type) {
            case d.lp.ACTIVITY:
              return "\x01".concat(e.sortKey);
            case d.lp.HIDDEN_STREAM:
            case d.lp.STREAM:
              return "\x02".concat((0, a.A)(e.userNick, e.user));
            case d.lp.USER:
              var n, l;
              let r, i = "\x06";
              return e.speaking ? i = "\x03" : t - e.lastSpoke < g ? i = "\x04" : (null == (n = e.voiceState) ? true : n.selfVideo) && (i = "\x05"), "".concat(i).concat((l = e.lastSpoke, r = String(864e13).length, String(864e13 - l).padStart(r, "0"))).concat((0, a.A)(e.userNick, e.user))
          }
        })(e, n)),
        [p, b] = (0, i.partition)(r, d.Xw),
        h = p.findIndex(m),
        A = null;
      false !== h && (A = p[h], p.splice(h, 1));
      let _ = null == A || f ? e : e - l - o,
        E = Math.max(0, Math.min(Math.floor((_ - o) / (s + o)), u, t.length)),
        v = Math.min((_ - o) / E - o, l),
        O = Math.max(0, E - b.length),
        x = b.slice(0, E),
        S = p.slice(0, O),
        N = Array(O);
      if (O > 0) {
        let e = [];
        for (let t of S) {
          let n = y.current[t.id];
          null != n && n < O ? N[n] = t : e.push(t)
        }
        for (let t = 0; t < N.length; t++) {
          if (null != N[t]) continue;
          let n = e.shift();
          if (null == n) break;
          N[t] = n
        }
      }
      let C = N.filter(c.Vq);
      y.current = (0, i.keyBy)((0, i.range)(C.length), e => C[e].id);
      let j = [...x, ...C];
      return null != A && (f && j.length >= E ? j[Math.max(0, j.length - 1)] = A : j.push(A)), {
        visibleParticipants: j,
        participantTileWidth: v
      }
    }, [e, t, h, p, f, u, o, s, l]);
  return {
    visibleParticipants: _,
    participantTileWidth: E
  }
}

function A(e) {
  let {
    participants: t,
    participantTileWidth: n,
    selectedParticipantId: r,
    onDoubleClick: i,
    onContextMenu: a,
    onClick: s,
    channel: o,
    inCall: c,
    popoutType: d,
    paused: p = false
  } = e;
  return (0, l.jsx)("div", {
    className: f.zr,
    children: t.map(e => {
      if (null == e) return null;
      let t = m(e);
      return (0, l.jsx)("div", {
        className: f.eP,
        style: t ? {
          flexShrink: 0
        } : true,
        children: (0, l.jsx)(u.Ay, {
          participant: e,
          selected: r === e.id,
          channel: o,
          className: f.Vs,
          fit: u.Yl.COVER,
          onClick: s,
          onDoubleClick: i,
          onContextMenu: a,
          width: t ? b : n,
          inCall: c,
          paused: p,
          popoutType: d
        })
      }, e.id)
    })
  })
}