/** Chunk was on 9536 **/
/** chunk id: 313364, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => Z
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk189357 = require("./189357.js"),
  Chunk613464 = require("./613464.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk6025 = require("./6025.js"),
  Chunk892001 = require("./892001.js"),
  Chunk433355 = require("./433355.js"),
  Chunk430824 = require("./430824.js"),
  Chunk893966 = require("./893966.js"),
  Chunk527379 = require("./527379.js"),
  Chunk305473 = require("./305473.jsx"),
  Chunk113679 = require("./113679.jsx"),
  Chunk440857 = require("./440857.jsx"),
  Chunk472596 = require("./472596.js"),
  Chunk598948 = require("./598948.jsx"),
  Chunk428936 = require("./428936.jsx"),
  Chunk41586 = require("./41586.jsx"),
  Chunk918192 = require("./918192.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk380545 = require("./380545.js"),
  Chunk306174 = require("./306174.js");

function Z(e) {
  let {
    guildId: t
  } = e, n = (0, s.e7)([h.Z], () => h.Z.getGuild(t)), {
    analyticsLocations: l
  } = (0, d.ZP)(c.Z.GUILD_SETTINGS_MEMBERS_PAGE), Z = (0, u.m)(t), R = (0, s.e7)([p.ZP], () => p.ZP.getGuildSidebarState(t), [t]), D = i.useCallback(() => {
    m.Z.closeGuildSidebar(t)
  }, [t]), A = false == !!(null == n ? true : n.features.has(_.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), L = (0, s.e7)([x.Z], () => x.Z.getEstimatedMemberSearchCountByGuildId(t), [t]), k = i.useCallback(e => {
    null != e && (0, b.openUserProfileModal)({
      userId: e.userId,
      guildId: e.guildId,
      sourceAnalyticsLocations: l
    })
  }, [l]), G = i.useRef(null), M = i.useCallback(() => {
    var e;
    null == (e = G.current) || e.resetSearchText()
  }, []);
  if (null == n) return null;
  let U = (0, y.xb)(false, false, L);
  return (0, r.jsxs)(d.Gt, {
    value: l,
    children: [(0, r.jsx)("div", {
      className: a()(w.customColumn, P.override, P.settingsColumn),
      children: (0, r.jsx)("div", {
        className: w.customContainer,
        children: (0, r.jsx)(o.w0Z, {
          className: a()(w.customScroller, P.settingsVerticalScroller),
          orientation: "auto",
          children: (0, r.jsx)(o.w0Z, {
            className: P.settingsHorizontalScroller,
            orientation: "auto",
            children: (0, r.jsxs)("main", {
              className: a()(w.customColumn, w.contentColumnDefault, P.override, P.settingsColumn, P.settingsContent),
              children: [(0, r.jsx)("div", {
                className: P.header,
                children: (0, r.jsx)(o.Heading, {
                  variant: "heading-lg/semibold",
                  children: T.intl.string(T.t.S40K66)
                })
              }, "header"), (0, r.jsx)("div", {
                children: (0, r.jsxs)("div", {
                  className: P.tableContainer,
                  children: [(0, r.jsx)(O.Z, {
                    guild: n
                  }), (0, r.jsx)(v.Z, {
                    guild: n
                  }), A ? (0, r.jsxs)("div", {
                    className: P.mainTableContainer,
                    children: [(0, r.jsx)(I.Z, {
                      guild: n,
                      ref: G
                    }), (0, r.jsx)(N.Z, {
                      guild: n,
                      searchState: U,
                      compact: true,
                      onSelectRow: k,
                      onResetForNewMembers: M
                    }), U !== y.po.SUCCESS_STILL_INDEXING && (0, r.jsx)(E.Z, {
                      guildId: n.id
                    })]
                  }) : (0, r.jsx)("div", {
                    className: P.movedTable,
                    children: (0, r.jsxs)("div", {
                      className: P.noResultsContainer,
                      children: [(0, r.jsx)("div", {
                        children: (0, r.jsx)(S.Z, {})
                      }), (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: T.intl.format(T.t.Bf6yxB, {
                          onClick: e => {
                            null != n && (e.preventDefault(), f.Z.close(), (0, j._X)(n.id))
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
    }), Z && null != R && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.ZMr, {
        isVisible: true,
        onClick: D
      }), (0, r.jsx)("div", {
        className: P.modViewSidebarContainer,
        style: {
          width: _.$Y6
        },
        children: (0, r.jsx)(g.Z, {
          userId: R.details.userId,
          guildId: R.details.guildId,
          onClose: D
        })
      })]
    })]
  })
}