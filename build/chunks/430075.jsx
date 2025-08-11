/** Chunk was on 75347 **/
/** chunk id: 430075, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk236289 = require("./236289.js"),
  Chunk518560 = require("./518560.js"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk677095 = require("./677095.js");

function _() {
  return <Chunk481060.qXd color={Chunk481060.DM8.DANGER} className={Chunk677095.nagbar}>{<Chunk481060.Text tag={"span"} color={"always-white"} variant={"text-md/normal"}>{Chunk388032.intl.string(Chunk388032.t["MG+Bzc"])}</Chunk481060.Text>}{<Chunk481060.u3T href={Chunk800530.sQ.WARNING_SYSTEM_HELPCENTER_LINK}><Chunk481060.Text variant={"text-md/normal"} color={"always-white"}>{Chunk388032.intl.string(Chunk388032.t["9JceHB"])}</Chunk481060.Text></Chunk481060.u3T>}</Chunk481060.qXd>
}

function m(e) {
  let {} = e, t = (0, i.e7)([d.Z], () => d.Z.getAgeCheckStatus());
  return t === u.oE.NONE ? null : t === u.oE.SUCCESS ? <r.Wn messageType={r.QYI.POSITIVE}>{f.intl.format(f.t.maZDLy, {
      login: "/login"
    })}</r.Wn> : t === u.oE.ERROR ? <r.Wn messageType={r.QYI.ERROR}>{f.intl.string(f.t["4sILBQ"])}</r.Wn> : t === u.oE.FAILURE ? <r.Wn messageType={r.QYI.ERROR}>{f.intl.string(f.t["40R63t"])}</r.Wn> : <r.Wn messageType={r.QYI.INFO}>{f.intl.string(f.t["nhhy/f"])}</r.Wn>
}

function g() {
  return <div className={Chunk677095.pageContainer}>{<m />}{<Chunk518560.Z />}</div>
}

function h() {
  return null == (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.getSuspendedUserToken()) && (0, Chunk703656.uL)(Chunk981631.Z5c.LOGIN, {
    source: "suspended_user_safety_hub_page"
  }), <div className={Chunk677095.container}>{<_ />}{<g />}</div>
}