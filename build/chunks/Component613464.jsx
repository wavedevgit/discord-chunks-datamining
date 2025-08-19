/** Chunk was on 12630 **/
/** chunk id: 613464, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => H
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk345226 = require("./345226.js");

function H(A) {
  let {
    userId: e,
    guildId: t,
    onClose: l,
    className: H,
    infoPanelClassName: b,
    style: O
  } = A, Q = (0, D.m)(t), P = (0, s.e7)([w.default], () => w.default.getUser(e), [e]), j = (0, s.e7)([B.ZP], () => B.ZP.getMember(t, e), [t, e]), [V, m] = r.useState(null == P || null == j), T = (0, g.Z)(j), y = r.useRef(null), {
    analyticsLocations: L
  } = (0, u.ZP)(v.Z.GUILD_MEMBER_MOD_VIEW), x = (0, d.ZP)(e, t), N = (0, c.ZP)();
  return (r.useEffect(() => {
    Q || l()
  }, [Q, l]), r.useEffect(() => {
    null == T || null != j || V || l()
  }, [V, j, l, T]), r.useEffect(() => {
    null != P && null != j && m(false)
  }, [P, j]), r.useEffect(() => {
    let A = null == j;
    return !V && A && (y.current = window.setTimeout(l, 500)), () => {
      null != y.current && window.clearTimeout(y.current)
    }
  }, [V, j, l]), (0, f.$)({
    [t]: [e]
  }), r.useEffect(() => {
    !async function() {
      let A = [o.Z.requestMembersById(t, [e]), (0, h.nb)(t, [e]), (0, E.Z)(e, true, {
        guildId: t,
        dispatchWait: true
      })];
      await Promise.all(A), m(false)
    }()
  }, [t, e]), Q) ? V || null == P || null == j ? (0, n.jsx)("div", {
    className: i()(I.sidebarContainer, I.loadingContainer, H),
    style: O,
    children: (0, n.jsx)(a.$jN, {
      animated: true,
      type: V ? a.$jN.Type.SPINNING_CIRCLE : a.$jN.Type.CHASING_DOTS
    })
  }) : (0, n.jsx)(u.Gt, {
    value: L,
    children: (0, n.jsx)("div", {
      className: i()(I.sidebarContainer, H),
      style: O,
      children: (0, n.jsx)(C.Z, {
        user: P,
        displayProfile: x,
        themeType: null,
        themeOverride: N,
        forceShowPremium: true,
        className: I.profileThemedContainer,
        children: (0, n.jsxs)("div", {
          className: I.innerContainer,
          children: [(0, n.jsx)(p.ZP, {
            userId: e,
            guildId: t,
            onClose: l
          }), (0, n.jsx)(M.Z, {
            userId: e,
            guildId: t,
            onClose: l,
            className: b
          })]
        })
      })
    })
  }) : null
}