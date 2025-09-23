/** Chunk was on 97571 **/
/** chunk id: 529625, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk972959 = require("./972959.js"),
  Chunk729345 = require("./729345.js"),
  Chunk823385 = require("./823385.js"),
  Chunk620481 = require("./620481.js"),
  Chunk608934 = require("./608934.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk575043 = require("./575043.js");
let h = (0, Chunk972959.H)(() => ({
  isRecording: false,
  isUploading: false,
  isSuccess: false,
  errorMessage: null
}));

function x() {
  let e = h.useField("isRecording"),
    t = h.useField("isUploading"),
    n = h.useField("isSuccess"),
    s = h.useField("errorMessage"),
    x = Chunk647438.useRef([]),
    f = Chunk647438.useRef(""),
    b = Chunk647438.useCallback(() => {
      let {
        results: e,
        query: t
      } = Chunk823385.Z.getProps();
      (x.current !== module || f.current !== exports) && (x.current = module, f.current = exports, (0, Chunk620481.OC)())
    }, []);
  Chunk647438.useEffect(() => {
    if (module) return Chunk823385.Z.addChangeListener(b), () => Chunk823385.Z.removeChangeListener(b)
  }, [b, module]);
  let g = Chunk647438.useCallback(async () => {
    let {
      isUploading: e
    } = h.getState();
    if (!module) try {
      h.setState({
        isRecording: false,
        isUploading: true,
        errorMessage: null,
        isSuccess: false
      }), await (0, Chunk729345.E)(Chunk981631.GU0.WEB_APP), h.setState({
        isSuccess: true,
        errorMessage: null
      })
    } catch (t) {
      let e = new Chunk881052.Hx(exports);
      h.setState({
        errorMessage: module.getAnyErrorMessage()
      })
    } finally {
      h.setState({
        isUploading: false
      })
    }
  }, []);
  return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    title: "Debug Logs Session",
    tag: Chunk481060.RB0.H3,
    className: Chunk575043.panelGroup,
    children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.geA.DESCRIPTION,
      className: Chunk575043.subtitle,
      children: "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores."
    }), (0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.geA.DESCRIPTION,
      className: Chunk575043.subtitle,
      children: "When you are done, please remember to upload the logs."
    }), (0, Chunk951288.jsxs)(Chunk481060.hE2, {
      children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: module ? "critical-primary" : "primary",
        onClick: () => h.setState({
          isRecording: !module
        }),
        text: module ? "Stop Recording" : "Start Recording"
      }), (0, Chunk951288.jsx)(Chunk608934.a, {
        isUploading: exports,
        isSuccess: require,
        errorMessage: Chunk972959,
        onClick: g,
        title: "Upload Session Logs"
      })]
    })]
  })
}