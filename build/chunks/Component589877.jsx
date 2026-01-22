/** Chunk was on 44900 **/
/** chunk id: 589877, original params: e,s,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => A
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
let E = Chunk607399.Fr || Chunk607399.v1;

function A(e) {
  let {
    match: s
  } = e, a = (0, i.bG)([m.A], () => m.A.getState("quest-preview")), r = s.params.questId, A = function(e) {
    let [s, a] = l.useState(null);
    return l.useEffect(() => {
      (0, u.xB)(e).then(e => a({
        status: "ok",
        value: e
      })).catch(() => a({
        status: "error"
      }))
    }, [a, e]), s
  }(r);
  l.useEffect(() => {
    if (!E) {
      if (null == a) h.A.openNativeAppModal("quest-preview", N.e$_.DEEP_LINK, {
        type: j.XK.QUEST_PREVIEW_TOOL,
        params: {
          questId: r
        }
      });
      else if (a === N.fAW.OPEN_FAIL) {
        let e = new URLSearchParams;
        e.set(f.L1.TAB, f.NC.PREVIEW_TOOL), e.set(f.L1.QUEST_ID, r), (0, x.bG)({
          pathname: N.BVt.QUEST_HOME_V2,
          search: "?".concat(e.toString())
        })
      }
    }
  }, [a, r]);
  let k = l.useCallback(() => (0, g.q$)(r), [r]);
  if (E) return (0, t.jsxs)("div", {
    className: p.MY,
    children: [(0, t.jsx)("img", {
      className: p.Bg,
      src: _.Ay,
      alt: ""
    }), (0, t.jsx)("div", {
      className: p.r$,
      children: (0, t.jsx)("img", {
        src: v,
        alt: ""
      })
    }), null != A && (0, t.jsx)("div", {
      className: p.Nr,
      children: "ok" === A.status ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("div", {
          className: p.rC,
          children: (0, t.jsx)("img", {
            src: "".concat(o.CI).concat(r, "/dark/").concat(A.value.assets.gameTile),
            alt: "",
            className: p.o4
          })
        }), (0, t.jsx)(n.Heading, {
          variant: "heading-lg/semibold",
          color: "text-default",
          className: p.ky,
          children: A.value.messages.questName
        }), (0, t.jsx)(n.Text, {
          variant: "text-md/normal",
          className: p.G3,
          children: b.intl.string(b.t.bWuKqh)
        }), (0, t.jsx)(n.Button, {
          variant: "primary",
          text: b.intl.string(b.t.UQvCf7),
          fullWidth: true,
          onClick: k
        })]
      }) : (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(n.Heading, {
          variant: "heading-lg/semibold",
          color: "text-default",
          className: p.ky,
          children: b.intl.string(b.t.k4z4er)
        }), (0, t.jsx)(n.Text, {
          variant: "text-md/normal",
          className: p.G3,
          children: b.intl.string(b.t.gtZK09)
        })]
      })
    })]
  });
  let L = null == a || a === N.fAW.OPENING || a === N.fAW.OPEN_FAIL;
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(c.A, {
      className: p.Lq,
      preserveAspectRatio: "xMinYMin slice"
    }), (0, t.jsx)("div", {
      className: p.kL,
      children: (0, t.jsx)(d.Ay, {
        children: L ? (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(d.hE, {
            children: b.intl.string(b.t["Z+hCVU"])
          }), (0, t.jsx)(d.CK, {})]
        }) : (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(d.hE, {
            className: p.Ns,
            children: b.intl.string(b.t.csrAMJ)
          }), (0, t.jsx)(d.tK, {
            children: b.intl.string(b.t.ghBJz9)
          })]
        })
      })
    })]
  })
}