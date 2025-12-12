/** Chunk was on 93979 **/
/** chunk id: 740628, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    currentUser: o,
    displayProfile: r,
    guildId: s,
    channelId: a,
    onClose: h
  } = e;
  return n === x.oh.ACTIVITY ? (0, l.jsx)(u.Z, {
    user: i,
    currentUser: o,
    guildId: s,
    onClose: h
  }) : n === x.oh.MUTUAL_FRIENDS ? (0, l.jsx)(f.Z, {
    user: i,
    guildId: s,
    channelId: a,
    onClose: h
  }) : n === x.oh.MUTUAL_GUILDS ? (0, l.jsx)(p.Z, {
    user: i,
    onClose: h
  }) : n === x.oh.BOT_DATA_ACCESS ? (0, l.jsx)(c.Z, {
    user: i
  }) : n === x.oh.BOT_INFO ? (0, l.jsx)(d.Z, {
    user: i,
    currentUser: o,
    displayProfile: r,
    guildId: s,
    subsection: t,
    onClose: h
  }) : (0, l.jsx)(m.Z, {
    user: i,
    currentUser: o,
    displayProfile: r,
    subsection: t,
    onClose: h
  })
}

function b(e) {
  var n, t, c;
  let {
    user: d,
    currentUser: u,
    displayProfile: m,
    guildId: f,
    items: p,
    initialSection: b = x.oh.USER_INFO,
    initialSubsection: I,
    onClose: y
  } = e, {
    trackUserProfileAction: Z
  } = (0, a.KZ)(), _ = (0, o.e7)([s.Z], () => s.Z.hidePersonalInformation), [{
    section: O,
    subsection: N
  }, T] = i.useState({
    section: null != (c = null == (n = p.find(e => {
      let {
        section: n
      } = e;
      return n === b
    })) ? true : n.section) ? c : null == (t = p[0]) ? true : t.section,
    subsection: I
  });
  i.useEffect(() => {
    null == p.find(e => e.section === O) && T({
      section: p[0].section,
      subsection: true
    })
  }, [p, O]);
  let A = i.useCallback(e => {
    Z({
      action: "PRESS_SECTION",
      section: e
    }), T({
      section: e,
      subsection: true
    })
  }, [Z, T]);
  return _ ? (0, l.jsx)("div", {
    className: j.container,
    children: (0, l.jsxs)("div", {
      className: v.empty,
      children: [(0, l.jsx)("div", {
        className: v.emptyIconStreamerMode
      }), (0, l.jsx)("div", {
        className: v.emptyText,
        children: h.intl.string(h.t.Br1ls3)
      })]
    })
  }) : (0, l.jsxs)("div", {
    className: j.container,
    children: [(0, l.jsx)(r.njP, {
      className: j.tabBar,
      type: "top",
      selectedItem: O,
      onItemSelect: A,
      children: p.map(e => {
        let {
          section: n,
          text: t
        } = e;
        return (0, l.jsx)(r.njP.Item, {
          className: j.tabBarItem,
          id: n,
          "aria-label": t,
          children: (0, l.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: t
          })
        }, n)
      })
    }), (0, l.jsx)(g, {
      items: p,
      section: O,
      subsection: N,
      user: d,
      currentUser: u,
      displayProfile: m,
      guildId: f,
      onClose: y
    })]
  })
}