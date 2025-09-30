/** Chunk was on 64982 **/
/** chunk id: 474024, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  } = e, b = n.id, j = a.Y.VISIBLE.has(n.visibility), v = (0, o.e7)([d.Z], () => {
    var e;
    return (null == (e = d.Z.getProfile(b)) ? true : e.visibility) === u.k.PUBLIC_WITH_RECRUITMENT
  }, [b]), _ = i.useRef(null);
  (0, p.Z)(_, f.KsC.PROFILE_VISIBILITY);
  let O = i.useCallback(() => {
      j ? g.Z.updateGuildProfile(b, {
        visibility: u.k.RESTRICTED
      }) : g.Z.updateGuildProfile(b, {
        visibility: v ? u.k.PUBLIC_WITH_RECRUITMENT : u.k.PUBLIC
      })
    }, [b, v, j]),
    y = i.useCallback(() => {
      g.Z.setSection(f.pNK.ACCESS, f.KsC.ACCESS_DISCOVERABLE)
    }, []),
    C = null == (t = n.features) ? true : t.includes(f.oNc.DISCOVERABLE);
  return (0, r.jsxs)(c.hjN, {
    className: x.twoColumnContainer,
    ref: _,
    children: [(0, r.jsxs)("div", {
      className: x.column,
      children: [(0, r.jsx)(c.j7V, {
        onChange: O,
        value: !j,
        hideBorder: true,
        disabled: C || !l,
        children: h.intl.string(h.t.fjHWen)
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: h.intl.string(h.t.J1YOV1)
      }), C && (0, r.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: h.intl.format(h.t.R8jY9v, {
          accessLink: (e, t) => (0, r.jsx)(c.eee, {
            onClick: y,
            children: e
          }, t)
        })
      })]
    }), (0, r.jsx)("div", {
      className: s()(x.column, {
        [x.profileViewDisabled]: j
      }),
      children: (0, r.jsx)(m.Z, {
        guildId: b,
        name: null
      })
    })]
  })
}