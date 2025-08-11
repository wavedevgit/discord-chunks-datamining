/** Chunk was on web.js **/
/** chunk id: 5101, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => u,
  default: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk433517 = require("./433517.js"),
  Chunk82659 = require("./82659.js"),
  Chunk481060 = require("./481060.js"),
  Chunk130883 = require("./130883.js"),
  Chunk388032 = require("./388032.js");
let u = "report_to_mod_dont_show_resolve_confirm";

function d(e) {
  let {
    transitionState: t,
    onClose: n,
    handleResolveFlag: d
  } = e, [f, _] = i.useState(false), p = () => {
    f && o.K.set(u, true), n(), d()
  };
  return <a.Modal transitionState={t} onClose={n} title={c.intl.string(l.default["8R4eur"])} subtitle={c.intl.string(l.default.xgOraW)} actions={[{
      text: c.intl.string(l.default.ctefOz),
      onClick: p
    }]} actionBarInput={(0, r.jsx)(s.XZJ, {
      value: f,
      onChange: (e, t) => _(t),
      children: c.intl.string(l.default["3puq5e"])
    })} />
}