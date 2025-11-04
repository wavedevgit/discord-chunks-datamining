/** Chunk was on 1272 **/
/** chunk id: 927220, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk948789 = require("./948789.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk150063 = require("./150063.js"),
  Chunk112724 = require("./112724.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk252618 = require("./252618.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk108427 = require("./108427.js"),
  Chunk210887 = require("./210887.js"),
  Chunk518929 = require("./518929.js"),
  Chunk144725 = require("./144725.js"),
  Chunk613928 = require("./613928.js"),
  Chunk390536 = require("./390536.js"),
  Chunk581696 = require("./581696.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk357483 = require("./357483.js"),
  Chunk97009 = require("./97009.js");
let T = (0, Chunk112724.Z)(function(e) {
  let {
    width: t
  } = e, n = (0, _.b5)("ICYMIPage", false);
  i.useEffect(() => {
    n || (0, s.uL)(y.Z5c.ME)
  }, [n]), i.useLayoutEffect(() => {
    n && u.Y(y.Z5c.ICYMI)
  }, [n]), (0, p.ZP)(() => {
    n && (0, h.e)("icymi")
  });
  let l = (0, o.e7)([g.Z], () => g.Z.theme),
    d = (0, o.e7)([b.Z], () => b.Z.isRefreshing()),
    T = i.useRef(null);
  (0, f.Tt)({
    location: v.intl.string(v.t["jnXV/V"])
  });
  let [N, P] = i.useState(false);
  i.useEffect(() => {
    let e = e => {
        e.metaKey && P(true)
      },
      t = e => {
        "Meta" === e.key && P(false)
      },
      n = () => {
        P(false)
      };
    return window.addEventListener("keydown", e), window.addEventListener("keyup", t), window.addEventListener("blur", n), () => {
      window.removeEventListener("keydown", e), window.removeEventListener("keyup", t), window.removeEventListener("blur", n)
    }
  }, []);
  let j = (0, O.G)(),
    x = _.ZY.useExperiment({
      location: "icymi page"
    }).enabled,
    A = i.useCallback(async e => {
      e.metaKey && x ? await (0, E.ye)(y.qAy.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON) : await j()
    }, [j, x]),
    Z = N && x ? v.intl.string(v.t.YplSn2) : v.intl.string(v.t.wzzjk9);
  return n ? (0, r.jsxs)("div", {
    className: a()(S.chat, C.container),
    children: [(0, r.jsx)(c.f6W, {
      theme: l,
      children: e => (0, r.jsxs)(m.Z, {
        className: e,
        toolbar: (0, r.jsx)(m.Z.Icon, {
          icon: c.DuK,
          tooltip: Z,
          onClick: A,
          disabled: d,
          "aria-label": Z
        }),
        children: [(0, r.jsx)(m.Z.Icon, {
          icon: c.qOE,
          "aria-hidden": true
        }), (0, r.jsx)(m.Z.Title, {
          children: v.intl.string(v.t["jnXV/V"])
        }), (0, r.jsx)(m.Z.Title, {
          children: (0, r.jsx)("p", {
            className: C.preAlphaText,
            children: v.intl.string(v.t.Ac2OZA)
          })
        })]
      })
    }), (0, r.jsx)("div", {
      ref: T,
      className: a()(S.content, C.content),
      children: (0, r.jsx)(I.Z, {
        scrollContainerRef: T
      })
    })]
  }) : null
})