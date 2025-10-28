/** Chunk was on 32945 **/
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
    label: () => Chunk388032.intl.string(Chunk388032.t["8ot6gv"])
  }, {
    duration: Chunk70956.Z.Millis.HOUR,
    label: () => Chunk388032.intl.string(Chunk388032.t.UMWBZr)
  }, {
    duration: 8 * Chunk70956.Z.Millis.HOUR,
    label: () => Chunk388032.intl.string(Chunk388032.t.EpAXPC)
  }, {
    duration: Chunk70956.Z.Millis.DAY,
    label: () => Chunk388032.intl.string(Chunk388032.t["755t4q"])
  }, {
    duration: 3 * Chunk70956.Z.Millis.DAY,
    label: () => Chunk388032.intl.string(Chunk388032.t["f3/1ch"])
  }, {
    duration: true,
    label: () => Chunk388032.intl.string(Chunk388032.t["46dqJY"])
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
    showTempStatusOptions: o
  } = i.Y.useExperiment({
    location: "UserProfileAccountPopout"
  }), s = o && t !== p.Skl.ONLINE, c = (0, a.jsx)(a.Fragment, {
    children: f.map(e => {
      let {
        duration: r,
        label: i
      } = e;
      return (0, a.jsx)(l.sNh, {
        id: "".concat(t, "-").concat(r),
        label: i(),
        action: () => (0, m.Z)({
          nextStatus: t,
          prevStatus: n,
          durationMillis: r
        }),
        dontCloseOnAction: true
      }, null != r ? r : b)
    })
  });
  return (0, a.jsx)(l.sNh, {
    id: t,
    className: x.expiringStatusMenuItem,
    keepItemStyles: true,
    hasSubmenu: s,
    label: e => {
      let {
        isFocused: n
      } = e;
      return (0, a.jsxs)("div", {
        className: x.statusItem,
        children: [(0, a.jsx)(l.qbd, {
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
    children: s ? c : true
  })
}

function j(e) {
  if (null == e || "0" === e) return;
  let t = new Date(Number(e)),
    n = g(t, new Date),
    a = new Date;
  a.setDate(a.getDate() + 1);
  let r = g(t, a);
  return n ? h.intl.formatToPlainString(h.t.ZxxHIO, {
    timeString: h.intl.data.formatTime(t, {
      format: "short"
    })
  }) : h.intl.formatToPlainString(h.t["9OFjSe"], {
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
  } = i.Y.useExperiment({
    location: "UserProfileAccountPopout"
  }), n = c.Cr.useSetting(), d = (0, o.p)(), u = s.e.useExperiment({
    location: "UserProfileAccountPopout"
  }).allowQuietMode || d, m = c.fv.useSetting(), g = e === p.Skl.DND, _ = a => {
    let r = j(n);
    if (e === a && null != r) return r;
    switch (a) {
      case p.Skl.DND:
        return u ? h.intl.string(h.t.day5A6) : t ? h.intl.string(h.t["tq/fMK"]) : h.intl.string(h.t.U9Vv16);
      case p.Skl.INVISIBLE:
        return t ? h.intl.string(h.t.zPc6Mc) : h.intl.string(h.t.MqanVP);
      default:
        return
    }
  }, y = (0, a.jsx)(a.Fragment, {
    children: f.map(t => {
      let {
        duration: n,
        label: r
      } = t;
      return (0, a.jsx)(l.sNh, {
        id: "".concat(e, "-").concat(n),
        label: r(),
        action: () => {
          (0, o.oW)(true, n)
        },
        dontCloseOnAction: true
      }, null != n ? n : b)
    })
  }), C = v({
    status: p.Skl.ONLINE,
    currentStatus: e
  }), S = v({
    status: p.Skl.IDLE,
    currentStatus: e,
    description: _(p.Skl.IDLE)
  }), E = v({
    status: p.Skl.DND,
    currentStatus: e,
    description: _(p.Skl.DND)
  }), T = v({
    status: p.Skl.INVISIBLE,
    currentStatus: e,
    description: _(p.Skl.INVISIBLE)
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [C, (0, a.jsx)(l.Clw, {}, "menu-separator-statuses"), S, E, T, u || d ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.Clw, {}, "menu-separator-statuses"), (0, a.jsx)(l.sNh, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: x.expiringStatusMenuItem,
        keepItemStyles: true,
        hasSubmenu: true,
        label: () => (0, a.jsxs)("div", {
          className: x.statusItem,
          children: [(0, a.jsx)(l.owu, {
            size: "xxs",
            className: x.icon
          }), (0, a.jsxs)("div", {
            className: x.focusModeTitle,
            children: [h.intl.string(h.t.gJRnwK), (0, a.jsx)(l.IGR, {
              text: d ? h.intl.string(h.t.ApAu9f) : g ? h.intl.string(h.t.gH3Frd) : h.intl.string(h.t["64pl82"]),
              color: d ? r.Z.BRAND_500 : g ? r.Z.RED_400 : r.Z.PRIMARY_500
            })]
          }), (0, a.jsx)("div", {
            className: x.description,
            children: d && null != m && "0" !== m ? h.intl.formatToPlainString(h.t.BWD8fs, {
              endTime: new Date(Number(m)).toLocaleString(h.intl.currentLocale, {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : h.intl.string(h.t["Br1q+x"])
          })]
        }),
        action: () => {
          (0, o.oW)(!d)
        },
        dontCloseOnAction: true,
        children: y
      }, "quiet-mode")]
    }) : null]
  })
}