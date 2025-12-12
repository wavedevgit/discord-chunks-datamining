/** Chunk was on web.js **/
/** chunk id: 342998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk663042 = require("./663042.js"),
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
  Chunk627261 = require("./627261.js");
let y = (0, Chunk663042.U)(e => ({
    activeEntryId: null,
    setActiveEntryId: t => e({
      activeEntryId: t
    })
  })),
  O = e => {
    let {
      entry: t,
      isFirstApplicationOccurrence: n,
      targetElementRef: o
    } = e, {
      data: O
    } = (0, _.IX)(t.extra.application_id), {
      analyticsLocations: v
    } = (0, f.ZP)(d.Z.CLOUD_PLAY_POPOVER), S = (0, u.Z)({
      application: O,
      analyticsLocations: v
    }), I = (0, m.Nj)(s.z.CLOUD_PLAY_NEW_BADGE), T = null != S && !I && n, {
      activeEntryId: C,
      setActiveEntryId: A
    } = y(), N = C === t.id, P = T && N ? [s.z.CLOUD_PLAY_POPOVER] : [], [R, w] = (0, h.US)(P), D = R === s.z.CLOUD_PLAY_POPOVER;
    i.useEffect(() => {
      T && null === C && A(t.id)
    }, [C, T, t.id, A]);
    let x = () => {
      null == S || S()
    };
    i.useEffect(() => () => {
      D && (w(g.L.USER_DISMISS), A(null))
    }, [D, w, A]);
    let [L, j] = i.useState(false);
    i.useEffect(() => {
      D && !L && j(true)
    }, [D, L]), (0, p.Z)({
      name: a.ImpressionNames.CLOUD_PLAY_CTA,
      type: a.ImpressionTypes.VIEW,
      properties: {
        location_stack: v
      }
    }, {
      disableTrack: !L
    }, [L]);
    let M = () => {
      w(g.L.USER_DISMISS), A(null)
    };
    return (0, r.jsx)(l.J2, {
      title: E.intl.string(E.t["+WNDtV"]),
      body: E.intl.string(E.t["5QKxGI"]),
      targetElementRef: o,
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
      onRequestClose: M
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