/** Chunk was on 11222 **/
/** chunk id: 587243, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => j,
  I: () => _
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk722770 = require("./722770.js"),
  Chunk481060 = require("./481060.js"),
  Chunk440051 = require("./440051.js"),
  Chunk734934 = require("./734934.js"),
  Chunk158238 = require("./158238.js"),
  Chunk695346 = require("./695346.js"),
  Chunk70956 = require("./70956.js"),
  Chunk51144 = require("./51144.js"),
  Chunk246133 = require("./246133.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk54482 = require("./54482.js");
let f = [{
    duration: 15 * Chunk70956.Z.Millis.MINUTE,
    label: () => Chunk388032.intl.string(Chunk388032.t["8ot6go"])
  }, {
    duration: Chunk70956.Z.Millis.HOUR,
    label: () => Chunk388032.intl.string(Chunk388032.t.UMWBZm)
  }, {
    duration: 8 * Chunk70956.Z.Millis.HOUR,
    label: () => Chunk388032.intl.string(Chunk388032.t.EpAXPD)
  }, {
    duration: Chunk70956.Z.Millis.DAY,
    label: () => Chunk388032.intl.string(Chunk388032.t["755t4u"])
  }, {
    duration: 3 * Chunk70956.Z.Millis.DAY,
    label: () => Chunk388032.intl.string(Chunk388032.t["f3/1cn"])
  }, {
    duration: true,
    label: () => Chunk388032.intl.string(Chunk388032.t["46dqJS"])
  }],
  b = "forever";

function g(e, t) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
}

function v(e) {
  let {
    status: t,
    currentStatus: n,
    description: r
  } = e, {
    showTempStatusOptions: s
  } = l.Y.useExperiment({
    location: "UserProfileAccountPopout"
  }), o = s && t !== p.Skl.ONLINE, c = (0, a.jsx)(a.Fragment, {
    children: f.map(e => {
      let {
        duration: r,
        label: l
      } = e;
      return (0, a.jsx)(i.sNh, {
        id: "".concat(t, "-").concat(r),
        label: l(),
        action: () => (0, m.Z)({
          nextStatus: t,
          prevStatus: n,
          durationMillis: r
        }),
        dontCloseOnAction: true
      }, null != r ? r : b)
    })
  });
  return (0, a.jsx)(i.sNh, {
    id: t,
    className: x.expiringStatusMenuItem,
    keepItemStyles: true,
    hasSubmenu: o,
    label: e => {
      let {
        isFocused: n
      } = e;
      return (0, a.jsxs)("div", {
        className: x.statusItem,
        children: [(0, a.jsx)(i.qbd, {
          status: t,
          className: x.icon,
          size: 10,
          color: n ? "currentColor" : true
        }), (0, a.jsx)("div", {
          className: x.status,
          children: (0, u.u5)(t)
        }), null != r && (0, a.jsx)("div", {
          className: x.description,
          children: r
        })]
      })
    },
    action: () => {
      (0, m.Z)({
        nextStatus: t,
        prevStatus: n
      })
    },
    dontCloseOnAction: true,
    children: o ? c : true
  })
}

function j(e) {
  if (null == e || "0" === e) return;
  let t = new Date(Number(e)),
    n = g(t, new Date),
    a = new Date;
  a.setDate(a.getDate() + 1);
  let r = g(t, a);
  return n ? h.intl.formatToPlainString(h.t.ZxxHIC, {
    timeString: h.intl.data.formatTime(t, {
      format: "short"
    })
  }) : h.intl.formatToPlainString(h.t["9OFjSU"], {
    dateString: r ? h.intl.data.formatRelativeTime(1, "day", {
      numeric: "auto"
    }) : h.intl.data.formatDate(t, {
      dateStyle: "short"
    }),
    timeString: h.intl.data.formatTime(t, {
      format: "short"
    })
  })
}

function _(e) {
  let {
    hasNewStrings: t
  } = l.Y.useExperiment({
    location: "UserProfileAccountPopout"
  }), n = c.Cr.useSetting(), d = (0, s.p)(), u = o.e.useExperiment({
    location: "UserProfileAccountPopout"
  }).allowQuietMode || d, m = c.fv.useSetting(), g = e === p.Skl.DND, _ = a => {
    let r = j(n);
    if (e === a && null != r) return r;
    switch (a) {
      case p.Skl.DND:
        return u ? h.intl.string(h.t.day5Aw) : t ? h.intl.string(h.t["tq/fMD"]) : h.intl.string(h.t.U9Vv19);
      case p.Skl.INVISIBLE:
        return t ? h.intl.string(h.t.zPc6MT) : h.intl.string(h.t.MqanVF);
      default:
        return
    }
  }, y = (0, a.jsx)(a.Fragment, {
    children: f.map(t => {
      let {
        duration: n,
        label: r
      } = t;
      return (0, a.jsx)(i.sNh, {
        id: "".concat(e, "-").concat(n),
        label: r(),
        action: () => {
          (0, s.oW)(true, n)
        },
        dontCloseOnAction: true
      }, null != n ? n : b)
    })
  }), C = v({
    status: p.Skl.ONLINE,
    currentStatus: e
  }), E = v({
    status: p.Skl.IDLE,
    currentStatus: e,
    description: _(p.Skl.IDLE)
  }), N = v({
    status: p.Skl.DND,
    currentStatus: e,
    description: _(p.Skl.DND)
  }), S = v({
    status: p.Skl.INVISIBLE,
    currentStatus: e,
    description: _(p.Skl.INVISIBLE)
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [C, (0, a.jsx)(i.Clw, {}, "menu-separator-statuses"), E, N, S, u || d ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(i.Clw, {}, "menu-separator-statuses"), (0, a.jsx)(i.sNh, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: x.expiringStatusMenuItem,
        keepItemStyles: true,
        hasSubmenu: true,
        label: () => (0, a.jsxs)("div", {
          className: x.statusItem,
          children: [(0, a.jsx)(i.owu, {
            size: "xxs",
            className: x.icon
          }), (0, a.jsxs)("div", {
            className: x.focusModeTitle,
            children: [h.intl.string(h.t.gJRnwM), (0, a.jsx)(i.IGR, {
              text: d ? h.intl.string(h.t.ApAu9f) : g ? h.intl.string(h.t.gH3Fra) : h.intl.string(h.t["64pl8/"]),
              color: d ? r.Z.BRAND_500 : g ? r.Z.RED_400 : r.Z.PRIMARY_500
            })]
          }), (0, a.jsx)("div", {
            className: x.description,
            children: d && null != m && "0" !== m ? h.intl.formatToPlainString(h.t.BWD8fn, {
              endTime: new Date(Number(m)).toLocaleString(h.intl.currentLocale, {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : h.intl.string(h.t["Br1q+/"])
          })]
        }),
        action: () => {
          (0, s.oW)(!d)
        },
        dontCloseOnAction: true,
        children: y
      }, "quiet-mode")]
    }) : null]
  })
}