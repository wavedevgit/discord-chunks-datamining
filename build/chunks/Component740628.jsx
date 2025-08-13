/** Chunk was on 29458 **/
/** chunk id: 740628, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk706898 = require("./706898.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk246946 = require("./246946.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk786366 = require("./786366.jsx"),
  Chunk323090 = require("./323090.jsx"),
  Chunk116906 = require("./116906.jsx"),
  Chunk384816 = require("./384816.jsx"),
  Chunk389190 = require("./389190.jsx"),
  Chunk428927 = require("./428927.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk889080 = require("./889080.js"),
  Chunk860130 = require("./860130.js");

function O(e) {
  let {
    section: t,
    subsection: n,
    user: l,
    currentUser: i,
    displayProfile: o,
    guildId: a,
    channelId: c,
    onClose: s
  } = e;
  return t === g.oh.ACTIVITY ? (0, r.jsx)(f.Z, {
    user: l,
    currentUser: i,
    displayProfile: o,
    guildId: a,
    onClose: s
  }) : t === g.oh.MUTUAL_FRIENDS ? (0, r.jsx)(m.Z, {
    user: l,
    guildId: a,
    channelId: c,
    onClose: s
  }) : t === g.oh.MUTUAL_GUILDS ? (0, r.jsx)(b.Z, {
    user: l,
    onClose: s
  }) : t === g.oh.BOT_DATA_ACCESS ? (0, r.jsx)(d.Z, {
    user: l
  }) : t === g.oh.BOT_INFO ? (0, r.jsx)(u.Z, {
    user: l,
    currentUser: i,
    displayProfile: o,
    guildId: a,
    subsection: n,
    onClose: s
  }) : (0, r.jsx)(p.Z, {
    user: l,
    currentUser: i,
    displayProfile: o,
    subsection: n,
    onClose: s
  })
}

function h(e) {
  var t, n, d;
  let {
    user: u,
    currentUser: f,
    displayProfile: p,
    guildId: m,
    items: b,
    initialSection: h = g.oh.USER_INFO,
    initialSubsection: v,
    onClose: _
  } = e, {
    trackUserProfileAction: I
  } = (0, s.KZ)(), P = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation), [{
    section: E,
    subsection: T
  }, Z] = l.useState({
    section: null != (d = null == (t = b.find(e => {
      let {
        section: t
      } = e;
      return t === h
    })) ? true : t.section) ? d : null == (n = b[0]) ? true : n.section,
    subsection: v
  });
  l.useEffect(() => {
    null == b.find(e => e.section === E) && Z({
      section: b[0].section,
      subsection: true
    })
  }, [b, E]);
  let N = l.useCallback(e => {
    I({
      action: "PRESS_SECTION",
      section: e
    }), Z({
      section: e,
      subsection: true
    })
  }, [I, Z]);
  return P ? (0, r.jsx)("div", {
    className: x.container,
    children: (0, r.jsxs)("div", {
      className: y.empty,
      children: [(0, r.jsx)("div", {
        className: y.emptyIconStreamerMode
      }), (0, r.jsx)("div", {
        className: y.emptyText,
        children: j.intl.string(j.t.Br1ls7)
      })]
    })
  }) : (0, r.jsxs)("div", {
    className: x.container,
    children: [(0, r.jsx)(o.n, {
      className: x.tabBar,
      type: "top",
      selectedItem: E,
      onItemSelect: N,
      children: b.map(e => {
        let {
          section: t,
          text: n
        } = e;
        return (0, r.jsx)(o.n.Item, {
          className: x.tabBarItem,
          id: t,
          "aria-label": n,
          children: (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: n
          })
        }, t)
      })
    }), (0, r.jsx)(O, {
      items: b,
      section: E,
      subsection: T,
      user: u,
      currentUser: f,
      displayProfile: p,
      guildId: m,
      onClose: _
    })]
  })
}