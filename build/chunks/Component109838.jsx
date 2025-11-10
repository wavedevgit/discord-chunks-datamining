/** Chunk was on 62934 **/
/** chunk id: 109838, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => y
}), require("./388685.js");
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
  Chunk17790 = require("./17790.js"),
  Chunk981631 = require("./981631.js"),
  Chunk269794 = require("./269794.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk215365 = require("./215365.js");

function y(e) {
  let {
    guildId: n
  } = e;
  (0, g.cX)(n), (0, b.Z)(n), a.useEffect(() => {
    (0, m.mF)(n), o.Z.getDetectableGames()
  }, [n]);
  let t = (0, u.Z)(n),
    y = (0, l.e7)([f.Z], () => f.Z.getStateForGuild(n)),
    O = a.useMemo(() => (null == y ? true : y.instances) == null ? true : 0 === Object.values(y.instances).length ? null : Object.values(y.instances).map((e, t) => (0, r.jsx)(_.ZP, {
      guildId: n,
      instance: e
    }, "".concat(e.gameId, "-").concat(t))), [null == y ? true : y.instances, n]),
    [I, N] = a.useState(false);
  return a.useEffect(() => {
    (null == O || O.length > 0) && N(true)
  }, [O]), (0, r.jsxs)("div", {
    className: C.container,
    children: [(0, r.jsxs)(c.ZP, {
      className: C.toolbar,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(c.ZP.Icon, {
        icon: i.iWm,
        "aria-label": ""
      }), (0, r.jsx)(c.ZP.Title, {
        children: h.intl.string(j.default.vCzwM7)
      }), (0, r.jsx)(s.IGR, {
        disableColor: true,
        text: h.intl.string(h.t.oW0eUd),
        className: C.badge
      }), (0, r.jsx)(c.ZP.Divider, {
        className: C.divider
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: h.intl.format(j.default.LiR4eN, {
          helpCenterUrl: d.Z.getArticleURL(p.BhN.GAME_SERVER_HOSTING)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: C.contentContainer,
      children: [(null == y ? true : y.instances) != null ? (0, r.jsx)(s.zJl, {
        className: C.gameContainerWrapper,
        children: (0, r.jsxs)("div", {
          className: C.gameContainer,
          children: [O, I && (0, r.jsx)(x.Z, {
            guildId: n
          })]
        })
      }) : (0, r.jsx)("div", {
        className: C.spinnerContainer,
        children: (0, r.jsx)(s.$jN, {
          type: s.RAz.SPINNING_CIRCLE
        })
      }), t && (0, r.jsx)(v.Z, {
        guildId: n
      })]
    })]
  })
}