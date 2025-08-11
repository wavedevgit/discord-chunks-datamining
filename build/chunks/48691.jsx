/** Chunk was on web.js **/
/** chunk id: 48691, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => f,
  t: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk44315 = require("./44315.js"),
  Chunk377171 = require("./377171.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk28651 = require("./28651.js");

function u(e) {
  let {
    label: t,
    backgroundColor: n = a.Z.BUTTON_SECONDARY_BACKGROUND,
    icon: o,
    iconColor: s
  } = e;
  return <div className={c.badge} style={{
      backgroundColor: n
    }}>{<i.Text variant={"text-sm/normal"} color={"always-white"} className={c.__invalid_badgeText}>{t}</i.Text>}{<o className={c.badgeIcon} color={null != s ? s : "currentColor"} aria-hidden={true} />}</div>
}

function d() {
  return <u label={Chunk388032.intl.string(Chunk388032.t["I+02Gh"])} backgroundColor={"#207B8D"} icon={Chunk481060.T$Z} />
}

function f() {
  return <u label={Chunk388032.intl.string(Chunk388032.t.TgsPaG)} icon={Chunk481060.vdY} iconColor={(0, Chunk44315.Lq)(Chunk981631.Ilk.PRIMARY_330)} />
}