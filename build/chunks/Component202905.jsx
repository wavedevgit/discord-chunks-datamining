/** Chunk was on 9536 **/
/** chunk id: 202905, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  r: () => v
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
  Chunk159150 = require("./159150.js");
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
  } = (0, s.cj)([f.Z], () => ({
    guild: f.Z.getGuild(),
    guildProfile: f.Z.getGuildProfile()
  })), O = null == n ? true : n.id, y = (0, s.e7)([c.Z], () => c.Z.get(O)), {
    fetchGuildProfile: C
  } = (0, d.u)(O), N = (null == v ? true : v.visibility) == null || !l.Y.VISIBLE.has(null == v ? true : v.visibility), E = (null == v ? true : v.visibility) === l.k.PUBLIC_WITH_RECRUITMENT;
  i.useEffect(() => {
    null != O && C()
  }, [O, C]);
  let I = i.useMemo(() => null == n || null == v ? j : v, [n, v]),
    S = i.useCallback(() => {
      (null == n ? true : n.id) != null && (E ? g.Z.updateGuildProfile(n.id, {
        visibility: l.k.PUBLIC
      }) : g.Z.updateGuildProfile(n.id, {
        visibility: l.k.PUBLIC_WITH_RECRUITMENT
      }))
    }, [null == n ? true : n.id, E]),
    _ = i.useCallback(() => {
      g.Z.setSection(p.pNK.PROFILE)
    }, []);
  if (null == n) return null;
  let T = null != t ? t : null == y ? true : y.formFields;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: h.intl.string(h.t.AHJddL)
    }), (0, r.jsx)(a.xvT, {
      tag: "p",
      variant: "text-sm/medium",
      color: "text-subtle",
      className: x.applicationBody,
      children: h.intl.string(h.t.Z7TCtd)
    }), (0, r.jsx)(b.c, {
      guildId: n.id
    }), (0, r.jsx)("div", {
      className: x.form,
      children: null != T ? (0, r.jsx)(m.y, {
        guild: n,
        formFields: T
      }) : (0, r.jsx)(o.$jN, {})
    }), (0, r.jsx)("div", {
      className: x.divider
    }), (0, r.jsxs)("div", {
      className: x.twoColumnContainer,
      children: [(0, r.jsxs)("div", {
        className: x.column,
        children: [(0, r.jsx)(o.rsf, {
          label: h.intl.string(h.t["N/0232"]),
          checked: E,
          onChange: S,
          disabled: N
        }), (0, r.jsx)(a.xvT, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: h.intl.string(h.t["3TSZYK"])
        }), N && (0, r.jsx)(a.xvT, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: h.intl.format(h.t.Bk0VOi, {
            profileLink: (e, t) => (0, r.jsx)(o.eee, {
              onClick: _,
              children: e
            }, t)
          })
        })]
      }), (0, r.jsx)("div", {
        className: x.column,
        children: (0, r.jsxs)("div", {
          className: x.previewWrapper,
          children: [(0, r.jsx)("div", {
            className: x.gradient
          }), (0, r.jsx)(u.ZP, {
            className: x.preview,
            profile: I,
            CTAOverride: (0, r.jsx)(a.zxk, {
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