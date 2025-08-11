/** Chunk was on 75708 **/
/** chunk id: 406174, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk810918 = require("./810918.js"),
  Chunk772526 = require("./772526.js"),
  Chunk834300 = require("./834300.js");

function m(e) {
  let {
    onClickManageSubscription: t,
    count: n
  } = e;
  return <div>{<l.X6q variant={"heading-md/bold"}>{o.intl.string(o.t["KzCF//"])}</l.X6q>}{<l.LZC size={4} />}{<l.Text variant={"text-md/normal"} className={c.sectionDescription}>{o.intl.string(o.t["3D7qCg"])}</l.Text>}{<l.LZC size={24} />}{<div className={s()(d.guildBoostingSubscriptionRow, c.card)}>{<img src={u} alt={""} className={c.handImage} />}{<div className={c.textContainer}>{<l.X6q variant={"heading-xl/semibold"} className={c.header}>{o.intl.string(o.t["KzCF//"])}</l.X6q>}{<l.Text variant={"text-md/normal"} className={c.description}>{o.intl.format(o.t["m+pcOD"], {
            numSubscriptions: n
          })}</l.Text>}</div>}{<a.zx color={a.zx.Colors.CUSTOM} size={a.zx.Sizes.SMALL} className={c.manageSubscriptionsButton} onClick={t}>{o.intl.string(o.t["3a8Xxs"])}</a.zx>}</div>}</div>
}