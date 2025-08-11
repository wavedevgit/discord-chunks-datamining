/** Chunk was on web.js **/
/** chunk id: 533159, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk794295 = require("./794295.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk71851 = require("./71851.js");

function s(e) {
  let {
    termsOfServiceUrl: t,
    privacyPolicyUrl: n
  } = e;
  return null == t && null == n ? null : <span className={a.text}>{null != t && <i.Z href={t}>{o.intl.string(o.t["8S0kcH"])}</i.Z>}{null != t && null != n && <span aria-disabled={"true"}>{"•"}</span>}{null != n && <i.Z href={n}>{o.intl.string(o.t.ZpyeCg)}</i.Z>}</span>
}