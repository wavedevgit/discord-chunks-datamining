/** Chunk was on 19750 **/
/** chunk id: 692150, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => N
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk934551 = require("./934551.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544420 = require("./544420.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk801264 = require("./801264.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk363487 = require("./363487.js"),
  Chunk665171 = require("./665171.js"),
  Chunk397400 = require("./397400.js"),
  Chunk187549 = require("./187549.js"),
  Chunk522055 = require("./522055.js"),
  Chunk270424 = require("./270424.jsx"),
  Chunk140033 = require("./140033.jsx"),
  Chunk486180 = require("./486180.jsx"),
  Chunk566704 = require("./566704.js"),
  Chunk652215 = require("./652215.js"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk715896 = require("./715896.js");

function N(e) {
  let {
    guildId: t
  } = e;
  (0, m.tR)(t), (0, h.A)(t);
  let n = (0, x.U)("GameServerPage");
  a.useEffect(() => {
    (0, b.cq)(t), c.A.getDetectableGames()
  }, [t]);
  let N = (0, f.A)(t),
    A = (0, i.bG)([j.A], () => j.A.getStateForGuild(t)),
    E = a.useMemo(() => (null == A ? true : A.instances) == null ? true : 0 === Object.values(A.instances).length ? null : Object.values(A.instances).map((e, n) => (0, r.jsx)(g.Ay, {
      guildId: t,
      instance: e
    }, "".concat(e.gameId, "-").concat(n))), [null == A ? true : A.instances, t]),
    [I, T] = a.useState(false);
  return a.useEffect(() => {
    (null == E || E.length > 0) && T(true)
  }, [E]), (0, r.jsxs)("div", {
    className: _.kL,
    children: [(0, r.jsxs)(o.Ay, {
      className: _.KE,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(o.Ay.Icon, {
        icon: l.GameControllerIcon,
        "aria-label": ""
      }), (0, r.jsx)(o.Ay.Title, {
        children: S.intl.string(O.default.vCzwM7)
      }), (0, r.jsx)(s.LpS, {
        disableColor: true,
        text: S.intl.string(S.t.oW0eUd),
        className: _.qS
      }), (0, r.jsx)(o.Ay.Divider, {
        className: _.yF
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: S.intl.format(O.default.LiR4eN, {
          helpCenterUrl: u.A.getArticleURL(y.MVz.GAME_SERVER_HOSTING)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: _.hQ,
      children: [(null == A ? true : A.instances) != null ? (0, r.jsxs)("div", {
        className: _.nd,
        children: [n && (0, r.jsx)("div", {
          className: _.MR,
          children: (0, r.jsx)(d.A, {
            look: d.k.WARNING,
            children: S.intl.format(O.default.XzXjK2, {})
          })
        }), (0, r.jsx)(s.IpV, {
          children: (0, r.jsxs)("div", {
            className: _.Y_,
            children: [E, I && (0, r.jsx)(v.A, {
              guildId: t
            })]
          })
        })]
      }) : (0, r.jsx)("div", {
        className: _.dc,
        children: (0, r.jsx)(s.y$y, {
          type: s.tVU.SPINNING_CIRCLE
        })
      }), N && (0, r.jsx)(p.A, {
        guildId: t
      })]
    })]
  })
}