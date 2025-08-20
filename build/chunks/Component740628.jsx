/** Chunk was on 75283 **/
/** chunk id: 740628, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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

function j(e) {
  let {
    section: t,
    subsection: n,
    user: o,
    currentUser: i,
    displayProfile: l,
    guildId: a,
    channelId: c,
    onClose: s
  } = e;
  return t === g.oh.ACTIVITY ? (0, r.jsx)(f.Z, {
    user: o,
    currentUser: i,
    displayProfile: l,
    guildId: a,
    onClose: s
  }) : t === g.oh.MUTUAL_FRIENDS ? (0, r.jsx)(m.Z, {
    user: o,
    guildId: a,
    channelId: c,
    onClose: s
  }) : t === g.oh.MUTUAL_GUILDS ? (0, r.jsx)(b.Z, {
    user: o,
    onClose: s
  }) : t === g.oh.BOT_DATA_ACCESS ? (0, r.jsx)(d.Z, {
    user: o
  }) : t === g.oh.BOT_INFO ? (0, r.jsx)(u.Z, {
    user: o,
    currentUser: i,
    displayProfile: l,
    guildId: a,
    subsection: n,
    onClose: s
  }) : (0, r.jsx)(p.Z, {
    user: o,
    currentUser: i,
    displayProfile: l,
    subsection: n,
    onClose: s
  })
}

function v(e) {
  var t, n, d;
  let {
    user: u,
    currentUser: f,
    displayProfile: p,
    guildId: m,
    items: b,
    initialSection: v = g.oh.USER_INFO,
    initialSubsection: y,
    onClose: I
  } = e, {
    trackUserProfileAction: O
  } = (0, s.KZ)(), Z = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation), [{
    section: P,
    subsection: T
  }, C] = o.useState({
    section: null != (d = null == (t = b.find(e => {
      let {
        section: t
      } = e;
      return t === v
    })) ? true : t.section) ? d : null == (n = b[0]) ? true : n.section,
    subsection: y
  });
  o.useEffect(() => {
    null == b.find(e => e.section === P) && C({
      section: b[0].section,
      subsection: true
    })
  }, [b, P]);
  let A = o.useCallback(e => {
    O({
      action: "PRESS_SECTION",
      section: e
    }), C({
      section: e,
      subsection: true
    })
  }, [O, C]);
  return Z ? (0, r.jsx)("div", {
    className: _.container,
    children: (0, r.jsxs)("div", {
      className: x.empty,
      children: [(0, r.jsx)("div", {
        className: x.emptyIconStreamerMode
      }), (0, r.jsx)("div", {
        className: x.emptyText,
        children: h.intl.string(h.t.Br1ls7)
      })]
    })
  }) : (0, r.jsxs)("div", {
    className: _.container,
    children: [(0, r.jsx)(l.n, {
      className: _.tabBar,
      type: "top",
      selectedItem: P,
      onItemSelect: A,
      children: b.map(e => {
        let {
          section: t,
          text: n
        } = e;
        return (0, r.jsx)(l.n.Item, {
          className: _.tabBarItem,
          id: t,
          "aria-label": n,
          children: (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: n
          })
        }, t)
      })
    }), (0, r.jsx)(j, {
      items: b,
      section: P,
      subsection: T,
      user: u,
      currentUser: f,
      displayProfile: p,
      guildId: m,
      onClose: I
    })]
  })
}