/** Chunk was on web.js **/
/** chunk id: 602814, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk696986 = require("./696986.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk435582 = require("./435582.js"),
  Chunk283488 = require("./283488.js"),
  Chunk264322 = require("./264322.js"),
  Chunk429913 = require("./429913.js"),
  Chunk989837 = require("./989837.js"),
  Chunk500049 = require("./500049.js"),
  Chunk735991 = require("./735991.js"),
  Chunk717048 = require("./717048.jsx"),
  Chunk129800 = require("./129800.jsx"),
  Chunk644681 = require("./644681.jsx"),
  Chunk723695 = require("./723695.jsx"),
  Chunk73510 = require("./73510.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk123564 = require("./123564.js"),
  Chunk291071 = require("./291071.js");
let A = 2048,
  I = 84;

function S(e) {
  var t;
  let {
    context: n,
    application: l,
    sectionName: c
  } = e, A = "channel" === n.type ? n.channel : true, S = (0, a.bG)([f.A], () => f.A.entrypoint()), C = null != (t = (0, d.h)(l.id === y.Ik.BUILT_IN ? null : l.id)) ? t : l, N = (0, _.Ag)(C) ? T : E.A, w = i.useRef(null), [R, P] = i.useState(false), {
    iconURL: D,
    name: x
  } = i.useMemo(() => (0, _.X2)(C, {
    fakeAppIconURL: v,
    size: I
  }), [C]), L = (0, u.A4)(true, true), j = (0, u.ON)(null == A ? true : A.guild_id, true), M = i.useMemo(() => (0, u.Sx)(n, C.id), [L, j, n, C.id]), k = !M.isGuildInstalled && !M.isUserInstalled;
  return i.useEffect(() => {
    k && u.Ay.queryInstallOnDemandApp(C.id, null == A ? true : A.id)
  }, [C.id, null == A ? true : A.id, k]), (0, r.jsxs)(o.d_W, {
    className: O.k,
    fade: true,
    ref: w,
    role: "region",
    "aria-label": b.intl.formatToPlainString(b.t["4OP4Uk"], {
      applicationName: x
    }),
    children: [(0, r.jsx)(g.A, {
      application: C,
      context: n,
      name: x,
      iconURL: D,
      scrollerRef: w,
      sectionName: c
    }), null != D && (0, r.jsx)(h.A, {
      src: D,
      className: O.Z
    }), (0, r.jsx)(s.A, {
      size: 54
    }), (0, r.jsx)(N, {
      context: n,
      application: C,
      sectionName: c,
      hasCommands: R
    }), S === p.s4.TEXT ? (0, r.jsx)(m.A, {
      context: n,
      application: C,
      sectionName: c,
      installOnDemand: k,
      setHasCommands: P
    }) : null]
  })
}

function T(e) {
  let {
    context: t,
    application: n,
    sectionName: i,
    hasCommands: a
  } = e, s = (0, c.A)({
    applicationId: n.id,
    size: A,
    names: ["embedded_cover"],
    format: "webp"
  }), o = (0, _.Cx)(n), u = null != o && null != o.activity_preview_video_asset_id ? (0, l.A)(n.id, o.activity_preview_video_asset_id) : null;
  return (0, r.jsx)(E.A, {
    context: t,
    application: n,
    imageCoverUrl: s.url,
    videoUrl: u,
    sectionName: i,
    hasCommands: a
  })
}