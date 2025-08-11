/** Chunk was on 11912 **/
/** chunk id: 576386, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk22267 = require("./22267.jsx"),
  Chunk377171 = require("./377171.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk908998 = require("./908998.js");
let h = e => {
    var t;
    let {
      nameplate: r,
      isPurchased: l = false,
      isSelected: h = false,
      onClick: f
    } = e, v = (0, o.e7)([d.default], () => d.default.getCurrentUser()), [m, _] = (0, a.useState)(false);
    return null == v ? null : <s.P3F aria-label={null != (t = r.label) ? t : p.intl.string(p.t.x5CoXV)} className={b.nameplateItem} onClick={f} onMouseEnter={() => _(true)} onMouseLeave={() => _(false)}>{<c.Z nameplate={r} user={v} showPlaceholderUser={true} isHighlighted={m} />}{<div className={i()(b.nameplateItemOverlay, {
          [b.selected]: h
        })} />}{!l && <s.G2e icon={() => (0, n.jsx)(s.mBM, {
          size: "xxs",
          color: "currentColor"
        })} color={u.Z.BACKGROUND_ACCENT} className={b.iconBadge} />}</s.P3F>
  },
  f = e => {
    let {
      selected: t,
      onSelect: r,
      onOpenShop: a,
      available: l,
      purchased: c
    } = e;
    return null == (0, o.e7)([d.default], () => d.default.getCurrentUser()) ? null : <s.u2D className={b.inventory}>{<div>{<s.vwX>{p.intl.string(p.t["WfGV5+"])}</s.vwX>}{<div className={b.inventoryControls}>{<s.P3F className={i()(b.inventoryControlsButton, {
              [b.selected]: null == t
            })} onClick={() => r(null)}>{<s.t6m size={"md"} color={"currentColor"} />}{<s.Text variant={"text-xs/normal"}>{p.intl.string(p.t.PoWNfX)}</s.Text>}</s.P3F>}{<s.P3F className={b.inventoryControlsButton} onClick={a}>{<s.EOn size={"md"} color={"currentColor"} />}{<s.Text variant={"text-xs/normal"}>{p.intl.string(p.t.pWG4zc)}</s.Text>}</s.P3F>}</div>}{0 !== c.length ? <div className={b.list}>{c.map(e => (0, n.jsx)(h, {
            nameplate: e,
            isPurchased: true,
            isSelected: (null == t ? true : t.id) === e.id,
            onClick: () => r(e, true)
          }, e.id))}</div> : null}</div>}{0 !== l.length ? <div>{<s.vwX>{p.intl.string(p.t["1vbbeX"])}</s.vwX>}{<div className={b.list}>{l.map(e => (0, n.jsx)(h, {
            nameplate: e,
            isSelected: (null == t ? true : t.id) === e.id,
            onClick: () => r(e, false)
          }, e.id))}</div>}</div> : null}</s.u2D>
  }