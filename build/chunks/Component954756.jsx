/** Chunk was on web.js **/
/** chunk id: 954756, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk809206 = require("./809206.js"),
  Chunk321114 = require("./321114.js"),
  Chunk164946 = require("./164946.js"),
  Chunk350327 = require("./350327.js"),
  Chunk330055 = require("./330055.js"),
  Chunk25990 = require("./25990.js"),
  Chunk695346 = require("./695346.js"),
  Chunk647699 = require("./647699.js"),
  Chunk155433 = require("./155433.js"),
  Chunk388032 = require("./388032.jsx");

function g() {
  let e = (0, a.e7)([f.Z], () => f.Z.getIsSubmitDisabled()),
    t = (0, a.e7)([f.Z], () => f.Z.getErrors()),
    [n, g] = i.useState(false),
    E = i.useMemo(() => (null == t ? true : t.message) != null ? null == t ? true : t.message : Object.keys(null != t ? t : {}).length > 0 ? h.intl.string(h.t["84MExs"]) : null, [t]),
    b = i.useCallback(async () => {
      var e, t, n, r, i;
      g(true);
      let a = f.Z.getAllPending(),
        o = (0, c.ED)(a),
        h = (0, c.g9)(a),
        E = (0, c.jE)(a),
        b = true;
      if (Object.keys(o).length > 0) {
        let r = await (0, s.Mn)(o);
        if (b = b && null != (t = null == r ? true : r.ok) && t, null == r ? true : r.ok) {
          let e = r.body;
          true !== a.pendingAvatar && (0, d.Z)({
            avatarHash: e.avatar,
            avatarId: o.avatarId,
            avatarAssetOrigin: null == (n = a.pendingAvatar) ? true : n.assetOrigin
          }), (0, s.si)()
        } else(null == r || null == (e = r.body) ? true : e.username) != null && (0, m.P)()
      }
      if (Object.keys(h).length > 0) {
        let e = await (0, u.Z)(h);
        b = b && null != (r = null == e ? true : e.ok) && r, (null == e ? true : e.ok) ? (0, u.pG)() : (0, _.r)()
      }
      if (true !== a.pendingLegacyUsernameDisabled) try {
        await p.R_.updateSetting(a.pendingLegacyUsernameDisabled), (0, s.iR)()
      } catch (e) {
        (0, _.r)(), b = false
      }
      if (Object.keys(E).length > 0) {
        let {
          primaryGuildId: e
        } = E;
        if (true !== e) {
          let t = await (0, l.c)(e, null !== e);
          b = b && null != (i = null == t ? true : t.ok) && i, (null == t ? true : t.ok) ? (0, s.OU)() : (0, _.r)()
        }
      }
      b && (0, s.b9)(), g(false)
    }, []),
    y = i.useCallback(() => {
      (0, s.W3)()
    }, []);
  return (0, r.jsx)(o.Z, {
    submitting: n,
    onSave: b,
    onReset: y,
    disabled: e,
    errorMessage: null != E ? E : true
  })
}