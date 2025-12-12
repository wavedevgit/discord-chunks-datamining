/** Chunk was on 27978 **/
/** chunk id: 9325, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk478411 = require("./478411.js");

function E(e, t, n) {
  e.preventDefault(), f.default.track(m.rMx.GUILD_TEMPLATE_APP_OPENED, {
    guild_template_code: t,
    guild_template_name: n.name,
    guild_template_description: n.description,
    guild_template_guild_id: n.sourceGuildId
  });
  let r = h.default.getFingerprint(),
    i = null != r ? r : h.default.getId();
  c.Z.openMobileApp(n.state === p.Rj.RESOLVED ? t : true, i)
}

function v(e) {
  let {
    code: t
  } = e, n = (0, s.e7)([o.Z], () => o.Z.getGuildTemplate(t));
  return (i.useEffect(() => {
    (0, d.e)("guild_template_mobile")
  }, []), null == n || n.state === p.Rj.RESOLVING) ? (0, r.jsx)(l.ZP, {
    children: (0, r.jsx)(a.$jN, {})
  }) : n.state === p.Rj.RESOLVED ? (0, r.jsxs)(l.ZP, {
    children: [(0, r.jsx)(u.Z, {
      guildTemplate: n,
      tall: true
    }), (0, r.jsx)("div", {
      className: _.marginTop20,
      children: (0, r.jsx)(a.Button, {
        text: x.intl.string(x.t["a3Gl+e"]),
        fullWidth: true,
        onClick: e => E(e, t, n)
      })
    })]
  }) : (0, r.jsx)(g.Z, {
    text: x.intl.string(x.t["e/rZ2n"]),
    buttonCta: x.intl.string(x.t.HAvYn0),
    onClick: e => E(e, t, n)
  })
}
Chunk442837.ZP.initialize()