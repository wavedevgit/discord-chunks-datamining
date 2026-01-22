/** Chunk was on 342 **/
/** chunk id: 761836, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  kh: () => s,
  pW: () => a
}), require("./896048.js"), require("./321073.js");
var Chunk311907 = require("./311907.js"),
  Chunk931991 = require("./931991.js");
require("./446600.js");
var Chunk808728 = require("./808728.js");

function s(e, t) {
  let [n] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [i.Ay];
  if (null == t) return [];
  let l = n.getChannels(e)[i.vM],
    s = [];
  for (let {
      channel: e
    }
    of l) {
    let {
      canCreateGuildEvent: n,
      canManageAllEvents: l
    } = (0, r.ie)(e), i = n || l;
    e.type === t && (e.isGuildVoice() && i ? s.push(e) : e.isGuildStageVoice() && i && s.push(e))
  }
  return s
}

function a(e, t) {
  return (0, l.yK)([i.Ay], () => s(e, t, [i.Ay]), [e, t])
}
require("./576705.js"), require("./219935.js")