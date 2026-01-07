/** Chunk was on web.js **/
/** chunk id: 905027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk164946 = require("./164946.js"),
  Chunk350327 = require("./350327.js"),
  Chunk330055 = require("./330055.js"),
  Chunk647699 = require("./647699.js"),
  Chunk18438 = require("./18438.js"),
  Chunk778825 = require("./778825.js"),
  Chunk388032 = require("./388032.jsx");

function _() {
  let e = (0, a.e7)([f.Z], () => f.Z.getIsSubmitDisabled()),
    t = (0, a.e7)([f.Z], () => f.Z.getGuild()),
    n = (0, a.e7)([f.Z], () => f.Z.getErrors()),
    [_, m] = i.useState(false),
    h = i.useMemo(() => (null == n ? true : n.message) != null ? null == n ? true : n.message : (null == n ? true : n.guild_tag) !== true && n.guild_tag.length > 0 ? n.guild_tag[0] : Object.keys(null != n ? n : {}).length > 0 ? p.intl.string(p.t.s35OuK) : null, [n]),
    g = i.useCallback(async () => {
      var e, n, r;
      m(true);
      let i = f.Z.getAllPending(),
        a = (0, s.Jo)(i),
        o = (0, s.g9)(i),
        p = true;
      if (Object.keys(a).length > 0) {
        let r = await (0, d.iq)(null == t ? true : t.id, a);
        if (p = p && null != (e = null == r ? true : r.ok) && e, null == r ? true : r.ok) {
          let e = r.body;
          true !== i.pendingAvatar && (0, c.Z)({
            isGuildProfile: true,
            avatarHash: e.avatar,
            avatarId: a.avatarId,
            avatarAssetOrigin: null == (n = i.pendingAvatar) ? true : n.assetOrigin
          }), (0, d.IO)()
        }
      }
      if (Object.keys(o).length > 0) {
        let e = await (0, l.Z)(o, null == t ? true : t.id);
        p = p && null != (r = null == e ? true : e.ok) && r, (null == e ? true : e.ok) ? (0, d.pG)() : (0, u.v)()
      }
      p && (0, d.b9)(), m(false)
    }, [null == t ? true : t.id]),
    E = i.useCallback(() => {
      (0, d.W3)()
    }, []);
  return (0, r.jsx)(o.Z, {
    submitting: _,
    onSave: g,
    onReset: E,
    disabled: e,
    errorMessage: null != h ? h : true
  })
}