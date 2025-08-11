/** Chunk was on web.js **/
/** chunk id: 260736, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk67390 = require("./67390.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk739566 = require("./739566.js"),
  Chunk942951 = require("./942951.js"),
  Chunk834129 = require("./834129.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk861477 = require("./861477.js");

function _(e) {
  let {
    compact: t,
    message: n,
    channel: _
  } = e, p = (0, s.ZP)(n), h = (0, l.l)({
    user: n.author,
    channelId: n.channel_id,
    guildId: _.guild_id,
    messageId: n.id
  })(p), m = a.Z.getArticleURL(u.BhN.HD_STREAMING_POTION);
  return <r.Fragment>{<div className={f.parentContainer}><c.Z iconNode={(0, r.jsx)(i.hh5, {
          size: "sm"
        })} timestamp={n.timestamp} compact={t}>{d.intl.format(d.t["u0qJ4+"], {
          actorName: p.nick,
          actorHook: h
        })}</c.Z></div>}{<i.P3F onClick={() => {
        window.open(a.Z.getArticleURL(u.BhN.HD_STREAMING_POTION), "_blank")
      }} className={f.embed}>{<o.Z />}{<div className={f.text}>{<i.Text color={"text-default"} variant={"text-sm/semibold"} className={f.title}>{d.intl.string(d.t["Fh/mk5"])}</i.Text>}{<i.Text color={"text-primary"} variant={"text-xs/normal"}>{d.intl.format(d.t["bmGF+f"], {
            helpCenterLink: m
          })}</i.Text>}</div>}</i.P3F>}</r.Fragment>
}