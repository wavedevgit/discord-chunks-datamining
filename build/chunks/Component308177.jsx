/** Chunk was on 49152 **/
/** chunk id: 308177, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
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
  Chunk816395 = require("./816395.js");
let x = {
    singleSpeaker: 424,
    twoSpeakers: 624,
    threeSpeakers: 824
  },
  _ = (e, t) => {
    let n = Math.floor(e / t - 8),
      r = Math.floor(n / m.Q);
    return {
      speakerTileWidth: n,
      speakerTileHeight: r
    }
  },
  j = (e, t) => e < x.singleSpeaker ? 1 : e < x.twoSpeakers ? 2 : e < x.threeSpeakers || t ? 3 : 4,
  O = e => Math.floor((e - 32) / 102);

function v(e) {
  return e.type === u.Ui.VOICE
}
let C = (0, Chunk112724.Z)(e => {
  var t, n;
  let {
    channel: a,
    width: x,
    onScroll: C
  } = e, {
    selectedParticipantId: E,
    largeStream: S,
    chatOpen: I
  } = (0, l.cj)([s.Z], () => ({
    selectedParticipantId: s.Z.getSelectedParticipantId(a.id),
    largeStream: s.Z.getStageStreamSize(a.id),
    chatOpen: s.Z.getChatOpen(a.id)
  }), [a.id]), Z = (0, c.Io)(a.id), P = (0, c.Rk)(a.id, u.pV.AUDIENCE), T = (0, l.e7)([o.Z], () => null != E ? o.Z.getParticipant(a.id, E) : null), N = (0, c.w8)(a.id, u.pV.SPEAKER), R = N.filter(v), w = null != N.find(e => e.type === u.Ui.STREAM), A = O(x), D = j(x, I), k = {
    [u.pV.SPEAKER]: D,
    [u.pV.AUDIENCE]: A,
    [u.pV.SELECTED]: 1
  }, L = (0, d.Dx)(a.id), [M, U] = (0, d.aP)(a.id, k, L), F = [Math.max(null != (t = M[0]) ? t : 1, 1), Math.max(null != (n = M[1]) ? n : 1, 1), M[2]], {
    speakerTileWidth: H,
    speakerTileHeight: G
  } = _(x, D), B = S ? x - 32 : Math.min(x - 64, 3 * H + 8), W = e => e === M.length - 1 || 0 === P && 1 === e, [V, z] = i.useState(false), [Y, q] = i.useState(false);
  return (0, r.jsx)(p.Z, {
    sections: F,
    renderSection: e => {
      let {
        section: t
      } = e;
      return 1 === t ? 0 === Z ? null : (0, r.jsx)(g.Z, {
        participantCount: Z,
        label: b.intl.string(b.t.CduOk5),
        className: y.header,
        onClick: () => z(!V),
        collapsed: V,
        speakers: R,
        channel: a,
        isStreamLive: w
      }, "speaker-header-".concat(t)) : 2 === t ? 0 === P ? null : (0, r.jsx)(g.Z, {
        participantCount: P,
        label: b.intl.string(b.t["3foUu7"]),
        className: y.header,
        onClick: () => q(!Y),
        collapsed: Y,
        channel: a
      }, "audience-header-".concat(t)) : null
    },
    sectionHeight: e => 48,
    renderRow: e => {
      let {
        section: t,
        row: n
      } = e, l = U[t][n];
      if ((null == l ? true : l.length) == null) return null;
      switch (t) {
        case 0:
          if (0 === l.length || null == l[0]) return null;
          return (0, r.jsx)("div", {
            className: y.focusedRow,
            children: (0, r.jsx)(m.Z, {
              channel: a,
              participant: l[0],
              width: B
            })
          }, "selected-participant");
        case 1:
          if (V) return null;
          return (0, r.jsx)(i.Fragment, {
            children: (0, r.jsx)(f.Z, {
              tileWidth: H,
              channel: a,
              participants: l,
              selectedParticipant: T
            })
          }, "speakers-".concat(t, "-").concat(n));
        case 2:
          if (Y) return null;
          return (0, r.jsx)(h.Z, {
            channel: a,
            participants: l,
            maxTiles: A
          }, "audience-".concat(t, "-").concat(n));
        default:
          return null
      }
    },
    rowHeight: e => null == U[e][0] ? 0 : 0 === e ? B / m.Q + 8 : 1 === e ? V ? 0 : G : 98 * !Y,
    renderFooter: e => {
      let {
        section: t
      } = e;
      return W(t) ? (0, r.jsx)("div", {
        className: y.spacer
      }, "bottom-spacer") : null
    },
    footerHeight: e => 1 === e ? 8 : 0 === e ? 12 : 88 * !!W(e),
    className: y.scroller,
    chunkSize: 60,
    onScroll: C
  })
})