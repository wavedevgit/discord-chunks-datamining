/** Chunk was on 5606 **/
/** chunk id: 645789, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function b() {
  let {
    canSubmit: e,
    errors: t
  } = (0, l.cf)([u.A], () => ({
    canSubmit: u.A.canSubmit(),
    errors: u.A.getErrors()
  })), [n, b] = i.useState(false), h = i.useMemo(() => (null == t ? true : t.message) != null ? null == t ? true : t.message : Object.keys(null != t ? t : {}).length > 0 ? f.intl.string(f.t["84MExs"]) : null, [t]), A = i.useCallback(async () => {
    var e, t, n, r, i;
    b(true);
    let l = u.A.getPendingChanges(),
      s = (0, c.Sk)(l),
      f = (0, c.yX)(l),
      h = (0, c.yg)(l),
      A = true;
    if (Object.keys(s).length > 0) {
      let r = await (0, a.yu)(s);
      if (A = A && null != (e = null == r ? true : r.ok) && e, null == r ? true : r.ok) {
        let e = r.body;
        true !== l.pendingAvatar && (0, p.t)({
          avatarHash: e.avatar,
          avatarId: s.avatarId,
          avatarAssetOrigin: null == (n = l.pendingAvatar) ? true : n.assetOrigin
        }), (0, a.pZ)()
      } else(null == r || null == (t = r.body) ? true : t.username) != null && (0, g.E)()
    }
    if (Object.keys(f).length > 0) {
      let e = await (0, d.gi)(f);
      A = A && null != (r = null == e ? true : e.ok) && r, (null == e ? true : e.ok) ? (0, d.RE)() : (0, m.m)()
    }
    if (true !== l.pendingLegacyUsernameDisabled) try {
      await _.m$.updateSetting(l.pendingLegacyUsernameDisabled), (0, a._e)()
    } catch (e) {
      (0, m.m)(), A = false
    }
    if (Object.keys(h).length > 0) {
      let {
        primaryGuildId: e
      } = h;
      if (true !== e) {
        let t = await (0, o.m)(e, null !== e);
        A = A && null != (i = null == t ? true : t.ok) && i, (null == t ? true : t.ok) ? (0, a.fw)() : (0, m.m)()
      }
    }
    A && (0, a.x8)(), b(false)
  }, []), E = i.useCallback(() => {
    (0, a.IM)()
  }, []);
  return (0, r.jsx)(s.A, {
    submitting: n,
    onSave: A,
    onReset: E,
    disabled: !e,
    errorMessage: null != h ? h : true
  })
}