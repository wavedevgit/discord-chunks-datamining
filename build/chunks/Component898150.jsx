/** Chunk was on 69818 **/
/** chunk id: 898150, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  MessageReminderEditMenu: () => d,
  r: () => u
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk324701 = require("./324701.jsx"),
  Chunk550727 = require("./550727.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    createReminder: t
  } = e, o = a.useCallback(() => {
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await r.e("43866").then(r.bind(r, 423639));
      return r => {
        var a, i;
        return (0, n.jsx)(e, (a = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, r), i = i = {
          createReminder: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e))
        }), a))
      }
    })
  }, [t]);
  return a.useMemo(() => {
    let e = s.B.map(e => {
      let {
        getDueAt: r,
        getLabel: a
      } = e;
      return (0, n.jsx)(i.sNh, {
        id: "create-reminder-".concat(a()),
        label: a(),
        action: () => t(r())
      }, "create-reminder-".concat(a()))
    });
    return e.push((0, n.jsx)(i.sNh, {
      id: "create-reminder-custom",
      label: l.intl.string(l.t.OLA8Zi),
      action: o
    }, "custom")), e
  }, [t, o])
}

function d(e) {
  let {
    message: t,
    label: r
  } = e, a = u({
    createReminder: e => (0, c.z)({
      channelId: t.channel_id,
      messageId: t.id,
      dueAt: e
    })
  });
  return (0, n.jsx)(i.v2r, {
    navId: "message-reminder-create",
    onClose: o.Zy,
    "aria-label": l.intl.string(l.t.mJ3P0N),
    onSelect: () => null,
    children: (0, n.jsx)(i.kSQ, {
      label: r,
      children: a
    })
  })
}