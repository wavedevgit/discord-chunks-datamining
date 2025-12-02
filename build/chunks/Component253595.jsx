/** Chunk was on 77069 **/
/** chunk id: 253595, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk818710 = require("./818710.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk579806 = require("./579806.js"),
  Chunk972959 = require("./972959.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk710808 = require("./710808.jsx"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");
let g = (0, Chunk972959.H)(() => ({
  isUploading: false,
  isDisabled: false
}));
async function _() {
  await (0, Chunk710808.xI)({
    onUploadStart: () => g.setState({
      isUploading: true
    }),
    onUploadFinish: () => g.setState({
      isUploading: false,
      isDisabled: true
    })
  })
}

function O() {
  let t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getDebugLogging()),
    e = g.useField("isUploading"),
    n = g.useField("isDisabled"),
    s = Chunk473749.useId();
  return (0, Chunk54381.jsxs)("fieldset", {
    children: [(0, Chunk54381.jsx)(Chunk793030.nn4, {
      tag: "legend",
      id: Chunk818710,
      children: Chunk388032.intl.string(Chunk388032.t["FjN+et"])
    }), (0, Chunk54381.jsxs)(Chunk793030.Kqy, {
      direction: "vertical",
      gap: 4,
      children: [(0, Chunk54381.jsx)(Chunk793030.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t["726JHL"]),
        description: Chunk388032.intl.string(Chunk388032.t["/7ak9Q"]),
        checked: module,
        onChange: Chunk710808.rT
      }), (0, Chunk54381.jsx)("div", {
        role: "group",
        "aria-labelledby": Chunk818710,
        children: (0, Chunk54381.jsxs)(Chunk793030.hE2, {
          children: [(0, Chunk54381.jsx)(Chunk793030.zxk, {
            variant: "secondary",
            text: Chunk388032.intl.string(Chunk388032.t.EbwFfR),
            onClick: _,
            loading: exports,
            disabled: require,
            "aria-label": Chunk388032.intl.string(Chunk388032.t.aY1OH2)
          }), (0, Chunk54381.jsx)(Chunk793030.zxk, {
            variant: "secondary",
            text: Chunk388032.intl.string(Chunk388032.t.nuPtYi),
            onClick: Chunk710808.W2,
            "aria-label": Chunk388032.intl.string(Chunk388032.t["L/hFOe"])
          })]
        })
      })]
    })]
  })
}
let N = (0, Chunk509613.ON)(Chunk313789.n.VOICE_AND_VIDEO_DEBUG_LOGGING, {
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t["726JHL"]), Chunk388032.intl.string(Chunk388032.t.EbwFfR), Chunk388032.intl.string(Chunk388032.t.nuPtYi)],
  usePredicate: function() {
    let t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.supports(Chunk65154.AN.DEBUG_LOGGING));
    return Chunk818710.FB && module && null != Chunk579806.Z.fileManager.readLogFiles
  },
  render: () => (0, Chunk54381.jsx)(O, {})
})