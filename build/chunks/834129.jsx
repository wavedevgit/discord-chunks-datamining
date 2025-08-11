/** Chunk was on web.js **/
/** chunk id: 834129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk318713 = require("./318713.jsx"),
  Chunk614507 = require("./614507.js");

function c(e) {
  let {
    icon: t,
    iconNode: n,
    timestamp: i,
    timestampFormat: a,
    className: c,
    children: u,
    contentClassName: d,
    iconClassName: f,
    iconContainerClassName: _,
    timestampClassName: p,
    compact: h = false
  } = e;
  return <div className={o()(c, {
      [l.container]: true,
      [l.compact]: h,
      [l.cozy]: !h
    })}>{null != n && <div className={o()(l.iconContainer, _)}>{n}</div>}{null != t && <div className={l.iconContainer}><div data-accessibility={"desaturate"} className={o()(l.icon, l.iconSize, f)} style={{
          backgroundImage: "url('".concat(t, "')")
        }} /></div>}{<div className={o()(d, l.content)}>{u}{null != i && <s.Z timestamp={i} timestampFormat={a} className={p} />}</div>}</div>
}
c.Action = e => {
  let {
    onClick: t,
    children: n
  } = e;
  return <span className={l.action}>{"—"}{<a.eee onClick={t} className={l.actionAnchor}>{n}</a.eee>}</span>
};
let u = c