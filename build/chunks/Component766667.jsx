/** Chunk was on 4670 **/
/** chunk id: 766667, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  p: () => c
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
let c = (0, Chunk419954.E2)(Chunk780964.X.CLIPS_PHRASES, {
  useSearchTerms: () => [T.intl.string(T.t.JIze0o)],
  usePredicate: () => (0, s.bG)([a.A], () => a.A.getSettings().clipSignals).enablePhraseSignals,
  Component: function() {
    let e = (0, s.bG)([a.A], () => a.A.getSettings().autoClipPhrases),
      [t, i] = l.useState(""),
      o = l.useMemo(() => e.map(e => ({
        id: e,
        label: e
      })), [e]),
      d = l.useCallback(e => {
        i(e)
      }, []),
      c = l.useCallback(n => {
        if ("Enter" === n.key || "," === n.key) {
          n.preventDefault();
          let l = t.trim().toLowerCase();
          l.length > 0 && !e.includes(l) && (u.pM([...e, l]), i(""))
        } else if ("Backspace" === n.key && "" === t && e.length > 0) {
          let t = e.slice(0, false);
          u.pM(t)
        }
      }, [t, e]),
      A = l.useCallback(t => {
        let i = Array.from(t)[0],
          n = e.filter(e => e !== i);
        u.pM(n)
      }, [e]);
    return (0, n.jsx)(r.ksK, {
      value: t,
      onChange: d,
      onKeyDown: c,
      placeholder: T.intl.string(T.t.zYUZpt),
      leading: o.length > 0 ? {
        type: "tags",
        items: o,
        onRemove: A
      } : true
    })
  }
})