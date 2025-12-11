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
    subsection: t,
    user: i,
    currentUser: o,
    displayProfile: r,
    guildId: a,
    channelId: c,
    onClose: h
  } = e;
  return n === x.oh.ACTIVITY ? (0, l.jsx)(u.Z, {
    user: i,
    currentUser: o,
    guildId: a,
    onClose: h
  }) : n === x.oh.MUTUAL_FRIENDS ? (0, l.jsx)(m.Z, {
    user: i,
    guildId: a,
    channelId: c,
    onClose: h
  }) : n === x.oh.MUTUAL_GUILDS ? (0, l.jsx)(p.Z, {
    user: i,
    onClose: h
  }) : n === x.oh.BOT_DATA_ACCESS ? (0, l.jsx)(s.Z, {
    user: i
  }) : n === x.oh.BOT_INFO ? (0, l.jsx)(d.Z, {
    user: i,
    currentUser: o,
    displayProfile: r,
    guildId: a,
    subsection: t,
    onClose: h
  }) : (0, l.jsx)(f.Z, {
    user: i,
    currentUser: o,
    displayProfile: r,
    subsection: t,
    onClose: h
  })
}

function g(e) {
  var n, t, s;
  let {
    user: d,
    currentUser: u,
    displayProfile: f,
    guildId: m,
    items: p,
    initialSection: g = x.oh.USER_INFO,
    initialSubsection: I,
    onClose: y
  } = e, {
    trackUserProfileAction: Z
  } = (0, c.KZ)(), O = (0, o.e7)([a.Z], () => a.Z.hidePersonalInformation), [{
    section: N,
    subsection: T
  }, A] = i.useState({
    section: null != (s = null == (n = p.find(e => {
      let {
        section: n
      } = e;
      return n === g
    })) ? true : n.section) ? s : null == (t = p[0]) ? true : t.section,
    subsection: I
  });
  i.useEffect(() => {
    null == p.find(e => e.section === N) && A({
      section: p[0].section,
      subsection: true
    })
  }, [p, N]);
  let P = i.useCallback(e => {
    Z({
      action: "PRESS_SECTION",
      section: e
    }), A({
      section: e,
      subsection: true
    })
  }, [Z, A]);
  return O ? (0, l.jsx)("div", {
    className: v.container,
    children: (0, l.jsxs)("div", {
      className: b.empty,
      children: [(0, l.jsx)("div", {
        className: b.emptyIconStreamerMode
      }), (0, l.jsx)("div", {
        className: b.emptyText,
        children: h.intl.string(h.t.Br1ls3)
      })]
    })
  }) : (0, l.jsxs)("div", {
    className: v.container,
    children: [(0, l.jsx)(r.njP, {
      className: v.tabBar,
      type: "top",
      selectedItem: N,
      onItemSelect: P,
      children: p.map(e => {
        let {
          section: n,
          text: t
        } = e;
        return (0, l.jsx)(r.njP.Item, {
          className: v.tabBarItem,
          id: n,
          "aria-label": t,
          children: (0, l.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: t
          })
        }, n)
      })
    }), (0, l.jsx)(j, {
      items: p,
      section: N,
      subsection: T,
      user: d,
      currentUser: u,
      displayProfile: f,
      guildId: m,
      onClose: y
    })]
  })
}