/** Chunk was on 82008 **/
/** chunk id: 384816, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
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

function _(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: _,
    subsection: Z,
    onClose: P
  } = e, {
    trackUserProfileAction: T
  } = (0, f.KZ)(), N = (0, l.e7)([d.Z], () => d.Z.getGuildId()), A = (0, c.Y)({
    userId: n.id
  }), E = (0, l.e7)([u.Z], () => u.Z.hidePersonalInformation), C = (0, l.e7)([a.default], () => a.default.locale), S = (0, p.Z)(n.id), w = (0, m.Z)(n.id);
  return (0, r.jsxs)(o.zJl, {
    fade: true,
    className: I.scroller,
    children: [(null == _ ? true : _.bio) != null && (null == _ ? true : _.bio) !== "" && !E && (0, r.jsx)(h.Z, {
      userBio: _.bio,
      setLineClamp: false
    }), (null == _ ? true : _.guildId) != null && (0, r.jsx)(v.Z, {
      user: n,
      currentUser: t,
      guildId: _.guildId,
      scrollIntoView: Z === y.Tb.ROLES
    }), n.isProvisional && (0, r.jsx)(g.Z, {
      heading: O.intl.string(O.t.Iyka0d),
      headingIcon: (0, r.jsx)(o.Mgn, {
        size: "xxs",
        color: o.TVs.colors.HEADER_PRIMARY
      }),
      headingColor: "header-secondary",
      children: (0, r.jsx)(s.n, {
        userId: n.id
      })
    }), A.length > 0 && (0, r.jsx)(g.Z, {
      heading: O.intl.string(O.t["Uv/eT0"]),
      children: (0, r.jsx)(x.Z, {
        applicationIds: A
      })
    }), (0, r.jsx)(g.Z, {
      heading: O.intl.string(O.t.a6XYDw),
      children: (0, r.jsx)(j.Z, {
        userId: n.id,
        guildId: null == _ ? true : _.guildId,
        tooltipDelay: y.vB
      })
    }), S.length > 0 && (0, r.jsx)(g.Z, {
      heading: O.intl.string(O.t["3fe7U1"]),
      scrollIntoView: Z === y.Tb.CONNECTIONS,
      children: (0, r.jsx)(b.ZP, {
        connectedAccounts: S,
        className: I.connections,
        userId: n.id,
        locale: C
      })
    }), w.length > 0 && (0, r.jsx)(g.Z, {
      heading: O.intl.string(O.t.PHjkRE),
      children: w.map(e => (0, r.jsx)(b.tH, {
        className: I.appsConnections,
        applicationRoleConnection: e,
        locale: C,
        onApplicationClicked: () => {
          T({
            action: "PRESS_APP_CONNECTION"
          }), P()
        },
        selectedGuildId: null != N ? N : true
      }, e.application.id))
    }), (0, r.jsx)(g.Z, {
      heading: O.intl.string(O.t["mQKv+v"]),
      scrollIntoView: Z === y.Tb.NOTE,
      children: (0, r.jsx)(i.Z, {
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