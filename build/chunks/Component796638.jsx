/** Chunk was on 13873 **/
/** chunk id: 796638, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZB: () => b,
  ZP: () => _,
  cF: () => f
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
  Chunk538925 = require("./538925.js");
let f = 112,
  h = 16 / 9 * 112 + 8,
  m = 10 * Chunk70956.Z.Millis.SECOND;

function g(e) {
  var t;
  let n = o.default.getId();
  return e.type === d.fO.USER && e.user.id === n && (null == (t = e.voiceState) ? true : t.selfVideo)
}

function b(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
      tileWidth: h,
      tileMinWidth: 124,
      tileMargin: 8,
      limit: 12,
      cropSelfVideo: false
    },
    {
      tileWidth: r,
      tileMinWidth: o,
      tileMargin: s,
      limit: u,
      cropSelfVideo: p,
      version: f
    } = n,
    [b, _] = i.useState(Date.now());
  i.useEffect(() => {
    let e = setTimeout(() => {
      _(Date.now())
    }, m);
    return () => {
      clearTimeout(e)
    }
  }, [t]);
  let y = i.useRef({}),
    {
      visibleParticipants: C,
      participantTileWidth: v
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
        [f, h] = (0, l.partition)(i, d.Io),
        b = f.findIndex(g),
        _ = null;
      false !== b && (_ = f[b], f.splice(b, 1));
      let C = null == _ || p ? e : e - r - s,
        v = Math.max(0, Math.min(Math.floor((C - s) / (o + s)), u, t.length)),
        O = Math.min((C - s) / v - s, r),
        x = Math.max(0, v - h.length),
        E = h.slice(0, v),
        j = f.slice(0, x),
        S = Array(x);
      if (x > 0) {
        let e = [];
        for (let t of j) {
          let n = y.current[t.id];
          null != n && n < x ? S[n] = t : e.push(t)
        }
        for (let t = 0; t < S.length; t++) {
          if (null != S[t]) continue;
          let n = e.shift();
          if (null == n) break;
          S[t] = n
        }
      }
      let P = S.filter(c.lm);
      y.current = (0, l.keyBy)((0, l.range)(P.length), e => P[e].id);
      let I = [...E, ...P];
      return null != _ && (p && I.length >= v ? I[Math.max(0, I.length - 1)] = _ : I.push(_)), {
        visibleParticipants: I,
        participantTileWidth: O
      }
    }, [e, t, b, f, p, u, s, o, r]);
  return {
    visibleParticipants: C,
    participantTileWidth: v
  }
}

function _(e) {
  let {
    participants: t,
    participantTileWidth: n,
    selectedParticipantId: i,
    onDoubleClick: l,
    onContextMenu: a,
    onClick: o,
    channel: s,
    inCall: c,
    popoutType: d,
    paused: f = false
  } = e;
  return (0, r.jsx)("div", {
    className: p.root,
    children: t.map(e => {
      if (null == e) return null;
      let t = g(e);
      return (0, r.jsx)("div", {
        className: p.tileSizer,
        style: t ? {
          flexShrink: 0
        } : true,
        children: (0, r.jsx)(u.ZP, {
          participant: e,
          selected: i === e.id,
          channel: s,
          className: p.tile,
          fit: u.BP.COVER,
          onClick: o,
          onDoubleClick: l,
          onContextMenu: a,
          width: t ? h : n,
          inCall: c,
          paused: f,
          popoutType: d
        })
      }, e.id)
    })
  })
}