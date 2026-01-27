/** Chunk was on 60667 **/
/** chunk id: 412820, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk587600 = require("./587600.js"),
  Chunk207803 = require("./207803.js"),
  Chunk624826 = require("./624826.js"),
  Chunk354694 = require("./354694.js"),
  Chunk159001 = require("./159001.js"),
  Chunk833336 = require("./833336.js"),
  Chunk985018 = require("./985018.jsx");

function m() {
  let e = (0, l.bG)([_.A], () => _.A.getIsSubmitDisabled()),
    t = (0, l.bG)([_.A], () => _.A.getGuild()),
    n = (0, l.bG)([_.A], () => _.A.getErrors()),
    [m, g] = i.useState(false),
    A = i.useMemo(() => (null == n ? true : n.message) != null ? null == n ? true : n.message : (null == n ? true : n.guild_tag) !== true && n.guild_tag.length > 0 ? n.guild_tag[0] : Object.keys(null != n ? n : {}).length > 0 ? p.intl.string(p.t.s35OuK) : null, [n]),
    f = i.useCallback(async () => {
      var e, n, r;
      g(true);
      let i = _.A.getAllPending(),
        l = (0, a.C5)(i),
        s = (0, a.yX)(i),
        p = true;
      if (Object.keys(l).length > 0) {
        let r = await (0, u.GL)(null == t ? true : t.id, l);
        if (p = p && null != (e = null == r ? true : r.ok) && e, null == r ? true : r.ok) {
          let e = r.body;
          true !== i.pendingAvatar && (0, c.t)({
            isGuildProfile: true,
            avatarHash: e.avatar,
            avatarId: l.avatarId,
            avatarAssetOrigin: null == (n = i.pendingAvatar) ? true : n.assetOrigin
          }), (0, u.go)()
        }
      }
      if (Object.keys(s).length > 0) {
        let e = await (0, o.gi)(s, null == t ? true : t.id);
        p = p && null != (r = null == e ? true : e.ok) && r, (null == e ? true : e.ok) ? (0, u.RE)() : (0, d.N)()
      }
      p && (0, u.x8)(), g(false)
    }, [null == t ? true : t.id]),
    h = i.useCallback(() => {
      (0, u.IM)()
    }, []);
  return (0, r.jsx)(s.A, {
    submitting: m,
    onSave: f,
    onReset: h,
    disabled: e,
    errorMessage: null != A ? A : true
  })
}