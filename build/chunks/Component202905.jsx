/** Chunk was on 8106 **/
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
  Chunk755721 = require("./755721.js"),
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
let v = {
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
  } = (0, a.cj)([p.Z], () => ({
    guild: p.Z.getGuild(),
    guildProfile: p.Z.getGuildProfile()
  })), O = null == n ? true : n.id, y = (0, a.e7)([d.Z], () => d.Z.get(O)), {
    fetchGuildProfile: C
  } = (0, u.u)(O), N = (null == _ ? true : _.visibility) == null || !l.Y.VISIBLE.has(null == _ ? true : _.visibility), E = (null == _ ? true : _.visibility) === l.k.PUBLIC_WITH_RECRUITMENT;
  i.useEffect(() => {
    null != O && C()
  }, [O, C]);
  let I = i.useMemo(() => null == n || null == _ ? v : _, [n, _]),
    S = i.useCallback(() => {
      (null == n ? true : n.id) != null && (E ? g.Z.updateGuildProfile(n.id, {
        visibility: l.k.PUBLIC
      }) : g.Z.updateGuildProfile(n.id, {
        visibility: l.k.PUBLIC_WITH_RECRUITMENT
      }))
    }, [null == n ? true : n.id, E]),
    T = i.useCallback(() => {
      g.Z.setSection(b.pNK.PROFILE)
    }, []);
  if (null == n) return null;
  let P = null != t ? t : null == y ? true : y.formFields;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.X6q, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: x.intl.string(x.t.AHJddH)
    }), (0, r.jsx)(s.xvT, {
      tag: "p",
      variant: "text-sm/medium",
      color: "text-secondary",
      className: j.applicationBody,
      children: x.intl.string(x.t.Z7TCtb)
    }), (0, r.jsx)(h.c, {
      guildId: n.id
    }), (0, r.jsx)("div", {
      className: j.form,
      children: null != P ? (0, r.jsx)(f.y, {
        guild: n,
        formFields: P
      }) : (0, r.jsx)(c.$jN, {})
    }), (0, r.jsx)("div", {
      className: j.divider
    }), (0, r.jsxs)(c.hjN, {
      className: j.twoColumnContainer,
      children: [(0, r.jsxs)("div", {
        className: j.column,
        children: [(0, r.jsx)(c.j7V, {
          onChange: S,
          value: E,
          hideBorder: true,
          disabled: N,
          children: x.intl.string(x.t["N/0239"])
        }), (0, r.jsx)(s.xvT, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: x.intl.string(x.t["3TSZYG"])
        }), N && (0, r.jsx)(s.xvT, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: x.intl.format(x.t.Bk0VOj, {
            profileLink: (e, t) => (0, r.jsx)(c.eee, {
              onClick: T,
              children: e
            }, t)
          })
        })]
      }), (0, r.jsx)("div", {
        className: j.column,
        children: (0, r.jsxs)("div", {
          className: j.previewWrapper,
          children: [(0, r.jsx)("div", {
            className: j.gradient
          }), (0, r.jsx)(m.ZP, {
            className: j.preview,
            profile: I,
            CTAOverride: (0, r.jsx)(o.zx, {
              className: j.previewButton,
              size: o.zx.Sizes.SMALL,
              fullWidth: true,
              children: x.intl.string(x.t["7XdMW1"])
            }),
            disableGuildNameClick: true
          })]
        })
      })]
    })]
  })
}