/** Chunk was on 86142 **/
/** chunk id: 565505, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk122906 = require("./122906.js"),
  Chunk121623 = require("./121623.js"),
  Chunk768397 = require("./768397.jsx"),
  Chunk210714 = require("./210714.js"),
  Chunk961350 = require("./961350.js"),
  Chunk954571 = require("./954571.js"),
  Chunk900662 = require("./900662.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk401755 = require("./401755.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473169 = require("./473169.js");

function x(e, t, n) {
  e.preventDefault(), p.default.track(m.HAw.GUILD_TEMPLATE_APP_OPENED, {
    guild_template_code: t,
    guild_template_name: n.name,
    guild_template_description: n.description,
    guild_template_guild_id: n.sourceGuildId
  });
  let r = h.default.getFingerprint(),
    i = null != r ? r : h.default.getId();
  c.A.openMobileApp(n.state === f.QB.RESOLVED ? t : true, i)
}

function E(e) {
  let {
    code: t
  } = e, n = (0, s.bG)([o.A], () => o.A.getGuildTemplate(t));
  return (i.useEffect(() => {
    (0, d.d)("guild_template_mobile")
  }, []), null == n || n.state === f.QB.RESOLVING) ? (0, r.jsx)(a.Ay, {
    children: (0, r.jsx)(l.y$y, {})
  }) : n.state === f.QB.RESOLVED ? (0, r.jsxs)(a.Ay, {
    children: [(0, r.jsx)(u.A, {
      guildTemplate: n,
      tall: true
    }), (0, r.jsx)("div", {
      className: A.QX,
      children: (0, r.jsx)(l.Button, {
        text: _.intl.string(_.t["a3Gl+e"]),
        fullWidth: true,
        onClick: e => x(e, t, n)
      })
    })]
  }) : (0, r.jsx)(g.A, {
    text: _.intl.string(_.t["e/rZ2n"]),
    buttonCta: _.intl.string(_.t.HAvYn0),
    onClick: e => x(e, t, n)
  })
}
Chunk311907.Ay.initialize()