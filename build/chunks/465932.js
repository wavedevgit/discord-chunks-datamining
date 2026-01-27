/** Chunk was on web.js **/
/** chunk id: 465932, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MH: () => f,
  YG: () => _,
  nq: () => p
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk163126 = require("./163126.js"),
  Chunk579908 = require("./579908.js"),
  Chunk636194 = require("./636194.js"),
  Chunk71393 = require("./71393.js"),
  Chunk836039 = require("./836039.js"),
  Chunk652215 = require("./652215.js");
let d = e => {
    let t = (0, a.A)();
    r.useEffect(() => {
      null != e && e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) && s.A.getMonetizationRestrictionsFetchState(e.id) === s.e.NOT_FETCHED && o.LJ(e.id, {
        signal: t
      })
    }, [e, t]);
    let n = null == e ? true : e.id;
    return {
      restrictions: (0, i.yK)([s.A], () => {
        var e;
        return null != (e = s.A.getMonetizationRestrictions(null != n ? n : u.dJq)) ? e : []
      }),
      restrictionsLoading: (0, i.bG)([s.A], () => s.A.getMonetizationRestrictionsFetchState(null != n ? n : u.dJq) === s.e.FETCHING)
    }
  },
  f = e => {
    var t;
    let n = (0, i.bG)([l.A], () => l.A.getGuild(e), [e]),
      {
        restrictions: r,
        restrictionsLoading: a
      } = d(n);
    return {
      shouldHideGuildPurchaseEntryPoints: !((null == n ? true : n.features.has(u.GuildFeatures.CREATOR_MONETIZABLE)) || (null == n ? true : n.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) || (null == n ? true : n.features.has(u.GuildFeatures.SOCIAL_LAYER_STOREFRONT))) || (a ? null == (t = null == n ? true : n.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || t : (0, c.Y5)(r)),
      restrictionsLoading: a
    }
  },
  p = e => {
    var t;
    let n = (0, i.bG)([l.A], () => l.A.getGuild(e), [e]),
      {
        restrictions: r,
        restrictionsLoading: a
      } = d(n),
      o = a ? null == (t = null == n ? true : n.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || t : (0, c.a1)(r),
      s = !!(null == n ? true : n.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING));
    return {
      shouldRestrictUpdatingCreatorMonetizationSettings: o || s,
      allowSelfRemoveMonetization: !o,
      restrictionsLoading: a
    }
  },
  _ = e => {
    let {
      restrictions: t,
      restrictionsLoading: n
    } = d((0, i.bG)([l.A], () => l.A.getGuild(e), [e]));
    return {
      isMonetizationReapplicationDisabled: (0, c.EM)(t),
      restrictionsLoading: n
    }
  }