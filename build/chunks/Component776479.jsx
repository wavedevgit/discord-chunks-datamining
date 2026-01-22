/** Chunk was on 21968 **/
/** chunk id: 776479, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk998874 = require("./998874.jsx"),
  Chunk542580 = require("./542580.js"),
  Chunk803378 = require("./803378.js"),
  Chunk825453 = require("./825453.js"),
  Chunk602418 = require("./602418.jsx"),
  Chunk2655 = require("./2655.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk199271 = require("./199271.js");

function m(e) {
  let {
    application: t,
    canNavigate: n,
    guildId: d
  } = e, b = (0, l.bG)([c.A], () => c.A.isUnavailable());
  return (r.useEffect(() => (o.hu(t.id), o.AL), [t.id]), r.useEffect(() => {
    o.gV(t.id, d, t.id), o.Jw(d, t.id)
  }, [t.id, d]), b) ? null : (0, i.jsxs)(r.Fragment, {
    children: [(0, i.jsx)(s.A, {
      icon: (0, i.jsx)(a.kC9, {
        size: "md",
        color: "currentColor"
      }),
      title: f.intl.string(f.t.RGoJNN)
    }), (0, i.jsx)(a.Text, {
      color: "text-muted",
      variant: "text-sm/normal",
      children: f.intl.string(f.t.sCkD3Z)
    }), (0, i.jsx)(g, {
      guildId: d,
      applicationId: t.id
    }), (0, i.jsx)(u.A, {
      applicationIcon: t.icon,
      applicationName: t.name,
      canNavigate: n,
      guildId: d
    })]
  })
}

function g(e) {
  let {
    applicationId: t,
    guildId: n
  } = e, {
    originalApplicationPermissions: r,
    editedTargetPermissions: l,
    selectedPermissionCount: a
  } = (0, d.A)(n, t);
  return (0, i.jsx)("div", {
    className: p.zi,
    children: (0, i.jsx)(b.A, {
      applicationId: t,
      guildId: n,
      inModal: false,
      editedTargetPermissions: l,
      originalApplicationPermissions: r,
      selectedPermissionCount: a
    })
  })
}