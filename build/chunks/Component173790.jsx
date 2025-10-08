/** Chunk was on 35755 **/
/** chunk id: 173790, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk30787 = require("./30787.js"),
  Chunk413097 = require("./413097.js");

function C(e) {
  var t;
  let {
    context: n,
    application: s,
    sectionName: c
  } = e, C = "channel" === n.type ? n.channel : true, P = (0, r.e7)([p.Z], () => p.Z.entrypoint()), A = null != (t = (0, d.q)(s.id === g.bi.BUILT_IN ? null : s.id)) ? t : s, _ = (0, f.ye)(A) ? E : y.Z, O = i.useRef(null), [I, S] = i.useState(false), {
    iconURL: T,
    name: L
  } = i.useMemo(() => (0, f.sl)(A, {
    fakeAppIconURL: j,
    size: 84
  }), [A]), R = (0, u.PL)(true, true), Z = (0, u.LD)(null == C ? true : C.guild_id, true), w = i.useMemo(() => (0, u.If)(n, A.id), [R, Z, n, A.id]), k = !w.isGuildInstalled && !w.isUserInstalled;
  return i.useEffect(() => {
    k && u.ZP.queryInstallOnDemandApp(A.id, null == C ? true : C.id)
  }, [A.id, null == C ? true : C.id, k]), (0, l.jsxs)(o.u2D, {
    className: N.container,
    fade: true,
    ref: O,
    role: "region",
    "aria-label": b.intl.formatToPlainString(b.t["4OP4Ul"], {
      applicationName: L
    }),
    children: [(0, l.jsx)(x.Z, {
      application: A,
      context: n,
      name: L,
      iconURL: T,
      scrollerRef: O,
      sectionName: c
    }), null != T && (0, l.jsx)(h.Z, {
      src: T,
      className: N.appIcon
    }), (0, l.jsx)(a.Z, {
      size: 54
    }), (0, l.jsx)(_, {
      context: n,
      application: A,
      sectionName: c,
      hasCommands: I
    }), P === m._b.TEXT ? (0, l.jsx)(v.Z, {
      context: n,
      application: A,
      sectionName: c,
      installOnDemand: k,
      setHasCommands: S
    }) : null]
  })
}

function E(e) {
  let {
    context: t,
    application: n,
    sectionName: i,
    hasCommands: r
  } = e, a = (0, c.Z)({
    applicationId: n.id,
    size: 2048,
    names: ["embedded_cover"]
  }), o = (0, f.yJ)(n), u = null != o && null != o.activity_preview_video_asset_id ? (0, s.Z)(n.id, o.activity_preview_video_asset_id) : null;
  return (0, l.jsx)(y.Z, {
    context: t,
    application: n,
    imageCoverUrl: a.url,
    videoUrl: u,
    sectionName: i,
    hasCommands: r
  })
}