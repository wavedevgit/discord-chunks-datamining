/** Chunk was on web.js **/
/** chunk id: 366030, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => V
}), require("./953529.js"), require("./472816.js"), require("./794429.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
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
  Chunk953605 = require("./953605.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function B(e) {
  let t, {
    connectionType: n,
    connectionMetadataField: i,
    operator: a,
    value: o,
    description: s
  } = e;
  if (null != s) switch (a) {
    case w.iO.LESS_THAN:
      t = x.intl.format(x.t["2p7dAw"], {
        description: s,
        count: Math.max(0, Number(o) - 1)
      });
      break;
    case w.iO.GREATER_THAN:
      t = x.intl.format(x.t["2p7dAw"], {
        description: s,
        count: Math.max(0, Number(o) + 1)
      });
      break;
    default:
      t = s
  } else t = (0, S.n_)({
    connectionType: n,
    connectionMetadataField: i,
    operator: a,
    value: o
  });
  return null == t ? null : (0, r.jsxs)("div", {
    className: j.popoutCheck,
    children: [(0, r.jsx)(_.dz2, {
      size: "md",
      color: "currentColor",
      className: j.popoutCheckIcon
    }), (0, r.jsx)(_.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: t
    })]
  })
}

function Z(e) {
  let {
    eligibilityStates: t
  } = e, n = (0, m.ZP)(), i = (0, _.dQu)(u.Z.unsafe_rawColors.GREEN_330).hex(), a = l().groupBy(t, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""));
  return (0, r.jsx)(r.Fragment, {
    children: Object.keys(a).map(e => {
      var t, s;
      let l, c = a[e],
        u = c.filter(e => null != e.operator),
        f = c.find(e => null != e.application),
        p = g.Z.get(e),
        m = null == f ? true : f.application,
        E = (null == m ? true : m.bot) != null ? new v.Z(m.bot) : null;
      return S.SJ.includes(null != (t = null == m ? true : m.id) ? t : "") ? l = (0, r.jsx)(R.Z, {
        className: j.botTag,
        color: i,
        size: 16
      }) : null != E && (l = (0, r.jsx)(y.Z, {
        className: j.botTag,
        verified: E.isVerifiedBot()
      })), (0, r.jsxs)("div", {
        className: j.popoutChecksGroup,
        children: [(0, r.jsxs)("div", {
          className: j.popoutCheckGroupName,
          children: [null != p ? (0, r.jsx)("img", {
            src: (0, d.wj)(n) ? p.icon.darkSVG : p.icon.lightSVG,
            alt: "",
            className: j.popoutCheckGroupPlatformIcon
          }) : null, null != E ? (0, r.jsx)(h.Z, {
            user: E,
            size: _.EFr.SIZE_20,
            className: j.popoutCheckGroupPlatformIcon
          }) : null, (0, r.jsx)(_.Text, {
            variant: "text-sm/medium",
            color: "interactive-active",
            children: null != (s = null == p ? true : p.name) ? s : null == m ? true : m.name
          }), l]
        }), u.map(e => {
          let {
            connection_type: t,
            connection_metadata_field: n,
            operator: i,
            value: a,
            description: s
          } = e;
          return o()(null != n, "connectionMetadataField is null"), o()(null != i, "operator is null"), o()(null != a, "value is null"), (0, r.jsx)(B, {
            connectionType: t,
            connectionMetadataField: n,
            operator: i,
            value: a,
            description: s
          }, "".concat(t, ":").concat(n, ":").concat(i, ":").concat(a))
        })]
      }, e)
    })
  })
}

function F(e) {
  let t, {
    onGetRolesClicked: n,
    onOpenProfile: a,
    eligibilityStates: o,
    userId: s,
    roleId: l,
    channelId: u,
    guildId: d
  } = e;
  i.useEffect(() => {
    T.default.track(D.rMx.PASSPORT_ROLE_POPOUT_VIEWED, k({
      other_user_id: s,
      role_id: l
    }, (0, E.JS)(u), (0, E.hH)(d)))
  }, [s, l, u, d]);
  let p = (0, c.e7)([I.ZP], () => {
    var e, t;
    return null != (t = null == (e = I.ZP.getSelfMember(d)) ? true : e.roles.includes(l)) && t
  }, [d, l]);
  return t = 1 === o.length && 1 === o[0].length ? x.intl.string(x.t.jDym4O) : 1 === o.length ? x.intl.format(x.t["0eBj39"], {}) : x.intl.format(x.t.D7uftL, {}), (0, r.jsxs)("div", {
    className: j.popout,
    children: [(0, r.jsx)("div", {
      className: j.popoutHeaderContainer,
      children: (0, r.jsx)(_.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        className: j.popoutHeaderText,
        children: t
      })
    }), (0, r.jsx)("div", {
      className: j.popoutChecks,
      children: (0, r.jsx)(Z, {
        eligibilityStates: o.flat()
      })
    }), (0, r.jsxs)("div", {
      className: j.buttonContainer,
      children: [p ? null : (0, r.jsx)(f.zx, {
        className: j.getRolesButton,
        onClick: n,
        children: x.intl.string(x.t.T1t1WV)
      }), (0, r.jsx)(f.zx, {
        className: j.viewConnectionsButton,
        color: f.zx.Colors.PRIMARY,
        onClick: a,
        children: x.intl.string(x.t.hgKDnJ)
      })]
    })]
  })
}

function V(e) {
  let {
    userId: t,
    messageId: n,
    guild: a,
    channel: s
  } = e, {
    analyticsLocations: l
  } = (0, b.ZP)(), u = (0, C.Z)(a, t, s.id, true), d = (0, c.e7)([A.Z], () => A.Z.getGuildRoleConnectionEligibility(null == u ? true : u.id)), [f, h] = i.useState(null == d), m = i.useRef(null);
  if (null == u) return null;
  async function g() {
    o()(null != u, "visibleConnectionsRole is null"), f && null == d && (await p.Z.fetchGuildRoleConnectionsEligibility(a.id, u.id), h(false))
  }

  function E() {
    return Promise.resolve(e => {
      let {
        closePopout: i
      } = e;
      return null == d ? (0, r.jsx)(r.Fragment, {}) : (o()(null != u, "visibleConnectionsRole is null"), (0, r.jsx)(F, {
        eligibilityStates: d,
        userId: t,
        roleId: u.id,
        channelId: s.id,
        guildId: a.id,
        onGetRolesClicked: () => {
          (0, P.Am)(a.id)
        },
        onOpenProfile: () => {
          (0, O.openUserProfileModal)({
            userId: t,
            messageId: n,
            guildId: a.id,
            channelId: s.id,
            roleId: u.id,
            subsection: L.Tb.CONNECTIONS,
            sourceAnalyticsLocations: l
          }), i()
        }
      }))
    })
  }
  return (0, r.jsx)(_.KeG, {
    targetElementRef: m,
    onRequestOpen: g,
    renderPopout: E,
    align: "top",
    nudgeAlignIntoViewport: true,
    children: e => (0, r.jsx)(_.ua7, {
      text: x.intl.string(x.t.Wpsnam),
      children: t => (0, r.jsxs)("div", G(k({
        ref: m,
        className: j.badge
      }, t, e), {
        children: [(0, r.jsx)(N.Z, {
          className: j.badgeVerifiedIcon,
          size: 16,
          color: u.colorString
        }), (0, r.jsx)(_.Text, {
          variant: "text-xs/bold",
          color: "header-primary",
          className: j.roleName,
          children: u.name
        })]
      }))
    })
  })
}