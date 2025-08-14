/** Chunk was on 1355 **/
/** chunk id: 613464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function S(e) {
  let {
    userId: t,
    guildId: n,
    onClose: i,
    className: S,
    infoPanelClassName: C,
    style: D
  } = e, L = (0, f.m)(n), U = (0, a.e7)([h.default], () => h.default.getUser(t), [t]), M = (0, a.e7)([N.ZP], () => N.ZP.getMember(n, t), [n, t]), [v, b] = l.useState(null == U || null == M), x = (0, c.Z)(M), P = l.useRef(null), {
    analyticsLocations: j
  } = (0, A.ZP)(_.Z.GUILD_MEMBER_MOD_VIEW), y = (0, m.ZP)(t, n), w = (0, E.ZP)();
  return (l.useEffect(() => {
    L || i()
  }, [L, i]), l.useEffect(() => {
    null == x || null != M || v || i()
  }, [v, M, i, x]), l.useEffect(() => {
    null != U && null != M && b(false)
  }, [U, M]), l.useEffect(() => {
    let e = null == M;
    return !v && e && (P.current = window.setTimeout(i, 500)), () => {
      null != P.current && window.clearTimeout(P.current)
    }
  }, [v, M, i]), (0, d.$)({
    [n]: [t]
  }), l.useEffect(() => {
    !async function() {
      let e = [u.Z.requestMembersById(n, [t]), (0, T.nb)(n, [t]), (0, I.Z)(t, true, {
        guildId: n,
        dispatchWait: true
      })];
      await Promise.all(e), b(false)
    }()
  }, [n, t]), L) ? v || null == U || null == M ? (0, r.jsx)("div", {
    className: s()(R.sidebarContainer, R.loadingContainer, S),
    style: D,
    children: (0, r.jsx)(o.$jN, {
      animated: true,
      type: v ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS
    })
  }) : (0, r.jsx)(A.Gt, {
    value: j,
    children: (0, r.jsx)("div", {
      className: s()(R.sidebarContainer, S),
      style: D,
      children: (0, r.jsx)(g.Z, {
        user: U,
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