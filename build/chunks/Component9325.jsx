/** Chunk was on 27978 **/
/** chunk id: 9325, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk409059 = require("./409059.js"),
  Chunk962220 = require("./962220.js"),
  Chunk306453 = require("./306453.jsx"),
  Chunk108427 = require("./108427.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk587444 = require("./587444.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk260539 = require("./260539.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function b(e, t, n) {
  e.preventDefault(), p.default.track(g.rMx.GUILD_TEMPLATE_APP_OPENED, {
    guild_template_code: t,
    guild_template_name: n.name,
    guild_template_description: n.description,
    guild_template_guild_id: n.sourceGuildId
  });
  let r = h.default.getFingerprint(),
    i = null != r ? r : h.default.getId();
  c.Z.openMobileApp(n.state === f.Rj.RESOLVED ? t : true, i)
}

function v(e) {
  let {
    code: t
  } = e, n = (0, l.e7)([o.Z], () => o.Z.getGuildTemplate(t));
  return (i.useEffect(() => {
    (0, d.e)("guild_template_mobile")
  }, []), null == n || n.state === f.Rj.RESOLVING) ? (0, r.jsx)(s.ZP, {
    children: (0, r.jsx)(a.$jN, {})
  }) : n.state === f.Rj.RESOLVED ? (0, r.jsxs)(s.ZP, {
    children: [(0, r.jsx)(u.Z, {
      guildTemplate: n,
      tall: true
    }), (0, r.jsx)(s.zx, {
      onClick: e => b(e, t, n),
      className: x.marginTop20,
      children: _.intl.string(_.t["a3Gl+f"])
    })]
  }) : (0, r.jsx)(m.Z, {
    text: _.intl.string(_.t["e/rZ2t"]),
    buttonCta: _.intl.string(_.t.HAvYn5),
    onClick: e => b(e, t, n)
  })
}
Chunk442837.ZP.initialize()