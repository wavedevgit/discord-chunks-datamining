/** Chunk was on web.js **/
/** chunk id: 745109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w
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

function w() {
  let e = (0, _.dk)("ProfileCustomizationSettingsPage"),
    t = (0, o.bG)([d.A], () => d.A.getGuild()),
    n = (0, A.A)(),
    a = (0, o.bG)([d.A, E.A], () => d.A.showNotice() || E.A.showNotice()),
    w = null != t ? t : n,
    P = (0, o.bG)([b.default], () => b.default.getCurrentUser()),
    {
      subsection: D,
      setSubsection: x
    } = (0, v.A)(),
    L = g.a.useField("hasSearchResults"),
    j = g.a.useField("searchResults");

  function M(e) {
    if (D !== e) {
      if (a) {
        (0, O.fO)({
          duration: 300,
          intensity: c.n3
        }), y._.dispatch(S.jej.EMPHASIZE_NOTICE);
        return
      }
      e === T.Eq.GUILD && null == t && null != w && (0, u.V2)(w), x(e)
    }
  }
  i.useEffect(() => {
    null != P && (null == w ? true : w.id) !== I.V && (0, p.A)(P.id, P.getAvatarURL(null == w ? true : w.id, 80), {
      guildId: null == w ? true : w.id
    })
  }, [null == w ? true : w.id, P]);
  let k = true,
    U = true;
  return L && 1 === j.length && (j.includes(C.H.PROFILE_SERVER_PROFILES) ? (M(T.Eq.GUILD), U = false) : j.includes(C.H.PROFILE_USER_PROFILE) && (M(T.Eq.USER_PROFILE), k = false)), (0, r.jsxs)(h.R, {
    header: N.intl.string(N.t["vi7f+q"]),
    children: [(0, r.jsxs)(l.VQ0, {
      className: R.$H,
      type: "top",
      look: "brand",
      selectedItem: D,
      onItemSelect: M,
      children: [U || e ? (0, r.jsx)(l.VQ0.Item, {
        className: R.YU,
        id: T.Eq.USER_PROFILE,
        children: N.intl.string(N.t["2p07FR"])
      }, T.Eq.USER_PROFILE) : null, k || e ? (0, r.jsx)(l.VQ0.Item, {
        className: s()(R.YU, R.HY),
        "aria-label": N.intl.string(N.t.kPHroX),
        id: T.Eq.GUILD,
        children: N.intl.string(N.t.kPHroX)
      }, T.Eq.GUILD) : null]
    }), D === T.Eq.GUILD ? (0, r.jsx)(f.A, {
      selectedGuild: w
    }) : (0, r.jsx)(m.A, {})]
  })
}