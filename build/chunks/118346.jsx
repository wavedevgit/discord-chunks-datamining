/** Chunk was on 77025 **/
/** chunk id: 118346, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => m,
  b: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk489813 = require("./489813.js"),
  Chunk388032 = require("./388032.js"),
  Chunk667084 = require("./667084.js");

function u() {
  let [e, t] = Chunk73800.useState(false), [n, a] = Chunk73800.useState(false), [u, d] = Chunk73800.useState(false);
  Chunk73800.useEffect(() => {
    let e;
    return require && (e = setTimeout(() => {
      Chunk489813(false)
    }, 2e3)), () => {
      null != module && clearTimeout(module)
    }
  }, [require]);
  let m = async () => {
    if (!module) {
      exports(true);
      try {
        await Chunk893776.Z.verifyResend(), Chunk489813(true), d(true)
      } catch (e) {} finally {
        exports(false)
      }
    }
  };
  return require ? <Chunk481060.Text className={Chunk667084.verifyConfirmText} variant={"text-sm/normal"} color={"text-feedback-positive"}>{Chunk388032.intl.string(Chunk388032.t.H3Q7U1)}</Chunk481060.Text> : <Chunk481060.zxk variant={"primary"} size={"sm"} text={u ? Chunk388032.intl.string(Chunk388032.t.WnX4Jy) : Chunk388032.intl.string(Chunk388032.t["13ofGh"])} loading={module} onClick={m} />
}

function d() {
  return <Chunk489813.PU className={Chunk667084.editableRequirementContainer} icon={Chunk481060._XJ} text={Chunk388032.intl.string(Chunk388032.t.c6EUJC)} footnote={Chunk388032.intl.string(Chunk388032.t["jMh+TU"])} meetsRequirement={false}><Chunk481060.DY3 text={Chunk388032.intl.string(Chunk388032.t.mGlP39)}><Chunk481060.zxk variant={"primary"} size={"sm"} disabled={true} text={Chunk388032.intl.string(Chunk388032.t["13ofGh"])} /></Chunk481060.DY3></Chunk489813.PU>
}

function m(e) {
  let {
    isUserVerified: t
  } = e, n = t ? o.intl.string(o.t.qY1jHB) : o.intl.string(o.t.c6EUJC);
  return <a.PU className={c.editableRequirementContainer} icon={l._XJ} text={n} footnote={o.intl.string(o.t["jMh+TU"])} meetsRequirement={t}><u /></a.PU>
}