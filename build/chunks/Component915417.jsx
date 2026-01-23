/** Chunk was on 47841 **/
/** chunk id: 915417, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  g: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk280513 = require("./280513.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk60175 = require("./60175.js"),
  Chunk90084 = require("./90084.js"),
  Chunk42780 = require("./42780.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk583047 = require("./583047.jsx"),
  Chunk501381 = require("./501381.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk5425 = require("./5425.js");
let j = {
  id: "0",
  name: "",
  description: "",
  icon: "",
  customBanner: null,
  onlineCount: 0,
  memberCount: 0,
  traits: [],
  gameApplicationIds: [],
  gameActivity: {},
  visibility: Chunk280513.n.RESTRICTED,
  brandColorPrimary: null,
  tag: null,
  badge: null,
  badgeHash: null,
  badgeColorPrimary: null,
  badgeColorSecondary: null
};

function _(e) {
  let {
    pendingFields: t
  } = e, {
    guild: n,
    guildProfile: _
  } = (0, a.cf)([m.A], () => ({
    guild: m.A.getGuild(),
    guildProfile: m.A.getGuildProfile()
  })), O = null == n ? true : n.id, v = (0, a.bG)([c.A], () => c.A.get(O)), {
    fetchGuildProfile: y
  } = (0, d.u)(O), A = (null == _ ? true : _.visibility) == null || !l.i.VISIBLE.has(null == _ ? true : _.visibility), E = (null == _ ? true : _.visibility) === l.n.PUBLIC_WITH_RECRUITMENT;
  i.useEffect(() => {
    null != O && y()
  }, [O, y]);
  let N = i.useMemo(() => null == n || null == _ ? j : _, [n, _]),
    S = i.useCallback(() => {
      (null == n ? true : n.id) != null && (E ? g.A.updateGuildProfile(n.id, {
        visibility: l.n.PUBLIC
      }) : g.A.updateGuildProfile(n.id, {
        visibility: l.n.PUBLIC_WITH_RECRUITMENT
      }))
    }, [null == n ? true : n.id, E]),
    I = i.useCallback(() => {
      g.A.setSection(b.BEX.PROFILE)
    }, []);
  if (null == n) return null;
  let T = null != t ? t : null == v ? true : v.formFields;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.DZT, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: h.intl.string(h.t.AHJddL)
    }), (0, r.jsx)(s.EYj, {
      tag: "p",
      variant: "text-sm/medium",
      color: "text-subtle",
      className: x.nB,
      children: h.intl.string(h.t.Z7TCtd)
    }), (0, r.jsx)(f.o, {
      guildId: n.id
    }), (0, r.jsx)("div", {
      className: x.Zd,
      children: null != T ? (0, r.jsx)(p.a, {
        guild: n,
        formFields: T
      }) : (0, r.jsx)(o.y$y, {})
    }), (0, r.jsx)("div", {
      className: x.yF
    }), (0, r.jsxs)("div", {
      className: x.Im,
      children: [(0, r.jsxs)("div", {
        className: x.fi,
        children: [(0, r.jsx)(o.dOG, {
          label: h.intl.string(h.t["N/0232"]),
          checked: E,
          onChange: S,
          disabled: A
        }), (0, r.jsx)(s.EYj, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: h.intl.string(h.t["3TSZYK"])
        }), A && (0, r.jsx)(s.EYj, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: h.intl.format(h.t.Bk0VOi, {
            profileLink: (e, t) => (0, r.jsx)(o.MzZ, {
              onClick: I,
              children: e
            }, t)
          })
        })]
      }), (0, r.jsx)("div", {
        className: x.fi,
        children: (0, r.jsxs)("div", {
          className: x.cK,
          children: [(0, r.jsx)("div", {
            className: x.D7
          }), (0, r.jsx)(u.Ay, {
            className: x.VH,
            profile: N,
            CTAOverride: (0, r.jsx)(s.$nd, {
              variant: "active",
              size: "sm",
              text: h.intl.string(h.t["7XdMW2"]),
              fullWidth: true
            }),
            disableGuildNameClick: true
          })]
        })
      })]
    })]
  })
}