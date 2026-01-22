/** Chunk was on web.js **/
/** chunk id: 588406, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => f
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk429913 = require("./429913.js"),
  Chunk403362 = require("./403362.js"),
  Chunk648304 = require("./648304.jsx"),
  Chunk437918 = require("./437918.js"),
  Chunk985018 = require("./985018.jsx");
let d = [];

function f(e) {
  let {
    gameFriends: t,
    hasIncomingPendingGameFriends: n,
    hasOutgoingPendingGameFriends: f
  } = e, [p, _] = i.useState(false), h = i.useCallback(() => _(true), []), m = i.useMemo(() => p ? t.map(e => {
    let {
      applicationId: t
    } = e;
    return t
  }) : d, [p, t]), g = (0, s.A)(m, p), E = i.useMemo(() => g.filter(o.Vq), [g]), {
    tooltipText: b,
    ariaLabel: y
  } = i.useMemo(() => {
    if (t.length > 0) {
      var e;
      return {
        tooltipText: (0, r.jsx)(l.a, {
          applications: E
        }),
        ariaLabel: null != (e = (0, c._)(E)) ? e : u.intl.string(u.t.ujfP6f)
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
    onMouseEnter: h,
    ariaLabel: y,
    tooltipText: b,
    icon: i.useMemo(() => {
      if (t.length > 0) return a._CD;
      if (n || f) return a.lI8;
      throw Error("[GameRelationshipButton] Icon should not be undefined.")
    }, [t.length, n, f])
  }
}