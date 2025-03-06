/** Chunk was on 51724 **/
n.d(t, {
  Z: () => N
});
var r = n(200651),
  i = n(192379),
  s = n(780384),
  a = n(481060),
  l = n(37234),
  o = n(410030),
  c = n(626135),
  d = n(617136),
  u = n(497505),
  m = n(865719),
  p = n(341907),
  g = n(46140),
  h = n(981631),
  f = n(388032),
  x = n(920617),
  b = n(66094);

function N() {
  let e = (0, s.wj)((0, o.ZP)()),
    t = (0, m.y)({
      location: g.dr.USER_SETTINGS_GIFT_INVENTORY
    }),
    n = i.useMemo(() => ({
      backgroundImage: "url(".concat("https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png", ")")
    }), []),
    N = i.useCallback(() => {
      (0, l.xf)(), (0, p.navigateToQuestHome)({
        fromContent: u.jn.QUEST_HOME_MOVE_CALLOUT
      }), c.default.track(h.rMx.QUEST_CONTENT_CLICKED, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r
          })
        }
        return e
      }({
        cta_name: d.jZ.VIEW_QUESTS
      }, (0, d.mH)(u.jn.QUEST_HOME_MOVE_CALLOUT)))
    }, []);
  return t === m.$.NEVER_SHOW ? null : (0, r.jsx)("div", {
    className: x.container,
    style: n,
    children: (0, r.jsxs)("div", {
      className: x.textContainer,
      children: [(0, r.jsxs)("div", {
        className: x.headerContainer,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: b,
          className: x.icon
        }), (0, r.jsx)(a.X6q, {
          variant: "heading-lg/bold",
          color: "always-white",
          children: f.NW.string(f.t.z8YP2N)
        })]
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "text-secondary",
        children: f.NW.string(f.t.IqmRZ2)
      }), (0, r.jsx)(a.zxk, {
        size: "large",
        color: e ? a.Ttl.BRAND : a.Ttl.WHITE,
        className: x.button,
        onClick: N,
        innerClassName: x.innerButton,
        children: (0, r.jsx)(a.Text, {
          variant: "text-md/medium",
          color: e ? "always-white" : "text-normal",
          children: f.NW.string(f.t.GURBQk)
        })
      })]
    })
  })
}