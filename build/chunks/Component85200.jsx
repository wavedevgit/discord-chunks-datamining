/** Chunk was on web.js **/
/** chunk id: 85200, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
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
let _ = Chunk723702.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];

function h() {
  var e, t;
  let {
    canSetInputDevice: n,
    canSetOutputDevice: c
  } = (0, a.cf)([l.A], () => ({
    canSetInputDevice: l.A.supports(d.O5.AUDIO_INPUT_DEVICE),
    canSetOutputDevice: l.A.supports(d.O5.AUDIO_OUTPUT_DEVICE)
  })), h = (0, o.x5)(d.oh.AUDIO_INPUT), m = (0, o.x5)(d.oh.AUDIO_OUTPUT), [g, E] = (0, o.tR)(d.oh.AUDIO_INPUT, {
    location: "UserSettingsDevices"
  }), [y, b] = (0, o.tR)(d.oh.AUDIO_OUTPUT, {
    location: "UserSettingsDevices"
  }), O = g.concat(E), v = y.concat(b), A = i.useMemo(() => {
    let e = _.some(e => {
        var t;
        return null == h || null == (t = h.hardwareId) ? true : t.startsWith(e)
      }),
      t = _.some(e => {
        var t;
        return null == m || null == (t = m.hardwareId) ? true : t.startsWith(e)
      });
    return e && t && (null == h ? true : h.containerId) != null && h.containerId === (null == m ? true : m.containerId)
  }, [h, m]), I = O[0], S = v[0], T = null != (e = null == I ? true : I.disabled) ? e : !n, C = null != (t = null == S ? true : S.disabled) ? t : !c;
  return (0, r.jsxs)("div", {
    className: p.y0,
    children: [(0, r.jsxs)("div", {
      className: p.o6,
      children: [(0, r.jsx)("div", {
        className: p.fi,
        children: (0, r.jsx)(s.U, {
          label: f.intl.string(f.t.hHMYbb),
          deviceType: d.oh.AUDIO_INPUT,
          location: "UserSettingsDevices",
          hideDeviceTypeIcon: true,
          isDisabled: T
        })
      }), (0, r.jsx)("div", {
        className: p.fi,
        children: (0, r.jsx)(s.U, {
          label: f.intl.string(f.t.dl18zb),
          deviceType: d.oh.AUDIO_OUTPUT,
          location: "UserSettingsDevices",
          hideDeviceTypeIcon: true,
          isDisabled: C
        })
      })]
    }), A && (0, r.jsx)(u.A, {
      look: u.k.WARNING,
      children: f.intl.string(f.t.Ioz3gx)
    })]
  })
}