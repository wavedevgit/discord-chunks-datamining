/** Chunk was on 93979 **/
/** chunk id: 740628, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
  Chunk940640 = require("./940640.js"),
  Chunk9113 = require("./9113.js");

function j(e) {
  let {
    section: n,
    user: t,
    currentUser: i,
    displayProfile: o,
    guildId: r,
    channelId: a,
    onClose: c
  } = e;
  return n === x.oh.ACTIVITY ? (0, l.jsx)(u.Z, {
    user: t,
    currentUser: i,
    guildId: r,
    onClose: c
  }) : n === x.oh.MUTUAL_FRIENDS ? (0, l.jsx)(m.Z, {
    user: t,
    guildId: r,
    channelId: a,
    onClose: c
  }) : n === x.oh.MUTUAL_GUILDS ? (0, l.jsx)(p.Z, {
    user: t,
    onClose: c
  }) : n === x.oh.BOT_DATA_ACCESS ? (0, l.jsx)(s.Z, {
    user: t
  }) : n === x.oh.BOT_INFO ? (0, l.jsx)(d.Z, {
    user: t,
    currentUser: i,
    displayProfile: o,
    guildId: r,
    onClose: c
  }) : (0, l.jsx)(f.Z, {
    user: t,
    currentUser: i,
    displayProfile: o,
    onClose: c
  })
}

function g(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: s,
    guildId: d,
    items: u,
    initialSection: f = x.oh.USER_INFO,
    onClose: m
  } = e, {
    trackUserProfileAction: p
  } = (0, c.KZ)(), g = (0, o.e7)([a.Z], () => a.Z.hidePersonalInformation), [I, y] = i.useState(() => {
    var e, n, t;
    return null != (t = null == (e = u.find(e => {
      let {
        section: n
      } = e;
      return n === f
    })) ? true : e.section) ? t : null == (n = u[0]) ? true : n.section
  });
  i.useEffect(() => {
    null == u.find(e => e.section === I) && y(u[0].section)
  }, [u, I]);
  let Z = i.useCallback(e => {
    p({
      action: "PRESS_SECTION",
      section: e
    }), y(e)
  }, [p]);
  return g ? (0, l.jsx)("div", {
    className: b.container,
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
    className: b.container,
    children: [(0, l.jsx)(r.njP, {
      className: b.tabBar,
      type: "top",
      selectedItem: I,
      onItemSelect: Z,
      children: u.map(e => {
        let {
          section: n,
          text: t
        } = e;
        return (0, l.jsx)(r.njP.Item, {
          className: b.tabBarItem,
          id: n,
          "aria-label": t,
          children: (0, l.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: t
          })
        }, n)
      })
    }), (0, l.jsx)(j, {
      items: u,
      section: I,
      user: n,
      currentUser: t,
      displayProfile: s,
      guildId: d,
      onClose: m
    })]
  })
}