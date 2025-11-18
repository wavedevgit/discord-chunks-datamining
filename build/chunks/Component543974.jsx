/** Chunk was on 638 **/
/** chunk id: 543974, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk16030 = require("./16030.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk961842 = require("./961842.jsx"),
  Chunk254238 = require("./254238.js"),
  Chunk258609 = require("./258609.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk269441 = require("./269441.js"),
  Chunk505913 = require("./505913.js");
let j = (0, Chunk16030.G)(Chunk961842.Z);

function m(e) {
  let {
    devices: t,
    selectedDeviceId: n,
    onSelectDeviceId: i
  } = e, l = t.map(e => {
    let {
      id: t,
      name: n
    } = e;
    return {
      value: t,
      name: n,
      leadingIcon: j
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.FXm, {
      value: n,
      options: l,
      onChange: e => i(e)
    }), (0, r.jsx)(p.Z, {
      children: v.intl.string(v.t.dI4HFq)
    })]
  })
}

function y() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk269441.emptyArt,
    children: (0, Chunk54381.jsx)("img", {
      src: Chunk505913,
      width: "189",
      height: "177",
      alt: ""
    })
  })
}

function w(e) {
  let t, n, l, d, {
      channel: p,
      platform: g,
      transitionState: O,
      onClose: j
    } = e,
    w = (0, c.e7)([h.default], () => h.default.getDevicesForPlatform(g), [g]),
    x = (0, c.e7)([h.default], () => h.default.getLastSelectedDeviceByPlatform(g)),
    P = i.useMemo(() => Object.values(w), [w]),
    S = (0, c.e7)([h.default], () => h.default.getFetchingDevices(g)),
    D = (0, c.e7)([h.default], () => {
      var e;
      return null == (e = h.default.getAwaitingRemoteSessionInfo()) ? true : e.deviceId
    }),
    [N, k] = i.useState(false),
    [I, Z] = i.useState(() => {
      var e, t;
      return null != (t = null == (e = w[null != D ? D : ""]) ? true : e.id) ? t : null
    });
  i.useEffect(() => {
    C.LO(g)
  }, [g]), i.useEffect(() => {
    1 === P.length ? Z(P[0].id) : null != x && Z(x)
  }, [P, x]);
  let E = async () => {
    let e = w[null != I ? I : ""];
    o()(null != e, "Cannot transfer without selected device");
    try {
      k(true), await C.sh(g, e.id, p), j()
    } catch (t) {
      k(false), f.Z.show({
        title: v.intl.string(v.t.QL1y93),
        body: v.intl.formatToPlainString(v.t["6ZyNH/"], {
          deviceName: e.name
        })
      })
    }
  };
  return S ? (n = v.intl.string(v.t["+d9SH8"]), t = (0, r.jsx)("div", {
    className: b.spinnerContainer,
    children: (0, r.jsx)(u.$jN, {})
  })) : 0 === P.length ? (n = v.intl.string(v.t.OkJf1e), l = v.intl.string(v.t["of/l5Z"]), t = (0, r.jsx)(y, {})) : (n = v.intl.string(v.t["+d9SH8"]), l = v.intl.string(v.t["5DtaWg"]), d = [{
    text: v.intl.string(v.t.FJR4bD),
    onClick: E,
    loading: N || null != D,
    disabled: null == I
  }], t = (0, r.jsx)(m, {
    devices: P,
    selectedDeviceId: I,
    onSelectDeviceId: e => {
      Z(e), (0, C.bp)(g, e)
    }
  })), (0, r.jsx)(a.Modal, {
    title: n,
    subtitle: l,
    actions: d,
    transitionState: O,
    trackingProps: {
      impression: {
        impressionName: s.ImpressionNames.GAME_CONSOLE_DEVICE_LIST
      }
    },
    onClose: j,
    children: t
  })
}