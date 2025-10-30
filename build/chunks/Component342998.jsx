/** Chunk was on web.js **/
/** chunk id: 342998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk191336 = require("./191336.js"),
  Chunk990547 = require("./990547.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk206074 = require("./206074.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk728345 = require("./728345.js"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk427760 = require("./427760.js");
let y = (0, Chunk191336.U)(e => ({
    activeEntryId: null,
    setActiveEntryId: t => e({
      activeEntryId: t
    })
  })),
  O = e => {
    let {
      entry: t,
      isFirstApplicationOccurrence: n,
      targetElementRef: a
    } = e, {
      data: O
    } = (0, p.IX)(t.extra.application_id), {
      analyticsLocations: v
    } = (0, f.ZP)(d.Z.CLOUD_PLAY_POPOVER), I = (0, u.Z)({
      application: O,
      analyticsLocations: v
    }), T = (0, h.Nj)(s.z.CLOUD_PLAY_NEW_BADGE), S = null != I && !T && n, {
      activeEntryId: A,
      setActiveEntryId: C
    } = y(), N = A === t.id, R = S && N ? [s.z.CLOUD_PLAY_POPOVER] : [], [P, w] = (0, m.US)(R), D = P === s.z.CLOUD_PLAY_POPOVER;
    i.useEffect(() => {
      S && null === A && C(t.id)
    }, [A, S, t.id, C]);
    let x = () => {
      null == I || I()
    };
    i.useEffect(() => () => {
      D && (w(g.L.USER_DISMISS), C(null))
    }, [D, w, C]);
    let [L, M] = i.useState(false);
    i.useEffect(() => {
      D && !L && M(true)
    }, [D, L]), (0, _.Z)({
      name: o.ImpressionNames.CLOUD_PLAY_CTA,
      type: o.ImpressionTypes.VIEW,
      properties: {
        location_stack: v
      }
    }, {
      disableTrack: !L
    }, [L]);
    let k = () => {
      w(g.L.USER_DISMISS), C(null)
    };
    return (0, r.jsx)(l.J2, {
      title: E.intl.string(E.t["+WNDtV"]),
      body: E.intl.string(E.t["5QKxGI"]),
      targetElementRef: a,
      shouldShow: D,
      position: "left",
      caretConfig: {
        align: "center"
      },
      gradientColor: "pink",
      graphic: {
        type: "image",
        src: b.Z
      },
      actions: [{
        icon: c.v3n,
        text: E.intl.string(E.t["jaYS/h"]),
        onClick: x
      }],
      onRequestClose: k
    })
  },
  v = e => {
    let {
      entry: t,
      isFirstApplicationOccurrence: n,
      targetElementRef: i
    } = e;
    return (0, r.jsx)(O, {
      entry: t,
      targetElementRef: i,
      isFirstApplicationOccurrence: n
    })
  }