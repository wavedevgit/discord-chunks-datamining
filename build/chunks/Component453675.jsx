/** Chunk was on 22477 **/
/** chunk id: 453675, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk198982 = require("./198982.js"),
  Chunk839214 = require("./839214.js"),
  Chunk98919 = require("./98919.js"),
  Chunk174768 = require("./174768.js"),
  Chunk137365 = require("./137365.js"),
  Chunk278274 = require("./278274.jsx"),
  Chunk652215 = require("./652215.js");
let p = (0, Chunk839214.D)(() => ({
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
    h = l.useRef([]),
    x = l.useRef(""),
    g = l.useCallback(() => {
      let {
        results: e,
        query: t
      } = c.A.getProps();
      (h.current !== e || x.current !== t) && (h.current = e, x.current = t, (0, d._S)())
    }, []);
  l.useEffect(() => {
    if (e) return c.A.addChangeListener(g), () => c.A.removeChangeListener(g)
  }, [g, e]);
  let f = l.useCallback(async () => {
    let {
      isUploading: e
    } = p.getState();
    if (!e) try {
      p.setState({
        isRecording: false,
        isUploading: true,
        errorMessage: null,
        isSuccess: false
      }), await (0, o.a)(m.Umv.WEB_APP), p.setState({
        isSuccess: true,
        errorMessage: null
      })
    } catch (t) {
      let e = new i.LG(t);
      p.setState({
        errorMessage: e.getAnyErrorMessage()
      })
    } finally {
      p.setState({
        isUploading: false
      })
    }
  }, []);
  return (0, a.jsxs)(r.nVY, {
    label: "Debug Logs Session",
    description: "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
    children: [(0, a.jsx)(r.po8, {
      messageType: r.YCn.INFO,
      children: "When you are done, please remember to upload the logs."
    }), (0, a.jsxs)(r.ButtonGroup, {
      children: [(0, a.jsx)(r.Button, {
        variant: e ? "critical-primary" : "primary",
        onClick: () => p.setState({
          isRecording: !e
        }),
        text: e ? "Stop Recording" : "Start Recording"
      }), (0, a.jsx)(u.q, {
        isUploading: t,
        isSuccess: n,
        errorMessage: s,
        onClick: f,
        title: "Upload Session Logs"
      })]
    })]
  })
}