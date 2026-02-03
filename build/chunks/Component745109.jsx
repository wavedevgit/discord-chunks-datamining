/** Chunk was on 44669 **/
/** chunk id: 745109, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function T() {
  let e = (0, f.dk)("ProfileCustomizationSettingsPage"),
    t = (0, a.bG)([d.A], () => d.A.getGuild()),
    n = (0, x.A)(),
    i = (0, a.bG)([d.A, h.A], () => d.A.showNotice() || h.A.showNotice()),
    T = null != t ? t : n,
    P = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
    {
      subsection: w,
      setSubsection: R
    } = (0, _.A)(),
    D = A.a.useField("hasSearchResults"),
    L = A.a.useField("searchResults");

  function M(e) {
    if (w !== e) {
      if (i) {
        (0, j.fO)({
          duration: 300,
          intensity: c.n3
        }), O._.dispatch(v.jej.EMPHASIZE_NOTICE);
        return
      }
      e === C.Eq.GUILD && null == t && null != T && (0, u.V2)(T), R(e)
    }
  }
  l.useEffect(() => {
    null != P && (null == T ? true : T.id) !== E.V && (0, g.A)(P.id, P.getAvatarURL(null == T ? true : T.id, 80), {
      guildId: null == T ? true : T.id
    })
  }, [null == T ? true : T.id, P]);
  let G = true,
    k = true;
  return D && 1 === L.length && (L.includes(S.H.PROFILE_SERVER_PROFILES) ? (M(C.Eq.GUILD), k = false) : L.includes(S.H.PROFILE_USER_PROFILE) && (M(C.Eq.USER_PROFILE), G = false)), (0, r.jsxs)(m.R, {
    header: I.intl.string(I.t["vi7f+q"]),
    children: [(0, r.jsxs)(o.VQ0, {
      className: N.$H,
      type: "top",
      look: "brand",
      selectedItem: w,
      onItemSelect: M,
      children: [k || e ? (0, r.jsx)(o.VQ0.Item, {
        className: N.YU,
        id: C.Eq.USER_PROFILE,
        children: I.intl.string(I.t["2p07FR"])
      }, C.Eq.USER_PROFILE) : null, G || e ? (0, r.jsx)(o.VQ0.Item, {
        className: s()(N.YU, N.HY),
        "aria-label": I.intl.string(I.t.kPHroX),
        id: C.Eq.GUILD,
        children: I.intl.string(I.t.kPHroX)
      }, C.Eq.GUILD) : null]
    }), w === C.Eq.GUILD ? (0, r.jsx)(p.A, {
      selectedGuild: T
    }) : (0, r.jsx)(b.A, {})]
  })
}