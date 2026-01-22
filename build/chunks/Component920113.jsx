/** Chunk was on 21738 **/
/** chunk id: 920113, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk877227 = require("./877227.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk944791 = require("./944791.js"),
  Chunk456412 = require("./456412.jsx"),
  Chunk964486 = require("./964486.js"),
  Chunk726249 = require("./726249.js"),
  Chunk742589 = require("./742589.jsx"),
  Chunk210714 = require("./210714.js"),
  Chunk544028 = require("./544028.js"),
  Chunk335934 = require("./335934.js"),
  Chunk883344 = require("./883344.js"),
  Chunk859524 = require("./859524.js"),
  Chunk567061 = require("./567061.js"),
  Chunk192380 = require("./192380.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk56113 = require("./56113.js"),
  Chunk638990 = require("./638990.js");
let C = (0, Chunk456412.A)(function(e) {
  let {
    width: t
  } = e, n = (0, m.c)("ICYMIPage", false);
  i.useEffect(() => {
    n || (0, s.pX)(y.BVt.ME)
  }, [n]), i.useLayoutEffect(() => {
    n && u.I(y.BVt.ICYMI)
  }, [n]), (0, p.Ay)(() => {
    n && (0, A.d)("icymi")
  });
  let l = (0, o.bG)([g.A], () => g.A.theme),
    d = (0, o.bG)([b.A], () => b.A.isRefreshing()),
    C = i.useRef(null);
  (0, f.HU)({
    location: I.intl.string(I.t["jnXV/V"])
  });
  let [N, T] = i.useState(false);
  i.useEffect(() => {
    let e = e => {
        e.metaKey && T(true)
      },
      t = e => {
        "Meta" === e.key && T(false)
      },
      n = () => {
        T(false)
      };
    return window.addEventListener("keydown", e), window.addEventListener("keyup", t), window.addEventListener("blur", n), () => {
      window.removeEventListener("keydown", e), window.removeEventListener("keyup", t), window.removeEventListener("blur", n)
    }
  }, []);
  let j = (0, E.E)(),
    x = m.E2.useExperiment({
      location: "icymi page"
    }).enabled,
    P = i.useCallback(async e => {
      e.metaKey && x ? await (0, _.be)(y.ZSU.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON) : await j()
    }, [j, x]),
    w = N && x ? I.intl.string(I.t.YplSn2) : I.intl.string(I.t.wzzjk9);
  return n ? (0, r.jsxs)("div", {
    className: a()(S.TE, v.kL),
    children: [(0, r.jsx)(c.NPJ, {
      theme: l,
      children: e => (0, r.jsxs)(h.A, {
        className: e,
        toolbar: (0, r.jsx)(h.A.Icon, {
          icon: c.fNY,
          tooltip: w,
          onClick: P,
          disabled: d,
          "aria-label": w
        }),
        children: [(0, r.jsx)(h.A.Icon, {
          icon: c.gXB,
          "aria-hidden": true
        }), (0, r.jsx)(h.A.Title, {
          children: I.intl.string(I.t["jnXV/V"])
        }), (0, r.jsx)(h.A.Title, {
          children: (0, r.jsx)("p", {
            className: v.HH,
            children: I.intl.string(I.t.Ac2OZA)
          })
        })]
      })
    }), (0, r.jsx)("div", {
      ref: C,
      className: a()(S.Qs, v.Qs),
      children: (0, r.jsx)(O.A, {
        scrollContainerRef: C
      })
    })]
  }) : null
})