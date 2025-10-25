/** Chunk was on 62934 **/
/** chunk id: 109838, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk639777 = require("./639777.js"),
  Chunk905551 = require("./905551.js"),
  Chunk60482 = require("./60482.js"),
  Chunk52021 = require("./52021.jsx"),
  Chunk809121 = require("./809121.jsx"),
  Chunk546303 = require("./546303.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk426623 = require("./426623.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk215365 = require("./215365.js");

function h(e) {
  var n;
  let {
    guildId: t
  } = e;
  a.useEffect(() => {
    (0, m.mF)(t), o.Z.getDetectableGames()
  }, [t]);
  let h = (0, u.Z)(t),
    y = (0, l.e7)([g.Z], () => g.Z.getStateForGuild(t)),
    C = Object.values(null != (n = null == y ? true : y.instances) ? n : {});
  return (0, r.jsxs)("div", {
    className: j.container,
    children: [(0, r.jsxs)(c.ZP, {
      className: j.toolbar,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(c.ZP.Icon, {
        icon: i.iWm,
        "aria-label": ""
      }), (0, r.jsx)(c.ZP.Title, {
        children: p.intl.string(b.default.vCzwM7)
      }), (0, r.jsx)(s.IGR, {
        disableColor: true,
        text: p.intl.string(p.t.oW0eUd),
        className: j.badge
      }), (0, r.jsx)(c.ZP.Divider, {
        className: j.divider
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: p.intl.format(b.default.LiR4eN, {
          helpCenterUrl: d.Z.getArticleURL(v.BhN.GAME_SERVER_HOSTING)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: j.contentContainer,
      children: [(null == y ? true : y.instances) != null ? (0, r.jsx)(s.zJl, {
        className: j.gameContainerWrapper,
        children: (0, r.jsxs)("div", {
          className: j.gameContainer,
          children: [C.map((e, n) => (0, r.jsx)(x.ZP, {
            guildId: t,
            instance: e
          }, "".concat(e.gameId, "-").concat(n))), (0, r.jsx)(f.Z, {
            guildId: t
          })]
        })
      }) : (0, r.jsx)("div", {
        className: j.spinnerContainer,
        children: (0, r.jsx)(s.$jN, {
          type: s.RAz.SPINNING_CIRCLE
        })
      }), h && (0, r.jsx)(_.Z, {
        guildId: t
      })]
    })]
  })
}