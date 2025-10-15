/** Chunk was on 61526 **/
/** chunk id: 22989, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk240872 = require("./240872.jsx"),
  Chunk579806 = require("./579806.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk39604 = require("./39604.js"),
  Chunk212039 = require("./212039.js"),
  Chunk259612 = require("./259612.js"),
  Chunk572720 = require("./572720.js"),
  Chunk362693 = require("./362693.jsx"),
  Chunk674908 = require("./674908.jsx"),
  Chunk20437 = require("./20437.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk285006 = require("./285006.js");

function j(e) {
  var t, n, j, y, _, w, C, k;
  let {
    clip: O,
    channelId: P,
    transitionState: S,
    onClose: N
  } = e, [E, R] = r.useState(true), [T, L] = r.useState(null), [D, F] = r.useState(null), {
    analyticsLocations: A
  } = (0, c.ZP)(u.Z.CLIPS_EDITOR);
  r.useEffect(() => {
    !async function() {
      let e;
      try {
        e = await s.Z.clips.loadClip(O.filepath)
      } catch (e) {
        N(), o.Z.show({
          title: x.intl.string(x.t.yjoSOD),
          body: x.intl.string(x.t.JmYczc)
        });
        return
      }
      let t = await (0, m.w)(e.data.buffer),
        n = URL.createObjectURL(new Blob([t], {
          type: "audio/mp4"
        })),
        a = URL.createObjectURL(new Blob([e.data], {
          type: "video/mp4"
        }));
      F(n), L(a)
    }()
  }, [O.filepath, N]), r.useEffect(() => () => {
    null != T && URL.revokeObjectURL(T)
  }, [T]), r.useEffect(() => () => {
    null != D && URL.revokeObjectURL(D)
  }, [D]);
  let [I, Z] = r.useState(null == (_ = null == (t = O.editMetadata) ? true : t.voiceAudio) || _), [M, B] = r.useState(null == (w = null == (n = O.editMetadata) ? true : n.applicationAudio) || w), [z, H] = r.useState({
    start: null != (C = null == (j = O.editMetadata) ? true : j.start) ? C : 0,
    end: null != (k = null == (y = O.editMetadata) ? true : y.end) ? k : 0
  }), [W, U] = r.useState(O.name), V = r.useRef({
    name: W,
    editMetadata: {
      start: z.start,
      end: z.end,
      voiceAudio: I,
      applicationAudio: M
    }
  });
  V.current = {
    name: W,
    editMetadata: {
      start: z.start,
      end: z.end,
      voiceAudio: I,
      applicationAudio: M
    }
  };
  let Y = (0, f.l)(O);
  r.useEffect(() => {
    async function e() {
      let e = {};
      null != Y && (e = {
        thumbnail: await (0, p.R)(Y, V.current.editMetadata.start)
      }), (0, d.Tm)(O.id, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({}, V.current, e))
    }
    return () => {
      e()
    }
  }, [O.id, Y]);
  let X = r.useRef(null),
    G = r.useMemo(() => ({
      videoPlayerRef: X,
      applicationAudioEnabled: M,
      setApplicationAudioEnabled: B,
      voiceAudioEnabled: I,
      setVoiceAudioEnabled: Z,
      cropData: z,
      setCropData: H
    }), [M, I, z]);
  return (0, a.jsx)(i.Y0X, {
    impression: {
      impressionName: l.ImpressionNames.CLIP_EDITOR_VIEWED
    },
    size: i.CgR.DYNAMIC,
    className: b.modalRoot,
    transitionState: S,
    parentComponent: "ClipsEditModal",
    children: (0, a.jsx)(c.Gt, {
      value: A,
      children: (0, a.jsx)(i.hzk, {
        className: b.modalContent,
        children: (0, a.jsx)(g.Q.Provider, {
          value: G,
          children: null == T || null == D ? (0, a.jsx)("div", {
            className: b.spinnerContainer,
            children: (0, a.jsx)(i.$jN, {})
          }) : (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(v.Z, {
              videoURL: T,
              isLoading: E,
              onDoneLoading: () => R(false),
              audioURL: D,
              transitionState: S
            }), !E && (0, a.jsx)(h.Z, {
              channelId: P,
              onSetClipName: U,
              clipName: W,
              clip: O,
              onClose: N
            })]
          })
        })
      })
    })
  })
}