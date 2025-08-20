/** Chunk was on 16811 **/
/** chunk id: 740628, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
    user: o,
    currentUser: l,
    displayProfile: i,
    guildId: c,
    channelId: a,
    onClose: s
  } = e;
  return n === x.oh.ACTIVITY ? (0, r.jsx)(f.Z, {
    user: o,
    currentUser: l,
    displayProfile: i,
    guildId: c,
    onClose: s
  }) : n === x.oh.MUTUAL_FRIENDS ? (0, r.jsx)(p.Z, {
    user: o,
    guildId: c,
    channelId: a,
    onClose: s
  }) : n === x.oh.MUTUAL_GUILDS ? (0, r.jsx)(b.Z, {
    user: o,
    onClose: s
  }) : n === x.oh.BOT_DATA_ACCESS ? (0, r.jsx)(d.Z, {
    user: o
  }) : n === x.oh.BOT_INFO ? (0, r.jsx)(u.Z, {
    user: o,
    currentUser: l,
    displayProfile: i,
    guildId: c,
    subsection: t,
    onClose: s
  }) : (0, r.jsx)(m.Z, {
    user: o,
    currentUser: l,
    displayProfile: i,
    subsection: t,
    onClose: s
  })
}

function _(e) {
  var n, t, d;
  let {
    user: u,
    currentUser: f,
    displayProfile: m,
    guildId: p,
    items: b,
    initialSection: _ = x.oh.USER_INFO,
    initialSubsection: y,
    onClose: I
  } = e, {
    trackUserProfileAction: O
  } = (0, s.KZ)(), P = (0, l.e7)([a.Z], () => a.Z.hidePersonalInformation), [{
    section: Z,
    subsection: T
  }, A] = o.useState({
    section: null != (d = null == (n = b.find(e => {
      let {
        section: n
      } = e;
      return n === _
    })) ? true : n.section) ? d : null == (t = b[0]) ? true : t.section,
    subsection: y
  });
  o.useEffect(() => {
    null == b.find(e => e.section === Z) && A({
      section: b[0].section,
      subsection: true
    })
  }, [b, Z]);
  let N = o.useCallback(e => {
    O({
      action: "PRESS_SECTION",
      section: e
    }), A({
      section: e,
      subsection: true
    })
  }, [O, A]);
  return P ? (0, r.jsx)("div", {
    className: j.container,
    children: (0, r.jsxs)("div", {
      className: h.empty,
      children: [(0, r.jsx)("div", {
        className: h.emptyIconStreamerMode
      }), (0, r.jsx)("div", {
        className: h.emptyText,
        children: g.intl.string(g.t.Br1ls7)
      })]
    })
  }) : (0, r.jsxs)("div", {
    className: j.container,
    children: [(0, r.jsx)(i.n, {
      className: j.tabBar,
      type: "top",
      selectedItem: Z,
      onItemSelect: N,
      children: b.map(e => {
        let {
          section: n,
          text: t
        } = e;
        return (0, r.jsx)(i.n.Item, {
          className: j.tabBarItem,
          id: n,
          "aria-label": t,
          children: (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: t
          })
        }, n)
      })
    }), (0, r.jsx)(v, {
      items: b,
      section: Z,
      subsection: T,
      user: u,
      currentUser: f,
      displayProfile: m,
      guildId: p,
      onClose: I
    })]
  })
}