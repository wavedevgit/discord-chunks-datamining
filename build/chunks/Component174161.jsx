/** Chunk was on web.js **/
/** chunk id: 174161, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk358555 = require("./358555.jsx"),
  Chunk769654 = require("./769654.js"),
  Chunk706454 = require("./706454.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk411198 = require("./411198.js"),
  Chunk709054 = require("./709054.js"),
  Chunk997431 = require("./997431.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk212229 = require("./212229.js");

function E(e) {
  let {
    profile: t,
    disableGuildNameClick: n
  } = e, l = t.id, u = (0, o.e7)([f.ZP, d.default], () => {
    var e;
    return (null == (e = f.ZP.getMember(l, d.default.getId())) ? true : e.joinedAt) != null
  }, [l]), p = i.useCallback(e => {
    u && (e.stopPropagation(), (0, c.X)(t.id))
  }, [u, t.id]);
  return !u || n ? (0, r.jsx)(a.u, {
    text: t.name,
    overflowOnly: true,
    children: (0, r.jsx)(s.Heading, {
      className: g.guildName,
      variant: "heading-md/semibold",
      color: "text-strong",
      children: t.name
    })
  }) : (0, r.jsx)(s.P3F, {
    className: g.guildNameContainer,
    onClick: p,
    children: (0, r.jsx)(a.u, {
      text: t.name,
      overflowOnly: true,
      children: (0, r.jsx)(s.Heading, {
        className: g.guildName,
        variant: "heading-md/semibold",
        color: "text-strong",
        children: t.name
      })
    })
  })
}

function b(e) {
  let {
    profile: t,
    disableGuildNameClick: n
  } = e, a = (0, o.e7)([u.default], () => u.default.locale), c = (0, m.M)(_.default.extractTimestamp(t.id), a), d = i.useMemo(() => {
    let e = (0, p.$5)(t);
    return (0, r.jsx)(l.Z, {
      guild: e,
      isBannerVisible: false
    })
  }, [t]);
  return (0, r.jsxs)("div", {
    className: g.header,
    children: [(0, r.jsxs)("div", {
      className: g.nameContainer,
      children: [(0, r.jsx)(E, {
        profile: t,
        disableGuildNameClick: n
      }), d]
    }), (0, r.jsxs)("div", {
      className: g.members,
      children: [(0, r.jsxs)("div", {
        className: g.memberCount,
        children: [(0, r.jsx)("div", {
          className: g.dotOnline
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: h.intl.format(h.t["LC+S+m"], {
            membersOnline: t.onlineCount
          })
        })]
      }), (0, r.jsxs)("div", {
        className: g.memberCount,
        children: [(0, r.jsx)("div", {
          className: g.dot
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: h.intl.format(h.t.zRl6XR, {
            count: t.memberCount
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: g.established,
      children: (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: h.intl.format(h.t.zb2Q56, {
          createdAtDate: c
        })
      })
    })]
  })
}