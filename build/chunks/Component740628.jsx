/** Chunk was on 31553 **/
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

function b(e) {
  let {
    section: n,
    subsection: t,
    user: i,
    currentUser: r,
    displayProfile: o,
    guildId: s,
    channelId: a,
    onClose: c
  } = e;
  return n === j.oh.ACTIVITY ? (0, l.jsx)(m.Z, {
    user: i,
    currentUser: r,
    guildId: s,
    onClose: c
  }) : n === j.oh.MUTUAL_FRIENDS ? (0, l.jsx)(f.Z, {
    user: i,
    guildId: s,
    channelId: a,
    onClose: c
  }) : n === j.oh.MUTUAL_GUILDS ? (0, l.jsx)(h.Z, {
    user: i,
    onClose: c
  }) : n === j.oh.BOT_DATA_ACCESS ? (0, l.jsx)(d.Z, {
    user: i
  }) : n === j.oh.BOT_INFO ? (0, l.jsx)(u.Z, {
    user: i,
    currentUser: r,
    displayProfile: o,
    guildId: s,
    subsection: t,
    onClose: c
  }) : (0, l.jsx)(p.Z, {
    user: i,
    currentUser: r,
    displayProfile: o,
    subsection: t,
    onClose: c
  })
}

function y(e) {
  var n, t, d;
  let {
    user: u,
    currentUser: m,
    displayProfile: p,
    guildId: f,
    items: h,
    initialSection: y = j.oh.USER_INFO,
    initialSubsection: O,
    onClose: I
  } = e, {
    trackUserProfileAction: Z
  } = (0, c.KZ)(), P = (0, r.e7)([a.Z], () => a.Z.hidePersonalInformation), [{
    section: N,
    subsection: T
  }, E] = i.useState({
    section: null != (d = null == (n = h.find(e => {
      let {
        section: n
      } = e;
      return n === y
    })) ? true : n.section) ? d : null == (t = h[0]) ? true : t.section,
    subsection: O
  });
  i.useEffect(() => {
    null == h.find(e => e.section === N) && E({
      section: h[0].section,
      subsection: true
    })
  }, [h, N]);
  let A = i.useCallback(e => {
    Z({
      action: "PRESS_SECTION",
      section: e
    }), E({
      section: e,
      subsection: true
    })
  }, [Z, E]);
  return P ? (0, l.jsx)("div", {
    className: g.container,
    children: (0, l.jsxs)("div", {
      className: v.empty,
      children: [(0, l.jsx)("div", {
        className: v.emptyIconStreamerMode
      }), (0, l.jsx)("div", {
        className: v.emptyText,
        children: x.intl.string(x.t.Br1ls7)
      })]
    })
  }) : (0, l.jsxs)("div", {
    className: g.container,
    children: [(0, l.jsx)(o.n, {
      className: g.tabBar,
      type: "top",
      selectedItem: N,
      onItemSelect: A,
      children: h.map(e => {
        let {
          section: n,
          text: t
        } = e;
        return (0, l.jsx)(o.n.Item, {
          className: g.tabBarItem,
          id: n,
          "aria-label": t,
          children: (0, l.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: t
          })
        }, n)
      })
    }), (0, l.jsx)(b, {
      items: h,
      section: N,
      subsection: T,
      user: u,
      currentUser: m,
      displayProfile: p,
      guildId: f,
      onClose: I
    })]
  })
}