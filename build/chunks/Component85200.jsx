/** Chunk was on 60449 **/
/** chunk id: 85200, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk625841 = require("./625841.jsx"),
  Chunk74848 = require("./74848.js"),
  Chunk430452 = require("./430452.js"),
  Chunk723702 = require("./723702.js"),
  Chunk801264 = require("./801264.jsx"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk637462 = require("./637462.js");
let x = Chunk723702.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];

function A() {
  var e, t;
  let {
    canSetInputDevice: n,
    canSetOutputDevice: c
  } = (0, l.cf)([o.A], () => ({
    canSetInputDevice: o.A.supports(u.O5.AUDIO_INPUT_DEVICE),
    canSetOutputDevice: o.A.supports(u.O5.AUDIO_OUTPUT_DEVICE)
  })), A = (0, a.x5)(u.oh.AUDIO_INPUT), p = (0, a.x5)(u.oh.AUDIO_OUTPUT), [m, j] = (0, a.tR)(u.oh.AUDIO_INPUT, {
    location: "UserSettingsDevices"
  }), [O, E] = (0, a.tR)(u.oh.AUDIO_OUTPUT, {
    location: "UserSettingsDevices"
  }), b = m.concat(j), S = O.concat(E), v = s.useMemo(() => {
    let e = x.some(e => {
        var t;
        return null == A || null == (t = A.hardwareId) ? true : t.startsWith(e)
      }),
      t = x.some(e => {
        var t;
        return null == p || null == (t = p.hardwareId) ? true : t.startsWith(e)
      });
    return e && t && (null == A ? true : A.containerId) != null && A.containerId === (null == p ? true : p.containerId)
  }, [A, p]), C = b[0], f = S[0], T = null != (e = null == C ? true : C.disabled) ? e : !n, N = null != (t = null == f ? true : f.disabled) ? t : !c;
  return (0, i.jsxs)("div", {
    className: h.y0,
    children: [(0, i.jsxs)("div", {
      className: h.o6,
      children: [(0, i.jsx)("div", {
        className: h.fi,
        children: (0, i.jsx)(r.U, {
          label: g.intl.string(g.t.hHMYbb),
          deviceType: u.oh.AUDIO_INPUT,
          location: "UserSettingsDevices",
          hideDeviceTypeIcon: true,
          isDisabled: T
        })
      }), (0, i.jsx)("div", {
        className: h.fi,
        children: (0, i.jsx)(r.U, {
          label: g.intl.string(g.t.dl18zb),
          deviceType: u.oh.AUDIO_OUTPUT,
          location: "UserSettingsDevices",
          hideDeviceTypeIcon: true,
          isDisabled: N
        })
      })]
    }), v && (0, i.jsx)(d.A, {
      look: d.k.WARNING,
      children: g.intl.string(g.t.Ioz3gx)
    })]
  })
}