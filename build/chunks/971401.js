/** Chunk was on 10778 **/
/** chunk id: 971401, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./539854.js"), require("./953529.js");
var Chunk473749 = require("./473749.js"),
  Chunk626135 = require("./626135.js"),
  Chunk260539 = require("./260539.js"),
  Chunk981631 = require("./981631.js");

function a(e) {
  let t = r.useRef([]);
  r.useEffect(() => {
    null != e && e.state !== l.Rj.RESOLVING && (t.current.includes(e.code) || (t.current.push(e.code), i.default.track(s.rMx.CREATE_GUILD_VIEWED, {
      guild_template_code: e.code,
      guild_template_name: e.name,
      guild_template_description: e.description,
      guild_template_guild_id: e.sourceGuildId
    })))
  })
}