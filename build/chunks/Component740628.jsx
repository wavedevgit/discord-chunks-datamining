/** Chunk was on 82008 **/
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
    currentUser: o,
    displayProfile: i,
    guildId: c,
    channelId: s,
    onClose: a
  } = e;
  return n === x.oh.ACTIVITY ? (0, r.jsx)(f.Z, {
    user: l,
    currentUser: o,
    guildId: c,
    onClose: a
  }) : n === x.oh.MUTUAL_FRIENDS ? (0, r.jsx)(p.Z, {
    user: l,
    guildId: c,
    channelId: s,
    onClose: a
  }) : n === x.oh.MUTUAL_GUILDS ? (0, r.jsx)(h.Z, {
    user: l,
    onClose: a
  }) : n === x.oh.BOT_DATA_ACCESS ? (0, r.jsx)(d.Z, {
    user: l
  }) : n === x.oh.BOT_INFO ? (0, r.jsx)(u.Z, {
    user: l,
    currentUser: o,
    displayProfile: i,
    guildId: c,
    subsection: t,
    onClose: a
  }) : (0, r.jsx)(m.Z, {
    user: l,
    currentUser: o,
    displayProfile: i,
    subsection: t,
    onClose: a
  })
}

function y(e) {
  var n, t, d;
  let {
    user: u,
    currentUser: f,
    displayProfile: m,
    guildId: p,
    items: h,
    initialSection: y = x.oh.USER_INFO,
    initialSubsection: O,
    onClose: I
  } = e, {
    trackUserProfileAction: _
  } = (0, a.KZ)(), Z = (0, o.e7)([s.Z], () => s.Z.hidePersonalInformation), [{
    section: P,
    subsection: T
  }, N] = l.useState({
    section: null != (d = null == (n = h.find(e => {
      let {
        section: n
      } = e;
      return n === y
    })) ? true : n.section) ? d : null == (t = h[0]) ? true : t.section,
    subsection: O
  });
  l.useEffect(() => {
    null == h.find(e => e.section === P) && N({
      section: h[0].section,
      subsection: true
    })
  }, [h, P]);
  let A = l.useCallback(e => {
    _({
      action: "PRESS_SECTION",
      section: e
    }), N({
      section: e,
      subsection: true
    })
  }, [_, N]);
  return Z ? (0, r.jsx)("div", {
    className: g.container,
    children: (0, r.jsxs)("div", {
      className: j.empty,
      children: [(0, r.jsx)("div", {
        className: j.emptyIconStreamerMode
      }), (0, r.jsx)("div", {
        className: j.emptyText,
        children: b.intl.string(b.t.Br1ls7)
      })]
    })
  }) : (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(i.n, {
      className: g.tabBar,
      type: "top",
      selectedItem: P,
      onItemSelect: A,
      children: h.map(e => {
        let {
          section: n,
          text: t
        } = e;
        return (0, r.jsx)(i.n.Item, {
          className: g.tabBarItem,
          id: n,
          "aria-label": t,
          children: (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: t
          })
        }, n)
      })
    }), (0, r.jsx)(v, {
      items: h,
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