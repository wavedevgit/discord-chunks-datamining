/** Chunk was on 12416 **/
n.d(t, {
  ZB: () => b,
  ZP: () => g,
  cF: () => m
}), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  l = n(392711),
  o = n(933546),
  a = n(314897),
  s = n(70956),
  c = n(823379),
  u = n(27457),
  d = n(354459),
  f = n(487967);
let m = 112,
  p = 16 / 9 * 112 + 8,
  h = 10 * s.Z.Millis.SECOND;

function v(e) {
  var t;
  let n = a.default.getId();
  return e.type === d.fO.USER && e.user.id === n && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo)
}

function b(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      tileWidth: p,
      tileMinWidth: 124,
      tileMargin: 8,
      limit: 12,
      cropSelfVideo: !1
    },
    {
      tileWidth: r,
      tileMinWidth: a,
      tileMargin: s,
      limit: u,
      cropSelfVideo: f,
      version: m
    } = n,
    [b, g] = i.useState(Date.now());
  i.useEffect(() => {
    let e = setTimeout(() => {
      g(Date.now())
    }, h);
    return () => {
      clearTimeout(e)
    }
  }, [t]);
  let y = i.useRef({}),
    {
      visibleParticipants: E,
      participantTileWidth: O
    } = i.useMemo(() => {
      let n = Date.now(),
        i = (0, l.sortBy)(t, e => (function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          switch (e.type) {
            case d.fO.PRESENCE_EMBEDDED_ACTIVITY:
              return "\0";
            case d.fO.ACTIVITY:
              return "\x01".concat(e.sortKey);
            case d.fO.HIDDEN_STREAM:
            case d.fO.STREAM:
              return "\x02".concat((0, o.Z)(e.userNick, e.user));
            case d.fO.USER:
              var n;
              let r = "\x06";
              return e.speaking ? r = "\x03" : t - e.lastSpoke < h ? r = "\x04" : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfVideo) && (r = "\x05"), "".concat(r).concat(function(e) {
                let t = String(864e13).length;
                return String(864e13 - e).padStart(t, "0")
              }(e.lastSpoke)).concat((0, o.Z)(e.userNick, e.user))
          }
        })(e, n)),
        [m, p] = (0, l.partition)(i, d.Io),
        b = m.findIndex(v),
        g = null; - 1 !== b && (g = m[b], m.splice(b, 1));
      let E = null == g || f ? e : e - r - s,
        O = Math.max(0, Math.min(Math.floor((E - s) / (a + s)), u, t.length)),
        S = Math.min((E - s) / O - s, r),
        j = Math.max(0, O - p.length),
        x = p.slice(0, O),
        Z = m.slice(0, j),
        w = Array(j);
      if (j > 0) {
        let e = [];
        for (let t of Z) {
          let n = y.current[t.id];
          null != n && n < j ? w[n] = t : e.push(t)
        }
        for (let t = 0; t < w.length; t++) {
          if (null != w[t]) continue;
          let n = e.shift();
          if (null == n) break;
          w[t] = n
        }
      }
      let C = w.filter(c.lm),
        P = (0, l.keyBy)((0, l.range)(C.length), e => C[e].id);
      y.current = P;
      let N = [...x, ...C];
      return null != g && (f && N.length >= O ? N[Math.max(0, N.length - 1)] = g : N.push(g)), {
        visibleParticipants: N,
        participantTileWidth: S
      }
    }, [e, t, b, m, f, u, s, a, r]);
  return {
    visibleParticipants: E,
    participantTileWidth: O
  }
}

function g(e) {
  let {
    participants: t,
    participantTileWidth: n,
    selectedParticipantId: i,
    onDoubleClick: l,
    onContextMenu: o,
    onClick: a,
    channel: s,
    inCall: c,
    popoutWindow: d,
    paused: m = !1
  } = e, h = null != d;
  return (0, r.jsx)("div", {
    className: f.root,
    children: t.map(e => {
      if (null == e) return null;
      let t = v(e);
      return (0, r.jsx)("div", {
        className: f.tileSizer,
        style: t ? {
          flexShrink: 0
        } : void 0,
        children: (0, r.jsx)(u.ZP, {
          participant: e,
          selected: i === e.id,
          channel: s,
          className: f.tile,
          fit: u.BP.COVER,
          onClick: a,
          onDoubleClick: l,
          onContextMenu: o,
          width: t ? p : n,
          inCall: c,
          paused: m,
          inPopout: h
        })
      }, e.id)
    })
  })
}