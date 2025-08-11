/** Chunk was on web.js **/
/** chunk id: 302945, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk422034 = require("./422034.js"),
  Chunk182294 = require("./182294.js"),
  Chunk388032 = require("./388032.js"),
  Chunk798984 = require("./798984.js");

function f(e) {
  let {
    affinities: t,
    className: n
  } = e, o = e => null != e.globalName ? e.globalName : e.username, f = i.useMemo(() => t.length > 1 ? u.intl.formatToPlainString(u.t.HaVk0d, {
    username: o(t[0]),
    numFriends: t.length - 1
  }) : "", [t]);
  if (t.length <= 1) return null;
  let _ = t.map((e, n) => <l.O affinity={e} applyMask={n !== t.length - 1} size={c.EF.SIZE_20} />);
  return <div className={a()(d.container, n)}>{<div className={d.iconContainer}>{_}</div>}{<div className={d.textContainer}><s.xv variant={"text-sm/medium"}>{f}</s.xv></div>}</div>
}