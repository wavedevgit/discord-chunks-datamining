/** Chunk was on 29679 **/
/** chunk id: 202905, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  r: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk580685 = require("./580685.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk944163 = require("./944163.js"),
  Chunk65361 = require("./65361.js"),
  Chunk798476 = require("./798476.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk548522 = require("./548522.jsx"),
  Chunk651390 = require("./651390.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk928913 = require("./928913.js");
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
  visibility: Chunk580685.k.RESTRICTED,
  brandColorPrimary: null,
  tag: null,
  badge: null,
  badgeHash: null,
  badgeColorPrimary: null,
  badgeColorSecondary: null
};

function v(e) {
  let {
    pendingFields: t
  } = e, {
    guild: n,
    guildProfile: v
  } = (0, a.cj)([g.Z], () => ({
    guild: g.Z.getGuild(),
    guildProfile: g.Z.getGuildProfile()
  })), _ = null == n ? true : n.id, O = (0, a.e7)([c.Z], () => c.Z.get(_)), {
    fetchGuildProfile: y
  } = (0, d.u)(_), C = (null == v ? true : v.visibility) == null || !l.Y.VISIBLE.has(null == v ? true : v.visibility), N = (null == v ? true : v.visibility) === l.k.PUBLIC_WITH_RECRUITMENT;
  i.useEffect(() => {
    null != _ && y()
  }, [_, y]);
  let E = i.useMemo(() => null == n || null == v ? j : v, [n, v]),
    I = i.useCallback(() => {
      (null == n ? true : n.id) != null && (N ? m.Z.updateGuildProfile(n.id, {
        visibility: l.k.PUBLIC
      }) : m.Z.updateGuildProfile(n.id, {
        visibility: l.k.PUBLIC_WITH_RECRUITMENT
      }))
    }, [null == n ? true : n.id, N]),
    S = i.useCallback(() => {
      m.Z.setSection(h.pNK.PROFILE)
    }, []);
  if (null == n) return null;
  let T = null != t ? t : null == O ? true : O.formFields;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.X6q, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: x.intl.string(x.t.AHJddH)
    }), (0, r.jsx)(s.xvT, {
      tag: "p",
      variant: "text-sm/medium",
      color: "text-secondary",
      className: b.applicationBody,
      children: x.intl.string(x.t.Z7TCtb)
    }), (0, r.jsx)(f.c, {
      guildId: n.id
    }), (0, r.jsx)("div", {
      className: b.form,
      children: null != T ? (0, r.jsx)(p.y, {
        guild: n,
        formFields: T
      }) : (0, r.jsx)(o.$jN, {})
    }), (0, r.jsx)("div", {
      className: b.divider
    }), (0, r.jsxs)(o.hjN, {
      className: b.twoColumnContainer,
      children: [(0, r.jsxs)("div", {
        className: b.column,
        children: [(0, r.jsx)(o.j7V, {
          onChange: I,
          value: N,
          hideBorder: true,
          disabled: C,
          children: x.intl.string(x.t["N/0239"])
        }), (0, r.jsx)(s.xvT, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: x.intl.string(x.t["3TSZYG"])
        }), C && (0, r.jsx)(s.xvT, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: x.intl.format(x.t.Bk0VOj, {
            profileLink: (e, t) => (0, r.jsx)(o.eee, {
              onClick: S,
              children: e
            }, t)
          })
        })]
      }), (0, r.jsx)("div", {
        className: b.column,
        children: (0, r.jsxs)("div", {
          className: b.previewWrapper,
          children: [(0, r.jsx)("div", {
            className: b.gradient
          }), (0, r.jsx)(u.ZP, {
            className: b.preview,
            profile: E,
            CTAOverride: (0, r.jsx)(s.zxk, {
              variant: "active",
              size: "sm",
              text: x.intl.string(x.t["7XdMW1"]),
              fullWidth: true
            }),
            disableGuildNameClick: true
          })]
        })
      })]
    })]
  })
}