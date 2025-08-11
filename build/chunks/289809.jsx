/** Chunk was on 54844 **/
/** chunk id: 289809, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk454585 = require("./454585.js"),
  Chunk126694 = require("./126694.js");

function o(e) {
  let {
    element: {
      data: {
        header: t,
        body: n,
        is_localized: o
      }
    }
  } = e, c = l.useRef(a.Z.reactParserFor(a.Z.defaultRules));
  return o && (null != t || null != n) ? <div className={s.container}>{null != t && <i.X6q variant={"heading-sm/semibold"} color={"header-secondary"} className={s.header}>{t}</i.X6q>}{null != n && <i.Text variant={"text-sm/normal"} className={s.bodyText}>{c.current(n)}</i.Text>}</div> : null
}