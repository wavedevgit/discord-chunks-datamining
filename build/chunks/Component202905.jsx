/** Chunk was on 384 **/
/** chunk id: 202905, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  r: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk556955 = require("./556955.js");
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
  })), v = null == n ? true : n.id, O = (0, a.e7)([c.Z], () => c.Z.get(v)), {
    fetchGuildProfile: C
  } = (0, u.u)(v), y = (null == _ ? true : _.visibility) == null || !l.Y.VISIBLE.has(null == _ ? true : _.visibility), N = (null == _ ? true : _.visibility) === l.k.PUBLIC_WITH_RECRUITMENT;
  i.useEffect(() => {
    null != v && C()
  }, [v, C]);
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
  let T = null != t ? t : null == O ? true : O.formFields;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.X6q, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: x.intl.string(x.t.AHJddL)
    }), (0, r.jsx)(s.xvT, {
      tag: "p",
      variant: "text-sm/medium",
      color: "text-subtle",
      className: b.applicationBody,
      children: x.intl.string(x.t.Z7TCtd)
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
    }), (0, r.jsxs)("div", {
      className: b.twoColumnContainer,
      children: [(0, r.jsxs)("div", {
        className: b.column,
        children: [(0, r.jsx)(o.rsf, {
          label: x.intl.string(x.t["N/0232"]),
          checked: N,
          onChange: I,
          disabled: y
        }), (0, r.jsx)(s.xvT, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: x.intl.string(x.t["3TSZYK"])
        }), y && (0, r.jsx)(s.xvT, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: x.intl.format(x.t.Bk0VOi, {
            profileLink: (e, t) => (0, r.jsx)(o.Anchor, {
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
          }), (0, r.jsx)(d.ZP, {
            className: b.preview,
            profile: E,
            CTAOverride: (0, r.jsx)(s.zxk, {
              variant: "active",
              size: "sm",
              text: x.intl.string(x.t["7XdMW2"]),
              fullWidth: true
            }),
            disableGuildNameClick: true
          })]
        })
      })]
    })]
  })
}