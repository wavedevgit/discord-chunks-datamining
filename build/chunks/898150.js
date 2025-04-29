/** Chunk was on 69818 **/
r.d(t, {
  MessageReminderEditMenu: () => d,
  r: () => u
}), r(539854);
var n = r(255367),
  a = r(73800),
  i = r(481060),
  c = r(239091),
  o = r(324701),
  s = r(550727),
  l = r(388032);

function u(e) {
  let {
    createReminder: t
  } = e, c = a.useCallback(() => {
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
                enumerable: !0,
                configurable: !0,
                writable: !0
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
      label: l.intl.string(l.t.OLA8Zm),
      action: c
    }, "custom")), e
  }, [t, c])
}

function d(e) {
  let {
    message: t,
    label: r
  } = e, a = u({
    createReminder: e => (0, o.z)({
      channelId: t.channel_id,
      messageId: t.id,
      dueAt: e
    })
  });
  return (0, n.jsx)(i.v2r, {
    navId: "message-reminder-create",
    onClose: c.Zy,
    "aria-label": l.intl.string(l.t.mJ3P0N),
    onSelect: () => null,
    children: (0, n.jsx)(i.kSQ, {
      label: r,
      children: a
    })
  })
}