/** Chunk was on 48615 **/
/** chunk id: 796638, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZB: () => v,
  ZP: () => h,
  cF: () => p
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk933546 = require("./933546.js"),
  Chunk314897 = require("./314897.js"),
  Chunk70956 = require("./70956.js"),
  Chunk823379 = require("./823379.js"),
  Chunk27457 = require("./27457.jsx"),
  Chunk354459 = require("./354459.js"),
  Chunk389591 = require("./389591.js");
let p = 112,
  b = 16 / 9 * 112 + 8,
  m = 10 * Chunk70956.Z.Millis.SECOND;

function g(e) {
  var t;
  let n = o.default.getId();
  return e.type === d.fO.USER && e.user.id === n && (null == (t = e.voiceState) ? true : t.selfVideo)
}

function v(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
      tileWidth: b,
      tileMinWidth: 124,
      tileMargin: 8,
      limit: 12,
      cropSelfVideo: false
    },
    {
      tileWidth: r,
      tileMinWidth: o,
      tileMargin: c,
      limit: u,
      cropSelfVideo: f,
      version: p
    } = n,
    [v, h] = i.useState(Date.now());
  i.useEffect(() => {
    let e = setTimeout(() => {
      h(Date.now())
    }, m);
    return () => {
      clearTimeout(e)
    }
  }, [t]);
  let E = i.useRef({}),
    {
      visibleParticipants: _,
      participantTileWidth: y
    } = i.useMemo(() => {
      let n = Date.now(),
        i = (0, l.sortBy)(t, e => (function(e) {
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
              return e.speaking ? r = "\x03" : t - e.lastSpoke < m ? r = "\x04" : (null == (n = e.voiceState) ? true : n.selfVideo) && (r = "\x05"), "".concat(r).concat(function(e) {
                let t = String(864e13).length;
                return String(864e13 - e).padStart(t, "0")
              }(e.lastSpoke)).concat((0, a.Z)(e.userNick, e.user))
          }
        })(e, n)),
        [p, b] = (0, l.partition)(i, d.Io),
        v = p.findIndex(g),
        h = null;
      false !== v && (h = p[v], p.splice(v, 1));
      let _ = null == h || f ? e : e - r - c,
        y = Math.max(0, Math.min(Math.floor((_ - c) / (o + c)), u, t.length)),
        S = Math.min((_ - c) / y - c, r),
        O = Math.max(0, y - b.length),
        C = b.slice(0, y),
        w = p.slice(0, O),
        I = Array(O);
      if (O > 0) {
        let e = [];
        for (let t of w) {
          let n = E.current[t.id];
          null != n && n < O ? I[n] = t : e.push(t)
        }
        for (let t = 0; t < I.length; t++) {
          if (null != I[t]) continue;
          let n = e.shift();
          if (null == n) break;
          I[t] = n
        }
      }
      let P = I.filter(s.lm);
      E.current = (0, l.keyBy)((0, l.range)(P.length), e => P[e].id);
      let j = [...C, ...P];
      return null != h && (f && j.length >= y ? j[Math.max(0, j.length - 1)] = h : j.push(h)), {
        visibleParticipants: j,
        participantTileWidth: S
      }
    }, [e, t, v, p, f, u, c, o, r]);
  return {
    visibleParticipants: _,
    participantTileWidth: y
  }
}

function h(e) {
  let {
    participants: t,
    participantTileWidth: n,
    selectedParticipantId: i,
    onDoubleClick: l,
    onContextMenu: a,
    onClick: o,
    channel: c,
    inCall: s,
    popoutType: d,
    paused: p = false
  } = e;
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
        children: (0, r.jsx)(u.ZP, {
          participant: e,
          selected: i === e.id,
          channel: c,
          className: f.tile,
          fit: u.BP.COVER,
          onClick: o,
          onDoubleClick: l,
          onContextMenu: a,
          width: t ? b : n,
          inCall: s,
          paused: p,
          popoutType: d
        })
      }, e.id)
    })
  })
}