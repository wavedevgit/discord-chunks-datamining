/** Chunk was on 93979 **/
/** chunk id: 740628, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => y
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

function g(e) {
  let {
    section: n,
    subsection: t,
    user: o,
    currentUser: r,
    displayProfile: i,
    guildId: c,
    channelId: s,
    onClose: a
  } = e;
  return n === h.oh.ACTIVITY ? (0, l.jsx)(m.Z, {
    user: o,
    currentUser: r,
    guildId: c,
    onClose: a
  }) : n === h.oh.MUTUAL_FRIENDS ? (0, l.jsx)(p.Z, {
    user: o,
    guildId: c,
    channelId: s,
    onClose: a
  }) : n === h.oh.MUTUAL_GUILDS ? (0, l.jsx)(x.Z, {
    user: o,
    onClose: a
  }) : n === h.oh.BOT_DATA_ACCESS ? (0, l.jsx)(d.Z, {
    user: o
  }) : n === h.oh.BOT_INFO ? (0, l.jsx)(u.Z, {
    user: o,
    currentUser: r,
    displayProfile: i,
    guildId: c,
    subsection: t,
    onClose: a
  }) : (0, l.jsx)(f.Z, {
    user: o,
    currentUser: r,
    displayProfile: i,
    subsection: t,
    onClose: a
  })
}

function y(e) {
  var n, t, d;
  let {
    user: u,
    currentUser: m,
    displayProfile: f,
    guildId: p,
    items: x,
    initialSection: y = h.oh.USER_INFO,
    initialSubsection: O,
    onClose: I
  } = e, {
    trackUserProfileAction: Z
  } = (0, a.KZ)(), _ = (0, r.e7)([s.Z], () => s.Z.hidePersonalInformation), [{
    section: P,
    subsection: N
  }, T] = o.useState({
    section: null != (d = null == (n = x.find(e => {
      let {
        section: n
      } = e;
      return n === y
    })) ? true : n.section) ? d : null == (t = x[0]) ? true : t.section,
    subsection: O
  });
  o.useEffect(() => {
    null == x.find(e => e.section === P) && T({
      section: x[0].section,
      subsection: true
    })
  }, [x, P]);
  let A = o.useCallback(e => {
    Z({
      action: "PRESS_SECTION",
      section: e
    }), T({
      section: e,
      subsection: true
    })
  }, [Z, T]);
  return _ ? (0, l.jsx)("div", {
    className: v.container,
    children: (0, l.jsxs)("div", {
      className: j.empty,
      children: [(0, l.jsx)("div", {
        className: j.emptyIconStreamerMode
      }), (0, l.jsx)("div", {
        className: j.emptyText,
        children: b.intl.string(b.t.Br1ls7)
      })]
    })
  }) : (0, l.jsxs)("div", {
    className: v.container,
    children: [(0, l.jsx)(i.n, {
      className: v.tabBar,
      type: "top",
      selectedItem: P,
      onItemSelect: A,
      children: x.map(e => {
        let {
          section: n,
          text: t
        } = e;
        return (0, l.jsx)(i.n.Item, {
          className: v.tabBarItem,
          id: n,
          "aria-label": t,
          children: (0, l.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: t
          })
        }, n)
      })
    }), (0, l.jsx)(g, {
      items: x,
      section: P,
      subsection: N,
      user: u,
      currentUser: m,
      displayProfile: f,
      guildId: p,
      onClose: I
    })]
  })
}