/** Chunk was on web.js **/
/** chunk id: 41259, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk793030 = require("./793030.js"),
  Chunk974674 = require("./974674.js"),
  Chunk1561 = require("./1561.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk385499 = require("./385499.js"),
  Chunk768581 = require("./768581.js"),
  Chunk630388 = require("./630388.js"),
  Chunk489863 = require("./489863.js"),
  Chunk713938 = require("./713938.js"),
  Chunk314583 = require("./314583.js"),
  Chunk981631 = require("./981631.js"),
  Chunk182294 = require("./182294.js"),
  Chunk388032 = require("./388032.js"),
  Chunk441533 = require("./441533.js");

function b(e) {
  let {
    user: t,
    application: n,
    bot: b,
    accountScopes: y,
    showLogout: O,
    location: v,
    scopes: I
  } = e, T = (0, p.X)(), S = u.ZP.getApplicationIconURL({
    id: n.id,
    icon: n.icon
  }), A = u.ZP.getUserAvatarURL(t), N = i.useMemo(() => I.some(e => (0, _.sg)(e)) ? <r.Fragment>{<l.x variant={"text-lg/normal"} color={"header-secondary"}>{g.intl.string(g.t.uT1CPT)}</l.x>}{<o.X6 variant={"heading-xxl/bold"} color={"header-primary"}>{n.name}</o.X6>}</r.Fragment> : <r.Fragment>{<l.x variant={"text-lg/bold"} color={"header-primary"}>{n.name}{null != b ? <c.Z className={E.botTag} verified={null != b.public_flags && (0, d.yE)(b.public_flags, h.xW$.VERIFIED_BOT)} /> : null}</l.x>}{y.length > 0 ? <l.x variant={"text-md/normal"} color={"header-secondary"}>{g.intl.string(g.t.jFbDnJ)}</l.x> : <l.x variant={"text-md/normal"} color={"header-secondary"}>{g.intl.string(g.t["X+Fdpq"])}</l.x>}</r.Fragment>, [y.length, n, b, I]);
  return <header id={T} className={E.header}>{<div className={E.headerIcons}>{<a.qE className={E.avatar} src={S} size={m.EF.SIZE_80} aria-label={n.name} />}{<div className={E.ellipseGroup}>{<div className={E.ellipse} />}{<div className={E.ellipse} />}{<div className={E.ellipse} />}</div>}{<a.qE className={E.avatar} src={A} size={m.EF.SIZE_80} aria-label={t.username} />}</div>}{N}{O ? <div className={E.currentUser}><l.x variant={"text-sm/normal"} color={"text-muted"}>{g.intl.format(g.t.qRvpYW, {
          userHook: () => <l.x className={E.currentUserTag} variant={"text-sm/normal"}>{t.username}{!t.hasUniqueUsername() && <l.x className={E.currentUserDiscriminator} variant={"text-sm/normal"}>{"#".concat(t.discriminator)}</l.x>}</l.x>
        })}{<s.P tag={"a"} className={E.logoutLink} onClick={() => (0, f.c$)(v, "oauth2_logout")}>{g.intl.string(g.t["yV/hjI"])}</s.P>}</l.x></div> : null}</header>
}