/** Chunk was on 95345 **/
/** chunk id: 241420, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk546957 = require("./546957.js"),
  Chunk190014 = require("./190014.jsx"),
  Chunk301812 = require("./301812.js"),
  Chunk988043 = require("./988043.js"),
  Chunk919539 = require("./919539.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.js"),
  Chunk671364 = require("./671364.js");

function _(t) {
  let {
    guildId: e
  } = t;
  return <r.Z>{<o.Z ingress={c.f4.SERVER_PRIVACY_MODAL} guildId={e} />}{<u.Z ingress={c.f4.SERVER_PRIVACY_MODAL} guildId={e} />}{<s.Z ingress={c.f4.SERVER_PRIVACY_MODAL} guildId={e} />}{<a.Z ingress={c.f4.SERVER_PRIVACY_MODAL} guildId={e} />}{<l.Text color={"header-secondary"} variant={"text-sm/normal"}>{d.intl.format(d.t.LNsV09, {
        policyLink: "https://discord.com/safety/360043709612-our-policies"
      })}</l.Text>}</r.Z>
}

function f(t) {
  let {
    guild: e,
    transitionState: n,
    onClose: r
  } = t, a = "".concat(d.intl.string(d.t.BayiAg), "—").concat(null != e ? e.name : "??");
  return <l.Y0X transitionState={n} size={l.CgR.SMALL} aria-label={a} parentComponent={"PrivacySettings"}>{<l.xBx><l.X6q variant={"heading-lg/semibold"}>{a}</l.X6q></l.xBx>}{<l.hzk className={g.content}><_ guildId={e.id} /></l.hzk>}{<l.mzw><l.zxk variant={"primary"} text={d.intl.string(d.t.i4jeWV)} onClick={() => r()} /></l.mzw>}</l.Y0X>
}