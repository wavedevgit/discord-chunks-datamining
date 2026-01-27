/** Chunk was on 82575 **/
/** chunk id: 745109, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk83257 = require("./83257.jsx"),
  Chunk159001 = require("./159001.js"),
  Chunk833336 = require("./833336.js"),
  Chunk766569 = require("./766569.jsx"),
  Chunk576622 = require("./576622.js"),
  Chunk358776 = require("./358776.js"),
  Chunk740625 = require("./740625.jsx"),
  Chunk955872 = require("./955872.jsx"),
  Chunk987281 = require("./987281.js"),
  Chunk752319 = require("./752319.js"),
  Chunk287809 = require("./287809.js"),
  Chunk203982 = require("./203982.js"),
  Chunk115063 = require("./115063.js"),
  Chunk841643 = require("./841643.js"),
  Chunk894013 = require("./894013.js"),
  Chunk652215 = require("./652215.js"),
  Chunk349828 = require("./349828.js"),
  Chunk355097 = require("./355097.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk298109 = require("./298109.js");

function _() {
  let e = (0, x.dk)("ProfileCustomizationSettingsPage"),
    t = (0, a.bG)([u.A], () => u.A.getGuild()),
    n = (0, E.A)(),
    l = (0, a.bG)([u.A, j.A], () => u.A.showNotice() || j.A.showNotice()),
    _ = null != t ? t : n,
    P = (0, a.bG)([b.default], () => b.default.getCurrentUser()),
    {
      subsection: G,
      setSubsection: R
    } = (0, f.A)(),
    D = m.a.useField("hasSearchResults"),
    L = m.a.useField("searchResults");

  function k(e) {
    if (G !== e) {
      if (l) {
        (0, S.fO)({
          duration: 300,
          intensity: c.n3
        }), O._.dispatch(v.jej.EMPHASIZE_NOTICE);
        return
      }
      e === C.Eq.GUILD && null == t && null != _ && (0, d.V2)(_), R(e)
    }
  }
  s.useEffect(() => {
    null != P && (null == _ ? true : _.id) !== T.V && (0, h.A)(P.id, P.getAvatarURL(null == _ ? true : _.id, 80), {
      guildId: null == _ ? true : _.id
    })
  }, [null == _ ? true : _.id, P]);
  let w = true,
    V = true;
  return D && 1 === L.length && (L.includes(y.H.PROFILE_SERVER_PROFILES) ? (k(C.Eq.GUILD), V = false) : L.includes(y.H.PROFILE_USER_PROFILE) && (k(C.Eq.USER_PROFILE), w = false)), (0, i.jsxs)(p.R, {
    header: N.intl.string(N.t["vi7f+q"]),
    children: [(0, i.jsxs)(o.VQ0, {
      className: I.$H,
      type: "top",
      look: "brand",
      selectedItem: G,
      onItemSelect: k,
      children: [V || e ? (0, i.jsx)(o.VQ0.Item, {
        className: I.YU,
        id: C.Eq.USER_PROFILE,
        children: N.intl.string(N.t["2p07FR"])
      }, C.Eq.USER_PROFILE) : null, w || e ? (0, i.jsx)(o.VQ0.Item, {
        className: r()(I.YU, I.HY),
        "aria-label": N.intl.string(N.t.kPHroX),
        id: C.Eq.GUILD,
        children: N.intl.string(N.t.kPHroX)
      }, C.Eq.GUILD) : null]
    }), G === C.Eq.GUILD ? (0, i.jsx)(g.A, {
      selectedGuild: _
    }) : (0, i.jsx)(A.A, {})]
  })
}