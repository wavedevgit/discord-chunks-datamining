/** Chunk was on 31553 **/
/** chunk id: 740628, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
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
    user: i,
    currentUser: r,
    displayProfile: o,
    guildId: s,
    channelId: a,
    onClose: x
  } = e;
  return n === h.oh.ACTIVITY ? (0, l.jsx)(u.Z, {
    user: i,
    currentUser: r,
    guildId: s,
    onClose: x
  }) : n === h.oh.MUTUAL_FRIENDS ? (0, l.jsx)(p.Z, {
    user: i,
    guildId: s,
    channelId: a,
    onClose: x
  }) : n === h.oh.MUTUAL_GUILDS ? (0, l.jsx)(f.Z, {
    user: i,
    onClose: x
  }) : n === h.oh.BOT_DATA_ACCESS ? (0, l.jsx)(c.Z, {
    user: i
  }) : n === h.oh.BOT_INFO ? (0, l.jsx)(d.Z, {
    user: i,
    currentUser: r,
    displayProfile: o,
    guildId: s,
    subsection: t,
    onClose: x
  }) : (0, l.jsx)(m.Z, {
    user: i,
    currentUser: r,
    displayProfile: o,
    subsection: t,
    onClose: x
  })
}

function b(e) {
  var n, t, c;
  let {
    user: d,
    currentUser: u,
    displayProfile: m,
    guildId: p,
    items: f,
    initialSection: b = h.oh.USER_INFO,
    initialSubsection: I,
    onClose: y
  } = e, {
    trackUserProfileAction: Z
  } = (0, a.KZ)(), O = (0, r.e7)([s.Z], () => s.Z.hidePersonalInformation), [{
    section: N,
    subsection: P
  }, T] = i.useState({
    section: null != (c = null == (n = f.find(e => {
      let {
        section: n
      } = e;
      return n === b
    })) ? true : n.section) ? c : null == (t = f[0]) ? true : t.section,
    subsection: I
  });
  i.useEffect(() => {
    null == f.find(e => e.section === N) && T({
      section: f[0].section,
      subsection: true
    })
  }, [f, N]);
  let A = i.useCallback(e => {
    Z({
      action: "PRESS_SECTION",
      section: e
    }), T({
      section: e,
      subsection: true
    })
  }, [Z, T]);
  return O ? (0, l.jsx)("div", {
    className: v.container,
    children: (0, l.jsxs)("div", {
      className: j.empty,
      children: [(0, l.jsx)("div", {
        className: j.emptyIconStreamerMode
      }), (0, l.jsx)("div", {
        className: j.emptyText,
        children: x.intl.string(x.t.Br1ls7)
      })]
    })
  }) : (0, l.jsxs)("div", {
    className: v.container,
    children: [(0, l.jsx)(o.njP, {
      className: v.tabBar,
      type: "top",
      selectedItem: N,
      onItemSelect: A,
      children: f.map(e => {
        let {
          section: n,
          text: t
        } = e;
        return (0, l.jsx)(o.njP.Item, {
          className: v.tabBarItem,
          id: n,
          "aria-label": t,
          children: (0, l.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: t
          })
        }, n)
      })
    }), (0, l.jsx)(g, {
      items: f,
      section: N,
      subsection: P,
      user: d,
      currentUser: u,
      displayProfile: m,
      guildId: p,
      onClose: y
    })]
  })
}