/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => w
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(399606),
  o = n(481060),
  c = n(100527),
  A = n(906732),
  d = n(434404),
  u = n(171368),
  g = n(430824),
  f = n(893966),
  m = n(527379),
  p = n(305473),
  h = n(113679),
  C = n(440857),
  b = n(472596),
  v = n(598948),
  x = n(428936),
  N = n(41586),
  j = n(918192),
  E = n(981631),
  I = n(388032),
  O = n(121437),
  y = n(599662);

function w(e) {
  let {
    guildId: t
  } = e, n = (0, l.e7)([g.Z], () => g.Z.getGuild(t)), {
    analyticsLocations: s
  } = (0, A.ZP)(c.Z.GUILD_SETTINGS_MEMBERS_PAGE), w = !1 == !!(null == n ? void 0 : n.hasFeature(E.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), P = (0, l.e7)([f.Z], () => f.Z.getEstimatedMemberSearchCountByGuildId(t), [t]), B = i.useCallback(e => {
    null != e && (0, u.openUserProfileModal)({
      userId: e.userId,
      guildId: e.guildId,
      sourceAnalyticsLocations: s,
      analyticsLocation: {
        section: E.jXE.GUILD_SETTINGS_MEMBERS
      }
    })
  }, [s]), D = i.useRef(null), T = i.useCallback(() => {
    var e;
    null === (e = D.current) || void 0 === e || e.resetSearchText()
  }, []);
  if (null == n) return null;
  let S = (0, b.xb)(!1, !1, P);
  return (0, r.jsx)(A.Gt, {
    value: s,
    children: (0, r.jsx)("div", {
      className: a()(y.customColumn, O.override, O.settingsColumn),
      children: (0, r.jsx)("div", {
        className: y.customContainer,
        children: (0, r.jsx)(o.w0Z, {
          className: y.customScroller,
          orientation: "auto",
          children: (0, r.jsx)(o.w0Z, {
            className: O.settingsHorizontalScroller,
            orientation: "auto",
            children: (0, r.jsxs)("main", {
              className: a()(y.customColumn, y.contentColumnDefault, O.override, O.settingsColumn, O.settingsContent),
              children: [(0, r.jsx)(o.hjN, {
                className: O.header,
                children: (0, r.jsx)(o.vwX, {
                  tag: o.RB0.H1,
                  children: I.NW.string(I.t["S40K6+"])
                })
              }, "header"), (0, r.jsx)(o.hjN, {
                children: (0, r.jsxs)("div", {
                  className: O.tableContainer,
                  children: [(0, r.jsx)(h.Z, {
                    guild: n
                  }), (0, r.jsx)(p.Z, {
                    guild: n
                  }), w ? (0, r.jsxs)("div", {
                    className: O.mainTableContainer,
                    children: [(0, r.jsx)(N.Z, {
                      guild: n,
                      ref: D
                    }), (0, r.jsx)(v.Z, {
                      guild: n,
                      searchState: S,
                      compact: !0,
                      onSelectRow: B,
                      onResetForNewMembers: T
                    }), S !== b.po.SUCCESS_STILL_INDEXING && (0, r.jsx)(x.Z, {
                      guildId: n.id
                    })]
                  }) : (0, r.jsx)("div", {
                    className: O.movedTable,
                    children: (0, r.jsxs)("div", {
                      className: O.noResultsContainer,
                      children: [(0, r.jsx)("div", {
                        children: (0, r.jsx)(j.Z, {})
                      }), (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: I.NW.format(I.t.Bf6yxM, {
                          onClick: e => {
                            null != n && (e.preventDefault(), d.Z.close(), (0, m._X)(n.id))
                          }
                        })
                      })]
                    })
                  })]
                })
              }, "body"), (0, r.jsx)(C.Z, {
                guildId: n.id
              })]
            })
          })
        })
      })
    })
  })
}