/** Chunk was on 78431 **/
/** chunk id: 650788, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => U
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk377171 = require("./377171.js"),
  Chunk674180 = require("./674180.js"),
  Chunk38618 = require("./38618.js"),
  Chunk312217 = require("./312217.jsx"),
  Chunk623299 = require("./623299.jsx"),
  Chunk984370 = require("./984370.js"),
  Chunk430824 = require("./430824.js"),
  Chunk76535 = require("./76535.js"),
  Chunk423000 = require("./423000.js"),
  Chunk891561 = require("./891561.js"),
  Chunk847033 = require("./847033.js"),
  Chunk544978 = require("./544978.js"),
  Chunk154522 = require("./154522.jsx"),
  Chunk935554 = require("./935554.js"),
  Chunk340529 = require("./340529.jsx"),
  Chunk175390 = require("./175390.jsx"),
  Chunk957572 = require("./957572.js"),
  Chunk866104 = require("./866104.js"),
  Chunk886176 = require("./886176.js"),
  Chunk333866 = require("./333866.js"),
  Chunk176505 = require("./176505.js"),
  Chunk20281 = require("./20281.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk663457 = require("./663457.js"),
  Chunk100658 = require("./100658.js");

function E(e) {
  var t;
  let {
    guildId: r,
    productId: i
  } = e, {
    loaded: o,
    subscriptionsSettings: l
  } = (0, h.H)(r), s = (0, c.e7)([g.Z], () => g.Z.getGuild(r)), {
    selectedTab: d,
    isPhantomPreview: u,
    categoryTabs: C
  } = (0, O.m)(), p = !o || null == l;
  return null == s || !u && p ? <a.$jN /> : <x.Z defaultSortOption={null != (t = null == l ? true : l.store_page_guild_products_default_sort) ? t : Z.zJ.NAME}><div className={k.contentContainer}>{<L.C guild={s} subscriptionsSettings={l} />}{<a.LZC size={32} />}{C.length > 0 && <w.z guild={s} />}{<div className={k.tabContainer}>{<a.LZC size={32} />}{u && <P.Z guildId={r} />}{d === v.y.GUILD_PRODUCTS && <y.Q guildId={r} productId={i} />}{d === v.y.GUILD_ROLE_SUBSCRIPTIONS && <_.Z guildId={r} />}</div>}</div></x.Z>
}

function M(e) {
  let {
    guildId: t,
    productId: r
  } = e, o = (0, c.e7)([p.Z], () => p.Z.isConnected()), h = (0, c.e7)([g.Z], () => g.Z.getGuild(t)), {
    shouldHideGuildPurchaseEntryPoints: x,
    restrictionsLoading: v
  } = (0, C.uP)(t), {
    selectedTab: y,
    isPhantomPreview: _,
    categoryTabs: w
  } = (0, O.m)(), P = o && (null == h || 0 === w.length && !_ || x && !v);
  return i.useEffect(() => {
    P && (0, m.M)(t, N.oC.GUILD_SHOP)
  }, [t, P]), (0, d.Z)({
    type: D.n.PAGE,
    name: s.ImpressionNames.GUILD_SHOP_PAGE,
    properties: {
      product_id: r,
      tab: y
    }
  }, {
    disableTrack: P
  }), <div data-has-border={true} className={l()(R.chat, k.container)}>{<j.Z>{<j.Z.Icon icon={(0, a.GSL)(I.Z)} aria-hidden={true} color={u.Z.INTERACTIVE_ACTIVE} />}{<j.Z.Title>{T.intl.string(T.t.al5EXF)}</j.Z.Title>}{<S.Z />}</j.Z>}{<a.u2D className={k.content}>{o ? (0, n.jsx)(E, {
        guildId: t,
        productId: r
      }) : (0, n.jsx)(a.$jN, {})}</a.u2D>}{<b.Z className={k.sparkleCloudTop} />}{<f.Z className={k.sparkleCloudBottom} />}</div>
}

function U(e) {
  let {
    guildId: t,
    productId: r,
    initialTab: i
  } = e;
  return null == i && null != r && (i = v.y.GUILD_PRODUCTS), <O.Z initialTab={i} guildId={t}><M initialTab={i} productId={r} guildId={t} /></O.Z>
}