/** Chunk was on 1272 **/
/** chunk id: 696577, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.js"),
  Chunk812206 = require("./812206.js"),
  Chunk925329 = require("./925329.js"),
  Chunk79712 = require("./79712.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk743056 = require("./743056.js"),
  Chunk321488 = require("./321488.jsx"),
  Chunk417183 = require("./417183.jsx"),
  Chunk170245 = require("./170245.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk53487 = require("./53487.js");

function v(e) {
  var t;
  let {
    user: n,
    applicationId: l,
    isGameRelationship: s,
    active: c
  } = e, u = (null == (t = f.default.getCurrentUser()) ? true : t.isStaff()) && (null == n ? true : n.isStaff()), {
    acceptFriendRequest: d,
    cancelFriendRequest: p
  } = (0, g.u)({
    userId: n.id,
    applicationId: l,
    isGameRelationship: s,
    location: "Friends"
  }), h = i.useCallback(e => {
    e.stopPropagation(), d()
  }, [d]), b = i.useCallback(e => {
    e.stopPropagation(), p()
  }, [p]);
  return <r.Fragment>{u && <div className={y.staffIndicator}><o.IGR color={a.Z.unsafe_rawColors.BRAND_500.css} text={E.intl.string(E.t.oMx98P)} /></div>}{<m.Z icon={o.dz2} actionType={m.Z.ActionTypes.ACCEPT} tooltip={E.intl.string(E.t.ZcibdX)} onClick={h} shouldHighlight={c} />}{<m.Z icon={o.Dio} actionType={m.Z.ActionTypes.DENY} tooltip={E.intl.string(E.t.xuio0N)} onClick={b} shouldHighlight={c} />}</r.Fragment>
}

function I(e) {
  let {
    userId: t,
    applicationId: n,
    isGameRelationship: l,
    active: a
  } = e, {
    cancelFriendRequest: s
  } = (0, g.u)({
    userId: t,
    applicationId: n,
    isGameRelationship: l,
    location: "Friends"
  }), c = i.useCallback(e => {
    e.stopPropagation(), s()
  }, [s]);
  return <m.Z icon={o.Dio} actionType={m.Z.ActionTypes.DENY} tooltip={E.intl.string(E.t.eaq81d)} onClick={c} shouldHighlight={a} />
}

function C(e) {
  let {
    isGameRelationship: t,
    applicationId: n,
    userTag: a,
    isProvisional: s
  } = e, p = i.useMemo(() => t ? E.intl.string(E.t["Uv/eT0"]) : a, [t, a]), f = (0, l.e7)([c.Z], () => null != n ? c.Z.getApplication(n) : null);
  return <div className={y.applicationSublabel}>{!s && <o.Text variant={"text-sm/medium"} color={"text-secondary"}>{p}</o.Text>}{null != f && <r.Fragment>{!s && <d.Z height={2} width={2} />}{<u.Z game={f} size={u.Z.Sizes.XXSMALL} />}{<o.Text variant={"text-sm/medium"} color={"text-secondary"}>{f.name}</o.Text>}</r.Fragment>}</div>
}

function S(e) {
  let {
    user: t,
    hovered: n,
    status: i,
    isGameRelationship: l,
    applicationId: a
  } = e, o = h.ZP.useUserTag(t);
  return <_.Z user={t} hovered={n} status={i} showAccountIdentifier={!l && !t.isProvisional} subText={(0, r.jsx)(C, {
      isGameRelationship: l,
      isProvisional: t.isProvisional,
      applicationId: a,
      userTag: o
    })} />
}

function N(e) {
  let {
    user: t,
    type: n,
    status: l,
    isFocused: a,
    applicationId: o,
    isGameRelationship: c
  } = e, {
    analyticsLocations: u
  } = (0, s.ZP)(), d = l === O.Skl.OFFLINE ? O.Skl.UNKNOWN : l, f = i.useCallback(() => (0, p.openUserProfileModal)({
    userId: t.id,
    sourceAnalyticsLocations: u
  }), [u, t.id]);
  return <b.Z isFocused={a} user={t} onClick={f}>{e => (0, r.jsxs)("div", {
      className: y.listItemContents,
      children: [(0, r.jsx)(S, {
        user: t,
        hovered: e,
        status: d,
        isGameRelationship: c,
        applicationId: o
      }), (0, r.jsx)("div", {
        className: y.actions,
        children: n === O.OGo.PENDING_INCOMING ? (0, r.jsx)(v, {
          user: t,
          applicationId: o,
          isGameRelationship: c,
          active: e
        }) : (0, r.jsx)(I, {
          userId: t.id,
          applicationId: o,
          isGameRelationship: c,
          active: e
        })
      })]
    })}</b.Z>
}