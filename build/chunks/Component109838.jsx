/** Chunk was on 62934 **/
/** chunk id: 109838, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => y
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
  Chunk578756 = require("./578756.js"),
  Chunk60482 = require("./60482.js"),
  Chunk52021 = require("./52021.jsx"),
  Chunk809121 = require("./809121.jsx"),
  Chunk546303 = require("./546303.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk269794 = require("./269794.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk215365 = require("./215365.js");

function y(e) {
  var n;
  let {
    guildId: t
  } = e;
  (0, g.cX)(t), a.useEffect(() => {
    (0, m.mF)(t), o.Z.getDetectableGames()
  }, [t]);
  let y = (0, u.Z)(t),
    C = (0, l.e7)([f.Z], () => f.Z.getStateForGuild(t)),
    O = Object.values(null != (n = null == C ? true : C.instances) ? n : {});
  return (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsxs)(c.ZP, {
      className: h.toolbar,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(c.ZP.Icon, {
        icon: i.iWm,
        "aria-label": ""
      }), (0, r.jsx)(c.ZP.Title, {
        children: j.intl.string(p.default.vCzwM7)
      }), (0, r.jsx)(s.IGR, {
        disableColor: true,
        text: j.intl.string(j.t.oW0eUd),
        className: h.badge
      }), (0, r.jsx)(c.ZP.Divider, {
        className: h.divider
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: j.intl.format(p.default.LiR4eN, {
          helpCenterUrl: d.Z.getArticleURL(b.BhN.GAME_SERVER_HOSTING)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: h.contentContainer,
      children: [(null == C ? true : C.instances) != null ? (0, r.jsx)(s.zJl, {
        className: h.gameContainerWrapper,
        children: (0, r.jsxs)("div", {
          className: h.gameContainer,
          children: [O.map((e, n) => (0, r.jsx)(_.ZP, {
            guildId: t,
            instance: e
          }, "".concat(e.gameId, "-").concat(n))), (0, r.jsx)(x.Z, {
            guildId: t
          })]
        })
      }) : (0, r.jsx)("div", {
        className: h.spinnerContainer,
        children: (0, r.jsx)(s.$jN, {
          type: s.RAz.SPINNING_CIRCLE
        })
      }), y && (0, r.jsx)(v.Z, {
        guildId: t
      })]
    })]
  })
}