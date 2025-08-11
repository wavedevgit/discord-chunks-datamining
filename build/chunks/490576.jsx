/** Chunk was on 53162 **/
/** chunk id: 490576, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk468194 = require("./468194.js"),
  Chunk442837 = require("./442837.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809086 = require("./809086.js"),
  Chunk430824 = require("./430824.js"),
  Chunk240864 = require("./240864.js"),
  Chunk598952 = require("./598952.js"),
  Chunk596211 = require("./596211.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk313881 = require("./313881.js");
let j = (0, Chunk468194.Mg)(Chunk477690.Z.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);

function g(e) {
  let {
    guildProductListing: t,
    guildId: n,
    onClose: r
  } = e, l = (0, i.e7)([u.Z], () => {
    var e;
    return null == (e = u.Z.getGuild(n)) ? true : e.name
  });
  return <c.xBx className={_.header}>{<d.Z className={_.headerImage} listing={t} imageSize={j} alt={""} />}{<c.LZC size={16} horizontal={true} />}{<div className={_.headerTextColumn}>{<c.X6q variant={"text-md/semibold"} color={"header-primary"}>{t.name}</c.X6q>}{<c.LZC size={8} />}{<c.Text variant={"text-sm/normal"} color={"text-muted"} className={_.__invalid_description}>{l}</c.Text>}{<c.Text variant={"text-sm/normal"} color={"text-muted"} className={_.__invalid_description}>{x.intl.format(x.t["6dOuaG"], {
          count: t.attachments_count
        })}</c.Text>}</div>}{<c.olH className={_.closeButton} onClick={r} />}</c.xBx>
}

function p(e) {
  let {
    attachment: t,
    guildId: n,
    productId: r
  } = e;
  return <li className={_.attachmentRow}>{<f.Z attachment={t} />}{<h.Z className={_.attachmentDownloadButton} guildId={n} productId={r} attachmentId={t.id}><c._8t size={"md"} color={"currentColor"} /></h.Z>}</li>
}

function v(e) {
  var t;
  let {
    guildId: n,
    productId: r,
    onClose: o,
    transitionState: s
  } = e, d = (0, i.e7)([m.Z], () => m.Z.getGuildProduct(r));
  l()(null != d, "guildProductListing cannot be null");
  let u = null != (t = d.attachments) ? t : [];
  return <c.Y0X className={_.modal} size={c.CgR.MEDIUM} transitionState={s} aria-label={x.intl.string(x.t["3jaCaW"])} parentComponent={"GuildProductDownloadModal"}>{<g guildId={n} guildProductListing={d} onClose={o} />}{<c.hzk><ul className={_.__invalid_attachmentsList}>{u.map(e => (0, a.jsx)(p, {
          guildId: n,
          productId: d.id,
          attachment: e
        }, e.id))}</ul></c.hzk>}</c.Y0X>
}