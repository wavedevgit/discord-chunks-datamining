/** Chunk was on web.js **/
/** chunk id: 587243, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => y,
  I: () => O
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
let m = [{
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
  g = "forever";

function E(e, t) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
}

function b(e) {
  let {
    status: t,
    currentStatus: n,
    description: i
  } = e, {
    showTempStatusOptions: s
  } = o.Y.useExperiment({
    location: "UserProfileAccountPopout"
  }), l = s && t !== _.Skl.ONLINE, c = (0, r.jsx)(r.Fragment, {
    children: m.map(e => {
      let {
        duration: i,
        label: o
      } = e;
      return (0, r.jsx)(a.sNh, {
        id: "".concat(t, "-").concat(i),
        label: o(),
        action: () => (0, f.Z)({
          nextStatus: t,
          prevStatus: n,
          durationMillis: i
        }),
        dontCloseOnAction: true
      }, null != i ? i : g)
    })
  });
  return (0, r.jsx)(a.sNh, {
    id: t,
    className: h.expiringStatusMenuItem,
    keepItemStyles: true,
    hasSubmenu: l,
    label: e => {
      let {
        isFocused: n
      } = e;
      return (0, r.jsxs)("div", {
        className: h.statusItem,
        children: [(0, r.jsx)(a.qbd, {
          status: t,
          className: h.icon,
          size: 10,
          color: n ? "currentColor" : true
        }), (0, r.jsx)("div", {
          className: h.status,
          children: (0, d.u5)(t)
        }), null != i && (0, r.jsx)("div", {
          className: h.description,
          children: i
        })]
      })
    },
    action: () => {
      (0, f.Z)({
        nextStatus: t,
        prevStatus: n
      })
    },
    dontCloseOnAction: true,
    children: l ? c : true
  })
}

function y(e) {
  if (null == e || "0" === e) return;
  let t = new Date(Number(e)),
    n = E(t, new Date),
    r = new Date;
  r.setDate(r.getDate() + 1);
  let i = E(t, r);
  return n ? p.intl.formatToPlainString(p.t.ZxxHIC, {
    timeString: p.intl.data.formatTime(t, {
      format: "short"
    })
  }) : p.intl.formatToPlainString(p.t["9OFjSU"], {
    dateString: i ? p.intl.data.formatRelativeTime(1, "day", {
      numeric: "auto"
    }) : p.intl.data.formatDate(t, {
      dateStyle: "short"
    }),
    timeString: p.intl.data.formatTime(t, {
      format: "short"
    })
  })
}

function O(e) {
  let {
    hasNewStrings: t
  } = o.Y.useExperiment({
    location: "UserProfileAccountPopout"
  }), n = c.Cr.useSetting(), u = (0, s.p)(), d = l.e.useExperiment({
    location: "UserProfileAccountPopout"
  }).allowQuietMode || u, f = c.fv.useSetting(), E = e === _.Skl.DND, O = r => {
    let i = y(n);
    if (e === r && null != i) return i;
    switch (r) {
      case _.Skl.DND:
        return d ? p.intl.string(p.t.day5Aw) : t ? p.intl.string(p.t["tq/fMD"]) : p.intl.string(p.t.U9Vv19);
      case _.Skl.INVISIBLE:
        return t ? p.intl.string(p.t.zPc6MT) : p.intl.string(p.t.MqanVF);
      default:
        return
    }
  }, v = (0, r.jsx)(r.Fragment, {
    children: m.map(t => {
      let {
        duration: n,
        label: i
      } = t;
      return (0, r.jsx)(a.sNh, {
        id: "".concat(e, "-").concat(n),
        label: i(),
        action: () => {
          (0, s.oW)(true, n)
        },
        dontCloseOnAction: true
      }, null != n ? n : g)
    })
  }), I = b({
    status: _.Skl.ONLINE,
    currentStatus: e
  }), S = b({
    status: _.Skl.IDLE,
    currentStatus: e,
    description: O(_.Skl.IDLE)
  }), T = b({
    status: _.Skl.DND,
    currentStatus: e,
    description: O(_.Skl.DND)
  }), A = b({
    status: _.Skl.INVISIBLE,
    currentStatus: e,
    description: O(_.Skl.INVISIBLE)
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [I, (0, r.jsx)(a.Clw, {}, "menu-separator-statuses"), S, T, A, d || u ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.Clw, {}, "menu-separator-statuses"), (0, r.jsx)(a.sNh, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: h.expiringStatusMenuItem,
        keepItemStyles: true,
        hasSubmenu: true,
        label: () => (0, r.jsxs)("div", {
          className: h.statusItem,
          children: [(0, r.jsx)(a.owu, {
            size: "xxs",
            className: h.icon
          }), (0, r.jsxs)("div", {
            className: h.focusModeTitle,
            children: [p.intl.string(p.t.gJRnwM), (0, r.jsx)(a.IGR, {
              text: u ? p.intl.string(p.t.ApAu9f) : E ? p.intl.string(p.t.gH3Fra) : p.intl.string(p.t["64pl8/"]),
              color: u ? i.Z.BRAND_500 : E ? i.Z.RED_400 : i.Z.PRIMARY_500
            })]
          }), (0, r.jsx)("div", {
            className: h.description,
            children: u && null != f && "0" !== f ? p.intl.formatToPlainString(p.t.BWD8fn, {
              endTime: new Date(Number(f)).toLocaleString(p.intl.currentLocale, {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : p.intl.string(p.t["Br1q+/"])
          })]
        }),
        action: () => {
          (0, s.oW)(!u)
        },
        dontCloseOnAction: true,
        children: v
      }, "quiet-mode")]
    }) : null]
  })
}