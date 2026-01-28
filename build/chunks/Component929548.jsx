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
let _ = (0, Chunk839214.D)(() => ({
  isUploading: false,
  isDisabled: false
}));
async function c() {
  await (0, S.q5)({
    onUploadStart: () => _.setState({
      isUploading: true
    }),
    onUploadFinish: () => _.setState({
      isUploading: false,
      isDisabled: true
    })
  })
}
let I = (0, Chunk419954.E2)(Chunk780964.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
  useSearchTerms: () => [g.intl.string(g.t["726JHL"]), g.intl.string(g.t.EbwFfR), g.intl.string(g.t.nuPtYi)],
  usePredicate: function() {
    let t = (0, u.bG)([d.A], () => d.A.supports(E.O5.DEBUG_LOGGING));
    return s.Av && t && null != a.A.fileManager.readLogFiles
  },
  Component: function() {
    let t = (0, u.bG)([d.A], () => d.A.getDebugLogging()),
      e = _.useField("isUploading"),
      i = _.useField("isDisabled"),
      s = l.useId();
    return (0, n.jsxs)("fieldset", {
      children: [(0, n.jsx)(r.AC4, {
        tag: "legend",
        id: s,
        children: g.intl.string(g.t["FjN+et"])
      }), (0, n.jsxs)(r.BJc, {
        direction: "vertical",
        gap: 4,
        children: [(0, n.jsx)(r.dOG, {
          label: g.intl.string(g.t["726JHL"]),
          description: g.intl.string(g.t["/7ak9Q"]),
          checked: t,
          onChange: S.p9
        }), (0, n.jsx)("div", {
          role: "group",
          "aria-labelledby": s,
          children: (0, n.jsxs)(r.e2v, {
            children: [(0, n.jsx)(r.$nd, {
              variant: "secondary",
              text: g.intl.string(g.t.EbwFfR),
              onClick: c,
              loading: e,
              disabled: i,
              "aria-label": g.intl.string(g.t.aY1OH2)
            }), (0, n.jsx)(r.$nd, {
              variant: "secondary",
              text: g.intl.string(g.t.nuPtYi),
              onClick: S.G0,
              "aria-label": g.intl.string(g.t["L/hFOe"])
            })]
          })
        })]
      })]
    })
  }
})