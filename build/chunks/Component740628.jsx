/** Chunk was on 12756 **/
/** chunk id: 740628, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk878449 = require("./878449.js"),
  Chunk602727 = require("./602727.js");

function h(e) {
  let {
    section: t,
    subsection: n,
    user: i,
    currentUser: l,
    displayProfile: o,
    guildId: a,
    channelId: c,
    onClose: s
  } = e;
  return t === b.oh.ACTIVITY ? (0, r.jsx)(f.Z, {
    user: i,
    currentUser: l,
    displayProfile: o,
    guildId: a,
    onClose: s
  }) : t === b.oh.MUTUAL_FRIENDS ? (0, r.jsx)(m.Z, {
    user: i,
    guildId: a,
    channelId: c,
    onClose: s
  }) : t === b.oh.MUTUAL_GUILDS ? (0, r.jsx)(g.Z, {
    user: i,
    onClose: s
  }) : t === b.oh.BOT_DATA_ACCESS ? (0, r.jsx)(d.Z, {
    user: i
  }) : t === b.oh.BOT_INFO ? (0, r.jsx)(u.Z, {
    user: i,
    currentUser: l,
    displayProfile: o,
    guildId: a,
    subsection: n,
    onClose: s
  }) : (0, r.jsx)(p.Z, {
    user: i,
    currentUser: l,
    displayProfile: o,
    subsection: n,
    onClose: s
  })
}

function x(e) {
  var t, n, d;
  let {
    user: u,
    currentUser: f,
    displayProfile: p,
    guildId: m,
    items: g,
    initialSection: x = b.oh.USER_INFO,
    initialSubsection: v,
    onClose: _
  } = e, {
    trackUserProfileAction: I
  } = (0, s.KZ)(), P = (0, l.e7)([c.Z], () => c.Z.hidePersonalInformation), [{
    section: E,
    subsection: T
  }, Z] = i.useState({
    section: null != (d = null == (t = g.find(e => {
      let {
        section: t
      } = e;
      return t === x
    })) ? true : t.section) ? d : null == (n = g[0]) ? true : n.section,
    subsection: v
  });
  i.useEffect(() => {
    null == g.find(e => e.section === E) && Z({
      section: g[0].section,
      subsection: true
    })
  }, [g, E]);
  let N = i.useCallback(e => {
    I({
      action: "PRESS_SECTION",
      section: e
    }), Z({
      section: e,
      subsection: true
    })
  }, [I, Z]);
  return P ? (0, r.jsx)("div", {
    className: O.container,
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
    className: O.container,
    children: [(0, r.jsx)(o.n, {
      className: O.tabBar,
      type: "top",
      selectedItem: E,
      onItemSelect: N,
      children: g.map(e => {
        let {
          section: t,
          text: n
        } = e;
        return (0, r.jsx)(o.n.Item, {
          className: O.tabBarItem,
          id: t,
          "aria-label": n,
          children: (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: n
          })
        }, t)
      })
    }), (0, r.jsx)(h, {
      items: g,
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