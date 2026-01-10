/** Chunk was on 69813 **/
/** chunk id: 796638, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZB: () => h,
  ZP: () => E,
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
  g = 16 / 9 * 112 + 8,
  b = 10 * Chunk70956.Z.Millis.SECOND;

function m(e) {
  var t;
  let n = o.default.getId();
  return e.type === d.fO.USER && e.user.id === n && (null == (t = e.voiceState) ? true : t.selfVideo)
}

function h(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
      tileWidth: g,
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
    [h, E] = l.useState(Date.now());
  l.useEffect(() => {
    let e = setTimeout(() => {
      E(Date.now())
    }, b);
    return () => {
      clearTimeout(e)
    }
  }, [t]);
  let v = l.useRef({}),
    {
      visibleParticipants: _,
      participantTileWidth: y
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
              return e.speaking ? r = "\x03" : t - e.lastSpoke < b ? r = "\x04" : (null == (n = e.voiceState) ? true : n.selfVideo) && (r = "\x05"), "".concat(r).concat(function(e) {
                let t = String(864e13).length;
                return String(864e13 - e).padStart(t, "0")
              }(e.lastSpoke)).concat((0, a.Z)(e.userNick, e.user))
          }
        })(e, n)),
        [p, g] = (0, i.partition)(l, d.Io),
        h = p.findIndex(m),
        E = null;
      false !== h && (E = p[h], p.splice(h, 1));
      let _ = null == E || f ? e : e - r - c,
        y = Math.max(0, Math.min(Math.floor((_ - c) / (o + c)), u, t.length)),
        O = Math.min((_ - c) / y - c, r),
        C = Math.max(0, y - g.length),
        S = g.slice(0, y),
        I = p.slice(0, C),
        N = Array(C);
      if (C > 0) {
        let e = [];
        for (let t of I) {
          let n = v.current[t.id];
          null != n && n < C ? N[n] = t : e.push(t)
        }
        for (let t = 0; t < N.length; t++) {
          if (null != N[t]) continue;
          let n = e.shift();
          if (null == n) break;
          N[t] = n
        }
      }
      let T = N.filter(s.lm);
      v.current = (0, i.keyBy)((0, i.range)(T.length), e => T[e].id);
      let x = [...S, ...T];
      return null != E && (f && x.length >= y ? x[Math.max(0, x.length - 1)] = E : x.push(E)), {
        visibleParticipants: x,
        participantTileWidth: O
      }
    }, [e, t, h, p, f, u, c, o, r]);
  return {
    visibleParticipants: _,
    participantTileWidth: y
  }
}

function E(e) {
  let {
    participants: t,
    participantTileWidth: n,
    selectedParticipantId: l,
    onDoubleClick: i,
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
      let t = m(e);
      return (0, r.jsx)("div", {
        className: f.tileSizer,
        style: t ? {
          flexShrink: 0
        } : true,
        children: (0, r.jsx)(u.ZP, {
          participant: e,
          selected: l === e.id,
          channel: c,
          className: f.tile,
          fit: u.BP.COVER,
          onClick: o,
          onDoubleClick: i,
          onContextMenu: a,
          width: t ? g : n,
          inCall: s,
          paused: p,
          popoutType: d
        })
      }, e.id)
    })
  })
}