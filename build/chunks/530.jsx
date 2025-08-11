/** Chunk was on web.js **/
/** chunk id: 530, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk129861 = require("./129861.js"),
  Chunk406943 = require("./406943.js"),
  Chunk385499 = require("./385499.js"),
  Chunk181430 = require("./181430.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.js"),
  Chunk172751 = require("./172751.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.js"),
  Chunk438361 = require("./438361.js");

function g(e) {
  let {
    user: t,
    usernameIcon: n,
    tags: i,
    nickname: g,
    nicknameIcons: E,
    pronouns: b,
    className: y,
    tagClassName: O,
    isTryItOut: v,
    onOpenProfile: I,
    onClose: T,
    nicknameVariant: S = "heading-lg/bold"
  } = e, A = e => null == I ? e : <a.kL8 onClick={I} className={m.clickableUsername} aria-label={h.intl.string(h.t["+Xp3ho"])}>{e}</a.kL8>, N = null != b && b.length > 0, C = (0, l.D)(t), R = (0, u.Y)({
    location: "UserProfileUsername"
  }) && null != t.displayNameStyles;
  return <div className={o()(m.container, {
      [m.bot]: null != C
    }, y)}>{<div className={m.usernameRow}>{A(R ? <a.Text variant={S}><f.Z userName={g} displayNameStyles={t.displayNameStyles} effectDisplayType={d.F.ANIMATED} textClassName={m.nicknameWithDisplayNameStyles} shouldWrap={true} loop={true} inProfile={true} /></a.Text> : <a.Text className={m.nickname} variant={S}>{g}</a.Text>)}{null != C && <c.Z type={C} verified={t.isVerifiedBot()} />}{null != E && <div className={m.nicknameIcons}>{E}</div>}</div>}{<div className={o()(m.tags, {
        [m.pronouns]: N,
        [m.bot]: null != C
      })}>{!t.isProvisional && A(<s.Z user={t} usernameIcon={n} forceUsername={true} forcePomelo={v} className={o()(m.userTag, O)} usernameClass={m.userTagUsername} discriminatorClass={m.userTagDiscriminator} hideBotTag={true} />)}{N && <r.Fragment>{<div aria-hidden={"true"} className={m.dotSpacer} />}{<a.DY3 className={m.pronounsTooltip} text={h.intl.string(h.t.GI2A8P)} delay={p.vB}><a.Text className={o()(m.pronounsText, O)} variant={"text-sm/medium"} color={"header-primary"}>{b}</a.Text></a.DY3>}</r.Fragment>}{<_.ZP userId={t.id} onClose={T} containerClassName={m.guildTagContainer} className={m.guildTag} />}{i}</div>}</div>
}