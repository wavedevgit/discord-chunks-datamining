/** Chunk was on 45620 **/
/** chunk id: 304742, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk675997 = require("./675997.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.js"),
  Chunk306414 = require("./306414.js");

function p(e) {
  let {
    handleTransition: t,
    onClose: n
  } = e, {
    enableShopTakeOver: a
  } = s.Z.useConfig({
    location: "CollectiblesIndexPageContextMenu"
  }), p = l.useMemo(() => [{
    label: u.intl.string(u.t.dRZYND),
    value: c.AW.AVATAR_DECORATIONS
  }, {
    label: u.intl.string(u.t["1cNjt7"]),
    value: c.AW.PROFILE_EFFECTS
  }, {
    label: u.intl.string(u.t.V68Fq6),
    value: c.AW.NAMEPLATES
  }, {
    label: u.intl.string(u.t.FYFppq),
    value: c.AW.BUNDLES
  }, {
    label: u.intl.string(u.t.xFcotb),
    value: c.AW.CATALOG
  }], []);
  return <div className={i()({
      [d.shopTakeOver]: a
    })}><o.v2r navId={"collectibles-index-page-menu"} className={i()({
        [d.shopTakeOver]: a
      })} onClose={n} aria-label={u.intl.string(u.t.xFcotb)} onSelect={() => {}}>{p.map(e => (0, r.jsx)(o.sNh, {
        id: e.value,
        label: e.label,
        action: () => {
          t(e.value)
        }
      }, e.value))}</o.v2r></div>
}