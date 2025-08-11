/** Chunk was on 13616 **/
/** chunk id: 289465, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk272997 = require("./272997.js");

function s(e) {
  let {
    bar: t,
    children: n,
    className: r,
    inModal: s,
    title: c
  } = e;
  return <o.Zbd editable={true} className={l()(a.card, r, {
      [a.inModal]: s
    })}>{<div className={l()(a.cardHeader, {
        [a.inModal]: s
      })}>{<o.Text variant={"text-sm/semibold"}>{c}</o.Text>}{<div>{t}</div>}</div>}{s ? <o.$i$ /> : null}{n}</o.Zbd>
}