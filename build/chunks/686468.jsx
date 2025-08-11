/** Chunk was on 49152 **/
/** chunk id: 686468, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk884338 = require("./884338.js"),
  Chunk688641 = require("./688641.js"),
  Chunk596449 = require("./596449.jsx"),
  Chunk459502 = require("./459502.jsx"),
  Chunk856691 = require("./856691.js"),
  Chunk357156 = require("./357156.js"),
  Chunk546247 = require("./546247.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk146085 = require("./146085.js"),
  Chunk979339 = require("./979339.js"),
  Chunk643632 = require("./643632.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk941188 = require("./941188.js");

function v(e) {
  let {
    onClick: t,
    className: n
  } = e, i = c.S6n;
  return <d.Z iconContainerClassName={a()({
      [O.continueIconContainer]: false
    })} icon={(0, r.jsx)(i, {
      size: "custom",
      color: "currentColor",
      className: O.continueIcon,
      height: 20,
      width: 20
    })} color={o.Z.unsafe_rawColors.PRIMARY_700.css} title={j.intl.string(j.t.jMLfp6)} description={j.intl.string(j.t["Vd/rER"])} onClick={t} className={n} />
}

function C(e) {
  let {
    channel: t
  } = e, {
    participants: n,
    usersInSummary: i
  } = (0, x.Z)(t.id);
  return <div className={O.audienceSummary}>{<u.ZP className={O.summaryItem} guildId={t.guild_id} users={i} size={u.u8.SIZE_16} />}{<c.Text variant={"text-sm/normal"} color={"header-secondary"}>{function(e) {
        if (0 === e.length) return "";
        if (1 === e.length) return j.intl.formatToPlainString(j.t["5ULgaW"], {
          first: e[0].userNick
        });
        if (2 === e.length) return j.intl.formatToPlainString(j.t.BHK0Oj, {
          first: e[0].userNick,
          second: e[1].userNick
        });
        let t = e.length - 2;
        return j.intl.formatToPlainString(j.t.T3MT4u, {
          first: e[0].userNick,
          second: e[1].userNick,
          numOthers: t
        })
      }(n)}</c.Text>}</div>
}

function E(e) {
  let {
    channel: t,
    onContinueClick: n
  } = e, l = (0, s.e7)([b.Z], () => b.Z.can(y.yP, t), [t]), o = t.guild_id, {
    canCreateGuildEvent: u
  } = (0, g.XJ)(t), d = (0, _.Z)(t.id), x = i.useRef(null);
  return <div className={O.container} ref={x}>{<m.Z eventTargetRef={x} />}{<div className={O.content}>{<div className={O.headerContainer}>{<c.X6q className={O.__invalid_title} variant={"heading-xxl/normal"}>{j.intl.string(j.t.QGnDLi)}</c.X6q>}{<c.Text tag={"div"} className={O.subtitle} variant={"heading-lg/normal"}>{j.intl.string(j.t.djfK39)}</c.Text>}</div>}{d ? null : <p.Z channelId={t.id} />}{l ? <f.Z className={O.eventPrompt} channel={t} /> : null}{u ? <h.Z className={O.eventPrompt} guildId={o} /> : null}{l ? <v className={a()({
          [O.eventPrompt]: true
        })} onClick={n} /> : null}{<C channel={t} />}</div>}</div>
}