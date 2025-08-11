/** Chunk was on 75708 **/
/** chunk id: 723547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => o
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk443257 = require("./443257.js");

function o(e) {
  let {
    markAsDismissed: t,
    onCTA: n
  } = e;
  return <div className={l.popup}><div className={l.content}>{<r.P3F className={l.closeIcon} onClick={() => t(s.L.USER_DISMISS)}><r.Dio size={"xs"} /></r.P3F>}{<r.Text className={l.description} variant={"text-md/normal"}>{a.intl.string(a.t["Ny/0ur"])}</r.Text>}{<r.zxk variant={"primary"} size={"sm"} text={a.intl.string(a.t.TYo739)} fullWidth={true} onClick={() => {
          t(s.L.TAKE_ACTION), n()
        }} />}</div></div>
}