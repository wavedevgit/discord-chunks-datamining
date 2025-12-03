/** Chunk was on 66201 **/
/** chunk id: 613464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk110924 = require("./110924.js"),
  Chunk410030 = require("./410030.js"),
  Chunk616780 = require("./616780.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk527379 = require("./527379.js"),
  Chunk687158 = require("./687158.js"),
  Chunk184301 = require("./184301.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk189357 = require("./189357.js"),
  Chunk718617 = require("./718617.jsx"),
  Chunk327250 = require("./327250.jsx"),
  Chunk345226 = require("./345226.js");

function p(e) {
  let {
    userId: t,
    guildId: n,
    onClose: i,
    className: p,
    infoPanelClassName: C,
    style: D,
    moderatorReportId: U
  } = e, L = (0, O.m)(n), M = (0, a.e7)([h.default], () => h.default.getUser(t), [t]), x = (0, a.e7)([N.ZP], () => N.ZP.getMember(n, t), [n, t]), [b, v] = l.useState(null == M || null == x), P = (0, c.Z)(x), j = l.useRef(null), {
    analyticsLocations: y
  } = (0, A.ZP)(_.Z.GUILD_MEMBER_MOD_VIEW), G = (0, I.ZP)(t, n), k = (0, E.ZP)();
  return (l.useEffect(() => {
    L || i()
  }, [L, i]), l.useEffect(() => {
    null == P || null != x || b || i()
  }, [b, x, i, P]), l.useEffect(() => {
    null != M && null != x && v(false)
  }, [M, x]), l.useEffect(() => {
    let e = null == x;
    return !b && e && (j.current = window.setTimeout(i, 500)), () => {
      null != j.current && window.clearTimeout(j.current)
    }
  }, [b, x, i]), (0, d.$)({
    [n]: [t]
  }, "GuildMemberModViewSidebar"), l.useEffect(() => {
    !async function() {
      let e = [u.Z.requestMembersById(n, [t]), (0, T.nb)(n, [t]), (0, m.Z)(t, true, {
        guildId: n,
        dispatchWait: true
      })];
      await Promise.all(e), v(false)
    }()
  }, [n, t]), L) ? b || null == M || null == x ? (0, r.jsx)("div", {
    className: s()(S.sidebarContainer, S.loadingContainer, p),
    style: D,
    children: (0, r.jsx)(o.$jN, {
      animated: true,
      type: b ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS
    })
  }) : (0, r.jsx)(A.Gt, {
    value: y,
    children: (0, r.jsx)("div", {
      className: s()(S.sidebarContainer, p),
      style: D,
      children: (0, r.jsx)(g.Z, {
        user: M,
        displayProfile: G,
        themeType: null,
        themeOverride: k,
        forceShowPremium: true,
        className: S.profileThemedContainer,
        children: (0, r.jsxs)("div", {
          className: S.innerContainer,
          children: [(0, r.jsx)(R.ZP, {
            userId: t,
            guildId: n,
            onClose: i,
            moderatorReportId: U
          }), (0, r.jsx)(f.Z, {
            userId: t,
            guildId: n,
            onClose: i,
            className: C
          })]
        })
      })
    })
  }) : null
}