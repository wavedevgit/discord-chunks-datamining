/** Chunk was on 8106 **/
/** chunk id: 474024, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk109229 = require("./109229.js");

function x(e) {
  var t;
  let {
    profile: n,
    canManageGuild: l
  } = e, x = n.id, j = s.Y.VISIBLE.has(n.visibility), v = (0, o.e7)([d.Z], () => {
    var e;
    return (null == (e = d.Z.getProfile(x)) ? true : e.visibility) === u.k.PUBLIC_WITH_RECRUITMENT
  }, [x]), _ = i.useRef(null);
  (0, p.Z)(_, h.KsC.PROFILE_VISIBILITY);
  let O = i.useCallback(() => {
      j ? g.Z.updateGuildProfile(x, {
        visibility: u.k.RESTRICTED
      }) : g.Z.updateGuildProfile(x, {
        visibility: v ? u.k.PUBLIC_WITH_RECRUITMENT : u.k.PUBLIC
      })
    }, [x, v, j]),
    y = i.useCallback(() => {
      g.Z.setSection(h.pNK.ACCESS, h.KsC.ACCESS_DISCOVERABLE)
    }, []),
    C = null == (t = n.features) ? true : t.includes(h.oNc.DISCOVERABLE);
  return (0, r.jsxs)(c.hjN, {
    className: b.twoColumnContainer,
    ref: _,
    children: [(0, r.jsxs)("div", {
      className: b.column,
      children: [(0, r.jsx)(c.j7V, {
        onChange: O,
        value: !j,
        hideBorder: true,
        disabled: C || !l,
        children: f.intl.string(f.t.fjHWen)
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: f.intl.string(f.t.J1YOV1)
      }), C && (0, r.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: f.intl.format(f.t.R8jY9v, {
          accessLink: (e, t) => (0, r.jsx)(c.eee, {
            onClick: y,
            children: e
          }, t)
        })
      })]
    }), (0, r.jsx)("div", {
      className: a()(b.column, {
        [b.profileViewDisabled]: j
      }),
      children: (0, r.jsx)(m.Z, {
        guildId: x,
        name: null
      })
    })]
  })
}