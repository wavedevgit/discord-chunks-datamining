/** Chunk was on 24255 **/
/** chunk id: 796638, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZB: () => S,
  ZP: () => v,
  cF: () => p
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk933546 = require("./933546.js"),
  Chunk314897 = require("./314897.js"),
  Chunk70956 = require("./70956.js"),
  Chunk823379 = require("./823379.js"),
  Chunk27457 = require("./27457.jsx"),
  Chunk354459 = require("./354459.js"),
  Chunk699966 = require("./699966.js");
let p = 112,
  m = 16 / 9 * 112 + 8,
  E = 10 * Chunk70956.Z.Millis.SECOND;

function g(e) {
  var t;
  let n = o.default.getId();
  return e.type === d.fO.USER && e.user.id === n && (null == (t = e.voiceState) ? true : t.selfVideo)
}

function S(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
      tileWidth: m,
      tileMinWidth: 124,
      tileMargin: 8,
      limit: 12,
      cropSelfVideo: false
    },
    {
      tileWidth: r,
      tileMinWidth: o,
      tileMargin: u,
      limit: c,
      cropSelfVideo: f,
      version: p
    } = n,
    [S, v] = l.useState(Date.now());
  l.useEffect(() => {
    let e = setTimeout(() => {
      v(Date.now())
    }, E);
    return () => {
      clearTimeout(e)
    }
  }, [t]);
  let h = l.useRef({}),
    {
      visibleParticipants: b,
      participantTileWidth: O
    } = l.useMemo(() => {
      let n = Date.now(),
        l = (0, i.sortBy)(t, e => (function(e) {
          let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Date.now();
          switch (e.type) {
            case d.fO.ACTIVITY:
              return "\x01".concat(e.sortKey);
            case d.fO.HIDDEN_STREAM:
            case d.fO.STREAM:
              return "\x02".concat((0, a.Z)(e.userNick, e.user));
            case d.fO.USER:
              var n;
              let r = "\x06";
              return e.speaking ? r = "\x03" : t - e.lastSpoke < E ? r = "\x04" : (null == (n = e.voiceState) ? true : n.selfVideo) && (r = "\x05"), "".concat(r).concat(function(e) {
                let t = String(864e13).length;
                return String(864e13 - e).padStart(t, "0")
              }(e.lastSpoke)).concat((0, a.Z)(e.userNick, e.user))
          }
        })(e, n)),
        [p, m] = (0, i.partition)(l, d.Io),
        S = p.findIndex(g),
        v = null;
      false !== S && (v = p[S], p.splice(S, 1));
      let b = null == v || f ? e : e - r - u,
        O = Math.max(0, Math.min(Math.floor((b - u) / (o + u)), c, t.length)),
        y = Math.min((b - u) / O - u, r),
        _ = Math.max(0, O - m.length),
        Z = m.slice(0, O),
        j = p.slice(0, _),
        I = Array(_);
      if (_ > 0) {
        let e = [];
        for (let t of j) {
          let n = h.current[t.id];
          null != n && n < _ ? I[n] = t : e.push(t)
        }
        for (let t = 0; t < I.length; t++) {
          if (null != I[t]) continue;
          let n = e.shift();
          if (null == n) break;
          I[t] = n
        }
      }
      let w = I.filter(s.lm);
      h.current = (0, i.keyBy)((0, i.range)(w.length), e => w[e].id);
      let P = [...Z, ...w];
      return null != v && (f && P.length >= O ? P[Math.max(0, P.length - 1)] = v : P.push(v)), {
        visibleParticipants: P,
        participantTileWidth: y
      }
    }, [e, t, S, p, f, c, u, o, r]);
  return {
    visibleParticipants: b,
    participantTileWidth: O
  }
}

function v(e) {
  let {
    participants: t,
    participantTileWidth: n,
    selectedParticipantId: l,
    onDoubleClick: i,
    onContextMenu: a,
    onClick: o,
    channel: u,
    inCall: s,
    popoutWindow: d,
    paused: p = false
  } = e, E = null != d;
  return (0, r.jsx)("div", {
    className: f.root,
    children: t.map(e => {
      if (null == e) return null;
      let t = g(e);
      return (0, r.jsx)("div", {
        className: f.tileSizer,
        style: t ? {
          flexShrink: 0
        } : true,
        children: (0, r.jsx)(c.ZP, {
          participant: e,
          selected: l === e.id,
          channel: u,
          className: f.tile,
          fit: c.BP.COVER,
          onClick: o,
          onDoubleClick: i,
          onContextMenu: a,
          width: t ? m : n,
          inCall: s,
          paused: p,
          inPopout: E
        })
      }, e.id)
    })
  })
}