/** Chunk was on web.js **/
/** chunk id: 690501, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => f
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk823379 = require("./823379.js"),
  Chunk254197 = require("./254197.jsx"),
  Chunk532028 = require("./532028.js"),
  Chunk388032 = require("./388032.jsx");
let d = [];

function f(e) {
  let {
    gameFriends: t,
    hasIncomingPendingGameFriends: n,
    hasOutgoingPendingGameFriends: f
  } = e, [p, _] = i.useState(false), m = i.useCallback(() => _(true), []), h = i.useMemo(() => p ? t.map(e => {
    let {
      applicationId: t
    } = e;
    return t
  }) : d, [p, t]), g = (0, o.Z)(h, p), E = i.useMemo(() => g.filter(s.lm), [g]), {
    tooltipText: b,
    ariaLabel: y
  } = i.useMemo(() => {
    if (t.length > 0) {
      var e;
      return {
        tooltipText: (0, r.jsx)(l.k, {
          applications: E
        }),
        ariaLabel: null != (e = (0, c.A)(E)) ? e : u.intl.string(u.t.ujfP6f)
      }
    }
    if (n) {
      let e = u.intl.string(u.t["0eWeav"]);
      return {
        tooltipText: e,
        ariaLabel: e
      }
    }
    if (f) {
      let e = u.intl.string(u.t.MCgl9c);
      return {
        tooltipText: e,
        ariaLabel: e
      }
    }
    throw Error("[GameRelationshipButton] Tooltip text and aria label should not be undefined.")
  }, [E, t.length, n, f]);
  return {
    onMouseEnter: m,
    ariaLabel: y,
    tooltipText: b,
    icon: i.useMemo(() => {
      if (t.length > 0) return a.KED;
      if (n || f) return a.iHX;
      throw Error("[GameRelationshipButton] Icon should not be undefined.")
    }, [t.length, n, f])
  }
}