/** Chunk was on 9207 **/
/** chunk id: 645789, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk631670 = require("./631670.js"),
  Chunk933725 = require("./933725.js"),
  Chunk587600 = require("./587600.js"),
  Chunk207803 = require("./207803.js"),
  Chunk836602 = require("./836602.js"),
  Chunk624826 = require("./624826.js"),
  Chunk253932 = require("./253932.js"),
  Chunk354694 = require("./354694.js"),
  Chunk592074 = require("./592074.js"),
  Chunk985018 = require("./985018.jsx");

function f() {
  let {
    canSubmit: e,
    errors: t
  } = (0, l.cf)([u.A], () => ({
    canSubmit: u.A.canSubmit(),
    errors: u.A.getErrors()
  })), [n, f] = i.useState(false), b = i.useMemo(() => (null == t ? true : t.message) != null ? null == t ? true : t.message : Object.keys(null != t ? t : {}).length > 0 ? A.intl.string(A.t["84MExs"]) : null, [t]), h = i.useCallback(async () => {
    var e, t, n, r, i;
    f(true);
    let l = u.A.getPendingChanges(),
      s = (0, c.Sk)(l),
      A = (0, c.yX)(l),
      b = (0, c.yg)(l),
      h = true;
    if (Object.keys(s).length > 0) {
      let r = await (0, a.yu)(s);
      if (h = h && null != (e = null == r ? true : r.ok) && e, null == r ? true : r.ok) {
        let e = r.body;
        true !== l.pendingAvatar && (0, _.t)({
          avatarHash: e.avatar,
          avatarId: s.avatarId,
          avatarAssetOrigin: null == (n = l.pendingAvatar) ? true : n.assetOrigin
        }), (0, a.pZ)()
      } else(null == r || null == (t = r.body) ? true : t.username) != null && (0, g.E)()
    }
    if (Object.keys(A).length > 0) {
      let e = await (0, d.gi)(A);
      h = h && null != (r = null == e ? true : e.ok) && r, (null == e ? true : e.ok) ? (0, d.RE)() : (0, m.m)()
    }
    if (true !== l.pendingLegacyUsernameDisabled) try {
      await p.m$.updateSetting(l.pendingLegacyUsernameDisabled), (0, a._e)()
    } catch (e) {
      (0, m.m)(), h = false
    }
    if (Object.keys(b).length > 0) {
      let {
        primaryGuildId: e
      } = b;
      if (true !== e) {
        let t = await (0, o.m)(e, null !== e);
        h = h && null != (i = null == t ? true : t.ok) && i, (null == t ? true : t.ok) ? (0, a.fw)() : (0, m.m)()
      }
    }
    h && (0, a.x8)(), f(false)
  }, []), E = i.useCallback(() => {
    (0, a.IM)()
  }, []);
  return (0, r.jsx)(s.A, {
    submitting: n,
    onSave: h,
    onReset: E,
    disabled: !e,
    errorMessage: null != b ? b : true
  })
}