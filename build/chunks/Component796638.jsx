/** Chunk was on web.js **/
/** chunk id: 796638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZB: () => I,
  ZP: () => T,
  cF: () => p
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  Chunk933546 = require("./933546.js"),
  Chunk314897 = require("./314897.js"),
  Chunk70956 = require("./70956.js"),
  Chunk823379 = require("./823379.js"),
  Chunk27457 = require("./27457.jsx"),
  Chunk354459 = require("./354459.js"),
  Chunk699966 = require("./699966.js");
let _ = 864e13,
  p = 112,
  h = 124,
  m = 12,
  g = 8,
  E = 16 / 9 * 112 + 8,
  b = 10 * Chunk70956.Z.Millis.SECOND;

function y(e) {
  let t = String(_).length;
  return String(_ - e).padStart(t, "0")
}

function O(e) {
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
      return e.speaking ? r = "\x03" : t - e.lastSpoke < b ? r = "\x04" : (null == (n = e.voiceState) ? true : n.selfVideo) && (r = "\x05"), "".concat(r).concat(y(e.lastSpoke)).concat((0, a.Z)(e.userNick, e.user))
  }
}

function v(e) {
  var t;
  let n = s.default.getId();
  return e.type === d.fO.USER && e.user.id === n && (null == (t = e.voiceState) ? true : t.selfVideo)
}

function I(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
      tileWidth: E,
      tileMinWidth: h,
      tileMargin: g,
      limit: m,
      cropSelfVideo: false
    },
    {
      tileWidth: r,
      tileMinWidth: a,
      tileMargin: s,
      limit: l,
      cropSelfVideo: u,
      version: f
    } = n,
    [_, p] = i.useState(Date.now());
  i.useEffect(() => {
    let e = setTimeout(() => {
      p(Date.now())
    }, b);
    return () => {
      clearTimeout(e)
    }
  }, [t]);
  let y = i.useRef({}),
    {
      visibleParticipants: I,
      participantTileWidth: T
    } = i.useMemo(() => {
      let n = Date.now(),
        i = (0, o.sortBy)(t, e => O(e, n)),
        [f, _] = (0, o.partition)(i, d.Io),
        p = f.findIndex(v),
        h = null;
      false !== p && (h = f[p], f.splice(p, 1));
      let m = null == h || u ? e : e - r - s,
        g = Math.max(0, Math.min(Math.floor((m - s) / (a + s)), l, t.length)),
        E = Math.min((m - s) / g - s, r),
        b = Math.max(0, g - _.length),
        I = _.slice(0, g),
        T = f.slice(0, b),
        S = Array(b);
      if (b > 0) {
        let e = [];
        for (let t of T) {
          let n = y.current[t.id];
          null != n && n < b ? S[n] = t : e.push(t)
        }
        for (let t = 0; t < S.length; t++) {
          if (null != S[t]) continue;
          let n = e.shift();
          if (null == n) break;
          S[t] = n
        }
      }
      let A = S.filter(c.lm);
      y.current = (0, o.keyBy)((0, o.range)(A.length), e => A[e].id);
      let N = [...I, ...A];
      return null != h && (u && N.length >= g ? N[Math.max(0, N.length - 1)] = h : N.push(h)), {
        visibleParticipants: N,
        participantTileWidth: E
      }
    }, [e, t, _, f, u, l, s, a, r]);
  return {
    visibleParticipants: I,
    participantTileWidth: T
  }
}

function T(e) {
  let {
    participants: t,
    participantTileWidth: n,
    selectedParticipantId: i,
    onDoubleClick: o,
    onContextMenu: a,
    onClick: s,
    channel: l,
    inCall: c,
    popoutWindow: d,
    paused: _ = false
  } = e, p = null != d;
  return (0, r.jsx)("div", {
    className: f.root,
    children: t.map(e => {
      if (null == e) return null;
      let t = v(e);
      return (0, r.jsx)("div", {
        className: f.tileSizer,
        style: t ? {
          flexShrink: 0
        } : true,
        children: (0, r.jsx)(u.ZP, {
          participant: e,
          selected: i === e.id,
          channel: l,
          className: f.tile,
          fit: u.BP.COVER,
          onClick: s,
          onDoubleClick: o,
          onContextMenu: a,
          width: t ? E : n,
          inCall: c,
          paused: _,
          inPopout: p
        })
      }, e.id)
    })
  })
}