/** Chunk was on 10576 **/
/** chunk id: 613464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function R(e) {
  let {
    userId: t,
    guildId: n,
    onClose: i,
    className: R,
    infoPanelClassName: C,
    style: L
  } = e, D = (0, O.m)(n), U = (0, s.e7)([N.default], () => N.default.getUser(t), [t]), M = (0, s.e7)([h.ZP], () => h.ZP.getMember(n, t), [n, t]), [b, v] = l.useState(null == U || null == M), x = (0, c.Z)(M), P = l.useRef(null), {
    analyticsLocations: j
  } = (0, A.ZP)(_.Z.GUILD_MEMBER_MOD_VIEW), y = (0, m.ZP)(t, n), G = (0, E.ZP)();
  return (l.useEffect(() => {
    D || i()
  }, [D, i]), l.useEffect(() => {
    null == x || null != M || b || i()
  }, [b, M, i, x]), l.useEffect(() => {
    null != U && null != M && v(false)
  }, [U, M]), l.useEffect(() => {
    let e = null == M;
    return !b && e && (P.current = window.setTimeout(i, 500)), () => {
      null != P.current && window.clearTimeout(P.current)
    }
  }, [b, M, i]), (0, d.$)({
    [n]: [t]
  }, "GuildMemberModViewSidebar"), l.useEffect(() => {
    !async function() {
      let e = [u.Z.requestMembersById(n, [t]), (0, T.nb)(n, [t]), (0, I.Z)(t, true, {
        guildId: n,
        dispatchWait: true
      })];
      await Promise.all(e), v(false)
    }()
  }, [n, t]), D) ? b || null == U || null == M ? (0, r.jsx)("div", {
    className: a()(S.sidebarContainer, S.loadingContainer, R),
    style: L,
    children: (0, r.jsx)(o.$jN, {
      animated: true,
      type: b ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS
    })
  }) : (0, r.jsx)(A.Gt, {
    value: j,
    children: (0, r.jsx)("div", {
      className: a()(S.sidebarContainer, R),
      style: L,
      children: (0, r.jsx)(g.Z, {
        user: U,
        displayProfile: y,
        themeType: null,
        themeOverride: G,
        forceShowPremium: true,
        className: S.profileThemedContainer,
        children: (0, r.jsxs)("div", {
          className: S.innerContainer,
          children: [(0, r.jsx)(p.ZP, {
            userId: t,
            guildId: n,
            onClose: i
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