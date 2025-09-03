/** Chunk was on 28883 **/
/** chunk id: 384816, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function O(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: O,
    subsection: Z,
    onClose: P
  } = e, {
    trackUserProfileAction: T
  } = (0, f.KZ)(), N = (0, l.e7)([d.Z], () => d.Z.getGuildId()), A = (0, c.Y)({
    userId: n.id
  }), C = (0, l.e7)([u.Z], () => u.Z.hidePersonalInformation), E = (0, l.e7)([s.default], () => s.default.locale), S = (0, p.Z)(n.id), w = (0, m.Z)(n.id);
  return (0, o.jsxs)(r.zJl, {
    fade: true,
    className: I.scroller,
    children: [(null == O ? true : O.bio) != null && (null == O ? true : O.bio) !== "" && !C && (0, o.jsx)(x.Z, {
      userBio: O.bio,
      setLineClamp: false
    }), (null == O ? true : O.guildId) != null && (0, o.jsx)(v.Z, {
      user: n,
      currentUser: t,
      guildId: O.guildId,
      scrollIntoView: Z === y.Tb.ROLES
    }), n.isProvisional && (0, o.jsx)(g.Z, {
      heading: _.intl.string(_.t.Iyka0d),
      headingIcon: (0, o.jsx)(r.Mgn, {
        size: "xxs",
        color: r.TVs.colors.HEADER_PRIMARY
      }),
      headingColor: "header-secondary",
      children: (0, o.jsx)(a.n, {
        userId: n.id
      })
    }), A.length > 0 && (0, o.jsx)(g.Z, {
      heading: _.intl.string(_.t["Uv/eT0"]),
      children: (0, o.jsx)(b.Z, {
        applicationIds: A
      })
    }), (0, o.jsx)(g.Z, {
      heading: _.intl.string(_.t.a6XYDw),
      children: (0, o.jsx)(j.Z, {
        userId: n.id,
        guildId: null == O ? true : O.guildId,
        tooltipDelay: y.vB
      })
    }), S.length > 0 && (0, o.jsx)(g.Z, {
      heading: _.intl.string(_.t["3fe7U1"]),
      scrollIntoView: Z === y.Tb.CONNECTIONS,
      children: (0, o.jsx)(h.ZP, {
        connectedAccounts: S,
        className: I.connections,
        userId: n.id,
        locale: E
      })
    }), w.length > 0 && (0, o.jsx)(g.Z, {
      heading: _.intl.string(_.t.PHjkRE),
      children: w.map(e => (0, o.jsx)(h.tH, {
        className: I.appsConnections,
        applicationRoleConnection: e,
        locale: E,
        onApplicationClicked: () => {
          T({
            action: "PRESS_APP_CONNECTION"
          }), P()
        },
        selectedGuildId: null != N ? N : true
      }, e.application.id))
    }), (0, o.jsx)(g.Z, {
      heading: _.intl.string(_.t["mQKv+v"]),
      scrollIntoView: Z === y.Tb.NOTE,
      children: (0, o.jsx)(i.Z, {
        userId: n.id,
        className: I.note,
        autoFocus: Z === y.Tb.NOTE,
        onUpdate: () => T({
          action: "SET_NOTE"
        })
      })
    })]
  })
}