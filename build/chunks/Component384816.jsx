/** Chunk was on 93979 **/
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
  Chunk438160 = require("./438160.js");

function Z(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: Z,
    subsection: O,
    onClose: N
  } = e, {
    trackUserProfileAction: A
  } = (0, m.KZ)(), T = (0, i.e7)([d.Z], () => d.Z.getGuildId()), P = (0, s.Y)({
    userId: n.id
  }), E = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation), C = (0, i.e7)([c.default], () => c.default.locale), S = (0, f.Z)(n.id), w = (0, p.Z)(n.id);
  return (0, l.jsxs)(o.zJl, {
    fade: true,
    className: _.scroller,
    children: [(null == Z ? true : Z.bio) != null && (null == Z ? true : Z.bio) !== "" && !E && (0, l.jsx)(x.Z, {
      userBio: Z.bio,
      setLineClamp: false
    }), (null == Z ? true : Z.guildId) != null && (0, l.jsx)(b.Z, {
      user: n,
      currentUser: t,
      guildId: Z.guildId,
      scrollIntoView: O === I.Tb.ROLES
    }), n.isProvisional && (0, l.jsx)(g.Z, {
      heading: y.intl.string(y.t.Iyka0U),
      headingIcon: (0, l.jsx)(o.Mgn, {
        size: "xxs",
        color: o.TVs.colors.HEADER_PRIMARY
      }),
      headingColor: "header-secondary",
      children: (0, l.jsx)(a.n, {
        userId: n.id
      })
    }), P.length > 0 && (0, l.jsx)(g.Z, {
      heading: y.intl.string(y.t["Uv/eTx"]),
      children: (0, l.jsx)(v.Z, {
        applicationIds: P
      })
    }), (0, l.jsx)(g.Z, {
      heading: y.intl.string(y.t.a6XYD9),
      children: (0, l.jsx)(j.Z, {
        userId: n.id,
        guildId: null == Z ? true : Z.guildId,
        tooltipDelay: I.vB
      })
    }), S.length > 0 && (0, l.jsx)(g.Z, {
      heading: y.intl.string(y.t["3fe7U5"]),
      scrollIntoView: O === I.Tb.CONNECTIONS,
      children: (0, l.jsx)(h.ZP, {
        connectedAccounts: S,
        className: _.connections,
        userId: n.id,
        locale: C
      })
    }), w.length > 0 && (0, l.jsx)(g.Z, {
      heading: y.intl.string(y.t.PHjkRE),
      children: w.map(e => (0, l.jsx)(h.tH, {
        className: _.appsConnections,
        applicationRoleConnection: e,
        locale: C,
        onApplicationClicked: () => {
          A({
            action: "PRESS_APP_CONNECTION"
          }), N()
        },
        selectedGuildId: null != T ? T : true
      }, e.application.id))
    }), (0, l.jsx)(g.Z, {
      heading: y.intl.string(y.t["mQKv+v"]),
      scrollIntoView: O === I.Tb.NOTE,
      children: (0, l.jsx)(r.Z, {
        userId: n.id,
        className: _.note,
        autoFocus: O === I.Tb.NOTE,
        onUpdate: () => A({
          action: "SET_NOTE"
        })
      })
    })]
  })
}