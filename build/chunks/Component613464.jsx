/** Chunk was on 66201 **/
/** chunk id: 613464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk250412 = require("./250412.js");

function p(e) {
  let {
    userId: t,
    guildId: n,
    onClose: i,
    className: p,
    infoPanelClassName: C,
    style: D
  } = e, U = (0, O.m)(n), L = (0, a.e7)([h.default], () => h.default.getUser(t), [t]), M = (0, a.e7)([N.ZP], () => N.ZP.getMember(n, t), [n, t]), [x, b] = l.useState(null == L || null == M), v = (0, c.Z)(M), P = l.useRef(null), {
    analyticsLocations: j
  } = (0, A.ZP)(_.Z.GUILD_MEMBER_MOD_VIEW), y = (0, I.ZP)(t, n), G = (0, E.ZP)();
  return (l.useEffect(() => {
    U || i()
  }, [U, i]), l.useEffect(() => {
    null == v || null != M || x || i()
  }, [x, M, i, v]), l.useEffect(() => {
    null != L && null != M && b(false)
  }, [L, M]), l.useEffect(() => {
    let e = null == M;
    return !x && e && (P.current = window.setTimeout(i, 500)), () => {
      null != P.current && window.clearTimeout(P.current)
    }
  }, [x, M, i]), (0, d.$)({
    [n]: [t]
  }, "GuildMemberModViewSidebar"), l.useEffect(() => {
    !async function() {
      let e = [u.Z.requestMembersById(n, [t]), (0, T.nb)(n, [t]), (0, m.Z)(t, true, {
        guildId: n,
        dispatchWait: true
      })];
      await Promise.all(e), b(false)
    }()
  }, [n, t]), U) ? x || null == L || null == M ? (0, r.jsx)("div", {
    className: s()(S.sidebarContainer, S.loadingContainer, p),
    style: D,
    children: (0, r.jsx)(o.$jN, {
      animated: true,
      type: x ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS
    })
  }) : (0, r.jsx)(A.Gt, {
    value: j,
    children: (0, r.jsx)("div", {
      className: s()(S.sidebarContainer, p),
      style: D,
      children: (0, r.jsx)(g.Z, {
        user: L,
        displayProfile: y,
        themeType: null,
        themeOverride: G,
        forceShowPremium: true,
        className: S.profileThemedContainer,
        children: (0, r.jsxs)("div", {
          className: S.innerContainer,
          children: [(0, r.jsx)(R.ZP, {
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