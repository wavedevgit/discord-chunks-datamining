/** Chunk was on 93979 **/
/** chunk id: 384816, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
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
  Chunk878566 = require("./878566.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk199912 = require("./199912.js");

function O(e) {
  let {
    user: n,
    displayProfile: t,
    onClose: O
  } = e, {
    trackUserProfileAction: N
  } = (0, u.KZ)(), T = (0, i.e7)([s.Z], () => s.Z.getGuildId()), A = (0, r.Y)({
    userId: n.id
  }), P = (0, i.e7)([d.Z], () => d.Z.hidePersonalInformation), E = (0, i.e7)([c.default], () => c.default.locale), _ = (0, m.Z)(n.id), C = (0, f.Z)(n.id);
  return (0, l.jsxs)(o.zJl, {
    fade: true,
    className: Z.scroller,
    children: [(null == t ? true : t.bio) != null && (null == t ? true : t.bio) !== "" && !P && (0, l.jsx)(p.Z, {
      userBio: t.bio,
      setLineClamp: false
    }), (null == t ? true : t.guildId) != null && (0, l.jsx)(b.Z, {
      userId: n.id,
      guildId: t.guildId
    }), n.isProvisional && (0, l.jsx)(v.Z, {
      heading: y.intl.string(y.t.Iyka0U),
      headingIcon: (0, l.jsx)(o.Mgn, {
        size: "xxs",
        color: o.TVs.colors.TEXT_STRONG
      }),
      headingColor: "text-default",
      children: (0, l.jsx)(a.n, {
        userId: n.id
      })
    }), A.length > 0 && (0, l.jsx)(v.Z, {
      heading: y.intl.string(y.t["Uv/eTx"]),
      children: (0, l.jsx)(h.Z, {
        applicationIds: A
      })
    }), (0, l.jsx)(v.Z, {
      heading: y.intl.string(y.t.a6XYD9),
      children: (0, l.jsx)(j.Z, {
        userId: n.id,
        guildId: null == t ? true : t.guildId,
        tooltipDelay: I.vB
      })
    }), _.length > 0 && (0, l.jsx)(v.Z, {
      heading: y.intl.string(y.t["3fe7U5"]),
      scrollTargetId: I.Tb.CONNECTIONS,
      children: (0, l.jsx)(x.ZP, {
        connectedAccounts: _,
        className: Z.connections,
        userId: n.id,
        locale: E
      })
    }), C.length > 0 && (0, l.jsx)(v.Z, {
      heading: y.intl.string(y.t.PHjkRE),
      children: C.map(e => (0, l.jsx)(x.tH, {
        className: Z.appsConnections,
        applicationRoleConnection: e,
        locale: E,
        onApplicationClicked: () => {
          N({
            action: "PRESS_APP_CONNECTION"
          }), O()
        },
        selectedGuildId: null != T ? T : true
      }, e.application.id))
    }), (0, l.jsx)(g.Z, {
      userId: n.id
    })]
  })
}