/** Chunk was on web.js **/
/** chunk id: 342998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk879690 = require("./879690.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk206074 = require("./206074.js"),
  Chunk728345 = require("./728345.js"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk204794 = require("./204794.js");
let m = (0, Chunk879690.U)(e => ({
    activeEntryId: null,
    setActiveEntryId: t => e({
      activeEntryId: t
    })
  })),
  g = e => {
    let {
      entry: t,
      isFirstApplicationOccurrence: n,
      targetElementRef: o
    } = e, {
      data: g
    } = (0, u.IX)(t.extra.application_id), E = (0, c.q)(g, "CloudPlayPopover"), b = (0, d.Nj)(a.z.CLOUD_PLAY_NEW_BADGE), y = E && !b && n, {
      activeEntryId: O,
      setActiveEntryId: v
    } = m(), I = O === t.id, T = y && I ? [a.z.CLOUD_PLAY_POPOVER] : [], [S, A] = (0, f.US)(T), C = S === a.z.CLOUD_PLAY_POPOVER, N = (0, c.Z)({
      application: g,
      location: "CloudPlayDismissibleContentPopover"
    });
    i.useEffect(() => {
      y && null === O && v(t.id)
    }, [O, y, t.id, v]);
    let R = () => {
      null == N || N()
    };
    i.useEffect(() => () => {
      C && (A(_.L.USER_DISMISS), v(null))
    }, [C, A, v]);
    let P = () => {
      A(_.L.USER_DISMISS), v(null)
    };
    return (0, r.jsx)(s.J2, {
      title: p.intl.string(p.t["+WNDtb"]),
      body: "",
      targetElementRef: o,
      shouldShow: C,
      position: "left",
      caretConfig: {
        position: "right",
        align: "center"
      },
      gradientColor: "pink",
      graphic: {
        type: "image",
        src: h.Z
      },
      actions: [{
        icon: l.v3n,
        text: p.intl.string(p.t["jaYS/v"]),
        onClick: R
      }],
      onRequestClose: P
    })
  },
  E = e => {
    let {
      entry: t,
      isFirstApplicationOccurrence: n,
      targetElementRef: i
    } = e;
    return (0, r.jsx)(g, {
      entry: t,
      targetElementRef: i,
      isFirstApplicationOccurrence: n
    })
  }