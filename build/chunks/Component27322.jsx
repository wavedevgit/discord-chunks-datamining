/** Chunk was on web.js **/
/** chunk id: 27322, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk353640 = require("./353640.js"),
  Chunk110259 = require("./110259.js"),
  Chunk554146 = require("./554146.js"),
  Chunk342494 = require("./342494.js"),
  Chunk397927 = require("./397927.js"),
  Chunk359549 = require("./359549.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk627363 = require("./627363.js"),
  Chunk826673 = require("./826673.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk529071 = require("./529071.js");
let b = (0, Chunk353640.v)(e => ({
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
    } = (0, _.YY)(t.extra.application_id), {
      analyticsLocations: v
    } = (0, f.Ay)(d.A.CLOUD_PLAY_POPOVER), A = (0, u.A)({
      application: O,
      analyticsLocations: v
    }), I = (0, h.JZ)(o.M.CLOUD_PLAY_NEW_BADGE), S = null != A && !I && n, {
      activeEntryId: T,
      setActiveEntryId: C
    } = b(), N = T === t.id, R = S && N ? [o.M.CLOUD_PLAY_POPOVER] : [], [w, P] = (0, m.kn)(R), D = w === o.M.CLOUD_PLAY_POPOVER;
    i.useEffect(() => {
      S && null === T && C(t.id)
    }, [T, S, t.id, C]);
    let x = () => {
      null == A || A()
    };
    i.useEffect(() => () => {
      D && (P(g.i.USER_DISMISS), C(null))
    }, [D, P, C]);
    let [L, j] = i.useState(false);
    i.useEffect(() => {
      D && !L && j(true)
    }, [D, L]), (0, p.A)({
      name: s.ImpressionNames.CLOUD_PLAY_CTA,
      type: s.ImpressionTypes.VIEW,
      properties: {
        location_stack: v
      }
    }, {
      disableTrack: !L
    }, [L]);
    let M = () => {
      P(g.i.USER_DISMISS), C(null)
    };
    return (0, r.jsx)(l.AM, {
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
        src: y.A
      },
      actions: [{
        icon: c.hpF,
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