/** Chunk was on 20303 **/
/** chunk id: 613464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
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
  Chunk250412 = require("./250412.js");

function S(e) {
  let {
    userId: t,
    guildId: n,
    onClose: i,
    className: S,
    infoPanelClassName: C,
    style: D
  } = e, L = (0, N.m)(n), b = (0, s.e7)([h.default], () => h.default.getUser(t), [t]), U = (0, s.e7)([f.ZP], () => f.ZP.getMember(n, t), [n, t]), [v, M] = l.useState(null == b || null == U), x = (0, c.Z)(U), P = l.useRef(null), {
    analyticsLocations: j
  } = (0, A.ZP)(_.Z.GUILD_MEMBER_MOD_VIEW), y = (0, T.ZP)(t, n), w = (0, d.ZP)();
  return (l.useEffect(() => {
    L || i()
  }, [L, i]), l.useEffect(() => {
    null == x || null != U || v || i()
  }, [v, U, i, x]), l.useEffect(() => {
    null != b && null != U && M(false)
  }, [b, U]), l.useEffect(() => {
    let e = null == U;
    return !v && e && (P.current = window.setTimeout(i, 500)), () => {
      null != P.current && window.clearTimeout(P.current)
    }
  }, [v, U, i]), (0, E.$)({
    [n]: [t]
  }, "GuildMemberModViewSidebar"), l.useEffect(() => {
    !async function() {
      let e = [u.Z.requestMembersById(n, [t]), (0, m.nb)(n, [t]), (0, I.Z)(t, true, {
        guildId: n,
        dispatchWait: true
      })];
      await Promise.all(e), M(false)
    }()
  }, [n, t]), L) ? v || null == b || null == U ? (0, r.jsx)("div", {
    className: a()(R.sidebarContainer, R.loadingContainer, S),
    style: D,
    children: (0, r.jsx)(o.$jN, {
      animated: true,
      type: v ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS
    })
  }) : (0, r.jsx)(A.Gt, {
    value: j,
    children: (0, r.jsx)("div", {
      className: a()(R.sidebarContainer, S),
      style: D,
      children: (0, r.jsx)(g.Z, {
        user: b,
        displayProfile: y,
        themeType: null,
        themeOverride: w,
        forceShowPremium: true,
        className: R.profileThemedContainer,
        children: (0, r.jsxs)("div", {
          className: R.innerContainer,
          children: [(0, r.jsx)(p.ZP, {
            userId: t,
            guildId: n,
            onClose: i
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