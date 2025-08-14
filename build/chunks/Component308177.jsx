/** Chunk was on 54273 **/
/** chunk id: 308177, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk112724 = require("./112724.jsx"),
  Chunk358221 = require("./358221.js"),
  Chunk565799 = require("./565799.js"),
  Chunk431328 = require("./431328.js"),
  Chunk501655 = require("./501655.js"),
  Chunk27931 = require("./27931.js"),
  Chunk260979 = require("./260979.jsx"),
  Chunk766015 = require("./766015.js"),
  Chunk755515 = require("./755515.jsx"),
  Chunk12779 = require("./12779.jsx"),
  Chunk450369 = require("./450369.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk307139 = require("./307139.js");

function x(e) {
  return e.type === u.Ui.VOICE
}
let j = (0, Chunk112724.Z)(e => {
  var t, n;
  let {
    channel: a,
    width: j,
    onScroll: _
  } = e, {
    selectedParticipantId: O,
    largeStream: v,
    chatOpen: C
  } = (0, l.cj)([s.Z], () => ({
    selectedParticipantId: s.Z.getSelectedParticipantId(a.id),
    largeStream: s.Z.getStageStreamSize(a.id),
    chatOpen: s.Z.getChatOpen(a.id)
  }), [a.id]), E = (0, c.Io)(a.id), S = (0, c.Rk)(a.id, u.pV.AUDIENCE), I = (0, l.e7)([o.Z], () => null != O ? o.Z.getParticipant(a.id, O) : null), Z = (0, c.w8)(a.id, u.pV.SPEAKER), P = Z.filter(x), T = null != Z.find(e => e.type === u.Ui.STREAM), N = Math.floor((j - 32) / 102), R = j < 424 ? 1 : j < 624 ? 2 : j < 824 || C ? 3 : 4, w = {
    [u.pV.SPEAKER]: R,
    [u.pV.AUDIENCE]: N,
    [u.pV.SELECTED]: 1
  }, A = (0, d.Dx)(a.id), [D, k] = (0, d.aP)(a.id, w, A), L = [Math.max(null != (t = D[0]) ? t : 1, 1), Math.max(null != (n = D[1]) ? n : 1, 1), D[2]], {
    speakerTileWidth: M,
    speakerTileHeight: U
  } = ((e, t) => {
    let n = Math.floor(e / t - 8),
      r = Math.floor(n / m.Q);
    return {
      speakerTileWidth: n,
      speakerTileHeight: r
    }
  })(j, R), F = v ? j - 32 : Math.min(j - 64, 3 * M + 8), H = e => e === D.length - 1 || 0 === S && 1 === e, [G, B] = i.useState(false), [W, V] = i.useState(false);
  return (0, r.jsx)(p.Z, {
    sections: L,
    renderSection: e => {
      let {
        section: t
      } = e;
      return 1 === t ? 0 === E ? null : (0, r.jsx)(g.Z, {
        participantCount: E,
        label: b.intl.string(b.t.CduOk5),
        className: y.header,
        onClick: () => B(!G),
        collapsed: G,
        speakers: P,
        channel: a,
        isStreamLive: T
      }, "speaker-header-".concat(t)) : 2 === t ? 0 === S ? null : (0, r.jsx)(g.Z, {
        participantCount: S,
        label: b.intl.string(b.t["3foUu7"]),
        className: y.header,
        onClick: () => V(!W),
        collapsed: W,
        channel: a
      }, "audience-header-".concat(t)) : null
    },
    sectionHeight: e => 48,
    renderRow: e => {
      let {
        section: t,
        row: n
      } = e, l = k[t][n];
      if ((null == l ? true : l.length) == null) return null;
      switch (t) {
        case 0:
          if (0 === l.length || null == l[0]) return null;
          return (0, r.jsx)("div", {
            className: y.focusedRow,
            children: (0, r.jsx)(m.Z, {
              channel: a,
              participant: l[0],
              width: F
            })
          }, "selected-participant");
        case 1:
          if (G) return null;
          return (0, r.jsx)(i.Fragment, {
            children: (0, r.jsx)(f.Z, {
              tileWidth: M,
              channel: a,
              participants: l,
              selectedParticipant: I
            })
          }, "speakers-".concat(t, "-").concat(n));
        case 2:
          if (W) return null;
          return (0, r.jsx)(h.Z, {
            channel: a,
            participants: l,
            maxTiles: N
          }, "audience-".concat(t, "-").concat(n));
        default:
          return null
      }
    },
    rowHeight: e => null == k[e][0] ? 0 : 0 === e ? F / m.Q + 8 : 1 === e ? G ? 0 : U : 98 * !W,
    renderFooter: e => {
      let {
        section: t
      } = e;
      return H(t) ? (0, r.jsx)("div", {
        className: y.spacer
      }, "bottom-spacer") : null
    },
    footerHeight: e => 1 === e ? 8 : 0 === e ? 12 : 88 * !!H(e),
    className: y.scroller,
    chunkSize: 60,
    onScroll: _
  })
})