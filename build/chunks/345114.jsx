/** Chunk was on web.js **/
/** chunk id: 345114, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk739566 = require("./739566.js"),
  Chunk942951 = require("./942951.js"),
  Chunk834129 = require("./834129.js"),
  Chunk703656 = require("./703656.js"),
  Chunk35125 = require("./35125.js"),
  Chunk626751 = require("./626751.js"),
  Chunk891614 = require("./891614.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.js"),
  Chunk896293 = require("./896293.js");

function b(e) {
  let {
    author: t,
    channel: n,
    message: r
  } = e, o = n.guild_id, l = (0, c.l)({
    user: r.author,
    channelId: n.id,
    guildId: o,
    messageId: r.id
  })(t), {
    analyticsLocations: u
  } = (0, s.ZP)(a.Z.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE), _ = r.roleSubscriptionData, p = i.useCallback(() => {
    (0, d.uL)(h.Z5c.CHANNEL(o, m.oC.ROLE_SUBSCRIPTIONS), {
      sourceLocationStack: u
    }), (null == _ ? true : _.role_subscription_listing_id) != null && (0, f.y8)(o, n.id, r.id, _.role_subscription_listing_id)
  }, [o, n, r, _, u]);
  return null == _ ? null : (0, f.Tn)({
    username: t.nick,
    usernameOnClickHandler: l,
    roleSubscriptionOnClickHandler: p,
    guildId: o,
    roleSubscriptionData: r.roleSubscriptionData
  })
}

function y(e) {
  let {
    username: t
  } = e;
  return <div className={E.welcomeCardText}><o.Text tag={"p"} className={E.welcomeCardText} color={"status-positive-text"} variant={"heading-xl/medium"}>{g.intl.format(g.t.MLKSlp, {
        username: t,
        usernameHook: (e, t) => (0, r.jsx)(o.Text, {
          tag: "span",
          color: "status-positive-text",
          variant: "heading-xxl/extrabold",
          lineClamp: 3,
          children: e
        }, t)
      })}</o.Text></div>
}

function O(e) {
  let {
    guildId: t,
    user: n,
    username: i
  } = e;
  return <div className={E.welcomeCard} role={"img"} aria-label={g.intl.formatToPlainString(g.t["utf8+f"], {
      username: i
    })}>{<p.Z guildId={t} user={n} className={E.welcomeCardBadge} />}{<y username={i} />}</div>
}

function v(e) {
  var t, i;
  let {
    channel: o,
    message: a,
    compact: s
  } = e, c = (0, l.ZP)(a), d = b({
    channel: o,
    message: a,
    author: c
  }), f = (null == (t = a.roleSubscriptionData) ? true : t.total_months_subscribed) != null && (null == (i = a.roleSubscriptionData) ? true : i.total_months_subscribed) <= 1;
  return null == d ? null : <r.Fragment>{<u.Z icon={n(570111)} timestamp={a.timestamp} compact={s}>{d}</u.Z>}{f && <O guildId={o.guild_id} user={a.author} username={c.nick} />}{<_.Z channel={o} message={a} />}</r.Fragment>
}