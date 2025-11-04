/** Chunk was on 91053 **/
/** chunk id: 308177, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function y(e) {
  return e.type === d.Ui.VOICE
}
let x = (0, Chunk112724.Z)(e => {
  var t, n;
  let {
    channel: a,
    width: x,
    onScroll: v,
    popoutType: j
  } = e, {
    selectedParticipantId: O,
    largeStream: C,
    chatOpen: I
  } = (0, l.cj)([s.Z], () => ({
    selectedParticipantId: s.Z.getSelectedParticipantId(a.id),
    largeStream: s.Z.getStageStreamSize(a.id),
    chatOpen: s.Z.getChatOpen(a.id)
  }), [a.id]), S = (0, c.Io)(a.id), E = (0, c.Rk)(a.id, d.pV.AUDIENCE), Z = (0, l.e7)([o.Z], () => null != O ? o.Z.getParticipant(a.id, O) : null), P = (0, c.w8)(a.id, d.pV.SPEAKER), T = P.filter(y), N = null != P.find(e => e.type === d.Ui.STREAM), R = Math.floor((x - 32) / 102), w = x < 424 ? 1 : x < 624 ? 2 : x < 824 || I ? 3 : 4, A = {
    [d.pV.SPEAKER]: w,
    [d.pV.AUDIENCE]: R,
    [d.pV.SELECTED]: 1
  }, D = (0, u.Dx)(a.id), [L, M] = (0, u.aP)(a.id, A, D), k = [Math.max(null != (t = L[0]) ? t : 1, 1), Math.max(null != (n = L[1]) ? n : 1, 1), L[2]], {
    speakerTileWidth: U,
    speakerTileHeight: G
  } = ((e, t) => {
    let n = Math.floor(e / t - 8),
      r = Math.floor(n / m.Q);
    return {
      speakerTileWidth: n,
      speakerTileHeight: r
    }
  })(x, w), H = C ? x - 32 : Math.min(x - 64, 3 * U + 8), F = e => e === L.length - 1 || 0 === E && 1 === e, [B, V] = i.useState(false), [z, W] = i.useState(false);
  return (0, r.jsx)(p.Z, {
    sections: k,
    renderSection: e => {
      let {
        section: t
      } = e;
      return 1 === t ? 0 === S ? null : (0, r.jsx)(g.Z, {
        participantCount: S,
        label: b.intl.string(b.t.CduOkx),
        className: _.header,
        onClick: () => V(!B),
        collapsed: B,
        speakers: T,
        channel: a,
        isStreamLive: N
      }, "speaker-header-".concat(t)) : 2 === t ? 0 === E ? null : (0, r.jsx)(g.Z, {
        participantCount: E,
        label: b.intl.string(b.t["3foUu5"]),
        className: _.header,
        onClick: () => W(!z),
        collapsed: z,
        channel: a
      }, "audience-header-".concat(t)) : null
    },
    sectionHeight: e => 48,
    renderRow: e => {
      let {
        section: t,
        row: n
      } = e, l = M[t][n];
      if ((null == l ? true : l.length) == null) return null;
      switch (t) {
        case 0:
          if (0 === l.length || null == l[0]) return null;
          return (0, r.jsx)("div", {
            className: _.focusedRow,
            children: (0, r.jsx)(m.Z, {
              channel: a,
              participant: l[0],
              width: H,
              popoutType: j
            })
          }, "selected-participant");
        case 1:
          if (B) return null;
          return (0, r.jsx)(i.Fragment, {
            children: (0, r.jsx)(f.Z, {
              tileWidth: U,
              channel: a,
              participants: l,
              selectedParticipant: Z,
              popoutType: j
            })
          }, "speakers-".concat(t, "-").concat(n));
        case 2:
          if (z) return null;
          return (0, r.jsx)(h.Z, {
            channel: a,
            participants: l,
            maxTiles: R
          }, "audience-".concat(t, "-").concat(n));
        default:
          return null
      }
    },
    rowHeight: e => null == M[e][0] ? 0 : 0 === e ? H / m.Q + 8 : 1 === e ? B ? 0 : G : 98 * !z,
    renderFooter: e => {
      let {
        section: t
      } = e;
      return F(t) ? (0, r.jsx)("div", {
        className: _.spacer
      }, "bottom-spacer") : null
    },
    footerHeight: e => 1 === e ? 8 : 0 === e ? 12 : 88 * !!F(e),
    className: _.scroller,
    chunkSize: 60,
    onScroll: v
  })
})