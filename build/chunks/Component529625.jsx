/** Chunk was on 45476 **/
/** chunk id: 529625, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk972959 = require("./972959.js"),
  Chunk729345 = require("./729345.js"),
  Chunk823385 = require("./823385.js"),
  Chunk620481 = require("./620481.js"),
  Chunk608934 = require("./608934.jsx"),
  Chunk981631 = require("./981631.js");
let p = (0, Chunk972959.H)(() => ({
  isRecording: false,
  isUploading: false,
  isSuccess: false,
  errorMessage: null
}));

function h() {
  let e = p.useField("isRecording"),
    t = p.useField("isUploading"),
    n = p.useField("isSuccess"),
    s = p.useField("errorMessage"),
    h = Chunk473749.useRef([]),
    x = Chunk473749.useRef(""),
    g = Chunk473749.useCallback(() => {
      let {
        results: e,
        query: t
      } = Chunk823385.Z.getProps();
      (h.current !== module || x.current !== exports) && (h.current = module, x.current = exports, (0, Chunk620481.OC)())
    }, []);
  Chunk473749.useEffect(() => {
    if (module) return Chunk823385.Z.addChangeListener(g), () => Chunk823385.Z.removeChangeListener(g)
  }, [g, module]);
  let f = Chunk473749.useCallback(async () => {
    let {
      isUploading: e
    } = p.getState();
    if (!module) try {
      p.setState({
        isRecording: false,
        isUploading: true,
        errorMessage: null,
        isSuccess: false
      }), await (0, Chunk729345.E)(Chunk981631.GU0.WEB_APP), p.setState({
        isSuccess: true,
        errorMessage: null
      })
    } catch (t) {
      let e = new Chunk881052.Hx(exports);
      p.setState({
        errorMessage: module.getAnyErrorMessage()
      })
    } finally {
      p.setState({
        isUploading: false
      })
    }
  }, []);
  return (0, Chunk54381.jsxs)(Chunk481060.C3N, {
    label: "Debug Logs Session",
    description: "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
    children: [(0, Chunk54381.jsx)(Chunk481060.Wn, {
      messageType: Chunk481060.QYI.INFO,
      children: "When you are done, please remember to upload the logs."
    }), (0, Chunk54381.jsxs)(Chunk481060.ButtonGroup, {
      children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: module ? "critical-primary" : "primary",
        onClick: () => p.setState({
          isRecording: !module
        }),
        text: module ? "Stop Recording" : "Start Recording"
      }), (0, Chunk54381.jsx)(Chunk608934.a, {
        isUploading: exports,
        isSuccess: require,
        errorMessage: Chunk972959,
        onClick: f,
        title: "Upload Session Logs"
      })]
    })]
  })
}