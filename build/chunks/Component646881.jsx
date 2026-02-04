/** Chunk was on 7685 **/
/** chunk id: 646881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => A,
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk375492 = require("./375492.js"),
  Chunk287809 = require("./287809.js"),
  Chunk810412 = require("./810412.js"),
  Chunk914853 = require("./914853.js"),
  Chunk243612 = require("./243612.js"),
  Chunk640490 = require("./640490.jsx"),
  Chunk755588 = require("./755588.jsx"),
  Chunk222870 = require("./222870.jsx"),
  Chunk180720 = require("./180720.jsx"),
  Chunk576420 = require("./576420.js"),
  Chunk610358 = require("./610358.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk553777 = require("./553777.js");

function A() {
  var e, t, n;
  let {
    onPrimaryAction: I,
    onContextMenu: A
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, y = (0, c.b4)(), S = null == y ? true : y.id, v = null == y ? true : y.altId, O = null != (e = (0, i.bG)([a.default], () => a.default.getCurrentUser())) ? e : null, b = null != v ? v : S, N = p.Ay.useField("activeTab"), T = p.Ay.useField("setActiveTab"), _ = r.useCallback(e => {
    e !== N && (T(e), (0, o.YX)(m.uss.FRIENDS, {
      type: o.Z5.TAB_SELECTED,
      value: function(e) {
        switch (e) {
          case u.x.FRIENDS:
            return o.IP.FRIEND_TAB_SELECTED;
          case u.x.MESSAGES:
            return o.IP.MESSAGES_TAB_SELECTED;
          case u.x.VOICE:
            return o.IP.VOICE_TAB_SELECTED;
          default:
            return o.IP.FRIEND_TAB_SELECTED
        }
      }(e)
    }))
  }, [N, T]), C = null != (t = (0, i.bG)([s.A], () => null == b ? null : s.A.getApplicationActivity(b), [b])) ? t : null;
  return (0, l.jsxs)("div", {
    className: E.kL,
    children: [(0, l.jsx)(h.b, {
      currentUser: O,
      activity: C,
      currentGameName: null != (n = null == y ? true : y.name) ? n : null,
      activeTab: N,
      onTabChange: _
    }), (0, l.jsx)("div", {
      className: E.Qs,
      children: N === u.x.FRIENDS ? (0, l.jsx)(d.F, {
        onPrimaryAction: I,
        onContextMenu: A
      }) : N === u.x.MESSAGES ? (0, l.jsx)(g.t, {
        onPrimaryAction: I,
        onContextMenu: A
      }) : N === u.x.VOICE ? (0, l.jsx)(f.T, {
        onPrimaryAction: I,
        onContextMenu: A
      }) : null
    })]
  })
}
let y = Chunk64700.memo(function(e) {
  let {
    locked: t
  } = e, {
    handlePrimaryAction: n,
    handleContextMenu: r
  } = (0, I.W)();
  return t ? null : (0, l.jsx)(A, {
    onPrimaryAction: n,
    onContextMenu: r
  })
})