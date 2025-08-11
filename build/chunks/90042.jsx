/** Chunk was on 75708 **/
/** chunk id: 90042, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.js"),
  Chunk832051 = require("./832051.js");

function o(e) {
  let {
    markAsDismissed: t
  } = e;
  return <r.P3F className={l.container} onClick={() => {
      t(s.L.USER_DISMISS)
    }}>{<r.X6q color={"always-white"} variant={"heading-sm/semibold"}>{a.intl.string(a.t.ALB9np)}</r.X6q>}{<r.Text color={"always-white"} variant={"text-xs/normal"}>{a.intl.string(a.t.rYAs7O)}</r.Text>}{<div className={l.pointer} />}</r.P3F>
}

function c(e) {
  let {
    children: t,
    markAsDismissed: n,
    targetElementRef: a
  } = e;
  return <r.yRy targetElementRef={a} onRequestClose={() => n(s.L.INDIRECT_ACTION)} position={"top"} align={"left"} shouldShow={true} animation={r.yRy.Animation.TRANSLATE} renderPopout={() => (0, i.jsx)(o, {
      markAsDismissed: n
    })}>{t}</r.yRy>
}