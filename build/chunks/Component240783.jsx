/** Chunk was on 63974 **/
/** chunk id: 240783, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function h(e) {
  let {
    section: t,
    user: n,
    currentUser: i,
    displayProfile: r,
    guildId: s,
    channelId: o,
    onClose: a
  } = e;
  return t === A.RP.ACTIVITY ? (0, l.jsx)(u.A, {
    user: n,
    currentUser: i,
    guildId: s,
    onClose: a
  }) : t === A.RP.MUTUAL_FRIENDS ? (0, l.jsx)(f.A, {
    user: n,
    guildId: s,
    channelId: o,
    onClose: a
  }) : t === A.RP.MUTUAL_GUILDS ? (0, l.jsx)(m.A, {
    user: n,
    onClose: a
  }) : t === A.RP.BOT_DATA_ACCESS ? (0, l.jsx)(d.A, {
    user: n
  }) : t === A.RP.BOT_INFO ? (0, l.jsx)(c.A, {
    user: n,
    displayProfile: r,
    guildId: s,
    onClose: a
  }) : (0, l.jsx)(p.A, {
    user: n,
    displayProfile: r,
    onClose: a
  })
}

function b(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: d,
    guildId: c,
    items: u,
    initialSection: p = A.RP.USER_INFO,
    onClose: f
  } = e, {
    trackUserProfileAction: m
  } = (0, a.NJ)(), b = (0, r.bG)([o.A], () => o.A.hidePersonalInformation), [v, I] = i.useState(() => {
    var e, t, n;
    return null != (e = null == (t = u.find(e => {
      let {
        section: t
      } = e;
      return t === p
    })) ? true : t.section) ? e : null == (n = u[0]) ? true : n.section
  });
  i.useEffect(() => {
    null == u.find(e => e.section === v) && I(u[0].section)
  }, [u, v]);
  let y = i.useCallback(e => {
    m({
      action: "PRESS_SECTION",
      section: e
    }), I(e)
  }, [m]);
  return b ? (0, l.jsx)("div", {
    className: j.kL,
    children: (0, l.jsxs)("div", {
      className: g.Ie,
      children: [(0, l.jsx)("div", {
        className: g.hB
      }), (0, l.jsx)("div", {
        className: g.BI,
        children: x.intl.string(x.t.Br1ls3)
      })]
    })
  }) : (0, l.jsxs)("div", {
    className: j.kL,
    children: [(0, l.jsx)(s.VQ0, {
      className: j.$H,
      type: "top",
      selectedItem: v,
      onItemSelect: y,
      children: u.map(e => {
        let {
          section: t,
          text: n
        } = e;
        return (0, l.jsx)(s.VQ0.Item, {
          className: j.YU,
          id: t,
          "aria-label": n,
          children: (0, l.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: n
          })
        }, t)
      })
    }), (0, l.jsx)(h, {
      items: u,
      section: v,
      user: t,
      currentUser: n,
      displayProfile: d,
      guildId: c,
      onClose: f
    })]
  })
}