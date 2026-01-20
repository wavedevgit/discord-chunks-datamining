/** Chunk was on 22979 **/
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
    h = r.useRef([]),
    f = r.useRef(""),
    b = r.useCallback(() => {
      let {
        results: e,
        query: t
      } = c.Z.getProps();
      (h.current !== e || f.current !== t) && (h.current = e, f.current = t, (0, d.OC)())
    }, []);
  r.useEffect(() => {
    if (e) return c.Z.addChangeListener(b), () => c.Z.removeChangeListener(b)
  }, [b, e]);
  let x = r.useCallback(async () => {
    let {
      isUploading: e
    } = p.getState();
    if (!e) try {
      p.setState({
        isRecording: false,
        isUploading: true,
        errorMessage: null,
        isSuccess: false
      }), await (0, o.E)(m.GU0.WEB_APP), p.setState({
        isSuccess: true,
        errorMessage: null
      })
    } catch (t) {
      let e = new l.Hx(t);
      p.setState({
        errorMessage: e.getAnyErrorMessage()
      })
    } finally {
      p.setState({
        isUploading: false
      })
    }
  }, []);
  return (0, a.jsxs)(i.C3N, {
    label: "Debug Logs Session",
    description: "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
    children: [(0, a.jsx)(i.Wn, {
      messageType: i.QYI.INFO,
      children: "When you are done, please remember to upload the logs."
    }), (0, a.jsxs)(i.ButtonGroup, {
      children: [(0, a.jsx)(i.Button, {
        variant: e ? "critical-primary" : "primary",
        onClick: () => p.setState({
          isRecording: !e
        }),
        text: e ? "Stop Recording" : "Start Recording"
      }), (0, a.jsx)(u.a, {
        isUploading: t,
        isSuccess: n,
        errorMessage: s,
        onClick: x,
        title: "Upload Session Logs"
      })]
    })]
  })
}