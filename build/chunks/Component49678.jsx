/** Chunk was on 36419 **/
/** chunk id: 49678, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  MessageReminderEditMenu: () => d,
  S: () => u
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk164684 = require("./164684.jsx"),
  Chunk181504 = require("./181504.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    createReminder: t
  } = e, o = a.useCallback(() => {
    (0, i.mMO)(async () => {
      let {
        default: e
      } = await r.e("49208").then(r.bind(r, 148216));
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
    let e = s.b.map(e => {
      let {
        getDueAt: r,
        getLabel: a
      } = e;
      return (0, n.jsx)(i.Drp, {
        id: "create-reminder-".concat(a()),
        label: a(),
        action: () => t(r())
      }, "create-reminder-".concat(a()))
    });
    return e.push((0, n.jsx)(i.Drp, {
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
    createReminder: e => (0, c.Y)({
      channelId: t.channel_id,
      messageId: t.id,
      dueAt: e
    })
  });
  return (0, n.jsx)(i.W1t, {
    "data-menu-migrated-auto": true,
    navId: "message-reminder-create",
    onClose: o.Z_,
    "aria-label": l.intl.string(l.t.mJ3P0N),
    onSelect: () => null,
    children: (0, n.jsx)(i.rXV, {
      label: r,
      children: a
    })
  })
}