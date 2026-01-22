/** Chunk was on web.js **/
/** chunk id: 412820, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
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

function _() {
  let e = (0, a.bG)([f.A], () => f.A.getIsSubmitDisabled()),
    t = (0, a.bG)([f.A], () => f.A.getGuild()),
    n = (0, a.bG)([f.A], () => f.A.getErrors()),
    [_, h] = i.useState(false),
    m = i.useMemo(() => (null == n ? true : n.message) != null ? null == n ? true : n.message : (null == n ? true : n.guild_tag) !== true && n.guild_tag.length > 0 ? n.guild_tag[0] : Object.keys(null != n ? n : {}).length > 0 ? p.intl.string(p.t.s35OuK) : null, [n]),
    g = i.useCallback(async () => {
      var e, n, r;
      h(true);
      let i = f.A.getAllPending(),
        a = (0, o.C5)(i),
        s = (0, o.yX)(i),
        p = true;
      if (Object.keys(a).length > 0) {
        let r = await (0, d.GL)(null == t ? true : t.id, a);
        if (p = p && null != (e = null == r ? true : r.ok) && e, null == r ? true : r.ok) {
          let e = r.body;
          true !== i.pendingAvatar && (0, c.t)({
            isGuildProfile: true,
            avatarHash: e.avatar,
            avatarId: a.avatarId,
            avatarAssetOrigin: null == (n = i.pendingAvatar) ? true : n.assetOrigin
          }), (0, d.go)()
        }
      }
      if (Object.keys(s).length > 0) {
        let e = await (0, l.gi)(s, null == t ? true : t.id);
        p = p && null != (r = null == e ? true : e.ok) && r, (null == e ? true : e.ok) ? (0, d.RE)() : (0, u.N)()
      }
      p && (0, d.x8)(), h(false)
    }, [null == t ? true : t.id]),
    E = i.useCallback(() => {
      (0, d.IM)()
    }, []);
  return (0, r.jsx)(s.A, {
    submitting: _,
    onSave: g,
    onReset: E,
    disabled: e,
    errorMessage: null != m ? m : true
  })
}