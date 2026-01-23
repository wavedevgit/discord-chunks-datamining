/** Chunk was on 44900 **/
/** chunk id: 589877, original params: e,t,s (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => E
}), require("./896048.js"), require("./747238.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk416298 = require("./416298.jsx"),
  Chunk854378 = require("./854378.jsx"),
  Chunk197111 = require("./197111.js"),
  Chunk10088 = require("./10088.js"),
  Chunk976860 = require("./976860.js"),
  Chunk829219 = require("./829219.js"),
  Chunk890687 = require("./890687.js"),
  Chunk545986 = require("./545986.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk613057 = require("./613057.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk667426 = require("./667426.js"),
  Chunk604880 = require("./604880.js"),
  Chunk318808 = require("./318808.js");
Chunk311907.Ay.initialize();
let A = Chunk607399.Fr || Chunk607399.v1;

function E(e) {
  let {
    match: t
  } = e, s = (0, l.bG)([g.A], () => g.A.getState("quest-preview")), i = t.params.questId, E = function(e) {
    let [t, s] = r.useState(null);
    return r.useEffect(() => {
      (0, x.xB)(e).then(e => s({
        status: "ok",
        value: e
      })).catch(() => s({
        status: "error"
      }))
    }, [s, e]), t
  }(i);
  r.useEffect(() => {
    if (!A) {
      if (null == s) m.A.openNativeAppModal("quest-preview", N.e$_.DEEP_LINK, {
        type: j.XK.QUEST_PREVIEW_TOOL,
        params: {
          questId: i
        }
      });
      else if (s === N.fAW.OPEN_FAIL) {
        let e = new URLSearchParams;
        e.set(o.L1.TAB, o.NC.PREVIEW_TOOL), e.set(o.L1.QUEST_ID, i), (0, h.bG)({
          pathname: N.BVt.QUEST_HOME_V2,
          search: "?".concat(e.toString())
        })
      }
    }
  }, [s, i]);
  let T = r.useCallback(() => (0, u.q$)(i), [i]);
  if (A) return (0, a.jsxs)("div", {
    className: v.MY,
    children: [(0, a.jsx)("img", {
      className: v.Bg,
      src: k.Ay,
      alt: ""
    }), (0, a.jsx)("div", {
      className: v.r$,
      children: (0, a.jsx)("img", {
        src: f,
        alt: ""
      })
    }), null != E && (0, a.jsx)("div", {
      className: v.Nr,
      children: "ok" === E.status ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: v.rC,
          children: (0, a.jsx)("img", {
            src: "".concat(_.CI).concat(i, "/dark/").concat(E.value.assets.gameTile),
            alt: "",
            className: v.o4
          })
        }), (0, a.jsx)(n.Heading, {
          variant: "heading-lg/semibold",
          color: "text-default",
          className: v.ky,
          children: E.value.messages.questName
        }), (0, a.jsx)(n.Text, {
          variant: "text-md/normal",
          className: v.G3,
          children: p.intl.string(p.t.bWuKqh)
        }), (0, a.jsx)(n.Button, {
          variant: "primary",
          text: p.intl.string(p.t.UQvCf7),
          fullWidth: true,
          onClick: T
        })]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(n.Heading, {
          variant: "heading-lg/semibold",
          color: "text-default",
          className: v.ky,
          children: p.intl.string(p.t.k4z4er)
        }), (0, a.jsx)(n.Text, {
          variant: "text-md/normal",
          className: v.G3,
          children: p.intl.string(p.t.gtZK09)
        })]
      })
    })]
  });
  let C = null == s || s === N.fAW.OPENING || s === N.fAW.OPEN_FAIL;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(c.A, {
      className: v.Lq,
      preserveAspectRatio: "xMinYMin slice"
    }), (0, a.jsx)("div", {
      className: v.kL,
      children: (0, a.jsx)(d.Ay, {
        children: C ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(d.hE, {
            children: p.intl.string(p.t["Z+hCVU"])
          }), (0, a.jsx)(d.CK, {})]
        }) : (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(d.hE, {
            className: v.Ns,
            children: p.intl.string(p.t.csrAMJ)
          }), (0, a.jsx)(d.tK, {
            children: p.intl.string(p.t.ghBJz9)
          })]
        })
      })
    })]
  })
}