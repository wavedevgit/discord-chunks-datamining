/** Chunk was on web.js **/
/** chunk id: 223135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk584973 = require("./584973.js"),
  Chunk833858 = require("./833858.js"),
  Chunk981631 = require("./981631.js");
let s = e => {
  var t;
  let {
    className: n,
    hangStatusActivity: s,
    animate: l = true
  } = e;
  if ((null == s ? true : s.state) === a.tNA.CUSTOM) return null != s.emoji ? <i.Z emoji={s.emoji} className={n} hideTooltip={true} animate={l} /> : null;
  let c = null == (t = (0, o.tV)(s)) ? true : t.icon;
  return null != c ? <img src={c} alt={""} className={null != n ? n : true} /> : null
}