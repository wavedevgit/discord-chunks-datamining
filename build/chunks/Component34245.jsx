/** Chunk was on web.js **/
/** chunk id: 34245, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk486503 = require("./486503.js"),
  Chunk950191 = require("./950191.js"),
  Chunk253932 = require("./253932.js"),
  Chunk486020 = require("./486020.js"),
  Chunk957565 = require("./957565.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  let {
    user: t,
    guildId: n,
    onSuccess: a
  } = e, m = (0, u.Ay)(t.id, null != n ? n : true), g = d.Q_.useSetting(), {
    tidaWebformEnabled: E
  } = c.A.useExperiment({
    location: "useCopyUserInfoItem"
  }, {
    autoTrackExposure: false
  }), y = (0, l.A)({
    id: t.id,
    label: h.intl.string(h.t["/AXYnE"]),
    onSuccess: a
  }), b = i.useMemo(() => null == m ? null : m.getBannerURL({
    canAnimate: true,
    size: _.XAf
  }), [m]), O = i.useCallback(() => {
    (0, p.C)(t.id), null == a || a()
  }, [t.id, a]), v = i.useCallback(() => {
    let e = f.Ay.getUserAvatarURL(t, true, _.XAf);
    s()(null != e, "cannot copy null avatar URL"), (0, p.C)(e), null == a || a()
  }, [t, a]), A = i.useCallback(() => {
    s()(null != b, "cannot copy null banner URL"), (0, p.C)(b), null == a || a()
  }, [b, a]);
  return !__OVERLAY__ && g && p.p5 && null != t.id ? E ? (0, r.jsxs)(o.Drp, {
    id: "copy-user-info",
    label: h.intl.string(h.t.QvQeLv),
    children: [(0, r.jsx)(o.Drp, {
      id: "copy-user-id",
      label: h.intl.string(h.t["/AXYnE"]),
      action: O,
      icon: o.L9S
    }), null != t.avatar && (0, r.jsx)(o.Drp, {
      id: "copy-user-avatar-link",
      label: h.intl.string(h.t.gERDvM),
      action: v
    }), null != b && (0, r.jsx)(o.Drp, {
      id: "copy-user-banner-link",
      label: h.intl.string(h.t.hsNv0R),
      action: A
    })]
  }) : y : null
}