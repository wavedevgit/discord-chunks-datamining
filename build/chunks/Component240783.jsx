/** Chunk was on 64228 **/
/** chunk id: 240783, original params: e,t,n (module,exports,require) **/
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
  }) : t === A.RP.MUTUAL_FRIENDS ? (0, l.jsx)(m.A, {
    user: n,
    guildId: s,
    channelId: o,
    onClose: a
  }) : t === A.RP.MUTUAL_GUILDS ? (0, l.jsx)(f.A, {
    user: n,
    onClose: a
  }) : t === A.RP.BOT_DATA_ACCESS ? (0, l.jsx)(c.A, {
    user: n
  }) : t === A.RP.BOT_INFO ? (0, l.jsx)(d.A, {
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

function v(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: c,
    guildId: d,
    items: u,
    initialSection: p = A.RP.USER_INFO,
    onClose: m
  } = e, {
    trackUserProfileAction: f
  } = (0, a.NJ)(), v = (0, r.bG)([o.A], () => o.A.hidePersonalInformation), [b, I] = i.useState(() => {
    var e, t, n;
    return null != (e = null == (t = u.find(e => {
      let {
        section: t
      } = e;
      return t === p
    })) ? true : t.section) ? e : null == (n = u[0]) ? true : n.section
  });
  i.useEffect(() => {
    null == u.find(e => e.section === b) && I(u[0].section)
  }, [u, b]);
  let y = i.useCallback(e => {
    f({
      action: "PRESS_SECTION",
      section: e
    }), I(e)
  }, [f]);
  return v ? (0, l.jsx)("div", {
    className: h.kL,
    children: (0, l.jsxs)("div", {
      className: j.Ie,
      children: [(0, l.jsx)("div", {
        className: j.hB
      }), (0, l.jsx)("div", {
        className: j.BI,
        children: x.intl.string(x.t.Br1ls3)
      })]
    })
  }) : (0, l.jsxs)("div", {
    className: h.kL,
    children: [(0, l.jsx)(s.VQ0, {
      className: h.$H,
      type: "top",
      selectedItem: b,
      onItemSelect: y,
      children: u.map(e => {
        let {
          section: t,
          text: n
        } = e;
        return (0, l.jsx)(s.VQ0.Item, {
          className: h.YU,
          id: t,
          "aria-label": n,
          children: (0, l.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: n
          })
        }, t)
      })
    }), (0, l.jsx)(g, {
      items: u,
      section: b,
      user: t,
      currentUser: n,
      displayProfile: c,
      guildId: d,
      onClose: m
    })]
  })
}