/** Chunk was on 7726 **/
/** chunk id: 774393, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./321073.js"), require("./228524.js");
var Chunk64700 = require("./64700.js"),
  Chunk954571 = require("./954571.js"),
  Chunk401755 = require("./401755.js"),
  Chunk652215 = require("./652215.js");

function a(e) {
  let t = s.useRef([]);
  s.useEffect(() => {
    null == e || e.state === n.QB.RESOLVING || t.current.includes(e.code) || (t.current.push(e.code), l.default.track(i.HAw.CREATE_GUILD_VIEWED, {
      guild_template_code: e.code,
      guild_template_name: e.name,
      guild_template_description: e.description,
      guild_template_guild_id: e.sourceGuildId
    }))
  })
}