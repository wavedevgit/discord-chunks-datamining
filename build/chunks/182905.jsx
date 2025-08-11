/** Chunk was on 86915 **/
/** chunk id: 182905, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk427256 = require("./427256.js");
let u = e => {
  let {
    className: t,
    icon: n,
    noticeText: l,
    buttonText: u,
    onClick: h,
    canSync: g
  } = e;
  return <o.Zbd className={r()(t, d.card)}><c.Z justify={c.Z.Justify.BETWEEN} align={c.Z.Align.CENTER}>{<n width={20} height={20} size={"custom"} color={s.Z.unsafe_rawColors.YELLOW_300.css} />}{<div className={d.label}><o.Text variant={"text-md/normal"}>{l}</o.Text></div>}{g && <a.zx size={a.zx.Sizes.SMALL} color={a.zx.Colors.PRIMARY} onClick={h}>{u}</a.zx>}</c.Z></o.Zbd>
}