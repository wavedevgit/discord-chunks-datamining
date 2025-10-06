/** Chunk was on 638 **/
/** chunk id: 543974, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk961842 = require("./961842.jsx"),
  Chunk254238 = require("./254238.js"),
  Chunk258609 = require("./258609.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk163589 = require("./163589.js"),
  Chunk505913 = require("./505913.js");

function j(e) {
  let {
    name: t,
    subText: n
  } = e;
  return (0, i.jsxs)("div", {
    className: C.deviceItemName,
    children: [(0, i.jsx)(v.Z, {
      className: C.deviceItemIcon
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(u.Text, {
        variant: "text-md/semibold",
        color: "interactive-active",
        children: t
      }), n]
    })]
  })
}

function O(e) {
  let {
    devices: t,
    selectedDeviceId: n,
    onSelectDeviceId: r
  } = e, l = t.map(e => {
    let {
      id: t,
      name: n,
      platform: r
    } = e;
    return {
      value: t,
      name: (0, i.jsx)(j, {
        name: n,
        platform: r
      })
    }
  });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(d.Gu, {
      radioPosition: "right",
      radioItemClassName: C.deviceItem,
      size: d.l7.NOT_SET,
      value: n,
      options: l,
      onChange: e => {
        let {
          value: t
        } = e;
        return r(t)
      }
    }), (0, i.jsx)(p.Z, {
      children: g.intl.string(g.t.dI4HFh)
    })]
  })
}

function y() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk163589.emptyArt,
    children: (0, Chunk951288.jsx)("img", {
      src: Chunk505913,
      width: "189",
      height: "177",
      alt: ""
    })
  })
}

function x(e) {
  let t, n, l, d, {
      channel: p,
      platform: v,
      transitionState: b,
      onClose: j
    } = e,
    x = (0, c.e7)([h.Z], () => h.Z.getDevicesForPlatform(v), [v]),
    I = (0, c.e7)([h.Z], () => h.Z.getLastSelectedDeviceByPlatform(v)),
    w = r.useMemo(() => Object.values(x), [x]),
    N = (0, c.e7)([h.Z], () => h.Z.getFetchingDevices(v)),
    P = (0, c.e7)([h.Z], () => {
      var e;
      return null == (e = h.Z.getAwaitingRemoteSessionInfo()) ? true : e.deviceId
    }),
    [S, Z] = r.useState(false),
    [_, D] = r.useState(() => {
      var e, t;
      return null != (t = null == (e = x[null != P ? P : ""]) ? true : e.id) ? t : null
    });
  r.useEffect(() => {
    m.LO(v)
  }, [v]), r.useEffect(() => {
    1 === w.length ? D(w[0].id) : null != I && D(I)
  }, [w, I]);
  let k = async () => {
    let e = x[null != _ ? _ : ""];
    s()(null != e, "Cannot transfer without selected device");
    try {
      Z(true), await m.sh(v, e.id, p), j()
    } catch (t) {
      Z(false), f.Z.show({
        title: g.intl.string(g.t["QL1y9/"]),
        body: g.intl.formatToPlainString(g.t["6ZyNHx"], {
          deviceName: e.name
        })
      })
    }
  };
  return N ? (n = g.intl.string(g.t["+d9SHx"]), t = (0, i.jsx)("div", {
    className: C.spinnerContainer,
    children: (0, i.jsx)(u.$jN, {})
  })) : 0 === w.length ? (n = g.intl.string(g.t.OkJf1d), l = g.intl.string(g.t["of/l5e"]), t = (0, i.jsx)(y, {})) : (n = g.intl.string(g.t["+d9SHx"]), l = g.intl.string(g.t["5DtaWl"]), d = [{
    text: g.intl.string(g.t.FJR4bG),
    onClick: k,
    loading: S || null != P,
    disabled: null == _
  }], t = (0, i.jsx)(O, {
    devices: w,
    selectedDeviceId: _,
    onSelectDeviceId: e => {
      D(e), (0, m.bp)(v, e)
    }
  })), (0, i.jsx)(a.Modal, {
    title: n,
    subtitle: l,
    actions: d,
    transitionState: b,
    trackingProps: {
      impression: {
        impressionName: o.ImpressionNames.GAME_CONSOLE_DEVICE_LIST
      }
    },
    onClose: j,
    children: t
  })
}