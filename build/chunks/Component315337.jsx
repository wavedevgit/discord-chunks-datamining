/** Chunk was on 71282 **/
/** chunk id: 315337, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk110259 = require("./110259.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk565787 = require("./565787.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk801264 = require("./801264.jsx"),
  Chunk521361 = require("./521361.jsx"),
  Chunk108713 = require("./108713.js"),
  Chunk643501 = require("./643501.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk551385 = require("./551385.js"),
  Chunk94939 = require("./94939.js");
let O = (0, Chunk565787.k)(Chunk521361.A);

function j(e) {
  let {
    devices: t,
    selectedDeviceId: n,
    onSelectDeviceId: l
  } = e, i = t.map(e => {
    let {
      id: t,
      name: n
    } = e;
    return {
      value: t,
      name: n,
      leadingIcon: O
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.z6M, {
      value: n,
      options: i,
      onChange: e => l(e)
    }), (0, r.jsx)(p.A, {
      children: h.intl.string(h.t.dI4HFq)
    })]
  })
}

function m() {
  return (0, r.jsx)("div", {
    className: C.jK,
    children: (0, r.jsx)("img", {
      src: v,
      width: "189",
      height: "177",
      alt: ""
    })
  })
}

function w(e) {
  let t, n, i, d, {
      channel: p,
      platform: b,
      transitionState: v,
      onClose: O
    } = e,
    w = (0, c.bG)([y.default], () => y.default.getDevicesForPlatform(b), [b]),
    x = (0, c.bG)([y.default], () => y.default.getLastSelectedDeviceByPlatform(b)),
    P = l.useMemo(() => Object.values(w), [w]),
    S = (0, c.bG)([y.default], () => y.default.getFetchingDevices(b)),
    D = (0, c.bG)([y.default], () => {
      var e;
      return null == (e = y.default.getAwaitingRemoteSessionInfo()) ? true : e.deviceId
    }),
    [I, E] = l.useState(false),
    [N, R] = l.useState(() => {
      var e, t;
      return null != (e = null == (t = w[null != D ? D : ""]) ? true : t.id) ? e : null
    });
  l.useEffect(() => {
    g.Uc(b)
  }, [b]), l.useEffect(() => {
    1 === P.length ? R(P[0].id) : null != x && R(x)
  }, [P, x]);
  let k = async () => {
    let e = w[null != N ? N : ""];
    o()(null != e, "Cannot transfer without selected device");
    try {
      E(true), await g.VP(b, e.id, p), O()
    } catch (t) {
      E(false), f.A.show({
        title: h.intl.string(h.t.QL1y93),
        body: h.intl.formatToPlainString(h.t["6ZyNH/"], {
          deviceName: e.name
        })
      })
    }
  };
  return S ? (n = h.intl.string(h.t["+d9SH8"]), t = (0, r.jsx)("div", {
    className: C.dc,
    children: (0, r.jsx)(u.y$y, {})
  })) : 0 === P.length ? (n = h.intl.string(h.t.OkJf1e), i = h.intl.string(h.t["of/l5Z"]), t = (0, r.jsx)(m, {})) : (n = h.intl.string(h.t["+d9SH8"]), i = h.intl.string(h.t["5DtaWg"]), d = [{
    text: h.intl.string(h.t.FJR4bD),
    onClick: k,
    loading: I || null != D,
    disabled: null == N
  }], t = (0, r.jsx)(j, {
    devices: P,
    selectedDeviceId: N,
    onSelectDeviceId: e => {
      R(e), (0, g.Jm)(b, e)
    }
  })), (0, r.jsx)(a.Modal, {
    title: n,
    subtitle: i,
    actions: d,
    transitionState: v,
    trackingProps: {
      impression: {
        impressionName: s.ImpressionNames.GAME_CONSOLE_DEVICE_LIST
      }
    },
    onClose: O,
    children: t
  })
}