/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => y
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(374470),
  l = n(442837),
  c = n(481060),
  u = n(607070),
  d = n(70097),
  f = n(617136),
  _ = n(918701),
  p = n(475595),
  h = n(566078),
  m = n(352084),
  g = n(78826),
  E = n(341907),
  b = n(388032),
  v = n(624848);
let y = function(e) {
  let t;
  let {
    className: n,
    quest: o,
    autoplay: y = !0,
    learnMoreStyle: O = null
  } = e, I = (0, f.O5)(), S = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), T = i.useMemo(() => (0, p.fh)(o, p.eC.REWARD), [o]), A = i.useCallback(t => {
    var n;
    (0, s.k)(t.currentTarget, HTMLElement) && t.currentTarget.blur(), I({
      questId: o.id,
      questContent: e.questContent,
      questContentPosition: e.questContentPosition,
      questContentCTA: f.jZ.REWARD_LEARN_MORE
    }), (0, E.navigateToQuestHome)({
      fromContent: e.questContent,
      questId: o.id
    }), null === (n = e.onClick) || void 0 === n || n.call(e, t)
  }, [I, o.id, e]), N = i.useRef(null), C = i.useRef(y), R = (0, _.Bg)(o.config);
  return i.useEffect(() => {
    if (null != N.current) {
      if (!T.isAnimated || S) {
        N.current.currentTime = 0, N.current.pause();
        return
      }
      y && !C.current ? N.current.play() : !y && C.current && (N.current.currentTime = 0, N.current.pause()), C.current = y
    }
  }, [y, T, S]), t = R ? (0, r.jsx)(g.Fl, {
    id: "QuestRewardTile_rewardTileNitro",
    children: e => (0, r.jsx)(m.Z, {
      ref: e,
      className: v.questRewardTileAsset
    })
  }) : T.isAnimated ? (0, r.jsx)(g.Fl, {
    id: "QuestRewardTile_rewardTileAnimated",
    children: e => {
      var t;
      return (0, r.jsx)(d.Z, {
        ref: t => {
          e.current = t, N.current = t
        },
        autoPlay: !S && y,
        loop: !0,
        muted: !0,
        playsInline: !0,
        className: v.questRewardTileAsset,
        controls: !1,
        children: (0, r.jsx)("source", {
          src: T.url,
          type: null !== (t = T.mimetype) && void 0 !== t ? t : void 0
        })
      })
    }
  }) : (0, r.jsx)(g.Fl, {
    id: "QuestRewardTile_rewardTileStatic",
    children: e => (0, r.jsx)("img", {
      ref: e,
      alt: h.r.build(o.config).defaultReward.messages.name,
      className: a()(v.questRewardTileAsset, v.questRewardTileAssetStatic),
      src: T.url
    })
  }), null == O ? (0, r.jsx)("div", {
    className: a()(v.questRewardTile, n),
    children: t
  }) : (0, r.jsxs)(c.P3F, {
    className: a()(v.questRewardTileInteractive, v.questRewardTile, v.rewardHighlight, n),
    onClick: A,
    children: [t, (0, r.jsx)(c.ZX5, {
      className: v.shine,
      shineSize: c.rHe.SMALL
    }), "text" === O && (0, r.jsx)(c.Text, {
      color: "always-white",
      variant: "text-xs/normal",
      className: v.questRewardTileDetailsLearnMore,
      children: b.NW.format(b.t.DYAleX, {})
    }), "icon" === O && (0, r.jsx)("div", {
      className: v.questRewardTileDetailsLearnMore,
      children: (0, r.jsx)(c.d3s, {
        size: "xxs",
        color: c.TVs.colors.WHITE.css
      })
    })]
  })
}