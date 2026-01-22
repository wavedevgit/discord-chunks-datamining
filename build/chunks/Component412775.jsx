/** Chunk was on 64228 **/
/** chunk id: 412775, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => O
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

function O(e) {
  let {
    user: l,
    displayProfile: t,
    onClose: O
  } = e, {
    trackUserProfileAction: N
  } = (0, u.NJ)(), E = (0, i.bG)([d.A], () => d.A.getGuildId()), _ = (0, s.q)({
    userId: l.id
  }), T = (0, i.bG)([c.A], () => c.A.hidePersonalInformation), P = (0, i.bG)([o.default], () => o.default.locale), S = (0, p.A)(l.id), C = (0, f.A)(l.id);
  return (0, n.jsxs)(r.IpV, {
    fade: true,
    className: y.XG,
    children: [(null == t ? true : t.bio) != null && (null == t ? true : t.bio) !== "" && !T && (0, n.jsx)(m.A, {
      userBio: t.bio,
      setLineClamp: false
    }), (null == t ? true : t.guildId) != null && (0, n.jsx)(g.A, {
      userId: l.id,
      guildId: t.guildId
    }), l.isProvisional && (0, n.jsx)(h.A, {
      heading: I.intl.string(I.t.Iyka0U),
      headingIcon: (0, n.jsx)(r.EpV, {
        size: "xxs",
        color: r.LU0.colors.TEXT_STRONG
      }),
      headingColor: "text-default",
      children: (0, n.jsx)(a.T, {
        userId: l.id
      })
    }), _.length > 0 && (0, n.jsx)(h.A, {
      heading: I.intl.string(I.t["Uv/eTx"]),
      children: (0, n.jsx)(A.A, {
        applicationIds: _
      })
    }), (0, n.jsx)(h.A, {
      heading: I.intl.string(I.t.a6XYD9),
      children: (0, n.jsx)(j.A, {
        userId: l.id,
        guildId: null == t ? true : t.guildId,
        tooltipDelay: b.In
      })
    }), S.length > 0 && (0, n.jsx)(h.A, {
      heading: I.intl.string(I.t["3fe7U5"]),
      scrollTargetId: b.bk.CONNECTIONS,
      children: (0, n.jsx)(x.Ay, {
        connectedAccounts: S,
        className: y.oQ,
        userId: l.id,
        locale: P
      })
    }), C.length > 0 && (0, n.jsx)(h.A, {
      heading: I.intl.string(I.t.PHjkRE),
      children: C.map(e => (0, n.jsx)(x.Wc, {
        className: y.MI,
        applicationRoleConnection: e,
        locale: P,
        onApplicationClicked: () => {
          N({
            action: "PRESS_APP_CONNECTION"
          }), O()
        },
        selectedGuildId: null != E ? E : true
      }, e.application.id))
    }), (0, n.jsx)(v.A, {
      userId: l.id
    })]
  })
}