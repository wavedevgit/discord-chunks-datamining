/** Chunk was on 12097 **/
/** chunk id: 613464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk50767 = require("./50767.js");

function S(e) {
  let {
    userId: t,
    guildId: n,
    onClose: s,
    className: S,
    infoPanelClassName: C,
    style: v
  } = e, D = (0, h.m)(n), b = (0, a.e7)([N.default], () => N.default.getUser(t), [t]), L = (0, a.e7)([f.ZP], () => f.ZP.getMember(n, t), [n, t]), [x, U] = l.useState(null == b || null == L), M = (0, c.Z)(L), P = l.useRef(null), {
    analyticsLocations: j
  } = (0, A.ZP)(_.Z.GUILD_MEMBER_MOD_VIEW), y = (0, m.ZP)(t, n), w = (0, E.ZP)();
  return (l.useEffect(() => {
    D || s()
  }, [D, s]), l.useEffect(() => {
    null == M || null != L || x || s()
  }, [x, L, s, M]), l.useEffect(() => {
    null != b && null != L && U(false)
  }, [b, L]), l.useEffect(() => {
    let e = null == L;
    return !x && e && (P.current = window.setTimeout(s, 500)), () => {
      null != P.current && window.clearTimeout(P.current)
    }
  }, [x, L, s]), (0, d.$)({
    [n]: [t]
  }), l.useEffect(() => {
    !async function() {
      let e = [u.Z.requestMembersById(n, [t]), (0, T.nb)(n, [t]), (0, I.Z)(t, true, {
        guildId: n,
        dispatchWait: true
      })];
      await Promise.all(e), U(false)
    }()
  }, [n, t]), D) ? x || null == b || null == L ? (0, r.jsx)("div", {
    className: i()(R.sidebarContainer, R.loadingContainer, S),
    style: v,
    children: (0, r.jsx)(o.$jN, {
      animated: true,
      type: x ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS
    })
  }) : (0, r.jsx)(A.Gt, {
    value: j,
    children: (0, r.jsx)("div", {
      className: i()(R.sidebarContainer, S),
      style: v,
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
            onClose: s
          }), (0, r.jsx)(O.Z, {
            userId: t,
            guildId: n,
            onClose: s,
            className: C
          })]
        })
      })
    })
  }) : null
}