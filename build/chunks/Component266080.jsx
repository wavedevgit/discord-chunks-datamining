/** Chunk was on 55777 **/
/** chunk id: 266080, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk434404 = require("./434404.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let _ = e => {
  let {
    guildId: t,
    reportId: n
  } = e, [_, m] = i.useState(false), p = c.Z.getGuild(t), f = null != p;
  i.useEffect(() => {
    m(!f)
  }, [f]);
  let g = i.useCallback(() => {
    m(true), l.ZP.trackWithMetadata(d.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
      guild_id: t,
      report_id: n
    }), o.Z.leaveGuild(t)
  }, [t, n]);
  return null == p ? null : (0, r.jsx)(s.JZ, {
    title: u.intl.string(u.t.cU96io),
    description: u.intl.formatToPlainString(u.t["26mR6+"], {
      guildName: null == p ? true : p.name
    }),
    buttonText: _ ? u.intl.string(u.t["9Ak99v"]) : u.intl.string(u.t.F3qExs),
    buttonDisabled: _,
    buttonVariant: "critical-primary",
    onButtonPress: () => {
      (0, a.h7j)(e => {
        var t, n;
        return (0, r.jsx)(a.ConfirmModal, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({
          header: u.intl.formatToPlainString(u.t["1GX6Pz"], {
            name: p.name
          }),
          confirmText: u.intl.string(u.t.J2TBi4),
          cancelText: u.intl.string(u.t["ETE/oK"]),
          onConfirm: g
        }, e), n = n = {
          children: (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: u.intl.format(u.t.ZEXC0t, {
              name: p.name
            })
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      })
    }
  })
}