/** Chunk was on 75708 **/
/** chunk id: 820759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $0: () => d,
  BZ: () => u,
  E_: () => c,
  pg: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk517791 = require("./517791.js");
let o = () => <hr className={Chunk517791.sectionDivider} />,
  c = e => {
    let {
      label: t,
      children: n,
      direction: r = "horizontal",
      className: c
    } = e;
    return <i.Fragment>{<o />}{<a.Text variant={"text-md/semibold"} className={l.labelSpacing}>{t}</a.Text>}{<div className={s()(l.container, c, {
          [l.verticalContainer]: "vertical" === r
        })}>{n}</div>}</i.Fragment>
  },
  d = e => {
    let {
      children: t
    } = e;
    return <div className={l.section}>{t}</div>
  },
  u = e => <div className={l.inputGroup}>{e.children}</div>,
  m = e => <fieldset className={l.fieldset}>{e.children}</fieldset>