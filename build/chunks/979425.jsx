/** Chunk was on web.js **/
/** chunk id: 979425, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk871118 = require("./871118.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk519417 = require("./519417.js");

function u(e) {
  let {
    stream: t,
    isSmall: n,
    selected: i,
    isSelfStream: u
  } = e;
  return <r.Fragment>{<s.Z className={o()(c.absoluteFill, c.streamPreviewOpacity)} stream={t} noText={true} />}{!i && <div className={o()(c.content, c.streamUnavailable, {
        [c.small]: n
      })}>{<a.Text className={c.streamUnavailableText} color={"always-white"} variant={n ? "text-sm/semibold" : "text-md/semibold"}>{u ? l.intl.string(l.t.UeEwj4) : l.intl.string(l.t["1i3tSU"])}</a.Text>}{<a.DY3 text={u ? l.intl.string(l.t["ro/HNz"]) : l.intl.string(l.t.UPf6ZG)} className={c.darkCircle}><div><a.o8v size={"md"} color={"currentColor"} className={c.stopStreamIcon} colorClass={c.stopStreamForeground} /></div></a.DY3>}</div>}</r.Fragment>
}