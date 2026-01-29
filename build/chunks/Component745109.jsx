/** Chunk was on 32502 **/
/** chunk id: 745109, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
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

function I() {
  let e = (0, p.dk)("ProfileCustomizationSettingsPage"),
    t = (0, a.bG)([u.A], () => u.A.getGuild()),
    n = (0, S.A)(),
    s = (0, a.bG)([u.A, g.A], () => u.A.showNotice() || g.A.showNotice()),
    I = null != t ? t : n,
    P = (0, a.bG)([j.default], () => j.default.getCurrentUser()),
    {
      subsection: R,
      setSubsection: L
    } = (0, f.A)(),
    G = b.a.useField("hasSearchResults"),
    D = b.a.useField("searchResults");

  function k(e) {
    if (R !== e) {
      if (s) {
        (0, E.fO)({
          duration: 300,
          intensity: c.n3
        }), O._.dispatch(C.jej.EMPHASIZE_NOTICE);
        return
      }
      e === y.Eq.GUILD && null == t && null != I && (0, d.V2)(I), L(e)
    }
  }
  l.useEffect(() => {
    null != P && (null == I ? true : I.id) !== v.V && (0, x.A)(P.id, P.getAvatarURL(null == I ? true : I.id, 80), {
      guildId: null == I ? true : I.id
    })
  }, [null == I ? true : I.id, P]);
  let w = true,
    V = true;
  return G && 1 === D.length && (D.includes(T.H.PROFILE_SERVER_PROFILES) ? (k(y.Eq.GUILD), V = false) : D.includes(T.H.PROFILE_USER_PROFILE) && (k(y.Eq.USER_PROFILE), w = false)), (0, i.jsxs)(m.R, {
    header: _.intl.string(_.t["vi7f+q"]),
    children: [(0, i.jsxs)(o.VQ0, {
      className: N.$H,
      type: "top",
      look: "brand",
      selectedItem: R,
      onItemSelect: k,
      children: [V || e ? (0, i.jsx)(o.VQ0.Item, {
        className: N.YU,
        id: y.Eq.USER_PROFILE,
        children: _.intl.string(_.t["2p07FR"])
      }, y.Eq.USER_PROFILE) : null, w || e ? (0, i.jsx)(o.VQ0.Item, {
        className: r()(N.YU, N.HY),
        "aria-label": _.intl.string(_.t.kPHroX),
        id: y.Eq.GUILD,
        children: _.intl.string(_.t.kPHroX)
      }, y.Eq.GUILD) : null]
    }), R === y.Eq.GUILD ? (0, i.jsx)(h.A, {
      selectedGuild: I
    }) : (0, i.jsx)(A.A, {})]
  })
}