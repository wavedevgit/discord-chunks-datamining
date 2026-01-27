/** Chunk was on 63974 **/
/** chunk id: 412775, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk821269 = require("./821269.js"),
  Chunk437774 = require("./437774.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk967198 = require("./967198.js"),
  Chunk351906 = require("./351906.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk346713 = require("./346713.js"),
  Chunk484509 = require("./484509.js"),
  Chunk389996 = require("./389996.jsx"),
  Chunk46937 = require("./46937.jsx"),
  Chunk361311 = require("./361311.jsx"),
  Chunk743987 = require("./743987.jsx"),
  Chunk900179 = require("./900179.jsx"),
  Chunk280645 = require("./280645.jsx"),
  Chunk928223 = require("./928223.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk195723 = require("./195723.js");

function _(e) {
  let {
    user: t,
    displayProfile: n,
    onClose: _
  } = e, {
    trackUserProfileAction: O
  } = (0, u.NJ)(), N = (0, i.bG)([d.A], () => d.A.getGuildId()), E = (0, s.q)({
    userId: t.id
  }), P = (0, i.bG)([c.A], () => c.A.hidePersonalInformation), T = (0, i.bG)([a.default], () => a.default.locale), C = (0, f.A)(t.id), S = (0, p.A)(t.id);
  return (0, l.jsxs)(r.IpV, {
    fade: true,
    className: y.XG,
    children: [(null == n ? true : n.bio) != null && (null == n ? true : n.bio) !== "" && !P && (0, l.jsx)(m.A, {
      userBio: n.bio,
      setLineClamp: false
    }), (null == n ? true : n.guildId) != null && (0, l.jsx)(h.A, {
      userId: t.id,
      guildId: n.guildId
    }), t.isProvisional && (0, l.jsx)(j.A, {
      heading: I.intl.string(I.t.Iyka0U),
      headingIcon: (0, l.jsx)(r.EpV, {
        size: "xxs",
        color: r.LU0.colors.TEXT_STRONG
      }),
      headingColor: "text-default",
      children: (0, l.jsx)(o.T, {
        userId: t.id
      })
    }), E.length > 0 && (0, l.jsx)(j.A, {
      heading: I.intl.string(I.t["Uv/eTx"]),
      children: (0, l.jsx)(x.A, {
        applicationIds: E
      })
    }), (0, l.jsx)(j.A, {
      heading: I.intl.string(I.t.a6XYD9),
      children: (0, l.jsx)(g.A, {
        userId: t.id,
        guildId: null == n ? true : n.guildId,
        tooltipDelay: v.In
      })
    }), C.length > 0 && (0, l.jsx)(j.A, {
      heading: I.intl.string(I.t["3fe7U5"]),
      scrollTargetId: v.bk.CONNECTIONS,
      children: (0, l.jsx)(A.Ay, {
        connectedAccounts: C,
        className: y.oQ,
        userId: t.id,
        locale: T
      })
    }), S.length > 0 && (0, l.jsx)(j.A, {
      heading: I.intl.string(I.t.PHjkRE),
      children: S.map(e => (0, l.jsx)(A.Wc, {
        className: y.MI,
        applicationRoleConnection: e,
        locale: T,
        onApplicationClicked: () => {
          O({
            action: "PRESS_APP_CONNECTION"
          }), _()
        },
        selectedGuildId: null != N ? N : true
      }, e.application.id))
    }), (0, l.jsx)(b.A, {
      userId: t.id
    })]
  })
}