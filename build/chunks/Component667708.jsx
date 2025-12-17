/** Chunk was on web.js **/
/** chunk id: 667708, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk796762 = require("./796762.js"),
  Chunk687158 = require("./687158.js"),
  Chunk695346 = require("./695346.js"),
  Chunk768581 = require("./768581.js"),
  Chunk572004 = require("./572004.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let {
    user: t,
    guildId: n,
    onSuccess: a
  } = e, h = (0, u.ZP)(t.id, null != n ? n : true), g = d.Sb.useSetting(), {
    tidaWebformEnabled: E
  } = c.Z.useExperiment({
    location: "useCopyUserInfoItem"
  }, {
    autoTrackExposure: false
  }), b = (0, l.Z)({
    id: t.id,
    label: m.intl.string(m.t["/AXYnE"]),
    onSuccess: a
  }), y = i.useMemo(() => null == h ? null : h.getBannerURL({
    canAnimate: true,
    size: _.dGM
  }), [h]), O = i.useCallback(() => {
    (0, p.JG)(t.id), null == a || a()
  }, [t.id, a]), v = i.useCallback(() => {
    let e = f.ZP.getUserAvatarURL(t, true, _.dGM);
    o()(null != e, "cannot copy null avatar URL"), (0, p.JG)(e), null == a || a()
  }, [t, a]), S = i.useCallback(() => {
    o()(null != y, "cannot copy null banner URL"), (0, p.JG)(y), null == a || a()
  }, [y, a]);
  return !__OVERLAY__ && g && p.wS && null != t.id ? E ? (0, r.jsxs)(s.sNh, {
    id: "copy-user-info",
    label: m.intl.string(m.t.QvQeLv),
    children: [(0, r.jsx)(s.sNh, {
      id: "copy-user-id",
      label: m.intl.string(m.t["/AXYnE"]),
      action: O,
      icon: s.VuL
    }), null != t.avatar && (0, r.jsx)(s.sNh, {
      id: "copy-user-avatar-link",
      label: m.intl.string(m.t.gERDvM),
      action: v
    }), null != y && (0, r.jsx)(s.sNh, {
      id: "copy-user-banner-link",
      label: m.intl.string(m.t.hsNv0R),
      action: S
    })]
  }) : b : null
}