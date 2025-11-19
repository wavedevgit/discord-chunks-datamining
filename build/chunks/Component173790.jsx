/** Chunk was on web.js **/
/** chunk id: 173790, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk218061 = require("./218061.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk361213 = require("./361213.js"),
  Chunk778569 = require("./778569.js"),
  Chunk213459 = require("./213459.js"),
  Chunk835473 = require("./835473.js"),
  Chunk541099 = require("./541099.js"),
  Chunk827498 = require("./827498.js"),
  Chunk783097 = require("./783097.js"),
  Chunk753972 = require("./753972.jsx"),
  Chunk387658 = require("./387658.jsx"),
  Chunk536650 = require("./536650.jsx"),
  Chunk675993 = require("./675993.jsx"),
  Chunk689079 = require("./689079.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk808888 = require("./808888.js"),
  Chunk413097 = require("./413097.js");
let I = 2048,
  T = 84;

function S(e) {
  var t;
  let {
    context: n,
    application: l,
    sectionName: c
  } = e, I = "channel" === n.type ? n.channel : true, S = (0, a.e7)([f.Z], () => f.Z.entrypoint()), C = null != (t = (0, d.q)(l.id === b.bi.BUILT_IN ? null : l.id)) ? t : l, N = (0, p.ye)(C) ? A : E.Z, R = i.useRef(null), [P, D] = i.useState(false), {
    iconURL: w,
    name: L
  } = i.useMemo(() => (0, p.sl)(C, {
    fakeAppIconURL: v,
    size: T
  }), [C]), x = (0, u.PL)(true, true), M = (0, u.LD)(null == I ? true : I.guild_id, true), j = i.useMemo(() => (0, u.If)(n, C.id), [x, M, n, C.id]), k = !j.isGuildInstalled && !j.isUserInstalled;
  return i.useEffect(() => {
    k && u.ZP.queryInstallOnDemandApp(C.id, null == I ? true : I.id)
  }, [C.id, null == I ? true : I.id, k]), (0, r.jsxs)(s.u2D, {
    className: O.container,
    fade: true,
    ref: R,
    role: "region",
    "aria-label": y.intl.formatToPlainString(y.t["4OP4Uk"], {
      applicationName: L
    }),
    children: [(0, r.jsx)(g.Z, {
      application: C,
      context: n,
      name: L,
      iconURL: w,
      scrollerRef: R,
      sectionName: c
    }), null != w && (0, r.jsx)(h.Z, {
      src: w,
      className: O.appIcon
    }), (0, r.jsx)(o.Z, {
      size: 54
    }), (0, r.jsx)(N, {
      context: n,
      application: C,
      sectionName: c,
      hasCommands: P
    }), S === _._b.TEXT ? (0, r.jsx)(m.Z, {
      context: n,
      application: C,
      sectionName: c,
      installOnDemand: k,
      setHasCommands: D
    }) : null]
  })
}

function A(e) {
  let {
    context: t,
    application: n,
    sectionName: i,
    hasCommands: a
  } = e, o = (0, c.Z)({
    applicationId: n.id,
    size: I,
    names: ["embedded_cover"]
  }), s = (0, p.yJ)(n), u = null != s && null != s.activity_preview_video_asset_id ? (0, l.Z)(n.id, s.activity_preview_video_asset_id) : null;
  return (0, r.jsx)(E.Z, {
    context: t,
    application: n,
    imageCoverUrl: o.url,
    videoUrl: u,
    sectionName: i,
    hasCommands: a
  })
}