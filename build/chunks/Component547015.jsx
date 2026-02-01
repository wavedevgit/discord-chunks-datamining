/** Chunk was on 49438 **/
/** chunk id: 547015, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk475743 = require("./475743.js"),
  Chunk736653 = require("./736653.js"),
  Chunk80682 = require("./80682.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk221950 = require("./221950.js"),
  Chunk950191 = require("./950191.js"),
  Chunk454719 = require("./454719.js"),
  Chunk946356 = require("./946356.jsx"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985925 = require("./985925.js"),
  Chunk295191 = require("./295191.jsx"),
  Chunk586387 = require("./586387.jsx"),
  Chunk12999 = require("./12999.js");

function G(e) {
  let {
    userId: t,
    guildId: n,
    onClose: a,
    className: G,
    infoPanelClassName: R,
    style: D,
    moderatorReportId: C
  } = e, L = (0, m.q)(n), x = (0, s.bG)([N.default], () => N.default.getUser(t), [t]), b = (0, s.bG)([h.Ay], () => h.Ay.getMember(n, t), [n, t]), [M, v] = r.useState(null == x || null == b), U = (0, c.A)(b), j = r.useRef(null), {
    analyticsLocations: y
  } = (0, g.Ay)(d.A.GUILD_MEMBER_MOD_VIEW), k = (0, T.Ay)(t, n), P = (0, E.Ay)();
  return (r.useEffect(() => {
    L || a()
  }, [L, a]), r.useEffect(() => {
    null == U || null != b || M || a()
  }, [M, b, a, U]), r.useEffect(() => {
    null != x && null != b && v(false)
  }, [x, b]), r.useEffect(() => {
    let e = null == b;
    return !M && e && (j.current = window.setTimeout(a, 500)), () => {
      null != j.current && window.clearTimeout(j.current)
    }
  }, [M, b, a]), (0, _.E)({
    [n]: [t]
  }, "GuildMemberModViewSidebar"), r.useEffect(() => {
    !async function() {
      let e = [u.A.requestMembersById(n, [t]), (0, A.jo)(n, [t]), (0, I.A)(t, true, {
        guildId: n,
        dispatchWait: true
      })];
      await Promise.all(e), v(false)
    }()
  }, [n, t]), L) ? M || null == x || null == b ? (0, l.jsx)("div", {
    className: i()(p.so, p.g4, G),
    style: D,
    children: (0, l.jsx)(o.y$y, {
      animated: true,
      type: M ? o.y$y.Type.SPINNING_CIRCLE : o.y$y.Type.CHASING_DOTS
    })
  }) : (0, l.jsx)(g.f5, {
    value: y,
    children: (0, l.jsx)("div", {
      className: i()(p.so, G),
      style: D,
      children: (0, l.jsx)(O.A, {
        user: x,
        displayProfile: k,
        themeType: null,
        themeOverride: P,
        forceShowPremium: true,
        className: p.a2,
        children: (0, l.jsxs)("div", {
          className: p.WH,
          children: [(0, l.jsx)(S.Ay, {
            userId: t,
            guildId: n,
            onClose: a,
            moderatorReportId: C
          }), (0, l.jsx)(f.A, {
            userId: t,
            guildId: n,
            onClose: a,
            className: R
          })]
        })
      })
    })
  }) : null
}