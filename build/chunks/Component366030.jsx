/** Chunk was on web.js **/
/** chunk id: 366030, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => H
}), require("./953529.js"), require("./472816.js"), require("./794429.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
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

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function F(e) {
  let t, {
    connectionType: n,
    connectionMetadataField: i,
    operator: o,
    value: a,
    description: s
  } = e;
  if (null != s) switch (o) {
    case D.iO.LESS_THAN:
      t = j.intl.format(j.t["2p7dA3"], {
        description: s,
        count: Math.max(0, Number(a) - 1)
      });
      break;
    case D.iO.GREATER_THAN:
      t = j.intl.format(j.t["2p7dA3"], {
        description: s,
        count: Math.max(0, Number(a) + 1)
      });
      break;
    default:
      t = s
  } else t = (0, C.n_)({
    connectionType: n,
    connectionMetadataField: i,
    operator: o,
    value: a
  });
  return null == t ? null : (0, r.jsxs)("div", {
    className: M.popoutCheck,
    children: [(0, r.jsx)(_.dz2, {
      size: "md",
      color: "currentColor",
      className: M.popoutCheckIcon
    }), (0, r.jsx)(_.Text, {
      variant: "text-xs/medium",
      color: "text-strong",
      children: t
    })]
  })
}

function B(e) {
  let {
    eligibilityStates: t
  } = e, n = (0, g.ZP)(), i = (0, _.dQu)(u.Z.unsafe_rawColors.GREEN_330).hex(), o = l().groupBy(t, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""));
  return (0, r.jsx)(r.Fragment, {
    children: Object.keys(o).map(e => {
      var t, s;
      let l, c = o[e],
        u = c.filter(e => null != e.operator),
        d = c.find(e => null != e.application),
        p = E.Z.get(e),
        m = null == d ? true : d.application,
        g = (null == m ? true : m.bot) != null ? new S.Z(m.bot) : null;
      return C.SJ.includes(null != (t = null == m ? true : m.id) ? t : "") ? l = (0, r.jsx)(R.Z, {
        className: M.botTag,
        color: i,
        size: 16
      }) : null != g && (l = (0, r.jsx)(O.Z, {
        className: M.botTag,
        verified: g.isVerifiedBot()
      })), (0, r.jsxs)("div", {
        className: M.popoutChecksGroup,
        children: [(0, r.jsxs)("div", {
          className: M.popoutCheckGroupName,
          children: [null != p ? (0, r.jsx)("img", {
            src: (0, f.wj)(n) ? p.icon.darkSVG : p.icon.lightSVG,
            alt: "",
            className: M.popoutCheckGroupPlatformIcon
          }) : null, null != g ? (0, r.jsx)(h.Z, {
            user: g,
            size: _.EFr.SIZE_20,
            className: M.popoutCheckGroupPlatformIcon
          }) : null, (0, r.jsx)(_.Text, {
            variant: "text-sm/medium",
            color: "interactive-text-active",
            children: null != (s = null == p ? true : p.name) ? s : null == m ? true : m.name
          }), l]
        }), u.map(e => {
          let {
            connection_type: t,
            connection_metadata_field: n,
            operator: i,
            value: o,
            description: s
          } = e;
          return a()(null != n, "connectionMetadataField is null"), a()(null != i, "operator is null"), a()(null != o, "value is null"), (0, r.jsx)(F, {
            connectionType: t,
            connectionMetadataField: n,
            operator: i,
            value: o,
            description: s
          }, "".concat(t, ":").concat(n, ":").concat(i, ":").concat(o))
        })]
      }, e)
    })
  })
}

function V(e) {
  let t, {
    onGetRolesClicked: n,
    onOpenProfile: o,
    eligibilityStates: a,
    userId: s,
    roleId: l,
    channelId: u,
    guildId: d
  } = e;
  i.useEffect(() => {
    T.default.track(x.rMx.PASSPORT_ROLE_POPOUT_VIEWED, U({
      other_user_id: s,
      role_id: l
    }, (0, b.JS)(u), (0, b.hH)(d)))
  }, [s, l, u, d]);
  let f = (0, c.e7)([I.ZP], () => {
    var e, t;
    return null != (t = null == (e = I.ZP.getSelfMember(d)) ? true : e.roles.includes(l)) && t
  }, [d, l]);
  return t = 1 === a.length && 1 === a[0].length ? j.intl.string(j.t.jDym4E) : 1 === a.length ? j.intl.format(j.t["0eBj3x"], {}) : j.intl.format(j.t.D7uftB, {}), (0, r.jsxs)("div", {
    className: M.popout,
    children: [(0, r.jsx)("div", {
      className: M.popoutHeaderContainer,
      children: (0, r.jsx)(_.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        className: M.popoutHeaderText,
        children: t
      })
    }), (0, r.jsx)("div", {
      className: M.popoutChecks,
      children: (0, r.jsx)(B, {
        eligibilityStates: a.flat()
      })
    }), (0, r.jsxs)("div", {
      className: M.buttonContainer,
      children: [f ? null : (0, r.jsx)(p.zx, {
        className: M.getRolesButton,
        onClick: n,
        children: j.intl.string(j.t.T1t1WV)
      }), (0, r.jsx)(p.zx, {
        className: M.viewConnectionsButton,
        color: p.zx.Colors.PRIMARY,
        onClick: o,
        children: j.intl.string(j.t.hgKDnG)
      })]
    })]
  })
}

function H(e) {
  let {
    userId: t,
    messageId: n,
    guild: o,
    channel: s
  } = e, {
    analyticsLocations: l
  } = (0, y.ZP)(), u = (0, N.Z)(o, t, s.id, true), f = (0, c.e7)([A.Z], () => A.Z.getGuildRoleConnectionEligibility(null == u ? true : u.id)), [p, h] = i.useState(null == f), g = i.useRef(null);
  if (null == u) return null;
  async function E() {
    a()(null != u, "visibleConnectionsRole is null"), p && null == f && (await m.Z.fetchGuildRoleConnectionsEligibility(o.id, u.id), h(false))
  }

  function b() {
    return Promise.resolve(e => {
      let {
        closePopout: i
      } = e;
      return null == f ? (0, r.jsx)(r.Fragment, {}) : (a()(null != u, "visibleConnectionsRole is null"), (0, r.jsx)(V, {
        eligibilityStates: f,
        userId: t,
        roleId: u.id,
        channelId: s.id,
        guildId: o.id,
        onGetRolesClicked: () => {
          (0, w.Am)(o.id)
        },
        onOpenProfile: () => {
          (0, v.openUserProfileModal)({
            userId: t,
            messageId: n,
            guildId: o.id,
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
    targetElementRef: g,
    onRequestOpen: E,
    renderPopout: b,
    align: "top",
    nudgeAlignIntoViewport: true,
    children: e => (0, r.jsx)(d.u, {
      text: j.intl.string(j.t.Wpsnar),
      children: (0, r.jsxs)("div", Z(U({
        ref: g,
        className: M.badge
      }, e), {
        children: [(0, r.jsx)(P.Z, {
          className: M.badgeVerifiedIcon,
          size: 16,
          color: u.colorString
        }), (0, r.jsx)(_.Text, {
          variant: "text-xs/bold",
          color: "text-strong",
          className: M.roleName,
          children: u.name
        })]
      }))
    })
  })
}