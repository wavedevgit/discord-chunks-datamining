/** Chunk was on 75708 **/
/** chunk id: 64220, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.js"),
  Chunk548672 = require("./548672.js");

function c(e) {
  let {
    markAsDismissed: t
  } = e;
  return r.useEffect(() => {
    let e = setTimeout(() => {
      t(a.L.AUTO_DISMISS)
    }, 8e3);
    return () => {
      clearTimeout(e)
    }
  }, [t]), <s.P3F className={o.container} onClick={() => {
      t(a.L.USER_DISMISS)
    }}>{<s.Text variant={"text-sm/medium"} color={"always-white"}>{l.intl.string(l.t.fJNqJi)}</s.Text>}{<div className={o.pointer} />}</s.P3F>
}

function d(e) {
  let {
    children: t,
    markAsDismissed: n,
    targetElementRef: a
  } = e, [l, o] = r.useState(false);
  return r.useEffect(() => {
    let e = setTimeout(() => {
      o(true)
    }, 1e3);
    return () => {
      clearTimeout(e)
    }
  }, [o]), <s.yRy targetElementRef={a} position={"top"} align={"left"} shouldShow={l} renderPopout={() => (0, i.jsx)(c, {
      markAsDismissed: n
    })}>{t}</s.yRy>
}