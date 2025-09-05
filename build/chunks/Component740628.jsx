/** Chunk was on 72164 **/
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

function v(e) {
  let {
    section: n,
    subsection: t,
    user: l,
    currentUser: r,
    displayProfile: i,
    guildId: c,
    channelId: a,
    onClose: s
  } = e;
  return n === b.oh.ACTIVITY ? (0, o.jsx)(f.Z, {
    user: l,
    currentUser: r,
    guildId: c,
    onClose: s
  }) : n === b.oh.MUTUAL_FRIENDS ? (0, o.jsx)(p.Z, {
    user: l,
    guildId: c,
    channelId: a,
    onClose: s
  }) : n === b.oh.MUTUAL_GUILDS ? (0, o.jsx)(x.Z, {
    user: l,
    onClose: s
  }) : n === b.oh.BOT_DATA_ACCESS ? (0, o.jsx)(d.Z, {
    user: l
  }) : n === b.oh.BOT_INFO ? (0, o.jsx)(u.Z, {
    user: l,
    currentUser: r,
    displayProfile: i,
    guildId: c,
    subsection: t,
    onClose: s
  }) : (0, o.jsx)(m.Z, {
    user: l,
    currentUser: r,
    displayProfile: i,
    subsection: t,
    onClose: s
  })
}

function y(e) {
  var n, t, d;
  let {
    user: u,
    currentUser: f,
    displayProfile: m,
    guildId: p,
    items: x,
    initialSection: y = b.oh.USER_INFO,
    initialSubsection: _,
    onClose: I
  } = e, {
    trackUserProfileAction: O
  } = (0, s.KZ)(), Z = (0, r.e7)([a.Z], () => a.Z.hidePersonalInformation), [{
    section: P,
    subsection: T
  }, N] = l.useState({
    section: null != (d = null == (n = x.find(e => {
      let {
        section: n
      } = e;
      return n === y
    })) ? true : n.section) ? d : null == (t = x[0]) ? true : t.section,
    subsection: _
  });
  l.useEffect(() => {
    null == x.find(e => e.section === P) && N({
      section: x[0].section,
      subsection: true
    })
  }, [x, P]);
  let A = l.useCallback(e => {
    O({
      action: "PRESS_SECTION",
      section: e
    }), N({
      section: e,
      subsection: true
    })
  }, [O, N]);
  return Z ? (0, o.jsx)("div", {
    className: j.container,
    children: (0, o.jsxs)("div", {
      className: g.empty,
      children: [(0, o.jsx)("div", {
        className: g.emptyIconStreamerMode
      }), (0, o.jsx)("div", {
        className: g.emptyText,
        children: h.intl.string(h.t.Br1ls7)
      })]
    })
  }) : (0, o.jsxs)("div", {
    className: j.container,
    children: [(0, o.jsx)(i.n, {
      className: j.tabBar,
      type: "top",
      selectedItem: P,
      onItemSelect: A,
      children: x.map(e => {
        let {
          section: n,
          text: t
        } = e;
        return (0, o.jsx)(i.n.Item, {
          className: j.tabBarItem,
          id: n,
          "aria-label": t,
          children: (0, o.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: t
          })
        }, n)
      })
    }), (0, o.jsx)(v, {
      items: x,
      section: P,
      subsection: T,
      user: u,
      currentUser: f,
      displayProfile: m,
      guildId: p,
      onClose: I
    })]
  })
}