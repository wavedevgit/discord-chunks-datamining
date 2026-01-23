/** Chunk was on 71791 **/
/** chunk id: 125820, original params: e,s,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => f
}), require("./896048.js"), require("./747238.js");
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
  Chunk341915 = require("./341915.js"),
  Chunk561844 = require("./561844.js"),
  Chunk545986 = require("./545986.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk613057 = require("./613057.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk667426 = require("./667426.js"),
  Chunk604880 = require("./604880.js"),
  Chunk318808 = require("./318808.js");
Chunk311907.Ay.initialize();
let T = Chunk607399.Fr || Chunk607399.v1;

function f(e) {
  let {
    match: s
  } = e, t = (0, n.bG)([u.A], () => u.A.getState("quests")), l = s.params.questId, f = function(e) {
    let [s, t] = r.useState(null);
    return r.useEffect(() => {
      (0, m.xB)(e).then(e => t({
        status: "ok",
        value: e
      })).catch(() => t({
        status: "error"
      }))
    }, [t, e]), s
  }(l);
  r.useEffect(() => {
    T || (null == t ? ((0, g.av)({
      questId: l,
      event: p.HAw.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT,
      properties: {},
      sourceQuestContent: o.uF.QUEST_HOME_DESKTOP
    }), _.A.openNativeAppModal("quests", p.e$_.DEEP_LINK, {
      type: E.XK.QUEST_HOME,
      params: {
        questId: l
      }
    })) : t === p.fAW.OPEN_FAIL && (0, h.bG)({
      pathname: p.BVt.QUEST_HOME,
      hash: l
    }))
  }, [t, l]);
  let C = r.useCallback(() => (0, x.QA)(l), [l]);
  if (T) return (0, a.jsxs)("div", {
    className: A.MY,
    children: [(0, a.jsx)("img", {
      className: A.Bg,
      src: k.Ay,
      alt: ""
    }), (0, a.jsx)("div", {
      className: A.r$,
      children: (0, a.jsx)("img", {
        src: v,
        alt: ""
      })
    }), null != f && (0, a.jsxs)("div", {
      className: A.Nr,
      children: ["ok" === f.status && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: A.rC,
          children: (0, a.jsx)("img", {
            src: "".concat(N.CI).concat(l, "/dark/").concat(f.value.assets.gameTile),
            alt: "",
            className: A.o4
          })
        }), (0, a.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          color: "text-default",
          className: A.ky,
          children: f.value.messages.questName
        })]
      }), (0, a.jsx)(c.Text, {
        variant: "text-md/normal",
        className: A.G3,
        children: j.intl.string(j.t.NweJI8)
      }), (0, a.jsx)(c.Button, {
        variant: "primary",
        text: j.intl.string(j.t.UQvCf7),
        fullWidth: true,
        onClick: C
      })]
    })]
  });
  let I = null == t || t === p.fAW.OPENING || t === p.fAW.OPEN_FAIL;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.A, {
      className: A.Lq,
      preserveAspectRatio: "xMinYMin slice"
    }), (0, a.jsx)("div", {
      className: A.kL,
      children: (0, a.jsx)(d.Ay, {
        children: I ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(d.hE, {
            children: j.intl.string(j.t["Z+hCVU"])
          }), (0, a.jsx)(d.CK, {})]
        }) : (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(d.hE, {
            className: A.Ns,
            children: j.intl.string(j.t.csrAMJ)
          }), (0, a.jsx)(d.tK, {
            children: j.intl.string(j.t.ghBJz9)
          })]
        })
      })
    })]
  })
}