/** Chunk was on 65298 **/
/** chunk id: 547798, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./65821.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk141931 = require("./141931.js"),
  Chunk562465 = require("./562465.js"),
  Chunk306173 = require("./306173.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk787880 = require("./787880.jsx"),
  Chunk796104 = require("./796104.js"),
  Chunk146104 = require("./146104.jsx"),
  Chunk142120 = require("./142120.js"),
  Chunk69555 = require("./69555.js"),
  Chunk237984 = require("./237984.jsx"),
  Chunk349435 = require("./349435.js"),
  Chunk674272 = require("./674272.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk559248 = require("./559248.jsx"),
  Chunk179690 = require("./179690.jsx"),
  Chunk309010 = require("./309010.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js"),
  Chunk327337 = require("./327337.js"),
  Chunk431804 = require("./431804.js"),
  Chunk229988 = require("./229988.js"),
  Chunk473169 = require("./473169.js");

function w() {
  throw Error("Send help")
}

function I() {
  let e = j.j0.useSetting(),
    [t, r] = l.useState(false);
  return t ? {} : (0, a.jsxs)(d.HOs, {
    children: [(0, a.jsx)("div", {
      className: i()(E.N, N.SX),
      children: (0, a.jsx)(_.M, {})
    }), (0, a.jsx)("div", {
      className: i()(E.N, N.QB),
      children: (0, a.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: "Launch Vibing Wumpus",
        onClick: () => (0, v.A)({
          source: T.y.KEYBIND
        })
      })
    }), (0, a.jsx)("div", {
      className: i()(E.N, N.QB),
      children: (0, a.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: "Launch Safety Tools Modal",
        onClick: () => {
          let e, t;
          return t = null != (e = A.A.getChannelId()) ? e : "21154681615024128", void(0, d.mMO)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("45033"), n.e("46717"), n.e("54105")]).then(n.bind(n, 788099));
            return n => (0, a.jsx)(e, function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  a = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), a.forEach(function(t) {
                  var a;
                  a = n[t], t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = a
                })
              }
              return e
            }({
              otherUserId: "9876543210",
              channelId: t,
              warningId: "test-warning-id",
              warningType: b._j.INAPPROPRIATE_CONVERSATION_TIER_2
            }, n))
          }, {
            modalKey: O.V
          })
        }
      })
    }), (0, a.jsx)("div", {
      className: i()(E.N, N.QB),
      children: (0, a.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: "Launch Clicker Game",
        onClick: () => (0, h.A)("devtools")
      })
    }), (0, a.jsx)("div", {
      className: i()(E.N, N.QB),
      children: (0, a.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: "Launch Captcha Test Tool",
        onClick: () => (0, m.g)()
      })
    }), (0, a.jsx)("div", {
      className: i()(E.N, N.QB),
      children: (0, a.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: "Reset Hang Status State",
        onClick: g.B7
      })
    }), (0, a.jsx)("div", {
      className: i()(E.N, N.QB),
      children: (0, a.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: "Force libdiscore Crash",
        onClick: c.Oy
      })
    }), (0, a.jsx)("div", {
      className: i()(E.N, N.QB),
      children: (0, a.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: "Reset to fake checkpoint",
        onClick: () => (0, p.nX)(true)
      })
    }), (0, a.jsx)("div", {
      className: i()(E.N, N.QB),
      children: (0, a.jsx)(d.dOG, {
        label: "Ignore profile speedbump disabled",
        checked: e,
        onChange: e => j.j0.updateSetting(e)
      })
    }), (0, a.jsxs)("div", {
      className: i()(E.N, N.QB),
      children: [(0, a.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: "Open Overlay",
        onClick: () => (0, f.o)()
      }), (0, a.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: "Reset Socket",
        onClick: () => {
          x.A.getSocket().close(), x.A.getSocket().connect()
        }
      }), (0, a.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: "Clear Caches",
        onClick: () => {
          u.h.dispatch({
            type: "CLEAR_CACHES",
            reason: "Requested by user",
            preventWritingCachesAgainThisSession: true,
            resetSocket: true
          })
        }
      }), (0, a.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: "Show TOTP Success",
        onClick: () => (0, y.sy)(true)
      }), (0, a.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: "Trigger Suspicious Sessions Notifications",
        onClick: () => {
          o.Bo.post({
            url: S.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG,
            rejectWithError: true
          })
        }
      })]
    }), (0, a.jsxs)("div", {
      className: i()(E.N, N.QB),
      children: [(0, a.jsx)(d.l6P, {
        label: "Trigger native crash",
        hideLabel: true,
        selectionMode: "single",
        value: true,
        options: [{
          label: "Native libdiscord crash",
          value: true,
          id: "libdiscord"
        }, {
          label: "Abort()",
          value: 0,
          id: "abort"
        }, {
          label: "SIGSEGV()",
          value: 1,
          id: "sigsegv"
        }, {
          label: "EXCEPTION_ACCESS_VIOLATION",
          value: 2,
          id: "exception_access_violation"
        }, {
          label: "RaiseFailFastException",
          value: 3,
          id: "raise_fail_fast_exception"
        }, {
          label: "Out of Memory",
          value: 4,
          id: "out_of_memory"
        }],
        onSelectionChange: e => null != e && C.Ay.crash(e)
      }), (0, a.jsx)(d.l6P, {
        label: "Trigger JS crash",
        hideLabel: true,
        selectionMode: "single",
        value: true,
        options: [{
          label: "Native JS crash",
          value: true,
          id: "native_js_crash"
        }, {
          label: "Delayed exception in renderer process",
          value: s.qQ.RendererProcessDelayed,
          id: "delayed_exception_in_renderer_process"
        }, {
          label: "Exception in renderer process",
          value: s.qQ.RendererProcess,
          id: "exception_in_renderer_process"
        }, {
          label: "Exception in main process",
          value: s.qQ.MainProcess,
          id: "exception_in_main_process"
        }],
        onSelectionChange: e => null != e ? void C.Ay.triggerJSException(e) : true
      }), (0, a.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: "React Crash",
        onClick: () => r(true)
      }), (0, a.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: "onClick Throw",
        onClick: w
      })]
    })]
  })
}