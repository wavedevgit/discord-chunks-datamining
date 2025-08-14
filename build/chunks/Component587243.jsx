/** Chunk was on 7384 **/
/** chunk id: 587243, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => j,
  I: () => E
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
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

function x(e, t) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
}

function _(e) {
  let {
    status: t,
    currentStatus: n,
    description: r
  } = e, {
    showTempStatusOptions: l
  } = a.Y.useExperiment({
    location: "UserProfileAccountPopout"
  }), o = l && t !== p.Skl.ONLINE, c = (0, i.jsx)(i.Fragment, {
    children: f.map(e => {
      let {
        duration: r,
        label: a
      } = e;
      return (0, i.jsx)(s.sNh, {
        id: "".concat(t, "-").concat(r),
        label: a(),
        action: () => (0, m.Z)({
          nextStatus: t,
          prevStatus: n,
          durationMillis: r
        }),
        dontCloseOnAction: true
      }, null != r ? r : b)
    })
  });
  return (0, i.jsx)(s.sNh, {
    id: t,
    className: h.expiringStatusMenuItem,
    keepItemStyles: true,
    hasSubmenu: o,
    label: e => {
      let {
        isFocused: n
      } = e;
      return (0, i.jsxs)("div", {
        className: h.statusItem,
        children: [(0, i.jsx)(s.qbd, {
          status: t,
          className: h.icon,
          size: 10,
          color: n ? "currentColor" : true
        }), (0, i.jsx)("div", {
          className: h.status,
          children: (0, u.u5)(t)
        }), null != r && (0, i.jsx)("div", {
          className: h.description,
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
    n = x(t, new Date),
    i = new Date;
  i.setDate(i.getDate() + 1);
  let r = x(t, i);
  return n ? g.intl.formatToPlainString(g.t.ZxxHIC, {
    timeString: g.intl.data.formatTime(t, {
      format: "short"
    })
  }) : g.intl.formatToPlainString(g.t["9OFjSU"], {
    dateString: r ? g.intl.data.formatRelativeTime(1, "day", {
      numeric: "auto"
    }) : g.intl.data.formatDate(t, {
      dateStyle: "short"
    }),
    timeString: g.intl.data.formatTime(t, {
      format: "short"
    })
  })
}

function E(e) {
  let {
    hasNewStrings: t
  } = a.Y.useExperiment({
    location: "UserProfileAccountPopout"
  }), n = c.Cr.useSetting(), d = (0, l.p)(), u = o.e.useExperiment({
    location: "UserProfileAccountPopout"
  }).allowQuietMode || d, m = c.fv.useSetting(), x = e === p.Skl.DND, E = i => {
    let r = j(n);
    if (e === i && null != r) return r;
    switch (i) {
      case p.Skl.DND:
        return u ? g.intl.string(g.t.day5Aw) : t ? g.intl.string(g.t["tq/fMD"]) : g.intl.string(g.t.U9Vv19);
      case p.Skl.INVISIBLE:
        return t ? g.intl.string(g.t.zPc6MT) : g.intl.string(g.t.MqanVF);
      default:
        return
    }
  }, C = (0, i.jsx)(i.Fragment, {
    children: f.map(t => {
      let {
        duration: n,
        label: r
      } = t;
      return (0, i.jsx)(s.sNh, {
        id: "".concat(e, "-").concat(n),
        label: r(),
        action: () => {
          (0, l.oW)(true, n)
        },
        dontCloseOnAction: true
      }, null != n ? n : b)
    })
  }), O = _({
    status: p.Skl.ONLINE,
    currentStatus: e
  }), v = _({
    status: p.Skl.IDLE,
    currentStatus: e,
    description: E(p.Skl.IDLE)
  }), S = _({
    status: p.Skl.DND,
    currentStatus: e,
    description: E(p.Skl.DND)
  }), T = _({
    status: p.Skl.INVISIBLE,
    currentStatus: e,
    description: E(p.Skl.INVISIBLE)
  });
  return (0, i.jsxs)(i.Fragment, {
    children: [O, (0, i.jsx)(s.Clw, {}, "menu-separator-statuses"), v, S, T, u || d ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(s.Clw, {}, "menu-separator-statuses"), (0, i.jsx)(s.sNh, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: h.expiringStatusMenuItem,
        keepItemStyles: true,
        hasSubmenu: true,
        label: () => (0, i.jsxs)("div", {
          className: h.statusItem,
          children: [(0, i.jsx)(s.owu, {
            size: "xxs",
            className: h.icon
          }), (0, i.jsxs)("div", {
            className: h.focusModeTitle,
            children: [g.intl.string(g.t.gJRnwM), (0, i.jsx)(s.IGR, {
              text: d ? g.intl.string(g.t.ApAu9f) : x ? g.intl.string(g.t.gH3Fra) : g.intl.string(g.t["64pl8/"]),
              color: d ? r.Z.BRAND_500 : x ? r.Z.RED_400 : r.Z.PRIMARY_500
            })]
          }), (0, i.jsx)("div", {
            className: h.description,
            children: d && null != m && "0" !== m ? g.intl.formatToPlainString(g.t.BWD8fn, {
              endTime: new Date(Number(m)).toLocaleString(g.intl.currentLocale, {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : g.intl.string(g.t["Br1q+/"])
          })]
        }),
        action: () => {
          (0, l.oW)(!d)
        },
        dontCloseOnAction: true,
        children: C
      }, "quiet-mode")]
    }) : null]
  })
}