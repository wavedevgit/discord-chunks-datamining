/** Chunk was on 31978 **/
/** chunk id: 366030, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./953529.js"), require("./472816.js"), require("./794429.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk385499 = require("./385499.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk598077 = require("./598077.js"),
  Chunk271383 = require("./271383.js"),
  Chunk626135 = require("./626135.js"),
  Chunk275759 = require("./275759.js"),
  Chunk107484 = require("./107484.js"),
  Chunk977392 = require("./977392.js"),
  Chunk134433 = require("./134433.jsx"),
  Chunk753194 = require("./753194.jsx"),
  Chunk458034 = require("./458034.jsx"),
  Chunk856651 = require("./856651.js"),
  Chunk981631 = require("./981631.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk852529 = require("./852529.js");

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function A(e) {
  let t, {
    connectionType: n,
    connectionMetadataField: l,
    operator: o,
    value: i,
    description: a
  } = e;
  if (null != a) switch (o) {
    case Z.iO.LESS_THAN:
      t = k.intl.format(k.t["2p7dAw"], {
        description: a,
        count: Math.max(0, Number(i) - 1)
      });
      break;
    case Z.iO.GREATER_THAN:
      t = k.intl.format(k.t["2p7dAw"], {
        description: a,
        count: Math.max(0, Number(i) + 1)
      });
      break;
    default:
      t = a
  } else t = (0, C.n_)({
    connectionType: n,
    connectionMetadataField: l,
    operator: o,
    value: i
  });
  return null == t ? null : (0, r.jsxs)("div", {
    className: M.popoutCheck,
    children: [(0, r.jsx)(m.dz2, {
      size: "md",
      color: "currentColor",
      className: M.popoutCheckIcon
    }), (0, r.jsx)(m.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: t
    })]
  })
}

function L(e) {
  let {
    eligibilityStates: t
  } = e, n = (0, b.ZP)(), l = (0, m.dQu)(u.Z.unsafe_rawColors.GREEN_330).hex(), o = s().groupBy(t, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""));
  return (0, r.jsx)(r.Fragment, {
    children: Object.keys(o).map(e => {
      var t, a;
      let s, c = o[e],
        u = c.filter(e => null != e.operator),
        p = c.find(e => null != e.application),
        g = h.Z.get(e),
        b = null == p ? true : p.application,
        y = (null == b ? true : b.bot) != null ? new P.Z(b.bot) : null;
      return C.SJ.includes(null != (t = null == b ? true : b.id) ? t : "") ? s = (0, r.jsx)(R.Z, {
        className: M.botTag,
        color: l,
        size: 16
      }) : null != y && (s = (0, r.jsx)(v.Z, {
        className: M.botTag,
        verified: y.isVerifiedBot()
      })), (0, r.jsxs)("div", {
        className: M.popoutChecksGroup,
        children: [(0, r.jsxs)("div", {
          className: M.popoutCheckGroupName,
          children: [null != g ? (0, r.jsx)("img", {
            src: (0, d.wj)(n) ? g.icon.darkSVG : g.icon.lightSVG,
            alt: "",
            className: M.popoutCheckGroupPlatformIcon
          }) : null, null != y ? (0, r.jsx)(f.Z, {
            user: y,
            size: m.EFr.SIZE_20,
            className: M.popoutCheckGroupPlatformIcon
          }) : null, (0, r.jsx)(m.Text, {
            variant: "text-sm/medium",
            color: "interactive-active",
            children: null != (a = null == g ? true : g.name) ? a : null == b ? true : b.name
          }), s]
        }), u.map(e => {
          let {
            connection_type: t,
            connection_metadata_field: n,
            operator: l,
            value: o,
            description: a
          } = e;
          return i()(null != n, "connectionMetadataField is null"), i()(null != l, "operator is null"), i()(null != o, "value is null"), (0, r.jsx)(A, {
            connectionType: t,
            connectionMetadataField: n,
            operator: l,
            value: o,
            description: a
          }, "".concat(t, ":").concat(n, ":").concat(l, ":").concat(o))
        })]
      }, e)
    })
  })
}

function G(e) {
  let t, {
    onGetRolesClicked: n,
    onOpenProfile: o,
    eligibilityStates: i,
    userId: a,
    roleId: s,
    channelId: u,
    guildId: d
  } = e;
  l.useEffect(() => {
    w.default.track(I.rMx.PASSPORT_ROLE_POPOUT_VIEWED, D({
      other_user_id: a,
      role_id: s
    }, (0, y.JS)(u), (0, y.hH)(d)))
  }, [a, s, u, d]);
  let g = (0, c.e7)([x.ZP], () => {
    var e, t;
    return null != (t = null == (e = x.ZP.getSelfMember(d)) ? true : e.roles.includes(s)) && t
  }, [d, s]);
  return t = 1 === i.length && 1 === i[0].length ? k.intl.string(k.t.jDym4O) : 1 === i.length ? k.intl.format(k.t["0eBj39"], {}) : k.intl.format(k.t.D7uftL, {}), (0, r.jsxs)("div", {
    className: M.popout,
    children: [(0, r.jsx)("div", {
      className: M.popoutHeaderContainer,
      children: (0, r.jsx)(m.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        className: M.popoutHeaderText,
        children: t
      })
    }), (0, r.jsx)("div", {
      className: M.popoutChecks,
      children: (0, r.jsx)(L, {
        eligibilityStates: i.flat()
      })
    }), (0, r.jsxs)("div", {
      className: M.buttonContainer,
      children: [g ? null : (0, r.jsx)(p.zx, {
        className: M.getRolesButton,
        onClick: n,
        children: k.intl.string(k.t.T1t1WV)
      }), (0, r.jsx)(p.zx, {
        className: M.viewConnectionsButton,
        color: p.zx.Colors.PRIMARY,
        onClick: o,
        children: k.intl.string(k.t.hgKDnJ)
      })]
    })]
  })
}

function U(e) {
  let {
    userId: t,
    messageId: n,
    guild: o,
    channel: a
  } = e, {
    analyticsLocations: s
  } = (0, O.ZP)(), u = (0, E.Z)(o, t, a.id, true), d = (0, c.e7)([S.Z], () => S.Z.getGuildRoleConnectionEligibility(null == u ? true : u.id)), [p, f] = l.useState(null == d), b = l.useRef(null);
  if (null == u) return null;
  async function h() {
    i()(null != u, "visibleConnectionsRole is null"), p && null == d && (await g.Z.fetchGuildRoleConnectionsEligibility(o.id, u.id), f(false))
  }
  return (0, r.jsx)(m.KeG, {
    targetElementRef: b,
    onRequestOpen: h,
    renderPopout: function() {
      return Promise.resolve(e => {
        let {
          closePopout: l
        } = e;
        return null == d ? (0, r.jsx)(r.Fragment, {}) : (i()(null != u, "visibleConnectionsRole is null"), (0, r.jsx)(G, {
          eligibilityStates: d,
          userId: t,
          roleId: u.id,
          channelId: a.id,
          guildId: o.id,
          onGetRolesClicked: () => {
            (0, T.Am)(o.id)
          },
          onOpenProfile: () => {
            (0, j.openUserProfileModal)({
              userId: t,
              messageId: n,
              guildId: o.id,
              channelId: a.id,
              roleId: u.id,
              subsection: _.Tb.CONNECTIONS,
              sourceAnalyticsLocations: s
            }), l()
          }
        }))
      })
    },
    align: "top",
    nudgeAlignIntoViewport: true,
    children: e => (0, r.jsx)(m.ua7, {
      text: k.intl.string(k.t.Wpsnam),
      children: t => {
        var n, l;
        return (0, r.jsxs)("div", (n = D({
          ref: b,
          className: M.badge
        }, t, e), l = l = {
          children: [(0, r.jsx)(N.Z, {
            className: M.badgeVerifiedIcon,
            size: 16,
            color: u.colorString
          }), (0, r.jsx)(m.Text, {
            variant: "text-xs/bold",
            color: "header-primary",
            className: M.roleName,
            children: u.name
          })]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n))
      }
    })
  })
}