/** Chunk was on 1272 **/
n.d(t, {
  Z: () => p
}), n(47120), n(733860), n(653041);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(481060),
  s = n(497505),
  c = n(415104),
  u = n(642145),
  d = n(372083);

function p(e) {
  let {
    quests: t,
    isFetching: n
  } = e, l = null;
  if (window.location.hash.length > 0) {
    let e = window.location.hash.slice(1);
    for (let n of t)
      if (n.id === e) {
        l = e;
        break
      }
  }
  i.useEffect(() => {
    for (let e of t)
      if (e.id === l) {
        let e = document.getElementById("quest-tile-".concat(l));
        null == e || e.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        break
      }
  }, [t, l]);
  let p = null != l,
    [h, g] = i.useState(window.innerWidth);
  i.useEffect(() => {
    let e = () => {
      g(window.innerWidth)
    };
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []);
  let f = h >= 1610 ? 3 : h >= 1340 ? 2 : 1,
    m = i.useMemo(() => {
      let e = [];
      for (let r of t) {
        var n;
        r.id === u.V && (null === (n = r.userStatus) || void 0 === n ? void 0 : n.claimedAt) == null ? e.unshift(r) : e.push(r)
      }
      return e
    }, [t]);
  return n && 0 === t.length ? (0, r.jsx)(a.$jN, {
    className: d.spinner
  }) : (0, r.jsx)("div", {
    className: d.container,
    children: m.map((e, t) => {
      let n = Math.floor(t / f);
      return (0, r.jsx)(c.Z, {
        quest: e,
        questContent: s.jn.QUEST_HOME_DESKTOP,
        contentPosition: t,
        rowIndex: n,
        className: o()(d.questTile, {
          [d.selected]: p && e.id === l,
          [d.unselected]: p && e.id !== l
        })
      }, e.id)
    })
  }, null != l ? l : "")
}