/** Chunk was on 29679 **/
/** chunk id: 202905, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  r: () => _
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

function _(e) {
  let {
    pendingFields: t
  } = e, {
    guild: n,
    guildProfile: _
  } = (0, a.cj)([m.Z], () => ({
    guild: m.Z.getGuild(),
    guildProfile: m.Z.getGuildProfile()
  })), v = null == n ? true : n.id, C = (0, a.e7)([c.Z], () => c.Z.get(v)), {
    fetchGuildProfile: O
  } = (0, d.u)(v), y = (null == _ ? true : _.visibility) == null || !l.Y.VISIBLE.has(null == _ ? true : _.visibility), N = (null == _ ? true : _.visibility) === l.k.PUBLIC_WITH_RECRUITMENT;
  i.useEffect(() => {
    null != v && O()
  }, [v, O]);
  let E = i.useMemo(() => null == n || null == _ ? j : _, [n, _]),
    I = i.useCallback(() => {
      (null == n ? true : n.id) != null && (N ? g.Z.updateGuildProfile(n.id, {
        visibility: l.k.PUBLIC
      }) : g.Z.updateGuildProfile(n.id, {
        visibility: l.k.PUBLIC_WITH_RECRUITMENT
      }))
    }, [null == n ? true : n.id, N]),
    S = i.useCallback(() => {
      g.Z.setSection(h.pNK.PROFILE)
    }, []);
  if (null == n) return null;
  let T = null != t ? t : null == C ? true : C.formFields;
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
        children: [(0, r.jsx)(o.rsf, {
          label: x.intl.string(x.t["N/0239"]),
          checked: N,
          onChange: I,
          disabled: y
        }), (0, r.jsx)(s.xvT, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: x.intl.string(x.t["3TSZYG"])
        }), y && (0, r.jsx)(s.xvT, {
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