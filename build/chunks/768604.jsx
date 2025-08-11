/** Chunk was on 75708 **/
/** chunk id: 768604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => b
}), require("./290780.js"), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk247206 = require("./247206.js"),
  Chunk925513 = require("./925513.js"),
  Chunk294602 = require("./294602.js"),
  Chunk249996 = require("./249996.jsx"),
  Chunk880257 = require("./880257.js"),
  Chunk838436 = require("./838436.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk298136 = require("./298136.js");

function b() {
  var e;
  let t = null == (e = (0, Chunk880257.Z)()) || module,
    {
      goreContentGuilds: n,
      goreContentFriendDm: b,
      goreContentNonFriendDm: x
    } = (0, Chunk294602.K)(),
    _ = e => {
      let t = Object.values(e);
      if ((0, o.Ks)() && t.includes(r.Q4.SHOW)) return void a.Z.showAgeVerificationGetStartedModal(l.cU.SENSITIVE_MEDIA_FILTER_SETTINGS);
      (0, c.Jr)(e)
    },
    j = [{
      value: Chunk524437.Q4.BLUR,
      label: Chunk388032.intl.string(Chunk388032.t.S49UaW)
    }, {
      value: Chunk524437.Q4.BLOCK,
      label: Chunk388032.intl.string(Chunk388032.t["D/157e"])
    }],
    E = [{
      value: Chunk524437.Q4.BLUR,
      label: Chunk388032.intl.string(Chunk388032.t.S49UaW)
    }],
    C = {
      value: Chunk524437.Q4.SHOW,
      label: Chunk388032.intl.string(Chunk388032.t["5k5OFh"])
    };
  return exports && (j.unshift(C), E.unshift(C)), <Chunk838436.U setting={Chunk726985.s6.GORE_MEDIA_REDACTION}>{<div className={Chunk298136.selectItemRow}>{<Chunk481060.Text variant={"text-md/medium"}>{Chunk388032.intl.string(Chunk388032.t["+uI23N"])}</Chunk481060.Text>}{<Chunk481060.q4e look={Chunk481060.qQH.CUSTOM} options={j} value={b} onChange={e => _({
          goreContentFriendDm: e
        })} renderOptionValue={e => {
          let [t] = e;
          return (0, i.jsx)(u.Z, {
            option: t
          })
        }} renderOptionLabel={e => (0, i.jsx)(u.Z, {
          option: e
        })} />}</div>}{<div className={Chunk298136.selectItemRow}>{<Chunk481060.Text variant={"text-md/medium"}>{Chunk388032.intl.string(Chunk388032.t["Yh+HX1"])}</Chunk481060.Text>}{<Chunk481060.q4e look={Chunk481060.qQH.CUSTOM} options={j} value={x} onChange={e => _({
          goreContentNonFriendDm: e
        })} renderOptionValue={e => {
          let [t] = e;
          return (0, i.jsx)(u.Z, {
            option: t
          })
        }} renderOptionLabel={e => (0, i.jsx)(u.Z, {
          option: e
        })} />}</div>}{<div className={Chunk298136.selectItemRow}>{<Chunk481060.Text variant={"text-md/medium"}>{Chunk388032.intl.string(Chunk388032.t["FP+a4+"])}</Chunk481060.Text>}{<Chunk481060.q4e look={Chunk481060.qQH.CUSTOM} options={E} value={require} onChange={e => _({
          goreContentGuilds: e
        })} isDisabled={!exports} renderOptionValue={e => {
          let [t] = e;
          return (0, i.jsx)(u.Z, {
            option: t
          })
        }} renderOptionLabel={e => (0, i.jsx)(u.Z, {
          option: e
        })} />}</div>}{<Chunk481060.Text variant={"text-sm/normal"} color={"text-muted"}>{Chunk388032.intl.string(Chunk388032.t.XgH9en)}</Chunk481060.Text>}</Chunk838436.U>
}