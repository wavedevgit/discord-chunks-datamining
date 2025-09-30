/** Chunk was on 31553 **/
/** chunk id: 384816, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk666520 = require("./666520.jsx"),
  Chunk246016 = require("./246016.js"),
  Chunk189156 = require("./189156.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk914010 = require("./914010.js"),
  Chunk246946 = require("./246946.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk250822 = require("./250822.js"),
  Chunk771362 = require("./771362.js"),
  Chunk280885 = require("./280885.jsx"),
  Chunk819602 = require("./819602.jsx"),
  Chunk78806 = require("./78806.jsx"),
  Chunk900927 = require("./900927.jsx"),
  Chunk678738 = require("./678738.jsx"),
  Chunk179828 = require("./179828.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk54966 = require("./54966.js");

function Z(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: Z,
    subsection: P,
    onClose: N
  } = e, {
    trackUserProfileAction: T
  } = (0, m.KZ)(), E = (0, i.e7)([d.Z], () => d.Z.getGuildId()), A = (0, s.Y)({
    userId: n.id
  }), S = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation), C = (0, i.e7)([c.default], () => c.default.locale), w = (0, f.Z)(n.id), _ = (0, p.Z)(n.id);
  return (0, l.jsxs)(r.zJl, {
    fade: true,
    className: I.scroller,
    children: [(null == Z ? true : Z.bio) != null && (null == Z ? true : Z.bio) !== "" && !S && (0, l.jsx)(h.Z, {
      userBio: Z.bio,
      setLineClamp: false
    }), (null == Z ? true : Z.guildId) != null && (0, l.jsx)(b.Z, {
      user: n,
      currentUser: t,
      guildId: Z.guildId,
      scrollIntoView: P === y.Tb.ROLES
    }), n.isProvisional && (0, l.jsx)(g.Z, {
      heading: O.intl.string(O.t.Iyka0d),
      headingIcon: (0, l.jsx)(r.Mgn, {
        size: "xxs",
        color: r.TVs.colors.HEADER_PRIMARY
      }),
      headingColor: "header-secondary",
      children: (0, l.jsx)(a.n, {
        userId: n.id
      })
    }), A.length > 0 && (0, l.jsx)(g.Z, {
      heading: O.intl.string(O.t["Uv/eT0"]),
      children: (0, l.jsx)(x.Z, {
        applicationIds: A
      })
    }), (0, l.jsx)(g.Z, {
      heading: O.intl.string(O.t.a6XYDw),
      children: (0, l.jsx)(v.Z, {
        userId: n.id,
        guildId: null == Z ? true : Z.guildId,
        tooltipDelay: y.vB
      })
    }), w.length > 0 && (0, l.jsx)(g.Z, {
      heading: O.intl.string(O.t["3fe7U1"]),
      scrollIntoView: P === y.Tb.CONNECTIONS,
      children: (0, l.jsx)(j.ZP, {
        connectedAccounts: w,
        className: I.connections,
        userId: n.id,
        locale: C
      })
    }), _.length > 0 && (0, l.jsx)(g.Z, {
      heading: O.intl.string(O.t.PHjkRE),
      children: _.map(e => (0, l.jsx)(j.tH, {
        className: I.appsConnections,
        applicationRoleConnection: e,
        locale: C,
        onApplicationClicked: () => {
          T({
            action: "PRESS_APP_CONNECTION"
          }), N()
        },
        selectedGuildId: null != E ? E : true
      }, e.application.id))
    }), (0, l.jsx)(g.Z, {
      heading: O.intl.string(O.t["mQKv+v"]),
      scrollIntoView: P === y.Tb.NOTE,
      children: (0, l.jsx)(o.Z, {
        userId: n.id,
        className: I.note,
        autoFocus: P === y.Tb.NOTE,
        onUpdate: () => T({
          action: "SET_NOTE"
        })
      })
    })]
  })
}