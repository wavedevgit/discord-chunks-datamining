/** Chunk was on web.js **/
/** chunk id: 668185, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk149765 = require("./149765.js"),
  Chunk178940 = require("./178940.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk422559 = require("./422559.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk527134 = require("./527134.js");

function f(e) {
  let {
    application: t,
    permissions: n,
    deniedPermissions: f,
    onPermissionsChange: _,
    guild: p
  } = e, h = i.useMemo(() => o.U_(p.permissions), [p.permissions]);
  i.useEffect(() => {
    _(false, o.hX(n, h))
  }, [h, _, n]);
  let m = c.VY.filter(e => o.e$(n, e)),
    g = m.filter(e => !o.e$(h, e)).map(e => {
      let t = (0, c.wt)(e),
        n = !o.e$(f, e);
      return <li className={d.permission}><a.X value={n} onChange={(t, n) => _(n, e)} type={a.X.Types.INVERTED}><s.x variant={"text-md/normal"}>{t}</s.x></a.X></li>
    }),
    E = m.filter(e => o.e$(h, e)).map(e => {
      let t = (0, c.wt)(e);
      return <li className={d.permission}>{<div className={d.disabledPermissionIcon}><l.Dio size={"md"} color={"currentColor"} className={d.icon} /></div>}{<s.x variant={"text-md/normal"}>{t}</s.x>}</li>
    });
  return <div className={d.botPermissions}>{g.length > 0 ? <div>{<s.x variant={"text-sm/medium"} color={"header-secondary"}>{u.intl.format(u.t.sOaT2t, {
          applicationName: t.name,
          guildName: p.name
        })}</s.x>}{<ul className={d.permissionsList}>{g}</ul>}</div> : null}{E.length > 0 ? <div>{<s.x variant={"text-sm/medium"} color={"header-secondary"}>{u.intl.format(u.t.fsOkFx, {
          applicationName: t.name
        })}</s.x>}{<ul className={d.permissionsList}>{E}</ul>}</div> : null}</div>
}