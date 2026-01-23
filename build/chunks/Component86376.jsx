/** Chunk was on web.js **/
/** chunk id: 86376, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk986268 = require("./986268.jsx"),
  Chunk345942 = require("./345942.js"),
  Chunk773669 = require("./773669.js"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk860689 = require("./860689.js"),
  Chunk661191 = require("./661191.js"),
  Chunk107123 = require("./107123.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk101702 = require("./101702.js");

function E(e) {
  let {
    profile: t,
    disableGuildNameClick: n
  } = e, l = t.id, u = (0, a.bG)([f.Ay, d.default], () => {
    var e;
    return (null == (e = f.Ay.getMember(l, d.default.getId())) ? true : e.joinedAt) != null
  }, [l]), p = i.useCallback(e => {
    u && (e.stopPropagation(), (0, c.u)(t.id))
  }, [u, t.id]);
  return !u || n ? (0, r.jsx)(s.m, {
    text: t.name,
    overflowOnly: true,
    children: (0, r.jsx)(o.Heading, {
      className: g.J5,
      variant: "heading-md/semibold",
      color: "text-strong",
      children: t.name
    })
  }) : (0, r.jsx)(o.DUT, {
    className: g.YS,
    onClick: p,
    children: (0, r.jsx)(s.m, {
      text: t.name,
      overflowOnly: true,
      children: (0, r.jsx)(o.Heading, {
        className: g.J5,
        variant: "heading-md/semibold",
        color: "text-strong",
        children: t.name
      })
    })
  })
}

function y(e) {
  let {
    profile: t,
    disableGuildNameClick: n
  } = e, s = (0, a.bG)([u.default], () => u.default.locale), c = (0, h.P)(_.default.extractTimestamp(t.id), s), d = i.useMemo(() => {
    let e = (0, p.b9)(t);
    return (0, r.jsx)(l.A, {
      guild: e,
      isBannerVisible: false
    })
  }, [t]);
  return (0, r.jsxs)("div", {
    className: g.wx,
    children: [(0, r.jsxs)("div", {
      className: g.VW,
      children: [(0, r.jsx)(E, {
        profile: t,
        disableGuildNameClick: n
      }), d]
    }), (0, r.jsxs)("div", {
      className: g.ol,
      children: [(0, r.jsxs)("div", {
        className: g.Kl,
        children: [(0, r.jsx)("div", {
          className: g.JX
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: m.intl.format(m.t["LC+S+m"], {
            membersOnline: t.onlineCount
          })
        })]
      }), (0, r.jsxs)("div", {
        className: g.Kl,
        children: [(0, r.jsx)("div", {
          className: g.Om
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: m.intl.format(m.t.zRl6XR, {
            count: t.memberCount
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: g.b5,
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: m.intl.format(m.t.zb2Q56, {
          createdAtDate: c
        })
      })
    })]
  })
}