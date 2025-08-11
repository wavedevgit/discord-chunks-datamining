/** Chunk was on 22988 **/
/** chunk id: 717251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk2150 = require("./2150.js"),
  Chunk727001 = require("./727001.js");

function c(e) {
  let {
    title: t,
    description: n,
    action: i,
    highlightColor: c = s.q.NONE,
    selected: d = false,
    subsection: u = null,
    onClick: m,
    className: g,
    disabled: p
  } = e;
  return <div className={l()(o.container, g)}>{<a.P3F className={l()(o.clickableContainer, {
        [o.noAction]: null == m,
        [o.disabled]: p
      }, g)} onClick={p ? true : m}><div className={l()(o.backgroundModifierContainer, o[c], {
          [o.selected]: d,
          [o.disabled]: p,
          [o.noAction]: null == m
        })}>{<div className={o.settingsDescriptionContainer}>{<a.Text variant={"text-sm/medium"} color={"interactive-active"}>{t}</a.Text>}{<a.Text variant={"text-sm/normal"} color={"interactive-normal"} className={o.description}>{n}</a.Text>}</div>}{<div className={o.__invalid_action}>{i}</div>}</div></a.P3F>}{null != u && <div className={o.subsectionContainer}>{u}</div>}</div>
}