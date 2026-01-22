/** Chunk was on web.js **/
/** chunk id: 645789, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk631670 = require("./631670.js"),
  Chunk933725 = require("./933725.js"),
  Chunk587600 = require("./587600.js"),
  Chunk207803 = require("./207803.js"),
  Chunk624826 = require("./624826.js"),
  Chunk752319 = require("./752319.js"),
  Chunk253932 = require("./253932.js"),
  Chunk354694 = require("./354694.js"),
  Chunk592074 = require("./592074.js"),
  Chunk985018 = require("./985018.jsx");

function g() {
  let e = (0, a.bG)([f.A], () => f.A.getIsSubmitDisabled()),
    t = (0, a.bG)([f.A], () => f.A.getErrors()),
    [n, g] = i.useState(false),
    E = i.useMemo(() => (null == t ? true : t.message) != null ? null == t ? true : t.message : Object.keys(null != t ? t : {}).length > 0 ? m.intl.string(m.t["84MExs"]) : null, [t]),
    b = i.useCallback(async () => {
      var e, t, n, r, i;
      g(true);
      let a = f.A.getAllPending(),
        s = (0, c.Sk)(a),
        m = (0, c.yX)(a),
        E = (0, c.yg)(a),
        b = true;
      if (Object.keys(s).length > 0) {
        let r = await (0, o.yu)(s);
        if (b = b && null != (e = null == r ? true : r.ok) && e, null == r ? true : r.ok) {
          let e = r.body;
          true !== a.pendingAvatar && (0, d.t)({
            avatarHash: e.avatar,
            avatarId: s.avatarId,
            avatarAssetOrigin: null == (n = a.pendingAvatar) ? true : n.assetOrigin
          }), (0, o.pZ)()
        } else(null == r || null == (t = r.body) ? true : t.username) != null && (0, h.E)()
      }
      if (Object.keys(m).length > 0) {
        let e = await (0, u.gi)(m);
        b = b && null != (r = null == e ? true : e.ok) && r, (null == e ? true : e.ok) ? (0, u.RE)() : (0, _.m)()
      }
      if (true !== a.pendingLegacyUsernameDisabled) try {
        await p.m$.updateSetting(a.pendingLegacyUsernameDisabled), (0, o._e)()
      } catch (e) {
        (0, _.m)(), b = false
      }
      if (Object.keys(E).length > 0) {
        let {
          primaryGuildId: e
        } = E;
        if (true !== e) {
          let t = await (0, l.m)(e, null !== e);
          b = b && null != (i = null == t ? true : t.ok) && i, (null == t ? true : t.ok) ? (0, o.fw)() : (0, _.m)()
        }
      }
      b && (0, o.x8)(), g(false)
    }, []),
    y = i.useCallback(() => {
      (0, o.IM)()
    }, []);
  return (0, r.jsx)(s.A, {
    submitting: n,
    onSave: b,
    onReset: y,
    disabled: e,
    errorMessage: null != E ? E : true
  })
}