/** Chunk was on 384 **/
/** chunk id: 474024, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk580685 = require("./580685.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314852 = require("./314852.js"),
  Chunk330705 = require("./330705.js"),
  Chunk423252 = require("./423252.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk436879 = require("./436879.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk109229 = require("./109229.js");

function b(e) {
  var t;
  let {
    profile: n,
    canManageGuild: l
  } = e, b = n.id, j = a.Y.VISIBLE.has(n.visibility), _ = (0, o.e7)([u.Z], () => {
    var e;
    return (null == (e = u.Z.getProfile(b)) ? true : e.visibility) === d.k.PUBLIC_WITH_RECRUITMENT
  }, [b]), v = i.useRef(null);
  (0, p.Z)(v, f.KsC.PROFILE_VISIBILITY);
  let O = i.useCallback(() => {
      j ? m.Z.updateGuildProfile(b, {
        visibility: d.k.RESTRICTED
      }) : m.Z.updateGuildProfile(b, {
        visibility: _ ? d.k.PUBLIC_WITH_RECRUITMENT : d.k.PUBLIC
      })
    }, [b, _, j]),
    C = i.useCallback(() => {
      m.Z.setSection(f.pNK.ACCESS, f.KsC.ACCESS_DISCOVERABLE)
    }, []),
    y = null == (t = n.features) ? true : t.includes(f.GuildFeatures.DISCOVERABLE);
  return (0, r.jsxs)("div", {
    className: x.twoColumnContainer,
    ref: v,
    children: [(0, r.jsxs)("div", {
      className: x.column,
      children: [(0, r.jsx)(c.rsf, {
        label: h.intl.string(h.t.fjHWen),
        description: h.intl.string(h.t.J1YOV6),
        checked: !j,
        onChange: O,
        disabled: y || !l
      }), y && (0, r.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: h.intl.format(h.t.R8jY9g, {
          accessLink: (e, t) => (0, r.jsx)(c.Anchor, {
            onClick: C,
            children: e
          }, t)
        })
      })]
    }), (0, r.jsx)("div", {
      className: s()(x.column, {
        [x.profileViewDisabled]: j
      }),
      children: (0, r.jsx)(g.Z, {
        guildId: b,
        name: null
      })
    })]
  })
}