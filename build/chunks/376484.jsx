/** Chunk was on web.js **/
/** chunk id: 376484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk446411 = require("./446411.js"),
  Chunk454585 = require("./454585.js"),
  Chunk834129 = require("./834129.js"),
  Chunk553385 = require("./553385.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk257590 = require("./257590.js");

function p(e) {
  let {
    message: t,
    channel: i,
    compact: s
  } = e, l = null != t.embeds && t.embeds.length > 0;
  return <div>{<c.Z className={o()(_.mainContainer, {
        [_.compact]: s
      })} icon={n(570111)} compact={s}><div className={o()(_.__invalid_content, {
          [_.compact]: s
        })}><div className={o()(_.__invalid_messageContent, {
            [_.compact]: s
          })}>{t.content}</div></div></c.Z>}{<div className={o()(_.__invalid_embedContent, {
        [_.compact]: s
      })}><h message={t} /></div>}{<div className={_.actions}><a.zxk variant={"secondary"} text={f.intl.string(f.t.zdBCIi)} onClick={() => {
          l ? (0, u.z$)(t) : (0, u.XP)(i.guild_id, i.id, t.id)
        }} /></div>}</div>
}

function h(e) {
  var t;
  let {
    message: n
  } = e, [i] = null != (t = n.embeds) ? t : [];
  if (null == i) return null;
  let o = (e, t) => l.Z.parseEmbedTitle(t, true, {
      channelId: n.channel_id
    }),
    a = (e, t, r) => l.Z.parse(t, true, {
      channelId: n.channel_id
    });
  return <s.ZP className={_.embed} embed={i} renderTitle={o} renderDescription={a} autoPlayGif={false} renderImageComponent={d.VqG} renderVideoComponent={d.VqG} renderLinkComponent={d.VqG} />
}