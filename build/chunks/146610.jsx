/** Chunk was on 22988 **/
/** chunk id: 146610, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk167533 = require("./167533.js"),
  Chunk73346 = require("./73346.js"),
  Chunk169903 = require("./169903.js"),
  Chunk67152 = require("./67152.jsx"),
  Chunk388032 = require("./388032.js"),
  Chunk414510 = require("./414510.js"),
  Chunk769570 = require("./769570.js");
let g = [{
    key: "tier_name",
    cellClassName: Chunk414510.tierNameColumn,
    renderHeader: () => Chunk388032.intl.string(Chunk388032.t["2Uiha2"]),
    render(e) {
      let t, {
        subscriptionListing: n
      } = e;
      if (null != n) {
        let e = (null == n ? true : n.image_asset) == null ? true : (0, s._W)(n.application_id, n.image_asset, 128);
        t = <r.Fragment>{<img src={e} alt={""} className={u.tierImage} />}{n.name}</r.Fragment>
      }
      return <c.bL className={u.tierNameCell}>{t}</c.bL>
    }
  }, {
    key: "subscribers",
    cellClassName: l()(Chunk414510.subscribersColumn, Chunk769570.cellAlignRight),
    renderHeader: () => Chunk388032.intl.string(Chunk388032.t.zu8go6),
    render: e => <c.av>{e.roleMemberCount}</c.av>
  }, {
    key: "price",
    cellClassName: l()(Chunk414510.priceColumn, Chunk769570.cellAlignRight),
    renderHeader: () => Chunk388032.intl.string(Chunk388032.t.NcrbWF),
    render(e) {
      let {
        subscriptionListing: t
      } = e, n = null == t ? true : t.subscription_plans[0], i = null == n ? true : n.price;
      return <c.kA>{i}</c.kA>
    }
  }],
  p = e => {
    let {
      totalPayoutsForPeriod: t,
      guildId: n,
      className: i
    } = e, s = (0, o.Z)(n, t);
    return <div className={l()(m.tableContainer, i)}><a.Z columns={g} data={s} className={l()(m.table, u.table)} rowClassName={u.row} headerClassName={l()(m.header, u.header)} /></div>
  }