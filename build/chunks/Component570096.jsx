/** Chunk was on 54273 **/
/** chunk id: 570096, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk970731 = require("./970731.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk69589 = require("./69589.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk942889 = require("./942889.js");
let x = e => {
  let {
    user: t,
    markAsDismissed: n
  } = e;
  return (0, r.jsxs)("div", {
    className: y.assetContainer,
    children: [(0, r.jsx)(f.Z, {
      user: t,
      rank: 1,
      avatarSize: o.EFr.SIZE_56
    }), (0, r.jsx)(o.P3F, {
      className: y.closeIcon,
      onClick: () => {
        n(m.L.USER_DISMISS)
      },
      children: (0, r.jsx)(o.Dio, {
        color: "currentColor",
        size: "sm"
      })
    })]
  })
};

function j(e) {
  let {
    children: t
  } = e, n = [a.z.LEADERBOARD_NUX_COACHMARK], [f, y] = (0, u.US)(n, true), j = (0, l.e7)([h.default], () => h.default.getCurrentUser()), _ = i.useRef(null);
  return f !== a.z.LEADERBOARD_NUX_COACHMARK || null == j ? t : (0, r.jsx)(o.yRy, {
    targetElementRef: _,
    renderPopout: () => (e => {
      let {
        user: t,
        markAsDismissed: n
      } = e;
      return (0, r.jsx)(d.ZP, {
        asset: (0, r.jsx)(x, {
          user: t,
          markAsDismissed: n
        }),
        header: b.intl.string(b.t.wAtFS0),
        content: b.intl.string(b.t.qIZICA),
        buttonCTA: b.intl.string(b.t.hvVgAQ),
        onClick: () => {
          (0, c.Z)(p.Z.getArticleURL(g.BhN.GUILD_LEADERBOARD)), n(m.L.USER_DISMISS)
        },
        markAsDismissed: n,
        caretPosition: d.DF.RIGHT_TOP,
        buttonProps: {
          color: s.zx.Colors.WHITE,
          look: s.zx.Looks.LINK,
          size: s.zx.Sizes.MIN
        }
      })
    })({
      user: j,
      markAsDismissed: y
    }),
    position: "left",
    animation: o.yRy.Animation.TRANSLATE,
    shouldShow: true,
    children: () => (0, r.jsx)("div", {
      ref: _,
      children: t
    })
  })
}