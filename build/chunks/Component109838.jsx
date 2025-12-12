/** Chunk was on 62934 **/
/** chunk id: 109838, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk494620 = require("./494620.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk639777 = require("./639777.js"),
  Chunk905551 = require("./905551.js"),
  Chunk578756 = require("./578756.js"),
  Chunk853944 = require("./853944.js"),
  Chunk60482 = require("./60482.js"),
  Chunk52021 = require("./52021.jsx"),
  Chunk809121 = require("./809121.jsx"),
  Chunk546303 = require("./546303.jsx"),
  Chunk17790 = require("./17790.js"),
  Chunk981631 = require("./981631.js"),
  Chunk914820 = require("./914820.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk618167 = require("./618167.js");

function I(e) {
  let {
    guildId: n
  } = e;
  (0, f.cX)(n), (0, h.Z)(n);
  let t = (0, b.V)("GameServerPage");
  r.useEffect(() => {
    (0, g.mF)(n), o.Z.getDetectableGames()
  }, [n]);
  let I = (0, m.Z)(n),
    N = (0, l.e7)([x.Z], () => x.Z.getStateForGuild(n)),
    S = r.useMemo(() => (null == N ? true : N.instances) == null ? true : 0 === Object.values(N.instances).length ? null : Object.values(N.instances).map((e, t) => (0, a.jsx)(j.ZP, {
      guildId: n,
      instance: e
    }, "".concat(e.gameId, "-").concat(t))), [null == N ? true : N.instances, n]),
    [P, E] = r.useState(false);
  return r.useEffect(() => {
    (null == S || S.length > 0) && E(true)
  }, [S]), (0, a.jsxs)("div", {
    className: _.container,
    children: [(0, a.jsxs)(c.ZP, {
      className: _.toolbar,
      toolbar: (0, a.jsx)("div", {}),
      children: [(0, a.jsx)(c.ZP.Icon, {
        icon: i.iWm,
        "aria-label": ""
      }), (0, a.jsx)(c.ZP.Title, {
        children: O.intl.string(y.default.vCzwM7)
      }), (0, a.jsx)(s.IGR, {
        disableColor: true,
        text: O.intl.string(O.t.oW0eUd),
        className: _.badge
      }), (0, a.jsx)(c.ZP.Divider, {
        className: _.divider
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: O.intl.format(y.default.LiR4eN, {
          helpCenterUrl: u.Z.getEnglishArticleURL(C.BhN.GAME_SERVER_HOSTING)
        })
      })]
    }), (0, a.jsxs)("div", {
      className: _.contentContainer,
      children: [(null == N ? true : N.instances) != null ? (0, a.jsxs)("div", {
        className: _.gameContainerWrapper,
        children: [t && (0, a.jsx)("div", {
          className: _.degradedWarningContainer,
          children: (0, a.jsx)(d.Z, {
            look: d.z.WARNING,
            children: O.intl.format(y.default.XzXjK2, {})
          })
        }), (0, a.jsx)(s.zJl, {
          children: (0, a.jsxs)("div", {
            className: _.gameContainer,
            children: [S, P && (0, a.jsx)(v.Z, {
              guildId: n
            })]
          })
        })]
      }) : (0, a.jsx)("div", {
        className: _.spinnerContainer,
        children: (0, a.jsx)(s.$jN, {
          type: s.RAz.SPINNING_CIRCLE
        })
      }), I && (0, a.jsx)(p.Z, {
        guildId: n
      })]
    })]
  })
}