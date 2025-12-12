/** Chunk was on web.js **/
/** chunk id: 674180, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  eC: () => _,
  gX: () => p,
  uP: () => f
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk81897 = require("./81897.js"),
  Chunk423117 = require("./423117.js"),
  Chunk289393 = require("./289393.js"),
  Chunk430824 = require("./430824.js"),
  Chunk738774 = require("./738774.js"),
  Chunk981631 = require("./981631.js");
let d = e => {
    let t = (0, o.Z)();
    r.useEffect(() => {
      null != e && e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) && s.Z.getMonetizationRestrictionsFetchState(e.id) === s.M.NOT_FETCHED && a.Xj(e.id, {
        signal: t
      })
    }, [e, t]);
    let n = null == e ? true : e.id;
    return {
      restrictions: (0, i.Wu)([s.Z], () => {
        var e;
        return null != (e = s.Z.getMonetizationRestrictions(null != n ? n : u.lds)) ? e : []
      }),
      restrictionsLoading: (0, i.e7)([s.Z], () => s.Z.getMonetizationRestrictionsFetchState(null != n ? n : u.lds) === s.M.FETCHING)
    }
  },
  f = e => {
    var t;
    let n = (0, i.e7)([l.Z], () => l.Z.getGuild(e), [e]),
      {
        restrictions: r,
        restrictionsLoading: o
      } = d(n);
    return {
      shouldHideGuildPurchaseEntryPoints: !((null == n ? true : n.features.has(u.GuildFeatures.CREATOR_MONETIZABLE)) || (null == n ? true : n.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) || (null == n ? true : n.features.has(u.GuildFeatures.SOCIAL_LAYER_STOREFRONT))) || (o ? null == (t = null == n ? true : n.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || t : (0, c.uq)(r)),
      restrictionsLoading: o
    }
  },
  p = e => {
    var t;
    let n = (0, i.e7)([l.Z], () => l.Z.getGuild(e), [e]),
      {
        restrictions: r,
        restrictionsLoading: o
      } = d(n),
      a = o ? null == (t = null == n ? true : n.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || t : (0, c.Q6)(r),
      s = !!(null == n ? true : n.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING));
    return {
      shouldRestrictUpdatingCreatorMonetizationSettings: a || s,
      allowSelfRemoveMonetization: !a,
      restrictionsLoading: o
    }
  },
  _ = e => {
    let {
      restrictions: t,
      restrictionsLoading: n
    } = d((0, i.e7)([l.Z], () => l.Z.getGuild(e), [e]));
    return {
      isMonetizationReapplicationDisabled: (0, c.m8)(t),
      restrictionsLoading: n
    }
  }