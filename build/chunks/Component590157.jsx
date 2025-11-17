/** Chunk was on 86736 **/
/** chunk id: 590157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk366598 = require("./366598.jsx"),
  Chunk821864 = require("./821864.js"),
  Chunk905753 = require("./905753.js"),
  Chunk995390 = require("./995390.js"),
  Chunk469880 = require("./469880.jsx"),
  Chunk665578 = require("./665578.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk404157 = require("./404157.js");

function g(e) {
  let {
    application: t,
    canNavigate: n,
    guildId: d
  } = e, p = (0, l.e7)([c.Z], () => c.Z.isUnavailable());
  return (r.useEffect(() => (s.I4(t.id), s.kZ), [t.id]), r.useEffect(() => {
    s.gq(t.id, d, t.id), s.Sn(d, t.id)
  }, [t.id, d]), p) ? null : (0, i.jsxs)(r.Fragment, {
    children: [(0, i.jsx)(o.Z, {
      icon: (0, i.jsx)(a.SsZ, {
        size: "md",
        color: "currentColor"
      }),
      title: m.intl.string(m.t.RGoJNN)
    }), (0, i.jsx)(a.Text, {
      color: "text-muted",
      variant: "text-sm/normal",
      children: m.intl.string(m.t.sCkD3Z)
    }), (0, i.jsx)(f, {
      guildId: d,
      applicationId: t.id
    }), (0, i.jsx)(u.Z, {
      applicationIcon: t.icon,
      applicationName: t.name,
      canNavigate: n,
      guildId: d
    })]
  })
}

function f(e) {
  let {
    applicationId: t,
    guildId: n
  } = e, {
    originalApplicationPermissions: r,
    editedTargetPermissions: l,
    selectedPermissionCount: a
  } = (0, d.Z)(n, t);
  return (0, i.jsx)("div", {
    className: b.applicationPermissions,
    children: (0, i.jsx)(p.Z, {
      applicationId: t,
      guildId: n,
      inModal: false,
      editedTargetPermissions: l,
      originalApplicationPermissions: r,
      selectedPermissionCount: a
    })
  })
}