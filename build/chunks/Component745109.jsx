/** Chunk was on 60449 **/
/** chunk id: 745109, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
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
  Chunk836602 = require("./836602.js"),
  Chunk576622 = require("./576622.js"),
  Chunk358776 = require("./358776.js"),
  Chunk740625 = require("./740625.jsx"),
  Chunk955872 = require("./955872.jsx"),
  Chunk987281 = require("./987281.js"),
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

function y() {
  let e = (0, A.dk)("ProfileCustomizationSettingsPage"),
    t = (0, a.bG)([u.A], () => u.A.getGuild()),
    n = (0, S.A)(),
    l = (0, a.bG)([u.A, h.A], () => u.A.showNotice() || h.A.showNotice()),
    y = null != t ? t : n,
    D = (0, a.bG)([O.default], () => O.default.getCurrentUser()),
    {
      subsection: G,
      setSubsection: P
    } = (0, v.A)(),
    R = j.a.useField("hasSearchResults"),
    V = j.a.useField("searchResults");

  function L(e) {
    if (G !== e) {
      if (l) {
        (0, b.fO)({
          duration: 300,
          intensity: c.n3
        }), E._.dispatch(C.jej.EMPHASIZE_NOTICE);
        return
      }
      e === T.Eq.GUILD && null == t && null != y && (0, d.V2)(y), P(e)
    }
  }
  s.useEffect(() => {
    null != D && (null == y ? true : y.id) !== f.V && (0, x.A)(D.id, D.getAvatarURL(null == y ? true : y.id, 80), {
      guildId: null == y ? true : y.id
    })
  }, [null == y ? true : y.id, D]);
  let k = true,
    M = true;
  return R && 1 === V.length && (V.includes(N.H.PROFILE_SERVER_PROFILES) ? (L(T.Eq.GUILD), M = false) : V.includes(N.H.PROFILE_USER_PROFILE) && (L(T.Eq.USER_PROFILE), k = false)), (0, i.jsxs)(p.R, {
    header: _.intl.string(_.t["vi7f+q"]),
    children: [(0, i.jsxs)(o.VQ0, {
      className: I.$H,
      type: "top",
      look: "brand",
      selectedItem: G,
      onItemSelect: L,
      children: [M || e ? (0, i.jsx)(o.VQ0.Item, {
        className: I.YU,
        id: T.Eq.USER_PROFILE,
        children: _.intl.string(_.t["2p07FR"])
      }, T.Eq.USER_PROFILE) : null, k || e ? (0, i.jsx)(o.VQ0.Item, {
        className: r()(I.YU, I.HY),
        "aria-label": _.intl.string(_.t.kPHroX),
        id: T.Eq.GUILD,
        children: _.intl.string(_.t.kPHroX)
      }, T.Eq.GUILD) : null]
    }), G === T.Eq.GUILD ? (0, i.jsx)(g.A, {
      selectedGuild: y
    }) : (0, i.jsx)(m.A, {})]
  })
}