/** Chunk was on 46746 **/
/** chunk id: 148381, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk958707 = require("./958707.js"),
  Chunk347226 = require("./347226.js"),
  Chunk502154 = require("./502154.js");

function f(e) {
  let {
    title: t,
    scrollerClassName: n,
    scrollerInnerClassName: l,
    children: f
  } = e, m = i.useRef(null), [h, p] = i.useState(false), [x, g] = i.useState(false), _ = i.useCallback(() => {
    let {
      current: e
    } = m;
    null != e && (p(!e.isScrolledToTop()), g(!e.isScrolledToBottom()))
  }, []);
  return (0, a.Ng)(() => _()), <r.Fragment>{<div className={s()(u.title, u.scrollWrapper)}>{<o.vwX className={d.formItemTitle}>{t}</o.vwX>}{<c.Z separator={h} />}</div>}{<div className={n}><o.Den ref={m} className={s()(u.scrollerInner, l, {
          [u.bottomSeparator]: x
        })} onScroll={_}>{f}</o.Den></div>}</r.Fragment>
}