/** Chunk was on 27978 **/
/** chunk id: 718182, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk525654 = require("./525654.js"),
  o = require.n(Chunk525654),
  Chunk442837 = require("./442837.js"),
  Chunk893776 = require("./893776.js"),
  Chunk493773 = require("./493773.js"),
  Chunk129293 = require("./129293.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk108427 = require("./108427.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk20493 = require("./20493.js");

function _(e) {
  let {
    location: t,
    transitionTo: l = h.uL
  } = e, [s, _] = i.useState("submitting");

  function x() {
    return "Android" === o().os.family || "iOS" === o().os.family ? null : <d.zx onClick={() => l(f.Z5c.LOGIN, {
        source: "authorizeIPAdress"
      })}>{m.intl.string(m.t.dKhVQE)}</d.zx>
  }
  return ((0, c.ZP)(() => {
    (0, p.e)("authorize_ip");
    let e = (0, u.Z)(t);
    if (null == e) return void _("failed");
    (async () => {
      try {
        await a.Z.authorizeIPAddress(e), _("succeeded")
      } catch (e) {
        _("failed")
      }
    })()
  }), "failed" === s) ? <d.ZP>{<img alt={""} src={n(262467)} className={g.marginBottom20} />}{<d.Dx className={g.marginBottom8}>{m.intl.string(m.t["f/54a2"])}</d.Dx>}{<d.DK className={g.marginBottom40}>{m.intl.string(m.t.i3ehMj)}</d.DK>}{x()}</d.ZP> : "succeeded" === s ? <d.ZP>{<img alt={""} src={n(640356)} className={g.marginBottom20} />}{<d.Dx className={g.marginBottom8}>{m.intl.string(m.t.iG0SlJ)}</d.Dx>}{<d.DK className={g.marginBottom40}>{m.intl.string(m.t["Elv+qq"])}</d.DK>}{x()}</d.ZP> : <d.ZP>{<d.Hh />}{<d.Dx>{m.intl.string(m.t["9exy+f"])}</d.Dx>}</d.ZP>
}
Chunk442837.ZP.initialize()