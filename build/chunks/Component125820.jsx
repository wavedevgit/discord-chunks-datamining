/** Chunk was on 71791 **/
/** chunk id: 125820, original params: e,s,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => k
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
  Chunk216456 = require("./216456.js"),
  Chunk341915 = require("./341915.js"),
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

function k(e) {
  let {
    match: s
  } = e, a = (0, c.bG)([h.A], () => h.A.getState("quests")), r = s.params.questId, k = function(e) {
    let [s, a] = l.useState(null);
    return l.useEffect(() => {
      (0, x.xB)(e).then(e => a({
        status: "ok",
        value: e
      })).catch(() => a({
        status: "error"
      }))
    }, [a, e]), s
  }(r);
  l.useEffect(() => {
    A || (null == a ? ((0, N.av)({
      questId: r,
      event: _.HAw.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT,
      properties: {},
      sourceQuestContent: f.uF.QUEST_HOME_DESKTOP
    }), u.A.openNativeAppModal("quests", _.e$_.DEEP_LINK, {
      type: g.XK.QUEST_HOME,
      params: {
        questId: r
      }
    })) : a === _.fAW.OPEN_FAIL && (0, m.bG)({
      pathname: _.BVt.QUEST_HOME,
      hash: r
    }))
  }, [a, r]);
  let C = l.useCallback(() => (0, o.QA)(r), [r]);
  if (A) return (0, t.jsxs)("div", {
    className: p.MY,
    children: [(0, t.jsx)("img", {
      className: p.Bg,
      src: v.Ay,
      alt: ""
    }), (0, t.jsx)("div", {
      className: p.r$,
      children: (0, t.jsx)("img", {
        src: b,
        alt: ""
      })
    }), null != k && (0, t.jsxs)("div", {
      className: p.Nr,
      children: ["ok" === k.status && (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("div", {
          className: p.rC,
          children: (0, t.jsx)("img", {
            src: "".concat(E.CI).concat(r, "/dark/").concat(k.value.assets.gameTile),
            alt: "",
            className: p.o4
          })
        }), (0, t.jsx)(n.Heading, {
          variant: "heading-lg/semibold",
          color: "text-default",
          className: p.ky,
          children: k.value.messages.questName
        })]
      }), (0, t.jsx)(n.Text, {
        variant: "text-md/normal",
        className: p.G3,
        children: j.intl.string(j.t.NweJI8)
      }), (0, t.jsx)(n.Button, {
        variant: "primary",
        text: j.intl.string(j.t.UQvCf7),
        fullWidth: true,
        onClick: C
      })]
    })]
  });
  let I = null == a || a === _.fAW.OPENING || a === _.fAW.OPEN_FAIL;
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(i.A, {
      className: p.Lq,
      preserveAspectRatio: "xMinYMin slice"
    }), (0, t.jsx)("div", {
      className: p.kL,
      children: (0, t.jsx)(d.Ay, {
        children: I ? (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(d.hE, {
            children: j.intl.string(j.t["Z+hCVU"])
          }), (0, t.jsx)(d.CK, {})]
        }) : (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(d.hE, {
            className: p.Ns,
            children: j.intl.string(j.t.csrAMJ)
          }), (0, t.jsx)(d.tK, {
            children: j.intl.string(j.t.ghBJz9)
          })]
        })
      })
    })]
  })
}