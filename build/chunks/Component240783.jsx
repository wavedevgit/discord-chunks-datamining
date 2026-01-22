/** Chunk was on 64228 **/
/** chunk id: 240783, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk351906 = require("./351906.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk382120 = require("./382120.jsx"),
  Chunk128490 = require("./128490.jsx"),
  Chunk539548 = require("./539548.jsx"),
  Chunk412775 = require("./412775.jsx"),
  Chunk86404 = require("./86404.jsx"),
  Chunk738759 = require("./738759.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk781425 = require("./781425.js"),
  Chunk368519 = require("./368519.js");

function g(e) {
  let {
    section: l,
    user: t,
    currentUser: i,
    displayProfile: r,
    guildId: s,
    channelId: a,
    onClose: o
  } = e;
  return l === x.RP.ACTIVITY ? (0, n.jsx)(u.A, {
    user: t,
    currentUser: i,
    guildId: s,
    onClose: o
  }) : l === x.RP.MUTUAL_FRIENDS ? (0, n.jsx)(p.A, {
    user: t,
    guildId: s,
    channelId: a,
    onClose: o
  }) : l === x.RP.MUTUAL_GUILDS ? (0, n.jsx)(m.A, {
    user: t,
    onClose: o
  }) : l === x.RP.BOT_DATA_ACCESS ? (0, n.jsx)(d.A, {
    user: t
  }) : l === x.RP.BOT_INFO ? (0, n.jsx)(c.A, {
    user: t,
    displayProfile: r,
    guildId: s,
    onClose: o
  }) : (0, n.jsx)(f.A, {
    user: t,
    displayProfile: r,
    onClose: o
  })
}

function v(e) {
  let {
    user: l,
    currentUser: t,
    displayProfile: d,
    guildId: c,
    items: u,
    initialSection: f = x.RP.USER_INFO,
    onClose: p
  } = e, {
    trackUserProfileAction: m
  } = (0, o.NJ)(), v = (0, r.bG)([a.A], () => a.A.hidePersonalInformation), [b, I] = i.useState(() => {
    var e, l, t;
    return null != (e = null == (l = u.find(e => {
      let {
        section: l
      } = e;
      return l === f
    })) ? true : l.section) ? e : null == (t = u[0]) ? true : t.section
  });
  i.useEffect(() => {
    null == u.find(e => e.section === b) && I(u[0].section)
  }, [u, b]);
  let y = i.useCallback(e => {
    m({
      action: "PRESS_SECTION",
      section: e
    }), I(e)
  }, [m]);
  return v ? (0, n.jsx)("div", {
    className: h.kL,
    children: (0, n.jsxs)("div", {
      className: j.Ie,
      children: [(0, n.jsx)("div", {
        className: j.hB
      }), (0, n.jsx)("div", {
        className: j.BI,
        children: A.intl.string(A.t.Br1ls3)
      })]
    })
  }) : (0, n.jsxs)("div", {
    className: h.kL,
    children: [(0, n.jsx)(s.VQ0, {
      className: h.$H,
      type: "top",
      selectedItem: b,
      onItemSelect: y,
      children: u.map(e => {
        let {
          section: l,
          text: t
        } = e;
        return (0, n.jsx)(s.VQ0.Item, {
          className: h.YU,
          id: l,
          "aria-label": t,
          children: (0, n.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: t
          })
        }, l)
      })
    }), (0, n.jsx)(g, {
      items: u,
      section: b,
      user: l,
      currentUser: t,
      displayProfile: d,
      guildId: c,
      onClose: p
    })]
  })
}