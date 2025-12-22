/** Chunk was on 15718 **/
/** chunk id: 613464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk463573 = require("./463573.js");

function p(e) {
  let {
    userId: t,
    guildId: n,
    onClose: i,
    className: p,
    infoPanelClassName: C,
    style: b,
    moderatorReportId: D
  } = e, U = (0, h.m)(n), L = (0, s.e7)([N.default], () => N.default.getUser(t), [t]), M = (0, s.e7)([g.ZP], () => g.ZP.getMember(n, t), [n, t]), [x, v] = l.useState(null == L || null == M), P = (0, c.Z)(M), j = l.useRef(null), {
    analyticsLocations: y
  } = (0, A.ZP)(_.Z.GUILD_MEMBER_MOD_VIEW), G = (0, I.ZP)(t, n), k = (0, E.ZP)();
  return (l.useEffect(() => {
    U || i()
  }, [U, i]), l.useEffect(() => {
    null == P || null != M || x || i()
  }, [x, M, i, P]), l.useEffect(() => {
    null != L && null != M && v(false)
  }, [L, M]), l.useEffect(() => {
    let e = null == M;
    return !x && e && (j.current = window.setTimeout(i, 500)), () => {
      null != j.current && window.clearTimeout(j.current)
    }
  }, [x, M, i]), (0, d.$)({
    [n]: [t]
  }, "GuildMemberModViewSidebar"), l.useEffect(() => {
    !async function() {
      let e = [u.Z.requestMembersById(n, [t]), (0, T.nb)(n, [t]), (0, m.Z)(t, true, {
        guildId: n,
        dispatchWait: true
      })];
      await Promise.all(e), v(false)
    }()
  }, [n, t]), U) ? x || null == L || null == M ? (0, r.jsx)("div", {
    className: a()(S.sidebarContainer, S.loadingContainer, p),
    style: b,
    children: (0, r.jsx)(o.$jN, {
      animated: true,
      type: x ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS
    })
  }) : (0, r.jsx)(A.Gt, {
    value: y,
    children: (0, r.jsx)("div", {
      className: a()(S.sidebarContainer, p),
      style: b,
      children: (0, r.jsx)(f.Z, {
        user: L,
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
            moderatorReportId: D
          }), (0, r.jsx)(O.Z, {
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