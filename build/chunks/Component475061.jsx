/** Chunk was on 4670 **/
/** chunk id: 475061, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  p: () => C
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

function O(e) {
  let {
    inputAndOutputAreBluetooth: t,
    canPromptSystemServiceInstallForVoice: i
  } = e;
  return (0, n.jsxs)(s.BJc, {
    children: [i && (0, n.jsx)(o.A, {
      sourcePage: "voice"
    }), t && (0, n.jsx)(c.A, {
      look: c.k.WARNING,
      children: g.intl.string(g.t.Ioz3gx)
    })]
  })
}
let C = (0, Chunk419954.zZ)(Chunk780964.X.VOICE_CATEGORY, {
  useTitle: () => g.intl.string(g.t.K3lovD),
  useInlineNotice: function() {
    let e = (0, o.I)("voice"),
      t = (0, r.x5)(E.oh.AUDIO_INPUT),
      i = (0, r.x5)(E.oh.AUDIO_OUTPUT),
      s = l.useMemo(() => {
        let e = I.some(e => {
            var i;
            return null == t || null == (i = t.hardwareId) ? true : i.startsWith(e)
          }),
          n = I.some(e => {
            var t;
            return null == i || null == (t = i.hardwareId) ? true : t.startsWith(e)
          });
        return e && n && (null == t ? true : t.containerId) != null && t.containerId === (null == i ? true : i.containerId)
      }, [t, i]);
    return l.useMemo(() => e.canPrompt || s ? {
      type: u.W.STRONGLY_DISCOURAGED_CUSTOM,
      notice: () => (0, n.jsx)(O, {
        inputAndOutputAreBluetooth: s,
        canPromptSystemServiceInstallForVoice: e.canPrompt
      })
    } : null, [e.canPrompt, s])
  },
  buildLayout: () => [A.a, S.d, _.L]
})