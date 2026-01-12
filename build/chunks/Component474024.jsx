/** Chunk was on 9536 **/
/** chunk id: 474024, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk651801 = require("./651801.js");

function x(e) {
  var t;
  let {
    profile: n,
    canManageGuild: l
  } = e, x = n.id, j = s.Y.VISIBLE.has(n.visibility), v = (0, o.e7)([d.Z], () => {
    var e;
    return (null == (e = d.Z.getProfile(x)) ? true : e.visibility) === u.k.PUBLIC_WITH_RECRUITMENT
  }, [x]), O = i.useRef(null);
  (0, f.Z)(O, b.KsC.PROFILE_VISIBILITY);
  let y = i.useCallback(() => {
      j ? m.Z.updateGuildProfile(x, {
        visibility: u.k.RESTRICTED
      }) : m.Z.updateGuildProfile(x, {
        visibility: v ? u.k.PUBLIC_WITH_RECRUITMENT : u.k.PUBLIC
      })
    }, [x, v, j]),
    C = i.useCallback(() => {
      m.Z.setSection(b.pNK.ACCESS, b.KsC.ACCESS_DISCOVERABLE)
    }, []),
    N = null == (t = n.features) ? true : t.includes(b.GuildFeatures.DISCOVERABLE);
  return (0, r.jsxs)("div", {
    className: h.twoColumnContainer,
    ref: O,
    children: [(0, r.jsxs)("div", {
      className: h.column,
      children: [(0, r.jsx)(c.rsf, {
        label: p.intl.string(p.t.fjHWen),
        description: p.intl.string(p.t.J1YOV6),
        checked: !j,
        onChange: y,
        disabled: N || !l
      }), N && (0, r.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: p.intl.format(p.t.R8jY9g, {
          accessLink: (e, t) => (0, r.jsx)(c.eee, {
            onClick: C,
            children: e
          }, t)
        })
      })]
    }), (0, r.jsx)("div", {
      className: a()(h.column, {
        [h.profileViewDisabled]: j
      }),
      children: (0, r.jsx)(g.Z, {
        guildId: x,
        name: null
      })
    })]
  })
}