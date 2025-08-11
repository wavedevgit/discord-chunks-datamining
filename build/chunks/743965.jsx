/** Chunk was on 85831 **/
/** chunk id: 743965, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  d: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk663993 = require("./663993.js"),
  Chunk572004 = require("./572004.js"),
  Chunk73433 = require("./73433.js"),
  Chunk283574 = require("./283574.js");

function h(e) {
  let {
    text: n
  } = e, [t, c] = l.useState(false);
  return <o.P3F onClick={() => {
      (0, s.JG)(n, () => c(true), () => c(false))
    }}>{t ? (0, r.jsx)(o.dz2, {
      size: "xs",
      color: "currentColor"
    }) : (0, r.jsx)(o.TIy, {
      size: "xs",
      color: "currentColor"
    })}</o.P3F>
}

function f(e) {
  let {
    language: n,
    content: l
  } = e, c = () => <code className={i()(d.scrollbarGhostHairline, "hljs")}>{l}</code>;
  return <pre><div className={u.codeContainer}>{s.wS ? <div className={u.codeActions}><h text={l} /></div> : null}{<a.GI createPromise={() => Promise.resolve().then(t.bind(t, 364964))} webpackId={364964} renderFallback={c} render={e => {
          if (!(null != n && e.hasLanguage(n))) return c();
          {
            let t = e.highlight(n, l, true);
            return null == t ? c() : (0, r.jsx)("code", {
              className: i()(d.scrollbarGhostHairline, "hljs", t.language),
              dangerouslySetInnerHTML: {
                __html: t.value
              }
            })
          }
        }} />}</div></pre>
}