/** Chunk was on 28979 **/
/** chunk id: 929548, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  L: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk574381 = require("./574381.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk77729 = require("./77729.js"),
  Chunk839214 = require("./839214.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk991793 = require("./991793.jsx"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");
let g = (0, Chunk839214.D)(() => ({
  isUploading: false,
  isDisabled: false
}));
async function c() {
  await (0, S.q5)({
    onUploadStart: () => g.setState({
      isUploading: true
    }),
    onUploadFinish: () => g.setState({
      isUploading: false,
      isDisabled: true
    })
  })
}
let I = (0, Chunk419954.E2)(Chunk780964.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
  useSearchTerms: () => [_.intl.string(_.t["726JHL"]), _.intl.string(_.t.EbwFfR), _.intl.string(_.t.nuPtYi)],
  usePredicate: function() {
    let t = (0, u.bG)([A.A], () => A.A.supports(E.O5.DEBUG_LOGGING));
    return s.Av && t && null != a.A.fileManager.readLogFiles
  },
  Component: function() {
    let t = (0, u.bG)([A.A], () => A.A.getDebugLogging()),
      e = g.useField("isUploading"),
      i = g.useField("isDisabled"),
      s = l.useId();
    return (0, n.jsxs)("fieldset", {
      children: [(0, n.jsx)(r.AC4, {
        tag: "legend",
        id: s,
        children: _.intl.string(_.t["FjN+et"])
      }), (0, n.jsxs)(r.BJc, {
        direction: "vertical",
        gap: 4,
        children: [(0, n.jsx)(r.dOG, {
          label: _.intl.string(_.t["726JHL"]),
          description: _.intl.string(_.t["/7ak9Q"]),
          checked: t,
          onChange: S.p9
        }), (0, n.jsx)("div", {
          role: "group",
          "aria-labelledby": s,
          children: (0, n.jsxs)(r.e2v, {
            children: [(0, n.jsx)(r.$nd, {
              variant: "secondary",
              text: _.intl.string(_.t.EbwFfR),
              onClick: c,
              loading: e,
              disabled: i,
              "aria-label": _.intl.string(_.t.aY1OH2)
            }), (0, n.jsx)(r.$nd, {
              variant: "secondary",
              text: _.intl.string(_.t.nuPtYi),
              onClick: S.G0,
              "aria-label": _.intl.string(_.t["L/hFOe"])
            })]
          })
        })]
      })]
    })
  }
})