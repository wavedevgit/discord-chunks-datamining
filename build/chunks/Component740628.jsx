/** Chunk was on 11776 **/
/** chunk id: 740628, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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
  Chunk301150 = require("./301150.js"),
  Chunk923243 = require("./923243.js");

function y(e) {
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
  return t === b.oh.ACTIVITY ? (0, r.jsx)(f.Z, {
    user: l,
    currentUser: i,
    displayProfile: o,
    guildId: a,
    onClose: s
  }) : t === b.oh.MUTUAL_FRIENDS ? (0, r.jsx)(p.Z, {
    user: l,
    guildId: a,
    channelId: c,
    onClose: s
  }) : t === b.oh.MUTUAL_GUILDS ? (0, r.jsx)(g.Z, {
    user: l,
    onClose: s
  }) : t === b.oh.BOT_DATA_ACCESS ? (0, r.jsx)(d.Z, {
    user: l
  }) : t === b.oh.BOT_INFO ? (0, r.jsx)(u.Z, {
    user: l,
    currentUser: i,
    displayProfile: o,
    guildId: a,
    subsection: n,
    onClose: s
  }) : (0, r.jsx)(m.Z, {
    user: l,
    currentUser: i,
    displayProfile: o,
    subsection: n,
    onClose: s
  })
}

function v(e) {
  var t, n, d;
  let {
    user: u,
    currentUser: f,
    displayProfile: m,
    guildId: p,
    items: g,
    initialSection: v = b.oh.USER_INFO,
    initialSubsection: O,
    onClose: _
  } = e, {
    trackUserProfileAction: I
  } = (0, s.KZ)(), P = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation), [{
    section: Z,
    subsection: T
  }, N] = l.useState({
    section: null != (d = null == (t = g.find(e => {
      let {
        section: t
      } = e;
      return t === v
    })) ? true : t.section) ? d : null == (n = g[0]) ? true : n.section,
    subsection: O
  });
  l.useEffect(() => {
    null == g.find(e => e.section === Z) && N({
      section: g[0].section,
      subsection: true
    })
  }, [g, Z]);
  let E = l.useCallback(e => {
    I({
      action: "PRESS_SECTION",
      section: e
    }), N({
      section: e,
      subsection: true
    })
  }, [I, N]);
  return P ? (0, r.jsx)("div", {
    className: x.container,
    children: (0, r.jsxs)("div", {
      className: h.empty,
      children: [(0, r.jsx)("div", {
        className: h.emptyIconStreamerMode
      }), (0, r.jsx)("div", {
        className: h.emptyText,
        children: j.intl.string(j.t.Br1ls7)
      })]
    })
  }) : (0, r.jsxs)("div", {
    className: x.container,
    children: [(0, r.jsx)(o.n, {
      className: x.tabBar,
      type: "top",
      selectedItem: Z,
      onItemSelect: E,
      children: g.map(e => {
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
    }), (0, r.jsx)(y, {
      items: g,
      section: Z,
      subsection: T,
      user: u,
      currentUser: f,
      displayProfile: m,
      guildId: p,
      onClose: _
    })]
  })
}