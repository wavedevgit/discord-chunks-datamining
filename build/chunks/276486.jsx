/** Chunk was on 77025 **/
/** chunk id: 276486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => u,
  v: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk144114 = require("./144114.js"),
  Chunk489813 = require("./489813.js"),
  Chunk815660 = require("./815660.js"),
  Chunk388032 = require("./388032.js"),
  Chunk667084 = require("./667084.js");

function u() {
  return <Chunk489813.PU className={Chunk667084.editableRequirementContainer} icon={Chunk481060.AtH} text={Chunk388032.intl.string(Chunk388032.t.woMjLS)} footnote={Chunk388032.intl.string(Chunk388032.t["jMh+TU"])} meetsRequirement={false}><Chunk481060.DY3 text={Chunk388032.intl.string(Chunk388032.t.mGlP39)}><Chunk481060.zxk variant={"primary"} size={"sm"} disabled={true} text={Chunk388032.intl.string(Chunk388032.t["13ofGh"])} /></Chunk481060.DY3></Chunk489813.PU>
}

function d(e) {
  let {
    isUserVerified: t
  } = e, u = t ? o.intl.string(o.t.WWzQtb) : o.intl.string(o.t.woMjLS);
  return <s.PU className={c.editableRequirementContainer} icon={i.AtH} text={u} footnote={o.intl.string(o.t["jMh+TU"])} meetsRequirement={t}><i.zxk variant={"primary"} size={"sm"} text={o.intl.string(o.t["13ofGh"])} onClick={() => {
        (0, i.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("76540"), n.e("84575")]).then(n.bind(n, 607018));
          return t => (0, r.jsx)(e, function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({
            reason: l.L.GUILD_PHONE_REQUIRED
          }, t))
        }, {
          modalKey: a.M
        })
      }} /></s.PU>
}