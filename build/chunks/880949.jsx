/** Chunk was on web.js **/
/** chunk id: 880949, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk830129 = require("./830129.js");
let d = e => {
  let {
    className: t,
    guild: n,
    isSelected: o = true,
    width: d = 32,
    height: f = 32,
    shouldAnimate: _ = true,
    isLocked: p = false
  } = e, [h, m] = i.useState(false), g = (0, c.EB)(n, 32, _ && o), E = () => m(true), b = () => m(false);
  return <div onFocus={E} onBlur={b} onMouseOver={E} onMouseLeave={b}>{<l.ZP className={a()(u.mask, t)} mask={o || h ? l.QS.SQUIRCLE : l.QS.AVATAR_DEFAULT} width={d} height={f}>{null == g ? (0, r.jsx)("div", {
        className: a()(u.guildIcon, u.guildIconWithoutImage),
        children: (0, r.jsx)("div", {
          className: u.guildAcronym,
          children: (0, c.gM)(n)
        })
      }) : (0, r.jsx)("img", {
        alt: n.name,
        src: g,
        className: u.guildIcon
      })}</l.ZP>}{p ? <div className={u.categoryItemLockIconContainer}><s.mBM size={"custom"} color={"currentColor"} width={10} height={10} className={u.categoryItemLockIcon} /></div> : null}</div>
}