/** Chunk was on web.js **/
/** chunk id: 194811, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk652853 = require("./652853.js"),
  Chunk228168 = require("./228168.js"),
  Chunk227832 = require("./227832.js");

function d(e) {
  let {
    text: t,
    textId: n,
    tags: i,
    platformIcon: d,
    contextMenu: f
  } = e, {
    themeType: _
  } = (0, l.z)();
  return (null == t || "" === t) && null == f ? null : null == t || "" === t ? <div className={o()(u.headerContextMenu, u.absolute)}>{f}</div> : <div className={u.header}>{<a.Text className={u.headerText} variant={_ === c.lY.SIDEBAR ? "text-xs/semibold" : "text-xs/medium"} color={"header-primary"} id={n}>{<s.Z>{t}</s.Z>}{null != d && <div className={u.platformIcon} style={{
          maskImage: "url(".concat(d.whiteSVG, ")"),
          WebkitMaskImage: "url(".concat(d.whiteSVG, ")")
        }} />}{i}</a.Text>}{null != f && <div className={u.headerContextMenu}>{f}</div>}</div>
}