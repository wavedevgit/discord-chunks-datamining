/** Chunk was on web.js **/
/** chunk id: 41558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.js"),
  Chunk780775 = require("./780775.js"),
  l = function(e) {
    return e[e.VIEW_MORE = 0] = "VIEW_MORE", e[e.VIEW_LESS = 1] = "VIEW_LESS", e
  }(l || {});

function c(e) {
  let {
    title: t,
    buttonType: n,
    onClickViewButton: i
  } = e;
  return <div className={s.header}>{<o.Text variant={"text-md/medium"} color={"header-primary"}>{t}</o.Text>}{null != n && null != i && <o.P3F className={s.viewMore} onClick={i} aria-label={a.intl.formatToPlainString(a.t["bj/2kZ"], {
        title: t
      })}><o.Text variant={"text-md/medium"} color={"text-brand"}>{0 === n ? a.intl.format(a.t.gVw57u, {}) : a.intl.string(a.t.nPGLFR)}</o.Text></o.P3F>}</div>
}
c.buttonTypes = l, c.Loading = function() {
  let e = Chunk73800.useMemo(() => ({
    width: "".concat(10 + 20 * Math.random(), "%")
  }), []);
  return <div className={Chunk780775.loadingHeader} style={module}><Chunk481060.Text className={Chunk780775.hidden} variant={"text-md/medium"} color={"header-primary"}>{"_"}</Chunk481060.Text></div>
}