/** Chunk was on 77069 **/
/** chunk id: 253595, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  f: () => N
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
async function I() {
  await (0, E.xI)({
    onUploadStart: () => g.setState({
      isUploading: true
    }),
    onUploadFinish: () => g.setState({
      isUploading: false,
      isDisabled: true
    })
  })
}
let N = (0, Chunk509613.ON)(Chunk313789.n.VOICE_AND_VIDEO_DEBUG_LOGGING, {
  useSearchTerms: () => [_.intl.string(_.t["726JHL"]), _.intl.string(_.t.EbwFfR), _.intl.string(_.t.nuPtYi)],
  usePredicate: function() {
    let t = (0, r.e7)([S.Z], () => S.Z.supports(d.AN.DEBUG_LOGGING));
    return s.FB && t && null != a.Z.fileManager.readLogFiles
  },
  Component: function() {
    let t = (0, r.e7)([S.Z], () => S.Z.getDebugLogging()),
      e = g.useField("isUploading"),
      n = g.useField("isDisabled"),
      s = l.useId();
    return (0, i.jsxs)("fieldset", {
      children: [(0, i.jsx)(u.nn4, {
        tag: "legend",
        id: s,
        children: _.intl.string(_.t["FjN+et"])
      }), (0, i.jsxs)(u.Kqy, {
        direction: "vertical",
        gap: 4,
        children: [(0, i.jsx)(u.rsf, {
          label: _.intl.string(_.t["726JHL"]),
          description: _.intl.string(_.t["/7ak9Q"]),
          checked: t,
          onChange: E.rT
        }), (0, i.jsx)("div", {
          role: "group",
          "aria-labelledby": s,
          children: (0, i.jsxs)(u.hE2, {
            children: [(0, i.jsx)(u.zxk, {
              variant: "secondary",
              text: _.intl.string(_.t.EbwFfR),
              onClick: I,
              loading: e,
              disabled: n,
              "aria-label": _.intl.string(_.t.aY1OH2)
            }), (0, i.jsx)(u.zxk, {
              variant: "secondary",
              text: _.intl.string(_.t.nuPtYi),
              onClick: E.W2,
              "aria-label": _.intl.string(_.t["L/hFOe"])
            })]
          })
        })]
      })]
    })
  }
})