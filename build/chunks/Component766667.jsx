/** Chunk was on 28979 **/
/** chunk id: 766667, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  p: () => d
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk274372 = require("./274372.js"),
  Chunk399925 = require("./399925.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.E2)(Chunk780964.X.CLIPS_PHRASES, {
  useSearchTerms: () => [A.intl.string(A.t.JIze0o)],
  usePredicate: () => (0, s.bG)([u.A], () => u.A.getSettings().clipSignals).enablePhraseSignals,
  Component: function() {
    let t = (0, s.bG)([u.A], () => u.A.getSettings().autoClipPhrases),
      [e, i] = l.useState(""),
      o = l.useMemo(() => t.map(t => ({
        id: t,
        label: t
      })), [t]),
      T = l.useCallback(t => {
        i(t)
      }, []),
      d = l.useCallback(n => {
        if ("Enter" === n.key || "," === n.key) {
          n.preventDefault();
          let l = e.trim().toLowerCase();
          l.length > 0 && !t.includes(l) && (a.pM([...t, l]), i(""))
        } else if ("Backspace" === n.key && "" === e && t.length > 0) {
          let e = t.slice(0, false);
          a.pM(e)
        }
      }, [e, t]),
      S = l.useCallback(e => {
        let i = Array.from(e)[0],
          n = t.filter(t => t !== i);
        a.pM(n)
      }, [t]);
    return (0, n.jsx)(r.ksK, {
      value: e,
      onChange: T,
      onKeyDown: d,
      placeholder: A.intl.string(A.t.zYUZpt),
      leading: o.length > 0 ? {
        type: "tags",
        items: o,
        onRemove: S
      } : true
    })
  }
})