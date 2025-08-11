/** Chunk was on web.js **/
/** chunk id: 366030, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => V
}), require("./953529.js"), require("./472816.js"), require("./794429.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
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
  Chunk906732 = require("./906732.js"),
  Chunk385499 = require("./385499.js"),
  Chunk892001 = require("./892001.js"),
  Chunk598077 = require("./598077.js"),
  Chunk271383 = require("./271383.js"),
  Chunk626135 = require("./626135.js"),
  Chunk275759 = require("./275759.js"),
  Chunk107484 = require("./107484.js"),
  Chunk977392 = require("./977392.js"),
  Chunk134433 = require("./134433.jsx"),
  Chunk753194 = require("./753194.js"),
  Chunk458034 = require("./458034.js"),
  Chunk856651 = require("./856651.js"),
  Chunk981631 = require("./981631.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.js"),
  Chunk933466 = require("./933466.js");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
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
    operator: o,
    value: a,
    description: s
  } = e;
  if (null != s) switch (o) {
    case w.iO.LESS_THAN:
      t = x.intl.format(x.t["2p7dAw"], {
        description: s,
        count: Math.max(0, Number(a) - 1)
      });
      break;
    case w.iO.GREATER_THAN:
      t = x.intl.format(x.t["2p7dAw"], {
        description: s,
        count: Math.max(0, Number(a) + 1)
      });
      break;
    default:
      t = s
  } else t = (0, S.n_)({
    connectionType: n,
    connectionMetadataField: i,
    operator: o,
    value: a
  });
  return null == t ? null : <div className={M.popoutCheck}>{<_.dz2 size={"md"} color={"currentColor"} className={M.popoutCheckIcon} />}{<_.Text variant={"text-xs/medium"} color={"header-primary"}>{t}</_.Text>}</div>
}

function Z(e) {
  let {
    eligibilityStates: t
  } = e, n = (0, m.ZP)(), i = (0, _.dQu)(u.Z.unsafe_rawColors.GREEN_330).hex(), o = l().groupBy(t, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""));
  return <r.Fragment>{Object.keys(o).map(e => {
      var t, s;
      let l, c = o[e],
        u = c.filter(e => null != e.operator),
        f = c.find(e => null != e.application),
        p = g.Z.get(e),
        m = null == f ? true : f.application,
        E = (null == m ? true : m.bot) != null ? new v.Z(m.bot) : null;
      return S.SJ.includes(null != (t = null == m ? true : m.id) ? t : "") ? l = (0, r.jsx)(R.Z, {
        className: M.botTag,
        color: i,
        size: 16
      }) : null != E && (l = (0, r.jsx)(y.Z, {
        className: M.botTag,
        verified: E.isVerifiedBot()
      })), (0, r.jsxs)("div", {
        className: M.popoutChecksGroup,
        children: [(0, r.jsxs)("div", {
          className: M.popoutCheckGroupName,
          children: [null != p ? (0, r.jsx)("img", {
            src: (0, d.wj)(n) ? p.icon.darkSVG : p.icon.lightSVG,
            alt: "",
            className: M.popoutCheckGroupPlatformIcon
          }) : null, null != E ? (0, r.jsx)(h.Z, {
            user: E,
            size: _.EFr.SIZE_20,
            className: M.popoutCheckGroupPlatformIcon
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
            value: o,
            description: s
          } = e;
          return a()(null != n, "connectionMetadataField is null"), a()(null != i, "operator is null"), a()(null != o, "value is null"), (0, r.jsx)(B, {
            connectionType: t,
            connectionMetadataField: n,
            operator: i,
            value: o,
            description: s
          }, "".concat(t, ":").concat(n, ":").concat(i, ":").concat(o))
        })]
      }, e)
    })}</r.Fragment>
}

function F(e) {
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
    T.default.track(D.rMx.PASSPORT_ROLE_POPOUT_VIEWED, j({
      other_user_id: s,
      role_id: l
    }, (0, E.JS)(u), (0, E.hH)(d)))
  }, [s, l, u, d]);
  let p = (0, c.e7)([I.ZP], () => {
    var e, t;
    return null != (t = null == (e = I.ZP.getSelfMember(d)) ? true : e.roles.includes(l)) && t
  }, [d, l]);
  return t = 1 === a.length && 1 === a[0].length ? x.intl.string(x.t.jDym4O) : 1 === a.length ? x.intl.format(x.t["0eBj39"], {}) : x.intl.format(x.t.D7uftL, {}), <div className={M.popout}>{<div className={M.popoutHeaderContainer}><_.Text variant={"text-xs/normal"} color={"text-default"} className={M.popoutHeaderText}>{t}</_.Text></div>}{<div className={M.popoutChecks}><Z eligibilityStates={a.flat()} /></div>}{<div className={M.buttonContainer}>{p ? null : <f.zx className={M.getRolesButton} onClick={n}>{x.intl.string(x.t.T1t1WV)}</f.zx>}{<f.zx className={M.viewConnectionsButton} color={f.zx.Colors.PRIMARY} onClick={o}>{x.intl.string(x.t.hgKDnJ)}</f.zx>}</div>}</div>
}

function V(e) {
  let {
    userId: t,
    messageId: n,
    guild: o,
    channel: s
  } = e, {
    analyticsLocations: l
  } = (0, b.ZP)(), u = (0, N.Z)(o, t, s.id, true), d = (0, c.e7)([A.Z], () => A.Z.getGuildRoleConnectionEligibility(null == u ? true : u.id)), [f, h] = i.useState(null == d), m = i.useRef(null);
  if (null == u) return null;
  async function g() {
    a()(null != u, "visibleConnectionsRole is null"), f && null == d && (await p.Z.fetchGuildRoleConnectionsEligibility(o.id, u.id), h(false))
  }

  function E() {
    return Promise.resolve(e => {
      let {
        closePopout: i
      } = e;
      return null == d ? <r.Fragment /> : (a()(null != u, "visibleConnectionsRole is null"), <F eligibilityStates={d} userId={t} roleId={u.id} channelId={s.id} guildId={o.id} onGetRolesClicked={() => {
          (0, P.Am)(o.id)
        }} onOpenProfile={() => {
          (0, O.openUserProfileModal)({
            userId: t,
            messageId: n,
            guildId: o.id,
            channelId: s.id,
            roleId: u.id,
            subsection: L.Tb.CONNECTIONS,
            sourceAnalyticsLocations: l
          }), i()
        }} />)
    })
  }
  return <_.KeG targetElementRef={m} onRequestOpen={g} renderPopout={E} align={"top"} nudgeAlignIntoViewport={true}>{e => (0, r.jsx)(_.ua7, {
      text: x.intl.string(x.t.Wpsnam),
      children: t => (0, r.jsxs)("div", G(j({
        ref: m,
        className: M.badge
      }, t, e), {
        children: [(0, r.jsx)(C.Z, {
          className: M.badgeVerifiedIcon,
          size: 16,
          color: u.colorString
        }), (0, r.jsx)(_.Text, {
          variant: "text-xs/bold",
          color: "header-primary",
          className: M.roleName,
          children: u.name
        })]
      }))
    })}</_.KeG>
}