/** Chunk was on 30485 **/
/** chunk id: 475061, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  p: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk74848 = require("./74848.js"),
  Chunk419954 = require("./419954.js"),
  Chunk933297 = require("./933297.js"),
  Chunk843401 = require("./843401.jsx"),
  Chunk723702 = require("./723702.js"),
  Chunk780964 = require("./780964.js"),
  Chunk801264 = require("./801264.jsx"),
  Chunk902713 = require("./902713.js"),
  Chunk428961 = require("./428961.js"),
  Chunk639500 = require("./639500.jsx"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");
let I = Chunk723702.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];

function O(t) {
  let {
    inputAndOutputAreBluetooth: e,
    canPromptSystemServiceInstallForVoice: i
  } = t;
  return (0, n.jsxs)(s.BJc, {
    children: [i && (0, n.jsx)(o.A, {
      sourcePage: "voice"
    }), e && (0, n.jsx)(A.A, {
      look: A.k.WARNING,
      children: _.intl.string(_.t.Ioz3gx)
    })]
  })
}
let N = (0, Chunk419954.zZ)(Chunk780964.X.VOICE_CATEGORY, {
  useTitle: () => _.intl.string(_.t.K3lovD),
  useInlineNotice: function() {
    let t = (0, o.I)("voice"),
      e = (0, r.x5)(g.oh.AUDIO_INPUT),
      i = (0, r.x5)(g.oh.AUDIO_OUTPUT),
      s = l.useMemo(() => {
        let t = I.some(t => {
            var i;
            return null == e || null == (i = e.hardwareId) ? true : i.startsWith(t)
          }),
          n = I.some(t => {
            var e;
            return null == i || null == (e = i.hardwareId) ? true : e.startsWith(t)
          });
        return t && n && (null == e ? true : e.containerId) != null && e.containerId === (null == i ? true : i.containerId)
      }, [e, i]);
    return l.useMemo(() => t.canPrompt || s ? {
      type: a.W.STRONGLY_DISCOURAGED_CUSTOM,
      notice: () => (0, n.jsx)(O, {
        inputAndOutputAreBluetooth: s,
        canPromptSystemServiceInstallForVoice: t.canPrompt
      })
    } : null, [t.canPrompt, s])
  },
  buildLayout: () => [S.a, c.d, E.L]
})