/** Chunk was on web.js **/
/** chunk id: 366030, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => H
}), require("./953529.js"), require("./472816.js"), require("./794429.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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

function j(e, t, n) {
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
      j(e, t, n[t])
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

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e) {
  let t, {
    connectionType: n,
    connectionMetadataField: i,
    operator: a,
    value: o,
    description: s
  } = e;
  if (null != s) switch (a) {
    case D.iO.LESS_THAN:
      t = M.intl.format(M.t["2p7dA3"], {
        description: s,
        count: Math.max(0, Number(o) - 1)
      });
      break;
    case D.iO.GREATER_THAN:
      t = M.intl.format(M.t["2p7dA3"], {
        description: s,
        count: Math.max(0, Number(o) + 1)
      });
      break;
    default:
      t = s
  } else t = (0, A.n_)({
    connectionType: n,
    connectionMetadataField: i,
    operator: a,
    value: o
  });
  return null == t ? null : (0, r.jsxs)("div", {
    className: k.popoutCheck,
    children: [(0, r.jsx)(p.dz2, {
      size: "md",
      color: "currentColor",
      className: k.popoutCheckIcon
    }), (0, r.jsx)(p.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: t
    })]
  })
}

function F(e) {
  let {
    eligibilityStates: t
  } = e, n = (0, g.ZP)(), i = (0, p.dQu)(u.Z.unsafe_rawColors.GREEN_330).hex(), a = l().groupBy(t, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""));
  return (0, r.jsx)(r.Fragment, {
    children: Object.keys(a).map(e => {
      var t, s;
      let l, c = a[e],
        u = c.filter(e => null != e.operator),
        d = c.find(e => null != e.application),
        _ = E.Z.get(e),
        h = null == d ? true : d.application,
        g = (null == h ? true : h.bot) != null ? new I.Z(h.bot) : null;
      return A.SJ.includes(null != (t = null == h ? true : h.id) ? t : "") ? l = (0, r.jsx)(P.Z, {
        className: k.botTag,
        color: i,
        size: 16
      }) : null != g && (l = (0, r.jsx)(O.Z, {
        className: k.botTag,
        verified: g.isVerifiedBot()
      })), (0, r.jsxs)("div", {
        className: k.popoutChecksGroup,
        children: [(0, r.jsxs)("div", {
          className: k.popoutCheckGroupName,
          children: [null != _ ? (0, r.jsx)("img", {
            src: (0, f.wj)(n) ? _.icon.darkSVG : _.icon.lightSVG,
            alt: "",
            className: k.popoutCheckGroupPlatformIcon
          }) : null, null != g ? (0, r.jsx)(m.Z, {
            user: g,
            size: p.EFr.SIZE_20,
            className: k.popoutCheckGroupPlatformIcon
          }) : null, (0, r.jsx)(p.Text, {
            variant: "text-sm/medium",
            color: "interactive-active",
            children: null != (s = null == _ ? true : _.name) ? s : null == h ? true : h.name
          }), l]
        }), u.map(e => {
          let {
            connection_type: t,
            connection_metadata_field: n,
            operator: i,
            value: a,
            description: s
          } = e;
          return o()(null != n, "connectionMetadataField is null"), o()(null != i, "operator is null"), o()(null != a, "value is null"), (0, r.jsx)(Z, {
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

function V(e) {
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
    S.default.track(L.rMx.PASSPORT_ROLE_POPOUT_VIEWED, U({
      other_user_id: s,
      role_id: l
    }, (0, b.JS)(u), (0, b.hH)(d)))
  }, [s, l, u, d]);
  let f = (0, c.e7)([T.ZP], () => {
    var e, t;
    return null != (t = null == (e = T.ZP.getSelfMember(d)) ? true : e.roles.includes(l)) && t
  }, [d, l]);
  return t = 1 === o.length && 1 === o[0].length ? M.intl.string(M.t.jDym4E) : 1 === o.length ? M.intl.format(M.t["0eBj3x"], {}) : M.intl.format(M.t.D7uftB, {}), (0, r.jsxs)("div", {
    className: k.popout,
    children: [(0, r.jsx)("div", {
      className: k.popoutHeaderContainer,
      children: (0, r.jsx)(p.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        className: k.popoutHeaderText,
        children: t
      })
    }), (0, r.jsx)("div", {
      className: k.popoutChecks,
      children: (0, r.jsx)(F, {
        eligibilityStates: o.flat()
      })
    }), (0, r.jsxs)("div", {
      className: k.buttonContainer,
      children: [f ? null : (0, r.jsx)(_.zx, {
        className: k.getRolesButton,
        onClick: n,
        children: M.intl.string(M.t.T1t1WV)
      }), (0, r.jsx)(_.zx, {
        className: k.viewConnectionsButton,
        color: _.zx.Colors.PRIMARY,
        onClick: a,
        children: M.intl.string(M.t.hgKDnG)
      })]
    })]
  })
}

function H(e) {
  let {
    userId: t,
    messageId: n,
    guild: a,
    channel: s
  } = e, {
    analyticsLocations: l
  } = (0, y.ZP)(), u = (0, N.Z)(a, t, s.id, true), f = (0, c.e7)([C.Z], () => C.Z.getGuildRoleConnectionEligibility(null == u ? true : u.id)), [_, m] = i.useState(null == f), g = i.useRef(null);
  if (null == u) return null;
  async function E() {
    o()(null != u, "visibleConnectionsRole is null"), _ && null == f && (await h.Z.fetchGuildRoleConnectionsEligibility(a.id, u.id), m(false))
  }

  function b() {
    return Promise.resolve(e => {
      let {
        closePopout: i
      } = e;
      return null == f ? (0, r.jsx)(r.Fragment, {}) : (o()(null != u, "visibleConnectionsRole is null"), (0, r.jsx)(V, {
        eligibilityStates: f,
        userId: t,
        roleId: u.id,
        channelId: s.id,
        guildId: a.id,
        onGetRolesClicked: () => {
          (0, w.Am)(a.id)
        },
        onOpenProfile: () => {
          (0, v.openUserProfileModal)({
            userId: t,
            messageId: n,
            guildId: a.id,
            channelId: s.id,
            roleId: u.id,
            subsection: x.Tb.CONNECTIONS,
            sourceAnalyticsLocations: l
          }), i()
        }
      }))
    })
  }
  return (0, r.jsx)(p.KeG, {
    targetElementRef: g,
    onRequestOpen: E,
    renderPopout: b,
    align: "top",
    nudgeAlignIntoViewport: true,
    children: e => (0, r.jsx)(d.u, {
      text: M.intl.string(M.t.Wpsnar),
      children: (0, r.jsxs)("div", B(U({
        ref: g,
        className: k.badge
      }, e), {
        children: [(0, r.jsx)(R.Z, {
          className: k.badgeVerifiedIcon,
          size: 16,
          color: u.colorString
        }), (0, r.jsx)(p.Text, {
          variant: "text-xs/bold",
          color: "header-primary",
          className: k.roleName,
          children: u.name
        })]
      }))
    })
  })
}