/** Chunk was on 10125 **/
a.r(t), a.d(t, {
  default: () => k
}), a(47120), a(301563);
var s = a(200651),
  n = a(192379),
  c = a(873546),
  i = a(442837),
  l = a(481060),
  r = a(830064),
  d = a(388905),
  o = a(625128),
  g = a(362762),
  _ = a(703656),
  m = a(617136),
  u = a(272008),
  N = a(341907),
  p = a(46140),
  E = a(981631),
  x = a(186901),
  h = a(388032),
  T = a(36249),
  f = a(74830),
  P = a(13299);
i.ZP.initialize();
let j = c.tq || c.Em;

function k(e) {
  let {
    match: t
  } = e, a = (0, i.e7)([g.Z], () => g.Z.getState("quests")), c = t.params.questId, k = function(e) {
    let [t, a] = n.useState(null);
    return n.useEffect(() => {
      (0, u.gU)(e).then(e => a({
        status: "ok",
        value: e
      })).catch(() => a({
        status: "error"
      }))
    }, [a, e]), t
  }(c);
  n.useEffect(() => {
    !j && (null == a ? ((0, m.dA)({
      questId: c,
      event: E.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT
    }), o.Z.openNativeAppModal("quests", E.Etm.DEEP_LINK, {
      type: x.jE.QUEST_HOME,
      params: {
        questId: c
      }
    })) : a === E.kEZ.OPEN_FAIL && (0, _.dL)({
      pathname: E.Z5c.QUEST_HOME,
      hash: c
    }))
  }, [a, c]);
  let A = n.useCallback(() => (0, N.openAppWithQuest)(c), [c]);
  if (j) return (0, s.jsxs)("div", {
    className: T.page,
    children: [(0, s.jsx)("img", {
      className: T.bgImg,
      src: P.ZP,
      alt: ""
    }), (0, s.jsx)("div", {
      className: T.logoContainer,
      children: (0, s.jsx)("img", {
        src: f,
        alt: ""
      })
    }), null != k && (0, s.jsxs)("div", {
      className: T.card,
      children: ["ok" === k.status && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("div", {
          className: T.gameTile,
          children: (0, s.jsx)("img", {
            src: "".concat(p.tD).concat(c, "/dark/").concat(k.value.assets.gameTile),
            alt: "",
            className: T.gameTileImg
          })
        }), (0, s.jsx)(l.X6q, {
          variant: "heading-lg/semibold",
          color: "text-normal",
          className: T.headingText,
          children: k.value.messages.questName
        })]
      }), (0, s.jsx)(l.Text, {
        variant: "text-md/normal",
        className: T.bodyText,
        children: h.NW.string(h.t.NweJIy)
      }), (0, s.jsx)(l.zxk, {
        fullWidth: !0,
        onClick: A,
        children: h.NW.string(h.t.UQvCf3)
      })]
    })]
  });
  let I = null == a || a === E.kEZ.OPENING || a === E.kEZ.OPEN_FAIL;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(r.Z, {
      className: T.backgroundArtwork,
      preserveAspectRatio: "xMinYMin slice"
    }), (0, s.jsx)("div", {
      className: T.container,
      children: (0, s.jsx)(d.ZP, {
        children: I ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(d.Dx, {
            children: h.NW.string(h.t["Z+hCVV"])
          }), (0, s.jsx)(d.Hh, {})]
        }) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(d.Dx, {
            className: T.appOpenedTitle,
            children: h.NW.string(h.t.csrAMD)
          }), (0, s.jsx)(d.DK, {
            children: h.NW.string(h.t.ghBJz8)
          })]
        })
      })
    })]
  })
}